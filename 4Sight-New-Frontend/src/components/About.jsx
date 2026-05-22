import { useState } from 'react';
import Footer from './Footer';

export default function About() {
  const [activeEcosystem, setActiveEcosystem] = useState('platforms');

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
      desc: "Quantyra's flagship marketing OS. A software ecosystem designed to automate and enforce clean strategy-to-execution pipelines for modern marketing operations."
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-y-auto bg-transparent">

      {/* ============ SECTION 1: OUR STORY ============ */}
      <section className="min-h-[85vh] flex items-center justify-center pt-32 pb-20 px-6 md:px-12 relative">
        <div className="w-full max-w-[820px] mx-auto text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--violet-soft)] text-[var(--violet)] text-[11px] font-bold tracking-[0.2em] uppercase border border-[var(--line)] mb-6">
            Our Story
          </span>
          <h1 className="mb-6 text-[var(--ink)] font-extrabold text-4xl md:text-5xl lg:text-[62px] leading-tight tracking-tight">
            We're Bringing Structure to <span className="bg-gradient-to-r from-[var(--violet)] to-[var(--magenta)] bg-clip-text text-transparent">#ModernMarketing.</span>
          </h1>
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-[var(--ink-dim)] text-sm md:text-base leading-relaxed font-light">
              A structured marketing platform built to bring <strong className="font-bold text-[var(--violet)]">clarity</strong> to how marketing is planned, executed, and improved.
            </p>
            <p className="text-[var(--ink-dim)] text-sm md:text-base leading-relaxed font-light">
              Built as part of Quantyra's AI and data-driven ecosystem, Marketing 4Sight connects <strong className="font-bold text-[var(--violet)]">direction, execution, and outcomes</strong> into a single, continuous system.
            </p>
            <p className="text-[var(--ink-dim)] text-sm md:text-base leading-relaxed font-light">
              As marketing has become more complex, the need for structure has become critical. Marketing 4Sight ensures that activities remain aligned, visible, and measurable across the entire workflow.
            </p>
          </div>
        </div>
      </section>

      {/* ============ SECTION 2: QUANTYRA ============ */}
      <section className="py-20 px-6 md:px-12 relative">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--violet-soft)] text-[var(--violet)] text-[11px] font-bold tracking-[0.2em] uppercase border border-[var(--line)] mb-5">
              Quantyra Ecosystem
            </span>
            <h2 className="mb-4 text-[var(--ink)] font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
              Quantyra<br />— The <em className="not-italic font-extrabold bg-gradient-to-r from-[var(--violet)] to-[var(--magenta)] bg-clip-text text-transparent">Thinking</em> Behind the Platform
            </h2>
            <p className="mb-6 text-[var(--violet)] text-sm font-bold italic">Built within a larger ecosystem of structured intelligence.</p>

            <div className="max-w-2xl mx-auto space-y-3">
              <p className="text-[var(--ink-dim)] text-sm leading-relaxed font-light">Quantyra is an AI and data-driven organization with offerings across Consulting, Services, Academics, and Platforms.</p>
              <p className="text-[var(--ink-dim)] text-sm leading-relaxed font-light">The organization is built on a simple belief: as business environments become more complex, decisions need stronger systems, clearer inputs, and better visibility.</p>
            </div>

            {/* Dynamic Interactive Detail Block */}
            <div className="bg-[var(--paper)] border border-[var(--line)] p-5 rounded-2xl max-w-xl mx-auto mt-8 text-left shadow-sm">
              <span className="text-[10px] text-[var(--violet)] uppercase font-black tracking-wider block mb-2">Ecosystem Focus: {activeEcosystem}</span>
              <strong className="text-base text-[var(--ink)] block mb-2 font-bold">{ecosystemDetails[activeEcosystem].title}</strong>
              <p className="text-xs text-[var(--ink-dim)] leading-relaxed">{ecosystemDetails[activeEcosystem].desc}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[720px] mx-auto">
            {Object.keys(ecosystemDetails).map((key) => (
              <button
                key={key}
                className={`min-h-[76px] grid place-items-center p-4 border rounded-xl text-xs font-semibold transition-all duration-300 hover:-translate-y-1 cursor-pointer ${activeEcosystem === key ? 'border-transparent bg-gradient-to-br from-[var(--violet)] to-[var(--magenta)] text-white shadow-lg shadow-purple-500/30' : 'border-[var(--line)] bg-[var(--paper)] text-[var(--ink-2)] hover:border-[var(--violet-2)] hover:shadow-md'}`}
                onClick={() => setActiveEcosystem(key)}
                type="button"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 3: WHY 4SIGHT EXISTS ============ */}
      <section className="py-20 px-6 md:px-12 relative">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-24 items-center">
          <div className="max-w-[720px]">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--violet-soft)] text-[var(--violet)] text-[11px] font-bold tracking-[0.2em] uppercase border border-[var(--line)] mb-5">
              Our Purpose
            </span>
            <h2 className="mb-4 text-[var(--ink)] font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
              Why Marketing <em className="not-italic font-extrabold bg-gradient-to-r from-[var(--violet)] to-[var(--magenta)] bg-clip-text text-transparent">4Sight</em> Exists
            </h2>
            <p className="mb-5 text-[var(--violet)] text-sm font-bold italic">Marketing needs more structure, not more fragmentation.</p>
            <div className="space-y-3">
              <p className="text-[var(--ink-dim)] text-sm leading-relaxed font-light">Marketing today involves multiple activities, channels, teams, and tools. While execution has become faster, maintaining alignment across all moving parts has become increasingly difficult.</p>
              <p className="text-[var(--ink-dim)] text-sm leading-relaxed font-light">This often creates gaps between what is planned, what gets executed, and what ultimately drives outcomes.</p>
              <p className="text-[var(--ink-dim)] text-sm leading-relaxed font-light">Marketing 4Sight is built to address this by creating a connected system — where <strong className="font-bold text-[var(--violet)]">strategy</strong> defines direction, <strong className="font-bold text-[var(--violet)]">implementation</strong> drives execution, governance ensures consistency, and optimization continuously improves performance.</p>
            </div>
          </div>

          <div className="grid gap-5 justify-items-center relative">
            {/* Connection Line */}
            <div className="absolute top-[43px] bottom-[43px] left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[var(--violet-soft)] to-[var(--magenta-soft)] -z-10"></div>

            {['Strategy', 'Implementation', 'Governance', 'Optimization'].map((step, i) => (
              <div key={step} className={`w-[270px] min-h-[86px] grid place-items-center border rounded-2xl text-base font-bold shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${i === 0 || i === 3 ? 'bg-gradient-to-br from-white to-[var(--violet-soft)] text-[var(--violet)] border-[var(--violet-2)]/30' : 'bg-[var(--paper)] text-[var(--ink)] border-[var(--line)]'}`}>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 4: WHAT MAKES IT DIFFERENT ============ */}
      <section className="py-20 px-6 md:px-12 relative">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-[520px]">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[var(--violet-soft)] text-[var(--violet)] text-[11px] font-bold tracking-[0.2em] uppercase border border-[var(--line)] mb-5">
              Our Approach
            </span>
            <h2 className="mb-6 text-[var(--ink)] font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight">
              What Makes Marketing <em className="not-italic font-extrabold bg-gradient-to-r from-[var(--violet)] to-[var(--magenta)] bg-clip-text text-transparent">4Sight</em> Different
            </h2>
            <p className="mb-3 text-[var(--ink-dim)] text-sm leading-relaxed font-light">Marketing 4Sight is built with a different approach — not as a set of features, but as a <strong className="font-bold text-[var(--violet)]">system</strong> that connects how marketing decisions are made, executed, and improved over time.</p>
            <p className="text-[var(--ink-dim)] text-sm leading-relaxed font-light">This ensures clarity is maintained across the entire workflow, not just at individual stages.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 border border-[var(--line)] rounded-3xl bg-[var(--paper)] shadow-xl overflow-hidden">
            {[
              { num: '01', title: 'Structure-led', desc: 'Organizes marketing into a clear framework instead of disconnected activities.' },
              { num: '02', title: 'Continuity-focused', desc: 'Supports an ongoing cycle of planning, execution, visibility, and improvement.' },
              { num: '03', title: 'Decision-oriented', desc: 'Helps prioritize what to focus on and how to act based on evolving needs.' },
              { num: '04', title: 'Operational visibility', desc: 'Keeps activities and outcomes visible in one place for better control.' }
            ].map((item, i) => (
              <div key={item.num} className={`min-h-[158px] p-6 md:p-8 flex flex-col justify-center text-center relative transition-all duration-300 hover:bg-[var(--violet-soft)]/20 ${i === 0 || i === 1 ? 'border-b border-[var(--line)]' : ''} ${i === 0 || i === 2 ? 'sm:border-r border-[var(--line)]' : ''}`}>
                <span className="absolute top-4 left-5 text-[var(--violet)]/30 font-bold text-xs tracking-widest">{item.num}</span>
                <h3 className="mb-2 text-[var(--ink)] font-bold text-base">{item.title}</h3>
                <div className="w-8 h-0.5 bg-gradient-to-r from-[var(--violet)] to-[var(--magenta)] mx-auto mb-3 opacity-60 rounded-full"></div>
                <p className="text-[var(--ink-dim)] text-xs leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECTION 5: CTA ============ */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full text-center p-10 md:p-16 rounded-3xl bg-[var(--paper)] border border-[var(--line)] shadow-lg overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--violet-soft)] to-[var(--magenta-soft)] opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>

            <span className="text-[11px] font-bold text-[var(--violet)] uppercase tracking-[0.2em] block relative z-10 mb-4">
              Take Action
            </span>
            <h2 className="mb-8 text-[var(--ink)] font-extrabold text-2xl md:text-4xl leading-tight tracking-tight relative z-10">
              Bring Structure to How Your <br className="hidden md:block"/>
              <span className="bg-gradient-to-r from-[var(--violet)] to-[var(--magenta)] bg-clip-text text-transparent">Marketing Operates.</span>
            </h2>
            <button className="relative z-10 group/btn inline-flex items-center justify-center gap-3 btn-solid font-bold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-105">
              <span>Book a live demo</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
