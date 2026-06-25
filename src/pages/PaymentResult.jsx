import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
const PLATFORM_URL = import.meta.env.VITE_PLATFORM_URL || "/";

export default function PaymentResult() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("loading");
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    const isFreePlan = searchParams.get("free_plan") === "true";
    
    if (isFreePlan) {
      setStatus("success");
      setPaymentData({
        txn_id: "FREE-" + Date.now().toString().slice(-6),
        amount: 0,
        product_info: searchParams.get("plan_name") || "Free Plan",
        email: searchParams.get("email") || ""
      });
      return;
    }

    const txnId = searchParams.get("txn_id") || searchParams.get("txnid");
    if (!txnId) {
      setStatus("error");
      return;
    }

    // Poll payment status
    const pollStatus = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/v1/payment/status/${txnId}`);
        const data = await res.json();
        setPaymentData(data);

        if (data.status === "success") {
          setStatus("success");
        } else if (data.status === "failure" || data.status === "failed") {
          setStatus("failure");
        } else if (data.status === "initiated" || data.status === "pending") {
          // Keep polling
          setTimeout(pollStatus, 2000);
        } else {
          setStatus("failure");
        }
      } catch (err) {
        setStatus("error");
      }
    };

    pollStatus();
  }, [searchParams]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Verifying Payment...</h2>
          <p className="text-gray-600">Please wait while we confirm your transaction</p>
        </div>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-3xl p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Congratulations!</h1>
          <p className="text-gray-600 mb-8">
            Your subscription has been activated. You will receive a confirmation email shortly.
          </p>

          {paymentData && (
            <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Transaction ID:</span>
                  <span className="font-mono font-bold">{paymentData.txn_id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amount:</span>
                  <span className="font-bold">₹{parseFloat(paymentData.amount || 0).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Plan:</span>
                  <span className="font-bold">{paymentData.product_info}</span>
                </div>
                {paymentData.gateway_txn_id && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Gateway Ref:</span>
                    <span className="font-mono text-xs">{paymentData.gateway_txn_id}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/")}
              className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition"
            >
              Go to Homepage
            </button>
            <button
              onClick={() => window.location.href = PLATFORM_URL}
              className="px-8 py-3 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition"
            >
              Go to Onboarding
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            Important: Use the email <strong>{paymentData?.email || "you registered with"}</strong> for your Onboarding.
          </p>
        </div>
      </div>
    );
  }

  if (status === "failure") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-3xl p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Oops!</h1>
          <p className="text-gray-600 mb-8">
            Your subscription could not be processed. Please try again or contact support if the issue persists.
          </p>

          {paymentData && (
            <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Transaction ID:</span>
                  <span className="font-mono font-bold">{paymentData.txn_id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-bold text-red-600">{paymentData.status}</span>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/register")}
              className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition"
            >
              Try Again
            </button>
            <button
              onClick={() => navigate("/contact-us")}
              className="px-8 py-3 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-3xl p-8 md:p-12 text-center">
        <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Something Went Wrong</h1>
        <p className="text-gray-600 mb-8">
          We couldn't retrieve your payment status. Please check your email for confirmation or contact support.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/")}
            className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition"
          >
            Go to Homepage
          </button>
          <button
            onClick={() => navigate("/contact-us")}
            className="px-8 py-3 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
