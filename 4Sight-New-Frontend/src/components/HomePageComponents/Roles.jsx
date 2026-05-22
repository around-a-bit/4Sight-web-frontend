import { useState } from 'react';

export default function Roles() {
  const [activeRole, setActiveRole] = useState('professionals');

  // Roles details mapping
  const roleContent = {
    professionals: {
      kicker: 'Marketing Professionals',
      title: 'Marketing Professionals (Executors / Specialists)',
      role: 'Working across campaigns, content, SEO, or media with multiple moving parts.',
      fit: 'Creates a clear flow to plan, execute, and track work in alignment with defined priorities.',
      outcome: 'Better execution clarity and stronger visibility into performance.'
    },
    teams: {
      kicker: 'Marketing Teams',
      title: 'Marketing Teams',
      role: 'Multiple contributors managing different channels and activities.',
      fit: 'Aligns planning, execution, and tracking within a single structured system.',
      outcome: 'Improved coordination and consistent delivery across channels.'
    },
    agencies: {
      kicker: 'Agencies',
      title: 'Agencies (Multi-client Management)',
      role: 'Managing multiple brands with different strategies and reporting needs.',
      fit: 'Standardizes how work is planned, executed, and reported across accounts.',
      outcome: 'Scalable operations and clearer client communication.'
    },
    owners: {
      kicker: 'Business Owners',
      title: 'Business Owners / Decision Makers',
      role: 'Reviewing marketing efforts and making investment decisions.',
      fit: 'Presents marketing activity in a structured, decision-ready format.',
      outcome: 'Clearer visibility and more confident decision-making.'
    }
  };

  return (
    <section className="min-h-screen w-full snap-start snap-always flex flex-col justify-center px-6 md:px-12 py-[96px] relative" id="slide-5">
      <div className="w-full max-w-[1280px] mx-auto text-center">
        <div>
          <div className="max-w-[920px] mx-auto mb-7">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-pink-200 bg-pink-50 text-xs font-semibold text-pink-600 mb-3.5 tracking-wider uppercase">Built for every role</span>
            <h2 className="font-bold text-[clamp(28px,3.1vw,44px)] leading-[1.12] tracking-tight mb-4 text-slate-900 [text-wrap:balance]">
              One Platform. Different Roles. <em className="not-italic bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">A Structured Way to Work.</em>
            </h2>
            <p className="mx-auto mb-2.5 text-slate-500 text-[15.5px] leading-[1.6] max-w-[860px]">Marketing 4Sight brings structure to how marketing is planned, executed, and tracked.</p>
            <p className="mx-auto mb-2.5 text-slate-500 text-[15.5px] leading-[1.6] max-w-[860px]">While every role approaches marketing differently, the need remains the same - clarity in direction, consistency in execution, and visibility into outcomes.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(190px,1fr)_minmax(360px,1.38fr)_minmax(190px,1fr)] gap-y-4.5 gap-x-7 items-center mx-auto mb-6 relative [grid-template-areas:'main'_'agency'_'teams'_'owner'] lg:[grid-template-areas:'agency_main_teams'_'owner_main_teams']">
            <button
              className={`[grid-area:agency] min-h-[150px] border rounded-2xl px-5 py-[22px] shadow-[0_14px_36px_-26px_rgba(36,22,80,0.28)] cursor-pointer flex flex-col items-center justify-center text-center relative transition-all duration-250 lg:after:content-[''] lg:after:absolute lg:after:top-1/2 lg:after:-right-[30px] lg:after:w-[34px] lg:after:h-[2px] lg:after:opacity-55 lg:after:bg-gradient-to-r lg:after:from-transparent lg:after:to-purple-600 lg:before:content-[''] lg:before:absolute lg:before:top-[calc(50%-5px)] lg:before:-right-[37px] lg:before:w-0 lg:before:h-0 lg:before:opacity-70 lg:before:border-y-[6px] lg:before:border-y-transparent lg:before:border-l-[10px] lg:before:border-l-purple-600 ${activeRole === 'agencies' ? '-translate-y-[3px] border-purple-600/42 bg-white shadow-md' : 'border-purple-100 bg-white/76 hover:-translate-y-[3px] hover:border-purple-600/42 hover:bg-white hover:shadow-md'}`}
              type="button"
              onClick={() => setActiveRole('agencies')}
              onMouseEnter={() => setActiveRole('agencies')}
            >
              <span className="w-[38px] h-[38px] rounded-[11px] grid place-items-center mb-3 text-white bg-gradient-to-br from-purple-600 to-pink-500 shadow-[0_8px_18px_-8px_rgba(124,58,237,0.55)]">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M7 8h10M7 12h4M13 12h4M7 16h10" />
                </svg>
              </span>
              <h3 className="font-bold text-lg leading-[1.18] mb-[7px] text-slate-900">Agencies</h3>
              <p className="m-0 text-slate-500 text-[12.5px] leading-[1.45]">Multi-client management with clearer reporting.</p>
            </button>

            <article className="[grid-area:main] min-h-[360px] p-7 text-left bg-white shadow-lg relative overflow-hidden rounded-[18px] ring-2 ring-transparent bg-clip-padding before:absolute before:-inset-[2px] before:-z-10 before:rounded-[20px] before:bg-gradient-to-br before:from-purple-600 before:to-pink-500 after:absolute after:-right-[80px] after:-bottom-[100px] after:w-[240px] after:h-[240px] after:rounded-full after:bg-[radial-gradient(circle,rgba(124,58,237,0.14),transparent_68%)] after:pointer-events-none" id="roleMain" aria-live="polite">
              <span className="inline-flex items-center gap-2 mb-3 text-purple-600 font-bold text-xs tracking-widest uppercase">{roleContent[activeRole].kicker}</span>
              <h3 className="font-bold text-[clamp(24px,2.2vw,32px)] leading-[1.1] tracking-tight mb-4.5 text-slate-900">{roleContent[activeRole].title}</h3>
              <div className="grid gap-3.5 relative z-10">
                <div className="p-3.5 px-4 rounded-xl border border-purple-100 bg-[#FAF8FD]/78">
                  <strong className="block text-slate-900 font-bold text-[15px] mb-1.5">Role</strong>
                  <p className="m-0 text-slate-500 text-[13.5px] leading-[1.5]">{roleContent[activeRole].role}</p>
                </div>
                <div className="p-3.5 px-4 rounded-xl border border-purple-100 bg-[#FAF8FD]/78">
                  <strong className="block text-slate-900 font-bold text-[15px] mb-1.5">How 4Sight fits</strong>
                  <p className="m-0 text-slate-500 text-[13.5px] leading-[1.5]">{roleContent[activeRole].fit}</p>
                </div>
                <div className="p-3.5 px-4 rounded-xl border border-purple-100 bg-[#FAF8FD]/78">
                  <strong className="block text-slate-900 font-bold text-[15px] mb-1.5">Outcome</strong>
                  <p className="m-0 text-slate-500 text-[13.5px] leading-[1.5]">{roleContent[activeRole].outcome}</p>
                </div>
              </div>
            </article>

            <button
              className={`[grid-area:teams] min-h-[150px] border rounded-2xl px-5 py-[22px] shadow-[0_14px_36px_-26px_rgba(36,22,80,0.28)] cursor-pointer flex flex-col items-center justify-center text-center relative transition-all duration-250 lg:after:content-[''] lg:after:absolute lg:after:top-1/2 lg:after:-left-[30px] lg:after:w-[34px] lg:after:h-[2px] lg:after:opacity-55 lg:after:bg-gradient-to-r lg:after:from-purple-600 lg:after:to-transparent lg:before:content-[''] lg:before:absolute lg:before:top-[calc(50%-5px)] lg:before:-left-[37px] lg:before:w-0 lg:before:h-0 lg:before:opacity-70 lg:before:border-y-[6px] lg:before:border-y-transparent lg:before:border-r-[10px] lg:before:border-r-purple-600 ${activeRole === 'teams' ? '-translate-y-[3px] border-purple-600/42 bg-white shadow-md' : 'border-purple-100 bg-white/76 hover:-translate-y-[3px] hover:border-purple-600/42 hover:bg-white hover:shadow-md'}`}
              type="button"
              onClick={() => setActiveRole('teams')}
              onMouseEnter={() => setActiveRole('teams')}
            >
              <span className="w-[38px] h-[38px] rounded-[11px] grid place-items-center mb-3 text-white bg-gradient-to-br from-purple-600 to-pink-500 shadow-[0_8px_18px_-8px_rgba(124,58,237,0.55)]">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <h3 className="font-bold text-lg leading-[1.18] mb-[7px] text-slate-900">Marketing Teams</h3>
              <p className="m-0 text-slate-500 text-[12.5px] leading-[1.45]">Coordinated planning and delivery across channels.</p>
            </button>

            <button
              className={`[grid-area:owner] min-h-[150px] border rounded-2xl px-5 py-[22px] shadow-[0_14px_36px_-26px_rgba(36,22,80,0.28)] cursor-pointer flex flex-col items-center justify-center text-center relative transition-all duration-250 lg:after:content-[''] lg:after:absolute lg:after:top-1/2 lg:after:-right-[30px] lg:after:w-[34px] lg:after:h-[2px] lg:after:opacity-55 lg:after:bg-gradient-to-r lg:after:from-transparent lg:after:to-purple-600 lg:before:content-[''] lg:before:absolute lg:before:top-[calc(50%-5px)] lg:before:-right-[37px] lg:before:w-0 lg:before:h-0 lg:before:opacity-70 lg:before:border-y-[6px] lg:before:border-y-transparent lg:before:border-l-[10px] lg:before:border-l-purple-600 ${activeRole === 'owners' ? '-translate-y-[3px] border-purple-600/42 bg-white shadow-md' : 'border-purple-100 bg-white/76 hover:-translate-y-[3px] hover:border-purple-600/42 hover:bg-white hover:shadow-md'}`}
              type="button"
              onClick={() => setActiveRole('owners')}
              onMouseEnter={() => setActiveRole('owners')}
            >
              <span className="w-[38px] h-[38px] rounded-[11px] grid place-items-center mb-3 text-white bg-gradient-to-br from-purple-600 to-pink-500 shadow-[0_8px_18px_-8px_rgba(124,58,237,0.55)]">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="M7 14l4-4 3 3 5-7" />
                </svg>
              </span>
              <h3 className="font-bold text-lg leading-[1.18] mb-[7px] text-slate-900">Business Owners</h3>
              <p className="m-0 text-slate-500 text-[12.5px] leading-[1.45]">Decision-ready visibility into marketing activity.</p>
            </button>
          </div>

          <div className="flex justify-center mt-2">
            <button
              onClick={() => setActiveRole('professionals')}
              className={`px-4 py-1.5 rounded-full text-[13px] font-semibold border transition-all ${activeRole === 'professionals' ? 'bg-purple-600 text-white border-purple-600' : 'bg-white text-purple-600 border-purple-200 hover:border-purple-300'
                }`}
            >
              Reset Details to Default (Marketing Specialist)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
