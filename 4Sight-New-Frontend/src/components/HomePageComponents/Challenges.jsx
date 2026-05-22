export default function Challenges() {
  return (
    <section className="min-h-screen w-full snap-start snap-always flex flex-col justify-center px-6 md:px-12 pt-[96px] pb-[64px] relative" id="slide-2">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="text-center mb-9">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-pink-200 bg-pink-50 text-xs font-semibold text-pink-600 mb-3.5 tracking-wider uppercase">The problem</span>
          <h2 className="font-bold text-3xl md:text-[48px] leading-[1.12] tracking-tight mb-3.5 [text-wrap:balance] text-slate-900">
            Common Marketing Challenges <em className="not-italic bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Businesses Face Today</em>
          </h2>
          <p className="text-slate-500 text-[15px] leading-[1.6] max-w-[720px] mx-auto [text-wrap:balance]">
            Marketing today spans multiple channels, tools, and teams. When these aren't aligned,
            it starts to impact clarity, execution, and outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-[18px] max-w-[1200px] mx-auto">
          <article className="group relative lg:col-span-2 h-[200px] rounded-[18px] bg-white border border-purple-100 overflow-hidden cursor-pointer transition-all duration-[350ms] ease-out hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg before:absolute before:inset-0 before:bg-[radial-gradient(120%_90%_at_100%_100%,rgba(124,58,237,0.06),transparent_55%)] before:pointer-events-none before:transition-all before:duration-400">
            <span className="absolute top-[18px] right-5 font-semibold text-[13px] text-slate-300 tracking-wider transition-colors duration-300 group-hover:text-purple-600">01</span>
            <svg className="absolute top-[18px] left-5 w-[22px] h-[22px] text-purple-600 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:-rotate-6 group-hover:scale-105 z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 3 v18 M3 12 h18" />
            </svg>
            <div className="absolute -right-2.5 -bottom-3.5 w-[200px] h-[170px] pointer-events-none opacity-20 transition-all duration-[350ms] ease-out group-hover:opacity-30 group-hover:-translate-x-1.5 group-hover:-translate-y-1 group-hover:-rotate-2">
              <svg className="w-full h-full block" viewBox="0 0 200 170" fill="none" stroke="#7C3AED" strokeWidth="1.6" strokeLinecap="round">
                <circle cx="40" cy="40" r="12" fill="#7C3AED" fillOpacity=".15" />
                <circle cx="110" cy="30" r="9" fill="#DB2777" fillOpacity=".18" />
                <circle cx="170" cy="70" r="14" fill="#7C3AED" fillOpacity=".15" />
                <circle cx="60" cy="110" r="10" fill="#DB2777" fillOpacity=".18" />
                <circle cx="140" cy="130" r="12" fill="#7C3AED" fillOpacity=".15" />
                <path d="M40 40 L 70 100" strokeDasharray="3 4" opacity=".5" />
                <path d="M110 30 L 168 70" strokeDasharray="3 4" opacity=".5" />
                <path d="M60 110 L 138 132" strokeDasharray="3 4" opacity=".5" />
              </svg>
            </div>
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 transition-all duration-[350ms] ease-out group-hover:-translate-y-[calc(50%+38px)] group-hover:opacity-95 z-20">
              <h3 className="font-bold text-[22px] tracking-tight m-0 text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent">No clear strategy</h3>
            </div>
            <span className="absolute left-6 bottom-6 w-8 h-[3px] rounded-sm bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-[350ms] ease-out group-hover:w-0 group-hover:opacity-0 z-20"></span>
            <div className="absolute left-0 right-0 bottom-0 px-6 pt-5 pb-[22px] bg-gradient-to-b from-[rgba(237,230,251,0)] via-[rgba(237,230,251,0.85)] to-[rgba(252,231,241,0.92)] backdrop-blur-[6px] translate-y-full transition-transform duration-400 ease-out border-t border-[rgba(124,58,237,0.15)] group-hover:translate-y-0 z-30">
              <p className="m-0 text-[13.5px] leading-[1.55] text-slate-700">Keywords, content, ads, and local efforts run in silos without a unified direction.</p>
            </div>
          </article>

          <article className="group relative lg:col-span-2 h-[200px] rounded-[18px] bg-white border border-purple-100 overflow-hidden cursor-pointer transition-all duration-[350ms] ease-out hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg before:absolute before:inset-0 before:bg-[radial-gradient(120%_90%_at_0%_100%,rgba(219,39,119,0.07),transparent_55%)] before:pointer-events-none before:transition-all before:duration-400">
            <span className="absolute top-[18px] right-5 font-semibold text-[13px] text-slate-300 tracking-wider transition-colors duration-300 group-hover:text-purple-600">02</span>
            <svg className="absolute top-[18px] left-5 w-[22px] h-[22px] text-purple-600 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:-rotate-6 group-hover:scale-105 z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
              <line x1="4" y1="4" x2="20" y2="20" />
            </svg>
            <div className="absolute -right-2.5 -bottom-3.5 w-[200px] h-[170px] pointer-events-none opacity-20 transition-all duration-[350ms] ease-out group-hover:opacity-30 group-hover:-translate-x-1.5 group-hover:-translate-y-1 group-hover:-rotate-2">
              <svg className="w-full h-full block" viewBox="0 0 200 170" fill="none" stroke="#DB2777" strokeWidth="1.4" strokeLinecap="round">
                <rect x="10" y="30" width="50" height="110" rx="6" fill="#DB2777" fillOpacity=".10" />
                <rect x="75" y="30" width="50" height="110" rx="6" fill="#DB2777" fillOpacity=".10" />
                <rect x="140" y="30" width="50" height="110" rx="6" fill="#DB2777" fillOpacity=".10" />
                <rect x="16" y="42" width="38" height="14" rx="3" fill="#7C3AED" fillOpacity=".25" />
                <rect x="16" y="62" width="30" height="10" rx="3" fill="#DB2777" fillOpacity=".25" />
                <rect x="81" y="42" width="38" height="14" rx="3" fill="#7C3AED" fillOpacity=".25" />
                <rect x="81" y="62" width="32" height="10" rx="3" fill="#DB2777" fillOpacity=".25" />
                <rect x="81" y="80" width="28" height="10" rx="3" fill="#7C3AED" fillOpacity=".25" />
                <rect x="146" y="42" width="38" height="14" rx="3" fill="#7C3AED" fillOpacity=".25" />
                <line x1="6" y1="4" x2="196" y2="166" strokeDasharray="6 8" opacity=".4" />
              </svg>
            </div>
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 transition-all duration-[350ms] ease-out group-hover:-translate-y-[calc(50%+38px)] group-hover:opacity-95 z-20">
              <h3 className="font-bold text-[22px] tracking-tight m-0 text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent">Execution without visibility</h3>
            </div>
            <span className="absolute left-6 bottom-6 w-8 h-[3px] rounded-sm bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-[350ms] ease-out group-hover:w-0 group-hover:opacity-0 z-20"></span>
            <div className="absolute left-0 right-0 bottom-0 px-6 pt-5 pb-[22px] bg-gradient-to-b from-[rgba(237,230,251,0)] via-[rgba(237,230,251,0.85)] to-[rgba(252,231,241,0.92)] backdrop-blur-[6px] translate-y-full transition-transform duration-400 ease-out border-t border-[rgba(124,58,237,0.15)] group-hover:translate-y-0 z-30">
              <p className="m-0 text-[13.5px] leading-[1.55] text-slate-700">Work gets done, but there's no clarity on impact or priority.</p>
            </div>
          </article>

          <article className="group relative lg:col-span-2 h-[200px] rounded-[18px] bg-white border border-purple-100 overflow-hidden cursor-pointer transition-all duration-[350ms] ease-out hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg before:absolute before:inset-0 before:bg-[radial-gradient(120%_90%_at_100%_0%,rgba(14,163,114,0.07),transparent_55%)] before:pointer-events-none before:transition-all before:duration-400">
            <span className="absolute top-[18px] right-5 font-semibold text-[13px] text-slate-300 tracking-wider transition-colors duration-300 group-hover:text-purple-600">03</span>
            <svg className="absolute top-[18px] left-5 w-[22px] h-[22px] text-purple-600 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:-rotate-6 group-hover:scale-105 z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18" />
              <path d="M7 14l4-4 4 4 5-7" />
            </svg>
            <div className="absolute -right-2.5 -bottom-3.5 w-[200px] h-[170px] pointer-events-none opacity-20 transition-all duration-[350ms] ease-out group-hover:opacity-30 group-hover:-translate-x-1.5 group-hover:-translate-y-1 group-hover:-rotate-2">
              <svg className="w-full h-full block" viewBox="0 0 200 170" fill="none" stroke="#0EA372" strokeWidth="1.4" strokeLinecap="round">
                <rect x="10" y="20" width="80" height="60" rx="6" fill="#0EA372" fillOpacity=".10" />
                <rect x="100" y="20" width="90" height="60" rx="6" fill="#7C3AED" fillOpacity=".10" />
                <rect x="10" y="90" width="180" height="60" rx="6" fill="#DB2777" fillOpacity=".08" />
                <rect x="22" y="56" width="8" height="18" fill="#7C3AED" fillOpacity=".4" />
                <rect x="34" y="46" width="8" height="28" fill="#7C3AED" fillOpacity=".4" />
                <rect x="46" y="38" width="8" height="36" fill="#7C3AED" fillOpacity=".4" />
                <rect x="58" y="50" width="8" height="24" fill="#7C3AED" fillOpacity=".4" />
                <rect x="70" y="30" width="8" height="44" fill="#DB2777" fillOpacity=".4" />
                <path d="M108 60 L122 50 L138 56 L156 36 L184 30" stroke="#0EA372" strokeWidth="1.8" />
                <circle cx="184" cy="30" r="3" fill="#0EA372" fillOpacity=".5" />
                <text x="22" y="128" fontFamily="Space Grotesk" fontSize="22" fontWeight="700" fill="#7C3AED" fillOpacity=".35">▲ 42%</text>
                <text x="100" y="128" fontFamily="Space Grotesk" fontSize="14" fill="#1A1530" fillOpacity=".25">···now what?</text>
              </svg>
            </div>
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 transition-all duration-[350ms] ease-out group-hover:-translate-y-[calc(50%+38px)] group-hover:opacity-95 z-20">
              <h3 className="font-bold text-[22px] tracking-tight m-0 text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent">Data without decisions</h3>
            </div>
            <span className="absolute left-6 bottom-6 w-8 h-[3px] rounded-sm bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-[350ms] ease-out group-hover:w-0 group-hover:opacity-0 z-20"></span>
            <div className="absolute left-0 right-0 bottom-0 px-6 pt-5 pb-[22px] bg-gradient-to-b from-[rgba(237,230,251,0)] via-[rgba(237,230,251,0.85)] to-[rgba(252,231,241,0.92)] backdrop-blur-[6px] translate-y-full transition-transform duration-400 ease-out border-t border-[rgba(124,58,237,0.15)] group-hover:translate-y-0 z-30">
              <p className="m-0 text-[13.5px] leading-[1.55] text-slate-700">Dashboards exist, but they don't translate into actionable next steps.</p>
            </div>
          </article>

          <article className="group relative lg:col-span-3 h-[200px] rounded-[18px] bg-white border border-purple-100 overflow-hidden cursor-pointer transition-all duration-[350ms] ease-out hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg before:absolute before:inset-0 before:bg-[radial-gradient(120%_90%_at_0%_100%,rgba(234,88,12,0.07),transparent_60%)] before:pointer-events-none before:transition-all before:duration-400">
            <span className="absolute top-[18px] right-5 font-semibold text-[13px] text-slate-300 tracking-wider transition-colors duration-300 group-hover:text-purple-600">04</span>
            <svg className="absolute top-[18px] left-5 w-[22px] h-[22px] text-purple-600 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:-rotate-6 group-hover:scale-105 z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4 M12 18v4 M2 12h4 M18 12h4 M5 5l3 3 M16 16l3 3 M19 5l-3 3 M8 16l-3 3" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <div className="absolute -right-5 -bottom-5 w-[240px] h-[190px] pointer-events-none opacity-20 transition-all duration-[350ms] ease-out group-hover:opacity-30 group-hover:-translate-x-1.5 group-hover:-translate-y-1 group-hover:-rotate-2">
              <svg className="w-full h-full block" viewBox="0 0 240 190" fill="none" stroke="#EA580C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="30" y="60" width="58" height="58" rx="10" fill="#EA580C" fillOpacity=".10" transform="rotate(-10 59 89)" />
                <g transform="rotate(-10 59 89)" fill="#EA580C" fillOpacity=".55" stroke="none">
                  <circle cx="45" cy="75" r="3.2" />
                  <circle cx="73" cy="75" r="3.2" />
                  <circle cx="45" cy="103" r="3.2" />
                  <circle cx="73" cy="103" r="3.2" />
                </g>
                <rect x="110" y="40" width="56" height="56" rx="10" fill="#7C3AED" fillOpacity=".10" transform="rotate(8 138 68)" />
                <g transform="rotate(8 138 68)" fill="#7C3AED" fillOpacity=".55" stroke="none">
                  <circle cx="138" cy="68" r="3.2" />
                  <circle cx="122" cy="54" r="3.2" />
                  <circle cx="154" cy="82" r="3.2" />
                </g>
                <text x="180" y="60" fontFamily="Space Grotesk" fontSize="36" fontWeight="700" fill="#DB2777" fillOpacity=".30" stroke="none">?</text>
                <text x="205" y="110" fontFamily="Space Grotesk" fontSize="22" fontWeight="700" fill="#7C3AED" fillOpacity=".30" stroke="none">?</text>
                <text x="170" y="150" fontFamily="Space Grotesk" fontSize="28" fontWeight="700" fill="#EA580C" fillOpacity=".30" stroke="none">?</text>
              </svg>
            </div>
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 transition-all duration-[350ms] ease-out group-hover:-translate-y-[calc(50%+38px)] group-hover:opacity-95 z-20">
              <h3 className="font-bold text-[22px] tracking-tight m-0 text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent">Dependence on guesswork</h3>
            </div>
            <span className="absolute left-6 bottom-6 w-8 h-[3px] rounded-sm bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-[350ms] ease-out group-hover:w-0 group-hover:opacity-0 z-20"></span>
            <div className="absolute left-0 right-0 bottom-0 px-6 pt-5 pb-[22px] bg-gradient-to-b from-[rgba(237,230,251,0)] via-[rgba(237,230,251,0.85)] to-[rgba(252,231,241,0.92)] backdrop-blur-[6px] translate-y-full transition-transform duration-400 ease-out border-t border-[rgba(124,58,237,0.15)] group-hover:translate-y-0 z-30">
              <p className="m-0 text-[13.5px] leading-[1.55] text-slate-700">Outcomes depend on trial-and-error instead of a structured system.</p>
            </div>
          </article>

          <article className="group relative lg:col-span-3 h-[200px] rounded-[18px] bg-white border border-purple-100 overflow-hidden cursor-pointer transition-all duration-[350ms] ease-out hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg before:absolute before:inset-0 before:bg-[radial-gradient(120%_90%_at_100%_0%,rgba(124,58,237,0.08),transparent_60%)] before:pointer-events-none before:transition-all before:duration-400">
            <span className="absolute top-[18px] right-5 font-semibold text-[13px] text-slate-300 tracking-wider transition-colors duration-300 group-hover:text-purple-600">05</span>
            <svg className="absolute top-[18px] left-5 w-[22px] h-[22px] text-purple-600 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:-rotate-6 group-hover:scale-105 z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            <div className="absolute -right-5 -bottom-5 w-[240px] h-[190px] pointer-events-none opacity-20 transition-all duration-[350ms] ease-out group-hover:opacity-30 group-hover:-translate-x-1.5 group-hover:-translate-y-1 group-hover:-rotate-2">
              <svg className="w-full h-full block" viewBox="0 0 240 190" fill="none" stroke="#7C3AED" strokeWidth="1.4" strokeLinecap="round">
                <rect x="14" y="30" width="68" height="56" rx="6" fill="#7C3AED" fillOpacity=".10" transform="rotate(-6 48 58)" />
                <g transform="rotate(-6 48 58)" fill="#7C3AED" fillOpacity=".5" stroke="none">
                  <rect x="22" y="60" width="6" height="18" />
                  <rect x="32" y="52" width="6" height="26" />
                  <rect x="42" y="44" width="6" height="34" />
                  <rect x="52" y="56" width="6" height="22" />
                  <rect x="62" y="38" width="6" height="40" />
                </g>
                <rect x="100" y="20" width="68" height="56" rx="6" fill="#DB2777" fillOpacity=".10" transform="rotate(4 134 48)" />
                <path d="M108 62 L122 52 L138 56 L154 36 L168 28" stroke="#DB2777" strokeWidth="1.8" transform="rotate(4 134 48)" />
                <rect x="180" y="40" width="54" height="54" rx="6" fill="#0EA372" fillOpacity=".10" transform="rotate(-3 207 67)" />
                <path d="M207 56 a8 8 0 1 1 0 16 a8 8 0 1 1 0 -16 z M207 78 v8" stroke="#0EA372" strokeWidth="1.8" transform="rotate(-3 207 67)" />
                <rect x="40" y="110" width="60" height="66" rx="6" fill="#EA580C" fillOpacity=".10" transform="rotate(5 70 143)" />
                <g stroke="#EA580C" strokeOpacity=".55" strokeWidth="1.6" transform="rotate(5 70 143)">
                  <line x1="50" y1="126" x2="86" y2="126" />
                  <line x1="50" y1="138" x2="86" y2="138" />
                  <line x1="50" y1="150" x2="74" y2="150" />
                </g>
                <rect x="130" y="110" width="80" height="66" rx="6" fill="#7C3AED" fillOpacity=".10" transform="rotate(-4 170 143)" />
                <g stroke="#7C3AED" strokeWidth="1.8" strokeOpacity=".55" transform="rotate(-4 170 143)">
                  <path d="M142 144 v8 a2 2 0 0 0 2 2 h6 l16 10 V128 L150 138 h-6 a2 2 0 0 0 -2 2 z" />
                  <path d="M178 134 a6 6 0 0 1 0 18" />
                  <path d="M188 128 a12 12 0 0 1 0 30" />
                </g>
                <path d="M82 60 L102 50" strokeDasharray="3 4" opacity=".4" />
                <path d="M168 60 L182 60" strokeDasharray="3 4" opacity=".4" />
                <path d="M100 134 L130 138" strokeDasharray="3 4" opacity=".4" />
              </svg>
            </div>
            <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 transition-all duration-[350ms] ease-out group-hover:-translate-y-[calc(50%+38px)] group-hover:opacity-95 z-20">
              <h3 className="font-bold text-[22px] tracking-tight m-0 text-slate-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 group-hover:bg-clip-text group-hover:text-transparent">No unified marketing view</h3>
            </div>
            <span className="absolute left-6 bottom-6 w-8 h-[3px] rounded-sm bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-[350ms] ease-out group-hover:w-0 group-hover:opacity-0 z-20"></span>
            <div className="absolute left-0 right-0 bottom-0 px-6 pt-5 pb-[22px] bg-gradient-to-b from-[rgba(237,230,251,0)] via-[rgba(237,230,251,0.85)] to-[rgba(252,231,241,0.92)] backdrop-blur-[6px] translate-y-full transition-transform duration-400 ease-out border-t border-[rgba(124,58,237,0.15)] group-hover:translate-y-0 z-30">
              <p className="m-0 text-[13.5px] leading-[1.55] text-slate-700">There's no single place to understand how all marketing efforts are working together.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
