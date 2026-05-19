import { useState } from 'react';
import { Link } from 'react-router-dom';
import overviewImg from '../../assets/screenshorts/image.png';

// Image loading component with fallback and error handling
const ImageWithFallback = ({ src, alt, fallbackUI }) => {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <div className="relative w-full h-full">
      {/* Loading skeleton */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl animate-pulse flex items-center justify-center">
          <span className="text-gray-500 text-sm">Loading screenshot...</span>
        </div>
      )}

      {/* Real image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover rounded-xl shadow-lg transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0 absolute'
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
        <div style={{ display: 'none' }} className="w-full h-full flex items-center justify-center">
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
    direction: '/assets/screenshots/02-direction-actionplan.png',
    execution: '/assets/screenshots/03-execution-checklist.png',
    control: '/assets/screenshots/04-control-activity.png',
    improve: '/assets/screenshots/05-improve-performance.png'
  };

  return (
    <section className="slide" id="slide-4">
      <div className="container">
        <div className="system-scroll">
          <aside className="system-intro">
            <span className="slide-eyebrow">The working system</span>
            <h2>Plan Clearly. Execute with Control. <em>Improve Continuously.</em></h2>
            <p>Marketing 4Sight turns a structured approach into a working system.</p>
            <p>It brings planning, execution, tracking, and improvement into one place - so every decision is <b>informed and backed by data</b>, and every action is aligned.</p>
            <Link to="/product" className="system-cta flex items-center gap-2 text-violet font-semibold hover:opacity-80 transition-opacity">
              Know more
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </aside>

          <div className="system-stage">
            <div className="system-list" role="tablist" aria-label="Marketing 4Sight workflow">
              <button
                className={`system-tab ${activeSystemStep === 0 ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveSystemStep(0)}
                onMouseEnter={() => setActiveSystemStep(0)}
                aria-selected={activeSystemStep === 0 ? 'true' : 'false'}
              >
                <span className="num">01 Overview</span>
                <strong>See what matters</strong>
                <span>Unified overview, priority visibility, and gap identification.</span>
              </button>
              <button
                className={`system-tab ${activeSystemStep === 1 ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveSystemStep(1)}
                onMouseEnter={() => setActiveSystemStep(1)}
                aria-selected={activeSystemStep === 1 ? 'true' : 'false'}
              >
                <span className="num">02 Direction</span>
                <strong>Turn inputs into action</strong>
                <span>Structured planning, defined priorities, and clear next steps.</span>
              </button>
              <button
                className={`system-tab ${activeSystemStep === 2 ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveSystemStep(2)}
                onMouseEnter={() => setActiveSystemStep(2)}
                aria-selected={activeSystemStep === 2 ? 'true' : 'false'}
              >
                <span className="num">03 Execution</span>
                <strong>Execute with structure</strong>
                <span>Task-driven execution, aligned activities, centralized workflows.</span>
              </button>
              <button
                className={`system-tab ${activeSystemStep === 3 ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveSystemStep(3)}
                onMouseEnter={() => setActiveSystemStep(3)}
                aria-selected={activeSystemStep === 3 ? 'true' : 'false'}
              >
                <span className="num">04 Control</span>
                <strong>Stay in control</strong>
                <span>Activity tracking, alerts, updates, and execution visibility.</span>
              </button>
              <button
                className={`system-tab ${activeSystemStep === 4 ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveSystemStep(4)}
                onMouseEnter={() => setActiveSystemStep(4)}
                aria-selected={activeSystemStep === 4 ? 'true' : 'false'}
              >
                <span className="num">05 Improve</span>
                <strong>Know what works</strong>
                <span>Performance tracking, comparative insights, trend visibility.</span>
              </button>
            </div>

            <div className="system-panel">
              {/* ========== STEP 1 PANEL: OVERVIEW ========== */}
              <article className={`system-step ${activeSystemStep === 0 ? 'active' : ''}`}>
                <div className="system-copy">
                  <div>
                    <h3>See what matters and where to focus</h3>
                    <p>A unified view brings together your priorities, current performance, and key gaps, so you can clearly understand what needs attention and why.</p>
                  </div>
                  <div className="system-highlights" aria-label="Dashboard highlights">
                    <span>Performance snapshot</span>
                    <span>Priority indicators</span>
                    <span>Health score and KPIs</span>
                  </div>
                </div>
                <div className="system-shot p-4">
                  <ImageWithFallback
                    src={screenshots.overview}
                    alt="Marketing 4Sight Overview Dashboard showing performance metrics, health score, and alerts"
                  />
                </div>
              </article>

              {/* ========== STEP 2 PANEL: DIRECTION ========== */}
              <article className={`system-step ${activeSystemStep === 1 ? 'active' : ''}`}>
                <div className="system-copy">
                  <div>
                    <h3>Turn inputs into a clear direction</h3>
                    <p>The platform translates your business context into structured direction, so you are not guessing what to do next.</p>
                  </div>
                  <div className="system-highlights" aria-label="Action plan highlights">
                    <span>Action items list</span>
                    <span>Technical / offpage / onpage</span>
                    <span>Suggested improvements</span>
                  </div>
                </div>
                <div className="system-shot p-4">
                  <ImageWithFallback
                    src={screenshots.direction}
                    alt="Marketing 4Sight Direction panel showing SIGO Input Matrix and action suggestions with priority levels"
                  />
                </div>
              </article>

              {/* ========== STEP 3 PANEL: EXECUTION (INTERACTIVE - KEPT AS IS) ========== */}
              <article className={`system-step ${activeSystemStep === 2 ? 'active' : ''}`}>
                <div className="system-copy">
                  <div>
                    <h3>Execute with structure, not scattered effort</h3>
                    <p>Every activity is organized and aligned, ensuring consistency across all marketing efforts.</p>
                  </div>
                  <div className="system-highlights" aria-label="Implementation highlights">
                    <span>Task checklist</span>
                    <span>Content scheduler</span>
                    <span>Editable business inputs</span>
                  </div>
                </div>
                <div className="system-shot p-4">
                  {/* KEPT INTERACTIVE CHECKLIST - DO NOT REPLACE WITH IMAGE */}
                  <div className="w-full h-full bg-[#fbfbfd] text-[#1a1530] rounded-xl p-4 flex flex-col font-sans border border-purple-200">
                    <div className="flex justify-between items-center pb-2 border-b border-purple-100 mb-2">
                      <strong className="text-xs text-purple-900">Task Executor ({completedCount}/{tasks.length} Done)</strong>
                      <div className="w-24 bg-gray-200 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-full transition-all duration-300"
                          style={{ width: `${(completedCount / tasks.length) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex-grow flex flex-col gap-1.5 justify-center">
                      {tasks.map(t => (
                        <label
                          key={t.id}
                          className={`flex items-center gap-2 p-2 rounded border cursor-pointer transition-all ${
                            t.completed ? 'bg-purple-50/50 border-purple-200 text-gray-400 line-through' : 'bg-white border-gray-200 hover:border-purple-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={t.completed}
                            onChange={() => toggleTask(t.id)}
                            className="accent-purple-600 rounded"
                          />
                          <span className="text-xs">{t.text}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              {/* ========== STEP 4 PANEL: CONTROL ========== */}
              <article className={`system-step ${activeSystemStep === 3 ? 'active' : ''}`}>
                <div className="system-copy">
                  <div>
                    <h3>Stay in control of what is happening</h3>
                    <p>Track actions, monitor updates, and maintain full visibility across everything being executed.</p>
                  </div>
                  <div className="system-highlights" aria-label="Governance highlights">
                    <span>Activity log</span>
                    <span>Alerts panel</span>
                    <span>Status indicators</span>
                  </div>
                </div>
                <div className="system-shot p-4">
                  <ImageWithFallback
                    src={screenshots.control}
                    alt="Marketing 4Sight Activity Log showing real-time execution tracking, alerts, and status updates"
                  />
                </div>
              </article>

              {/* ========== STEP 5 PANEL: IMPROVE ========== */}
              <article className={`system-step ${activeSystemStep === 4 ? 'active' : ''}`}>
                <div className="system-copy">
                  <div>
                    <h3>Know what is working and what is not</h3>
                    <p>Performance data is connected and easy to understand, helping you make informed decisions.</p>
                  </div>
                  <div className="system-highlights" aria-label="Optimization highlights">
                    <span>Traffic and engagement</span>
                    <span>KPI comparison</span>
                    <span>Trends over time</span>
                  </div>
                </div>
                <div className="system-shot p-4">
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