import { useState, useEffect, useRef } from 'react';
import Footer from './Footer';

// Asset Imports
import marketingDashboard from '../assets/marketing-dashboard.jpeg';
import strategyDashboard from '../assets/strategy-dashboard.png';
import implementationDashboard from '../assets/implementation-dashboard.png';
import governanceDashboard from '../assets/governance-dashboard.png';
import optimizationDashboard from '../assets/optimization-dashboard.png';

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

            <div className="first-pillars" aria-label="Marketing 4Sight product principles">
              <div className="first-pillar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                </svg>
                Data-driven direction
              </div>
              <div className="first-pillar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M3 9h18" />
                  <path d="M9 21V9" />
                </svg>
                Structured execution
              </div>
              <div className="first-pillar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4" />
                  <path d="m16.2 7.8 2.9-2.9" />
                  <path d="M18 12h4" />
                  <path d="m16.2 16.2 2.9 2.9" />
                  <path d="M12 18v4" />
                  <path d="m4.9 19.1 2.9-2.9" />
                  <path d="M2 12h4" />
                  <path d="m4.9 4.9 2.9 2.9" />
                </svg>
                Continuous optimization
              </div>
              <div className="first-pillar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
                Connected analytics
              </div>
            </div>

            <button className="btn-cta first-scroll-cta" onClick={() => scrollToSlide(7)}>
              Book a demo
              <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
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
                <div className="module-visual p-4">
                  <div className="w-full h-full bg-[#fcfbfe] rounded-xl p-4 flex flex-col justify-between font-sans border border-purple-100">
                    <strong className="text-xs text-purple-955 font-bold block mb-1">Rank Universe Watch</strong>
                    <div className="flex-1 flex flex-col gap-2 justify-center">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-mono text-gray-500">"digital marketing OS"</span>
                        <span className="text-emerald-500 font-bold">#1 (GSC Verified)</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-mono text-gray-500">"structured marketing platform"</span>
                        <span className="text-purple-600 font-bold">#3 (▲ 5 positions)</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-mono text-gray-500">"data driven marketing framework"</span>
                        <span className="text-emerald-500 font-bold">#2 (▲ 1 position)</span>
                      </div>
                    </div>
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
                <div className="module-visual p-4">
                  <div className="w-full h-full bg-white rounded-xl p-4 flex flex-col justify-between font-sans border border-purple-100">
                    <div className="flex gap-2.5 items-start">
                      <div className="w-6 h-6 rounded bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-xs shrink-0">📍</div>
                      <div>
                        <strong className="text-xs text-gray-900 block">Hazra Local GMB Hub</strong>
                        <span className="text-[10px] text-gray-500">Kolkata, WB - Connected</span>
                      </div>
                    </div>
                    <div className="bg-emerald-50 text-emerald-800 text-[10px] p-2 rounded border border-emerald-100">
                      <strong>Audit Complete:</strong> NAP verified across 22 citation sites, location hours corrected.
                    </div>
                  </div>
                </div>
              </div>

              {/* Module 4: Content Manager */}
              <div className="module-card">
                <div className="module-info">
                  <span className="module-tag">Module 4</span>
                  <h3>Content Manager</h3>
                  <p>Plan, create, organize, and manage content across websites, blogs, and social platforms from one connected workflow.<br /><br />The Content Manager helps structure content around themes, campaigns, business priorities, and audience intent while keeping execution aligned across platforms like Instagram, Facebook, LinkedIn, X, and YouTube.</p>
                  <button className="btn-solid" onClick={() => scrollToSlide(7)}>Book a demo</button>
                </div>
                <div className="module-visual p-4">
                  <div className="w-full h-full bg-[#fbfbfd] rounded-xl p-4 flex flex-col justify-between font-sans border border-purple-100">
                    <strong className="text-xs text-purple-900 block">Content Calendar Draft</strong>
                    <div className="flex-1 flex flex-col gap-2 justify-center my-2">
                      <div className="bg-white p-2 rounded border border-gray-100 flex items-center justify-between text-xs">
                        <span>How SIGO builds search share</span>
                        <span className="text-[9px] bg-purple-100 text-purple-700 font-bold px-1.5 py-0.5 rounded">MON 10:00</span>
                      </div>
                      <div className="bg-white p-2 rounded border border-gray-100 flex items-center justify-between text-xs">
                        <span>GMB checklist for local reach</span>
                        <span className="text-[9px] bg-pink-100 text-pink-700 font-bold px-1.5 py-0.5 rounded">WED 14:00</span>
                      </div>
                    </div>
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
              <div className="module-card">
                <div className="module-info">
                  <span className="module-tag">Module 7</span>
                  <h3>Website Builder</h3>
                  <p>Generate a structured website foundation using your business inputs, brand context, and marketing requirements — without technical dependency or complex setup processes.<br /><br />The Website Builder helps businesses create a clean, ready-to-deploy digital presence with page structure, content drafts, and design templates.</p>
                  <button className="btn-solid" onClick={() => scrollToSlide(7)}>Book a demo</button>
                </div>
                <div className="module-visual p-3">
                  <div className="w-full h-full bg-white rounded-xl p-3 flex flex-col justify-between font-sans border border-purple-100">
                    <div className="flex justify-between items-center pb-1 border-b border-gray-100">
                      <span className="text-[8px] text-gray-400">TEMPLATE: SLIDE_SHOWCASE</span>
                      <span className="bg-emerald-100 text-emerald-700 text-[8px] px-1 rounded font-bold uppercase">DEPLOYED</span>
                    </div>
                    <div className="flex-grow flex flex-col justify-center text-center my-1">
                      <span className="text-[14px] font-black text-purple-800">4Sight Web Engine</span>
                      <span className="text-[8px] text-gray-500">Pre-rendered static HTML/CSS ready</span>
                    </div>
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
        <section className="slide product-fourth-scroll" id="slide-4">
          <div className="container">
            <div className="third-intro">
              <h2 className="third-title">The SIGO Framework Behind Marketing 4Sight.</h2>
              <div className="second-body" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                <p>Marketing 4Sight is built around the SIGO framework, a structured marketing operating model that connects strategy, implementation, governance, and optimization into one continuous system.</p>
                <p>Instead of spending time across disconnected tools, reports, and manual workflows, SIGO helps businesses understand where they stand, what needs to be done, how execution is progressing, and what should change next, all within one connected environment.</p>
              </div>
            </div>

            <div className="sigo-grid">
              {/* Strategy */}
              <div className="sigo-block">
                <h3>Strategy</h3>
                <h4>Build direction with clarity, not assumptions.</h4>
                <p>Marketing 4Sight analyzes your business context, market landscape, competitors, search behavior, existing visibility, and operational goals to establish a clear strategic foundation. The platform helps identify where the brand currently stands, what opportunities exist, what goals are realistically achievable, and what actions should be prioritized to move toward them.</p>
                <p>Instead of fragmented planning and constant brainstorming, businesses receive structured direction supported by market and performance intelligence.</p>
              </div>
              {/* Implementation */}
              <div className="sigo-block">
                <h3>Implementation</h3>
                <h4>Turn strategy into execution without operational friction.</h4>
                <p>Marketing 4Sight helps generate and organize the assets, activities, and workflows required to execute the defined direction across marketing channels. From website content, blogs, FAQs, metadata, and landing pages to social media posts, captions, creatives, videos, GMB updates, and campaign content, execution becomes faster, structured, and aligned with business requirements and creative guidelines.</p>
                <p>This reduces dependency on scattered production workflows while maintaining consistency across ongoing marketing activity.</p>
              </div>
              {/* Governance */}
              <div className="sigo-block">
                <h3>Governance</h3>
                <h4>Maintain complete visibility across marketing operations.</h4>
                <p>Marketing 4Sight brings together performance visibility, activity tracking, implementation progress, and operational monitoring into one connected layer. Instead of switching between analytics platforms, dashboards, spreadsheets, and reports, businesses can understand how activities are progressing, where gaps exist, what requires attention, and how closely marketing efforts are aligned to defined goals.</p>
                <p>This creates clearer operational control and more informed decision-making across the marketing workflow.</p>
              </div>
              {/* Optimization */}
              <div className="sigo-block">
                <h3>Optimization</h3>
                <h4>Continuously adapt using live market and performance intelligence.</h4>
                <p>Marketing environments constantly evolve, competitors shift, trends change, audience behavior moves, and new opportunities emerge. Marketing 4Sight continuously surfaces these changes through connected insights, performance analysis, trend visibility, competitor movement, and market signals.</p>
                <p>This helps businesses identify what needs refinement, where momentum is changing, and how marketing direction should evolve without spending significant time manually gathering and analyzing disconnected information.</p>
              </div>
            </div>

            <div className="sigo-outro">
              <p>Together, SIGO creates a continuous marketing operating cycle where direction, execution, visibility, and improvement remain connected, helping businesses move with greater clarity, responsiveness, and operational confidence.</p>
            </div>
          </div>
        </section>

        {/* ============ SLIDE 5: INTELLIGENCE LAYER ============ */}
        <section className="slide product-fifth-scroll" id="slide-5">
          <div className="container">
            <div className="third-intro">
              <h2 className="third-title">The Intelligence Layer Behind Marketing 4Sight.</h2>
              <p className="third-lede" style={{ maxWidth: '850px', margin: '0 auto' }}>
                Marketing 4Sight is supported by AI-assisted systems, connected intelligence layers, and data-driven decision-making mechanisms that continuously strengthen how the platform analyzes, adapts, and supports marketing operations across the workflow.
              </p>
            </div>

            <div className="intel-grid">
              {/* AI Intelligence */}
              <div className="intel-card">
                <div className="intel-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M19 17v4" />
                    <path d="M3 5h4" />
                    <path d="M17 19h4" />
                  </svg>
                </div>
                <h3>AI-Assisted Intelligence</h3>
                <p>Intelligent recommendations, contextual insights, and structured support across planning, execution, and operational workflows.</p>
              </div>

              {/* Connected Intelligence */}
              <div className="intel-card">
                <div className="intel-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Z" />
                    <path d="M6 21a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3v12a3 3 0 0 0 3 3Z" />
                    <path d="M15 6h2" />
                    <path d="M9 18h2" />
                  </svg>
                </div>
                <h3>Connected Intelligence Layer</h3>
                <p>Marketing activities, performance signals, business inputs, and operational visibility continuously connected within one environment.</p>
              </div>

              {/* D3M */}
              <div className="intel-card">
                <div className="intel-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v18h18" />
                    <path d="M18 17V9" />
                    <path d="M13 17V5" />
                    <path d="M8 17v-3" />
                  </svg>
                </div>
                <h3>Data-Driven Decision Making (D3M)</h3>
                <p>Decisions supported by live performance visibility, market movement, competitor tracking, and evolving operational signals.</p>
              </div>
            </div>

            <div className="third-outro">
              <p>Together, these layers help Marketing 4Sight remain continuously informed, adaptive, and operationally responsive as marketing environments evolve.</p>
              <div className="second-cta-wrap" style={{ marginTop: '32px' }}>
                <button className="btn-cta" style={{ margin: '0 auto' }} onClick={() => scrollToSlide(7)}>
                  Book a demo
                  <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SLIDE 6: PLATFORM WALKTHROUGH ============ */}
        <section className="slide product-video-scroll" id="slide-6">
          <div className="container">
            <div className="third-intro">
              <h2 className="third-title">See Marketing 4Sight in Action.</h2>
              <p className="third-lede">Explore how business inputs transform into structured marketing direction, connected workflows, visibility, and continuous optimization inside the platform.</p>
            </div>

            <div className="video-container">
              <div className="video-badge v-badge-1">Platform Walkthrough</div>
              <div className="video-badge v-badge-2">4:20 &bull; HD</div>
              <div className="video-frame">
                <img src={marketingDashboard} className="video-poster" alt="Video Preview" />
                <div className="video-overlay">
                  <div className="play-btn">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="second-cta-wrap" style={{ textAlign: 'center', marginTop: '48px' }}>
              <button className="btn-cta" style={{ margin: '0 auto' }} onClick={() => scrollToSlide(7)}>
                Book a demo
                <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* ============ SLIDE 7: FAQS ============ */}
        <section className="slide product-faq-scroll" id="slide-7">
          <div className="container">
            <div className="third-intro">
              <h2 className="third-title">Frequently Asked Questions</h2>
              <p className="third-lede">Quick answers to help you understand how Marketing 4Sight works, adapts, and fits into different marketing workflows.</p>
            </div>

            <div className="faq-container">
              {/* Q1 */}
              <div className={`faq-item ${openFaq === 0 ? 'active' : ''}`}>
                <div className="faq-header" onClick={() => setOpenFaq(openFaq === 0 ? -1 : 0)}>
                  <div className="faq-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="faq-q">How long does onboarding take?</div>
                  <svg className="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
                <div className="faq-body">
                  <div className="faq-a">The onboarding process is designed to be structured yet lightweight. Businesses can quickly provide their core inputs, after which the platform begins organizing strategy, workflows, priorities, and operational direction based on the provided context.</div>
                </div>
              </div>

              {/* Q2 */}
              <div className={`faq-item ${openFaq === 1 ? 'active' : ''}`}>
                <div className="faq-header" onClick={() => setOpenFaq(openFaq === 1 ? -1 : 1)}>
                  <div className="faq-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                    </svg>
                  </div>
                  <div className="faq-q">Do all modules need to be used together?</div>
                  <svg className="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
                <div className="faq-body">
                  <div className="faq-a">No. Businesses can use specific modules based on their current marketing requirements. However, the platform delivers stronger visibility and continuity when modules operate together within the connected system.</div>
                </div>
              </div>

              {/* Q3 */}
              <div className={`faq-item ${openFaq === 2 ? 'active' : ''}`}>
                <div className="faq-header" onClick={() => setOpenFaq(openFaq === 2 ? -1 : 2)}>
                  <div className="faq-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <div className="faq-q">Can agencies manage multiple brands?</div>
                  <svg className="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
                <div className="faq-body">
                  <div className="faq-a">Yes. Marketing 4Sight is designed to support multi-brand workflows, making it easier for agencies to manage strategy, execution, visibility, and reporting across multiple client accounts within a single environment.</div>
                </div>
              </div>

              {/* Q4 */}
              <div className={`faq-item ${openFaq === 3 ? 'active' : ''}`}>
                <div className="faq-header" onClick={() => setOpenFaq(openFaq === 3 ? -1 : 3)}>
                  <div className="faq-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <div className="faq-q">Do I need to be a marketing expert to use Marketing 4Sight?</div>
                  <svg className="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
                <div className="faq-body">
                  <div className="faq-a">No. The platform is designed to simplify marketing operations through structured workflows, guided direction, connected visibility, and organized execution, making it accessible for both experienced teams and growing businesses.</div>
                </div>
              </div>

              {/* Q5 */}
              <div className={`faq-item ${openFaq === 4 ? 'active' : ''}`}>
                <div className="faq-header" onClick={() => setOpenFaq(openFaq === 4 ? -1 : 4)}>
                  <div className="faq-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <path d="M20 7h-9" />
                      <path d="M14 17H5" />
                      <circle cx="17" cy="17" r="3" />
                      <circle cx="7" cy="7" r="3" />
                    </svg>
                  </div>
                  <div className="faq-q">Does the platform adapt based on business type?</div>
                  <svg className="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
                <div className="faq-body">
                  <div className="faq-a">Yes. Marketing 4Sight uses business context, operational inputs, market conditions, and marketing objectives to structure workflows, priorities, recommendations, and visibility differently for different business requirements.</div>
                </div>
              </div>

              {/* Q6 */}
              <div className={`faq-item ${openFaq === 5 ? 'active' : ''}`}>
                <div className="faq-header" onClick={() => setOpenFaq(openFaq === 5 ? -1 : 5)}>
                  <div className="faq-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  </div>
                  <div className="faq-q">How does optimization happen inside the platform?</div>
                  <svg className="faq-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
                <div className="faq-body">
                  <div className="faq-a">The platform continuously evaluates performance signals, visibility trends, competitor movement, audience behavior, and operational activity to identify where refinement, prioritization, or strategic adjustments may be needed over time.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SLIDE 8: CTA ============ */}
        <section className="slide section" id="slide-8">
          <div className="container narrow" style={{ textAlign: 'center' }}>
            <h2 className="section-title">Bring Structure to How Your Marketing Operates.</h2>
            <div className="second-cta-wrap" style={{ marginTop: '32px' }}>
              <button className="btn-cta" style={{ margin: '0 auto' }} onClick={() => scrollToSlide(7)}>
                Book a demo
                <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
