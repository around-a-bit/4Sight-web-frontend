export default function Walkthrough() {
  return (
    <section className="slide" id="slide-6">
      <div className="container">
        <div className="action-scroll">
          <div className="action-copy">
            <span className="slide-eyebrow">In action</span>
            <h2>See Marketing 4Sight <em>in Action</em></h2>
            <p className="action-lede">A quick walkthrough of how marketing moves from inputs to structured execution and measurable outcomes.</p>

            <div className="action-steps">
              <article className="action-step">
                <span className="step-num">01</span>
                <div>
                  <h3>Set your context</h3>
                  <p>Add your business inputs and priorities.</p>
                </div>
              </article>

              <article className="action-step">
                <span className="step-num">02</span>
                <div>
                  <h3>Get structured direction</h3>
                  <p>Get strategy, prioritized actions, and adapt based on performance and market signals.</p>
                </div>
              </article>

              <article className="action-step">
                <span className="step-num">03</span>
                <div>
                  <h3>Execute and stay in control</h3>
                  <p>Run activities with full visibility, consistency, and ongoing tracking.</p>
                </div>
              </article>
            </div>
          </div>

          <div className="action-video" aria-label="Marketing 4Sight walkthrough video placeholder">
            <div className="video-core">
              <button className="play-button" type="button" aria-label="Play Marketing 4Sight walkthrough video">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <strong>4Sight Walkthrough Video</strong>
              <span>Inputs, structured direction, execution visibility, and measurable outcomes.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
