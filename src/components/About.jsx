import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

import imgPlatforms from '../assets/ecosystem_platforms.png';
import imgConsulting from '../assets/ecosystem_consulting.png';
import imgServices from '../assets/ecosystem_services.png';
import imgAcademics from '../assets/ecosystem_academics.png';
import unified from '../assets/unified_marketing_system.png';

export default function About() {
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
            <section className="relative pt-32 pb-24  lg:pb-32 overflow-hidden reveal transition-all duration-700 opacity-0 translate-y-10">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl lg:text-7xl heading1 primary_color leading-tight mb-8">
                        We’re Bringing Structure to <span className="secondary_color inline-block transition-transform hover:scale-105 duration-300">#ModernMarketing.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed bodyText max-w-3xl mx-auto">
                        A structured marketing platform built to bring clarity to how marketing is planned, executed, and improved.
                    </p>
                    <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-12 bodyText">
                        Built as part of Quantyra’s AI and data-driven ecosystem, Marketing4Sight connects direction, execution, and outcomes into a single, continuous system. As marketing has become more complex, the need for structure has become critical. Marketing4Sight ensures that activities remain aligned, visible, and measurable across the entire workflow.
                    </p>
                </div>
            </section>

         
            {/* 3. THIRD SCROLL: WHY IT EXISTS */}
            <section className="py-24 border-b border-gray-200/50 reveal transition-all duration-700 opacity-0 translate-y-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl heading1 primary_color mb-6">Why Marketing4Sight Exists</h2>
                        <h3 className="text-2xl text-[#222222] mb-6 font-bold heading2">Marketing needs more structure, not more fragmentation.</h3>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed bodyText">
                            Marketing today involves multiple activities, channels, teams, and tools. While execution has become faster, maintaining alignment across all moving parts has become increasingly difficult. This often creates gaps between what is planned, what gets executed, and what ultimately drives outcomes.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed bodyText">
                            Marketing4Sight is built to address this by creating a connected system — where <span className="font-bold primary_color">strategy</span> defines direction, <span className="font-bold primary_color">implementation</span> drives execution, <span className="font-bold primary_color">governance</span> ensures consistency, and <span className="font-bold primary_color">optimization</span> continuously improves performance.
                        </p>
                    </div>
                    
                    <div className="relative bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-200 overflow-hidden shadow-xl flex items-center justify-center p-2 group">
                        <img 
                            src={unified} 
                            alt="Unified Marketing System" 
                            className="w-full h-auto object-contain rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* 4. FOURTH SCROLL: WHAT MAKES IT DIFFERENT */}
            <section className="py-24 bg-white/40 backdrop-blur-sm reveal transition-all duration-700 opacity-0 translate-y-10">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl heading1 primary_color mb-6">What Makes Marketing4Sight Different</h2>
                        <p className="text-lg text-gray-600 bodyText">
                            Marketing4Sight is built with a different approach — not as a set of features, but as a system that connects how marketing decisions are made, executed, and improved over time. This ensures clarity is maintained across the entire workflow, not just at individual stages.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 bodyText">
                        {[
                            { title: 'Structure-led', desc: 'Organizes marketing into a clear framework instead of disconnected activities.', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
                            { title: 'Continuity-focused', desc: 'Supports an ongoing cycle of planning, execution, visibility, and improvement.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
                            { title: 'Decision-oriented', desc: 'Helps prioritize what to focus on and how to act based on evolving needs.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
                            { title: 'Operational visibility', desc: 'Keeps activities and outcomes visible in one place for better control and consistency.', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/80 backdrop-blur-md p-10 rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#0859b8] hover:-translate-y-2 transition-all duration-300 group flex items-start space-x-6 cursor-default">
                                <div className="flex-shrink-0 w-14 h-14 bg-blue-50 text-[#0859b8] rounded-xl flex items-center justify-center group-hover:bg-[#0859b8] group-hover:text-white group-hover:shadow-lg transition-all duration-300">
                                    <svg className="w-7 h-7 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 text-[#222222] group-hover:text-[#0859b8] transition-colors duration-300 heading2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. FIFTH SCROLL: FOOTER & CTA */}
            <section className="bg-gradient-to-r from-[#0859b8] to-[#00adc4] text-white py-24 text-center relative overflow-hidden reveal transition-all duration-700 opacity-0 translate-y-10">
                {/* Subtle abstract background elements */}
                <div className="absolute w-[800px] h-[800px] bg-white rounded-full opacity-5 blur-[100px] -top-[400px] -left-[200px] pointer-events-none"></div>
                <div className="absolute w-[600px] h-[600px] bg-[#e7eb90] rounded-full opacity-10 blur-[100px] -bottom-[200px] -right-[100px] pointer-events-none"></div>

                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <h2 className="text-4xl lg:text-5xl heading1 mb-10 leading-tight drop-shadow-sm">See how Marketing4Sight works in practice.</h2>
                    <Link to="/contact-us" className="bg-[#e7eb90] text-[#1c1635] font-extrabold py-4 px-12 rounded-full hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(231,235,144,0.4)] transition-all duration-300 text-lg inline-block heading2 uppercase tracking-widest">
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
