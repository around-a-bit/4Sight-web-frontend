export default function Walkthrough() {
  return (
    <section className="min-h-screen w-full snap-start snap-always flex flex-col justify-center px-6 md:px-12 py-[96px] relative" id="slide-6">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(300px,440px)_minmax(0,1fr)] gap-8 lg:gap-[64px] items-center max-w-[1180px] mx-auto">
          <div className="text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-pink-200 bg-pink-50 text-xs font-semibold text-pink-600 mb-3.5 tracking-wider uppercase">In action</span>
            <h2 className="font-bold text-[clamp(30px,3.2vw,46px)] leading-[1.1] tracking-tight mb-4 text-slate-900 [text-wrap:balance]">
              See Marketing 4Sight <em className="not-italic bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">in Action</em>
            </h2>
            <p className="mb-6 text-slate-500 text-[15px] leading-[1.62] max-w-[410px]">A quick walkthrough of how marketing moves from inputs to structured execution and measurable outcomes.</p>

            <div className="grid gap-3.5 mb-6">
              <article className="grid grid-cols-[34px_minmax(0,1fr)] gap-3 items-start py-3.5 border-b border-purple-100 first:pt-0 last:border-b-0 last:pb-0">
                <span className="w-[34px] h-[34px] rounded-[10px] grid place-items-center text-white bg-gradient-to-br from-purple-600 to-pink-500 shadow-[0_8px_18px_-9px_rgba(124,58,237,0.72)] font-bold text-[13px] font-space-grotesk">01</span>
                <div>
                  <h3 className="font-bold text-[17px] leading-[1.2] mb-1.5 text-slate-900 font-space-grotesk">Set your context</h3>
                  <p className="m-0 text-slate-500 text-[13.5px] leading-[1.5]">Add your business inputs and priorities.</p>
                </div>
              </article>

              <article className="grid grid-cols-[34px_minmax(0,1fr)] gap-3 items-start py-3.5 border-b border-purple-100 first:pt-0 last:border-b-0 last:pb-0">
                <span className="w-[34px] h-[34px] rounded-[10px] grid place-items-center text-white bg-gradient-to-br from-purple-600 to-pink-500 shadow-[0_8px_18px_-9px_rgba(124,58,237,0.72)] font-bold text-[13px] font-space-grotesk">02</span>
                <div>
                  <h3 className="font-bold text-[17px] leading-[1.2] mb-1.5 text-slate-900 font-space-grotesk">Get structured direction</h3>
                  <p className="m-0 text-slate-500 text-[13.5px] leading-[1.5]">Get strategy, prioritized actions, and adapt based on performance and market signals.</p>
                </div>
              </article>

              <article className="grid grid-cols-[34px_minmax(0,1fr)] gap-3 items-start py-3.5 border-b border-purple-100 first:pt-0 last:border-b-0 last:pb-0">
                <span className="w-[34px] h-[34px] rounded-[10px] grid place-items-center text-white bg-gradient-to-br from-purple-600 to-pink-500 shadow-[0_8px_18px_-9px_rgba(124,58,237,0.72)] font-bold text-[13px] font-space-grotesk">03</span>
                <div>
                  <h3 className="font-bold text-[17px] leading-[1.2] mb-1.5 text-slate-900 font-space-grotesk">Execute and stay in control</h3>
                  <p className="m-0 text-slate-500 text-[13.5px] leading-[1.5]">Run activities with full visibility, consistency, and ongoing tracking.</p>
                </div>
              </article>
            </div>
          </div>

          <div className="relative min-h-[440px] rounded-[20px] p-[1.5px] bg-gradient-to-br from-purple-600 to-pink-500 shadow-lg" aria-label="Marketing 4Sight walkthrough video placeholder">
            <div className="w-full h-full bg-white rounded-[18.5px] relative overflow-hidden grid place-items-center before:absolute before:inset-7 before:rounded-2xl before:border before:border-purple-100 before:bg-[linear-gradient(to_right,rgba(124,58,237,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(124,58,237,0.06)_1px,transparent_1px),#fff] before:bg-[size:42px_42px]">
              <div className="relative z-10 grid place-items-center gap-4 text-center text-slate-900 p-9">
                <button className="w-[70px] h-[70px] border-0 rounded-full grid place-items-center text-white bg-gradient-to-br from-purple-600 to-pink-500 shadow-[0_18px_38px_-14px_rgba(124,58,237,0.72)] cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-[0_22px_44px_-16px_rgba(124,58,237,0.82)]" type="button" aria-label="Play Marketing 4Sight walkthrough video">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <strong className="font-bold text-[18px] leading-[1.2] font-space-grotesk">4Sight Walkthrough Video</strong>
                <span className="text-slate-500 text-[13px] leading-[1.45] max-w-[280px]">Inputs, structured direction, execution visibility, and measurable outcomes.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
