import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import { ShieldCheck, ScrollText, CreditCard, Cookie } from "lucide-react";

// ... [data definition kept unchanged but not shown here because replace block needs full text for those lines]


const complianceData = [
  {
    id: "privacy",
    title: "Privacy Policy",
    subtitle: "How we collect, use, and safeguard your data.",
    icon: ShieldCheck,
    date: "May 2026",
    sections: [
      {
        title: "Introduction & Scope",
        text: "Marketing4Sight operated by Quantyra Analytics Private Limited respects your privacy and is committed to protecting your information. This Privacy Policy explains how we collect, use, process, and safeguard data when you use the platform or website."
      },
      {
        title: "Information We Collect",
        text: "This may include:",
        list: [
            "Name and business details",
            "Email address and phone number",
            "Company information and billing details",
            "Operational inputs submitted through the platform"
        ]
      },
      {
        title: "Operational & Usage Data",
        text: "We may collect:",
        list: [
            "Workflow activity and feature usage",
            "Login information, browser, and device details",
            "Engagement activity and platform interaction data"
        ]
      },
      {
        title: "Connected Platform Data",
        text: "Where integrations are authorized, Marketing4Sight may access limited operational data from connected services such as Google Business Profile, Google Analytics, Search Console, social media platforms, or related marketing systems."
      },
      {
        title: "How We Use Information",
        text: "We use collected information to:",
        list: [
            "Provide platform functionality and improve workflows",
            "Support platform intelligence and deliver customer support",
            "Process subscriptions and improve security",
            "Analyze usage trends and enhance platform performance"
        ]
      },
      {
        title: "AI-Assisted Processing",
        text: "Certain operational workflows may use AI-assisted systems to generate recommendations, summarize insights, organize information, or support operational visibility. These systems are designed to assist workflows and do not independently make binding business decisions."
      },
      {
        title: "Cookies & Tracking Technologies",
        text: "Marketing4Sight may use cookies and analytics technologies to improve user experience, analyze traffic, maintain sessions, and understand platform usage. For more details, please review our Cookie Policy."
      },
      {
        title: "Data Sharing & Security",
        text: "We do not sell personal information. Information may be shared with infrastructure providers, analytics services, payment processors, customer support tools, or authorized service providers required for platform operations. All sharing is limited to operational necessity.\n\nWe implement reasonable administrative, technical, and organizational measures to protect information against unauthorized access, misuse, or disclosure. However, no digital system can guarantee absolute security."
      },
      {
        title: "User Rights & Contact",
        text: "Users may request access to their information, correction of inaccurate information, or deletion requests where legally applicable.",
        box: {
            title: "For privacy-related questions, contact:",
            company: "Quantyra Analytics Private Limited",
            email: "support@quantyra.com"
        }
      }
    ]
  },
  {
    id: "terms",
    title: "Terms & Conditions",
    subtitle: "Rules, guidelines, and agreements for platform use.",
    icon: ScrollText,
    date: "May 2026",
    sections: [
      {
        title: "Welcome to Marketing4Sight",
        text: "A platform developed and operated by Quantyra Analytics Private Limited (“Company”, “we”, “our”, or “us”). These Terms & Conditions govern your access to and use of the Marketing4Sight platform, website, products, services, dashboards, workflows, and associated tools. By accessing or using the platform, you agree to comply with these Terms."
      },
      {
        title: "Eligibility",
        text: "You must be at least 18 years old and authorized to represent your business or organization to use the platform. By using Marketing4Sight, you confirm that:",
        list: [
            "the information provided is accurate,",
            "you are legally authorized to use the services,",
            "and your use complies with applicable laws and regulations."
        ]
      },
      {
        title: "Platform Services",
        text: "Marketing4Sight is a marketing operations and intelligence platform that may include marketing workflows, SEO visibility tools, content operations, GMB management, performance visibility, analytics layers, optimization support, AI-assisted recommendations, reporting environments, and related operational modules. Features and functionality may evolve over time as the platform develops."
      },
      {
        title: "User Responsibilities",
        text: "Users are responsible for maintaining account confidentiality, ensuring the accuracy of submitted information, managing connected third-party accounts, and using the platform lawfully. Users must not:",
        listError: [
            "misuse the platform or attempt unauthorized access,",
            "upload harmful or unlawful content,",
            "interfere with platform operations,",
            "or use the platform for fraudulent, abusive, or illegal activities."
        ]
      },
      {
        title: "Subscription Billing",
        text: "By purchasing a subscription, you agree to applicable billing terms, authorize recurring billing where applicable, and acknowledge that pricing, inclusions, and limits may vary by plan. Failure to complete payment obligations may result in restricted access or suspension of services."
      },
      {
        title: "Intellectual Property & AI",
        text: "All platform components (software, workflows, interfaces, branding) remain the intellectual property of Quantyra Analytics Private Limited unless otherwise stated. Users retain ownership of content uploaded by them.\n\nCertain features may provide AI-assisted suggestions. These outputs support decision-making, but final business, marketing, legal, and strategic decisions remain the responsibility of the user."
      },
      {
        title: "Limitation of Liability",
        text: "To the maximum extent permitted by law, Quantyra Analytics Private Limited shall not be liable for indirect losses, loss of profits, business interruption, data loss, operational delays, or consequential damages arising from use of the platform."
      },
      {
        title: "Governing Law",
        text: "These Terms shall be governed by and interpreted in accordance with the laws of India. Any disputes arising from platform usage shall fall under the jurisdiction of courts located in Kolkata, West Bengal, India."
      }
    ]
  },
  {
    id: "refund",
    title: "Refund & Cancellation",
    subtitle: "Guidelines regarding subscription management and payments.",
    icon: CreditCard,
    date: "May 2026",
    sections: [
      {
        title: "Subscription Nature",
        text: "This Policy applies to subscriptions and services provided through Marketing4Sight developed and operated by Quantyra Analytics Private Limited. Marketing4Sight is a cloud-based digital software platform delivered electronically. Access begins upon activation or onboarding."
      },
      {
        title: "Cancellation Policy",
        list: [
            "Users may request cancellation of subscriptions according to their active billing cycle.",
            "Cancellation requests submitted before the next billing cycle will prevent future renewals where applicable.",
            "Cancellation does not automatically generate refunds for previously billed subscription periods."
        ]
      },
      {
        title: "Refund Policy",
        text: "Due to the nature of digital SaaS services, subscription fees once paid are generally non-refundable except where required under applicable law. Refund requests, if any, are reviewed on a case-by-case basis at the sole discretion of Quantyra Analytics Private Limited."
      },
      {
        title: "Chargebacks & Failed Payments",
        text: "Users are encouraged to contact the support team before initiating disputes or chargebacks. Fraudulent, abusive, or unauthorized chargeback attempts may result in account suspension, restricted access, or further review.\n\nIf subscription payments fail, access to certain features or services may be restricted, and continued non-payment may result in account suspension."
      },
      {
        title: "Pricing Changes & Contact",
        text: "The Company reserves the right to update subscription pricing, plan structures, or feature allocations with prior notice where applicable.",
        box: {
            title: "For billing or refund-related queries, contact:",
            company: "Quantyra Analytics Private Limited",
            email: "billing@quantyra.com"
        }
      }
    ]
  },
  {
    id: "cookie",
    title: "Cookie Policy",
    subtitle: "How we use cookies and tracking technologies.",
    icon: Cookie,
    date: "May 2026",
    sections: [
      {
        title: "Introduction",
        text: "This Cookie Policy explains how Marketing4Sight developed and operated by Quantyra Analytics Private Limited uses cookies and related technologies."
      },
      {
        title: "What Are Cookies?",
        text: "Cookies are small text files stored on your device that help websites recognize users, improve functionality, and analyze usage behavior."
      },
      {
        title: "How We Use Cookies",
        text: "Marketing4Sight may use cookies to:",
        gridList: [
            "Maintain secure sessions",
            "Improve functionality",
            "Analyze website traffic",
            "Understand engagement",
            "Remember preferences",
            "Support optimization"
        ]
      },
      {
        title: "Types of Cookies We May Use",
        cookieTypes: [
            {
                name: "Essential Cookies",
                desc: "Required for core platform functionality and secure access.",
                borderColor: "border-l-[#0859b8]",
                titleColor: "text-[#0859b8]"
            },
            {
                name: "Analytics Cookies",
                desc: "Help us understand traffic, usage behavior, and operational performance.",
                borderColor: "border-l-[#00adc4]",
                titleColor: "text-[#00adc4]"
            },
            {
                name: "Functional Cookies",
                desc: "Support improved user experience and platform preferences.",
                borderColor: "border-l-[#e7eb90]",
                titleColor: "text-yellow-600"
            },
            {
                name: "Marketing & Tracking Cookies",
                desc: "May be used for campaign measurement, remarketing, or advertising analytics where applicable.",
                borderColor: "border-l-gray-400",
                titleColor: "text-gray-700"
            }
        ]
      },
      {
        title: "Third-Party Cookies",
        text: "Certain third-party tools integrated into the website or platform may place cookies through their own systems, including analytics providers, advertising platforms, social media integrations, or embedded services. Their policies govern their individual cookie practices."
      },
      {
        title: "Managing Cookies & Updates",
        text: "Users may control or disable cookies through browser settings. Disabling certain cookies may impact website or platform functionality.\n\nThis Cookie Policy may be updated periodically to reflect technology, platform, or regulatory changes."
      }
    ]
  }
];

export default function Compliance() {
  const location = useLocation();
  const [active, setActive] = useState("privacy");
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace("#", "");
      if (complianceData.some(item => item.id === hash)) {
        setActive(hash);
      }
    }
  }, [location.hash]);

  const handleTabChange = (id) => {
    if (id === active) return;
    setIsFading(true);
    setTimeout(() => {
        setActive(id);
        setIsFading(false);
        if (window.innerWidth < 1024) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 300);
  };

  const current = complianceData.find((item) => item.id === active);

  return (
    <div className="text-[#222222] antialiased selection:bg-[#e7eb90] selection:text-[#222222] font-['Helvetica_Neue',sans-serif]">
        
        {/* Dynamic Animated Background from ContactUs.jsx */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#e7eb90]/20 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
            <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-blue-300/20 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-[#00adc4]/10 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-4000"></div>
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
        </div>

        <main className="pt-36 pb-24 min-h-screen relative z-10">
            {/* HEADER SECTION */}
            <section className="text-center max-w-4xl mx-auto px-6 mb-16">
                <div className="inline-flex items-center justify-center space-x-2 bg-white/60 backdrop-blur-md border border-gray-200 px-4 py-1.5 rounded-full mb-6 shadow-sm">
                    <span className="w-2 h-2 rounded-full secondary_bg animate-pulse"></span>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Compliance Hub</span>
                </div>
                <h1 className="text-5xl md:text-6xl heading1 text-[#222222] mb-6">
                    Legal & Policy <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0859b8] to-[#00adc4]">Information</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed bodyText">
                    Transparent policies, terms, and billing specifications designed to keep Marketing4Sight secure, reliable, and fully compliant.
                </p>
            </section>

            <section className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-8 items-start relative">
                    
                    {/* LEFT SIDEBAR (Sticky Navigation) */}
                    <div className="lg:col-span-4 lg:sticky lg:top-36 z-10">
                        <div className="bg-white/70 backdrop-blur-2xl p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00adc4]/10 rounded-full blur-2xl"></div>
                            
                            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 pl-2">Select Document</h3>
                            
                            <div className="space-y-3 flex flex-col relative z-10">
                                {complianceData.map((item) => {
                                    const isActive = active === item.id;
                                    const IconComponent = item.icon;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => handleTabChange(item.id)}
                                            className={`group w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 font-bold border ${
                                                isActive 
                                                ? "primary_bg text-white shadow-[0_10px_20px_rgba(8,89,184,0.2)] border-blue-600" 
                                                : "bg-white/50 text-gray-600 hover:bg-white hover:shadow-md border-transparent hover:border-gray-100"
                                            }`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`p-2 rounded-xl transition-colors ${isActive ? "bg-white/20" : "bg-gray-100 text-gray-400 group-hover:bg-blue-50 group-hover:text-[#0859b8]"}`}>
                                                    <IconComponent className={`w-5 h-5 ${isActive ? "text-white" : ""}`} />
                                                </div>
                                                {item.title}
                                            </div>
                                            <svg className={`w-5 h-5 transition-all ${isActive ? "opacity-100 transform translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[#0859b8]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                                        </button>
                                    );
                                })}
                            </div>
                            
                            <div className="mt-8 pt-6 border-t border-gray-100/50 text-xs text-gray-400 leading-relaxed text-center">
                                Quantyra Analytics Private Limited &copy; {new Date().getFullYear()}.<br/>All rights reserved.
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT AREA */}
                    <div className="lg:col-span-8">
                        <div className="bg-white/70 backdrop-blur-2xl p-8 md:p-14 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white min-h-[600px] relative overflow-hidden transition-all duration-300">
                            
                            <div 
                                style={{
                                    opacity: isFading ? 0 : 1,
                                    transform: isFading ? 'translateY(10px)' : 'translateY(0)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div className="mb-12">
                                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1 rounded-md mb-6">
                                        <span className="w-2 h-2 rounded-full secondary_bg animate-pulse"></span>
                                        <span className="text-[10px] font-bold primary_color uppercase tracking-widest">Effective Date: {current.date}</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl heading1 primary_color mb-4">{current.title}</h2>
                                    <p className="text-xl text-gray-500 bodyText">{current.subtitle}</p>
                                </div>
                                
                                <div className="space-y-6">
                                    {current.sections.map((sec, idx) => (
                                        <div key={idx} className="relative p-8 mb-6 bg-white/50 rounded-2xl border border-white/80 transition-all duration-400 hover:bg-white/90 hover:shadow-[0_10px_30px_-10px_rgba(8,89,184,0.1)] hover:translate-x-1 group">
                                            {/* Interactive Timeline Line */}
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 rounded-l-md transition-colors duration-400 group-hover:bg-gradient-to-b group-hover:from-[#0859b8] group-hover:to-[#00adc4]"></div>
                                            
                                            {/* Timeline Dot */}
                                            <div className="absolute -left-[3px] top-10 w-2.5 h-2.5 rounded-full bg-white border-2 border-gray-200 transition-all duration-400 shadow-[0_0_0_4px_rgba(255,255,255,0.8)] group-hover:border-[#00adc4] group-hover:bg-[#e7eb90] group-hover:shadow-[0_0_10px_rgba(0,173,196,0.4)]"></div>

                                            <h3 className="text-2xl font-bold text-[#222222] mb-3 heading2 group-hover:text-[#0859b8] transition-colors">{sec.title}</h3>
                                            
                                            {sec.text && (
                                                <p className="text-gray-600 text-lg leading-relaxed mb-4 bodyText whitespace-pre-line">
                                                    {sec.text}
                                                </p>
                                            )}
                                            
                                            {sec.list && (
                                                <ul className="space-y-3 mb-4 text-gray-600 text-lg bodyText">
                                                    {sec.list.map((li, i) => (
                                                        <li key={i} className="flex items-start"><span className="secondary_color mr-3 mt-1">✦</span> {li}</li>
                                                    ))}
                                                </ul>
                                            )}

                                            {sec.listError && (
                                                <ul className="space-y-3 mb-4 text-gray-600 text-lg bodyText">
                                                    {sec.listError.map((li, i) => (
                                                        <li key={i} className="flex items-start"><span className="text-red-500 mr-3 mt-1">✕</span> {li}</li>
                                                    ))}
                                                </ul>
                                            )}

                                            {sec.gridList && (
                                                <div className="grid md:grid-cols-2 gap-4 mb-4 bodyText">
                                                    {sec.gridList.map((gl, i) => (
                                                        <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center">
                                                            <span className="secondary_color mr-3">✦</span> {gl}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {sec.cookieTypes && (
                                                <div className="space-y-4 bodyText mt-4">
                                                    {sec.cookieTypes.map((ct, i) => (
                                                        <div key={i} className={`bg-white p-5 rounded-xl border border-blue-100 shadow-sm border-l-4 ${ct.borderColor}`}>
                                                            <h4 className={`font-bold text-lg ${ct.titleColor}`}>{ct.name}</h4>
                                                            <p className="text-gray-600 mt-1">{ct.desc}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {sec.box && (
                                                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 inline-block w-full md:w-auto mt-4">
                                                    <p className="text-gray-700 text-lg leading-relaxed bodyText">
                                                        {sec.box.title}<br/>
                                                        <strong className="primary_color block mt-2">{sec.box.company}</strong>
                                                        Email: <a href={`mailto:${sec.box.email}`} className="secondary_color font-bold hover:underline">{sec.box.email}</a>
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </main>
        
        <Footer />
    </div>
  );
}