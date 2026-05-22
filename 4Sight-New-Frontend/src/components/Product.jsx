import { useState, useEffect, useRef } from 'react';
import Footer from './Footer';

// Asset Imports
import marketingDashboard from '../assets/screenshorts/product-screenshots/dashboard.png';
import contentManager from '../assets/screenshorts/product-screenshots/contentManager.png';
import websiteBuilderImage from '../assets/screenshorts/product-screenshots/websiteBuilder.png';  
import strategyDashboard from '../assets/strategy-dashboard.png';
import implementationDashboard from '../assets/implementation-dashboard.png';
import governanceDashboard from '../assets/governance-dashboard.png';
import optimizationDashboard from '../assets/optimization-dashboard.png';
import GMB from '../assets/screenshorts/product-screenshots/GBM.png';
import SEO from '../assets/screenshorts/product-screenshots/SEO.png';

export default function Product() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const deckRef = useRef(null);
  const carouselRef = useRef(null);

  const slideLabels = [
    '01 Overview',
    '02 Connected OS',
    '03 Modules',
    '04 SIGO Framework',
    '05 Intelligence Layer',
    '06 Video Demo',
    '07 FAQs',
    '08 Get Started',
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

      // Apply background classes matching observer behavior
      document.body.className = '';
      if (activeIdx > 0) {
        document.body.classList.add(`s${activeIdx + 1}`);
      }
    }
  };

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

  const handleCarouselScroll = () => {
    const el = carouselRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.offsetWidth);
    setCarouselIndex(index);
  };

  const handleDotClick = (idx) => {
    const el = carouselRef.current;
    if (el) {
      el.scrollTo({
        left: idx * el.offsetWidth,
        behavior: 'smooth'
      });
      setCarouselIndex(idx);
    }
  };

  return (
    <div>
      {/* Slide Navigation Indicator */}
      <div className="dots" role="tablist" aria-label="Product slide navigation">
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

      {/* Snap Scroll Deck */}
      <div className="deck" id="deck" ref={deckRef} onScroll={handleScroll}>

        {/* ============ SLIDE 1: OVERVIEW ============ */}
      <section className="slide product-first-scroll" id="slide-1" aria-labelledby="product-first-title">
  <div className="first-scroll-inner">
    <h1 className="first-brand" id="product-first-title">Marketing <span>4Sight.</span></h1>
    <p className="first-headline">Data-Driven Decisions for Modern Marketing.</p>
    <p className="first-lede">The intelligent marketing operating system built for teams that need clarity, structure, and compounding growth.</p>

    {/* Updated Pillars Container using Tailwind CSS */}
    <div className="flex flex-wrap items-center justify-center gap-3 my-8 max-w-4xl mx-auto" aria-label="Marketing 4Sight product principles">
      
      {/* Pillar 1 */}
      <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-100 px-4 py-2 rounded-full text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-white hover:border-purple-200">
        <svg className="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
        <span>Data-driven direction</span>
      </div>

      {/* Pillar 2 */}
      <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-100 px-4 py-2 rounded-full text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-white hover:border-purple-200">
        <svg className="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
        <span>Structured execution</span>
      </div>

      {/* Pillar 3 */}
      <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-100 px-4 py-2 rounded-full text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-white hover:border-purple-200">
        <svg className="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4" />
          <path d="m16.2 7.8 2.9-2.9" />
          <path d="M18 12h4" />
          <path d="m16.2 16.2 2.9 2.9" />
          <path d="M12 18v4" />
          <path d="m4.9 19.1 2.9-2.9" />
          <path d="M2 12h4" />
          <path d="m4.9 4.9 2.9 2.9" />
        </svg>
        <span>Continuous optimization</span>
      </div>

      {/* Pillar 4 */}
      <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-100 px-4 py-2 rounded-full text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-white hover:border-purple-200">
        <svg className="w-4 h-4 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
        <span>Connected analytics</span>
      </div>

    </div>

     <div className="text-center">
          <button className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-[15px] bg-gradient-to-br from-purple-600 to-pink-600 shadow-md shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-500/40" onClick={() => scrollToSlide(7)}>
            Book a demo
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
  </div>
</section>

        {/* ============ SLIDE 2: CONNECTED SYSTEM ============ */}
        <section
  className="slide product-second-scroll min-h-screen flex items-center bg-gradient-to-b from-white to-purple-50 px-6 lg:px-20 py-20"
  id="slide-2"
>
  <div className="second-scroll-inner max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
    
    {/* Left Content */}
    <div className="second-content">
      
      {/* Small Heading */}
      <h3 className="text-purple-600 font-semibold tracking-wide uppercase text-sm mb-4">
        Data-Driven Decisions for Modern Marketing
      </h3>

      {/* Main Heading */}
      <h2 className="text-2xl lg:text-4xl font-bold leading-tight text-[#1C1635] mb-8">
        One Connected System. Built for Marketing That{" "}
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Works Together.
        </span>
      </h2>

      {/* Description */}
      <div className="space-y-5 text-lg text-gray-600 leading-relaxed">
        <p>
          Every part of marketing influences another. Visibility impacts
          traffic, content shapes discovery, campaigns affect engagement,
          and performance changes priorities.
        </p>

        <p>
          Marketing 4Sight is built to keep these moving parts connected,
          so marketing operates with greater alignment, continuity, and
          decision clarity.
        </p>

        <p>
          Instead of switching between disconnected tools, teams work
          within a shared system where decisions, actions, and insights
          remain continuously connected.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <button
          onClick={() => scrollToSlide(5)}
          className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-7 py-4 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="group-hover:translate-x-1 transition-transform duration-300"
          >
            <path d="M8 5v14l11-7z" />
          </svg>

          <span className="font-medium">Watch How It Works</span>
        </button>
      </div>
    </div>

    {/* Right Image */}
    <div className="second-visual relative">
      <div className="absolute inset-0 bg-purple-300/20 blur-3xl rounded-full"></div>

      <div className="relative bg-white/80 backdrop-blur-xl border border-purple-100 rounded-3xl shadow-2xl p-4">
        <img
          src={marketingDashboard}
          alt="Marketing 4Sight Connected System Visualization"
          className="rounded-2xl w-full object-cover"
        />
      </div>
    </div>
  </div>
</section>

        {/* ============ SLIDE 3: 7 WORKFLOW MODULES ============ */}
        <section className="slide product-third-scroll" id="slide-3">
          <div className="container">
            <div className="third-intro text-center max-w-4xl mx-auto mb-2">
  
  {/* Small Label */}
  <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold tracking-wide mb-3">
    Connected Marketing Modules
  </span>

  {/* Main Heading */}
  <h2 className="third-title text-3xl lg:text-4xl font-bold leading-tight text-[#1C1635] mb-2">
    Built Across the Full{" "}
    <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
      Marketing Workflow.
    </span>
  </h2>

  {/* Description */}
  <p className="third-lede text-base lg:text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
    Each module in Marketing 4Sight is designed to solve a specific operational layer while remaining connected to the broader marketing system.
  </p>
</div>
            <div className="module-cards">
              {/* Module 1: Keyword Planner */}
              <div className="module-card">
                <div className="module-info">
                  <span className="module-tag">Module 1</span>
                  <h3>Keyword Planner</h3>
                  <p>Build and structure your keyword universe using business context, market signals, competitor insights, and search intent.<br /><br />The planner connects search intelligence across SEO, content, local visibility, and campaign direction, rather than treating keywords as isolated SEO data.</p>
                  <button className="btn-solid" onClick={() => scrollToSlide(7)}>Book a demo</button>
                </div>
                <div className="module-visual relative">
                  <div className="module-carousel" id="carousel1" ref={carouselRef} onScroll={handleCarouselScroll}>
                    <img src={strategyDashboard} alt="Keyword Planner Action Plan" />
                    <img src={governanceDashboard} alt="Keyword Planner Governance" />
                    <img src={implementationDashboard} alt="Keyword Planner Implementation" />
                    <img src={optimizationDashboard} alt="Keyword Planner Optimization" />
                  </div>
                  <div className="carousel-dots">
                    {[0, 1, 2, 3].map((idx) => (
                      <span
                        key={idx}
                        className={`carousel-dot ${carouselIndex === idx ? 'active' : ''}`}
                        onClick={() => handleDotClick(idx)}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Module 2: SEO Manager */}
              <div className="module-card">
                <div className="module-info">
                  <span className="module-tag">Module 2</span>
                  <h3>SEO Manager</h3>
                  <p>Track rankings, website performance, optimization priorities, and organic visibility through one structured workflow.<br /><br />Monitor on-page SEO, technical health, Core Web Vitals, off-page activities, keyword opportunities, and performance trends while maintaining clear visibility into what needs attention, what is improving, and what impacts overall search presence.</p>
                  <button className="btn-solid" onClick={() => scrollToSlide(7)}>Book a demo</button>
                </div>
              <div className="module-visual p-4 flex items-center justify-center">
    <div className="w-full h-full bg-slate-50 rounded-[24px] border border-purple-100 overflow-hidden shadow-sm flex items-center justify-center relative group">
      
      {/* REAL IMAGE ELEMENT: 
        Replace 'yourRealImageSourceHere' with your actual variable name or path (e.g., contentDashboardImg)
      */}
      <img 
        src={SEO} 
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]" 
        alt="SEO Manager Platform Interface Preview" 
      />

    </div>
  </div>
              </div>

              {/* Module 3: GMB Manager */}
              <div className="module-card">
                <div className="module-info">
                  <span className="module-tag">Module 3</span>
                  <h3>GMB Manager</h3>
                  <p>Manage local visibility through structured actions, optimization tracking, review monitoring, and location-level performance insights.<br /><br />The platform connects local search activity with broader marketing visibility instead of treating GMB as a standalone activity.</p>
                  <button className="btn-solid" onClick={() => scrollToSlide(7)}>Book a demo</button>
                </div>
               <div className="module-visual p-4 flex items-center justify-center">
    <div className="w-full h-full bg-slate-50 rounded-[24px] border border-purple-100 overflow-hidden shadow-sm flex items-center justify-center relative group">
      
      {/* REAL IMAGE ELEMENT: 
        Replace 'yourRealImageSourceHere' with your actual variable name or path (e.g., contentDashboardImg)
      */}
      <img 
        src={GMB} 
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]" 
        alt="GMB Manager Platform Interface Preview" 
      />

    </div>
  </div>
              </div>

              {/* Module 4: Content Manager */}
             <div className="module-card">
  <div className="module-info">
    <span className="module-tag">Module 4</span>
    <h3>Content Manager</h3>
    <p>
      Plan, create, organize, and manage content across websites, blogs, and social platforms from one connected workflow.
      <br /><br />
      The Content Manager helps structure content around themes, campaigns, business priorities, and audience intent while keeping execution aligned across platforms like Instagram, Facebook, LinkedIn, X, and YouTube.
    </p>
    <button className="btn-solid" onClick={() => scrollToSlide(7)}>Book a demo</button>
  </div>
  
  {/* Modernized Image Container Area */}
  <div className="module-visual p-4 flex items-center justify-center">
    <div className="w-full h-full bg-slate-50 rounded-[24px] border border-purple-100 overflow-hidden shadow-sm flex items-center justify-center relative group">
      
      {/* REAL IMAGE ELEMENT: 
        Replace 'yourRealImageSourceHere' with your actual variable name or path (e.g., contentDashboardImg)
      */}
      <img 
        src={contentManager} 
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]" 
        alt="Content Manager Platform Interface Preview" 
      />

    </div>
  </div>
</div>

              {/* Module 5: Funnel Manager */}
              <div className="module-card">
                <div className="module-info">
                  <span className="module-tag">Module 5</span>
                  <h3>Funnel Manager</h3>
                  <p>Understand how users move across touchpoints and identify where engagement, conversion, or intent starts to drop.<br /><br />The platform helps structure conversion journeys with clearer visibility into user movement and decision stages.</p>
                  <button className="btn-solid" onClick={() => scrollToSlide(7)}>Book a demo</button>
                </div>
                <div className="module-visual p-4">
                  <div className="w-full h-full bg-white rounded-xl p-4 flex flex-col justify-between font-sans border border-purple-100">
                    <strong className="text-xs text-purple-900 block">Behavior Funnel Analytics</strong>
                    <div className="flex-1 flex flex-col justify-center gap-1.5 my-2">
                      <div className="w-full bg-purple-600 text-white text-[9px] font-bold text-center py-0.5 rounded">100% Views (24.8K)</div>
                      <div className="w-[80%] mx-auto bg-purple-500 text-white text-[9px] font-bold text-center py-0.5 rounded">62% Clicks (15.3K)</div>
                      <div className="w-[45%] mx-auto bg-purple-400 text-white text-[9px] font-bold text-center py-0.5 rounded">18% Leads (4.4K)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 6: Media Manager */}
              <div className="module-card">
                <div className="module-info">
                  <span className="module-tag">Module 6</span>
                  <h3>Media Manager</h3>
                  <p>Track campaign visibility, monitor performance signals, and align paid activity with broader marketing priorities and outcomes.<br /><br />This creates clearer visibility into how media efforts contribute to overall marketing direction.</p>
                  <button className="btn-solid" onClick={() => scrollToSlide(7)}>Book a demo</button>
                </div>
                <div className="module-visual p-4">
                  <div className="w-full h-full bg-[#faf8fd] rounded-xl p-4 flex flex-col justify-between font-sans border border-purple-100">
                    <strong className="text-xs text-purple-900 block">Ad Campaign Monitor</strong>
                    <div className="flex-1 flex flex-col justify-center gap-2">
                      <div className="flex justify-between items-center text-xs">
                        <span>Google Search Ads</span>
                        <strong className="text-emerald-500">ROI: 3.8x</strong>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span>Meta Retargeting Flow</span>
                        <strong className="text-emerald-500">ROI: 4.2x</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 7: Website Builder */}
       {/* Module 7: Website Builder Container Card */}
<div className="w-full max-w-7xl mx-auto bg-white/60 backdrop-blur-md border border-slate-100 rounded-[40px] p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center shadow-sm">
  
  {/* Left Column: Text & Content Panel */}
  <div className="lg:col-span-5 flex flex-col items-start text-left gap-5">
    <span className="text-xs uppercase font-bold tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-md">
      Module 7
    </span>
    <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
      Website Builder
    </h3>
    <div className="flex flex-col gap-4 text-slate-600 text-sm md:text-base leading-relaxed font-normal">
      <p>
        Generate a structured website foundation using your business inputs, brand context, and marketing requirements — without technical dependency or complex setup processes.
      </p>
      <p>
        The Website Builder helps businesses create a clean, ready-to-deploy digital presence with page structure, content drafts, and design templates.
      </p>
    </div>
    
    {/* Action Trigger Button */}
    <button 
      className="mt-2 inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium text-sm px-6 py-3 rounded-xl transition-all duration-200 shadow-sm shadow-purple-500/10 hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
      onClick={() => scrollToSlide(7)}
    >
      Book a demo
    </button>
  </div>
  
  {/* Right Column: Beautiful, Fully-Visible Interactive App Container Frame */}
  <div className="lg:col-span-7 w-full flex items-center justify-center">
    <div className="w-full relative rounded-[24px] bg-white border border-purple-100/80 p-3 shadow-xl shadow-purple-900/5 overflow-hidden group">
      
      {/* Image settings: 'w-full h-auto' keeps the exact aspect-ratio intact 
        so that your dashboard mockups are completely visible without text or buttons overflowing out of perspective.
      */}
      <img 
        src={websiteBuilderImage} 
        className="w-full h-auto object-contain rounded-xl transition-all duration-500 group-hover:scale-[1.01]" 
        alt="Website Builder Platform Interface Preview" 
      />

    </div>
  </div>

</div>
            </div>

            <div className="third-outro">
              <p>Together, these modules create a structured operational workflow where marketing activities, execution, visibility, and decision-making remain continuously informed by the same business and performance context, enabling clearer priorities and more informed actions across every stage.</p>
            </div>
          </div>
        </section>

        {/* ============ SLIDE 4: SIGO FRAMEWORK ============ */}
<section
  className="w-full py-20 px-5 lg:px-16 bg-gradient-to-b from-white to-purple-50"
  id="slide-4"
>
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-14">

      <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-5">
        SIGO Framework
      </span>

      <h2 className="text-3xl md:text-5xl font-bold text-[#1C1635] leading-tight mb-6">
        The SIGO Framework Behind{" "}
        <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          Marketing 4Sight.
        </span>
      </h2>

      <div className="max-w-4xl mx-auto space-y-4">
        <p className="text-gray-600 text-[15px] md:text-lg leading-8">
          Marketing 4Sight is built around the SIGO framework, a structured
          marketing operating model that connects strategy, implementation,
          governance, and optimization into one continuous system.
        </p>

        <p className="text-gray-500 text-[15px] md:text-base leading-8">
          Instead of disconnected tools and manual workflows, SIGO helps
          businesses understand where they stand, what needs to be done,
          how execution is progressing, and what should change next.
        </p>
      </div>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Strategy */}
      <div className="bg-white border border-purple-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">

        <div className="mb-5">
          <span className="text-xs font-bold uppercase tracking-[2px] text-purple-600">
            Strategy
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#1C1635] mb-4 leading-snug">
          Build direction with clarity, not assumptions.
        </h3>

        <div className="space-y-4">
          <p className="text-gray-600 leading-8 text-[15px]">
            Marketing 4Sight analyzes your business context, market
            landscape, competitors, visibility, and operational goals to
            establish a structured strategic foundation.
          </p>

          <p className="text-gray-500 leading-8 text-[15px]">
            Businesses receive actionable direction supported by market
            intelligence instead of fragmented planning workflows.
          </p>
        </div>
      </div>

      {/* Implementation */}
      <div className="bg-white border border-purple-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">

        <div className="mb-5">
          <span className="text-xs font-bold uppercase tracking-[2px] text-pink-500">
            Implementation
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#1C1635] mb-4 leading-snug">
          Turn strategy into execution without friction.
        </h3>

        <div className="space-y-4">
          <p className="text-gray-600 leading-8 text-[15px]">
            Generate and organize content, workflows, campaigns, landing
            pages, metadata, GMB updates, and marketing assets through one
            connected workflow.
          </p>

          <p className="text-gray-500 leading-8 text-[15px]">
            Execution becomes faster, structured, and aligned with business
            requirements and creative consistency.
          </p>
        </div>
      </div>

      {/* Governance */}
      <div className="bg-white border border-purple-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">

        <div className="mb-5">
          <span className="text-xs font-bold uppercase tracking-[2px] text-indigo-500">
            Governance
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#1C1635] mb-4 leading-snug">
          Maintain visibility across marketing operations.
        </h3>

        <div className="space-y-4">
          <p className="text-gray-600 leading-8 text-[15px]">
            Track implementation progress, operational visibility,
            performance metrics, and workflow activity from one connected
            layer.
          </p>

          <p className="text-gray-500 leading-8 text-[15px]">
            Businesses gain clearer operational control without switching
            between scattered dashboards and reports.
          </p>
        </div>
      </div>

      {/* Optimization */}
      <div className="bg-white border border-purple-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">

        <div className="mb-5">
          <span className="text-xs font-bold uppercase tracking-[2px] text-emerald-500">
            Optimization
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#1C1635] mb-4 leading-snug">
          Adapt continuously using market intelligence.
        </h3>

        <div className="space-y-4">
          <p className="text-gray-600 leading-8 text-[15px]">
            Marketing 4Sight surfaces live performance trends, competitor
            movement, audience shifts, and emerging opportunities.
          </p>

          <p className="text-gray-500 leading-8 text-[15px]">
            Businesses can refine marketing direction continuously without
            manually gathering disconnected information.
          </p>
        </div>
      </div>
    </div>

    {/* Bottom Outro */}
    <div className="mt-12 text-center max-w-5xl mx-auto">

      <div className="bg-blue-100 border-dashed border border-blue-300 rounded-3xl px-8 py-8 shadow-sm">

        <p className="text-gray-600 text-[15px] md:text-lg leading-8">
          Together, SIGO creates a continuous marketing operating cycle
          where direction, execution, visibility, and improvement remain
          connected — helping businesses move with greater clarity,
          responsiveness, and operational confidence.
        </p>

      </div>
    </div>
  </div>
</section>

        {/* ============ SLIDE 5: INTELLIGENCE LAYER ============ */}
<section 
      className="slide product-fifth-scroll h-screen w-full flex items-center justify-center bg-transparent box-border px-6 pt-20 pb-10 overflow-hidden" 
      id="slide-5"
    >
      <div className="flex flex-col justify-between w-full max-w-7xl h-full max-h-[820px] mx-auto">
        
        {/* Intro Block */}
        <div className="text-center max-w-4xl mx-auto flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900">
            The Intelligence Layer Behind Marketing 4Sight.
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Marketing 4Sight is supported by AI-assisted systems, connected intelligence layers, and data-driven decision-making mechanisms that continuously strengthen how the platform analyzes, adapts, and supports marketing operations across the workflow.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
          
          {/* AI Intelligence */}
          <div className="flex flex-col items-center text-center bg-white/60 backdrop-blur-sm border border-lavender-200/70 rounded-[24px] p-8 transition-all hover:shadow-sm">
            <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-5 shadow-md">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" />
                <path d="M19 17v4" />
                <path d="M3 5h4" />
                <path d="M17 19h4" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">AI-Assisted Intelligence</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Intelligent recommendations, contextual insights, and structured support across planning, execution, and operational workflows.
            </p>
          </div>

          {/* Connected Intelligence */}
          <div className="flex flex-col items-center text-center bg-white/60 backdrop-blur-sm border border-lavender-200/70 rounded-[24px] p-8 transition-all hover:shadow-sm">
            <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-5 shadow-md">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Z" />
                <path d="M6 21a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3v12a3 3 0 0 0 3 3Z" />
                <path d="M15 6h2" />
                <path d="M9 18h2" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Connected Intelligence Layer</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Marketing activities, performance signals, business inputs, and operational visibility continuously connected within one environment.
            </p>
          </div>

          {/* D3M */}
          <div className="flex flex-col items-center text-center bg-white/60 backdrop-blur-sm border border-lavender-200/70 rounded-[24px] p-8 transition-all hover:shadow-sm">
            <div className="w-14 h-14 bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-5 shadow-md">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" />
                <path d="M18 17V9" />
                <path d="M13 17V5" />
                <path d="M8 17v-3" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Data-Driven Decision Making (D3M)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Decisions supported by live performance visibility, market movement, competitor tracking, and evolving operational signals.
            </p>
          </div>

        </div>

        {/* Combined Outro Box & Button Block */}
        <div className="text-center max-w-5xl mx-auto w-full flex flex-col items-center gap-6">
          
          {/* Dashed Border Text Box */}
          <div className="px-10 py-6 border border-dashed border-purple-300 rounded-[24px] bg-purple-50/10 w-full">
            <p className="text-base text-slate-700 font-normal leading-relaxed">
              Together, these layers help Marketing 4Sight remain continuously informed, adaptive, and operationally responsive as marketing environments evolve.
            </p>
          </div>
          
          {/* Gradient Button */}
          <button 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium text-base px-8 py-3.5 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 shadow-md shadow-purple-500/10 active:translate-y-0"
            onClick={() => scrollToSlide(7)}
          >
            Book a demo
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
          
        </div>

      </div>
    </section>

        {/* ============ SLIDE 6: PLATFORM WALKTHROUGH ============ */}
      <section 
      className="slide product-video-scroll h-screen w-full flex items-center justify-center bg-transparent box-border px-6 py-12 overflow-hidden" 
      id="slide-6"
    >
      <div className="flex flex-col items-center justify-between w-full max-w-6xl h-full max-h-[800px] mx-auto text-center">
        
        {/* Colorful Headline Block */}
        <div className="flex flex-col gap-2 mb-5">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            See Marketing 4Sight in{' '}
            <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 bg-clip-text text-transparent">
              Action.
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore how business inputs transform into structured marketing direction, connected workflows, and continuous optimization inside the platform.
          </p>
        </div>

        {/* Scaled-Down Video Player Area */}
        <div className="relative w-full max-w-3xl mx-auto group">
          
          {/* Floating Badges */}
          <div className="absolute -top-4 left-6 z-10 flex gap-2">
            <span className="bg-white/90 backdrop-blur-md border border-purple-100 text-purple-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
              Platform Walkthrough
            </span>
            <span className="bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm">
              4:20 • HD
            </span>
          </div>

          {/* Video Frame */}
          <div className="relative aspect-video rounded-[32px] overflow-hidden border-[6px] border-white shadow-2xl shadow-purple-500/10 bg-slate-100">
            <img 
              src={marketingDashboard} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Video Preview" 
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-all flex items-center justify-center cursor-pointer">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white text-purple-600 rounded-full flex items-center justify-center shadow-xl transform transition-transform group-hover:scale-110 active:scale-95">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Decorative Glow behind the player */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 blur-2xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* CTA Button */}
        <div className="w-full">
          <button 
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-purple-500/20 active:translate-y-0"
            onClick={() => scrollToSlide(7)}
          >
            Book a demo
            <svg 
              className="w-5 h-5 transition-transform group-hover:translate-x-1" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>

      </div>
    </section>
        {/* ============ SLIDE 7: FAQS ============ */}
       <section 
      className="slide product-faq-scroll min-h-screen w-full flex items-center justify-center bg-transparent box-border px-6 py-20 overflow-y-auto" 
      id="slide-7"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col gap-10">
        
        {/* Intro Block: Styled to match the premium theme */}
        <div className="text-center max-w-3xl mx-auto flex flex-col gap-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Quick answers to help you understand how Marketing 4Sight works, adapts, and fits into different marketing workflows.
          </p>
        </div>

        {/* FAQ Container Accordion Grid */}
        <div className="flex flex-col gap-4 w-full">
          
          {/* Q1 */}
          <div className={`border rounded-2xl transition-all duration-200 overflow-hidden ${openFaq === 0 ? 'bg-white border-purple-200 shadow-sm shadow-purple-500/5' : 'bg-white/60 backdrop-blur-sm border-slate-200/80 hover:bg-white'}`}>
            <div 
              className="flex items-center justify-between p-5 cursor-pointer select-none gap-4"
              onClick={() => setOpenFaq(openFaq === 0 ? -1 : 0)}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl transition-colors ${openFaq === 0 ? 'bg-purple-100 text-purple-600' : 'bg-slate-100 text-slate-500'}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="font-semibold text-slate-800 text-base md:text-lg">How long does onboarding take?</div>
              </div>
              <svg className={`text-slate-400 transition-transform duration-200 ${openFaq === 0 ? 'rotate-180 text-purple-500' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
            </div>
            <div className={`transition-all duration-200 ease-in-out ${openFaq === 0 ? 'max-h-40 opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              <div className="p-5 text-sm md:text-base text-slate-600 leading-relaxed bg-slate-50/50">
                The onboarding process is designed to be structured yet lightweight. Businesses can quickly provide their core inputs, after which the platform begins organizing strategy, workflows, priorities, and operational direction based on the provided context.
              </div>
            </div>
          </div>

          {/* Q2 */}
          <div className={`border rounded-2xl transition-all duration-200 overflow-hidden ${openFaq === 1 ? 'bg-white border-purple-200 shadow-sm shadow-purple-500/5' : 'bg-white/60 backdrop-blur-sm border-slate-200/80 hover:bg-white'}`}>
            <div 
              className="flex items-center justify-between p-5 cursor-pointer select-none gap-4"
              onClick={() => setOpenFaq(openFaq === 1 ? -1 : 1)}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl transition-colors ${openFaq === 1 ? 'bg-purple-100 text-purple-600' : 'bg-slate-100 text-slate-500'}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </div>
                <div className="font-semibold text-slate-800 text-base md:text-lg">Do all modules need to be used together?</div>
              </div>
              <svg className={`text-slate-400 transition-transform duration-200 ${openFaq === 1 ? 'rotate-180 text-purple-500' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
            </div>
            <div className={`transition-all duration-200 ease-in-out ${openFaq === 1 ? 'max-h-40 opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              <div className="p-5 text-sm md:text-base text-slate-600 leading-relaxed bg-slate-50/50">
                No. Businesses can use specific modules based on their current marketing requirements. However, the platform delivers stronger visibility and continuity when modules operate together within the connected system.
              </div>
            </div>
          </div>

          {/* Q3 */}
          <div className={`border rounded-2xl transition-all duration-200 overflow-hidden ${openFaq === 2 ? 'bg-white border-purple-200 shadow-sm shadow-purple-500/5' : 'bg-white/60 backdrop-blur-sm border-slate-200/80 hover:bg-white'}`}>
            <div 
              className="flex items-center justify-between p-5 cursor-pointer select-none gap-4"
              onClick={() => setOpenFaq(openFaq === 2 ? -1 : 2)}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl transition-colors ${openFaq === 2 ? 'bg-purple-100 text-purple-600' : 'bg-slate-100 text-slate-500'}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="font-semibold text-slate-800 text-base md:text-lg">Can agencies manage multiple brands?</div>
              </div>
              <svg className={`text-slate-400 transition-transform duration-200 ${openFaq === 2 ? 'rotate-180 text-purple-500' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
            </div>
            <div className={`transition-all duration-200 ease-in-out ${openFaq === 2 ? 'max-h-40 opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              <div className="p-5 text-sm md:text-base text-slate-600 leading-relaxed bg-slate-50/50">
                Yes. Marketing 4Sight is designed to support multi-brand workflows, making it easier for agencies to manage strategy, execution, visibility, and reporting across multiple client accounts within a single environment.
              </div>
            </div>
          </div>

          {/* Q4 */}
          <div className={`border rounded-2xl transition-all duration-200 overflow-hidden ${openFaq === 3 ? 'bg-white border-purple-200 shadow-sm shadow-purple-500/5' : 'bg-white/60 backdrop-blur-sm border-slate-200/80 hover:bg-white'}`}>
            <div 
              className="flex items-center justify-between p-5 cursor-pointer select-none gap-4"
              onClick={() => setOpenFaq(openFaq === 3 ? -1 : 3)}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl transition-colors ${openFaq === 3 ? 'bg-purple-100 text-purple-600' : 'bg-slate-100 text-slate-500'}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <div className="font-semibold text-slate-800 text-base md:text-lg">Do I need to be a marketing expert?</div>
              </div>
              <svg className={`text-slate-400 transition-transform duration-200 ${openFaq === 3 ? 'rotate-180 text-purple-500' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
            </div>
            <div className={`transition-all duration-200 ease-in-out ${openFaq === 3 ? 'max-h-40 opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              <div className="p-5 text-sm md:text-base text-slate-600 leading-relaxed bg-slate-50/50">
                No. The platform is designed to simplify marketing operations through structured workflows, guided direction, connected visibility, and organized execution, making it accessible for both experienced teams and growing businesses.
              </div>
            </div>
          </div>

          {/* Q5 */}
          <div className={`border rounded-2xl transition-all duration-200 overflow-hidden ${openFaq === 4 ? 'bg-white border-purple-200 shadow-sm shadow-purple-500/5' : 'bg-white/60 backdrop-blur-sm border-slate-200/80 hover:bg-white'}`}>
            <div 
              className="flex items-center justify-between p-5 cursor-pointer select-none gap-4"
              onClick={() => setOpenFaq(openFaq === 4 ? -1 : 4)}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl transition-colors ${openFaq === 4 ? 'bg-purple-100 text-purple-600' : 'bg-slate-100 text-slate-500'}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M20 7h-9" />
                    <path d="M14 17H5" />
                    <circle cx="17" cy="17" r="3" />
                    <circle cx="7" cy="7" r="3" />
                  </svg>
                </div>
                <div className="font-semibold text-slate-800 text-base md:text-lg">Does the platform adapt based on business type?</div>
              </div>
              <svg className={`text-slate-400 transition-transform duration-200 ${openFaq === 4 ? 'rotate-180 text-purple-500' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
            </div>
            <div className={`transition-all duration-200 ease-in-out ${openFaq === 4 ? 'max-h-40 opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              <div className="p-5 text-sm md:text-base text-slate-600 leading-relaxed bg-slate-50/50">
                Yes. Marketing 4Sight uses business context, operational inputs, market conditions, and marketing objectives to structure workflows, priorities, recommendations, and visibility differently for different business requirements.
              </div>
            </div>
          </div>

          {/* Q6 */}
          <div className={`border rounded-2xl transition-all duration-200 overflow-hidden ${openFaq === 5 ? 'bg-white border-purple-200 shadow-sm shadow-purple-500/5' : 'bg-white/60 backdrop-blur-sm border-slate-200/80 hover:bg-white'}`}>
            <div 
              className="flex items-center justify-between p-5 cursor-pointer select-none gap-4"
              onClick={() => setOpenFaq(openFaq === 5 ? -1 : 5)}
            >
              <div className="flex items-center gap-4">
                <div className={`p-2.5 rounded-xl transition-colors ${openFaq === 5 ? 'bg-purple-100 text-purple-600' : 'bg-slate-100 text-slate-500'}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <div className="font-semibold text-slate-800 text-base md:text-lg">How does optimization happen inside the platform?</div>
              </div>
              <svg className={`text-slate-400 transition-transform duration-200 ${openFaq === 5 ? 'rotate-180 text-purple-500' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
            </div>
            <div className={`transition-all duration-200 ease-in-out ${openFaq === 5 ? 'max-h-40 opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
              <div className="p-5 text-sm md:text-base text-slate-600 leading-relaxed bg-slate-50/50">
                The platform continuously evaluates performance signals, visibility trends, competitor movement, audience behavior, and operational activity to identify where refinement, prioritization, or strategic adjustments may be needed over time.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
        {/* ============ SLIDE 8: CTA ============ */}
<section 
      className="slide section h-screen w-full flex items-center justify-center bg-transparent relative overflow-hidden px-6 md:px-12 lg:px-20" 
      id="slide-8"
    >
      {/* Decorative Grid Overlay & Abstract Purple Radial Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none -z-10" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Main Structural split layout */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
        
        {/* LEFT PANEL: Massive Content Typography Focus */}
        <div className="lg:col-span-7 text-left flex flex-col gap-5">
          <div className="inline-flex items-center gap-2 bg-purple-50/80 border border-purple-100 px-3 py-1 rounded-full text-xs font-semibold text-purple-700 w-fit backdrop-blur-sm">
            ✦ Next-Gen Marketing Operations
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] max-w-2xl">
            Bring Structure to How Your <br />
            <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-600 bg-clip-text text-transparent">
              Marketing Operates.
            </span>
          </h2>
          <p className="text-slate-600 text-base md:text-lg max-w-xl leading-relaxed">
            Eliminate operational friction. Align strategy, execution metrics, and continuous optimization pipelines together inside a single framework.
          </p>
        </div>

        {/* RIGHT PANEL: Sleek Floating Interactive "Bento Container" */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <div className="relative w-full max-w-sm p-8 rounded-[32px] bg-white/60 backdrop-blur-md border border-purple-100 shadow-2xl shadow-purple-900/5 flex flex-col items-center text-center gap-6 group">
            
            {/* Minimal Platform Graphic Detail */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20 transform group-hover:scale-105 transition-transform duration-300">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>

            <div className="flex flex-col gap-1">
              <h4 className="text-lg font-bold text-slate-900">Ready to explore?</h4>
              <p className="text-xs text-slate-500 px-4">
                See how teams move with clarity and act with absolute data precision.
              </p>
            </div>

            {/* Premium Button */}
            <button 
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 shadow-md shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-0.5 active:translate-y-0"
              onClick={() => scrollToSlide(7)}
            >
              <span>Book a live demo</span>
              <svg 
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            
          </div>
        </div>

      </div>
    </section>

        <Footer />
      </div>
    </div>
  );
}
