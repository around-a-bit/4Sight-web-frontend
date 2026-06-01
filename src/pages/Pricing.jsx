import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [coupon, setCoupon] = useState("");
  const [couponMessage, setCouponMessage] = useState(null);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (code === '') {
      setCouponMessage({ type: 'error', text: 'Please enter a valid coupon code.' });
    } else {
      setCouponMessage({ type: 'success', text: `Success! ${code} applied. Proceed to checkout to see your savings.` });
    }
  };

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
                    Grow Your Brand Smarter with <br/><span className="primary_color">Data-Driven Marketing</span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed bodyText">
                    From SEO and content management to GMB optimization and website generation — Marketing4Sight helps businesses manage their digital growth from one platform.
                </p>
                
                <div className="flex justify-center gap-4 mb-12">
                    <a href="#free" className="primary_bg text-white font-bold py-3 px-8 rounded shadow-lg hover:bg-blue-800 transition">Start Free</a>
                    <Link to="/contact-us" className="bg-white border-2 border-gray-200 text-[#222222] font-bold py-3 px-8 rounded hover:border-[#0859b8] hover:text-[#0859b8] transition">Contact Sales</Link>
                </div>

                {/* Module Pills */}
                <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                    <span className="bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2"><span className="secondary_color">✦</span> SEO Manager</span>
                    <span className="bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2"><span className="secondary_color">✦</span> Website Builder</span>
                    <span className="bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2"><span className="secondary_color">✦</span> Content Manager</span>
                    <span className="bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2"><span className="secondary_color">✦</span> GMB Manager</span>
                    <span className="bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2"><span className="secondary_color">✦</span> Funnel Manager</span>
                    <span className="bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2"><span className="secondary_color">✦</span> Media Manager</span>
                </div>
            </section>

            {/* PRICING CARDS */}
            <section className="max-w-5xl mx-auto px-6 mb-12">
                {/* Billing Toggle */}
                <div className="flex justify-center items-center mb-12 bg-white p-4 rounded-xl shadow-sm border border-gray-100 max-w-sm mx-auto">
                    <span className={`font-bold mr-3 transition-colors ${!isYearly ? 'text-[#222222]' : 'text-gray-400'}`}>Monthly</span>
                    <div className="relative inline-block w-12 mr-3 align-middle select-none">
                        <input type="checkbox" checked={isYearly} onChange={() => setIsYearly(!isYearly)} id="billing-toggle" className="absolute opacity-0 w-0 h-0" />
                        <label htmlFor="billing-toggle" className={`block overflow-hidden h-6 w-12 rounded-full cursor-pointer transition-colors duration-300 ${isYearly ? 'secondary_bg' : 'bg-gray-200'} relative`}>
                            <span className={`absolute top-[2px] w-[20px] h-[20px] bg-white rounded-full transition-transform duration-300 ${isYearly ? 'translate-x-[26px]' : 'translate-x-[2px]'}`}></span>
                        </label>
                    </div>
                    <span className={`font-bold mr-3 transition-colors ${isYearly ? 'text-[#222222]' : 'text-gray-400'}`}>Yearly</span>
                    <span className="secondary_bg text-white text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wide">Save 20%</span>
                </div>

                <div className="grid md:grid-cols-2 gap-8" id="free">
                    {/* Free Plan */}
                    <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-xl flex flex-col relative overflow-hidden group hover:border-[#0859b8] transition duration-300">
                        <div className="bg-blue-50 primary_color text-sm font-bold px-4 py-1.5 rounded-full inline-block mb-6 self-start">Best for Starters</div>
                        <h3 className="text-4xl heading1 text-[#222222] mb-4">Free</h3>
                        <p className="text-gray-600 mb-8 min-h-[48px] bodyText">Perfect for startups and small businesses beginning their digital journey.</p>
                        
                        <div className="mb-8">
                            <span className="text-2xl font-bold">₹</span>
                            <span className="text-6xl heading1 text-[#222222]">0</span>
                            <span className="text-gray-500 font-bold">/month</span>
                        </div>

                        <ul className="space-y-5 mb-10 flex-grow bodyText">
                            <li className="flex items-start"><svg className="w-6 h-6 secondary_color mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Marketing Dashboard Access</li>
                            <li className="flex items-start"><svg className="w-6 h-6 secondary_color mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Basic Business Profile</li>
                            <li className="flex items-start"><svg className="w-6 h-6 secondary_color mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Limited Website Builder Access</li>
                            <li className="flex items-start"><svg className="w-6 h-6 secondary_color mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Content Placeholder Support</li>
                            <li className="flex items-start"><svg className="w-6 h-6 secondary_color mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> SEO & GMB Setup Prompts</li>
                        </ul>

                        <Link to="/contact-us" className="w-full bg-white border-2 border-[#0859b8] primary_color text-center font-bold py-4 rounded-xl hover:bg-[#0859b8] hover:text-white transition">Get Started Free</Link>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="primary_bg rounded-3xl p-10 border border-blue-800 shadow-2xl flex flex-col relative overflow-hidden text-white transform md:-translate-y-4" id="sales">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00adc4]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                        
                        <div className="bg-[#e7eb90] text-[#222222] text-sm font-bold px-4 py-1.5 rounded-full inline-block mb-6 self-start shadow-md">Most Popular</div>
                        <h3 className="text-4xl heading1 mb-4">Enterprise</h3>
                        <p className="text-blue-100 mb-8 min-h-[48px] bodyText">Complete data-driven marketing infrastructure for growing brands and agencies.</p>
                        
                        <div className="mb-2">
                            <span className="text-2xl font-bold">₹</span>
                            <span className="text-6xl heading1">{isYearly ? "3,999" : "4,999"}</span>
                            <span className="text-blue-200 font-bold">/month</span>
                        </div>
                        <p className="text-sm text-blue-300 mb-8">{isYearly ? "Billed annually" : "Billed monthly"}</p>

                        <ul className="space-y-5 mb-10 flex-grow relative z-10 bodyText">
                            <li className="flex items-start"><svg className="w-6 h-6 text-[#e7eb90] mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Full SEO Manager</li>
                            <li className="flex items-start"><svg className="w-6 h-6 text-[#e7eb90] mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> GMB Manager Access</li>
                            <li className="flex items-start"><svg className="w-6 h-6 text-[#e7eb90] mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> AI Website Builder</li>
                            <li className="flex items-start"><svg className="w-6 h-6 text-[#e7eb90] mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Content Manager</li>
                            <li className="flex items-start"><svg className="w-6 h-6 text-[#e7eb90] mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> Competitor & Funnel Tracking</li>
                        </ul>

                        <Link to="/contact-us" className="block w-full bg-[#e7eb90] text-[#222222] text-center font-bold py-4 rounded-xl hover:bg-yellow-300 transition shadow-[0_0_20px_rgba(231,235,144,0.4)] relative z-10">Upgrade to Enterprise</Link>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE COUPON SECTION */}
            <section className="max-w-md mx-auto px-6 mb-24 text-center">
                <div className="bg-blue-50/50 border border-blue-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition">
                    <h3 className="text-lg font-bold primary_color mb-2 flex items-center justify-center gap-2">
                        <svg className="w-5 h-5 secondary_color" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
                        Have a promo code?
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 bodyText">Enter it below to apply your discount to the Enterprise plan.</p>
                    
                    <div className="relative flex items-center">
                        <input 
                            type="text" 
                            value={coupon}
                            onChange={(e) => setCoupon(e.target.value)}
                            placeholder="e.g. GROW2026" 
                            className={`w-full pl-4 pr-24 py-3 rounded-xl border ${couponMessage?.type === 'success' ? 'border-green-500 bg-green-50' : 'border-gray-200'} focus:outline-none focus:border-[#00adc4] focus:ring-1 focus:ring-[#00adc4] uppercase tracking-wider text-[#222222] font-bold placeholder-gray-300 transition shadow-inner`}
                        />
                        <button 
                            onClick={applyCoupon} 
                            className="absolute right-1 top-1 bottom-1 primary_bg text-white font-bold px-4 rounded-lg hover:bg-blue-800 transition text-sm shadow"
                        >
                            Apply
                        </button>
                    </div>
                    
                    {couponMessage && (
                        <p className={`text-sm font-bold mt-3 transition-opacity duration-300 ${couponMessage.type === 'error' ? 'text-red-500' : 'text-green-600'}`}>
                            {couponMessage.text}
                        </p>
                    )}
                </div>
            </section>

            {/* FEATURE COMPARISON TABLE */}
            <section className="max-w-5xl mx-auto px-6 mb-24">
                <div className="text-center mb-10">
                    <h2 className="text-4xl heading1 primary_color mb-4">Compare Plans in Detail</h2>
                    <p className="text-gray-600 bodyText">See exactly what's included in each plan and choose the one that fits your needs.</p>
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
                                    { feature: "Billing & Invoice", free: "cross", enterprise: "check" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50 transition">
                                        <td className="py-4 px-6 font-bold text-[#222222]">{row.feature}</td>
                                        <td className="py-4 px-6 text-center">
                                            {row.free === "check" ? <svg className="w-6 h-6 secondary_color mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> : 
                                             row.free === "cross" ? <svg className="w-6 h-6 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg> : 
                                             <span className="text-gray-400 font-bold">{row.free}</span>}
                                        </td>
                                        <td className="py-4 px-6 text-center bg-blue-50/30">
                                            {row.enterprise === "check" ? <svg className="w-6 h-6 primary_color mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg> : 
                                             <span className="primary_color font-bold">{row.enterprise}</span>}
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
                    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-xl bg-blue-50 primary_color flex items-center justify-center mb-6">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#222222] mb-3">Flexible Billing</h3>
                        <p className="text-gray-600 text-sm">Choose monthly or yearly billing with automatic GST invoice generation and easy payment options.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-xl bg-[#00adc4]/10 secondary_color flex items-center justify-center mb-6">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#222222] mb-3">Payment Options</h3>
                        <p className="text-gray-600 text-sm">Support for UPI, QR codes, credit/debit cards, bank transfer, and auto-mandate through Razorpay.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center mb-6">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#222222] mb-3">Coupon Support</h3>
                        <p className="text-gray-600 text-sm">Apply discount codes and promotional coupons instantly during checkout for extra savings.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-xl bg-blue-50 primary_color flex items-center justify-center mb-6">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#222222] mb-3">Advanced Analytics</h3>
                        <p className="text-gray-600 text-sm">Get deep insights into your marketing performance with comprehensive reporting and data visualization.</p>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="max-w-3xl mx-auto px-6 mb-24">
                <div className="text-center mb-12">
                    <h2 className="text-4xl heading1 primary_color mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600 bodyText">Everything you need to know about Marketing4Sight pricing.</p>
                </div>
                
                <div className="space-y-4">
                    {[
                        { q: "Is there a free plan?", a: "Yes, we offer a Free plan perfect for startups and small businesses to begin their digital journey, providing essential access to the marketing dashboard, limited builder tools, and prompt support." },
                        { q: "Can I switch between monthly and yearly billing?", a: "Absolutely. You can change your billing preference at any time from your account settings. Switching to yearly billing will automatically apply a 20% discount." },
                        { q: "Do I get invoices?", a: "Yes, automated GST invoices are generated for every successful payment and can be downloaded directly from your billing dashboard." },
                        { q: "Does Marketing4Sight host my website?", a: "We provide the Website Builder to generate structure, design, and code. You can export these files to host on your preferred environment, or integrate with our recommended hosting partners." },
                        { q: "What payment methods are supported?", a: "We process payments securely through Razorpay, supporting UPI, QR Codes, all major credit/debit cards, Net Banking, and auto-mandate subscriptions." }
                    ].map((faq, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                            <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-[#222222]">
                                {faq.q}
                                <span className={`transition-transform duration-300 secondary_color ${openFaq === index ? 'rotate-180' : ''}`}>
                                    <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                </span>
                            </button>
                            <div className={`transition-all duration-300 overflow-hidden ${openFaq === index ? 'max-h-40' : 'max-h-0'}`}>
                                <div className="text-gray-600 px-6 pb-6 text-base bodyText">{faq.a}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="max-w-5xl mx-auto px-6">
                <div className="bg-white p-12 lg:p-20 rounded-3xl shadow-2xl border border-gray-100 text-center relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00adc4]/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#0859b8]/10 rounded-full blur-3xl pointer-events-none"></div>
                    
                    <div className="relative z-10">
                        <div className="inline-block primary_color font-bold text-sm tracking-widest uppercase mb-4">Ready to Grow?</div>
                        <h2 className="text-4xl md:text-5xl heading1 text-[#222222] mb-6">Ready to Grow Your Digital Presence?</h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto bodyText">
                            Start with the Free plan or unlock advanced data-driven marketing tools with Enterprise.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/contact-us" className="primary_bg text-white font-bold py-4 px-10 rounded shadow-lg hover:bg-blue-800 transition text-lg">Get Started Free</Link>
                            <Link to="/contact-us" className="bg-white border-2 border-gray-200 text-[#222222] font-bold py-4 px-10 rounded hover:border-[#0859b8] hover:text-[#0859b8] transition text-lg">Book a Demo</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        
        <Footer />
    </div>
  );
}
