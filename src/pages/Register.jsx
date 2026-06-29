import { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { fullNameSchema, businessNameSchema } from "../lib/validations/commonSchemas";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { OtpModal } from "@/components/ui/otp-modal";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
const LOGIN_URL = import.meta.env.VITE_LOGIN_URL || "/";

const registerSchema = z.object({
  fullName: fullNameSchema.min(3, "Full name must be at least 3 characters"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .refine((val) => {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val)) return false;
      if (/\.([a-zA-Z]{2,})\.\1$/.test(val)) return false;
      if (/\.\./.test(val)) return false;
      return true;
    }, "Please enter a valid email address"),
  countryCode: z.string(),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number is too long"),
  businessName: businessNameSchema.min(3, "Business name must be at least 3 characters"),
});

export default function Register() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [loading, setLoading] = useState(false);
  const [countryCodesList, setCountryCodesList] = useState([]);
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

  const form = useForm({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      countryCode: "+91",
      phone: "",
      businessName: "",
    },
  });

  const emailValue = form.watch("email");
  const phoneValue = form.watch("phone");
  const countryCodeValue = form.watch("countryCode");

  // Load plan from URL if present
  useEffect(() => {
    if (searchParams.get("payment") === "failed") {
      showToast("Payment failed or was cancelled. Please try again.", "error");
      const savedEmail = localStorage.getItem("register_resume_email");
      if (savedEmail) {
        form.setValue("email", savedEmail);
        localStorage.removeItem("register_resume_email");
      }
    }
  }, [searchParams, form]);

  // Load plans and country codes
  useEffect(() => {    
    fetch(`${API_BASE}/api/v1/profile/country-codes`)
      .then(r => r.json())
      .then(data => {
        if (data?.data?.country_codes && Array.isArray(data.data.country_codes)) {
          setCountryCodesList(data.data.country_codes);
          // Set default if +91 not present
          const has91 = data.data.country_codes.find(c => c.dialCode === "+91");
          if (!has91 && data.data.country_codes.length > 0) {
            form.setValue("countryCode", data.data.country_codes[0].dialCode);
          }
        }
      })
      .catch(err => console.error("Failed to load country codes:", err));
  }, [form]);

  // Check email async
  useEffect(() => {
    if (!emailValue || !emailValue.includes("@")) return;
    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      fetch(`${API_BASE}/api/v1/registration/check-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailValue })
      })
        .then(r => r.json())
        .then(data => {
          if (data.reason === "USER_EXISTS") {
            setEmailAvailable(false);
            setIsResumeMode(false);
            setOnboardingCompleted(data.onboarding_completed);
            if (data.onboarding_completed === false) {
              showToast("Registration complete. Please finish onboarding.", "info");
            } else {
              showToast("User already exists. Please login.", "error");
            }
          } else if (data.resume) {
            setEmailAvailable(true);
            showToast(`Resuming registration from step: ${data.status}`, "warning");
            setIsResumeMode(true);

            // Fetch registration details to preload
            fetch(`${API_BASE}/api/v1/registration/resume/${emailValue}`)
              .then(res => res.json())
              .then(regData => {
                if (regData.found) {
                  form.setValue("fullName", regData.full_name || "");
                  
                  let rawPhone = regData.phone_number || "";
                  if (rawPhone.startsWith("+")) {
                    const matchedCode = countryCodesList.find(c => rawPhone.startsWith(c.dialCode));
                    if (matchedCode) {
                      form.setValue("countryCode", matchedCode.dialCode);
                      rawPhone = rawPhone.substring(matchedCode.dialCode.length);
                    } else {
                      const match = rawPhone.match(/^(\+\d{1,3})(.*)/);
                      if (match) {
                        form.setValue("countryCode", match[1]);
                        rawPhone = match[2];
                      }
                    }
                  }
                  form.setValue("phone", rawPhone);
                  form.setValue("businessName", regData.business_name || "");
                  
                  setEmailVerified(false);
                  setPhoneVerified(false);
                  
                  if (["otp_verified", "user_created", "plan_selected", "payment_initiated"].includes(regData.status)) {
                    navigate("/subscription", { state: { email: emailValue } });
                  }
                }
              });
          } else {
            setEmailAvailable(true);
            setIsResumeMode(false);
          }
        });
    }, 500);
  }, [emailValue, navigate, countryCodesList, form]);

  useEffect(() => {
    setPhoneVerified(false);
  }, [phoneValue, countryCodeValue]);

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "success" }), 4000);
  };

  const handleStep1Submit = async (values) => {
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
          full_name: values.fullName,
          email: values.email,
          phone_number: `${values.countryCode}${values.phone}`,
          business_name: values.businessName
        })
      });
      if (!res.ok) throw new Error("Registration failed");

      // Create user record
      await fetch(`${API_BASE}/api/v1/registration/create-user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: values.email })
      });

      showToast("Registration step 1 completed!", "success");
      navigate("/subscription", { state: { email: values.email } });
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
        body: JSON.stringify({ email: emailValue })
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
        body: JSON.stringify({ phone_number: `${countryCodeValue}${phoneValue}` })
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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleStep1Submit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-gray-700">Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="John Doe" 
                      {...field} 
                      onChange={(e) => field.onChange(e.target.value.replace(/[^a-zA-Z\s]/g, ""))}
                      className="border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-gray-700">Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input 
                        placeholder="john@example.com" 
                        {...field} 
                        className={`border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white ${emailVerified ? "border-green-500" : emailAvailable === false ? "border-red-500" : "border-blue-300"}`}
                      />
                    </div>
                  </FormControl>
                  {!emailVerified && emailValue && !form.formState.errors.email && emailAvailable !== false && (
                    <button
                      type="button"
                      onClick={handleSendEmailOtp}
                      className="mt-2 text-sm text-blue-600 hover:underline cursor-pointer"
                    >
                      Verify Email →
                    </button>
                  )}
                  {emailVerified && <p className="mt-2 text-sm text-green-600">✓ Verified</p>}
                  {emailAvailable === false && <p className="mt-2 text-sm text-red-600">Email already exists</p>}
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-2">
              <label className="font-bold text-gray-700 text-sm block">Phone Number</label>
              <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="countryCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <select
                          {...field}
                          className="w-[12ch] px-3 py-3 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm hover:border-blue-400"
                        >
                          {countryCodesList.length > 0 ? (
                            countryCodesList.map((c) => (
                              <option key={`${c.code}-${c.dialCode}`} value={c.dialCode}>
                                {c.code} {c.dialCode}
                              </option>
                            ))
                          ) : (
                            <option value="+91">+91</option>
                          )}
                        </select>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input 
                          placeholder="9876543210" 
                          type="tel"
                          maxLength={10}
                          {...field}
                          onChange={(e) => field.onChange(e.target.value.replace(/\D/g, "").slice(0, 10))}
                          className="flex-1"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            
            <div className="-mt-4">
              {!phoneVerified && phoneValue.length >= 10 && !form.formState.errors.phone && (
                <button
                  type="button"
                  onClick={handleSendPhoneOtp}
                  className="mt-2 text-sm text-blue-600 hover:underline cursor-pointer"
                >
                  Verify Phone →
                </button>
              )}
              {phoneVerified && <p className="mt-2 text-sm text-green-600">✓ Verified</p>}
              {form.formState.errors.phone && <p className="mt-2 text-[0.8rem] font-medium text-destructive">{form.formState.errors.phone.message}</p>}
            </div>

            <FormField
              control={form.control}
              name="businessName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-bold text-gray-700">Business Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Acme Corp" {...field} className="border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {emailAvailable === false && !isResumeMode ? (
              <button
                type="button"
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
                type="submit"
                disabled={loading || !emailVerified || !phoneVerified}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
              >
                {!emailVerified || !phoneVerified ? "Verify Contacts to Resume →" : loading ? "Processing..." : "Save & Resume Registration →"}
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading || !emailVerified || !phoneVerified}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition disabled:opacity-50"
              >
                {loading ? "Processing..." : "Continue to Plan Selection →"}
              </button>
            )}
          </form>
        </Form>
      </div>

      <OtpModal
        isOpen={showEmailOtpModal}
        title="Verify Email"
        description={`Enter the 6-digit code sent to ${emailValue}`}
        length={6}
        onClose={() => setShowEmailOtpModal(false)}
        onVerify={async (otp) => {
          const res = await fetch(`${API_BASE}/api/v1/onboarding/verify-otp`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: emailValue, otp })
          });
          if (!res.ok) throw new Error("Invalid OTP");
          setEmailVerified(true);
          setShowEmailOtpModal(false);
          showToast("Email verified!", "success");
        }}
        resendOtp={async () => {
          await fetch(`${API_BASE}/api/v1/onboarding/send-otp`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: emailValue })
          });
          showToast("OTP sent!", "success");
        }}
      />

      <OtpModal
        isOpen={showPhoneOtpModal}
        title="Verify Phone"
        description={`Enter the 6-digit code sent to ${countryCodeValue}${phoneValue}`}
        length={6}
        onClose={() => setShowPhoneOtpModal(false)}
        onVerify={async (otp) => {
          const res = await fetch(`${API_BASE}/api/v1/auth/verify-phone-otp`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phone_number: `${countryCodeValue}${phoneValue}`, otp })
          });
          if (!res.ok) throw new Error("Invalid OTP");
          setPhoneVerified(true);
          setShowPhoneOtpModal(false);
          showToast("Phone verified!", "success");
        }}
        resendOtp={async () => {
          await fetch(`${API_BASE}/api/v1/auth/send-phone-otp`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phone_number: `${countryCodeValue}${phoneValue}` })
          });
          showToast("OTP sent!", "success");
        }}
      />

      {toast.show && (
        <div className={`fixed bottom-6 right-6 px-6 py-4 rounded-xl shadow-lg text-white z-50 ${toast.type === "success" ? "bg-green-500" : toast.type === "error" ? "bg-red-500" : "bg-yellow-500"
          }`}>
          {toast.message}
        </div>
      )}
    </div>
  );
}
