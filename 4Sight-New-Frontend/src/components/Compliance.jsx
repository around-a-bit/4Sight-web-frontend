import React, { useState } from "react";
import Footer from "./Footer";

const complianceData = [
  {
    id: "privacy",
    title: "Privacy Policy",
    subtitle: "How we collect, use, and safeguard your data",
    icon: "🔒",
    sections: [
      {
        title: "Introduction & Scope",
        text: "Marketing 4Sight, operated by Quantyra Analytics Private Limited, respects your privacy and is committed to protecting your information. This policy details our protocols for handling data submitted through our platforms, workspace integrations, and dashboards."
      },
      {
        title: "Information We Collect",
        text: "We collect direct information submitted through the platform, including user names, corporate profiles, business email addresses, contact phone numbers, billing details, and operational configurations provided to our marketing modules."
      },
      {
        title: "Operational & Usage Data",
        text: "To ensure maximum platform performance and diagnostics, we log user workspace activity, module configurations, active session durations, device specifics, web browser details, and navigation metrics."
      },
      {
        title: "Connected Platform Data",
        text: "With your consent, Marketing 4Sight may access restricted operational data from connected services (such as Google Analytics, Google Search Console, local GMB directories, and paid ad channels) to feed our central analytics dashboards."
      },
      {
        title: "How We Use Information",
        text: "Collected data is used strictly to power active workspace features, analyze diagnostic anomalies, facilitate monthly subscriptions, maintain security guardrails, and feed our optimization layers."
      },
      {
        title: "AI-Assisted Processing",
        text: "Marketing 4Sight integrates AI-assisted models to generate contextual strategies, synthesize search insights, draft content ideas, and prioritize actions. All automated processing runs within safe, isolated databases."
      },
      {
        title: "Data Security Measures",
        text: "We implement industry-standard encryption protocols (SSL/TLS), firewalls, and credential hashing algorithms to secure your data from unauthorized intrusion."
      },
      {
        title: "Contact & Legal Inquiry",
        text: "Quantyra Analytics Private Limited\nAddress: 83, S.P Mukherjee Road, Hazra, Kolkata - 700026, West Bengal, India\nEmail: contact@4sight.com\nWebsite: www.4sight.com"
      }
    ]
  },
  {
    id: "terms",
    title: "Terms & Conditions",
    subtitle: "Understanding your workspace terms and operational guidelines",
    icon: "📜",
    sections: [
      {
        title: "Agreement of Terms",
        text: "These Terms & Conditions govern your active license, access, and use of Marketing 4Sight, including all platform features, workflows, dashboards, and operational tools."
      },
      {
        title: "Account Eligibility",
        text: "Users must be at least 18 years of age and hold active legal authority to represent their respective businesses, organizations, or agency brands."
      },
      {
        title: "Platform Licenses",
        text: "We grant a limited, non-exclusive, revocable, and non-transferable subscription license to use our modular workflows (SEO, GMB, Content, Media, Website templates) as governed by your tier plan."
      },
      {
        title: "User Responsibilities",
        text: "You are solely responsible for preserving the confidentiality of credentials, API tokens, and operational outputs. Users must not deploy platform assets to violate any external policies or local regulations."
      },
      {
        title: "Subscription Billing",
        text: "Access is billed on a monthly or annual recurring cycle. Billing starts immediately upon workspace deployment, with limits adjusted based on active seat counts."
      },
      {
        title: "Governing Law & Jurisdiction",
        text: "These terms shall be interpreted and governed under the laws of the Republic of India, with exclusive legal jurisdiction in Kolkata, West Bengal."
      },
      {
        title: "Contact & Legal Inquiry",
        text: "Quantyra Analytics Private Limited\nAddress: 83, S.P Mukherjee Road, Hazra, Kolkata - 700026, West Bengal, India\nEmail: contact@4sight.com\nWebsite: www.4sight.com"
      }
    ]
  },
  {
    id: "refund",
    title: "Refund & Cancellation",
    subtitle: "Clear policies on subscriptions, billing cycles, and cancellation",
    icon: "💳",
    sections: [
      {
        title: "Subscription Model Overview",
        text: "Marketing 4Sight operates as a cloud-hosted Software-as-a-Service (SaaS). All features are provisioned dynamically upon workspace deployment."
      },
      {
        title: "Cancellation Workflow",
        text: "Subscribers may initiate a cancellation request from their workspace billing panel at any point before their next scheduled billing event to halt future renewal cycles."
      },
      {
        title: "Refund Terms",
        text: "Subscription charges are non-refundable except where mandated by local statutes or special service-level commitments. We do not provide prorated refunds for mid-cycle cancellations."
      },
      {
        title: "Failed Payment Protocols",
        text: "Unpaid dues or transaction disputes will trigger immediate seat locks and suspension of background syncing pipelines. Re-activation occurs immediately upon balance settlement."
      },
      {
        title: "Contact & Legal Inquiry",
        text: "Quantyra Analytics Private Limited\nAddress: 83, S.P Mukherjee Road, Hazra, Kolkata - 700026, West Bengal, India\nEmail: contact@4sight.com\nWebsite: www.4sight.com"
      }
    ]
  }
];

export default function Compliance() {
  const [active, setActive] = useState("privacy");

  const current = complianceData.find((item) => item.id === active);

  return (
    <div className="relative w-full h-screen overflow-y-auto overflow-x-hidden bg-transparent pt-1">
      {/* Decorative blurry wash blobs */}
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-purple-200/20 blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-pink-100/20 blur-3xl pointer-events-none z-0"></div>

      <section className="relative w-full py-15 px-6 lg:px-20 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100/70 border border-purple-200 text-purple-700 text-xs font-semibold tracking-wider uppercase mb-4">
              Compliance Center
            </span>

            <h1 className="text-4xl lg:text-5xl font-black text-[#1C1635] mb-2 tracking-tight">
              Legal & Policy{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Information
              </span>
            </h1>

            <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Transparent policies, terms, and billing specifications designed to keep Marketing 4Sight secure, reliable, and compliant.
            </p>
          </div>

          {/* Main Grid Layout */}
          <div className="grid lg:grid-cols-[280px_minmax(0,1fr)] gap-5 items-start">
            {/* Sidebar Navigation */}
            <div className="bg-white/80 backdrop-blur-xl border border-purple-100 rounded-3xl p-4 shadow-xl shadow-purple-950/5 sticky top-24 space-y-2.5">
              <h3 className="text-xs font-bold text-purple-400 tracking-widest uppercase px-3 mb-4">
                Select Document
              </h3>

              <div className="space-y-1.5">
                {complianceData.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActive(item.id)}
                      className={`w-full flex items-center gap-3.5 rounded-2xl px-4 py-4 text-left transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/25 scale-[1.03] font-semibold"
                          : "hover:bg-purple-50/70 text-[#1C1635] hover:translate-x-1"
                      }`}
                    >
                      <span className="text-xl bg-white/20 w-8 h-8 rounded-lg flex items-center justify-center">
                        {item.icon}
                      </span>
                      <div>
                        <span className="block text-sm leading-tight">
                          {item.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-purple-50 px-3 text-[11px] text-gray-400 leading-normal">
                Quantyra Analytics Private Limited &copy; 2026. All rights reserved.
              </div>
            </div>

            {/* Content Document Card */}
            <div className="bg-white/90 backdrop-blur-xl border border-purple-100 rounded-[32px] shadow-2xl shadow-purple-950/5 overflow-hidden flex flex-col min-h-[600px]">
              {/* Document Header */}
              <div className="border-b border-purple-50 px-8 py-8 bg-gradient-to-r from-purple-50/40 to-pink-50/20">
                <span className="text-xs font-bold text-purple-600 tracking-wider uppercase block mb-1">
                  Active Document
                </span>
                <h2 className="text-3xl font-black text-[#1C1635] mb-2">
                  {current.title}
                </h2>
                <p className="text-gray-500 text-sm">
                  {current.subtitle}
                </p>
              </div>

              {/* Scrollable Content Pane */}
              <div className="flex-grow p-8 lg:p-10">
                <div className="space-y-8 max-w-3xl">
                  {current.sections.map((sec, idx) => (
                    <div
                      key={idx}
                      className="group border-b border-purple-50/60 last:border-b-0 pb-6 last:pb-0"
                    >
                      <h3 className="text-base font-bold text-[#1C1635] mb-3 flex items-center gap-2.5 transition-colors group-hover:text-purple-600">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 shrink-0"></span>
                        {sec.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line font-medium pl-4.5">
                        {sec.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}