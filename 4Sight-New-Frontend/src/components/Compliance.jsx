import React, { useState } from "react";
import Footer from "./Footer";
import { ShieldCheck, ScrollText, CreditCard, ChevronRight } from "lucide-react";

const complianceData = [
  {
    id: "privacy",
    title: "Privacy Policy",
    subtitle: "How we collect, use, and safeguard your data",
    icon: ShieldCheck,
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
    icon: ScrollText,
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
    title: "Refund & Replacement",
    subtitle: "Clear policies on subscriptions, billing cycles, and cancellation",
    icon: CreditCard,
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
    <div className="relative w-full h-screen overflow-y-auto overflow-x-hidden bg-[#FAF8FD] pt-24">
      {/* Decorative premium glass blobs */}
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-300/20 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-pink-300/15 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] rounded-full bg-indigo-300/10 blur-[100px] pointer-events-none z-0"></div>

      <section className="relative w-full pb-24 px-6 lg:px-20 z-10 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 pt-8">
            <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/60 backdrop-blur-md border border-purple-100 shadow-sm text-purple-700 text-xs font-bold tracking-widest uppercase mb-6">
              Compliance Center
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1C1635] mb-6 tracking-tight">
              Legal & Policy{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Information
              </span>
            </h1>

            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Transparent policies, terms, and billing specifications designed to keep Marketing 4Sight secure, reliable, and fully compliant.
            </p>
          </div>

          {/* Main Grid Layout */}
          <div className="grid lg:grid-cols-[320px_minmax(0,1fr)] gap-8 items-start">
            {/* Sidebar Navigation */}
            <div className="bg-white/60 backdrop-blur-2xl border border-white/60 rounded-[32px] p-5 shadow-2xl shadow-purple-900/5 sticky top-32">
              <h3 className="text-xs font-bold text-gray-400 tracking-widest uppercase px-4 mb-5">
                Select Document
              </h3>

              <div className="space-y-3">
                {complianceData.map((item) => {
                  const isActive = active === item.id;
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActive(item.id)}
                      className={`w-full flex items-center justify-between rounded-2xl px-5 py-4 text-left transition-all duration-300 border group ${
                        isActive
                          ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white border-transparent shadow-xl shadow-purple-500/20 scale-[1.02]"
                          : "bg-white/50 border-white/50 hover:bg-white hover:border-purple-200 text-[#1C1635] hover:shadow-md"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isActive ? "bg-white/20 text-white" : "bg-purple-50 text-purple-600 group-hover:bg-purple-100"
                        }`}>
                          <IconComponent size={20} />
                        </span>
                        <span className={`text-base font-bold tracking-tight ${isActive ? "text-white" : "text-[#1C1635]"}`}>
                          {item.title}
                        </span>
                      </div>
                      {isActive && <ChevronRight size={18} className="text-white/70" />}
                    </button>
                  );
                })}
              </div>

              <div className="pt-6 mt-6 border-t border-purple-100 px-4 text-xs font-medium text-gray-400 leading-relaxed">
                Quantyra Analytics Private Limited &copy; {new Date().getFullYear()}. All rights reserved.
              </div>
            </div>

            {/* Content Document Card */}
            <div className="bg-white/70 backdrop-blur-2xl border border-white/80 rounded-[40px] shadow-[0_20px_60px_-15px_rgba(124,58,237,0.1)] overflow-hidden flex flex-col min-h-[700px]">
              {/* Document Header */}
              <div className="px-10 py-12 bg-gradient-to-br from-purple-50/50 via-white/50 to-pink-50/50 border-b border-purple-100/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-200/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-purple-600 tracking-widest uppercase mb-4">
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                    Active Document
                  </span>
                  <h2 className="text-4xl font-black text-[#1C1635] mb-3 tracking-tight">
                    {current.title}
                  </h2>
                  <p className="text-gray-500 text-lg font-medium">
                    {current.subtitle}
                  </p>
                </div>
              </div>

              {/* Scrollable Content Pane */}
              <div className="flex-grow px-10 py-12">
                <div className="space-y-10 max-w-3xl">
                  {current.sections.map((sec, idx) => (
                    <div
                      key={idx}
                      className="group relative pl-8"
                    >
                      {/* Custom timeline/bullet marker */}
                      <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-[3px] border-purple-200 bg-white group-hover:border-purple-500 transition-colors"></div>
                      <div className="absolute left-[5px] top-6 bottom-[-2.5rem] w-[2px] bg-gradient-to-b from-purple-100 to-transparent last:hidden"></div>

                      <h3 className="text-xl font-bold text-[#1C1635] mb-4 tracking-tight group-hover:text-purple-700 transition-colors">
                        {sec.title}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line font-medium">
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