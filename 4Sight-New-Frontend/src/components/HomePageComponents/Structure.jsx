import { useState } from 'react';

export default function Structure({ scrollToSlide }) {
  const [activePillar, setActivePillar] = useState(0);

  const gridColsClass = 
    activePillar === 0 ? 'lg:[grid-template-columns:2fr_1fr_1fr_1fr]' :
    activePillar === 1 ? 'lg:[grid-template-columns:1fr_2fr_1fr_1fr]' :
    activePillar === 2 ? 'lg:[grid-template-columns:1fr_1fr_2fr_1fr]' :
    'lg:[grid-template-columns:1fr_1fr_1fr_2fr]';

  return (
    <section className="min-h-screen w-full snap-start snap-always flex flex-col justify-center px-6 md:px-12 pt-[96px] pb-[64px] relative" id="slide-3">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(320px,460px)_1fr] gap-14 items-center">
          
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-pink-200 bg-pink-50 text-xs font-semibold text-pink-600 mb-3.5 tracking-wider uppercase">The solution</span>
            <h2 className="font-bold text-3xl md:text-[42px] leading-[1.15] tracking-tight mb-4 text-slate-900 [text-wrap:balance]">
              How Marketing 4Sight <em className="not-italic bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Brings Structure to Marketing</em>
            </h2>
            <p className="text-[15px] leading-[1.65] text-slate-500 mb-3.5 max-w-[440px]">
              Marketing doesn't need more tools — it needs a <b className="text-slate-700 font-semibold">structured way</b> to connect strategy, execution, and performance.
            </p>
            <p className="text-[15px] leading-[1.65] text-slate-500 mb-3.5 max-w-[440px]">
              Marketing 4Sight is built to bring this structure into a <b className="text-slate-700 font-semibold">single, continuous workflow</b>.
            </p>
            <button className="group inline-flex items-center gap-2 mt-3.5 px-5 py-3 rounded-xl border-2 border-purple-600 bg-transparent text-purple-600 font-semibold text-[14.5px] transition-all duration-300 hover:bg-purple-600 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/30" onClick={() => scrollToSlide(3)}>
              Explore how it works
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          <div className={`grid gap-3.5 transition-all duration-[550ms] ease-in-out lg:h-[420px] md:grid-cols-2 max-md:grid-cols-1 md:auto-rows-[160px] lg:auto-rows-auto max-lg:h-auto ${gridColsClass}`} id="pillars">
            <article
              className={`relative rounded-[18px] border bg-white overflow-hidden cursor-pointer transition-all duration-[350ms] group ${activePillar === 0 ? 'border-transparent bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50 shadow-xl ring-2 ring-purple-500/50' : 'border-purple-100 hover:border-purple-300'}`}
              onMouseEnter={() => setActivePillar(0)}
              onClick={() => setActivePillar(0)}
            >
              <div className={`absolute inset-0 grid place-items-center transition-opacity duration-300 ${activePillar === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <span className="font-bold text-lg text-slate-700 tracking-wider lg:[writing-mode:vertical-rl] lg:rotate-180">Strategy</span>
              </div>
              <div className={`absolute inset-0 p-5 lg:p-7 flex flex-col gap-3.5 transition-all duration-400 delay-100 ${activePillar === 0 ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <div className="w-[42px] h-[42px] rounded-xl grid place-items-center bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/30 self-start">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                <span className="font-semibold text-xs text-purple-600 tracking-widest uppercase">01 · Direction</span>
                <h3 className="font-bold text-xl lg:text-[26px] leading-[1.1] tracking-tight m-0 text-slate-900">Strategy</h3>
                <p className="text-xs lg:text-[13.5px] leading-[1.55] text-slate-600 m-0 flex-1 overflow-hidden">Define what matters most for your business. Marketing 4Sight brings together your goals, inputs, and context to set clear priorities — giving you direction on what to focus on and why.</p>
              </div>
            </article>

            <article
              className={`relative rounded-[18px] border bg-white overflow-hidden cursor-pointer transition-all duration-[350ms] group ${activePillar === 1 ? 'border-transparent bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50 shadow-xl ring-2 ring-purple-500/50' : 'border-purple-100 hover:border-purple-300'}`}
              onMouseEnter={() => setActivePillar(1)}
              onClick={() => setActivePillar(1)}
            >
              <div className={`absolute inset-0 grid place-items-center transition-opacity duration-300 ${activePillar === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <span className="font-bold text-lg text-slate-700 tracking-wider lg:[writing-mode:vertical-rl] lg:rotate-180">Implementation</span>
              </div>
              <div className={`absolute inset-0 p-5 lg:p-7 flex flex-col gap-3.5 transition-all duration-400 delay-100 ${activePillar === 1 ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <div className="w-[42px] h-[42px] rounded-xl grid place-items-center bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/30 self-start">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>
                <span className="font-semibold text-xs text-purple-600 tracking-widest uppercase">02 · Action</span>
                <h3 className="font-bold text-xl lg:text-[26px] leading-[1.1] tracking-tight m-0 text-slate-900">Implementation</h3>
                <p className="text-xs lg:text-[13.5px] leading-[1.55] text-slate-600 m-0 flex-1 overflow-hidden">Turn direction into action. The platform converts strategy into clear, structured tasks across your marketing efforts — ensuring everything being executed is aligned to defined priorities.</p>
              </div>
            </article>

            <article
              className={`relative rounded-[18px] border bg-white overflow-hidden cursor-pointer transition-all duration-[350ms] group ${activePillar === 2 ? 'border-transparent bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50 shadow-xl ring-2 ring-purple-500/50' : 'border-purple-100 hover:border-purple-300'}`}
              onMouseEnter={() => setActivePillar(2)}
              onClick={() => setActivePillar(2)}
            >
              <div className={`absolute inset-0 grid place-items-center transition-opacity duration-300 ${activePillar === 2 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <span className="font-bold text-lg text-slate-700 tracking-wider lg:[writing-mode:vertical-rl] lg:rotate-180">Governance</span>
              </div>
              <div className={`absolute inset-0 p-5 lg:p-7 flex flex-col gap-3.5 transition-all duration-400 delay-100 ${activePillar === 2 ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <div className="w-[42px] h-[42px] rounded-xl grid place-items-center bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/30 self-start">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <span className="font-semibold text-xs text-purple-600 tracking-widest uppercase">03 · Control</span>
                <h3 className="font-bold text-xl lg:text-[26px] leading-[1.1] tracking-tight m-0 text-slate-900">Governance</h3>
                <p className="text-xs lg:text-[13.5px] leading-[1.55] text-slate-600 m-0 flex-1 overflow-hidden">Stay in control of execution. Track what is being done, monitor consistency, and maintain complete visibility across activities — ensuring planned actions are followed through.</p>
              </div>
            </article>

            <article
              className={`relative rounded-[18px] border bg-white overflow-hidden cursor-pointer transition-all duration-[350ms] group ${activePillar === 3 ? 'border-transparent bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50 shadow-xl ring-2 ring-purple-500/50' : 'border-purple-100 hover:border-purple-300'}`}
              onMouseEnter={() => setActivePillar(3)}
              onClick={() => setActivePillar(3)}
            >
              <div className={`absolute inset-0 grid place-items-center transition-opacity duration-300 ${activePillar === 3 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <span className="font-bold text-lg text-slate-700 tracking-wider lg:[writing-mode:vertical-rl] lg:rotate-180">Optimization</span>
              </div>
              <div className={`absolute inset-0 p-5 lg:p-7 flex flex-col gap-3.5 transition-all duration-400 delay-100 ${activePillar === 3 ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <div className="w-[42px] h-[42px] rounded-xl grid place-items-center bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/30 self-start">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 17l6-6 4 4 8-8" />
                    <polyline points="17 7 21 7 21 11" />
                  </svg>
                </div>
                <span className="font-semibold text-xs text-purple-600 tracking-widest uppercase">04 · Improvement</span>
                <h3 className="font-bold text-xl lg:text-[26px] leading-[1.1] tracking-tight m-0 text-slate-900">Optimization</h3>
                <p className="text-xs lg:text-[13.5px] leading-[1.55] text-slate-600 m-0 flex-1 overflow-hidden">Continuously improve based on performance. The platform evaluates outcomes, identifies gaps, and suggests what needs to change — enabling ongoing refinement.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
