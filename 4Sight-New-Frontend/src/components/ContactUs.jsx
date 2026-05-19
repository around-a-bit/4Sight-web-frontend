// ContactUs.jsx

import React from "react";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div className="relative w-full h-screen overflow-y-auto overflow-x-hidden bg-transparent pt-2">
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
                    Support & Guidance
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
          <div className="relative w-full max-w-md mx-auto">

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

              <form className="space-y-3.5">

                {/* Name */}
                <div>
                  <label className="block text-[13px] font-medium text-[#1C1635] mb-1">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full h-11 rounded-lg border border-gray-200 bg-[#FCFBFF] px-4 text-sm outline-none transition-all duration-300 focus:border-purple-400 focus:ring-3 focus:ring-purple-100"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[13px] font-medium text-[#1C1635] mb-1">
                    Work Email *
                  </label>

                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full h-11 rounded-lg border border-gray-200 bg-[#FCFBFF] px-4 text-sm outline-none transition-all duration-300 focus:border-purple-400 focus:ring-3 focus:ring-purple-100"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-[13px] font-medium text-[#1C1635] mb-1">
                    Company Name *
                  </label>

                  <input
                    type="text"
                    placeholder="Your company"
                    className="w-full h-11 rounded-lg border border-gray-200 bg-[#FCFBFF] px-4 text-sm outline-none transition-all duration-300 focus:border-purple-400 focus:ring-3 focus:ring-purple-100"
                  />
                </div>

                {/* Website */}
                <div>
                  <label className="block text-[13px] font-medium text-[#1C1635] mb-1">
                    Website
                  </label>

                  <input
                    type="text"
                    placeholder="https://yourwebsite.com"
                    className="w-full h-11 rounded-lg border border-gray-200 bg-[#FCFBFF] px-4 text-sm outline-none transition-all duration-300 focus:border-purple-400 focus:ring-3 focus:ring-purple-100"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[13px] font-medium text-[#1C1635] mb-1">
                    Message
                  </label>

                  <textarea
                    rows="3"
                    placeholder="Tell us about your goals..."
                    className="w-full rounded-lg border border-gray-200 bg-[#FCFBFF] px-4 py-3 text-sm outline-none resize-none transition-all duration-300 focus:border-purple-400 focus:ring-3 focus:ring-purple-100"
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full h-11 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold shadow-md hover:scale-[1.01] transition-all duration-300"
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