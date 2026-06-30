import { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { fullNameSchema, businessNameSchema } from "../lib/validations/commonSchemas";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { OtpModal } from "@/components/ui/otp-modal";
import { taxRegexRegistry } from "../lib/validations/taxSchemas";
import { getAddressAutocomplete } from "../services/addressAutocomplete";

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

  // Tax / GSTIN
  const [taxNumber, setTaxNumber] = useState("");
  const [taxCountryCode, setTaxCountryCode] = useState("IN");
  const [taxValid, setTaxValid] = useState(null);
  const [taxError, setTaxError] = useState("");
  const [taxCountryDropdownOpen, setTaxCountryDropdownOpen] = useState(false);
  const [taxCountrySearch, setTaxCountrySearch] = useState("");
  const taxCountryDropdownRef = useRef(null);

  // Address
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debounceTimeoutRef = useRef(null);
  const autocompleteContainerRef = useRef(null);

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

  const handleAddressChange = (value) => {
    setAddress(value);

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    if (value.trim().length < 3) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    debounceTimeoutRef.current = setTimeout(async () => {
      try {
        const response = await getAddressAutocomplete(value);
        if (response && response.predictions) {
          setSuggestions(response.predictions);
          setShowSuggestions(response.predictions.length > 0);
        } else {
          setSuggestions([]);
          setShowSuggestions(false);
        }
      } catch (error) {
        console.error('Address autocomplete failed:', error);
        setSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300);
  };

  const handleSelectSuggestion = (description) => {
    setAddress(description);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        autocompleteContainerRef.current &&
        !autocompleteContainerRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
      if (
        taxCountryDropdownRef.current &&
        !taxCountryDropdownRef.current.contains(event.target)
      ) {
        setTaxCountryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current);
    };
  }, []);

  const validateTaxNumber = (value, countryCode) => {
    if (!value.trim()) {
      setTaxValid(null);
      setTaxError("");
      return;
    }

    const rule = taxRegexRegistry[countryCode] || {
      label: 'Tax Number',
      regex: /^[A-Z0-9\-\/\.]{5,25}$/i
    };

    const isValid = rule.regex.test(value);
    setTaxValid(isValid);
    setTaxError(isValid ? "" : `Invalid ${rule.label} format`);
  };

  const handleTaxNumberChange = (e) => {
    const val = e.target.value.toUpperCase();
    setTaxNumber(val);
    validateTaxNumber(val, taxCountryCode);
  };

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

                  setTaxNumber(regData.tax_number || "");
                  if (regData.tax_country_code) setTaxCountryCode(regData.tax_country_code);
                  if (regData.tax_number) validateTaxNumber(regData.tax_number, regData.tax_country_code || "IN");
                  setAddress(regData.business_address || "");

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
    if (taxNumber && !taxValid) {
      showToast("Please enter a valid GSTIN", "error");
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
          business_name: values.businessName,
          tax_number: taxNumber,
          tax_country_code: taxCountryCode,
          business_address: address
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
          <form onSubmit={form.handleSubmit(handleStep1Submit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="font-bold text-gray-700">Full Name<span className="text-red-500 ml-1">*</span></FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      maxLength={50}
                      {...field}
                      onChange={(e) => field.onChange(e.target.value.replace(/[^a-zA-Z\s]/g, ""))}
                      className={`h-11 px-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white ${form.formState.errors.fullName ? "border-red-500 text-red-250" : "border-blue-300"}`}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <div className="pt-3 border-t border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Company Details</h3>
              <div className="space-y-4">

                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="font-bold text-gray-700">Company Name<span className="text-red-500 ml-1">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Acme Corp" maxLength={100} {...field} className={`h-11 px-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white w-full ${form.formState.errors.businessName ? "border-red-500 text-red-250" : "border-blue-300"}`} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="space-y-2">
                        <FormLabel className="font-bold text-gray-700">Email<span className="text-red-500 ml-1">*</span></FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input
                              placeholder="john@example.com"
                              maxLength={255}
                              {...field}
                              className={`h-11 px-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white w-full ${form.formState.errors.email || emailAvailable === false ? "border-red-500 text-red-250" : emailVerified ? "border-green-500" : "border-blue-300"}`}
                            />
                          </div>
                        </FormControl>
                        <div className="min-h-[24px]">
                          {!emailVerified && emailValue && !form.formState.errors.email && emailAvailable !== false && (
                            <button
                              type="button"
                              onClick={handleSendEmailOtp}
                              className="mt-1 text-sm text-blue-600 hover:underline cursor-pointer"
                            >
                              Verify Email →
                            </button>
                          )}
                          {emailVerified && <p className="mt-1 text-sm text-green-600">✓ Verified</p>}
                          {emailAvailable === false && <p className="mt-1 text-sm text-red-500">Email already exists</p>}
                        </div>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-2 flex flex-col">
                    <label className="font-bold text-gray-700 text-sm block">Phone Number<span className="text-red-500 ml-1">*</span></label>
                    <div className="flex gap-2">
                      <FormField
                        control={form.control}
                        name="countryCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <select
                                {...field}
                                className="w-[12ch] h-11 px-4 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm hover:border-blue-400"
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
                                className={`h-11 px-4 flex-1 w-full border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white ${form.formState.errors.phone ? "border-red-500 text-red-250" : "border-blue-300"}`}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="min-h-[24px]">
                      {!phoneVerified && phoneValue.length >= 10 && !form.formState.errors.phone && (
                        <button
                          type="button"
                          onClick={handleSendPhoneOtp}
                          className="mt-1 text-sm text-blue-600 hover:underline cursor-pointer"
                        >
                          Verify Phone →
                        </button>
                      )}
                      {phoneVerified && <p className="mt-1 text-sm text-green-600">✓ Verified</p>}
                      {form.formState.errors.phone && <p className="mt-1 text-[0.8rem] font-medium text-red-500">{form.formState.errors.phone.message}</p>}
                    </div>
                  </div>
                </div>

                <div className="space-y-2" ref={taxCountryDropdownRef}>
                  <label className="font-bold text-gray-700 text-sm block">
                    {taxRegexRegistry[taxCountryCode]?.label || "GSTIN"}<span className="text-red-500 ml-1">*</span>
                  </label>
                  <div className="flex gap-2">
                    <div className="relative w-[12ch]">
                      <button
                        type="button"
                        onClick={() => setTaxCountryDropdownOpen(!taxCountryDropdownOpen)}
                        className="w-full h-11 px-4 border border-blue-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm hover:border-blue-400 text-left flex justify-between items-center"
                      >
                        <span className="text-slate-800 font-semibold truncate mr-2">{countryCodesList.find(c => c.code === taxCountryCode)?.code || taxCountryCode}</span>
                        <span className="text-slate-400 text-xs">▼</span>
                      </button>
                      {taxCountryDropdownOpen && (
                        <div className="absolute z-30 mt-1 w-64 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden left-0">
                          <div className="p-2 border-b border-slate-100 bg-slate-50/50">
                            <Input
                              type="text"
                              value={taxCountrySearch}
                              onChange={(e) => setTaxCountrySearch(e.target.value)}
                              placeholder="Search country..."
                              className="w-full bg-white h-9 text-sm border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-lg"
                            />
                          </div>
                          <div className="max-h-60 overflow-y-auto py-1">
                            {countryCodesList
                              .filter((c) => c.name.toLowerCase().includes(taxCountrySearch.toLowerCase()) || c.code.toLowerCase().includes(taxCountrySearch.toLowerCase()))
                              .map((country) => (
                                <button
                                  key={country.code}
                                  type="button"
                                  onClick={() => {
                                    setTaxCountryCode(country.code);
                                    setTaxNumber("");
                                    setTaxValid(null);
                                    setTaxCountryDropdownOpen(false);
                                    setTaxCountrySearch("");
                                  }}
                                  className={`w-full px-4 py-2.5 text-sm text-left hover:bg-slate-50 transition-colors flex items-center justify-between ${taxCountryCode === country.code ? 'bg-slate-50 font-medium text-blue-600' : 'text-slate-700'}`}
                                >
                                  <span>{country.name}</span>
                                  <span className="text-xs text-slate-400 uppercase">{country.code}</span>
                                </button>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <Input
                      placeholder={taxRegexRegistry[taxCountryCode]?.placeholder || "Enter GSTIN"}
                      value={taxNumber}
                      maxLength={taxRegexRegistry[taxCountryCode]?.maxLength || 25}
                      onChange={handleTaxNumberChange}
                      className={`h-11 px-4 flex-1 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white ${taxValid === false ? 'border-red-500 text-red-250' : taxValid === true ? 'border-green-500' : 'border-blue-300'
                        }`}
                    />
                  </div>
                  {taxError && <p className="mt-1 text-[0.8rem] font-medium text-red-500">{taxError}</p>}
                </div>

                <div className="space-y-2 relative" ref={autocompleteContainerRef}>
                  <label className="font-bold text-gray-700 text-sm block">
                    Billing Address[City-State-Country-PIN]<span className="text-red-500 ml-1">*</span>
                  </label>
                  <textarea
                    placeholder="Enter billing address"
                    value={address}
                    maxLength={500}
                    onChange={(e) => handleAddressChange(e.target.value)}
                    className="w-full px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white resize-none min-h-[100px]"
                  />
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute z-10 w-full bg-white mt-1 border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto">
                      {suggestions.map((suggestion) => (
                        <div
                          key={suggestion.place_id}
                          className="px-4 py-3 hover:bg-slate-50 cursor-pointer text-sm border-b border-gray-100 last:border-0 flex items-start gap-3"
                          onClick={() => handleSelectSuggestion(suggestion.description)}
                        >
                          <span className="text-slate-700">{suggestion.description}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>

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
