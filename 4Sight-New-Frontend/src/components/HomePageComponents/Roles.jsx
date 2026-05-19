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
    <section className="slide" id="slide-5">
      <div className="container">
        <div className="roles-scroll">
          <div className="roles-head">
            <span className="slide-eyebrow">Built for every role</span>
            <h2>One Platform. Different Roles. <em>A Structured Way to Work.</em></h2>
            <p>Marketing 4Sight brings structure to how marketing is planned, executed, and tracked.</p>
            <p>While every role approaches marketing differently, the need remains the same - clarity in direction, consistency in execution, and visibility into outcomes.</p>
          </div>

          <div className="roles-map">
            <button
              className={`role-card agency ${activeRole === 'agencies' ? 'active' : ''}`}
              type="button"
              onClick={() => setActiveRole('agencies')}
              onMouseEnter={() => setActiveRole('agencies')}
            >
              <span className="role-icon">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M7 8h10M7 12h4M13 12h4M7 16h10" />
                </svg>
              </span>
              <h3>Agencies</h3>
              <p>Multi-client management with clearer reporting.</p>
            </button>

            <article className="roles-main" id="roleMain" aria-live="polite">
              <span className="role-kicker">{roleContent[activeRole].kicker}</span>
              <h3>{roleContent[activeRole].title}</h3>
              <div className="role-detail">
                <div>
                  <strong>Role</strong>
                  <p>{roleContent[activeRole].role}</p>
                </div>
                <div>
                  <strong>How 4Sight fits</strong>
                  <p>{roleContent[activeRole].fit}</p>
                </div>
                <div>
                  <strong>Outcome</strong>
                  <p>{roleContent[activeRole].outcome}</p>
                </div>
              </div>
            </article>

            <button
              className={`role-card teams ${activeRole === 'teams' ? 'active' : ''}`}
              type="button"
              onClick={() => setActiveRole('teams')}
              onMouseEnter={() => setActiveRole('teams')}
            >
              <span className="role-icon">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <h3>Marketing Teams</h3>
              <p>Coordinated planning and delivery across channels.</p>
            </button>

            <button
              className={`role-card owner ${activeRole === 'owners' ? 'active' : ''}`}
              type="button"
              onClick={() => setActiveRole('owners')}
              onMouseEnter={() => setActiveRole('owners')}
            >
              <span className="role-icon">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" />
                  <path d="M7 14l4-4 3 3 5-7" />
                </svg>
              </span>
              <h3>Business Owners</h3>
              <p>Decision-ready visibility into marketing activity.</p>
            </button>
          </div>

          <div className="flex justify-center mt-2">
            <button
              onClick={() => setActiveRole('professionals')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                activeRole === 'professionals' ? 'bg-purple-600 text-white border-purple-600' : 'bg-white text-purple-600 border-purple-200 hover:border-purple-300'
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
