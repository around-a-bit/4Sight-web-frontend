import { useState } from 'react';
import { Link } from 'react-router-dom';
import overviewImg from '../../assets/screenshorts/HomePageImages/Strategy Overview.png';
import ActionPlan from '../../assets/screenshorts/HomePageImages/actionPlan.jpeg';
import Implementaion from '../../assets/screenshorts/HomePageImages/Implementation.png';
import Governance from '../../assets/screenshorts/HomePageImages/Governance.png';
import improve from '../../assets/screenshorts/HomePageImages/improve.png';
// Image loading component with fallback and error handling
const ImageWithFallback = ({ src, alt, fallbackUI }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full flex-1 min-h-0">
      {/* Loading skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl animate-pulse flex items-center justify-center z-10">
          <span className="text-gray-500 text-sm font-medium">Loading screenshot...</span>
        </div>
      )}

      {/* Real image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover rounded-xl shadow-md transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
          }`}
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          // If image fails to load, show fallback UI
          e.target.style.display = 'none';
          if (e.target.nextElementSibling) {
            e.target.nextElementSibling.style.display = 'flex';
          }
        }}
        loading="lazy"
      />

      {/* Fallback UI if image fails (optional) */}
      {fallbackUI && (
        <div style={{ display: 'none' }} className="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl">
          {fallbackUI}
        </div>
      )}
    </div>
  );
};

export default function System() {
  const [activeSystemStep, setActiveSystemStep] = useState(0);

  // Mock checklist items for step 3 (interactive - KEPT AS IS)
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Optimize Hazra GMB details & description', completed: true },
    { id: 2, text: 'Consolidate 12 keyword silohs under "SEO OS"', completed: false },
    { id: 3, text: 'Draft 3 target landing page designs', completed: false },
    { id: 4, text: 'Audit GSC redirect loops', completed: true }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const completedCount = tasks.filter(t => t.completed).length;

  // Image URLs - Change these to your actual image paths
  const screenshots = {
    overview: overviewImg,
    direction: ActionPlan,
    execution: Implementaion,
    control: Governance,
    improve: improve
  };

  return (
    <section className="min-h-screen w-full snap-start snap-always flex flex-col justify-center px-6 md:px-12 py-[96px] relative" id="slide-4">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(280px,390px)_minmax(0,1fr)] gap-9 items-stretch min-h-[min(680px,calc(100vh-178px))]">
          <aside className="flex flex-col justify-center items-start md:pr-2.5">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-pink-200 bg-pink-50 text-xs font-semibold text-pink-600 mb-3.5 tracking-wider uppercase">The working system</span>
            <h2 className="font-bold text-3xl md:text-[42px] leading-[1.12] tracking-tight mb-4.5 text-slate-900 [text-wrap:balance]">
              Plan Clearly. Execute with Control. <em className="not-italic bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Improve Continuously.</em>
            </h2>
            <p className="text-[15px] leading-[1.65] text-slate-500 mb-3.5 max-w-[380px]">Marketing 4Sight turns a structured approach into a working system.</p>
            <p className="text-[15px] leading-[1.65] text-slate-500 mb-3.5 max-w-[380px]">It brings planning, execution, tracking, and improvement into one place - so every decision is <b className="text-slate-700 font-semibold">informed and backed by data</b>, and every action is aligned.</p>
            <Link to="/product" className="group inline-flex items-center gap-2 mt-2.5 px-4.5 py-[11px] rounded-[10px] border-[1.5px] border-purple-600 text-purple-600 bg-transparent font-semibold text-[14px] no-underline transition-all duration-200 hover:bg-purple-600 hover:text-white hover:-translate-y-0.5">
              Know more
              <svg className="w-[15px] h-[15px] transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </aside>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(210px,270px)_minmax(0,1fr)] gap-4.5 items-stretch min-w-0">
            <div className="relative flex flex-col justify-center gap-2.5 md:pr-2.5 lg:before:absolute lg:before:top-[70px] lg:before:bottom-[70px] lg:before:right-0 lg:before:w-px lg:before:bg-gradient-to-b lg:before:from-transparent lg:before:via-purple-100 lg:before:to-transparent" role="tablist" aria-label="Marketing 4Sight workflow">
              <button
                className={`w-full border rounded-xl text-left px-3.5 pt-3.5 pb-3 cursor-pointer transition-all duration-250 hover:border-purple-600/38 hover:bg-white hover:shadow-md hover:translate-x-0.5 group ${activeSystemStep === 0 ? 'border-purple-600/38 bg-white shadow-md translate-x-0.5' : 'border-purple-100 bg-white/70 text-slate-600'}`}
                type="button"
                onClick={() => setActiveSystemStep(0)}
                onMouseEnter={() => setActiveSystemStep(0)}
                aria-selected={activeSystemStep === 0 ? 'true' : 'false'}
              >
                <span className="block text-purple-600 font-bold text-[11px] tracking-widest uppercase mb-1.5">01 Overview</span>
                <strong className="block font-bold text-[15px] leading-[1.2] text-slate-900 mb-1.5">See what matters</strong>
                <span className="block text-xs leading-[1.45] text-slate-500">Unified overview, priority visibility, and gap identification.</span>
              </button>
              <button
                className={`w-full border rounded-xl text-left px-3.5 pt-3.5 pb-3 cursor-pointer transition-all duration-250 hover:border-purple-600/38 hover:bg-white hover:shadow-md hover:translate-x-0.5 group ${activeSystemStep === 1 ? 'border-purple-600/38 bg-white shadow-md translate-x-0.5' : 'border-purple-100 bg-white/70 text-slate-600'}`}
                type="button"
                onClick={() => setActiveSystemStep(1)}
                onMouseEnter={() => setActiveSystemStep(1)}
                aria-selected={activeSystemStep === 1 ? 'true' : 'false'}
              >
                <span className="block text-purple-600 font-bold text-[11px] tracking-widest uppercase mb-1.5">02 Direction</span>
                <strong className="block font-bold text-[15px] leading-[1.2] text-slate-900 mb-1.5">Turn inputs into action</strong>
                <span className="block text-xs leading-[1.45] text-slate-500">Structured planning, defined priorities, and clear next steps.</span>
              </button>
              <button
                className={`w-full border rounded-xl text-left px-3.5 pt-3.5 pb-3 cursor-pointer transition-all duration-250 hover:border-purple-600/38 hover:bg-white hover:shadow-md hover:translate-x-0.5 group ${activeSystemStep === 2 ? 'border-purple-600/38 bg-white shadow-md translate-x-0.5' : 'border-purple-100 bg-white/70 text-slate-600'}`}
                type="button"
                onClick={() => setActiveSystemStep(2)}
                onMouseEnter={() => setActiveSystemStep(2)}
                aria-selected={activeSystemStep === 2 ? 'true' : 'false'}
              >
                <span className="block text-purple-600 font-bold text-[11px] tracking-widest uppercase mb-1.5">03 Execution</span>
                <strong className="block font-bold text-[15px] leading-[1.2] text-slate-900 mb-1.5">Execute with structure</strong>
                <span className="block text-xs leading-[1.45] text-slate-500">Task-driven execution, aligned activities, centralized workflows.</span>
              </button>
              <button
                className={`w-full border rounded-xl text-left px-3.5 pt-3.5 pb-3 cursor-pointer transition-all duration-250 hover:border-purple-600/38 hover:bg-white hover:shadow-md hover:translate-x-0.5 group ${activeSystemStep === 3 ? 'border-purple-600/38 bg-white shadow-md translate-x-0.5' : 'border-purple-100 bg-white/70 text-slate-600'}`}
                type="button"
                onClick={() => setActiveSystemStep(3)}
                onMouseEnter={() => setActiveSystemStep(3)}
                aria-selected={activeSystemStep === 3 ? 'true' : 'false'}
              >
                <span className="block text-purple-600 font-bold text-[11px] tracking-widest uppercase mb-1.5">04 Control</span>
                <strong className="block font-bold text-[15px] leading-[1.2] text-slate-900 mb-1.5">Stay in control</strong>
                <span className="block text-xs leading-[1.45] text-slate-500">Activity tracking, alerts, updates, and execution visibility.</span>
              </button>
              <button
                className={`w-full border rounded-xl text-left px-3.5 pt-3.5 pb-3 cursor-pointer transition-all duration-250 hover:border-purple-600/38 hover:bg-white hover:shadow-md hover:translate-x-0.5 group ${activeSystemStep === 4 ? 'border-purple-600/38 bg-white shadow-md translate-x-0.5' : 'border-purple-100 bg-white/70 text-slate-600'}`}
                type="button"
                onClick={() => setActiveSystemStep(4)}
                onMouseEnter={() => setActiveSystemStep(4)}
                aria-selected={activeSystemStep === 4 ? 'true' : 'false'}
              >
                <span className="block text-purple-600 font-bold text-[11px] tracking-widest uppercase mb-1.5">05 Improve</span>
                <strong className="block font-bold text-[15px] leading-[1.2] text-slate-900 mb-1.5">Know what works</strong>
                <span className="block text-xs leading-[1.45] text-slate-500">Performance tracking, comparative insights, trend visibility.</span>
              </button>
            </div>

            <div className="relative min-w-0 rounded-[18px] bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50 shadow-lg ring-1 ring-purple-600/20 overflow-hidden flex flex-col max-md:min-h-[660px]">
              {/* ========== STEP 1 PANEL: OVERVIEW ========== */}
              <article className={`absolute inset-0 flex flex-col gap-3.5 p-6 transition-all duration-350 ease-in-out ${activeSystemStep === 0 ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'}`}>
                <div className="flex flex-col xl:grid xl:grid-cols-[minmax(0,1fr)_auto] gap-4.5 items-start shrink-0">
                  <div>
                    <h3 className="font-bold text-[clamp(20px,2vw,30px)] leading-[1.12] tracking-tight mb-2 text-slate-900">See what matters and where to focus</h3>
                    <p className="m-0 max-w-[560px] text-slate-500 text-[13.5px] leading-[1.55]">A unified view brings together your priorities, current performance, and key gaps, so you can clearly understand what needs attention and why.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 self-start xl:justify-end max-w-[330px] max-xl:justify-start max-xl:max-w-none" aria-label="Dashboard highlights">
                    <span className="min-h-[32px] inline-flex items-center justify-center px-2.5 py-1.5 rounded-full bg-purple-50 text-purple-600 text-[11.5px] font-bold whitespace-nowrap">Performance snapshot</span>
                    <span className="min-h-[32px] inline-flex items-center justify-center px-2.5 py-1.5 rounded-full bg-pink-50 text-pink-600 text-[11.5px] font-bold whitespace-nowrap">Priority indicators</span>
                    <span className="min-h-[32px] inline-flex items-center justify-center px-2.5 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-[11.5px] font-bold whitespace-nowrap">Health score and KPIs</span>
                  </div>
                </div>
                <div className="min-h-0 flex-1 relative rounded-xl overflow-hidden mt-2">
                  <ImageWithFallback
                    src={screenshots.overview}
                    alt="Marketing 4Sight Overview Dashboard showing performance metrics, health score, and alerts"
                  />
                </div>
              </article>

              {/* ========== STEP 2 PANEL: DIRECTION ========== */}
              <article className={`absolute inset-0 flex flex-col gap-3.5 p-6 transition-all duration-350 ease-in-out ${activeSystemStep === 1 ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'}`}>
                <div className="flex flex-col xl:grid xl:grid-cols-[minmax(0,1fr)_auto] gap-4.5 items-start shrink-0">
                  <div>
                    <h3 className="font-bold text-[clamp(20px,2vw,30px)] leading-[1.12] tracking-tight mb-2 text-slate-900">Turn inputs into a clear direction</h3>
                    <p className="m-0 max-w-[560px] text-slate-500 text-[13.5px] leading-[1.55]">The platform translates your business context into structured direction, so you are not guessing what to do next.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 self-start xl:justify-end max-w-[330px] max-xl:justify-start max-xl:max-w-none" aria-label="Action plan highlights">
                    <span className="min-h-[32px] inline-flex items-center justify-center px-2.5 py-1.5 rounded-full bg-purple-50 text-purple-600 text-[11.5px] font-bold whitespace-nowrap">Action items list</span>
                    <span className="min-h-[32px] inline-flex items-center justify-center px-2.5 py-1.5 rounded-full bg-pink-50 text-pink-600 text-[11.5px] font-bold whitespace-nowrap">Technical / offpage / onpage</span>
                    <span className="min-h-[32px] inline-flex items-center justify-center px-2.5 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-[11.5px] font-bold whitespace-nowrap">Suggested improvements</span>
                  </div>
                </div>
                <div className="min-h-0 flex-1 relative rounded-xl overflow-hidden mt-2">
                  <ImageWithFallback
                    src={screenshots.direction}
                    alt="Marketing 4Sight Direction panel showing SIGO Input Matrix and action suggestions with priority levels"
                  />
                </div>
              </article>

              {/* ========== STEP 3 PANEL: EXECUTION (INTERACTIVE - KEPT AS IS) ========== */}
              <article className={`absolute inset-0 flex flex-col gap-3.5 p-6 transition-all duration-350 ease-in-out ${activeSystemStep === 2 ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'}`}>
                <div className="flex flex-col xl:grid xl:grid-cols-[minmax(0,1fr)_auto] gap-4.5 items-start shrink-0">
                  <div>
                    <h3 className="font-bold text-[clamp(20px,2vw,30px)] leading-[1.12] tracking-tight mb-2 text-slate-900">Execute with structure, not scattered effort</h3>
                    <p className="m-0 max-w-[560px] text-slate-500 text-[13.5px] leading-[1.55]">
                      Every activity is organized and aligned, ensuring consistency across all marketing efforts.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 self-start xl:justify-end max-w-[330px] max-xl:justify-start max-xl:max-w-none" aria-label="Implementation highlights">
                    <span className="min-h-[32px] inline-flex items-center justify-center px-2.5 py-1.5 rounded-full bg-purple-50 text-purple-600 text-[11.5px] font-bold whitespace-nowrap">Task checklist</span>
                    <span className="min-h-[32px] inline-flex items-center justify-center px-2.5 py-1.5 rounded-full bg-pink-50 text-pink-600 text-[11.5px] font-bold whitespace-nowrap">Content scheduler</span>
                    <span className="min-h-[32px] inline-flex items-center justify-center px-2.5 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-[11.5px] font-bold whitespace-nowrap">Editable business inputs</span>
                  </div>
                </div>

                <div className="min-h-0 flex-1 relative rounded-xl overflow-hidden mt-2">
                  <ImageWithFallback
                    src={screenshots.execution}
                    alt="Marketing 4Sight Implementation dashboard showing task checklist, content scheduler, and editable business inputs"
                  />
                </div>
              </article>
              {/* ========== STEP 4 PANEL: CONTROL ========== */}
              <article className={`absolute inset-0 flex flex-col gap-3.5 p-6 transition-all duration-350 ease-in-out ${activeSystemStep === 3 ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'}`}>
                <div className="flex flex-col xl:grid xl:grid-cols-[minmax(0,1fr)_auto] gap-4.5 items-start shrink-0">
                  <div>
                    <h3 className="font-bold text-[clamp(20px,2vw,30px)] leading-[1.12] tracking-tight mb-2 text-slate-900">Stay in control of what is happening</h3>
                    <p className="m-0 max-w-[560px] text-slate-500 text-[13.5px] leading-[1.55]">Track actions, monitor updates, and maintain full visibility across everything being executed.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 self-start xl:justify-end max-w-[330px] max-xl:justify-start max-xl:max-w-none" aria-label="Governance highlights">
                    <span className="min-h-[32px] inline-flex items-center justify-center px-2.5 py-1.5 rounded-full bg-purple-50 text-purple-600 text-[11.5px] font-bold whitespace-nowrap">Activity log</span>
                    <span className="min-h-[32px] inline-flex items-center justify-center px-2.5 py-1.5 rounded-full bg-pink-50 text-pink-600 text-[11.5px] font-bold whitespace-nowrap">Alerts panel</span>
                    <span className="min-h-[32px] inline-flex items-center justify-center px-2.5 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-[11.5px] font-bold whitespace-nowrap">Status indicators</span>
                  </div>
                </div>
                <div className="min-h-0 flex-1 relative rounded-xl overflow-hidden mt-2">
                  <ImageWithFallback
                    src={screenshots.control}
                    alt="Marketing 4Sight Activity Log showing real-time execution tracking, alerts, and status updates"
                  />
                </div>
              </article>

              {/* ========== STEP 5 PANEL: IMPROVE ========== */}
              <article className={`absolute inset-0 flex flex-col gap-3.5 p-6 transition-all duration-350 ease-in-out ${activeSystemStep === 4 ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'}`}>
                <div className="flex flex-col xl:grid xl:grid-cols-[minmax(0,1fr)_auto] gap-4.5 items-start shrink-0">
                  <div>
                    <h3 className="font-bold text-[clamp(20px,2vw,30px)] leading-[1.12] tracking-tight mb-2 text-slate-900">Know what is working and what is not</h3>
                    <p className="m-0 max-w-[560px] text-slate-500 text-[13.5px] leading-[1.55]">Performance data is connected and easy to understand, helping you make informed decisions.</p>
                  </div>
                  <div className="flex flex-wrap gap-2 self-start xl:justify-end max-w-[330px] max-xl:justify-start max-xl:max-w-none" aria-label="Optimization highlights">
                    <span className="min-h-[32px] inline-flex items-center justify-center px-2.5 py-1.5 rounded-full bg-purple-50 text-purple-600 text-[11.5px] font-bold whitespace-nowrap">Traffic and engagement</span>
                    <span className="min-h-[32px] inline-flex items-center justify-center px-2.5 py-1.5 rounded-full bg-pink-50 text-pink-600 text-[11.5px] font-bold whitespace-nowrap">KPI comparison</span>
                    <span className="min-h-[32px] inline-flex items-center justify-center px-2.5 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-[11.5px] font-bold whitespace-nowrap">Trends over time</span>
                  </div>
                </div>
                <div className="min-h-0 flex-1 relative rounded-xl overflow-hidden mt-2">
                  <ImageWithFallback
                    src={screenshots.improve}
                    alt="Marketing 4Sight Performance Analytics showing conversion index trends, KPI comparisons, and historical performance"
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}