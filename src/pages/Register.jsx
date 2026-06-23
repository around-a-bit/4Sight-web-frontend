import { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8001";
const LOGIN_URL = import.meta.env.VITE_LOGIN_URL || "/";

export default function Register() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  // Step 1 fields
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [countryCodesList, setCountryCodesList] = useState([]);
  const [availableCoupons, setAvailableCoupons] = useState([]);
  const [isResumeMode, setIsResumeMode] = useState(false);
  const [resumeStep, setResumeStep] = useState(1);

  // Validation states
  const [usernameTouched, setUsernameTouched] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(null);
  const [usernameSuggestions, setUsernameSuggestions] = useState([]);
  const [emailAvailable, setEmailAvailable] = useState(null);
  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [onboardingCompleted, setOnboardingCompleted] = useState(null);

  // Step 2 fields
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  // Modals
  const [showEmailOtpModal, setShowEmailOtpModal] = useState(false);
  const [showPhoneOtpModal, setShowPhoneOtpModal] = useState(false);

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const debounceTimer = useRef(null);

  // Load plan from URL if present
  useEffect(() => {
    const planId = searchParams.get("plan_id");
    const planName = searchParams.get("plan_name");
    const price = searchParams.get("price");
    if (planId && planName && price) {
      setSelectedPlan({ id: planId, plan_name: planName, price: parseFloat(price) });
      setFinalPrice(parseFloat(price));
    }
    
    // Check for payment failure redirect
    if (searchParams.get("payment") === "failed") {
      showToast("Payment failed or was cancelled. Please try again.", "error");
      const savedEmail = localStorage.getItem("register_resume_email");
      if (savedEmail) {
        setEmail(savedEmail);
        localStorage.removeItem("register_resume_email");
      }
    }
  }, [searchParams]);

  // Load plans and country codes
  useEffect(() => {
    fetch(`${API_BASE}/api/v1/subscription/plans`)
      .then(r => r.json())
      .then(data => setPlans(Array.isArray(data) ? data : []))
      .catch(() => setPlans([]));

    fetch(`${API_BASE}/api/v1/profile/country-codes`)
      .then(r => r.json())
      .then(data => {
        if (data?.data?.country_codes && Array.isArray(data.data.country_codes)) {
          setCountryCodesList(data.data.country_codes);
          // Set default if +91 not present
          const has91 = data.data.country_codes.find(c => c.dialCode === "+91");
          if (!has91 && data.data.country_codes.length > 0) {
            setCountryCode(data.data.country_codes[0].dialCode);
          }
        }
      })
      .catch(err => console.error("Failed to load country codes:", err));

    fetch(`${API_BASE}/api/v1/coupon/available`)
      .then(r => r.json())
      .then(data => {
        if (data && Array.isArray(data)) setAvailableCoupons(data);
        else if (data && data.coupons && Array.isArray(data.coupons)) setAvailableCoupons(data.coupons);
        else if (data && data.data && Array.isArray(data.data)) setAvailableCoupons(data.data);
      })
      .catch(err => console.error("Failed to load coupons:", err));
  }, []);

  // Check username async
  useEffect(() => {
    if (!username || username.length < 3) return;
    if (isResumeMode) {
      setUsernameAvailable(true); // Treat as available so UI shows success
      setUsernameSuggestions([]);
      return;
    }

    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      fetch(`${API_BASE}/api/v1/registration/check-username`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, full_name: fullName })
      })
        .then(r => r.json())
        .then(data => {
          setUsernameAvailable(data.available);
          setUsernameSuggestions(data.suggestions || []);
          if (!data.available && !usernameTouched && data.suggestions?.length > 0) {
            setUsername(data.suggestions[0]);
          }
        });
    }, 500);
  }, [username, fullName, usernameTouched]);

  // Check email async
  useEffect(() => {
    if (!email || !email.includes("@")) return;
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      fetch(`${API_BASE}/api/v1/registration/check-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      })
        .then(r => r.json())
        .then(data => {
          if (data.reason === "USER_EXISTS") {
            setEmailAvailable(false);
            setIsResumeMode(false);
            setOnboardingCompleted(data.onboarding_completed);
            if (data.onboarding_completed === false) {
              showToast("Registration complete. Please login to finish onboarding.", "info");
            } else {
              showToast("User already exists. Please login.", "error");
            }
          } else if (data.resume) {
            setEmailAvailable(true);
            showToast(`Resuming registration from step: ${data.status}`, "warning");
            setIsResumeMode(true);

            // Fetch registration details to preload
            fetch(`${API_BASE}/api/v1/registration/resume/${email}`)
              .then(res => res.json())
              .then(regData => {
                if (regData.found) {
                  setFullName(regData.full_name || "");
                  setUsername(regData.username || "");
                  
                  let rawPhone = regData.phone_number || "";
                  if (rawPhone.startsWith("+")) {
                    const matchedCode = countryCodesList.find(c => rawPhone.startsWith(c.dialCode));
                    if (matchedCode) {
                      setCountryCode(matchedCode.dialCode);
                      rawPhone = rawPhone.substring(matchedCode.dialCode.length);
                    } else {
                      const match = rawPhone.match(/^(\+\d{1,3})(.*)/);
                      if (match) {
                        setCountryCode(match[1]);
                        rawPhone = match[2];
                      }
                    }
                  }
                  setPhone(rawPhone);
                  setBusinessName(regData.business_name || "");
                  
                  // Force re-verification for security, as requested by user
                  setEmailVerified(false);
                  setPhoneVerified(false);
                  
                  // If status is past step 1, set step 2
                  if (["otp_verified", "user_created", "plan_selected", "payment_initiated"].includes(regData.status)) {
                    setResumeStep(2);
                  }
                }
              });
          } else {
            setEmailAvailable(true);
            setIsResumeMode(false);
          }
        });
    }, 500);
  }, [email]);

  const handleFullNameChange = (val) => {
    setFullName(val);
    if (!usernameTouched) {
      const base = val.toLowerCase().replace(/[^a-z0-9_]/g, "");
      setUsername(base);
    }
  };

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "success" }), 4000);
  };

  const handleStep1Submit = async () => {
    if (!fullName || !username || !email || !phone || !businessName) {
      showToast("All fields are required", "error");
      return;
    }
    if (!emailVerified) {
      showToast("Please verify your email", "error");
      return;
    }
    if (!phoneVerified) {
      showToast("Please verify your phone number", "error");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/v1/registration/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName,
          username,
          email,
          phone_number: `${countryCode}${phone}`,
          business_name: businessName
        })
      });
      if (!res.ok) throw new Error("Registration failed");

      // Create user record
      await fetch(`${API_BASE}/api/v1/registration/create-user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      showToast("Registration step 1 completed!", "success");
      setStep(2);
    } catch (err) {
      showToast(err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    setFinalPrice(parseFloat(plan.price));
    setCouponApplied(false);
    setDiscountAmount(0);
    setCouponCode("");
  };

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/v1/coupon/preview`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan_id: selectedPlan.id, coupon_code: couponCode })
      });
      const data = await res.json();
      if (data.coupon_applied) {
        setDiscountAmount(data.discount_amount);
        setFinalPrice(data.final_price);
        setCouponApplied(true);
        showToast("Coupon applied!", "success");
      } else {
        showToast("Invalid coupon code", "error");
      }
    } catch {
      showToast("Failed to apply coupon", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCheckout = async () => {
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
          coupon_code: couponApplied ? couponCode : null
        })
      });

      // Get registration record to get user_id
      const regRes = await fetch(`${API_BASE}/api/v1/registration/resume/${email}`);
      const regData = await regRes.json();

      if (!regData.found || !regData.user_id) {
        showToast("User ID not found", "error");
        return;
      }

      // Free plan: skip payment
      if (parseFloat(selectedPlan.price) === 0) {
        showToast("Free plan activated!", "success");
        setTimeout(() => navigate("/"), 2000);
        return;
      }

      // Paid plan: initiate checkout
      const checkoutRes = await fetch(`${API_BASE}/api/v1/subscription/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: regData.user_id,
          plan_id: selectedPlan.id,
          coupon_code: couponApplied ? couponCode : null
        })
      });

      const checkoutData = await checkoutRes.json();

      // Auto-submit form to PayU
      if (checkoutData.checkout_type === "hosted") {
        localStorage.setItem("register_resume_email", email);
        
        const form = document.createElement("form");
        form.method = "POST";
        form.action = checkoutData.action_url;
        Object.entries(checkoutData.params).forEach(([key, value]) => {
          const input = document.createElement("input");
          input.type = "hidden";
          input.name = key;
          input.value = value;
          form.appendChild(input);
        });
        document.body.appendChild(form);
        form.submit();
      }
    } catch (err) {
      showToast("Checkout failed: " + err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-6 pt-32">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">

        {/* Progress bar */}
        <div className="flex items-center justify-between mb-8">
          <div className={`flex-1 h-2 rounded-full ${step >= 1 ? "bg-blue-600" : "bg-gray-200"}`} />
          <div className="w-8" />
          <div className={`flex-1 h-2 rounded-full ${step >= 2 ? "bg-blue-600" : "bg-gray-200"}`} />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 heading1">
          {step === 1 ? "Create Your Account" : "Select Your Plan"}
        </h1>
        <p className="text-gray-600 mb-8 bodyText">
          {step === 1 ? "Fill in your details to get started" : "Choose a plan that fits your needs"}
        </p>

        {step === 1 && (
          <div className="space-y-6">
            <Input label="Full Name" value={fullName} onChange={handleFullNameChange} placeholder="John Doe" required />

            <div>
              <Input
                label="Username"
                value={username}
                onChange={(val) => {
                  setUsernameTouched(true);
                  setUsername(val);
                }}
                placeholder="johndoe"
                required
                disabled={isResumeMode}
                status={isResumeMode ? "success" : usernameAvailable === null ? null : usernameAvailable ? "success" : "error"}
                statusMessage={isResumeMode ? "Retrieved" : usernameAvailable === false ? "Username taken" : usernameAvailable ? "Available" : ""}
              />
              {usernameSuggestions.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="text-sm text-gray-500">Suggestions:</span>
                  {usernameSuggestions.map(s => (
                    <button key={s} onClick={() => setUsername(s)} className="text-sm text-blue-600 hover:underline">{s}</button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={setEmail}
                placeholder="john@example.com"
                required
                status={emailVerified ? "success" : emailAvailable === false ? "error" : null}
                statusMessage={emailVerified ? "Verified" : emailAvailable === false ? "Already exists" : ""}
              />
              {!emailVerified && emailAvailable && (
                <button
                  onClick={() => setShowEmailOtpModal(true)}
                  className="mt-2 text-sm text-blue-600 hover:underline"
                >
                  Verify Email →
                </button>
              )}
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-32 px-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {countryCodesList.length > 0 ? (
                    countryCodesList.map((c) => (
                      <option key={`${c.code}-${c.dialCode}`} value={c.dialCode}>
                        {c.dialCode} ({c.code})
                      </option>
                    ))
                  ) : (
                    <>
                      <option value="+91">+91 (IN)</option>
                      <option value="+1">+1 (US)</option>
                      <option value="+44">+44 (GB)</option>
                      <option value="+971">+971 (AE)</option>
                      <option value="+61">+61 (AU)</option>
                    </>
                  )}
                </select>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  placeholder="9876543210"
                  disabled={isResumeMode}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
                />
              </div>
              {!phoneVerified && phone.length >= 10 && (
                <button
                  onClick={() => setShowPhoneOtpModal(true)}
                  className="mt-2 text-sm text-blue-600 hover:underline"
                >
                  Verify Phone →
                </button>
              )}
              {phoneVerified && <p className="mt-2 text-sm text-green-600">✓ Verified</p>}
            </div>

            <Input label="Business Name" value={businessName} onChange={setBusinessName} placeholder="Acme Corp" required />

            {emailAvailable === false && !isResumeMode ? (
              <button
                onClick={() => {
                  if (LOGIN_URL.startsWith("http")) {
                    window.location.href = LOGIN_URL;
                  } else {
                    navigate(LOGIN_URL);
                  }
                }}
                className="w-full bg-gray-800 text-white font-bold py-4 rounded-xl hover:bg-gray-900 transition"
              >
                {onboardingCompleted === false 
                  ? "Registration complete. Start Onboard →" 
                  : "User exists. Login from the Platform →"}
              </button>
            ) : isResumeMode ? (
              <button
                onClick={() => setStep(resumeStep)}
                disabled={loading || !emailVerified || !phoneVerified}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
              >
                {!emailVerified || !phoneVerified ? "Verify Contacts to Resume →" : "Resume Registration →"}
              </button>
            ) : (
              <button
                onClick={handleStep1Submit}
                disabled={loading || !emailVerified || !phoneVerified}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
              >
                {loading ? "Processing..." : "Continue to Plan Selection →"}
              </button>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            {plans.length === 0 ? (
              <div className="text-center py-10">Loading plans...</div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {plans.map(plan => (
                  <div
                    key={plan.id}
                    onClick={() => handlePlanSelect(plan)}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition ${selectedPlan?.id === plan.id
                      ? "border-blue-600 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                      }`}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.plan_name}</h3>
                    <p className="text-3xl font-bold text-blue-600 mb-2">₹{parseFloat(plan.price).toLocaleString("en-IN")}</p>
                    <p className="text-sm text-gray-600">{plan.description || "Standard plan"}</p>
                  </div>
                ))}
              </div>
            )}

            {selectedPlan && (
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Have a Coupon?</h3>

                {availableCoupons.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-bold text-gray-700 mb-2">Available Coupons:</p>
                    <div className="flex gap-2 flex-wrap">
                      {availableCoupons.map(c => (
                        <span
                          key={c.code || c.coupon_code || c.id}
                          onClick={() => setCouponCode(c.code || c.coupon_code)}
                          className="px-3 py-1 bg-blue-100 text-blue-800 font-medium rounded-full text-sm cursor-pointer hover:bg-blue-200 border border-blue-200"
                        >
                          {c.code || c.coupon_code}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    placeholder="PROMO2024"
                    disabled={couponApplied}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 disabled:bg-gray-200"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    disabled={couponApplied || loading}
                    className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
                  >
                    {couponApplied ? "Applied" : "Apply"}
                  </button>
                </div>

                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between"><span>Plan Price:</span><span>₹{parseFloat(selectedPlan.price).toFixed(2)}</span></div>
                  {couponApplied && <div className="flex justify-between text-green-600"><span>Discount:</span><span>- ₹{discountAmount.toFixed(2)}</span></div>}
                  <div className="flex justify-between font-bold text-lg border-t pt-2"><span>Total:</span><span>₹{finalPrice.toFixed(2)}</span></div>
                </div>
              </div>
            )}

            <button
              onClick={handleCheckout}
              disabled={!selectedPlan || loading}
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Processing..." : parseFloat(selectedPlan?.price || 0) === 0 ? "Activate Free Plan" : "Proceed to Payment →"}
            </button>

            <button onClick={() => setStep(1)} className="w-full text-gray-600 hover:text-gray-900 font-bold py-3">
              ← Back
            </button>
          </div>
        )}
      </div>

      {/* Email OTP Modal */}
      {showEmailOtpModal && (
        <OtpModal
          title="Verify Email"
          subtitle={`Enter the code sent to ${email}`}
          onClose={() => setShowEmailOtpModal(false)}
          onVerify={async (otp) => {
            try {
              const res = await fetch(`${API_BASE}/api/v1/onboarding/verify-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp })
              });
              if (!res.ok) throw new Error("Invalid OTP");
              setEmailVerified(true);
              setShowEmailOtpModal(false);
              showToast("Email verified!", "success");
            } catch {
              showToast("Invalid OTP", "error");
              throw new Error("Invalid OTP");
            }
          }}
          onResend={async () => {
            await fetch(`${API_BASE}/api/v1/onboarding/send-otp`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email })
            });
            showToast("OTP sent!", "success");
          }}
        />
      )}

      {/* Phone OTP Modal */}
      {showPhoneOtpModal && (
        <OtpModal
          title="Verify Phone"
          subtitle={`Enter the code sent to ${countryCode}${phone}`}
          onClose={() => setShowPhoneOtpModal(false)}
          onVerify={async (otp) => {
            try {
              const res = await fetch(`${API_BASE}/api/v1/auth/verify-phone-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phone_number: `${countryCode}${phone}`, otp })
              });
              if (!res.ok) throw new Error("Invalid OTP");
              setPhoneVerified(true);
              setShowPhoneOtpModal(false);
              showToast("Phone verified!", "success");
            } catch {
              showToast("Invalid OTP", "error");
              throw new Error("Invalid OTP");
            }
          }}
          onResend={async () => {
            await fetch(`${API_BASE}/api/v1/auth/send-phone-otp`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ phone_number: `${countryCode}${phone}` })
            });
            showToast("OTP sent!", "success");
          }}
        />
      )}

      {/* Toast */}
      {toast.show && (
        <div className={`fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-lg text-white ${toast.type === "success" ? "bg-green-500" : toast.type === "error" ? "bg-red-500" : "bg-yellow-500"
          }`}>
          {toast.message}
        </div>
      )}
    </div>
  );
}

function Input({ label, type = "text", value, onChange, placeholder, required, status, statusMessage, disabled }) {
  return (
    <div>
      <label className="block text-sm font-bold text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:text-gray-500 ${status === "error" ? "border-red-500" : status === "success" ? "border-green-500" : "border-gray-300"
          }`}
      />
      {statusMessage && (
        <p className={`mt-1 text-sm ${status === "error" ? "text-red-500" : "text-green-500"}`}>{statusMessage}</p>
      )}
    </div>
  );
}

function OtpModal({ title, subtitle, onClose, onVerify, onResend }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);

  const handleChange = (i, val) => {
    if (val.length > 1) return;
    const newOtp = [...otp];
    newOtp[i] = val;
    setOtp(newOtp);
    if (val && i < 5) inputRefs.current[i + 1]?.focus();
  };

  const handleVerify = async () => {
    setLoading(true);
    try {
      await onVerify(otp.join(""));
    } catch {
      setOtp(["", "", "", "", "", ""]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600 mb-6">{subtitle}</p>

        <div className="flex gap-2 justify-center mb-6">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => (inputRefs.current[i] = el)}
              type="text"
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              maxLength={1}
              className="w-12 h-14 text-center text-2xl font-bold border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          disabled={otp.join("").length !== 6 || loading}
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition disabled:opacity-50 mb-3"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>

        <button onClick={onResend} className="w-full text-blue-600 hover:underline font-bold py-2">
          Resend Code
        </button>

        <button onClick={onClose} className="w-full text-gray-600 hover:text-gray-900 font-bold py-2 mt-2">
          Cancel
        </button>
      </div>
    </div>
  );
}
