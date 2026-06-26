import { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Input from "../components/Input";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
const LOGIN_URL = import.meta.env.VITE_LOGIN_URL || "/";

export default function Register() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();


  const [loading, setLoading] = useState(false);

  // Step 1 fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [countryCodesList, setCountryCodesList] = useState([]);
  const [availableCoupons, setAvailableCoupons] = useState([]);
  const [isResumeMode, setIsResumeMode] = useState(false);
  const [resumeStep, setResumeStep] = useState(1);

  // Validation states
  const [emailAvailable, setEmailAvailable] = useState(null);
  const [emailVerified, setEmailVerified] = useState(false);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [onboardingCompleted, setOnboardingCompleted] = useState(null);


  // Modals
  const [showEmailOtpModal, setShowEmailOtpModal] = useState(false);
  const [showPhoneOtpModal, setShowPhoneOtpModal] = useState(false);

  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const debounceTimer = useRef(null);

  // Load plan from URL if present
  useEffect(() => {
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
  useEffect(() => {    fetch(`${API_BASE}/api/v1/profile/country-codes`)
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
  }, []);

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
                  
                  // If status is past step 1, navigate to subscription
                  if (["otp_verified", "user_created", "plan_selected", "payment_initiated"].includes(regData.status)) {
                    navigate("/subscription", { state: { email } });
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
  };

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "success" }), 4000);
  };

  const handleStep1Submit = async () => {
    if (!fullName || !email || !phone || !businessName) {
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
      navigate("/subscription", { state: { email } });
    } catch (err) {
      showToast(err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const handleSendEmailOtp = async () => {
    setLoading(true);
    try {
      await fetch(`${API_BASE}/api/v1/onboarding/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      showToast("OTP sent!", "success");
      setShowEmailOtpModal(true);
    } catch {
      showToast("Failed to send OTP", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleSendPhoneOtp = async () => {
    setLoading(true);
    try {
      await fetch(`${API_BASE}/api/v1/auth/send-phone-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone_number: `${countryCode}${phone}` })
      });
      showToast("OTP sent!", "success");
      setShowPhoneOtpModal(true);
    } catch {
      showToast("Failed to send OTP", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 pt-16">
      <div className="w-full max-w-2xl bg-white p-8 md:p-12 relative overflow-hidden">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 heading1">
          Create Your Account
        </h1>
        <p className="text-gray-600 mb-8 bodyText">
          Fill in your details to get started
        </p>

        <div className="space-y-6">
            <Input label="Full Name" value={fullName} onChange={handleFullNameChange} placeholder="John Doe" required />

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
                  onClick={handleSendEmailOtp}
                  className="mt-2 text-sm text-blue-600 hover:underline cursor-pointer"
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
                  className="w-[25ch] px-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {countryCodesList.length > 0 ? (
                    countryCodesList.map((c) => (
                      <option key={`${c.code}-${c.dialCode}`} value={c.dialCode}>
                        {c.name} ({c.code}) {c.dialCode}
                      </option>
                    ))
                  ) : (
                    <option value="+91">Loading...</option>
                  )}
                </select>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value.replace(/\D/g, ""));
                    setPhoneVerified(false);
                  }}
                  placeholder="9876543210"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              {!phoneVerified && phone.length >= 10 && (
                <button
                  onClick={handleSendPhoneOtp}
                  className="mt-2 text-sm text-blue-600 hover:underline cursor-pointer"
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
                onClick={handleStep1Submit}
                disabled={loading || !emailVerified || !phoneVerified}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
              >
                {!emailVerified || !phoneVerified ? "Verify Contacts to Resume →" : loading ? "Processing..." : "Save & Resume Registration →"}
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
