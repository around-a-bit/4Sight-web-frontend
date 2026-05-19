import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { solutionsData } from '../data/solutionsData';
import Footer from './Footer';

export default function SolutionDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const deckRef = useRef(null);
  
  const [solution, setSolution] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  // Fetch solution on slug change
  useEffect(() => {
    const found = solutionsData.find(s => s.slug === slug);
    if (!found) {
      navigate('/solutions', { replace: true });
    } else {
      setSolution(found);
      setActiveSlide(0);
      setOpenFaq(null);
      if (deckRef.current) {
        deckRef.current.scrollTop = 0;
      }
    }
  }, [slug, navigate]);

  // Labels for dot navigation
  const slideLabels = [
    '01 Overview',
    '02 Comparison',
    '03 System Hub',
    '04 Capabilities',
    '05 Action CTA',
    '06 FAQs',
    'Footer'
  ];

  const handleScroll = () => {
    const deck = deckRef.current;
    if (!deck) return;

    const scrollTop = deck.scrollTop;
    const clientHeight = deck.clientHeight;
    const scrollHeight = deck.scrollHeight;

    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 15;
    const activeIdx = isAtBottom ? slideLabels.length - 1 : Math.round(scrollTop / clientHeight);

    if (activeIdx >= 0 && activeIdx < slideLabels.length) {
      setActiveSlide(activeIdx);

      // Set body classes for background wash movement
      document.body.className = '';
      if (activeIdx > 0) {
        document.body.classList.add(`s${activeIdx + 1}`);
      }
    }
  };

  // Cleanup body class on unmount
  useEffect(() => {
    return () => {
      document.body.className = '';
    };
  }, []);

  const scrollToSlide = (idx) => {
    const deck = deckRef.current;
    if (deck && deck.children[idx]) {
      deck.children[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!solution) return null;

  // Render a high-fidelity interactive dashboard mockup in premium light mode depending on the active solution
  const renderInteractiveMockup = () => {
    switch (solution.slug) {
      case 'strategy-planning':
        return (
          <div className="w-full bg-[var(--paper)] rounded-xl border border-[var(--line)] p-5 font-sans text-left shadow-lg relative overflow-hidden">
            <div className="flex justify-between items-center border-b border-[var(--line)] pb-3 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-[10px] text-[var(--ink-dim)] font-mono ml-2">strategy_canvas_v4.db</span>
              </div>
              <span className="text-[9px] px-2.5 py-0.5 rounded-full bg-[var(--violet-soft)] text-[var(--violet)] font-bold border border-[var(--line)]">LIVE ENGINE</span>
            </div>
            
            <div className="space-y-3">
              {/* Strategic Pillar 1 */}
              <div className="p-3 bg-[var(--bg)] rounded-lg border border-[var(--line)]">
                <div className="flex justify-between items-center">
                  <h4 className="text-[11px] font-bold text-[var(--ink)]">PILLAR 1: EXPAND ORGANIC DOMINANCE</h4>
                  <span className="text-[9px] text-emerald-600 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> 82% Completed
                  </span>
                </div>
                <div className="w-full bg-[var(--line)] h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-[var(--violet)] to-indigo-500 h-full rounded-full" style={{ width: '82%' }}></div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-3 text-[9px] text-[var(--ink-dim)] border-t border-[var(--line)] pt-2">
                  <div>🎯 Target: 120 Key Phrases</div>
                  <div>📈 Current: 98 Phrases in Top 3</div>
                </div>
              </div>

              {/* Strategic Pillar 2 */}
              <div className="p-3 bg-[var(--bg)] rounded-lg border border-[var(--line)]">
                <div className="flex justify-between items-center">
                  <h4 className="text-[11px] font-bold text-[var(--ink)]">PILLAR 2: ENTERPRISE FUNNEL AUDITING</h4>
                  <span className="text-[9px] text-amber-600 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> 54% Active
                  </span>
                </div>
                <div className="w-full bg-[var(--line)] h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-[var(--violet)] to-indigo-500 h-full rounded-full" style={{ width: '54%' }}></div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-3 text-[9px] text-[var(--ink-dim)] border-t border-[var(--line)] pt-2">
                  <div>🔄 Sync: GMB & On-page</div>
                  <div>⏳ Audit Completion: June 15</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'governance':
        return (
          <div className="w-full bg-[var(--paper)] rounded-xl border border-[var(--line)] p-5 font-sans text-left shadow-lg relative overflow-hidden">
            <div className="flex justify-between items-center border-b border-[var(--line)] pb-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--magenta)]"></span>
                <h4 className="text-[10px] font-bold text-[var(--ink)] tracking-widest uppercase">Governance Monitor</h4>
              </div>
              <span className="text-[8px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-mono font-bold">SECURE ISO-27001</span>
            </div>

            <div className="space-y-2 text-[10px]">
              <div className="flex justify-between items-center p-2.5 bg-[var(--bg)] border-l-3 border-emerald-500 rounded">
                <span className="text-[var(--ink)] font-medium">Compliance Auditing</span>
                <span className="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">PASSED (100%)</span>
              </div>
              <div className="flex justify-between items-center p-2.5 bg-[var(--bg)] border-l-3 border-[var(--magenta)] rounded">
                <span className="text-[var(--ink)] font-medium">Content Quality Guardrails</span>
                <span className="text-[var(--magenta)] font-bold bg-[var(--magenta-soft)] border border-[var(--magenta-soft)] px-2 py-0.5 rounded">ACTIVE</span>
              </div>
              <div className="flex justify-between items-center p-2.5 bg-[var(--bg)] border-l-3 border-amber-500 rounded">
                <span className="text-[var(--ink)] font-medium">Multi-brand Ads Approval</span>
                <span className="text-amber-700 font-bold bg-amber-50 border border-amber-200 px-2 py-0.5 rounded animate-pulse">PENDING REVIEW (1)</span>
              </div>
              <div className="p-3 border border-[var(--line)] rounded bg-[var(--bg)] mt-2">
                <span className="text-[var(--ink-mute)] block text-[8px] uppercase tracking-wider font-bold">LATEST SECURITY ATTRIBUTES</span>
                <p className="text-[var(--ink-dim)] font-mono mt-1 text-[8px]">Token authentication refreshed &bull; SHA-256 enabled &bull; User ID tritobolus signed session.</p>
              </div>
            </div>
          </div>
        );

      case 'optimization':
        return (
          <div className="w-full bg-[var(--paper)] rounded-xl border border-[var(--line)] p-5 font-sans text-left shadow-lg relative overflow-hidden">
            <div className="flex justify-between items-center border-b border-[var(--line)] pb-3 mb-3">
              <h4 className="text-[10px] font-bold text-[var(--ink)] tracking-wider uppercase">COMPETITOR SIGNAL PULSE</h4>
              <span className="text-[9px] text-amber-600 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span> Live Scrape
              </span>
            </div>

            <div className="space-y-2.5 text-[10px]">
              {/* Comp 1 */}
              <div className="flex justify-between items-center p-2.5 bg-[var(--bg)] rounded border border-[var(--line)]">
                <div>
                  <span className="text-[var(--ink)] font-bold block">Competitor Alpha</span>
                  <span className="text-[var(--ink-dim)] text-[9px]">Launched 4 new SEO landing pages</span>
                </div>
                <span className="text-red-600 font-bold bg-red-50 px-2 py-0.5 rounded border border-red-200">ALERT</span>
              </div>
              {/* Comp 2 */}
              <div className="flex justify-between items-center p-2.5 bg-[var(--bg)] rounded border border-[var(--line)]">
                <div>
                  <span className="text-[var(--ink)] font-bold block">Competitor Beta</span>
                  <span className="text-[var(--ink-dim)] text-[9px]">Organic visibility index fell -8%</span>
                </div>
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">OPPORTUNITY</span>
              </div>
              {/* Recommendations */}
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg mt-3">
                <span className="text-amber-800 font-bold text-[8px] uppercase tracking-widest block">AI-Assisted Directive</span>
                <p className="text-amber-900 mt-1 text-[9.5px] leading-relaxed italic">
                  "Target 'local digital operations visibility' search universe. Competitor Alpha lacks local SEO presence here."
                </p>
              </div>
            </div>
          </div>
        );

      case 'multi-channel-ops':
        return (
          <div className="w-full bg-[var(--paper)] rounded-xl border border-[var(--line)] p-5 font-sans text-left shadow-lg relative overflow-hidden">
            <div className="flex justify-between items-center border-b border-[var(--line)] pb-2 mb-3">
              <span className="text-[10px] font-bold text-[var(--ink)]">OMNICHANNEL PUBLISHING BOARD</span>
              <span className="text-[8px] text-blue-700 font-bold px-2 py-0.5 rounded bg-blue-50 border border-blue-200">GRID WORKFLOWS</span>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mt-2">
              {/* Channel 1 */}
              <div className="p-2.5 bg-[var(--bg)] rounded text-center border border-[var(--line)] hover:border-blue-400 transition-colors">
                <span className="text-blue-600 font-bold text-[9px] block">LINKEDIN</span>
                <span className="text-[var(--ink)] text-[12px] font-semibold block mt-1">4 Posts</span>
                <span className="text-[9px] text-emerald-600 font-medium mt-1 block">Scheduled</span>
              </div>
              {/* Channel 2 */}
              <div className="p-2.5 bg-[var(--bg)] rounded text-center border border-[var(--line)] hover:border-[var(--violet)] transition-colors">
                <span className="text-[var(--violet)] font-bold text-[9px] block">INSTAGRAM</span>
                <span className="text-[var(--ink)] text-[12px] font-semibold block mt-1">2 Reels</span>
                <span className="text-[9px] text-amber-600 font-medium mt-1 block">In Review</span>
              </div>
              {/* Channel 3 */}
              <div className="p-2.5 bg-[var(--bg)] rounded text-center border border-[var(--line)] hover:border-emerald-400 transition-colors">
                <span className="text-emerald-600 font-bold text-[9px] block">GMB LOCAL</span>
                <span className="text-[var(--ink)] text-[12px] font-semibold block mt-1">3 Offers</span>
                <span className="text-[9px] text-emerald-600 font-medium mt-1 block">Active</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-[var(--bg)] rounded border border-[var(--line)] text-[10px]">
              <div className="flex justify-between items-center text-[var(--ink-dim)]">
                <span>Task: Sync Campaign Assets</span>
                <span className="text-emerald-600 font-bold">100% Completed</span>
              </div>
              <div className="w-full bg-[var(--line)] h-1 rounded-full mt-2 overflow-hidden">
                <div className="bg-blue-500 h-full" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        );

      case 'organic-growth':
        return (
          <div className="w-full bg-[var(--paper)] rounded-xl border border-[var(--line)] p-5 font-sans text-left shadow-lg relative overflow-hidden">
            <div className="flex justify-between items-center border-b border-[var(--line)] pb-2.5 mb-2.5">
              <h4 className="text-[10px] font-bold text-[var(--ink)] tracking-widest uppercase">LOCAL VISIBILITY & KEYWORD TRACKER</h4>
              <span className="text-[8px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-mono font-bold">SEO DECK</span>
            </div>

            <div className="space-y-2 text-[10px]">
              <div className="flex justify-between items-center p-2 bg-[var(--bg)] rounded border border-[var(--line)]">
                <span className="text-[var(--ink-2)] font-medium">"marketing governance platform"</span>
                <span className="text-emerald-600 font-bold">Pos #2 (+3)</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-[var(--bg)] rounded border border-[var(--line)]">
                <span className="text-[var(--ink-2)] font-medium">"connected marketing operations"</span>
                <span className="text-emerald-600 font-bold">Pos #1 (+1)</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-[var(--bg)] rounded border border-[var(--line)]">
                <span className="text-[var(--ink-2)] font-medium">"local search visibility engine"</span>
                <span className="text-emerald-600 font-bold">Pos #5 (New)</span>
              </div>

              {/* GMB listings mock */}
              <div className="p-3 border border-[var(--line)] rounded-lg bg-[var(--bg)] mt-3 flex justify-between items-center">
                <div>
                  <span className="text-[var(--ink)] font-bold text-[8px] block uppercase">GMB Listings (3 Locations)</span>
                  <span className="text-[var(--ink-dim)] text-[8px]">Google Map View optimization</span>
                </div>
                <div className="text-right">
                  <span className="text-amber-500 font-bold block">4.9 ★★★★★</span>
                  <span className="text-[8px] text-[var(--ink-dim)] block">128 Live reviews synced</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'content-operations':
        return (
          <div className="w-full bg-[var(--paper)] rounded-xl border border-[var(--line)] p-5 font-sans text-left shadow-lg relative overflow-hidden">
            <div className="flex justify-between items-center border-b border-[var(--line)] pb-2.5 mb-2.5">
              <span className="text-[10px] font-bold text-[var(--ink)] tracking-widest uppercase">CAMPAIGN CONTENT CALENDAR</span>
              <span className="text-[8px] text-cyan-700 font-bold border border-cyan-200 px-2 py-0.5 rounded bg-cyan-50">ACTIVE SLOTS</span>
            </div>

            <div className="space-y-2.5 text-[10px]">
              <div className="flex justify-between items-center p-2.5 bg-[var(--bg)] rounded border-l-3 border-[var(--violet)]">
                <div>
                  <span className="text-[var(--ink)] font-bold block">Q3 Operations Launch Blog</span>
                  <span className="text-[var(--ink-dim)] text-[8px]">Drafting AI asset descriptions</span>
                </div>
                <span className="text-[8px] text-[var(--violet)] font-bold bg-[var(--violet-soft)] px-2 py-0.5 rounded border border-[var(--line)]">DRAFT</span>
              </div>

              <div className="flex justify-between items-center p-2.5 bg-[var(--bg)] rounded border-l-3 border-cyan-500">
                <div>
                  <span className="text-[var(--ink)] font-bold block">Omnichannel Strategy Infographic</span>
                  <span className="text-[var(--ink-dim)] text-[8px]">Awaiting head copy sign-off</span>
                </div>
                <span className="text-[8px] text-cyan-700 font-bold bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200">IN REVIEW</span>
              </div>

              <div className="flex justify-between items-center p-2.5 bg-[var(--bg)] rounded border-l-3 border-emerald-500">
                <div>
                  <span className="text-[var(--ink)] font-bold block">Social Media Reels Campaign (3 segments)</span>
                  <span className="text-[var(--ink-dim)] text-[8px]">Assets verified and uploaded</span>
                </div>
                <span className="text-[8px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">APPROVED</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getGradientClass = (slug) => {
    switch (slug) {
      case 'strategy-planning':
        return 'from-[var(--violet)] to-indigo-500';
      case 'governance':
        return 'from-[var(--magenta)] to-rose-500';
      case 'optimization':
        return 'from-amber-500 to-orange-500';
      case 'multi-channel-ops':
        return 'from-blue-500 to-teal-500';
      case 'organic-growth':
        return 'from-emerald-500 to-teal-500';
      case 'content-operations':
        return 'from-cyan-500 to-indigo-500';
      default:
        return 'from-[var(--violet)] to-[var(--magenta)]';
    }
  };

  const getCardBorderClass = (slug) => {
    switch (slug) {
      case 'strategy-planning': return 'hover:border-[var(--violet)] hover:shadow-[0_12px_24px_rgba(124,58,237,0.08)]';
      case 'governance': return 'hover:border-[var(--magenta)] hover:shadow-[0_12px_24px_rgba(219,39,119,0.08)]';
      case 'optimization': return 'hover:border-amber-400 hover:shadow-[0_12px_24px_rgba(245,158,11,0.08)]';
      case 'multi-channel-ops': return 'hover:border-blue-400 hover:shadow-[0_12px_24px_rgba(59,130,246,0.08)]';
      case 'organic-growth': return 'hover:border-emerald-400 hover:shadow-[0_12px_24px_rgba(16,185,129,0.08)]';
      case 'content-operations': return 'hover:border-cyan-400 hover:shadow-[0_12px_24px_rgba(6,182,212,0.08)]';
      default: return 'hover:border-[var(--violet)]';
    }
  };

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div>
      {/* Slide Navigation Dots */}
      <div className="dots" role="tablist" aria-label="Slide navigation">
        {slideLabels.map((label, idx) => (
          <button
            key={idx}
            className={activeSlide === idx ? 'active' : ''}
            onClick={() => scrollToSlide(idx)}
            aria-label={`Slide ${idx + 1} - ${label}`}
            title={label}
          />
        ))}
      </div>

      {/* Snap Scrolling Deck Container */}
      <div className="deck" id="deck" ref={deckRef} onScroll={handleScroll}>
        
        {/* SLIDE 1: Hero Overview */}
        <section className="slide details-slide flex flex-col justify-center">
          <div className="container max-w-6xl relative z-10 px-6 md:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
              {/* Left Column: Strategic Text Details */}
              <div className="lg:col-span-7">
                <span className="inline-block text-[11px] font-bold tracking-[0.25em] text-[var(--violet)] uppercase bg-[var(--violet-soft)] border border-[var(--line)] px-4 py-1.5 rounded-full">
                  {solution.eyebrow}
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-[var(--ink)] mt-6 tracking-tight leading-tight">
                  {solution.scroll1.title}
                </h1>
                <p className="text-xs md:text-sm text-[var(--ink-dim)] mt-4 font-light leading-relaxed">
                  {solution.scroll1.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <button 
                    onClick={() => scrollToSlide(4)}
                    className="btn-solid py-3 px-8 text-xs font-bold rounded-lg transition-transform hover:scale-105"
                  >
                    Book a Demo
                  </button>
                  <button 
                    onClick={() => scrollToSlide(1)}
                    className="btn-ghost py-3 px-8 text-xs font-bold border border-[var(--line)] rounded-lg hover:bg-[var(--violet-soft)] transition-all"
                  >
                    Why It Matters &darr;
                  </button>
                </div>
              </div>

              {/* Right Column: High-Fidelity Interactive Dashboard Mockup */}
              <div className="lg:col-span-5 w-full">
                <div className="max-w-xl mx-auto lg:mx-0 group relative">
                  <div className={`absolute -inset-1.5 bg-gradient-to-r ${getGradientClass(solution.slug)} opacity-10 group-hover:opacity-20 blur rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
                  {renderInteractiveMockup()}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 2: Side-by-Side Comparison Table */}
        <section className="slide details-slide flex flex-col justify-center">
          <div className="container max-w-5xl relative z-10 px-6 md:px-0">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-[11px] font-bold text-[var(--violet)] bg-[var(--violet-soft)] border border-[var(--line)] px-3 py-1 rounded-full uppercase tracking-widest">
                {solution.scroll2.title}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--ink)] mt-3 tracking-tight">
                {solution.scroll2.subtitle}
              </h2>
              <p className="text-xs md:text-sm text-[var(--ink-dim)] mt-3 font-light leading-relaxed">
                {solution.scroll2.description}
              </p>
            </div>

            {/* Side-by-Side Table Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
              {/* Left Column: Traditional Approaches */}
              <div className="p-6 bg-[var(--paper)] border border-red-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-2.5 mb-4 border-b border-red-500/10 pb-3">
                  <div className="p-2 bg-red-50 border border-red-200 rounded-xl text-red-500">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <h3 className="text-xs font-bold text-[var(--ink)] tracking-wider uppercase">Traditional Approaches</h3>
                </div>
                <ul className="space-y-3.5">
                  {solution.scroll2.comparison.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[11px] text-[var(--ink-dim)] leading-relaxed">
                      <span className="text-red-500 font-extrabold shrink-0 mt-0.5">&bull;</span>
                      <span>{item.traditional}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: Marketing 4Sight */}
              <div className="p-6 bg-[var(--paper)] border border-emerald-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-2.5 mb-4 border-b border-emerald-500/10 pb-3">
                  <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-xs font-bold text-[var(--ink)] tracking-wider uppercase">Marketing 4Sight</h3>
                </div>
                <ul className="space-y-3.5">
                  {solution.scroll2.comparison.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[11px] text-[var(--ink-2)] font-medium leading-relaxed">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item.fourSight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 3: Connected System Overview */}
        <section className="slide details-slide flex flex-col justify-center">
          <div className="container max-w-5xl relative z-10 px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Hierarchy Display */}
              <div className="order-2 md:order-1 p-6 bg-white border border-[var(--line)] rounded-2xl shadow-md relative overflow-hidden">
                <span className="text-[9px] font-bold text-[var(--ink-mute)] uppercase tracking-widest block mb-4 border-b border-[var(--line)] pb-2">Operational Hub Hierarchy</span>
                <div className="space-y-3 text-[10px]">
                  <div className="p-2.5 bg-[var(--violet-soft)] border border-[var(--line)] text-[var(--violet)] rounded font-semibold">
                    1. Input: Business Context & Market Signals
                  </div>
                  <div className="p-2.5 bg-pink-50 border border-pink-100 text-pink-700 rounded font-semibold pl-6">
                    2. Governance Layer: Quality & Alignment Guidelines
                  </div>
                  <div className="p-2.5 bg-emerald-50 border border-emerald-100 text-emerald-700 rounded font-semibold pl-10">
                    3. Action: Publishing & Local Search SEO Execution
                  </div>
                  <div className="p-2.5 bg-amber-50 border border-amber-100 text-amber-700 rounded font-semibold pl-14">
                    4. Optimization: Continuous Auditing & Competitor Signals
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <span className="text-[11px] font-bold text-[var(--violet)] bg-[var(--violet-soft)] border border-[var(--line)] px-3 py-1 rounded-full uppercase tracking-widest block w-fit">
                  SYSTEM ARCHITECTURE
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--ink)] mt-4 tracking-tight">
                  {solution.scroll3.title}
                </h2>
                <p className="text-xs md:text-sm text-[var(--ink-dim)] mt-4 font-light leading-relaxed">
                  {solution.scroll3.description}
                </p>
                <button
                  onClick={() => scrollToSlide(3)}
                  className="mt-6 text-[var(--violet)] font-bold hover:text-indigo-600 transition-colors text-xs flex items-center gap-1"
                >
                  View Capabilities Grid &rarr;
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 4: Capabilities Grid */}
        <section className="slide details-slide flex flex-col justify-center">
          <div className="container max-w-5xl relative z-10 px-6 md:px-0">
            <div className="text-center mb-8">
              <span className="text-[11px] font-bold text-[var(--violet)] bg-[var(--violet-soft)] border border-[var(--line)] px-3 py-1 rounded-full uppercase tracking-widest">
                {solution.scroll4.title}
              </span>
              <h2 className="text-xl md:text-3xl font-extrabold text-[var(--ink)] mt-3 tracking-tight">
                {solution.scroll4.subtitle}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {solution.scroll4.cards.map((card, idx) => (
                <div
                  key={idx}
                  className={`p-5 bg-[var(--paper)] border border-[var(--line)] rounded-xl transition-all duration-300 shadow-sm ${getCardBorderClass(solution.slug)}`}
                >
                  <div className="flex gap-2.5 items-center">
                    <div className="w-5.5 h-5.5 rounded-lg bg-[var(--violet-soft)] border border-[var(--line)] text-[var(--violet)] flex items-center justify-center text-[10px] font-bold shrink-0">
                      0{idx + 1}
                    </div>
                    <h3 className="text-xs font-bold text-[var(--ink)] tracking-wide uppercase">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-[10px] text-[var(--ink-dim)] font-light mt-3 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SLIDE 5: Bottom CTA */}
        <section className="slide details-slide flex flex-col justify-center">
          <div className="container max-w-4xl relative z-10 px-6 md:px-0 text-center">
            <div className="p-8 md:p-12 bg-white border border-[var(--line)] rounded-3xl relative overflow-hidden group shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--violet-soft)] to-[var(--magenta-soft)] opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
              
              <span className="text-[11px] font-bold text-[var(--violet)] uppercase tracking-[0.2em] block relative z-10">
                Take Command
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-[var(--ink)] mt-4 tracking-tight max-w-2xl mx-auto leading-tight relative z-10">
                {solution.scroll5.title}
              </h2>
              <p className="text-xs md:text-sm text-[var(--ink-dim)] font-light mt-4 max-w-xl mx-auto leading-relaxed relative z-10">
                {solution.scroll5.description}
              </p>

              {/* Conversion Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
                <a href="#contact" className="btn-solid py-3 px-8 text-xs font-bold rounded-lg transition-all hover:scale-105 shadow-md">
                  Book a Platform Demo
                </a>
                <Link to="/solutions" className="btn-ghost py-3 px-8 text-xs font-bold border border-[var(--line)] rounded-lg hover:bg-[var(--violet-soft)] transition-all">
                  Back to Solutions Hub
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* SLIDE 6: Dynamic FAQs Accordion */}
        <section className="slide details-slide flex flex-col justify-center">
          <div className="container max-w-3xl relative z-10 px-6 md:px-0">
            <div className="text-center mb-8">
              <span className="text-[11px] font-bold text-[var(--violet)] bg-[var(--violet-soft)] border border-[var(--line)] px-3 py-1 rounded-full uppercase tracking-widest">
                Platform Intelligence
              </span>
              <h2 className="text-xl md:text-2xl font-extrabold text-[var(--ink)] mt-3">
                {solution.scroll6.title}
              </h2>
            </div>

            <div className="space-y-3 mt-6">
              {solution.scroll6.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--paper)] border border-[var(--line)] rounded-xl overflow-hidden transition-all shadow-sm hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center p-4 text-left hover:bg-[var(--violet-soft)]/20 transition-colors group"
                  >
                    <span className="text-xs font-bold text-[var(--ink)] group-hover:text-[var(--violet)] transition-colors tracking-wide">
                      {faq.question}
                    </span>
                    <svg
                      className={`w-4 h-4 text-[var(--ink-dim)] transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-[var(--violet)]' : ''}`}
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
                      openFaq === idx ? 'max-h-40 border-t border-[var(--line)]' : 'max-h-0'
                    }`}
                  >
                    <p className="p-4 text-[11px] text-[var(--ink-dim)] font-light leading-relaxed bg-[var(--violet-soft)]/10">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Render the single shared footer directly inside the snap scrolling deck as the final slide */}
        <Footer />
        
      </div>
    </div>
  );
}
