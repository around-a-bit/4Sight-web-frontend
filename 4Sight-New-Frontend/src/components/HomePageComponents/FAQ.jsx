import { useState } from 'react';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="min-h-screen w-full snap-start snap-always flex flex-col justify-center px-6 md:px-12 py-[96px] relative" id="slide-7">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(280px,390px)_minmax(0,1fr)] gap-8 md:gap-[56px] items-start max-w-[1180px] mx-auto">
          <div className="text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-pink-200 bg-pink-50 text-xs font-semibold text-pink-600 mb-3.5 tracking-wider uppercase">Frequently Asked Questions</span>
            <h2 className="font-bold text-[clamp(32px,3.4vw,48px)] leading-[1.08] tracking-tight mb-4 text-slate-900 [text-wrap:balance]">
              Quick Answers for <em className="not-italic bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Clear Decisions</em>
            </h2>
            <p className="m-0 text-slate-500 text-[15px] leading-[1.65] max-w-[360px]">Quick answers to help you understand how Marketing 4Sight works and how it fits your workflow.</p>
          </div>

          <div className="grid gap-3">
            <div className={`cursor-pointer border rounded-2xl bg-white/78 shadow-[0_12px_34px_-28px_rgba(36,22,80,0.35)] overflow-hidden transition-all duration-250 ${openFaq === 0 ? 'border-purple-600/36 bg-white shadow-md' : 'border-purple-100 hover:border-purple-200 hover:bg-white hover:shadow-md'}`} onClick={() => setOpenFaq(openFaq === 0 ? -1 : 0)}>
              <div className="flex justify-between items-center px-[18px] py-[17px] text-slate-900 font-bold text-base leading-[1.3] font-space-grotesk gap-3.5">
                <div className="flex items-center gap-3">
                  <span className="w-[30px] h-[30px] rounded-lg grid place-items-center bg-purple-50 text-purple-600 text-xs tracking-wider shrink-0 font-space-grotesk">01</span>
                  <strong className="text-[16px]">What exactly does Marketing 4Sight do?</strong>
                </div>
                <span className={`w-7 h-7 rounded-full grid place-items-center text-lg transition-all duration-250 shrink-0 ${openFaq === 0 ? 'rotate-45 bg-gradient-to-br from-purple-600 to-pink-500 text-white' : 'text-purple-600 bg-purple-50'}`}>+</span>
              </div>
              <div className={`px-[18px] pl-[61px] text-slate-500 text-[13.5px] leading-[1.58] text-left transition-all duration-300 overflow-hidden ${openFaq === 0 ? 'max-h-40 pb-[18px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="m-0">Marketing 4Sight structures your entire marketing into one connected system. It defines direction, translates it into clear actions, ensures execution is consistent, and continuously improves performance based on real outcomes. This keeps all efforts aligned, visible, and measurable in one place.</p>
              </div>
            </div>

            <div className={`cursor-pointer border rounded-2xl bg-white/78 shadow-[0_12px_34px_-28px_rgba(36,22,80,0.35)] overflow-hidden transition-all duration-250 ${openFaq === 1 ? 'border-purple-600/36 bg-white shadow-md' : 'border-purple-100 hover:border-purple-200 hover:bg-white hover:shadow-md'}`} onClick={() => setOpenFaq(openFaq === 1 ? -1 : 1)}>
              <div className="flex justify-between items-center px-[18px] py-[17px] text-slate-900 font-bold text-base leading-[1.3] font-space-grotesk gap-3.5">
                <div className="flex items-center gap-3">
                  <span className="w-[30px] h-[30px] rounded-lg grid place-items-center bg-purple-50 text-purple-600 text-xs tracking-wider shrink-0 font-space-grotesk">02</span>
                  <strong className="text-[16px]">How is this different from using separate tools for SEO, content, and ads?</strong>
                </div>
                <span className={`w-7 h-7 rounded-full grid place-items-center text-lg transition-all duration-250 shrink-0 ${openFaq === 1 ? 'rotate-45 bg-gradient-to-br from-purple-600 to-pink-500 text-white' : 'text-purple-600 bg-purple-50'}`}>+</span>
              </div>
              <div className={`px-[18px] pl-[61px] text-slate-500 text-[13.5px] leading-[1.58] text-left transition-all duration-300 overflow-hidden ${openFaq === 1 ? 'max-h-40 pb-[18px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="m-0">Most tools operate in silos. Marketing 4Sight connects strategy, execution, and performance across all marketing activities, ensuring decisions are aligned and outcomes are clearly visible in one place.</p>
              </div>
            </div>

            <div className={`cursor-pointer border rounded-2xl bg-white/78 shadow-[0_12px_34px_-28px_rgba(36,22,80,0.35)] overflow-hidden transition-all duration-250 ${openFaq === 2 ? 'border-purple-600/36 bg-white shadow-md' : 'border-purple-100 hover:border-purple-200 hover:bg-white hover:shadow-md'}`} onClick={() => setOpenFaq(openFaq === 2 ? -1 : 2)}>
              <div className="flex justify-between items-center px-[18px] py-[17px] text-slate-900 font-bold text-base leading-[1.3] font-space-grotesk gap-3.5">
                <div className="flex items-center gap-3">
                  <span className="w-[30px] h-[30px] rounded-lg grid place-items-center bg-purple-50 text-purple-600 text-xs tracking-wider shrink-0 font-space-grotesk">03</span>
                  <strong className="text-[16px]">Do I need a large team or technical expertise to use this platform?</strong>
                </div>
                <span className={`w-7 h-7 rounded-full grid place-items-center text-lg transition-all duration-250 shrink-0 ${openFaq === 2 ? 'rotate-45 bg-gradient-to-br from-purple-600 to-pink-500 text-white' : 'text-purple-600 bg-purple-50'}`}>+</span>
              </div>
              <div className={`px-[18px] pl-[61px] text-slate-500 text-[13.5px] leading-[1.58] text-left transition-all duration-300 overflow-hidden ${openFaq === 2 ? 'max-h-40 pb-[18px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="m-0">No. The platform is designed to simplify decision-making and execution, so both small teams and experienced professionals can manage marketing effectively without complex setup or technical dependency.</p>
              </div>
            </div>

            <div className={`cursor-pointer border rounded-2xl bg-white/78 shadow-[0_12px_34px_-28px_rgba(36,22,80,0.35)] overflow-hidden transition-all duration-250 ${openFaq === 3 ? 'border-purple-600/36 bg-white shadow-md' : 'border-purple-100 hover:border-purple-200 hover:bg-white hover:shadow-md'}`} onClick={() => setOpenFaq(openFaq === 3 ? -1 : 3)}>
              <div className="flex justify-between items-center px-[18px] py-[17px] text-slate-900 font-bold text-base leading-[1.3] font-space-grotesk gap-3.5">
                <div className="flex items-center gap-3">
                  <span className="w-[30px] h-[30px] rounded-lg grid place-items-center bg-purple-50 text-purple-600 text-xs tracking-wider shrink-0 font-space-grotesk">04</span>
                  <strong className="text-[16px]">Can I track real business outcomes, not just marketing metrics?</strong>
                </div>
                <span className={`w-7 h-7 rounded-full grid place-items-center text-lg transition-all duration-250 shrink-0 ${openFaq === 3 ? 'rotate-45 bg-gradient-to-br from-purple-600 to-pink-500 text-white' : 'text-purple-600 bg-purple-50'}`}>+</span>
              </div>
              <div className={`px-[18px] pl-[61px] text-slate-500 text-[13.5px] leading-[1.58] text-left transition-all duration-300 overflow-hidden ${openFaq === 3 ? 'max-h-40 pb-[18px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="m-0">Yes. Marketing 4Sight focuses on meaningful outcomes - visibility, engagement, actions, and conversions - so you can understand what is actually driving results, not just surface-level metrics.</p>
              </div>
            </div>

            <div className={`cursor-pointer border rounded-2xl bg-white/78 shadow-[0_12px_34px_-28px_rgba(36,22,80,0.35)] overflow-hidden transition-all duration-250 ${openFaq === 4 ? 'border-purple-600/36 bg-white shadow-md' : 'border-purple-100 hover:border-purple-200 hover:bg-white hover:shadow-md'}`} onClick={() => setOpenFaq(openFaq === 4 ? -1 : 4)}>
              <div className="flex justify-between items-center px-[18px] py-[17px] text-slate-900 font-bold text-base leading-[1.3] font-space-grotesk gap-3.5">
                <div className="flex items-center gap-3">
                  <span className="w-[30px] h-[30px] rounded-lg grid place-items-center bg-purple-50 text-purple-600 text-xs tracking-wider shrink-0 font-space-grotesk">05</span>
                  <strong className="text-[16px]">Who is Marketing 4Sight best suited for?</strong>
                </div>
                <span className={`w-7 h-7 rounded-full grid place-items-center text-lg transition-all duration-250 shrink-0 ${openFaq === 4 ? 'rotate-45 bg-gradient-to-br from-purple-600 to-pink-500 text-white' : 'text-purple-600 bg-purple-50'}`}>+</span>
              </div>
              <div className={`px-[18px] pl-[61px] text-slate-500 text-[13.5px] leading-[1.58] text-left transition-all duration-300 overflow-hidden ${openFaq === 4 ? 'max-h-40 pb-[18px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="m-0">Marketing 4Sight is built for businesses managing multiple marketing activities, channels, or teams and looking for clarity in direction and execution. It aligns actions to your specific goals and context, so everything works as one connected system rather than in silos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
