export default function Hero({ scrollToSlide }) {
  return (
    <section className="slide" id="slide-1">
      <div className="container">
        <div className="hero">
          <div className="eyebrow"><span className="dot"></span> Powered by the SIGO framework</div>
          <h1 className="headline">
            <span>Marketing 4Sight.</span>
            <span className="grad">The Data-Driven Marketing OS.</span>
          </h1>
          <p className="lede">
            A structured system to plan, execute, track, and optimize marketing — in one place.
            Where Strategy, Execution, and Performance are connected, not fragmented.
          </p>
          <p className="sub">
            Marketing 4Sight brings together all marketing touchpoints into a single platform,
            powered by data and guided by the <span className="sigo">SIGO framework</span> — so teams
            move with <b>clarity</b> and act with <b>precision</b>.
          </p>
        </div>

        <div className="cards">
          <article className="card">
            <div className="ico">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.5" y2="16.5" />
              </svg>
            </div>
            <h3>SEO Manager</h3>
            <p>Builds and tracks your keyword universe with clear ranking and growth visibility.</p>
          </article>
          <article className="card">
            <div className="ico">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
            <h3>GMB Manager</h3>
            <p>Optimizes your local presence with structured actions, insights, and performance tracking.</p>
          </article>
          <article className="card">
            <div className="ico">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
                <path d="M8 13h8" />
                <path d="M8 17h6" />
              </svg>
            </div>
            <h3>Content Manager</h3>
            <p>Plans and executes content aligned to keywords, intent, and business goals.</p>
          </article>
          <article className="card">
            <div className="ico">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 4h18l-7 9v6l-4 2v-8z" />
              </svg>
            </div>
            <h3>Funnel Manager</h3>
            <p>Maps and improves conversion journeys across user touchpoints.</p>
          </article>
          <article className="card">
            <div className="ico">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z" />
                <path d="M15 8a4 4 0 0 1 0 8" />
                <path d="M18 5a8 8 0 0 1 0 14" />
              </svg>
            </div>
            <h3>Media Manager</h3>
            <p>Tracks paid performance and aligns it with overall marketing outcomes.</p>
          </article>
        </div>

        <p className="result">
          The result: <b>clear strategy</b>, <b>structured execution</b>, <b>measurable performance</b>, and <b>continuous optimization</b> — all in one unified marketing system.
        </p>

        <div className="cta-wrap">
          <button className="btn-cta" onClick={() => scrollToSlide(7)}>
            Book a demo
            <svg className="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>

      <div className="scroll-hint" onClick={() => scrollToSlide(1)} role="button" tabIndex={0}>
        <span className="chev">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </div>
    </section>
  );
}
