export default function Connect() {
  return (
    <section className="min-h-screen w-full snap-start snap-always flex flex-col justify-center px-6 md:px-12 py-[96px] relative" id="slide-8">
      <div className="w-full max-w-[1280px] mx-auto text-center grid place-items-center">
        <div className="w-[min(100%,820px)] rounded-[22px] p-[clamp(34px,6vw,68px)_clamp(24px,7vw,86px)] bg-gradient-to-br from-white/92 to-[#fdf7ff]/94 shadow-lg relative overflow-hidden ring-1 ring-[#e7e1f2]/80 before:absolute before:inset-5 before:rounded-[18px] before:border before:border-[#e7e1f2]/80 before:pointer-events-none after:absolute after:left-1/2 after:-top-[90px] after:w-[380px] after:h-[220px] after:-translate-x-1/2 after:bg-[radial-gradient(circle,rgba(124,58,237,0.13),transparent_68%)] after:pointer-events-none">
          <span className="relative z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-pink-200 bg-pink-50 text-xs font-semibold text-pink-600 mb-3.5 tracking-wider uppercase">READY TO ALIGN YOUR MARKETING</span>
          <h2 className="relative z-10 font-bold text-[clamp(30px,4vw,52px)] leading-[1.08] tracking-tight mb-4.5 text-slate-900 [text-wrap:balance]">
            Make your marketing<br />work <em className="not-italic bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">with clarity.</em>
          </h2>
          <p className="relative z-10 mx-auto mb-3 max-w-[680px] text-slate-500 text-[15.5px] leading-[1.65]">Turn inputs, decisions, and execution into a connected system that drives measurable outcomes - without fragmentation or guesswork.</p>
          <p className="relative z-10 mx-auto mb-3 max-w-[680px] text-slate-500 text-[15.5px] leading-[1.65]">Let's align your data, direction, and execution into one structured flow that delivers consistent, trackable growth.</p>
          <a href="#contact" className="relative z-10 mt-[18px] inline-flex items-center gap-[9px] min-h-[48px] px-[26px] py-[13px] rounded-[11px] bg-gradient-to-br from-purple-600 to-pink-500 text-white font-space-grotesk font-bold text-[15px] no-underline shadow-[0_12px_28px_-12px_rgba(124,58,237,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_-14px_rgba(124,58,237,0.72)] group">
            Book a demo
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
