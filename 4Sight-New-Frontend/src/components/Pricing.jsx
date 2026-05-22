import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

/* ───────── DATA ───────── */
const plans = [
  {
    id: "free",
    badge: "Best for Starters",
    name: "Free",
    description:
      "Perfect for startups and small businesses beginning their digital journey.",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      { text: "Marketing Dashboard Access", included: true },
      { text: "Basic Business Profile", included: true },
      { text: "Limited Website Builder Access", included: true },
      { text: "Content Placeholder Support", included: true },
      { text: "SEO & GMB Setup Prompts", included: true },
      { text: "Help Centre Access", included: true },
      { text: "Funnel Manager", included: false },
      { text: "Media Manager", included: false },
      { text: "Advanced SEO Features", included: false },
      { text: "Full Competitor Tracking", included: false },
      { text: "Premium Analytics", included: false },
      { text: "Enterprise Support", included: false },
    ],
    cta: "Start Free",
    featured: false,
  },
  {
    id: "enterprise",
    badge: "Most Popular",
    name: "Enterprise",
    description:
      "Complete AI-powered marketing infrastructure for growing brands and agencies.",
    monthlyPrice: 4999,
    yearlyPrice: 47999,
    features: [
      { text: "Full SEO Manager", included: true },
      { text: "GMB Manager Access", included: true },
      { text: "AI Website Builder", included: true },
      { text: "Content Manager", included: true },
      { text: "Competitor Intelligence", included: true },
      { text: "Keyword Planner", included: true },
      { text: "Funnel Manager", included: true },
      { text: "Media Manager", included: true },
      { text: "Multi-user Collaboration", included: true },
      { text: "Advanced Analytics", included: true },
      { text: "Priority Support", included: true },
      { text: "Invoice & Billing Access", included: true },
      { text: "Brand Management", included: true },
    ],
    cta: "Upgrade to Enterprise",
    featured: true,
  },
];

const comparisonRows = [
  { feature: "Marketing Dashboard", free: "✓", enterprise: "✓" },
  { feature: "Website Builder", free: "Limited", enterprise: "Full" },
  { feature: "SEO Manager", free: "Limited", enterprise: "Full" },
  { feature: "GMB Manager", free: "Limited", enterprise: "Full" },
  { feature: "Content Manager", free: "Limited", enterprise: "Full" },
  { feature: "Competitor Tracking", free: "✕", enterprise: "✓" },
  { feature: "Funnel Manager", free: "✕", enterprise: "✓" },
  { feature: "Media Manager", free: "✕", enterprise: "✓" },
  { feature: "AI Content Generation", free: "Limited", enterprise: "Unlimited" },
  { feature: "Analytics", free: "Basic", enterprise: "Advanced" },
  { feature: "Support", free: "Standard", enterprise: "Priority" },
  { feature: "Multi Brand Support", free: "✕", enterprise: "✓" },
  { feature: "Billing & Invoice", free: "✕", enterprise: "✓" },
];

const benefits = [
  {
    icon: "🚀",
    title: "Flexible Billing",
    desc: "Choose monthly or yearly billing with automatic GST invoice generation and easy payment options.",
    gradient: "from-[var(--violet)] to-indigo-500",
  },
  {
    icon: "💳",
    title: "Payment Options",
    desc: "Support for UPI, QR codes, credit/debit cards, bank transfer, and auto-mandate through Razorpay.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: "🎫",
    title: "Coupon Support",
    desc: "Apply discount codes and promotional coupons instantly during checkout for extra savings.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: "📊",
    title: "Advanced Analytics",
    desc: "Get deep insights into your marketing performance with comprehensive reporting and data visualization.",
    gradient: "from-[var(--magenta)] to-rose-500",
  },
];

const faqs = [
  {
    q: "Is there a free plan?",
    a: "Yes! Users can start with the Free plan and explore the platform's core features. You can upgrade to Enterprise anytime to unlock advanced AI-powered marketing tools.",
  },
  {
    q: "Can I switch between monthly and yearly billing?",
    a: "Yes, Enterprise users can easily switch between monthly and yearly billing cycles from their account settings. Yearly billing offers a 20% discount.",
  },
  {
    q: "Do I get invoices?",
    a: "Yes, Enterprise users receive downloadable GST-compliant invoices for all payments. Invoices are automatically generated and available in your billing dashboard.",
  },
  {
    q: "Does Marketing 4Sight host my website?",
    a: "No, Marketing 4Sight generates the website structure, design, and files using AI. However, website hosting is managed separately through your preferred hosting provider.",
  },
  {
    q: "What payment methods are supported?",
    a: "We support UPI, QR codes, credit/debit cards, bank transfers, and recurring billing options through our secure payment partner, Razorpay.",
  },
];

/* ───────── HELPERS ───────── */
const formatPrice = (n) => n.toLocaleString("en-IN");

const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CrossIcon = () => (
  <svg className="w-4 h-4 text-[var(--ink-mute)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* ───────── COMPONENT ───────── */
export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [coupon, setCoupon] = useState("");

  return (
    <div className="relative w-full min-h-screen overflow-y-auto bg-transparent">

      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden pt-36 pb-28 px-6 text-center">
        {/* Decorative blurs */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(124,58,237,0.10),transparent_70%)] rounded-full pointer-events-none animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-8%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(219,39,119,0.08),transparent_70%)] rounded-full pointer-events-none animate-pulse" style={{ animationDelay: "2s" }} />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[var(--violet-soft)] text-[var(--violet)] text-[11px] font-bold tracking-[0.2em] uppercase border border-[var(--line)] mb-6">
            Pricing Plans
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold text-[var(--ink)] tracking-tight leading-[1.1] mb-5">
            Grow Your Brand Smarter with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--violet)] via-[var(--magenta)] to-[var(--violet)]">
              AI-Powered Marketing
            </span>
          </h1>

          <p className="text-sm md:text-base text-[var(--ink-dim)] font-light leading-relaxed max-w-2xl mx-auto mb-10">
            From SEO and content management to GMB optimization and website generation — Marketing 4Sight helps businesses manage their digital growth from one platform.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact-us" className="btn-solid py-3 px-8 text-sm font-bold rounded-lg transition-all hover:scale-105 shadow-md">
              Start Free
            </Link>
            <Link to="/contact-us" className="btn-ghost py-3 px-8 text-sm font-bold border border-[var(--line)] rounded-lg hover:bg-[var(--violet-soft)] transition-all">
              Contact Sales
            </Link>
          </div>

          {/* Feature badges */}
          <div className="flex flex-wrap gap-3 justify-center mt-12">
            {["SEO Manager", "Website Builder", "Content Manager", "GMB Manager", "Funnel Manager", "Media Manager"].map((b, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--paper)] border border-[var(--line)] text-[var(--ink-2)] text-xs font-semibold shadow-sm">
                ✨ {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BILLING TOGGLE ═══════ */}
      <section className="max-w-4xl mx-auto -mt-6 px-6 mb-14 relative z-20">
        <div className="bg-[var(--paper)] border border-[var(--line)] rounded-2xl shadow-lg p-5 flex flex-col sm:flex-row items-center justify-center gap-4">
          <span className={`text-sm font-semibold transition-colors ${!isYearly ? "text-[var(--ink)]" : "text-[var(--ink-mute)]"}`}>
            Monthly
          </span>

          {/* Toggle */}
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-14 h-7 rounded-full transition-all duration-300 cursor-pointer ${
              isYearly
                ? "bg-gradient-to-r from-[var(--violet)] to-indigo-500"
                : "bg-[var(--line)]"
            }`}
          >
            <span
              className={`absolute top-[3px] w-[22px] h-[22px] rounded-full bg-white shadow transition-all duration-300 ${
                isYearly ? "left-[calc(100%-25px)]" : "left-[3px]"
              }`}
            />
          </button>

          <span className={`text-sm font-semibold transition-colors ${isYearly ? "text-[var(--ink)]" : "text-[var(--ink-mute)]"}`}>
            Yearly
          </span>

          <span className="text-[10px] font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1 rounded-full tracking-wide">
            SAVE 20%
          </span>
        </div>
      </section>

      {/* ═══════ PRICING CARDS ═══════ */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const period = plan.monthlyPrice === 0 ? "/month" : isYearly ? "/year" : "/month";
            const isFeatured = plan.featured;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 transition-all duration-400 hover:-translate-y-1.5 group ${
                  isFeatured
                    ? "bg-[var(--ink)] text-white border-2 border-transparent shadow-[0_30px_80px_rgba(124,58,237,0.18)]"
                    : "bg-[var(--paper)] border-2 border-[var(--line)] shadow-md hover:shadow-xl"
                }`}
              >
                {/* Gradient border glow for featured */}
                {isFeatured && (
                  <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-br from-[var(--violet)] via-[var(--magenta)] to-amber-400 -z-10 opacity-60" />
                )}

                {/* Badge */}
                <span
                  className={`inline-block text-[11px] font-bold px-4 py-1.5 rounded-full mb-5 ${
                    isFeatured
                      ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white"
                      : "bg-[var(--violet-soft)] text-[var(--violet)]"
                  }`}
                >
                  {plan.badge}
                </span>

                {/* Plan name */}
                <h3 className={`text-3xl font-extrabold mb-2 ${isFeatured ? "text-white" : "text-[var(--ink)]"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${isFeatured ? "text-gray-300" : "text-[var(--ink-dim)]"}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className={`text-lg font-bold ${isFeatured ? "text-white" : "text-[var(--ink)]"}`}>₹</span>
                    <span className={`text-5xl font-extrabold tracking-tight ${isFeatured ? "text-white" : "text-[var(--ink)]"}`}>
                      {formatPrice(price)}
                    </span>
                    <span className={`text-base font-medium ${isFeatured ? "text-gray-400" : "text-[var(--ink-mute)]"}`}>
                      {period}
                    </span>
                  </div>
                  {plan.monthlyPrice > 0 && (
                    <p className={`text-xs mt-1 ${isFeatured ? "text-gray-400" : "text-[var(--ink-mute)]"}`}>
                      {isYearly ? "Billed annually (Save 20%)" : "Billed monthly"}
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-3 text-[13px] ${
                        f.included
                          ? isFeatured ? "text-gray-200" : "text-[var(--ink-2)]"
                          : "opacity-40"
                      }`}
                    >
                      {f.included ? <CheckIcon /> : <CrossIcon />}
                      {f.text}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  to="/contact-us"
                  className={`block w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 ${
                    isFeatured
                      ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-[0_10px_30px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.4)]"
                      : "bg-[var(--ink)] text-white hover:bg-[var(--ink-2)]"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════ COMPARISON TABLE ═══════ */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--ink)] tracking-tight mb-3">
            Compare Plans in Detail
          </h2>
          <p className="text-sm text-[var(--ink-dim)] font-light max-w-xl mx-auto">
            See exactly what's included in each plan and choose the one that fits your needs.
          </p>
        </div>

        <div className="bg-[var(--paper)] border border-[var(--line)] rounded-2xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[500px]">
              <thead>
                <tr className="bg-[var(--ink)]">
                  <th className="text-left text-white font-bold text-sm py-4 px-6 w-[50%]">Features</th>
                  <th className="text-left text-white font-bold text-sm py-4 px-6">Free</th>
                  <th className="text-left text-white font-bold text-sm py-4 px-6">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-[var(--line)] hover:bg-[var(--bg)] transition-colors">
                    <td className="py-3.5 px-6 text-sm font-semibold text-[var(--ink)]">{row.feature}</td>
                    <td className="py-3.5 px-6 text-sm">
                      {row.free === "✓" ? (
                        <span className="text-emerald-500 font-bold text-lg">✓</span>
                      ) : row.free === "✕" ? (
                        <span className="text-[var(--ink-mute)] text-lg">✕</span>
                      ) : (
                        <span className="text-[var(--ink-dim)]">{row.free}</span>
                      )}
                    </td>
                    <td className="py-3.5 px-6 text-sm">
                      {row.enterprise === "✓" ? (
                        <span className="text-emerald-500 font-bold text-lg">✓</span>
                      ) : (
                        <span className="text-[var(--ink-2)] font-medium">{row.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════ WHY ENTERPRISE ═══════ */}
      <section className="max-w-5xl mx-auto px-6 mb-20">
        <div className="bg-gradient-to-br from-[var(--bg)] to-[var(--violet-soft)]/40 border border-[var(--line)] rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--ink)] tracking-tight mb-3">
              Why Choose Enterprise?
            </h2>
            <p className="text-sm text-[var(--ink-dim)] font-light max-w-xl mx-auto">
              Unlock the full potential of AI-powered marketing automation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-[var(--paper)] border border-[var(--line)] rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${b.gradient} flex items-center justify-center text-lg mb-4`}>
                  {b.icon}
                </div>
                <h3 className="text-sm font-bold text-[var(--ink)] mb-2">{b.title}</h3>
                <p className="text-xs text-[var(--ink-dim)] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ COUPON SECTION ═══════ */}
      <section className="max-w-2xl mx-auto px-6 mb-20">
        <div className="bg-[var(--paper)] border border-[var(--line)] rounded-2xl shadow-md p-6 md:p-8 text-center">
          <h3 className="text-xl font-extrabold text-[var(--ink)] mb-2">Have a Coupon Code?</h3>
          <p className="text-sm text-[var(--ink-dim)] font-light mb-6">
            Apply your discount code during checkout to save on your Enterprise subscription.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Coupon functionality will be available at checkout!");
            }}
            className="flex flex-col sm:flex-row gap-3 mb-6"
          >
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Enter coupon code"
              className="flex-1 h-11 rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 text-sm font-mono outline-none focus:border-[var(--violet)] focus:ring-3 focus:ring-[var(--violet-soft)] transition-all"
            />
            <button
              type="submit"
              className="h-11 px-7 rounded-xl bg-gradient-to-r from-[var(--violet)] to-indigo-500 text-white text-sm font-bold shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all cursor-pointer"
            >
              Apply
            </button>
          </form>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon: "💰", title: "Auto-Renewal", desc: "Hassle-free subscription management" },
              { icon: "🧾", title: "GST Invoice", desc: "Automatic invoice generation" },
              { icon: "🔒", title: "Secure Payment", desc: "Powered by Razorpay" },
            ].map((info, i) => (
              <div key={i} className="bg-[var(--bg)] border border-[var(--line)] rounded-xl p-4 text-center">
                <h4 className="text-sm font-bold text-[var(--ink)] mb-1">
                  {info.icon} {info.title}
                </h4>
                <p className="text-[11px] text-[var(--ink-mute)]">{info.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      <section className="max-w-3xl mx-auto px-6 mb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--ink)] tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[var(--ink-dim)] font-light">
            Everything you need to know about Marketing 4Sight pricing.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[var(--paper)] border border-[var(--line)] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-[var(--violet-soft)]/20 transition-colors group cursor-pointer"
              >
                <span className="text-sm font-bold text-[var(--ink)] group-hover:text-[var(--violet)] transition-colors">
                  {faq.q}
                </span>
                <svg
                  className={`w-4 h-4 text-[var(--violet)] transition-transform duration-300 shrink-0 ml-4 ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openFaq === i ? "max-h-52 border-t border-[var(--line)]" : "max-h-0"
                }`}
              >
                <p className="p-5 text-[13px] text-[var(--ink-dim)] font-light leading-relaxed bg-[var(--violet-soft)]/10">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ BOTTOM CTA ═══════ */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <div className="relative p-8 md:p-14 bg-[var(--paper)] border border-[var(--line)] rounded-3xl text-center overflow-hidden group shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--violet-soft)] to-[var(--magenta-soft)] opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

          <span className="text-[11px] font-bold text-[var(--violet)] uppercase tracking-[0.2em] block relative z-10">
            Ready to Grow?
          </span>

          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--ink)] mt-4 tracking-tight max-w-2xl mx-auto leading-tight relative z-10">
            Ready to Grow Your Digital Presence?
          </h2>

          <p className="text-sm text-[var(--ink-dim)] font-light mt-4 max-w-xl mx-auto leading-relaxed relative z-10">
            Start with the Free plan or unlock advanced AI-powered marketing tools with Enterprise.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
            <Link
              to="/contact-us"
              className="btn-solid py-3 px-8 text-sm font-bold rounded-lg transition-all hover:scale-105 shadow-md"
            >
              Get Started Free
            </Link>
            <Link
              to="/contact-us"
              className="btn-ghost py-3 px-8 text-sm font-bold border border-[var(--line)] rounded-lg hover:bg-[var(--violet-soft)] transition-all"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
