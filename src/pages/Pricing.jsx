import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

export default function Pricing() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [plans, setPlans] = useState([]);
  const [plansLoading, setPlansLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/v1/subscription/plans`)
      .then((r) => r.json())
      .then((data) => setPlans(Array.isArray(data) ? data : []))
      .catch(() => setPlans([]))
      .finally(() => setPlansLoading(false));
  }, []);

  const handlePlanSelect = (plan) => {
    navigate(`/register?plan_id=${plan.id}&plan_name=${encodeURIComponent(plan.plan_name)}&price=${plan.price}`);
  };

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  const freePlan = plans.find((p) => parseFloat(p.price) === 0);
  const paidPlans = plans.filter((p) => parseFloat(p.price) > 0);

  return (
    <div className="text-[#222222] antialiased selection:bg-[#e7eb90] selection:text-[#222222] font-['Helvetica_Neue',sans-serif]">

      {/* GLOBAL ANIMATED BACKGROUND */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#e7eb90]/20 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-blue-300/20 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-[#00adc4]/10 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
      </div>

      <main className="pt-32 pb-16 relative z-10">

        {/* HEADER SECTION */}
        <section className="text-center max-w-4xl mx-auto px-6 mb-16 animate-[fadeInUp_0.8s_ease-out]">
          <div className="inline-block bg-blue-50 primary_color font-bold px-4 py-1.5 rounded-full text-sm tracking-wide mb-6 border border-blue-100 uppercase">
            Pricing Plans
          </div>
          <h1 className="text-5xl md:text-6xl heading1 text-[#222222] mb-6">
            Grow Your Brand Smarter with <br /><span className="primary_color">Data-Driven Marketing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed bodyText">
            From SEO and content management to GMB optimization and website generation — Marketing4Sight helps businesses manage their digital growth from one platform.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            {/* <button onClick={() => freePlan ? handlePlanSelect(freePlan) : navigate("/register")} className="primary_bg text-white font-bold py-3 px-8 rounded shadow-lg hover:bg-blue-800 transition cursor-pointer">Start Free</button> */}
            <Link to="/contact-us" className="bg-white border-2 border-gray-200 text-[#222222] font-bold py-3 px-8 rounded hover:border-[#0859b8] hover:text-[#0859b8] transition cursor-pointer">Contact Sales</Link>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {["SEO Manager", "Website Builder", "Content Manager", "GMB Manager", "Funnel Manager", "Media Manager"].map((m) => (
              <span key={m} className="bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                <span className="secondary_color">✦</span> {m}
              </span>
            ))}
          </div>
        </section>

        {/* PRICING CARDS */}
        <section className="max-w-5xl mx-auto px-6 mb-12" id="free">
          {plansLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-10 h-10 border-4 border-[#0859b8] border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : plans.length === 0 ? (
            <div className="text-center py-20 text-gray-500 bodyText text-lg">No plans available at the moment.</div>
          ) : (
            <div className={`grid gap-8 items-stretch ${plans.length === 1 ? "md:grid-cols-1 max-w-md mx-auto" : plans.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
              {plans.map((plan, idx) => {
                const isFree = parseFloat(plan.price) === 0;
                const isPopular = !isFree && idx === (freePlan ? 1 : 0);
                return (
                  <div
                    key={plan.id}
                    className={`rounded-3xl p-10 border flex flex-col h-full relative overflow-hidden group transition duration-300 ${
                      isPopular
                        ? "primary_bg border-blue-800 shadow-2xl text-white hover:border-blue-400"
                        : "bg-white border-gray-200 shadow-xl hover:border-[#0859b8]"
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00adc4]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    )}
                    <div className={`text-sm font-bold px-4 py-1.5 rounded-full inline-block mb-6 self-start ${isPopular ? "bg-[#e7eb90] text-[#222222] shadow-md" : "bg-blue-50 primary_color"}`}>
                      {isPopular ? "Most Popular" : isFree ? "Best for Starters" : "Professional"}
                    </div>
                    <h3 className={`text-4xl heading1 mb-4 ${isPopular ? "text-white" : "text-[#222222]"}`}>{plan.plan_name}</h3>
                    <p className={`mb-8 min-h-[48px] bodyText ${isPopular ? "text-blue-100" : "text-gray-600"}`}>
                      {plan.description || (isFree ? "Perfect for startups and small businesses beginning their digital journey." : "Complete data-driven marketing infrastructure for growing brands.")}
                    </p>
                    <div className="mb-2">
                      <span className="text-2xl font-bold">₹</span>
                      <span className="text-6xl heading1">{parseFloat(plan.price).toLocaleString("en-IN")}</span>
                      <span className={`font-bold ${isPopular ? "text-blue-200" : "text-gray-500"}`}>
                        /{plan.duration_days >= 365 ? "year" : plan.duration_days >= 28 ? "month" : `${plan.duration_days} days`}
                      </span>
                    </div>
                    {plan.credits > 0 && (
                      <p className={`text-sm mb-8 ${isPopular ? "text-blue-300" : "text-gray-400"}`}>{plan.credits} AI credits included</p>
                    )}
                    <div className="flex-grow" />
                    <button
                      onClick={() => handlePlanSelect(plan)}
                      className={`w-full text-center font-bold py-4 rounded-xl transition relative z-10 mt-8 cursor-pointer ${
                        isPopular
                          ? "bg-[#e7eb90] text-[#222222] hover:bg-yellow-300 shadow-[0_0_20px_rgba(231,235,144,0.4)] border-2 border-transparent"
                          : "bg-white border-2 border-[#0859b8] primary_color hover:bg-[#0859b8] hover:!text-white"
                      }`}
                    >
                      {isFree ? "Get Started Free" : "Get Started"}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* COUPON SECTION */}
        <section className="max-w-md mx-auto px-6 mb-24 text-center">
          <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-bold primary_color mb-2 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 secondary_color" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
              Have a promo code?
            </h3>
            <p className="text-sm text-gray-500 mb-4 bodyText">You can apply your coupon code on the checkout page after selecting a plan.</p>
            <button
              onClick={() => paidPlans.length > 0 ? handlePlanSelect(paidPlans[0]) : navigate("/register")}
              className="primary_bg text-white font-bold px-6 py-2.5 rounded-xl hover:bg-blue-800 transition text-sm cursor-pointer"
            >
              Select a Plan to Apply Coupon →
            </button>
          </div>
        </section>

        {/* FEATURE COMPARISON TABLE */}
        <section className="max-w-5xl mx-auto px-6 mb-24">
          <div className="text-center mb-10">
            <h2 className="text-4xl heading1 primary_color mb-4">Compare Plans in Detail</h2>
            <p className="text-gray-600 bodyText">See exactly what's included in each plan.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#222222] text-white">
                    <th className="py-5 px-6 font-bold text-lg w-1/2">Features</th>
                    <th className="py-5 px-6 font-bold text-lg text-center w-1/4">Free</th>
                    <th className="py-5 px-6 font-bold text-lg text-center w-1/4 primary_bg">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 divide-y divide-gray-100 bodyText">
                  {[
                    { feature: "Marketing Dashboard", free: "check", enterprise: "check" },
                    { feature: "Website Builder", free: "Limited", enterprise: "Full" },
                    { feature: "SEO Manager", free: "Limited", enterprise: "Full" },
                    { feature: "GMB Manager", free: "Limited", enterprise: "Full" },
                    { feature: "Content Manager", free: "Limited", enterprise: "Full" },
                    { feature: "Competitor Tracking", free: "cross", enterprise: "check" },
                    { feature: "Funnel Manager", free: "cross", enterprise: "check" },
                    { feature: "Media Manager", free: "cross", enterprise: "check" },
                    { feature: "AI Content Generation", free: "Limited", enterprise: "Unlimited" },
                    { feature: "Analytics", free: "Basic", enterprise: "Advanced" },
                    { feature: "Support", free: "Standard", enterprise: "Priority" },
                    { feature: "Multi Brand Support", free: "cross", enterprise: "check" },
                    { feature: "Billing & Invoice", free: "cross", enterprise: "check" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition">
                      <td className="py-4 px-6 font-bold text-[#222222]">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        {row.free === "check" ? <svg className="w-6 h-6 secondary_color mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          : row.free === "cross" ? <svg className="w-6 h-6 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                          : <span className="text-gray-400 font-bold">{row.free}</span>}
                      </td>
                      <td className="py-4 px-6 text-center bg-blue-50/30">
                        {row.enterprise === "check" ? <svg className="w-6 h-6 primary_color mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          : <span className="primary_color font-bold">{row.enterprise}</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE ENTERPRISE */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl heading1 primary_color mb-4">Why Choose Enterprise?</h2>
            <p className="text-gray-600 bodyText">Unlock the full potential of data-driven marketing automation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 bodyText">
            {[
              { title: "Flexible Billing", desc: "Choose monthly or yearly billing with automatic GST invoice generation.", icon: "M13 10V3L4 14h7v7l9-11h-7z", bg: "bg-blue-50 primary_color" },
              { title: "Payment Options", desc: "Support for UPI, QR codes, credit/debit cards, bank transfer.", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z", bg: "bg-[#00adc4]/10 secondary_color" },
              { title: "Coupon Support", desc: "Apply discount codes and promotional coupons instantly during checkout.", icon: "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z", bg: "bg-yellow-50 text-yellow-600" },
              { title: "Advanced Analytics", desc: "Deep insights with comprehensive reporting and data visualization.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", bg: "bg-blue-50 primary_color" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-xl ${item.bg} flex items-center justify-center mb-6`}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
                </div>
                <h3 className="text-xl font-bold text-[#222222] mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-6 mb-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl heading1 primary_color mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 bodyText">Everything you need to know about Marketing4Sight pricing.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "Is there a free plan?", a: "Yes, we offer a Free plan perfect for startups and small businesses to begin their digital journey." },
              { q: "Can I switch between monthly and yearly billing?", a: "Absolutely. You can change your billing preference at any time from your account settings." },
              { q: "Do I get invoices?", a: "Yes, automated GST invoices are generated for every successful payment." },
              { q: "Does Marketing4Sight host my website?", a: "We provide the Website Builder to generate structure, design, and code. You can export to your preferred host." },
              { q: "What payment methods are supported?", a: "We process payments securely through PayU, supporting UPI, QR Codes, all major credit/debit cards, Net Banking." },
            ].map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <button onClick={() => toggleFaq(i)} className="w-full flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-[#222222]">
                  {faq.q}
                  <span className={`transition-transform duration-300 secondary_color ${openFaq === i ? "rotate-180" : ""}`}>
                    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                  </span>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${openFaq === i ? "max-h-40" : "max-h-0"}`}>
                  <div className="text-gray-600 px-6 pb-6 text-base bodyText">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-6">
          <div className="bg-white p-12 lg:p-20 rounded-3xl shadow-2xl border border-gray-100 text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00adc4]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#0859b8]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <div className="inline-block primary_color font-bold text-sm tracking-widest uppercase mb-4">Ready to Grow?</div>
              <h2 className="text-4xl md:text-5xl heading1 text-[#222222] mb-6">Ready to Grow Your Digital Presence?</h2>
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto bodyText">Start with the Free plan or unlock advanced data-driven marketing tools.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button onClick={() => freePlan ? handlePlanSelect(freePlan) : navigate("/register")} className="primary_bg text-white font-bold py-4 px-10 rounded shadow-lg hover:bg-blue-800 transition text-lg cursor-pointer">Get Started Free</button>
                <Link to="/contact-us" className="bg-white border-2 border-gray-200 text-[#222222] font-bold py-4 px-10 rounded hover:border-[#0859b8] hover:text-[#0859b8] transition text-lg cursor-pointer">Book a Demo</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

