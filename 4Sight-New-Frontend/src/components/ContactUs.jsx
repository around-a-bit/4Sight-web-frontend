// ContactUs.jsx

import React, { useState } from "react";
import Footer from "./Footer";

const ContactUs = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    designation: "",
    phone: "",
    website: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [agreed, setAgreed] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateURL = (url) => {
    if (!url) return false;
    try {
      const parsed = new URL(url.startsWith("http") ? url : `https://${url}`);
      return parsed.hostname.includes(".");
    } catch {
      return false;
    }
  };

  const validate = () => {
    const errs = {};

    if (!form.fullName.trim()) errs.fullName = "Full name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = "Enter a valid email address.";
    }
    if (!form.company.trim()) errs.company = "Company name is required.";
    if (!form.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(form.phone.trim())) {
      errs.phone = "Phone number must be exactly 10 digits.";
    }
    if (!form.website.trim()) {
      errs.website = "Website URL is required.";
    } else if (!validateURL(form.website.trim())) {
      errs.website = "Enter a valid website URL (e.g. https://example.com).";
    }
    if (!agreed) errs.terms = "You must accept the terms and conditions.";

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      console.log("📩 Contact Form Submission:", {
        ...form,
        agreedToTerms: agreed,
        submittedAt: new Date().toISOString(),
      });
      setSubmitted(true);
    }
  };

  const inputBase =
    "w-full h-10 rounded-lg border bg-[#FCFBFF] px-3.5 text-sm outline-none transition-all duration-300 focus:ring-3 focus:ring-purple-100";
  const inputNormal = `${inputBase} border-gray-200 focus:border-purple-400`;
  const inputError = `${inputBase} border-red-400 focus:border-red-400 focus:ring-red-100`;

  const InlineError = ({ msg }) =>
    msg ? (
      <p className="text-red-500 text-[11px] mt-0.5 flex items-center gap-1">
        <svg className="w-3 h-3 shrink-0" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        {msg}
      </p>
    ) : null;

  // Success state
  if (submitted) {
    return (
      <div className="relative w-full h-screen overflow-y-auto overflow-x-hidden bg-transparent pt-2">
        <section className="w-full bg-gradient-to-b from-white to-purple-50 min-h-[calc(100vh-80px)] flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[#1C1635] mb-3">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              Your inquiry has been submitted successfully. Our team will review your message and get back to you shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ fullName: "", email: "", company: "", designation: "", phone: "", website: "", message: "" });
                setAgreed(false);
                setErrors({});
              }}
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold shadow-md hover:scale-[1.02] transition-all"
            >
              Submit Another Inquiry
            </button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-y-auto overflow-x-hidden bg-transparent pt-2">

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 md:p-8 relative animate-[fadeIn_0.25s_ease]">
            {/* Close button */}
            <button
              onClick={() => setShowTerms(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Shield icon */}
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-[#1C1635] mb-2">Terms &amp; Conditions</h3>

            <div className="text-gray-600 text-sm leading-relaxed space-y-3 mb-6">
              <p>
                By submitting this form, you acknowledge and agree to the following:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Data Usage:</strong> Marketing 4Sight may contact you regarding your enquiry using the information you have provided. Your data will be handled securely and used solely for communication and support purposes.
                </li>
                <li>
                  <strong>Privacy:</strong> We will never share, sell, or distribute your personal information to third parties without your explicit consent.
                </li>
                <li>
                  <strong>Prohibited Activity:</strong> Spam, false, misleading, or abusive submissions are strictly prohibited and may result in your enquiry being discarded.
                </li>
                <li>
                  <strong>Consent:</strong> By checking the terms checkbox and submitting this form, you confirm that the information provided is accurate and you consent to being contacted by Marketing 4Sight.
                </li>
              </ul>
            </div>

            <button
              onClick={() => {
                setAgreed(true);
                setShowTerms(false);
                if (errors.terms) {
                  setErrors((prev) => {
                    const next = { ...prev };
                    delete next.terms;
                    return next;
                  });
                }
              }}
              className="w-full h-10 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold shadow-md hover:scale-[1.01] transition-all cursor-pointer"
            >
              I Agree to the Terms
            </button>
          </div>
        </div>
      )}

      <section className="w-full bg-gradient-to-b from-white to-purple-50 py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Content */}
          <div>
            {/* Badge */}
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold tracking-wide mb-5">
              Contact Marketing 4Sight
            </span>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#1C1635] mb-6">
              Get in{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Touch.
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg leading-relaxed text-gray-600 max-w-xl mb-8">
              Whether you want to explore the platform, discuss partnerships,
              apply for an open position, or learn more about Marketing 4Sight,
              our team would love to hear from you.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white border border-purple-100 rounded-2xl p-5 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                  ✉
                </div>
                <div>
                  <h4 className="font-semibold text-[#1C1635] mb-1">
                    Business Inquiries
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Reach out for demos, partnerships, and platform discussions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white border border-purple-100 rounded-2xl p-5 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-pink-100 flex items-center justify-center text-pink-600">
                  ☎
                </div>
                <div>
                  <h4 className="font-semibold text-[#1C1635] mb-1">
                    Support &amp; Guidance
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Our team helps you with onboarding, workflow setup, and
                    strategic direction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative w-full max-w-lg mx-auto">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200/20 to-pink-200/20 blur-3xl rounded-[32px]"></div>

            <div className="relative bg-white/95 backdrop-blur-xl border border-purple-100 rounded-[28px] shadow-xl p-6 lg:p-7">

              {/* Heading */}
              <div className="mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-[11px] font-semibold tracking-wide mb-2">
                  Contact Form
                </span>
                <h3 className="text-2xl font-bold text-[#1C1635] leading-tight">
                  Send a{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Message
                  </span>
                </h3>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-3">

                {/* Row 1: Full Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[12px] font-medium text-[#1C1635] mb-0.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={errors.fullName ? inputError : inputNormal}
                    />
                    <InlineError msg={errors.fullName} />
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium text-[#1C1635] mb-0.5">
                      Work Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={errors.email ? inputError : inputNormal}
                    />
                    <InlineError msg={errors.email} />
                  </div>
                </div>

                {/* Row 2: Company + Designation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[12px] font-medium text-[#1C1635] mb-0.5">
                      Company Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company"
                      className={errors.company ? inputError : inputNormal}
                    />
                    <InlineError msg={errors.company} />
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium text-[#1C1635] mb-0.5">
                      Your Designation
                    </label>
                    <input
                      type="text"
                      name="designation"
                      value={form.designation}
                      onChange={handleChange}
                      placeholder="e.g. Marketing Manager"
                      className={errors.designation ? inputError : inputNormal}
                    />
                    <InlineError msg={errors.designation} />
                  </div>
                </div>

                {/* Row 3: Phone + Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[12px] font-medium text-[#1C1635] mb-0.5">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={(e) => {
                        // Only allow digits, max 10
                        const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                        setForm((prev) => ({ ...prev, phone: val }));
                        if (errors.phone) {
                          setErrors((prev) => {
                            const next = { ...prev };
                            delete next.phone;
                            return next;
                          });
                        }
                      }}
                      placeholder="10-digit number"
                      className={errors.phone ? inputError : inputNormal}
                    />
                    <InlineError msg={errors.phone} />
                  </div>

                  <div>
                    <label className="block text-[12px] font-medium text-[#1C1635] mb-0.5">
                      Website <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="website"
                      value={form.website}
                      onChange={handleChange}
                      placeholder="https://yourwebsite.com"
                      className={errors.website ? inputError : inputNormal}
                    />
                    <InlineError msg={errors.website} />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[12px] font-medium text-[#1C1635] mb-0.5">
                    Message
                  </label>
                  <textarea
                    rows="2"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals..."
                    className={`w-full rounded-lg border bg-[#FCFBFF] px-3.5 py-2.5 text-sm outline-none resize-none transition-all duration-300 focus:ring-3 ${
                      errors.message
                        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                        : "border-gray-200 focus:border-purple-400 focus:ring-purple-100"
                    }`}
                  ></textarea>
                  <InlineError msg={errors.message} />
                </div>

                {/* Terms & Conditions */}
                <div>
                  <div className="flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      id="terms-checkbox"
                      checked={agreed}
                      onChange={(e) => {
                        setAgreed(e.target.checked);
                        if (e.target.checked && errors.terms) {
                          setErrors((prev) => {
                            const next = { ...prev };
                            delete next.terms;
                            return next;
                          });
                        }
                      }}
                      className="mt-0.5 w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500 cursor-pointer accent-purple-600"
                    />
                    <label htmlFor="terms-checkbox" className="text-[12px] text-gray-600 leading-snug cursor-pointer">
                      I agree to the{" "}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setShowTerms(true);
                        }}
                        className="text-purple-600 font-semibold underline underline-offset-2 hover:text-purple-800 transition-colors cursor-pointer"
                      >
                        Terms &amp; Conditions
                      </button>{" "}
                      of Marketing 4Sight. <span className="text-red-400">*</span>
                    </label>
                  </div>
                  <InlineError msg={errors.terms} />
                </div>

                {/* Dummy CAPTCHA Widget */}
                <div className="flex items-center justify-between border border-gray-200 rounded-lg bg-[#f9f9f9] px-4 py-3 shadow-sm">
                  {/* Left: Checkbox + Label */}
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded border-2 border-gray-300 bg-white flex items-center justify-center cursor-pointer hover:border-purple-400 transition-colors shrink-0">
                      <div className="w-3 h-3 rounded-sm bg-transparent" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium select-none">
                      I'm not a robot
                    </span>
                  </div>

                  {/* Right: reCAPTCHA branding */}
                  <div className="flex flex-col items-center gap-0.5">
                    <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="32" cy="32" r="30" fill="#4A90D9" />
                      <path d="M32 14C22.06 14 14 22.06 14 32C14 41.94 22.06 50 32 50C41.94 50 50 41.94 50 32C50 22.06 41.94 14 32 14ZM32 44C25.37 44 20 38.63 20 32C20 25.37 25.37 20 32 20C38.63 20 44 25.37 44 32C44 38.63 38.63 44 32 44Z" fill="white" fillOpacity="0.3"/>
                      <path d="M32 8L36 18H28L32 8Z" fill="#34A853"/>
                      <path d="M56 32L46 36V28L56 32Z" fill="#FBBC04"/>
                      <path d="M32 56L28 46H36L32 56Z" fill="#EA4335"/>
                      <path d="M8 32L18 28V36L8 32Z" fill="#4285F4"/>
                    </svg>
                    <span className="text-[9px] text-gray-400 font-medium tracking-tight leading-none">reCAPTCHA</span>
                    <span className="text-[8px] text-gray-300 leading-none">Privacy - Terms</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full h-10 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold shadow-md hover:scale-[1.01] hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;