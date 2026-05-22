export default function Hero({ scrollToSlide }) {
  return (
    <section className="min-h-screen w-full snap-start snap-always flex flex-col justify-center px-6 md:px-12 pt-[90px] pb-[64px] relative" id="slide-1">
      <div className="w-full max-w-[1320px] mx-auto text-center">
        <div className="mb-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-100 bg-white text-xs font-medium text-slate-500 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span> Powered by the SIGO framework
          </div>
          <h1 className="font-bold text-4xl md:text-6xl lg:text-[50px] leading-[1.05] tracking-tight mb-4 text-slate-900 [text-wrap:balance]">
            <span className="block">Marketing 4Sight.</span>
            <span className="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">The Data-Driven Marketing OS.</span>
          </h1>
          <p className="text-base md:text-lg lg:text-[19px] leading-[1.6] text-slate-700 max-w-[820px] mx-auto mb-4 [text-wrap:balance]">
            A structured system to plan, execute, track, and optimize marketing — in one place.
            Where Strategy, Execution, and Performance are connected, not fragmented.
          </p>
          <p className="text-sm md:text-base leading-[1.65] text-slate-500 max-w-[720px] mx-auto [text-wrap:balance]">
            Marketing 4Sight brings together all marketing touchpoints into a single platform,
            powered by data and guided by the <span className="font-semibold text-purple-600">SIGO framework</span> — so teams
            move with <b className="text-slate-700 font-semibold">clarity</b> and act with <b className="text-slate-700 font-semibold">precision</b>.
          </p>
        </div>

        <section className="flex flex-wrap justify-center gap-3.5 mb-3">
          <article className="group flex-1 basis-[180px] max-w-[240px] border border-purple-100 rounded-2xl p-4 bg-white/60 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-purple-300 hover:bg-white shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 grid place-items-center mb-3 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-500 group-hover:text-white transition-all duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.5" y2="16.5" />
              </svg>
            </div>
            <h3 className="font-bold text-[14.5px] mb-1.5 text-slate-900">SEO Manager</h3>
            <p className="m-0 text-[12.5px] leading-relaxed text-slate-500">Builds and tracks your keyword universe with clear ranking and growth visibility.</p>
          </article>
          <article className="group flex-1 basis-[180px] max-w-[240px] border border-purple-100 rounded-2xl p-4 bg-white/60 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-purple-300 hover:bg-white shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 grid place-items-center mb-3 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-500 group-hover:text-white transition-all duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <h3 className="font-bold text-[14.5px] mb-1.5 text-slate-900">GMB Manager</h3>
            <p className="m-0 text-[12.5px] leading-relaxed text-slate-500">Optimizes your local presence with structured actions, insights, and performance tracking.</p>
          </article>
          <article className="group flex-1 basis-[180px] max-w-[240px] border border-purple-100 rounded-2xl p-4 bg-white/60 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-purple-300 hover:bg-white shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 grid place-items-center mb-3 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-500 group-hover:text-white transition-all duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
                <path d="M8 13h8" />
                <path d="M8 17h6" />
              </svg>
            </div>
            <h3 className="font-bold text-[14.5px] mb-1.5 text-slate-900">Content Manager</h3>
            <p className="m-0 text-[12.5px] leading-relaxed text-slate-500">Plans and executes content aligned to keywords, intent, and business goals.</p>
          </article>
          <article className="group flex-1 basis-[180px] max-w-[240px] border border-purple-100 rounded-2xl p-4 bg-white/60 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-purple-300 hover:bg-white shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 grid place-items-center mb-3 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-500 group-hover:text-white transition-all duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 4h18l-7 9v6l-4 2v-8z" />
              </svg>
            </div>
            <h3 className="font-bold text-[14.5px] mb-1.5 text-slate-900">Funnel Manager</h3>
            <p className="m-0 text-[12.5px] leading-relaxed text-slate-500">Maps and improves conversion journeys across user touchpoints.</p>
          </article>
          <article className="group flex-1 basis-[180px] max-w-[240px] border border-purple-100 rounded-2xl p-4 bg-white/60 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-purple-300 hover:bg-white shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 grid place-items-center mb-3 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-500 group-hover:text-white transition-all duration-300">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z" />
                <path d="M15 8a4 4 0 0 1 0 8" />
                <path d="M18 5a8 8 0 0 1 0 14" />
              </svg>
            </div>
            <h3 className="font-bold text-[14.5px] mb-1.5 text-slate-900">Media Manager</h3>
            <p className="m-0 text-[12.5px] leading-relaxed text-slate-500">Tracks paid performance and aligns it with overall marketing outcomes.</p>
          </article>
        </section>

        <p className="text-[14.5px] text-slate-500 mx-auto mb-3 max-w-[680px] text-center [text-wrap:balance]">
          The result: <b className="text-slate-700">clear strategy</b>, <b className="text-slate-700">structured execution</b>, <b className="text-slate-700">measurable performance</b>, and <b className="text-slate-700">continuous optimization</b> — all in one unified marketing system.
        </p>

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
  );
}
