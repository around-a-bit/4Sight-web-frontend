import { useState, useEffect, useRef } from 'react';
import Footer from './Footer';

export default function About() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeEcosystem, setActiveEcosystem] = useState('platforms');

  const deckRef = useRef(null);

  const slideLabels = [
    '01 Story',
    '02 Quantyra',
    '03 Why 4Sight',
    '04 Differences',
    '05 Demo',
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

  const ecosystemDetails = {
    consulting: {
      title: 'Consulting Engine',
      desc: 'Deep structural consulting to align organizational goals, target audiences, and operational processes before launching any software.'
    },
    services: {
      title: 'Services Group',
      desc: 'Expert execution services providing dedicated support in technical SEO execution, GMB verification audits, media booking, and direct funnel building.'
    },
    academics: {
      title: 'Academics & Research',
      desc: 'Ongoing research and education on data systems, behavioral science, and structured management models to guide future platform iterations.'
    },
    platforms: {
      title: 'Platforms (Marketing 4Sight)',
      desc: 'Quantyra\'s flagship marketing OS. A software ecosystem designed to automate and enforce clean strategy-to-execution pipelines for modern marketing operations.'
    }
  };

  return (
    <div>
      {/* Slide Navigation Dots */}
      <div className="dots" role="tablist" aria-label="About slide navigation">
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
      <div className="about-deck" id="aboutDeck" ref={deckRef} onScroll={handleScroll}>

        {/* ============ SLIDE 1 ============ */}
        <section className={`about-slide ${activeSlide === 0 ? 'active' : ''}`} id="about-slide-1">
          <div className="about-inner center-copy">
            <h1 className="about-title">We're Bringing Structure to <span>#ModernMarketing.</span></h1>
            <p className="about-copy">A structured marketing platform built to bring <strong>clarity</strong> to how marketing is planned, executed, and improved.</p>
            <p className="about-copy">Built as part of Quantyra's AI and data-driven ecosystem, Marketing 4Sight connects <strong>direction, execution, and outcomes</strong> into a single, continuous system.</p>
            <p className="about-copy">As marketing has become more complex, the need for structure has become critical. Marketing 4Sight ensures that activities remain aligned, visible, and measurable across the entire workflow.</p>
          </div>
          <span className="section-number">01 / OUR STORY</span>
          <a className="scroll-cue" onClick={() => scrollToSlide(1)}>Scroll</a>
        </section>

        {/* ============ SLIDE 2 ============ */}
        <section className={`about-slide ${activeSlide === 1 ? 'active' : ''}`} id="about-slide-2">
          <div className="about-inner quantyra-grid">
            <div className="center-copy">
              <h2 className="about-heading">Quantyra<br />- The <em>Thinking</em> Behind the Platform</h2>
              <p className="about-subtitle">Built within a larger ecosystem of structured intelligence.</p>
              <p className="about-copy">Quantyra is an AI and data-driven organization with offerings across Consulting, Services, Academics, and Platforms.</p>
              <p className="about-copy">The organization is built on a simple belief: as business environments become more complex, decisions need stronger systems, clearer inputs, and better visibility.</p>
              
              {/* Dynamic Interactive Detail Block */}
              <div className="bg-white/80 backdrop-blur border border-purple-100 p-4 rounded-xl max-w-xl mx-auto my-6 text-left shadow-sm">
                <span className="text-[10px] text-purple-600 uppercase font-black tracking-wider block mb-1">Ecosystem Focus: {activeEcosystem}</span>
                <strong className="text-base text-purple-900 block mb-1.5">{ecosystemDetails[activeEcosystem].title}</strong>
                <p className="text-xs text-gray-600 leading-relaxed m-0">{ecosystemDetails[activeEcosystem].desc}</p>
              </div>
            </div>

            <div className="ecosystem" aria-label="Quantyra ecosystem">
              <button
                className={`ecosystem-item ${activeEcosystem === 'consulting' ? 'active' : ''}`}
                onClick={() => setActiveEcosystem('consulting')}
                type="button"
              >
                Consulting
              </button>
              <button
                className={`ecosystem-item ${activeEcosystem === 'services' ? 'active' : ''}`}
                onClick={() => setActiveEcosystem('services')}
                type="button"
              >
                Services
              </button>
              <button
                className={`ecosystem-item ${activeEcosystem === 'academics' ? 'active' : ''}`}
                onClick={() => setActiveEcosystem('academics')}
                type="button"
              >
                Academics
              </button>
              <button
                className={`ecosystem-item ${activeEcosystem === 'platforms' ? 'active' : ''}`}
                onClick={() => setActiveEcosystem('platforms')}
                type="button"
              >
                Platforms
              </button>
            </div>
          </div>
          <span className="section-number">02 / QUANTYRA</span>
          <a className="scroll-cue" onClick={() => scrollToSlide(2)}>Scroll</a>
        </section>

        {/* ============ SLIDE 3 ============ */}
        <section className={`about-slide ${activeSlide === 2 ? 'active' : ''}`} id="about-slide-3">
          <div className="about-inner exists-grid">
            <div className="exists-copy">
              <h2 className="about-heading">Why Marketing <em>4Sight</em> Exists</h2>
              <p className="about-subtitle">Marketing needs more structure, not more fragmentation.</p>
              <p className="about-copy">Marketing today involves multiple activities, channels, teams, and tools. While execution has become faster, maintaining alignment across all moving parts has become increasingly difficult.</p>
              <p className="about-copy">This often creates gaps between what is planned, what gets executed, and what ultimately drives outcomes.</p>
              <p className="about-copy">Marketing 4Sight is built to address this by creating a connected system - where <strong>strategy</strong> defines direction, <strong>implementation</strong> drives execution, governance ensures consistency, and optimization continuously improves performance.</p>
            </div>
            <div className="flow" aria-label="Marketing 4Sight operating flow">
              <div className="flow-card is-start"><span>Strategy</span></div>
              <div className="flow-card"><span>Implementation</span></div>
              <div className="flow-card"><span>Governance</span></div>
              <div className="flow-card is-end"><span>Optimization</span></div>
            </div>
          </div>
          <span className="section-number">03 / WHY IT EXISTS</span>
          <a className="scroll-cue" onClick={() => scrollToSlide(3)}>Scroll</a>
        </section>

        {/* ============ SLIDE 4 ============ */}
        <section className={`about-slide ${activeSlide === 3 ? 'active' : ''}`} id="about-slide-4">
          <div className="about-inner different-grid">
            <div className="different-copy">
              <h2 className="about-heading">What Makes Marketing <em>4Sight</em> Different</h2>
              <p className="about-copy">Marketing 4Sight is built with a different approach - not as a set of features, but as a <strong>system</strong> that connects how marketing decisions are made, executed, and improved over time.</p>
              <p className="about-copy">This ensures clarity is maintained across the entire workflow, not just at individual stages.</p>
            </div>
            <div className="difference-matrix" aria-label="Marketing 4Sight differentiators">
              <article className="difference-item" data-num="01">
                <h3>Structure-led</h3>
                <p>Organizes marketing into a clear framework instead of disconnected activities.</p>
              </article>
              <article className="difference-item" data-num="02">
                <h3>Continuity-focused</h3>
                <p>Supports an ongoing cycle of planning, execution, visibility, and improvement.</p>
              </article>
              <article className="difference-item" data-num="03">
                <h3>Decision-oriented</h3>
                <p>Helps prioritize what to focus on and how to act based on evolving needs.</p>
              </article>
              <article className="difference-item" data-num="04">
                <h3>Operational visibility</h3>
                <p>Keeps activities and outcomes visible in one place for better control and consistency.</p>
              </article>
            </div>
          </div>
          <span className="section-number">04 / DIFFERENCE</span>
          <a className="scroll-cue" onClick={() => scrollToSlide(4)}>Scroll</a>
        </section>

        {/* ============ SLIDE 5 ============ */}
        <section className={`about-slide ${activeSlide === 4 ? 'active' : ''}`} id="about-slide-5">
          <div className="about-inner cta-panel">
            <h2>See how Marketing <em>4Sight</em> works in practice.</h2>
            <a className="demo-btn" href="#contact">
              <span>Book a demo</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
          <span className="section-number">05 / DEMO</span>
        </section>

        <Footer />
      </div>
    </div>
  );
}
