import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

// Asset Imports (keeping the video thumbnail if possible, or using a placeholder)
import marketingDashboard from '../assets/screenshorts/product-screenshots/dashboard.png';

export default function Product() {
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
            <div className="absolute top-[-10%] left-[10%] w-[300px] h-[300px] bg-[#0859b8]/10 rounded-full blur-[50px] mix-blend-multiply animate-blob"></div>
            <div className="absolute top-[20%] right-[10%] w-[450px] h-[450px] bg-[#00adc4]/10 rounded-full blur-[50px] mix-blend-multiply animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-[10%] left-[40%] w-[250px] h-[250px] bg-[#0859b8]/10 rounded-full blur-[50px] mix-blend-multiply animate-blob animation-delay-4000"></div>
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
        </div>

        <main className="relative z-10">
            {/* 1. FIRST SCROLL: HERO SECTION */}
            <section className="relative pt-32 pb-24 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center reveal active">
                    <div>
                        <h1 className="text-5xl lg:text-7xl heading1 primary_color leading-tight mb-6">
                            Marketing 4Sight.
                        </h1>
                        <h2 className="text-2xl lg:text-3xl text-[#222222] font-bold mb-6 heading2">
                            Data-Driven Decisions for Modern Marketing.
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed bodyText">
                            Built for businesses that need clarity, structure, and visibility across marketing.
                        </p>
                        
                        <ul className="space-y-4 mb-10 text-lg font-bold primary_color bodyText">
                            <li className="flex items-center"><span className="w-2.5 h-2.5 secondary_bg rounded-full mr-4"></span>Data-driven direction.</li>
                            <li className="flex items-center"><span className="w-2.5 h-2.5 secondary_bg rounded-full mr-4"></span>Structured execution.</li>
                            <li className="flex items-center"><span className="w-2.5 h-2.5 secondary_bg rounded-full mr-4"></span>Continuous optimization.</li>
                            <li className="flex items-center"><span className="w-2.5 h-2.5 secondary_bg rounded-full mr-4"></span>Connected analytics.</li>
                        </ul>

                        <Link to="/contact-us" className="primary_bg heading2 font-bold py-4 px-10 rounded text-white transition text-lg inline-block shadow-[0_0_20px_rgba(231,235,144,0.5)]">
                            Book a Demo
                        </Link>
                    </div>
                    
                    {/* Hero Graphic Image */}
                    <div className="relative bg-white/40 backdrop-blur-xl p-2 rounded-2xl border border-white shadow-2xl group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#0859b8] to-[#00adc4] rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-700 pointer-events-none"></div>
                        <div className="relative z-10 rounded-xl overflow-hidden shadow-inner">
                            <img src={marketingDashboard} alt="Marketing OS Interface" className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition duration-700" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. SECOND SCROLL: CONNECTED SYSTEM */}
            <section className="py-24 primary_bg text-white relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 text-center reveal transition-all duration-700 opacity-0 translate-y-10">
                    <h2 className="text-4xl lg:text-5xl heading1 mb-8">One Connected System.<br/> <span className="secondary_color">Built for Marketing That Works Together.</span></h2>
                    <p className="text-xl text-blue-100 mb-6 leading-relaxed bodyText">
                        Every part of marketing influences another. Visibility impacts traffic, content shapes discovery, campaigns affect engagement, and performance changes priorities.
                    </p>
                    <p className="text-lg text-blue-200 mb-10 leading-relaxed bodyText">
                        Marketing 4Sight is built to keep these moving parts connected, so marketing operates with greater alignment, continuity, and decision clarity. Instead of switching between disconnected tools, teams work within a shared system where decisions, actions, and insights remain continuously connected.
                    </p>
                    <a href="#video" className="border-2 border-[#00adc4] secondary_color font-bold py-4 px-10 rounded hover:bg-[#00adc4] hover:text-white transition text-lg inline-block">
                        Watch How It Works
                    </a>
                </div>
            </section>

            {/* 3. THIRD SCROLL: MODULES WORKFLOW */}
            <section className="py-24 border-b border-gray-200/50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 reveal transition-all duration-700 opacity-0 translate-y-10">
                        <h2 className="text-4xl heading1 primary_color mb-6">Built Across the Full Marketing Workflow.</h2>
                        <p className="text-lg text-gray-600 bodyText">
                            Each module in Marketing 4Sight is designed to solve a specific operational layer while remaining connected to the broader marketing system.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: "Module 1 — Keyword Planner", desc: "Build and structure your keyword universe using business context, market signals, competitor insights, and search intent. Connects search intelligence across SEO, content, local visibility, and campaign direction." },
                            { name: "Module 2 — SEO Manager", desc: "Track rankings, website performance, optimization priorities, and organic visibility. Monitor on-page SEO, technical health, Core Web Vitals, off-page activities, and performance trends." },
                            { name: "Module 3 — GMB Manager", desc: "Manage local visibility through structured actions, optimization tracking, review monitoring, and location-level performance insights instead of treating GMB as a standalone activity." },
                            { name: "Module 4 — Content Manager", desc: "Plan, create, organize, and manage content across websites, blogs, and social platforms. Align execution across IG, FB, LinkedIn, X, and YouTube with a connected content calendar." },
                            { name: "Module 5 — Funnel Manager", desc: "Understand how users move across touchpoints and identify where engagement, conversion, or intent starts to drop. Structure conversion journeys with clearer visibility." },
                            { name: "Module 6 — Media Manager", desc: "Track campaign visibility, monitor performance signals, and align paid activity with broader marketing priorities and outcomes for clear media contribution." }
                        ].map((mod, i) => (
                            <div key={i} className="group bg-white/70 backdrop-blur-md p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#00adc4]/50 hover:-translate-y-1 hover:bg-white transition-all duration-300 flex flex-col reveal opacity-0 translate-y-10" style={{transitionDelay: `${i * 100}ms`}}>
                                <h3 className="text-xl font-bold text-[#0859b8] group-hover:text-[#00adc4] transition-colors duration-300 mb-4 heading2">{mod.name}</h3>
                                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300 mb-6 text-sm flex-grow bodyText">{mod.desc}</p>
                                <Link to="/contact-us" className="text-[#00adc4] group-hover:text-[#0859b8] font-bold text-sm uppercase tracking-wide transition-colors mt-auto flex items-center w-fit">
                                    Book a demo <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                                </Link>
                            </div>
                        ))}
                        
                        {/* Mod 7 (Spans full width on tablet/desktop) */}
                        <div className="md:col-span-2 lg:col-span-3 group bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-md p-8 rounded-xl border border-[#00adc4]/30 shadow-sm hover:shadow-md hover:border-[#0859b8]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row items-center gap-8 reveal opacity-0 translate-y-10">
                            <div className="flex-1 bodyText">
                                <h3 className="text-2xl font-bold text-[#0859b8] group-hover:text-[#00adc4] transition-colors duration-300 mb-4 heading2">Module 7 — Website Builder</h3>
                                <p className="text-gray-700 mb-4">Generate a structured website foundation using your business inputs, brand context, and marketing requirements — without technical dependency or complex setup processes.</p>
                                <p className="text-gray-600 text-sm">Creates a clean, ready-to-deploy digital presence with page structure, content drafts, design templates, and downloadable files.</p>
                            </div>
                            <div>
                                <Link to="/contact-us" className="bg-[#0859b8] text-white font-bold py-3 px-8 rounded hover:bg-[#00adc4] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 whitespace-nowrap block">Book a demo</Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center max-w-4xl mx-auto reveal transition-all duration-700 opacity-0 translate-y-10">
                        <p className="text-lg font-bold text-[#222222] bodyText">
                            Together, these modules create a structured operational workflow where marketing activities, execution, visibility, and decision-making remain continuously informed by the same context.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. FOURTH SCROLL: SIGO FRAMEWORK */}
            <section className="py-24 bg-white/40 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20 reveal transition-all duration-700 opacity-0 translate-y-10">
                        <h2 className="text-4xl heading1 primary_color mb-6">The SIGO Framework Behind Marketing 4Sight.</h2>
                        <p className="text-lg text-gray-600 bodyText">
                            A structured marketing operating model that connects strategy, implementation, governance, and optimization into one continuous system. Instead of disconnected tools, SIGO helps businesses understand exactly where they stand and what to do next.
                        </p>
                    </div>

                    <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-gradient-to-b before:from-[#00adc4] before:to-[#0859b8]">
                        
                        {[
                            { letter: 'S', title: 'Strategy', subtitle: 'Build direction with clarity, not assumptions.', desc: 'Marketing 4Sight analyzes your business context, market landscape, competitors, and search behavior to establish a clear strategic foundation. Instead of fragmented planning, receive structured direction supported by market intelligence.', color: 'secondary_bg' },
                            { letter: 'I', title: 'Implementation', subtitle: 'Turn strategy into execution without friction.', desc: 'Generate and organize assets and workflows to execute across channels. From website content to social media posts and campaigns, execution becomes faster, structured, and aligned with business requirements.', color: 'primary_bg' },
                            { letter: 'G', title: 'Governance', subtitle: 'Maintain complete visibility.', desc: 'Brings together performance visibility, activity tracking, and operational monitoring into one connected layer. Understand how activities are progressing, where gaps exist, and maintain operational control.', color: 'secondary_bg' },
                            { letter: 'O', title: 'Optimization', subtitle: 'Continuously adapt using live intelligence.', desc: 'Continuously evaluate changes through connected insights and performance analysis. Identify what needs refinement and how marketing direction should evolve without manual data gathering.', color: 'primary_bg' }
                        ].map((sigo, i) => (
                            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group reveal transition-all duration-700 opacity-0 translate-y-10 cursor-default">
                                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white ${sigo.color} shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-white font-bold z-10 heading2 transition-transform duration-300 group-hover:scale-110`}>{sigo.letter}</div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-8 rounded-xl shadow-lg border border-gray-200 bodyText hover:-translate-y-2 hover:border-[#0859b8] hover:shadow-[0_20px_40px_-10px_rgba(8,89,184,0.15)] transition-all duration-300">
                                    <h3 className="text-2xl font-bold primary_color mb-3 heading2 group-hover:text-[#00adc4] transition-colors duration-300">{sigo.title}</h3>
                                    <h4 className="font-bold text-[#222222] mb-4">{sigo.subtitle}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{sigo.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center reveal transition-all duration-700 opacity-0 translate-y-10">
                        <a href="#video" className="primary_bg text-white font-bold py-4 px-10 rounded hover:bg-blue-800 transition text-lg inline-block shadow-lg">
                            Watch How It Works
                        </a>
                    </div>
                </div>
            </section>

            {/* 5. FIFTH SCROLL: INTELLIGENCE LAYER */}
            <section className="py-24 primary_bg text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00adc4]/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 reveal transition-all duration-700 opacity-0 translate-y-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl heading1 mb-6">The Intelligence Layer Behind Marketing 4Sight.</h2>
                        <p className="text-lg text-blue-100 bodyText">
                            Supported by AI-assisted systems, connected intelligence layers, and data-driven decision-making mechanisms that continuously strengthen how the platform analyzes and adapts.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {[
                            { title: 'AI-Assisted Intelligence', icon: 'M13 10V3L4 14h7v7l9-11h-7z', desc: 'Intelligent recommendations, contextual insights, and structured support across planning, execution, and operational workflows.' },
                            { title: 'Connected Intelligence', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9', desc: 'Marketing activities, performance signals, business inputs, and operational visibility continuously connected within one environment.' },
                            { title: 'Data-Driven (D3M)', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', desc: 'Decisions supported by live performance visibility, market movement, competitor tracking, and evolving operational signals.' }
                        ].map((layer, i) => (
                            <div key={i} className="bg-blue-900/40 border border-blue-700/50 p-8 rounded-xl backdrop-blur-md hover:border-[#00adc4] transition bodyText">
                                <div className="w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center mb-6 text-[#e7eb90]">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={layer.icon}></path></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3 heading2">{layer.title}</h3>
                                <p className="text-blue-200 text-sm leading-relaxed">{layer.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link to="/contact-us" className="bg-[#e7eb90] text-[#222222] font-bold py-4 px-10 rounded hover:bg-yellow-300 transition text-lg inline-block shadow-[0_0_20px_rgba(231,235,144,0.3)]">
                            Book a Demo
                        </Link>
                    </div>
                </div>
            </section>

            {/* 6. SIXTH SCROLL: SEE IT IN ACTION */}
            <section className="py-24 border-b border-gray-200/50" id="video">
                <div className="max-w-5xl mx-auto px-6 text-center reveal transition-all duration-700 opacity-0 translate-y-10">
                    <h2 className="text-4xl heading1 primary_color mb-6">See Marketing 4Sight in Action.</h2>
                    <p className="text-xl text-gray-600 mb-12 bodyText">
                        Explore how business inputs transform into structured marketing direction, connected workflows, visibility, and continuous optimization inside the platform.
                    </p>
                    
                    {/* Video Placeholder */}
                    <div className="relative w-full aspect-video bg-gray-900 rounded-2xl shadow-2xl overflow-hidden mb-10 group flex items-center justify-center cursor-pointer border-4 border-white">
                        <img src={marketingDashboard || "https://via.placeholder.com/1200x675/0859b8/ffffff?text=Product+Walkthrough+Video"} alt="Marketing 4Sight UI" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition duration-500" />
                        <div className="relative w-20 h-20 bg-[#e7eb90] text-[#222222] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition transform">
                            <svg className="w-8 h-8 ml-2" fill="currentColor" viewBox="0 0 24 24"><path d="M5 3l14 9-14 9V3z"/></svg>
                        </div>
                    </div>

                    <Link to="/contact-us" className="primary_bg text-white font-bold py-4 px-10 rounded hover:bg-blue-800 transition text-lg inline-block">
                        Book a Demo
                    </Link>
                </div>
            </section>

            {/* 7. SEVENTH SCROLL: FAQ */}
            <section className="py-24 bg-white/60 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 reveal transition-all duration-700 opacity-0 translate-y-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl heading1 primary_color mb-4">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600 bodyText">Quick answers to help you understand how Marketing 4Sight works, adapts, and fits into different marketing workflows.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "How long does onboarding take?", a: "The onboarding process is designed to be structured yet lightweight. Businesses can quickly provide their core inputs, after which the platform begins organizing strategy, workflows, priorities, and operational direction based on the provided context." },
                            { q: "Do all modules need to be used together?", a: "No. Businesses can use specific modules based on their current marketing requirements. However, the platform delivers stronger visibility and continuity when modules operate together within the connected system." },
                            { q: "Can agencies manage multiple brands?", a: "Yes. Marketing 4Sight is designed to support multi-brand workflows, making it easier for agencies to manage strategy, execution, visibility, and reporting across multiple client accounts within a single environment." },
                            { q: "Do I need to be a marketing expert to use it?", a: "No. The platform is designed to simplify marketing operations through structured workflows, guided direction, connected visibility, and organized execution, making it accessible for both experienced teams and growing businesses." },
                            { q: "Does the platform adapt based on business type?", a: "Yes. Marketing 4Sight uses business context, operational inputs, market conditions, and marketing objectives to structure workflows, priorities, recommendations, and visibility differently for different business requirements." },
                            { q: "How does optimization happen inside the platform?", a: "The platform continuously evaluates performance signals, visibility trends, competitor movement, audience behavior, and operational activity to identify where refinement, prioritization, or strategic adjustments may be needed over time." }
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
                </div>
            </section>

            {/* 8. EIGHTH SCROLL: FOOTER CTA */}
            <section className="bg-[#222222] text-white py-24 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[#0859b8]/10 pointer-events-none"></div>
                <div className="max-w-4xl mx-auto px-6 relative z-10 reveal transition-all duration-700 opacity-0 translate-y-10">
                    <h2 className="text-5xl lg:text-6xl heading1 mb-10 leading-tight">Bring Structure to How Your Marketing Operates.</h2>
                    <Link to="/contact-us" className="bg-[#e7eb90] text-[#222222] font-bold py-5 px-14 rounded hover:bg-yellow-300 transition text-lg inline-block shadow-[0_0_30px_rgba(231,235,144,0.3)]">
                        Book a Demo
                    </Link>
                </div>
            </section>
        </main>
        
        <Footer />
        <style dangerouslySetInnerHTML={{__html: `
            .reveal.active {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        `}} />
    </div>
  );
}
