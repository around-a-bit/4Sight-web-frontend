import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

// Asset Imports
import dashboardImg from '../assets/screenshorts/product-screenshots/dashboard.png';
import strategyDashboard from '../assets/strategy-dashboard.png';
import implementationDashboard from '../assets/implementation-dashboard.png';
import governanceDashboard from '../assets/governance-dashboard.png';
import optimizationDashboard from '../assets/optimization-dashboard.png';
import { DynamicGeometricBackground } from './DynamicGeometricMotion';
import banner from '../assets/banner.svg';

export default function Homepage() {
    const [openFaq, setOpenFaq] = useState(null);

    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal');
        const revealOnScroll = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { root: null, threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

        reveals.forEach(reveal => revealOnScroll.observe(reveal));

        return () => reveals.forEach(reveal => revealOnScroll.unobserve(reveal));
    }, []);

    const toggleFaq = (index) => {
        if (openFaq === index) {
            setOpenFaq(null);
        } else {
            setOpenFaq(index);
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

            <main className="relative z-10">
                {/* 1. FIRST SCROLL: HERO SECTION */}
                <section className="relative pt-32 pb-20 lg:pb-32 overflow-hidden reveal transition-all duration-700 opacity-0 translate-y-10">
                    <DynamicGeometricBackground />
                    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl  lg:text-7xl heading1 primary_color leading-tight mb-6">
                                The Data-Driven <br /><span className="secondary_color">Marketing OS.</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed bodyText">
                                A structured system to plan, execute, track, and optimize marketing — in one place. Where Strategy, Execution, and Performance are connected, not fragmented.
                            </p>
                            <div className="flex flex-col heading2 sm:flex-row gap-4">
                                <Link to="/contact-us" className="primary_bg text-white text-center font-bold py-4 px-8 rounded hover:bg-blue-800 transition shadow-lg">
                                    Book a Demo
                                </Link>
                            </div>
                        </div>
                        {/* Hero Dashboard Mockup Placeholder */}
                        <div className="relative group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(8,89,184,0.3)]">
                            <div className="absolute -inset-2 bg-gradient-to-r from-[#0859b8] to-[#00adc4] rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                            <div className="relative bg-white p-2 sm:p-3 rounded-2xl border-2 border-[#0859b8] hover:border-[4px] transition-all duration-500 shadow-xl overflow-hidden">
                                <img src={banner} alt="Unified Marketing Dashboard" className="w-full h-auto rounded-xl object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. SECOND SCROLL: CHALLENGES */}
                <section className="py-24 bg-white/40 backdrop-blur-sm border-y border-gray-200/50 reveal transition-all duration-700 opacity-0 translate-y-10">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-4xl heading1 primary_color mb-4">Common Marketing Challenges</h2>
                            <p className="text-lg text-gray-600 bodyText">Marketing today spans multiple channels, tools, and teams. When these aren’t aligned, it starts to impact clarity, execution, and outcomes.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 bodyText">
                            {[
                                { title: 'No clear strategy', desc: 'Keywords, content, ads, and local efforts run in silos without a unified direction.' },
                                { title: 'Execution without visibility', desc: 'Work gets done, but there’s no clarity on impact or priority.' },
                                { title: 'Data without decisions', desc: 'Dashboards exist, but they don’t translate into actionable next steps.' }
                            ].map((item, i) => (
                                <div key={i} className="group p-8 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#00adc4] hover:-translate-y-2 transition-all duration-300">
                                    <h3 className="text-xl font-bold mb-3 text-[#222222] group-hover:text-[#0859b8] transition-colors duration-300 heading2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                            <div className="group p-8 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#00adc4] hover:-translate-y-2 transition-all duration-300 md:col-span-2 lg:col-span-1">
                                <h3 className="text-xl font-bold mb-3 text-[#222222] group-hover:text-[#0859b8] transition-colors duration-300 heading2">Dependence on guesswork</h3>
                                <p className="text-gray-600">Outcomes depend on trial-and-error instead of a structured system.</p>
                            </div>
                            <div className="group p-8 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#00adc4] hover:-translate-y-2 transition-all duration-300 md:col-span-2 lg:col-span-2">
                                <h3 className="text-xl font-bold mb-3 text-[#222222] group-hover:text-[#0859b8] transition-colors duration-300 heading2">No unified marketing view</h3>
                                <p className="text-gray-600">There’s no single place to understand how all marketing efforts are working together seamlessly.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. THIRD SCROLL: SIGO FRAMEWORK */}
                <section className="py-24 primary_bg text-white relative reveal transition-all duration-700 opacity-0 translate-y-10">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="lg:flex lg:justify-between lg:items-end mb-16 bodyText">
                            <div className="max-w-2xl">
                                <h2 className="text-4xl heading1 mb-4 text-white">How 4Sight Brings Structure</h2>
                                <p className="text-lg text-blue-100">Marketing doesn’t need more tools; it needs a structured way to connect strategy, execution, and performance.</p>
                            </div>
                            <div className="mt-8 lg:mt-0">
                                <Link to="/product" className="bg-white text-[#0859b8] font-bold py-3 px-8 rounded hover:bg-blue-50 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-md inline-block">
                                    Explore How It Works
                                </Link>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 bodyText">
                            {[
                                { title: 'Strategy', desc: 'Define what matters most. We bring together goals, inputs, and context to set clear priorities, replacing scattered thinking.' },
                                { title: 'Implementation', desc: 'Turn direction into action. The platform converts strategy into clear, structured tasks across your marketing efforts.' },
                                { title: 'Governance', desc: 'Stay in control. Track what is being done, monitor consistency, and maintain complete visibility across all activities.' },
                                { title: 'Optimization', desc: 'Improve based on performance. Evaluate outcomes, identify gaps, and suggest what needs to change for better results.' }
                            ].map((item, i) => (
                                <div key={i} className="bg-[#06428a] p-8 rounded-xl border border-[#0a6ad9] relative overflow-hidden group hover:-translate-y-1 transition duration-300">
                                    <div className="absolute top-0 left-0 w-full h-1 secondary_bg"></div>
                                    <h3 className="text-2xl font-bold mb-4 text-[#e7eb90] heading2">{item.title}</h3>
                                    <p className="text-blue-100 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. FOURTH SCROLL: FEATURE DEEP-DIVE */}
                <section className="py-24 bg-white/60 backdrop-blur-md overflow-hidden reveal transition-all duration-700 opacity-0 translate-y-10">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-4xl heading1 primary_color mb-4">Plan Clearly. Execute with Control. Improve Continuously.</h2>
                            <p className="text-lg text-gray-600 bodyText">Marketing4Sight turns a structured approach into a working system. Every decision is informed by data, and every action is aligned.</p>
                        </div>

                        <div className="space-y-32 bodyText">
                            {/* Feature 1 */}
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-3xl heading2 text-[#222222] mb-4">See what matters and where to focus</h3>
                                    <p className="text-gray-600 mb-6 text-lg">A unified view brings together your priorities, current performance, and key gaps, so you can clearly understand what needs attention and why.</p>
                                    <ul className="space-y-3 font-bold primary_color">
                                        <li className="flex items-center"><span className="w-2 h-2 secondary_bg rounded-full mr-3"></span>Unified overview</li>
                                        <li className="flex items-center"><span className="w-2 h-2 secondary_bg rounded-full mr-3"></span>Priority visibility</li>
                                        <li className="flex items-center"><span className="w-2 h-2 secondary_bg rounded-full mr-3"></span>Gap identification</li>
                                    </ul>
                                </div>
                                <div className="group bg-white rounded-2xl p-2 border-2 border-[#0859b8] hover:border-[4px] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex items-center justify-center overflow-hidden">
                                    <img src={dashboardImg} alt="Strategy Overview Dashboard" className="w-full h-auto rounded-xl shadow-sm group-hover:scale-[1.02] transition-transform duration-500" />
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="order-2 lg:order-1 group bg-white rounded-2xl p-2 border-2 border-[#0859b8] hover:border-[4px] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex items-center justify-center overflow-hidden">
                                    <img src={strategyDashboard} alt="Strategy Action Plan" className="w-full h-auto rounded-xl shadow-sm group-hover:scale-[1.02] transition-transform duration-500" />
                                </div>
                                <div className="order-1 lg:order-2">
                                    <h3 className="text-3xl heading2 text-[#222222] mb-4">Turn inputs into a clear direction</h3>
                                    <p className="text-gray-600 mb-6 text-lg">The platform translates your business context into structured direction, so you’re not guessing what to do next.</p>
                                    <ul className="space-y-3 font-bold primary_color">
                                        <li className="flex items-center"><span className="w-2 h-2 secondary_bg rounded-full mr-3"></span>Structured planning</li>
                                        <li className="flex items-center"><span className="w-2 h-2 secondary_bg rounded-full mr-3"></span>Defined priorities</li>
                                        <li className="flex items-center"><span className="w-2 h-2 secondary_bg rounded-full mr-3"></span>Clear next steps</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-3xl heading2 text-[#222222] mb-4">Execute with structure, not scattered effort</h3>
                                    <p className="text-gray-600 mb-6 text-lg">Every activity is organized and aligned, ensuring consistency across all marketing efforts.</p>
                                    <ul className="space-y-3 font-bold primary_color">
                                        <li className="flex items-center"><span className="w-2 h-2 secondary_bg rounded-full mr-3"></span>Task-driven execution</li>
                                        <li className="flex items-center"><span className="w-2 h-2 secondary_bg rounded-full mr-3"></span>Aligned activities</li>
                                        <li className="flex items-center"><span className="w-2 h-2 secondary_bg rounded-full mr-3"></span>Centralized workflows</li>
                                    </ul>
                                </div>
                                <div className="group bg-white rounded-2xl p-2 border-2 border-[#0859b8] hover:border-[4px] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex items-center justify-center overflow-hidden">
                                    <img src={implementationDashboard} alt="Implementation Screen" className="w-full h-auto rounded-xl shadow-sm group-hover:scale-[1.02] transition-transform duration-500" />
                                </div>
                            </div>

                            {/* Feature 4 */}
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div className="order-2 lg:order-1 group bg-white rounded-2xl p-2 border-2 border-[#0859b8] hover:border-[4px] hover:border-[#0859b8] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex items-center justify-center overflow-hidden">
                                    <img src={governanceDashboard} alt="Governance Screen" className="w-full h-auto rounded-xl shadow-sm group-hover:scale-[1.02] transition-transform duration-500" />
                                </div>
                                <div className="order-1 lg:order-2">
                                    <h3 className="text-3xl heading2 text-[#222222] mb-4">Stay in control of what’s happening</h3>
                                    <p className="text-gray-600 mb-6 text-lg">Track actions, monitor updates, and maintain full visibility across everything being executed.</p>
                                    <ul className="space-y-3 font-bold primary_color">
                                        <li className="flex items-center"><span className="w-2 h-2 secondary_bg rounded-full mr-3"></span>Activity tracking</li>
                                        <li className="flex items-center"><span className="w-2 h-2 secondary_bg rounded-full mr-3"></span>Alerts and updates</li>
                                        <li className="flex items-center"><span className="w-2 h-2 secondary_bg rounded-full mr-3"></span>Execution visibility</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Feature 5 */}
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-3xl heading2 text-[#222222] mb-4">Know what’s working and what’s not</h3>
                                    <p className="text-gray-600 mb-6 text-lg">Performance data is connected and easy to understand — helping you make informed decisions.</p>
                                    <ul className="space-y-3 font-bold primary_color">
                                        <li className="flex items-center"><span className="w-2 h-2 secondary_bg rounded-full mr-3"></span>Performance tracking</li>
                                        <li className="flex items-center"><span className="w-2 h-2 secondary_bg rounded-full mr-3"></span>Comparative insights</li>
                                        <li className="flex items-center"><span className="w-2 h-2 secondary_bg rounded-full mr-3"></span>Trend visibility</li>
                                    </ul>
                                </div>
                                <div className="group bg-white rounded-2xl p-2 border-2 border-[#0859b8] hover:border-[4px] hover:border-[#0859b8] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex items-center justify-center overflow-hidden">
                                    <img src={optimizationDashboard} alt="Optimization Dashboard" className="w-full h-auto rounded-xl shadow-sm group-hover:scale-[1.02] transition-transform duration-500" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. FIFTH SCROLL: TARGET AUDIENCE ROLES */}
                <section className="py-24 bg-white/40 backdrop-blur-sm border-t border-gray-200/50 reveal transition-all duration-700 opacity-0 translate-y-10">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-4xl heading1 primary_color mb-4">One Platform. Different Roles. <br />A Structured Way to Work.</h2>
                            <p className="text-lg text-gray-600 bodyText">While every role approaches marketing differently, the need remains the same - clarity in direction, consistency in execution, and visibility into outcomes.</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 bodyText">
                            {[
                                { title: 'Marketing Professionals', role: 'Working across campaigns, content, SEO, or media with multiple moving parts.', fits: 'Creates a clear flow to plan, execute, and track work.', outcome: 'Better execution clarity & visibility.' },
                                { title: 'Marketing Teams', role: 'Multiple contributors managing different channels and activities.', fits: 'Aligns planning, execution, and tracking within a single structured system.', outcome: 'Improved coordination & delivery.' },
                                { title: 'Agencies', role: 'Managing multiple brands with different strategies and reporting needs.', fits: 'Standardizes how work is planned, executed, and reported.', outcome: 'Scalable ops & clear client comms.' },
                                { title: 'Business Owners', role: 'Reviewing marketing efforts and making investment decisions.', fits: 'Presents marketing activity in a structured, decision-ready format.', outcome: 'Confident decision-making.' }
                            ].map((item, i) => (
                                <div key={i} className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 border-t-4 border-t-[#00adc4] flex flex-col h-full hover:-translate-y-2 hover:shadow-xl hover:border-gray-200 transition-all duration-400">
                                    <h3 className="text-xl font-bold mb-4 text-[#0859b8] heading2 group-hover:text-[#00adc4] transition-colors duration-300">{item.title}</h3>
                                    <p className="text-sm text-gray-500 mb-4 flex-grow"><strong className="text-[#222222]">Role:</strong> {item.role}</p>
                                    <p className="text-sm text-gray-600 mb-4"><strong className="text-[#222222]">How 4Sight fits:</strong> {item.fits}</p>
                                    <div className="bg-blue-50 p-3 rounded-lg text-sm text-[#0859b8] font-bold mt-auto group-hover:bg-[#0859b8] group-hover:text-white transition-colors duration-400">Outcome: {item.outcome}</div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <Link to="/contact-us" className="primary_bg text-white font-bold py-3 px-8 rounded hover:bg-blue-800 transition inline-block">Book a Demo</Link>
                        </div>
                    </div>
                </section>

                {/* 6. SIXTH SCROLL: IN ACTION PROCESS */}
                <section className="py-24 bg-white/60 backdrop-blur-md reveal transition-all duration-700 opacity-0 translate-y-10">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl heading1 primary_color mb-4">See Marketing4Sight in Action</h2>
                            <p className="text-lg text-gray-600 bodyText">A quick walkthrough of how marketing moves from inputs to structured execution and measurable outcomes.</p>
                        </div>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-12 relative bodyText">
                            {/* Line connector for desktop */}
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 -translate-y-1/2"></div>

                            <div className="group bg-white p-8 border border-gray-200 hover:border-[#0859b8]/30 rounded-xl shadow-lg hover:shadow-2xl w-full md:w-1/3 text-center relative z-10 hover:-translate-y-2 transition-all duration-300">
                                <div className="w-12 h-12 primary_bg text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">1</div>
                                <h3 className="text-xl font-bold mb-3 heading2 group-hover:text-[#0859b8] transition-colors duration-300">Set your context</h3>
                                <p className="text-gray-600 text-sm">Add your business inputs and priorities.</p>
                            </div>

                            <div className="group bg-white p-8 border border-gray-200 hover:border-[#0859b8]/30 rounded-xl shadow-lg hover:shadow-2xl w-full md:w-1/3 text-center relative z-10 hover:-translate-y-2 transition-all duration-300">
                                <div className="w-12 h-12 secondary_bg text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">2</div>
                                <h3 className="text-xl font-bold mb-3 heading2 group-hover:text-[#0859b8] transition-colors duration-300">Get structured direction</h3>
                                <p className="text-gray-600 text-sm">Get strategy, prioritized actions, and adapt based on performance and market signals.</p>
                            </div>

                            <div className="group bg-white p-8 border border-gray-200 hover:border-[#0859b8]/30 rounded-xl shadow-lg hover:shadow-2xl w-full md:w-1/3 text-center relative z-10 hover:-translate-y-2 transition-all duration-300">
                                <div className="w-12 h-12 primary_bg text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">3</div>
                                <h3 className="text-xl font-bold mb-3 heading2 group-hover:text-[#0859b8] transition-colors duration-300">Execute & stay in control</h3>
                                <p className="text-gray-600 text-sm">Run activities with full visibility, consistency, and ongoing tracking.</p>
                            </div>
                        </div>

                        <div className="text-center mt-16">
                            <Link to="/contact-us" className="border-2 border-[#0859b8] primary_color font-bold py-3 px-8 rounded hover:bg-[#0859b8] hover:text-white transition inline-block">Book a Demo</Link>
                        </div>
                    </div>
                </section>

                {/* 7. SEVENTH SCROLL: FAQ */}
                <section className="py-24 bg-white/40 backdrop-blur-sm border-t border-gray-200/50 reveal transition-all duration-700 opacity-0 translate-y-10">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl heading1 primary_color mb-4">Frequently Asked Questions</h2>
                            <p className="text-lg text-gray-600 bodyText">Quick answers to help you understand how Marketing4Sight works and how it fits your workflow.</p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { q: "What exactly does Marketing4Sight do?", a: "Marketing4Sight structures your entire marketing into one connected system — it defines direction, translates it into clear actions, ensures execution is consistent, and continuously improves performance based on real outcomes. This keeps all efforts aligned, visible, and measurable in one place." },
                                { q: "How is this different from using separate tools for SEO, content, and ads?", a: "Most tools operate in silos. Marketing4Sight connects strategy, execution, and performance across all marketing activities, ensuring decisions are aligned and outcomes are clearly visible in one place." },
                                { q: "Do I need a large team or technical expertise to use this platform?", a: "No. The platform is designed to simplify decision-making and execution, so both small teams and experienced professionals can manage marketing effectively without complex setup or technical dependency." },
                                { q: "Can I track real business outcomes, not just marketing metrics?", a: "Yes. Marketing4Sight focuses on meaningful outcomes — visibility, engagement, actions, and conversions — so you can understand what is actually driving results, not just surface-level metrics." },
                                { q: "Who is Marketing4Sight best suited for?", a: "Marketing4Sight is built for businesses managing multiple marketing activities, channels, or teams and looking for clarity in direction and execution. It aligns actions to your specific goals and context, so everything works as one connected system rather than in silos." }
                            ].map((faq, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                                    <button onClick={() => toggleFaq(index)} className="w-full flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-[#222222]">
                                        {faq.q}
                                        <span className={`transition-transform duration-300 secondary_color ${openFaq === index ? 'rotate-180' : ''}`}>
                                            <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6"></path></svg>
                                        </span>
                                    </button>
                                    <div className={`transition-all duration-300 overflow-hidden ${openFaq === index ? 'max-h-40' : 'max-h-0'}`}>
                                        <div className="text-gray-600 px-6 pb-6 text-base bodyText leading-relaxed">{faq.a}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8. EIGHTH SCROLL: FOOTER & CTA */}
                <section className="bg-gradient-to-r from-[#0859b8] to-[#00adc4] text-white py-24 text-center relative overflow-hidden reveal transition-all duration-700 opacity-0 translate-y-10">
                    {/* Subtle abstract background elements */}
                    <div className="absolute w-[800px] h-[800px] bg-white rounded-full opacity-5 blur-[100px] -top-[400px] -left-[200px] pointer-events-none"></div>
                    <div className="absolute w-[600px] h-[600px] bg-[#e7eb90] rounded-full opacity-10 blur-[100px] -bottom-[200px] -right-[100px] pointer-events-none"></div>

                    <div className="max-w-4xl mx-auto px-6 relative z-10">
                        <h2 className="text-4xl md:text-5xl heading1 mb-8 leading-tight drop-shadow-sm">Make your marketing <br />work with clarity.</h2>
                        <p className="text-blue-50 mb-6 text-xl bodyText">Turn inputs, decisions, and execution into a connected system that drives measurable outcomes — without fragmentation or guesswork.</p>
                        <p className="text-blue-100 mb-12 text-lg bodyText">Let’s align your data, direction, and execution into one structured flow that delivers consistent, trackable growth.</p>

                        <Link to="/contact-us" className="bg-[#e7eb90] text-[#1c1635] font-extrabold py-4 px-12 rounded-full hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(231,235,144,0.4)] transition-all duration-300 text-lg inline-block heading2 uppercase tracking-widest">
                            Connect With Us
                        </Link>
                    </div>
                </section>

                {/* Section 5.5: Customer Testimonials */}
                <section className="py-24 bg-slate-100 dark:bg-dark-900 relative overflow-hidden border-t border-slate-200 dark:border-white/5">
                    <style>{`
                    .testimonial-card {
                        position: relative;
                        transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                    .testimonial-card::before {
                        content: '';
                        position: absolute;
                        inset: 0;
                        border-radius: 1rem;
                        background: linear-gradient(135deg, rgba(8,89,184,0.06), rgba(0,173,196,0.04));
                        opacity: 0;
                        transition: opacity 0.35s ease;
                    }
                    .testimonial-card:hover::before {
                        opacity: 1;
                    }
                    .testimonial-card:hover {
                        transform: translateY(-6px);
                        box-shadow: 0 20px 60px rgba(8,89,184,0.12), 0 4px 16px rgba(0,173,196,0.08);
                        border-color: rgba(0,173,196,0.35);
                    }
                    .quote-mark {
                        font-family: Georgia, serif;
                        line-height: 1;
                        color: #00adc4;
                        opacity: 0.25;
                        transition: opacity 0.35s ease;
                    }
                    .testimonial-card:hover .quote-mark {
                        opacity: 0.55;
                    }
                    .avatar-ring {
                        transition: box-shadow 0.35s ease, transform 0.35s ease;
                    }
                    .testimonial-card:hover .avatar-ring {
                        box-shadow: 0 0 0 4px rgba(0,173,196,0.3), 0 0 20px rgba(0,173,196,0.2);
                        transform: scale(1.04);
                    }
                    .star-icon {
                        color: #f59e0b;
                        font-size: 14px;
                    }
                `}</style>

                    {/* Subtle background decoration */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00adc4] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <span className="inline-block bg-[#00adc4]/10 text-[#00adc4] text-xs font-bold px-4 py-1.5 mb-4 rounded-full uppercase tracking-widest border border-[#00adc4]/20">
                                What Our Clients Say
                            </span>
                            <h2 className="heading1 text-4xl md:text-5xl font-black primary_color dark:text-white mb-4 leading-tight">
                                Customer Testimonials
                            </h2>
                            <div className="h-1 w-20 bg-gradient-to-r from-[#0859b8] to-[#00adc4] mx-auto rounded-full" />
                        </div>

                        {/* Testimonial Cards Grid */}
                        <div className="grid md:grid-cols-3 gap-8">

                            {/* Testimonial 1 */}
                            <div className="testimonial-card flex flex-col p-8 bg-white rounded-2xl border border-slate-200 shadow-md">

                                {/* Quote */}
                                <div className="relative flex-grow mb-8">
                                    <span className="quote-mark absolute -top-2 -left-1 text-6xl font-serif leading-none select-none">"</span>
                                    <p className="bodyText text-slate-800 leading-relaxed text-base pt-6 italic font-medium relative z-10">
                                        The Marketing4Sight platform from Quantyra Analytics is a game-changer. It is extremely effective in strategizing, governing and optimizing marketing processes in an organization. The data-driven decision making framework implemented in Marketing4Sight helped us identify blind spots and addressing them effectively.
                                    </p>
                                    <span className="quote-mark absolute -bottom-4 right-0 text-6xl font-serif leading-none select-none rotate-180">"</span>
                                </div>
                                {/* Divider */}
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6" />
                                {/* Profile */}
                                <div className="flex items-center gap-4">
                                    <div>
                                        <p className="heading1 font-bold text-slate-900 text-base leading-tight">Nilagrib Mondal</p>
                                        <p className="text-xs text-[#0859b8] font-semibold uppercase tracking-wider mt-0.5">Marketing Head</p>
                                        <p className="text-xs text-slate-600 mt-0.5">Excel Home Decor Pvt Ltd</p>
                                    </div>
                                </div>
                            </div>



                            {/* Testimonial 2 */}
                            <div className="testimonial-card flex flex-col p-8 bg-white rounded-2xl border border-slate-200 shadow-md">

                                {/* Quote */}
                                <div className="relative flex-grow mb-8">
                                    <span className="quote-mark absolute -top-2 -left-1 text-6xl font-serif leading-none select-none">"</span>
                                    <p className="bodyText text-slate-800 leading-relaxed text-base pt-6 italic font-medium relative z-10">
                                        The Marketing4Sight platform from Quantyra Analytics is a game-changer. It is extremely effective in strategizing, governing and optimizing marketing processes in an organization. The data-driven decision making framework implemented in Marketing4Sight helped us identify blind spots and addressing them effectively
                                    </p>
                                    <span className="quote-mark absolute -bottom-4 right-0 text-6xl font-serif leading-none select-none rotate-180">"</span>
                                </div>
                                {/* Divider */}
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6" />
                                {/* Profile */}
                                <div className="flex items-center gap-4">
                                    <div>
                                        <p className="heading1 font-bold text-slate-900 text-base leading-tight">Indranil Mandal</p>
                                        <p className="text-xs text-[#0859b8] font-semibold uppercase tracking-wider mt-0.5">Founder</p>
                                        <p className="text-xs text-slate-600 mt-0.5">Bombay Local</p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 3 */}
                            <div className="testimonial-card flex flex-col p-8 bg-white rounded-2xl border border-slate-200 shadow-md">
                                {/* Quote */}
                                <div className="relative flex-grow mb-8">
                                    <span className="quote-mark absolute -top-2 -left-1 text-6xl font-serif leading-none select-none">"</span>
                                    <p className="bodyText text-slate-800 leading-relaxed text-base pt-6 italic font-medium relative z-10">
                                        Working with Quantyra Analytics has been a strategic move that enpropeL took. Getting onboarded to the Marketing4Sight platform as a beta customer, we received strategic inputs from the platform which helped in improving our brand presence. We recommend the Marketing4Sight platform to all small and medium business owners who aspire to improve their branding
                                    </p>
                                    <span className="quote-mark absolute -bottom-4 right-0 text-6xl font-serif leading-none select-none rotate-180">"</span>
                                </div>
                                {/* Divider */}
                                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent mb-6" />
                                {/* Profile */}
                                <div className="flex items-center gap-4">
                                    <div>
                                        <p className="heading1 font-bold text-slate-900 text-base leading-tight">Jagannath Thakur</p>
                                        <p className="text-xs text-[#0859b8] font-semibold uppercase tracking-wider mt-0.5">Founder</p>
                                        <p className="text-xs text-slate-600 mt-0.5">enpropeL</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <style dangerouslySetInnerHTML={{
                __html: `
            .reveal.active {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `}} />
        </div>
    );
}
