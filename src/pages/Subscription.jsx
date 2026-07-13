import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

export default function Subscription() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const [planTypes, setPlanTypes] = useState([]);
  const [selectedPlanType, setSelectedPlanType] = useState(null);
  
  const [availableCoupons, setAvailableCoupons] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [basePrice, setBasePrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [couponError, setCouponError] = useState("");
  
  const [loadingPlans, setLoadingPlans] = useState(true);
  const [applyingCoupon, setApplyingCoupon] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });
  
  const [isAutoPay, setIsAutoPay] = useState(false);
  const [showConsentModal, setShowConsentModal] = useState(false);

  useEffect(() => {
    if (!email) {
      navigate("/");
    }
  }, [email, navigate]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [plansRes, couponsRes, planTypesRes] = await Promise.all([
          fetch(`${API_BASE}/api/v1/subscription/plans`),
          fetch(`${API_BASE}/api/v1/coupon/available`),
          fetch(`${API_BASE}/api/v1/subscription/plan-types`)
        ]);

        const plansData = await plansRes.json();
        const couponsData = await couponsRes.json();
        const planTypesData = await planTypesRes.json();

        const plansList = Array.isArray(plansData) ? plansData : [];
        setPlans(plansList);
        
        let initialPlan = null;
        if (plansList.length > 0) {
          initialPlan = plansList[0];
          setSelectedPlan(initialPlan);
        }

        const typesList = Array.isArray(planTypesData) ? planTypesData : [];
        setPlanTypes(typesList);
        if (typesList.length > 0) {
          setSelectedPlanType(typesList[0]);
        }

        let couponsList = [];
        if (couponsData && Array.isArray(couponsData)) couponsList = couponsData;
        else if (couponsData && couponsData.coupons && Array.isArray(couponsData.coupons)) couponsList = couponsData.coupons;
        else if (couponsData && couponsData.data && Array.isArray(couponsData.data)) couponsList = couponsData.data;
        setAvailableCoupons(couponsList);

      } catch (err) {
        console.error("Failed to load checkout data:", err);
      } finally {
        setLoadingPlans(false);
      }
    };
    
    loadData();
  }, []);

  useEffect(() => {
    if (selectedPlan && selectedPlanType) {
      setCouponCode("");
      setCouponApplied(false);
      setDiscountAmount(0);
      setCouponError("");
      
      // Preview with no coupon to get base price
      fetch(`${API_BASE}/api/v1/coupon/preview`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          plan_id: selectedPlan.id, 
          coupon_code: null,
          plan_type_id: selectedPlanType.id
        })
      })
      .then(r => r.json())
      .then(data => {
        setBasePrice(data.original_price || 0);
        setFinalPrice(data.final_price || 0);
      })
      .catch(() => {});
    }
  }, [selectedPlan, selectedPlanType]);

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "success" }), 4000);
  };

  const applyCouponCode = async (code) => {
    if (!selectedPlan) return;
    
    try {
      setApplyingCoupon(true);
      const res = await fetch(`${API_BASE}/api/v1/coupon/preview`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          plan_id: selectedPlan.id, 
          coupon_code: code,
          plan_type_id: selectedPlanType?.id
        })
      });
      const data = await res.json();
      
      setCouponCode(code);
      setDiscountAmount(data.discount_amount);
      setBasePrice(data.original_price);
      setFinalPrice(data.final_price);
      setCouponApplied(data.coupon_applied);
      setCouponError("");

      if (data.coupon_applied) {
        showToast("Coupon applied!", "success");
      } else {
        setCouponError("Invalid or expired promo code.");
        showToast("Invalid coupon code", "error");
      }
    } catch (err) {
      setCouponError("Invalid or expired promo code.");
      setCouponApplied(false);
      setDiscountAmount(0);
      setFinalPrice(basePrice);
      showToast("Failed to apply coupon", "error");
    } finally {
      setApplyingCoupon(false);
    }
  };

  const handleSkipCoupon = () => {
    if (selectedPlan) {
      setCouponApplied(false);
      setCouponCode("");
      setDiscountAmount(0);
      setFinalPrice(basePrice);
      setCouponError("");
    }
  };

  const toggleCoupon = (code) => {
    if (couponApplied && couponCode === code) {
      handleSkipCoupon();
    } else {
      applyCouponCode(code);
    }
  };

  const executePayment = async () => {
    if (!selectedPlan) {
      showToast("Please select a plan", "error");
      return;
    }

    setLoading(true);
    try {
      // Update registration with plan selection
      await fetch(`${API_BASE}/api/v1/registration/select-plan`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          plan_id: selectedPlan.id,
          coupon_code: couponApplied ? couponCode : null,
          plan_type_id: selectedPlanType?.id
        })
      });

      // Get registration record to get user_id
      const regRes = await fetch(`${API_BASE}/api/v1/registration/resume/${email}`);
      const regData = await regRes.json();

      if (!regData.found || !regData.user_id) {
        showToast("User ID not found", "error");
        return;
      }

      // Free plan or 100% discount: skip payment and show success page
      if (finalPrice === 0) {
        navigate(`/payment-result?free_plan=true&plan_name=${encodeURIComponent(selectedPlan.plan_name)}&email=${encodeURIComponent(email)}`);
        return;
      }

      // Paid plan: initiate checkout
      const checkoutRes = await fetch(`${API_BASE}/api/v1/subscription/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: regData.user_id,
          plan_id: selectedPlan.id,
          plan_type_id: selectedPlanType?.id,
          coupon_code: couponApplied ? couponCode : null
        })
      });

      const checkoutData = await checkoutRes.json();

      // Auto-submit form to PayU
      if (checkoutData.checkout_type === "merchant_hosted" || checkoutData.checkout_type === "hosted" || checkoutData.action_url) {
        localStorage.setItem("register_resume_email", email);

        const form = document.createElement("form");
        form.method = "POST";
        form.action = checkoutData.action_url;
        
        const formFields = checkoutData.checkout_payload || checkoutData.params;
        Object.entries(formFields).forEach(([key, value]) => {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = String(value);
          form.appendChild(input);
        });
        document.body.appendChild(form);
        form.submit();
      } else {
         showToast("Checkout failed: Invalid payload", "error");
      }
    } catch (err) {
      showToast("Checkout failed: " + err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCheckout = () => {
    if (!selectedPlan) {
      showToast("Please select a plan", "error");
      return;
    }
    if (isAutoPay) {
      setShowConsentModal(true);
    } else {
      executePayment();
    }
  };

  const isFreePlan = parseFloat(selectedPlan?.price || 0) === 0;

  if (loadingPlans) {
    return (
      <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center">
        <div className="flex items-center gap-3 text-gray-500">
          <div className="animate-spin rounded-full h-6 w-6 border-2 border-[#0859B8] border-t-transparent"></div>
          <span className="font-semibold text-[#222222]">Loading Checkout...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans p-6 pt-16">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center heading1">Secure Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Card 1: Select Plan */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">1</span>
              Select Plan
            </h2>
            <div className="bg-transparent flex flex-col">
              {plans.map((plan) => {
                const isSelected = selectedPlan?.id === plan.id;
                return (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan)}
                    className={`
                      text-left px-5 py-5 border-b border-gray-200 last:border-b-0 transition-all
                      ${isSelected ? 'bg-blue-50/50 border-l-4 border-l-blue-600 pl-4' : 'hover:bg-gray-50 border-l-4 border-l-transparent pl-4'}
                    `}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className={`font-bold text-base ${isSelected ? 'text-blue-600' : 'text-gray-900'}`}>
                        {plan.plan_name}
                      </span>
                      <span className="font-black text-gray-900 text-base">₹{parseFloat(plan.price).toLocaleString("en-IN")}</span>
                    </div>
                    <div className="text-sm font-medium text-gray-500">{plan.duration_days} Days Access</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card 2: Plan Type */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#E7EB90] text-gray-900 flex items-center justify-center text-xs">2</span>
              Plan Type
            </h2>
            <div className={`bg-transparent flex flex-col space-y-3 pr-2 custom-scrollbar ${selectedPlan && Number(selectedPlan.price) === 0 ? 'opacity-50 pointer-events-none' : ''}`}>
              {planTypes.map((type) => {
                const isSelected = selectedPlanType?.id === type.id;
                
                return (
                  <div 
                    key={type.id} 
                    onClick={() => setSelectedPlanType(type)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${isSelected ? 'border-blue-600 bg-blue-50/50' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-black text-sm text-gray-900 uppercase tracking-wider bg-gray-100 px-2 py-1 rounded border border-gray-200 border-dashed">{type.name}</span>
                      {isSelected && (
                        <span className="text-xs font-bold text-blue-600 flex items-center gap-1 uppercase tracking-widest">
                          <i className="fa-solid fa-check"></i> Selected
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-700 font-medium">
                      Billed for {type.duration_months} month{type.duration_months > 1 ? 's' : ''}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Card 3: Apply Offers */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-gray-300 text-gray-900 flex items-center justify-center text-xs">3</span>
              Apply Offers
            </h2>
            <div className={`bg-transparent flex flex-col ${selectedPlan && Number(selectedPlan.price) === 0 ? 'opacity-50 pointer-events-none' : ''}`}>
              
              <div className="space-y-3 overflow-y-auto pr-2 custom-scrollbar">
                {availableCoupons.length === 0 ? (
                  <p className="text-sm text-gray-500 font-medium">No offers available at the moment.</p>
                ) : (
                  availableCoupons.map((coupon) => {
                    const cCode = coupon.code || coupon.coupon_code;
                    const cType = coupon.discount_type;
                    const cVal = coupon.discount_value;
                    const isDisabled = cType === "FIXED" && selectedPlan && cVal > basePrice;
                    const isApplied = couponApplied && couponCode === cCode;
                    
                    return (
                      <div 
                        key={coupon.id || cCode} 
                        onClick={() => { if (!isDisabled) toggleCoupon(cCode); }}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${isApplied ? 'border-blue-600 bg-blue-50/50' : 'border-gray-200 bg-white hover:border-gray-300'} ${isDisabled ? 'opacity-50 pointer-events-none' : ''}`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-black text-sm text-gray-900 uppercase tracking-wider bg-gray-100 px-2 py-1 rounded border border-gray-200 border-dashed">{cCode}</span>
                          {isApplied && (
                            <span className="text-xs font-bold text-blue-600 flex items-center gap-1 uppercase tracking-widest">
                              <i className="fa-solid fa-check"></i> Applied
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-700 font-medium">
                          {cType === 'PERCENT' ? `Get ${cVal}% off` : `Flat ₹${cVal} off`} on the total plan amount.
                        </p>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>

          {/* Card 4: Order Summary */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">4</span>
              Order Summary
            </h2>
            <div className="bg-transparent flex flex-col">
              
              <div className="p-6 border-b border-gray-200 bg-gray-50/50 rounded-t-xl">
                <h3 className="text-xl font-black text-gray-900 mb-1">{selectedPlan?.plan_name || "Select a Plan"}</h3>
                <p className="text-sm font-bold text-gray-500 flex items-center gap-1.5 uppercase tracking-widest">
                  <i className="fa-regular fa-calendar"></i> {selectedPlanType ? selectedPlanType.name : "30 Days"} Access
                </p>
              </div>

              <div className="p-6 border-b border-gray-200 space-y-4">
                <div className="flex justify-between text-sm text-gray-900 font-semibold">
                  <span>Base price (x{selectedPlanType?.duration_months || 1} months)</span>
                  <span className="font-black">₹{(basePrice || 0).toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-900 font-semibold">
                  <span>Convenience fees</span>
                  <span className="text-gray-500">Included</span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-sm text-blue-600 font-bold">
                    <span className="flex items-center gap-1"><i className="fa-solid fa-percent"></i> Offer ({couponCode})</span>
                    <span>- ₹{(discountAmount || 0).toLocaleString("en-IN")}</span>
                  </div>
                )}
                <div className="pt-5 border-t-2 border-gray-200 border-dashed flex justify-between items-center">
                  <span className="font-black text-gray-900 text-lg">Order total</span>
                  <span className="font-black text-blue-600 text-2xl">₹{(finalPrice || 0).toLocaleString("en-IN")}</span>
                </div>
              </div>

              <div className="p-6 bg-transparent flex flex-col gap-5 rounded-b-xl">
                <p className="text-xs text-gray-500 leading-relaxed font-medium">
                  By proceeding, I express my consent to complete this transaction securely via PayU.
                </p>
                {/* <div className="flex items-start gap-3 p-3 border border-blue-600/20 rounded-xl bg-blue-50/50 cursor-pointer hover:bg-blue-50 transition-colors" onClick={() => setIsAutoPay(!isAutoPay)}>
                  <input 
                    type="checkbox" 
                    checked={isAutoPay}
                    onChange={(e) => setIsAutoPay(e.target.checked)}
                    className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-blue-600 border-gray-300"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900">Enable AutoPay for future renewals</span>
                    <span className="text-xs text-gray-500">You will be automatically charged based on your selected billing cycle.</span>
                  </div>
                </div> */}
                <button
                  onClick={handleCheckout}
                  disabled={!selectedPlan || loading || applyingCoupon}
                  className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition disabled:opacity-50 uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Processing...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-lock"></i>
                      {finalPrice === 0 ? "Activate Plan" : `Pay ₹${(finalPrice || 0).toLocaleString("en-IN")}`}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* AutoPay Consent Modal */}
      {showConsentModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4 mx-auto">
                <i className="fa-solid fa-shield-check text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-2">AutoPay Consent</h3>
              <p className="text-gray-600 text-sm mb-4">
                By enabling AutoPay, you authorize 4Sight to securely store your payment method and automatically charge you for future renewals based on your selected plan.
              </p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2 list-disc list-inside">
                <li>You will be notified before each automatic deduction.</li>
                <li>You can cancel or manage AutoPay anytime from your Profile Settings.</li>
                <li>The initial payment confirms your mandate setup.</li>
              </ul>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setShowConsentModal(false)}
                  className="px-6 py-2 rounded-xl text-gray-600 hover:bg-gray-100 font-semibold transition-colors"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowConsentModal(false);
                    executePayment();
                  }}
                  className="px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 font-semibold transition-colors flex items-center gap-2"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : null}
                  Agree & Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {toast.show && (
        <div className={`fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-lg text-white font-bold ${toast.type === "success" ? "bg-green-500" : toast.type === "error" ? "bg-yellow-500" : "bg-blue-500"}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
}
