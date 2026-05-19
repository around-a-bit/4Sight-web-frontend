import { useState } from 'react';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="slide" id="slide-7">
      <div className="container">
        <div className="faq-scroll">
          <div className="faq-intro">
            <span className="slide-eyebrow">Frequently Asked Questions</span>
            <h2>Quick Answers for <em>Clear Decisions</em></h2>
            <p>Quick answers to help you understand how Marketing 4Sight works and how it fits your workflow.</p>
          </div>

          <div className="faq-list">
            <div className={`faq-item cursor-pointer`} onClick={() => setOpenFaq(openFaq === 0 ? -1 : 0)}>
              <div className="faq-header flex justify-between items-center p-4">
                <div className="flex items-center gap-3">
                  <span className="faq-num">01</span>
                  <strong className="text-sm font-semibold">What exactly does Marketing 4Sight do?</strong>
                </div>
                <span className="faq-toggle">{openFaq === 0 ? '−' : '+'}</span>
              </div>
              <div className={`faq-answer transition-all duration-300 overflow-hidden ${openFaq === 0 ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p>Marketing 4Sight structures your entire marketing into one connected system. It defines direction, translates it into clear actions, ensures execution is consistent, and continuously improves performance based on real outcomes. This keeps all efforts aligned, visible, and measurable in one place.</p>
              </div>
            </div>

            <div className={`faq-item cursor-pointer`} onClick={() => setOpenFaq(openFaq === 1 ? -1 : 1)}>
              <div className="faq-header flex justify-between items-center p-4">
                <div className="flex items-center gap-3">
                  <span className="faq-num">02</span>
                  <strong className="text-sm font-semibold">How is this different from using separate tools for SEO, content, and ads?</strong>
                </div>
                <span className="faq-toggle">{openFaq === 1 ? '−' : '+'}</span>
              </div>
              <div className={`faq-answer transition-all duration-300 overflow-hidden ${openFaq === 1 ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p>Most tools operate in silos. Marketing 4Sight connects strategy, execution, and performance across all marketing activities, ensuring decisions are aligned and outcomes are clearly visible in one place.</p>
              </div>
            </div>

            <div className={`faq-item cursor-pointer`} onClick={() => setOpenFaq(openFaq === 2 ? -1 : 2)}>
              <div className="faq-header flex justify-between items-center p-4">
                <div className="flex items-center gap-3">
                  <span className="faq-num">03</span>
                  <strong className="text-sm font-semibold">Do I need a large team or technical expertise to use this platform?</strong>
                </div>
                <span className="faq-toggle">{openFaq === 2 ? '−' : '+'}</span>
              </div>
              <div className={`faq-answer transition-all duration-300 overflow-hidden ${openFaq === 2 ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p>No. The platform is designed to simplify decision-making and execution, so both small teams and experienced professionals can manage marketing effectively without complex setup or technical dependency.</p>
              </div>
            </div>

            <div className={`faq-item cursor-pointer`} onClick={() => setOpenFaq(openFaq === 3 ? -1 : 3)}>
              <div className="faq-header flex justify-between items-center p-4">
                <div className="flex items-center gap-3">
                  <span className="faq-num">04</span>
                  <strong className="text-sm font-semibold">Can I track real business outcomes, not just marketing metrics?</strong>
                </div>
                <span className="faq-toggle">{openFaq === 3 ? '−' : '+'}</span>
              </div>
              <div className={`faq-answer transition-all duration-300 overflow-hidden ${openFaq === 3 ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p>Yes. Marketing 4Sight focuses on meaningful outcomes - visibility, engagement, actions, and conversions - so you can understand what is actually driving results, not just surface-level metrics.</p>
              </div>
            </div>

            <div className={`faq-item cursor-pointer`} onClick={() => setOpenFaq(openFaq === 4 ? -1 : 4)}>
              <div className="faq-header flex justify-between items-center p-4">
                <div className="flex items-center gap-3">
                  <span className="faq-num">05</span>
                  <strong className="text-sm font-semibold">Who is Marketing 4Sight best suited for?</strong>
                </div>
                <span className="faq-toggle">{openFaq === 4 ? '−' : '+'}</span>
              </div>
              <div className={`faq-answer transition-all duration-300 overflow-hidden ${openFaq === 4 ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p>Marketing 4Sight is built for businesses managing multiple marketing activities, channels, or teams and looking for clarity in direction and execution. It aligns actions to your specific goals and context, so everything works as one connected system rather than in silos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
