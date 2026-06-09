import React from "react";
import dashboardImage from "../assets/screenshorts/product-screenshots/dashboard.png";
const ICP1 = () => {
  return (
    <div className="backgroupnd_color bodyText">
      {" "}
      {/* SECTION 2: HERO SECTION */}{" "}
      <section className="relative from-[#E1F5EE]/40 py-20 md:py-32 overflow-hidden">
        {" "}
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          {" "}
          <span className="inline-flex items-center py-1.5 px-3 rounded-full primary_bg text-white text-xs font-semibold tracking-wider uppercase mb-6">
            {" "}
            Built For Solo Operators & Small Businesses{" "}
          </span>{" "}
          <h1 className="text-4xl md:text-6xl heading1 text_color tracking-tight mb-8 leading-tight">
            {" "}
            Run your entire marketing yourself. <br />
            <span className="secondary_color">
              No agency. No confusion.
            </span>{" "}
          </h1>{" "}
          <p className="text-lg md:text-xl text_color opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {" "}
            Marketing 4SIGHT monitors your performance, builds your plan, and
            tells you exactly what to do next — so you stay in control without
            the complexity.{" "}
          </p>{" "}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {" "}
            <a
              href="mailto:contact@quantyraanalytics.com"
              className="w-full sm:w-auto primary_bg text-white px-8 py-4 rounded-xl font-semibold hover:secondary_bg transition shadow-xl shadow-md text-center"
            >
              {" "}
              Book a Free Demo{" "}
            </a>{" "}
            <a
              href="#how-it-works"
              className="w-full sm:w-auto bg-white border border-[var(--line)] text_color opacity-80 px-8 py-4 rounded-xl font-semibold hover:backgroupnd_color transition text-center"
            >
              {" "}
              See how it works{" "}
            </a>{" "}
          </div>{" "}
          {/* Interactive Visual Mockup */}{" "}
          <div className="mt-16 border border-[var(--line-soft)] rounded-2xl bg-white p-2 shadow-2xl max-w-3xl hover:scale-103 hover:border-2 hover:border-blue-800 transition-all duration-300 mx-auto">
            {" "}
            <div className="backgroupnd_color rounded-xl overflow-hidden border border-[var(--line)]">
              {" "}
              <img src={dashboardImage} alt="Marketing 4SIGHT Unified Dashboard" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition duration-200" />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* SECTION 3: PAIN POINT SECTION */}{" "}
      <section className="py-24 bg-white border-t border-[var(--line-soft)]">
        {" "}
        <div className="max-w-6xl mx-auto px-6">
          {" "}
          <div className="text-center max-w-2xl mx-auto mb-16">
            {" "}
            <h2 className="text-3xl md:text-4xl heading2 text_color">
              Sound familiar?
            </h2>{" "}
            <p className="text_color opacity-90 text-semiboldz mt-4">
              Running a business is hard enough. Managing your marketing
              shouldn't feel impossible.
            </p>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 font-semibold text-2xl gap-6">
            {" "}
            {/* Card 1 */}{" "}
            <div className="p-6 backgroupnd_color rounded-2xl border border-[var(--line-soft)] group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="text-2xl mb-4 secondary_color group-hover:scale-110 transition-transform duration-300 inline-block">🛠️</div>{" "}
              <p className="text_color opacity-80 font-medium text-sm leading-relaxed group-hover:!text-[#0859b8] transition-colors duration-300">
                You are using 5 different tools and none of them talk to each
                other
              </p>{" "}
            </div>{" "}
            {/* Card 2 */}{" "}
            <div className="p-6 backgroupnd_color rounded-2xl border border-[var(--line-soft)] group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="text-2xl mb-4 secondary_color group-hover:scale-110 transition-transform duration-300 inline-block">📊</div>{" "}
              <p className="text_color opacity-80 font-medium text-sm leading-relaxed group-hover:!text-[#0859b8] transition-colors duration-300">
                You spend hours checking reports but still don't know what to
                fix
              </p>{" "}
            </div>{" "}
            {/* Card 3 */}{" "}
            <div className="p-6 backgroupnd_color rounded-2xl border border-[var(--line-soft)] group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="text-2xl mb-4 secondary_color group-hover:scale-110 transition-transform duration-300 inline-block">💸</div>{" "}
              <p className="text_color opacity-80 font-medium text-sm leading-relaxed group-hover:!text-[#0859b8] transition-colors duration-300">
                You are spending money on marketing but cannot measure what is
                working
              </p>{" "}
            </div>{" "}
            {/* Card 4 */}{" "}
            <div className="p-6 backgroupnd_color rounded-2xl border border-[var(--line-soft)] group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="text-2xl mb-4 secondary_color group-hover:scale-110 transition-transform duration-300 inline-block">🧭</div>{" "}
              <p className="text_color opacity-80 font-medium text-sm leading-relaxed group-hover:!text-[#0859b8] transition-colors duration-300">
                You know you need a strategy but don't know where to start
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* SECTION 4: HOW 4SIGHT SOLVES IT */}{" "}
      <section className="py-24 backgroupnd_color border-t border-[var(--line-soft)]">
        {" "}
        <div className="max-w-6xl mx-auto px-6">
          {" "}
          <div className="text-center max-w-2xl mx-auto mb-16">
            {" "}
            <h2 className="text-3xl md:text-4xl heading2 text_color">
              Marketing 4SIGHT makes it simple
            </h2>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {" "}
            {/* Benefits List */}{" "}
            <div className="space-y-6">
              {" "}
              <div className="flex gap-4">
                {" "}
                <div className="w-6 h-6 rounded-full primary_bg text-white flex items-center justify-center heading2 text-sm shrink-0">
                  ✓
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="heading2 text_color mb-1">
                    One unified dashboard
                  </h4>{" "}
                  <p className="text_color opacity-60 text-sm">
                    See everything in one place, no switching between tools.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex gap-4">
                {" "}
                <div className="w-6 h-6 rounded-full primary_bg text-white flex items-center justify-center heading2 text-sm shrink-0">
                  ✓
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="heading2 text_color mb-1">
                    Automatic monitoring
                  </h4>{" "}
                  <p className="text_color opacity-60 text-sm">
                    The platform tracks your performance for you, 24/7.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex gap-4">
                {" "}
                <div className="w-6 h-6 rounded-full primary_bg text-white flex items-center justify-center heading2 text-sm shrink-0">
                  ✓
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="heading2 text_color mb-1">
                    Clear next steps
                  </h4>{" "}
                  <p className="text_color opacity-60 text-sm">
                    4SIGHT tells you exactly what action to take, no guesswork.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className="flex gap-4">
                {" "}
                <div className="w-6 h-6 rounded-full primary_bg text-white flex items-center justify-center heading2 text-sm shrink-0">
                  ✓
                </div>{" "}
                <div>
                  {" "}
                  <h4 className="heading2 text_color mb-1">
                    No technical expertise needed
                  </h4>{" "}
                  <p className="text_color opacity-60 text-sm">
                    Built for business owners, not data scientists.
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            {/* Visual Box: Chaos vs Clarity */}{" "}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {" "}
              <div className="p-6 bg-white border border-[var(--line-soft)] rounded-2xl shadow-sm text-center">
                {" "}
                <span className="text-xs heading2 secondary_color uppercase tracking-wider">
                  Before 4SIGHT
                </span>{" "}
                <div className="text-3xl my-4">🌀</div>{" "}
                <p className="text-sm text_color opacity-80 font-medium">
                  Pure chaos. Disconnected data, guesswork, and wasted ad spend.
                </p>{" "}
              </div>{" "}
              <div className="p-6 primary_bg border border-gray-200/20 rounded-2xl shadow-sm text-center">
                {" "}
                <span className="text-xs heading2 text-white uppercase tracking-wider">
                  After 4SIGHT
                </span>{" "}
                <div className="text-3xl my-4">✨</div>{" "}
                <p className="text-sm text-white font-medium opacity-90">
                  Absolute clarity. Automated mapping, strategic focus, and
                  business control.
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* SECTION 5: HOW IT WORKS — 3 SIMPLE STEPS */}{" "}
      <section
        id="how-it-works"
        className="py-24 bg-white border-t border-[var(--line-soft)]"
      >
        {" "}
        <div className="max-w-6xl mx-auto px-6">
          {" "}
          <div className="text-center max-w-2xl mx-auto mb-16">
            {" "}
            <h2 className="text-3xl md:text-4xl heading2 text_color">
              Get started in 3 simple steps
            </h2>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {" "}
            {/* Step 1 */}{" "}
            <div className="text-center p-6 bg-white border border-[var(--line-soft)] rounded-2xl group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="w-12 h-12 primary_bg text-white rounded-full flex items-center justify-center heading2 text-lg mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                1
              </div>{" "}
              <h3 className="text-xl heading2 mb-3 group-hover:!text-[#0859b8] transition-colors duration-300">Set business context</h3>{" "}
              <p className="text_color opacity-60 text-sm leading-relaxed">
                Add your goals and priorities in minutes.
              </p>{" "}
            </div>{" "}
            {/* Step 2 */}{" "}
            <div className="text-center p-6 bg-white border border-[var(--line-soft)] rounded-2xl group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="w-12 h-12 primary_bg text-white rounded-full flex items-center justify-center heading2 text-lg mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                2
              </div>{" "}
              <h3 className="text-xl heading2 mb-3 group-hover:!text-[#0859b8] transition-colors duration-300">
                Get your structured plan
              </h3>{" "}
              <p className="text_color opacity-60 text-sm leading-relaxed">
                4SIGHT builds your strategy and action steps automatically.
              </p>{" "}
            </div>{" "}
            {/* Step 3 */}{" "}
            <div className="text-center p-6 bg-white border border-[var(--line-soft)] rounded-2xl group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="w-12 h-12 primary_bg text-white rounded-full flex items-center justify-center heading2 text-lg mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                3
              </div>{" "}
              <h3 className="text-xl heading2 mb-3 group-hover:!text-[#0859b8] transition-colors duration-300">
                Execute & stay in control
              </h3>{" "}
              <p className="text_color opacity-60 text-sm leading-relaxed">
                Run your marketing with full visibility and tracking.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* SECTION 6: KEY FEATURES */}{" "}
      <section
        id="features"
        className="py-24 backgroupnd_color border-t border-[var(--line-soft)]"
      >
        {" "}
        <div className="max-w-6xl mx-auto px-6">
          {" "}
          <div className="text-center max-w-2xl mx-auto mb-16">
            {" "}
            <h2 className="text-3xl md:text-4xl heading2 text_color">
              Everything you need. Nothing you don't.
            </h2>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            {/* Feature 1 */}{" "}
            <div className="group bg-white p-8 rounded-2xl border border-[var(--line-soft)] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[var(--violet)]">
              {" "}
              <h4 className="heading2 text-lg secondary_color group-hover:!text-[var(--violet)] transition-colors duration-300 mb-2">
                Unified Overview Dashboard
              </h4>{" "}
              <p className="text_color opacity-100 text-sm leading-relaxed">
                Priority visibility and gap identification to fix leaking
                funnels fast.
              </p>{" "}
            </div>{" "}
            {/* Feature 2 */}{" "}
            <div className="group bg-white p-8 rounded-2xl border border-[var(--line-soft)] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[var(--violet)]">
              {" "}
              <h4 className="heading2 text-lg secondary_color group-hover:!text-[var(--violet)] transition-colors duration-300 mb-2">
                Automated Alerts & Updates
              </h4>{" "}
              <p className="text_color opacity-100 text-sm leading-relaxed">
                Always know exactly what channels or assets need active
                management attention.
              </p>{" "}
            </div>{" "}
            {/* Feature 3 */}{" "}
            <div className="group bg-white p-8 rounded-2xl border border-[var(--line-soft)] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[var(--violet)]">
              {" "}
              <h4 className="heading2 text-lg secondary_color group-hover:!text-[var(--violet)] transition-colors duration-300 mb-2">
                Structured Action Plan
              </h4>{" "}
              <p className="text_color opacity-100 text-sm leading-relaxed">
                Clear next steps generated automatically by the platform engine
                framework.
              </p>{" "}
            </div>{" "}
            {/* Feature 4 */}{" "}
            <div className="group bg-white p-8 rounded-2xl border border-[var(--line-soft)] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[var(--violet)]">
              {" "}
              <h4 className="heading2 text-lg secondary_color group-hover:!text-[var(--violet)] transition-colors duration-300 mb-2">
                Local SEO & GMB Tracking
              </h4>{" "}
              <p className="text_color opacity-100 text-sm leading-relaxed">
                Manage and measure your physical and local visibility parameters
                easily.
              </p>{" "}
            </div>{" "}
            {/* Feature 5 */}{" "}
            <div className="group bg-white p-8 rounded-2xl border border-[var(--line-soft)] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[var(--violet)]">
              {" "}
              <h4 className="heading2 text-lg secondary_color group-hover:!text-[var(--violet)] transition-colors duration-300 mb-2">
                Content Operations
              </h4>{" "}
              <p className="text_color opacity-100 text-sm leading-relaxed">
                Campaign-aligned asset planning and social flows mapping
                directly to targets.
              </p>{" "}
            </div>{" "}
            {/* Feature 6 */}{" "}
            <div className="group bg-white p-8 rounded-2xl border border-[var(--line-soft)] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[var(--violet)]">
              {" "}
              <h4 className="heading2 text-lg secondary_color group-hover:!text-[var(--violet)] transition-colors duration-300 mb-2">
                Performance Reporting
              </h4>{" "}
              <p className="text_color opacity-100 text-sm leading-relaxed">
                Automated, boardroom-ready reports delivered directly to your inbox with zero manual effort.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* SECTION 7: CLIENT TESTIMONIALS */}{" "}
      <section
        id="testimonials"
        className="py-24 bg-white border-t border-[var(--line-soft)]"
      >
        {" "}
        <div className="max-w-5xl mx-auto px-6">
          {" "}
          <div className="text-center max-w-2xl mx-auto mb-16">
            {" "}
            <h2 className="text-3xl md:text-4xl heading2 text_color">
              Businesses already running their own marketing with 4SIGHT
            </h2>{" "}
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {" "}
            {/* Testimonial 1 */}{" "}
            <div className="p-8 rounded-2xl backgroupnd_color border border-[var(--line-soft)] flex flex-col justify-between group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <p className="text_color opacity-60 italic text-sm leading-relaxed mb-6">
                {" "}
                "As a beta customer, we've drastically improved our brand
                presence using the continuous, highly optimized strategic inputs
                directly from the platform workspace."{" "}
              </p>{" "}
              <div>
                {" "}
                <h5 className="heading2 text_color text-sm group-hover:!text-[#0859b8] transition-colors duration-300">
                  Jagannath Thakur
                </h5>{" "}
                <p className="text-xs secondary_color font-medium">
                  Founder, enpropeL
                </p>{" "}
              </div>{" "}
            </div>{" "}
            {/* Testimonial 2 */}{" "}
            <div className="p-8 rounded-2xl backgroupnd_color border border-[var(--line-soft)] flex flex-col justify-between group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <p className="text_color opacity-60 italic text-sm leading-relaxed mb-6">
                {" "}
                "The monitoring dashboard allowed us to instantly identify
                structural blind spots and address them with absolute
                data-driven decision making."{" "}
              </p>{" "}
              <div>
                {" "}
                <h5 className="heading2 text_color text-sm group-hover:!text-[#0859b8] transition-colors duration-300">
                  Nilagrib Mondal
                </h5>{" "}
                <p className="text-xs secondary_color font-medium">
                  Marketing Head, Excel Home Decor
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* SECTION 8: FINAL CTA SECTION */}{" "}
      <section className="py-24 primary_bg text-white border-t border-b border-gray-200/10 text-center">
        {" "}
        <div className="max-w-4xl mx-auto px-6">
          {" "}
          <h2 className="text-3xl md:text-5xl heading1 text-white tracking-tight mb-6">
            {" "}
            Ready to take full control of your marketing?{" "}
          </h2>{" "}
          <p className="text-base md:text-lg text-white opacity-80 mb-10 max-w-2xl mx-auto">
            {" "}
            Join businesses already using Marketing 4SIGHT to manage their
            marketing with absolute clarity and operational confidence.{" "}
          </p>{" "}
          <a
            href="mailto:contact@quantyraanalytics.com"
            className="inline-block bg-white text-[var(--violet)] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition shadow-xl text-center mb-8"
          >
            {" "}
            Book a Free Demo{" "}
          </a>{" "}
          {/* Contact Details */}{" "}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-white opacity-80 font-medium border-t border-white/20 pt-6">
            {" "}
            <span>📞 +91 98300 50939</span>{" "}
            <span className="hidden sm:inline">•</span>{" "}
            <span>✉️ contact@quantyraanalytics.com</span>{" "}
          </div>{" "}
          <div className="mt-4 text-xs text-white opacity-60">
            83 S.P. Mukherjee Road, Hazra, Kolkata — 700026
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* SECTION 9: FOOTER */}{" "}
    </div>
  );
};
export default ICP1;
