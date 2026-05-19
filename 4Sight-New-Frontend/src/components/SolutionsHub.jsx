import React from 'react';
import { Link } from 'react-router-dom';
import { solutionsData } from '../data/solutionsData';
import Footer from './Footer';

export default function SolutionsHub() {
  const getIcon = (slug) => {
    switch (slug) {
      case 'strategy-planning':
        return (
          <svg className="w-6 h-6 text-[var(--violet)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        );
      case 'governance':
        return (
          <svg className="w-6 h-6 text-[var(--magenta)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        );
      case 'optimization':
        return (
          <svg className="w-6 h-6 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        );
      case 'multi-channel-ops':
        return (
          <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
        );
      case 'organic-growth':
        return (
          <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        );
      case 'content-operations':
        return (
          <svg className="w-6 h-6 text-cyan-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getColorClass = (slug) => {
    switch (slug) {
      case 'strategy-planning':
        return 'hover:shadow-[0_12px_30px_rgba(124,58,237,0.12)] hover:border-[var(--violet-2)]';
      case 'governance':
        return 'hover:shadow-[0_12px_30px_rgba(219,39,119,0.12)] hover:border-[var(--magenta)]';
      case 'optimization':
        return 'hover:shadow-[0_12px_30px_rgba(245,158,11,0.12)] hover:border-amber-400';
      case 'multi-channel-ops':
        return 'hover:shadow-[0_12px_30px_rgba(59,130,246,0.12)] hover:border-blue-400';
      case 'organic-growth':
        return 'hover:shadow-[0_12px_30px_rgba(16,185,129,0.12)] hover:border-emerald-400';
      case 'content-operations':
        return 'hover:shadow-[0_12px_30px_rgba(6,182,212,0.12)] hover:border-cyan-400';
      default:
        return '';
    }
  };

  const getGradientText = (slug) => {
    switch (slug) {
      case 'strategy-planning':
        return 'from-[var(--violet)] to-indigo-600';
      case 'governance':
        return 'from-[var(--magenta)] to-rose-600';
      case 'optimization':
        return 'from-amber-600 to-orange-600';
      case 'multi-channel-ops':
        return 'from-blue-600 to-teal-600';
      case 'organic-growth':
        return 'from-emerald-600 to-teal-600';
      case 'content-operations':
        return 'from-cyan-600 to-indigo-600';
      default:
        return 'from-[var(--violet)] to-[var(--magenta)]';
    }
  };

  return (
    <div className="relative w-full h-screen bg-transparent overflow-y-auto pt-32">
      {/* Soft background grid matching the homepage */}
      <div className="absolute inset-0 bg-grid pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 px-6 md:px-12 xl:px-24 text-center pb-24">
        {/* Eyebrow badge */}
        <span className="inline-block text-[11px] font-bold tracking-[0.2em] text-[var(--violet)] uppercase bg-[var(--violet-soft)] border border-[var(--line)] px-4 py-1.5 rounded-full">
          Platform Solutions
        </span>

        {/* Hero title */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--ink)] tracking-tight mt-6 leading-tight max-w-3xl mx-auto">
          Maximize Operational Impact <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--violet)] via-[var(--magenta)] to-[var(--violet)]">
            Across All Marketing Areas
          </span>
        </h1>

        <p className="text-sm md:text-base text-[var(--ink-dim)] mt-4 max-w-2xl mx-auto font-light leading-relaxed">
          Marketing 4Sight provides a unified operational environment that cascades strategy, monitors performance, analyzes competitive dynamics, and coordinates content and campaign workflows.
        </p>

        {/* Dynamic 6-Card Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 text-left">
          {solutionsData.map((sol) => (
            <Link
              key={sol.id}
              to={`/solutions/${sol.slug}`}
              className={`group flex flex-col justify-between p-7 bg-[var(--paper)] border border-[var(--line)] rounded-2xl transition-all duration-300 hover:-translate-y-1.5 shadow-md ${getColorClass(
                sol.slug
              )}`}
            >
              <div>
                {/* Header of card with icon */}
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-[var(--violet-soft)] border border-[var(--line)] rounded-xl group-hover:scale-105 transition-transform">
                    {getIcon(sol.slug)}
                  </div>
                  <span className="text-[10px] font-bold text-[var(--ink-mute)] tracking-wider">
                    MODULE 0{sol.id}
                  </span>
                </div>

                {/* Eyebrow */}
                <span className="text-[10px] font-bold text-[var(--ink-mute)] uppercase tracking-widest block mt-6">
                  {sol.eyebrow}
                </span>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-[var(--ink)] mt-2 group-hover:text-[var(--violet)] transition-colors">
                  {sol.title}
                </h3>

                {/* Card Teaser */}
                <p className="text-xs text-[var(--ink-dim)] font-light mt-3 leading-relaxed">
                  {sol.scroll1.description.slice(0, 140)}...
                </p>

                {/* Highlights List */}
                <ul className="mt-5 space-y-2 border-t border-[var(--line)] pt-4">
                  {sol.scroll4.cards.slice(0, 3).map((card, cidx) => (
                    <li key={cidx} className="flex items-start gap-2.5 text-[11px] text-[var(--ink-dim)]">
                      <svg className="w-3.5 h-3.5 text-[var(--violet)] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <div>
                        <span className="font-semibold text-[var(--ink-2)]">{card.title}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action learn link */}
              <div className="mt-8 pt-4 border-t border-[var(--line)] flex items-center justify-between">
                <span className={`text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r ${getGradientText(
                  sol.slug
                )}`}>
                  Explore Module &rarr;
                </span>
                <div className="w-6 h-6 rounded-full bg-[var(--violet-soft)] border border-[var(--line)] flex items-center justify-center text-[var(--violet)] text-xs group-hover:bg-[var(--violet)] group-hover:text-white transition-all">
                  &rarr;
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Elegant Book A Demo CTA Box */}
        <div className="mt-20 p-8 md:p-12 bg-white border border-[var(--line)] rounded-3xl text-center max-w-4xl mx-auto shadow-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--violet-soft)] to-[var(--magenta-soft)] opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--ink)] tracking-tight relative z-10">
            Ready to unify your marketing operations?
          </h2>
          <p className="text-xs md:text-sm text-[var(--ink-dim)] font-light mt-3 max-w-xl mx-auto leading-relaxed relative z-10">
            Get structured operational control, full performance visibility, and AI-assisted workflows tailored to your organizational goals.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
            <a href="#contact" className="btn-solid py-3 px-8 text-xs font-bold rounded-lg transition-transform hover:scale-105">
              Book a Custom Demo
            </a>
            <a href="#solutions" className="btn-ghost py-3 px-8 text-xs font-bold border border-[var(--line)] rounded-lg hover:bg-[var(--violet-soft)] transition-all">
              Compare Platform Capabilities
            </a>
          </div>
        </div>
      </div>

      {/* Render the single shared footer cleanly at the bottom */}
      <Footer />
    </div>
  );
}
