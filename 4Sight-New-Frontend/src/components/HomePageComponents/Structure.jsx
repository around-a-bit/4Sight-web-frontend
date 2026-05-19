import { useState } from 'react';

export default function Structure({ scrollToSlide }) {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section className="slide" id="slide-3">
      <div className="container">
        <div className="struct">
          <div className="copy">
            <span className="slide-eyebrow">The solution</span>
            <h2>How Marketing 4Sight <em>Brings Structure to Marketing</em></h2>
            <p>Marketing doesn't need more tools — it needs a <b>structured way</b> to connect strategy, execution, and performance.</p>
            <p>Marketing 4Sight is built to bring this structure into a <b>single, continuous workflow</b>.</p>
            <button className="btn-explore" onClick={() => scrollToSlide(3)}>
              Explore how it works
              <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          <div className="pillars" id="pillars" data-active={activePillar}>
            <article
              className={`pillar ${activePillar === 0 ? 'active' : ''}`}
              onMouseEnter={() => setActivePillar(0)}
              onClick={() => setActivePillar(0)}
            >
              <div className="vlabel"><span>Strategy</span></div>
              <div className="pcontent">
                <div className="picon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                </div>
                <span className="pnum">01 · Direction</span>
                <h3 className="ptitle">Strategy</h3>
                <p className="pdesc">Define what matters most for your business. Marketing 4Sight brings together your goals, inputs, and context to set clear priorities — giving you direction on what to focus on and why, replacing scattered thinking with a structured approach.</p>
              </div>
            </article>

            <article
              className={`pillar ${activePillar === 1 ? 'active' : ''}`}
              onMouseEnter={() => setActivePillar(1)}
              onClick={() => setActivePillar(1)}
            >
              <div className="vlabel"><span>Implementation</span></div>
              <div className="pcontent">
                <div className="picon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>
                <span className="pnum">02 · Action</span>
                <h3 className="ptitle">Implementation</h3>
                <p className="pdesc">Turn direction into action. The platform converts strategy into clear, structured tasks across your marketing efforts — ensuring everything being executed is aligned to defined priorities and moving in the same direction.</p>
              </div>
            </article>

            <article
              className={`pillar ${activePillar === 2 ? 'active' : ''}`}
              onMouseEnter={() => setActivePillar(2)}
              onClick={() => setActivePillar(2)}
            >
              <div className="vlabel"><span>Governance</span></div>
              <div className="pcontent">
                <div className="picon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <span className="pnum">03 · Control</span>
                <h3 className="ptitle">Governance</h3>
                <p className="pdesc">Stay in control of execution. Track what is being done, monitor consistency, and maintain complete visibility across activities — ensuring planned actions are followed through and aligned with the overall strategy.</p>
              </div>
            </article>

            <article
              className={`pillar ${activePillar === 3 ? 'active' : ''}`}
              onMouseEnter={() => setActivePillar(3)}
              onClick={() => setActivePillar(3)}
            >
              <div className="vlabel"><span>Optimization</span></div>
              <div className="pcontent">
                <div className="picon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 17l6-6 4 4 8-8" />
                    <polyline points="17 7 21 7 21 11" />
                  </svg>
                </div>
                <span className="pnum">04 · Improvement</span>
                <h3 className="ptitle">Optimization</h3>
                <p className="pdesc">Continuously improve based on performance. The platform evaluates outcomes, identifies gaps, and suggests what needs to change — enabling ongoing refinement and better results over time.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
