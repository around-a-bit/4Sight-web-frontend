import React from "react";
import setupUI from "../assets/screenshorts/HomePageImages/actionPlan.png";
import strategyUI from "../assets/screenshorts/HomePageImages/Strategy Overview_icp3.png";
import dashboardUI from "../assets/screenshorts/product-screenshots/dashboard_icp3.png";
import inhouseDashboard from "../assets/screenshorts/product-screenshots/inhouse_marketing_dashboard.png";
import setContext from "../assets/1st.jpeg"
import getStructuredPlan from "../assets/2nd.jpeg"
import executeWithVisibility from "../assets/3rd.jpeg"
const ICP3 = () => {
  return (
    <div className="backgroupnd_color bodyText">
      {" "}
      {/* 2. HERO SECTION */}{" "}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-brand-light overflow-hidden">
        {" "}
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          {" "}
          <span className="inline-block py-1.5 px-4 rounded-full primary_bg text-white text-xs heading2 tracking-wider uppercase mb-6 border border-white">
            {" "}
            Take Your Marketing In-House{" "}
          </span>{" "}
          <h1 className="text-5xl md:text-7xl heading1 text_color tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
            {" "}
            Stop depending on agencies. <br />{" "}
            <span className="secondary_color">
              Take full control of your marketing.
            </span>{" "}
          </h1>{" "}
          <p className="text-lg md:text-xl text_color opacity-100 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
            {" "}
            Marketing 4SIGHT gives you the same strategic power as a
            full-service agency — at a fraction of the cost. Your data, your
            decisions, your results.{" "}
          </p>{" "}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-20">
            {" "}
            <a
              href="mailto:contact@quantyraanalytics.com"
              className="w-full sm:w-auto secondary_bg text-white text-white px-8 py-4 rounded-xl heading2 hover:accent_color transition shadow-xl shadow-md text-center text-lg"
            >
              {" "}
              Book a Free Demo{" "}
            </a>{" "}
            <a
              href="#comparison"
              className="w-full sm:w-auto bg-white border border-[var(--line)] text_color px-8 py-4 rounded-xl heading2 hover:backgroupnd_color transition text-center text-lg"
            >
              {" "}
              See how it replaces your agency{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}

      {/* 2.1 DASHBOARD SHOWCASE SECTION */}{" "}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Text Content */}
          <div className="flex-1 text-left">
            <h2 className="text-3xl md:text-4xl heading1 text_color mb-6 leading-tight">
              Your Complete Marketing Command Center
            </h2>
            <p className="text-lg text_color opacity-80 leading-relaxed font-medium mb-8">
              Get a high-level view of your entire marketing performance. Track campaigns, monitor KPIs, and optimize your strategy from a single, intuitive dashboard designed specifically for in-house teams.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold mt-0.5">✓</span>
                <span className="text_color opacity-90 font-medium">Real-time performance tracking across all channels</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold mt-0.5">✓</span>
                <span className="text_color opacity-90 font-medium">Automated insights and optimization recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold mt-0.5">✓</span>
                <span className="text_color opacity-90 font-medium">Comprehensive reporting without the manual effort</span>
              </li>
            </ul>
          </div>
          {/* Right Image Content */}
          <div className="flex-1 w-full">
            <div className="border border-[var(--line-soft)] rounded-2xl bg-white p-2 shadow-2xl hover:scale-[1.02] hover:border-[var(--violet)] transition-all duration-300 relative group cursor-default">
              <div className="backgroupnd_color rounded-xl overflow-hidden border border-[var(--line)] relative z-10">
                <img src={inhouseDashboard} alt="In-House Marketing Dashboard" className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition duration-500" />
              </div>
              {/* Decorative background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl -z-10 opacity-50 blur-2xl group-hover:opacity-70 transition duration-500"></div>
            </div>
          </div>
        </div>
      </section>{" "}

      {/* 3. PAIN POINTS: THE DEPENDENCY TRAP */}{" "}
      <section id="why" className="py-24 bg-white">
        {" "}
        <div className="max-w-7xl mx-auto px-6">
          {" "}
          <h2 className="text-3xl md:text-4xl heading1 text_color mb-16 text-center">
            Does this sound like your current situation?
          </h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {" "}
            {/* Point 1 */}{" "}
            <div className="backgroupnd_color p-8 rounded-2xl border border-[var(--line-soft)] group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="accent_color heading1 text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">💸</div>{" "}
              <h4 className="heading2 text-xl text_color mb-2 group-hover:!text-[#0859b8] transition-colors duration-300">
                The Retainer Black Hole
              </h4>{" "}
              <p className="text_color opacity-100 font-medium text-sm leading-relaxed">
                You are paying a high monthly retainer but you cannot clearly
                see what the agency is actually doing for you.
              </p>{" "}
            </div>{" "}
            {/* Point 2 */}{" "}
            <div className="backgroupnd_color p-8 rounded-2xl border border-[var(--line-soft)] group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="accent_color heading1 text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">🔒</div>{" "}
              <h4 className="heading2 text-xl text_color mb-2 group-hover:!text-[#0859b8] transition-colors duration-300">
                Zero Marketing Control
              </h4>{" "}
              <p className="text_color opacity-100 font-medium text-sm leading-relaxed">
                Every decision — content, ads, SEO — has to go through the
                agency. You don't own the process.
              </p>{" "}
            </div>{" "}
            {/* Point 3 */}{" "}
            <div className="backgroupnd_color p-8 rounded-2xl border border-[var(--line-soft)] group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="accent_color heading1 text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">📉</div>{" "}
              <h4 className="heading2 text-xl text_color mb-2 group-hover:!text-[#0859b8] transition-colors duration-300">Vanity Metrics</h4>{" "}
              <p className="text_color opacity-100 font-medium text-sm leading-relaxed">
                The agency sends you reports full of numbers but none of it
                tells you whether your business is actually growing.
              </p>{" "}
            </div>{" "}
            {/* Point 4 */}{" "}
            <div className="backgroupnd_color p-8 rounded-2xl border border-[var(--line-soft)] group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="accent_color heading1 text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">⏳</div>{" "}
              <h4 className="heading2 text-xl text_color mb-2 group-hover:!text-[#0859b8] transition-colors duration-300">Moving Too Slow</h4>{" "}
              <p className="text_color opacity-100 font-medium text-sm leading-relaxed">
                You cannot move fast — every single change takes days or weeks
                because the agency controls the timeline.
              </p>{" "}
            </div>{" "}
            {/* Point 5 */}{" "}
            <div className="backgroupnd_color p-8 rounded-2xl border border-[var(--line-soft)] hover-lift group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="accent_color heading1 text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">🧠</div>{" "}
              <h4 className="heading2 text-xl text_color mb-2 group-hover:!text-[#0859b8] transition-colors duration-300">Knowledge Hostage</h4>{" "}
              <p className="text_color opacity-100 font-medium text-sm leading-relaxed">
                If the agency relationship ends tomorrow, your entire marketing
                falls apart because all the knowledge is with them.
              </p>{" "}
            </div>{" "}
            {/* Point 6 */}{" "}
            <div className="backgroupnd_color p-8 rounded-2xl border border-[var(--line-soft)] hover-lift group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="accent_color heading1 text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">📋</div>{" "}
              <h4 className="heading2 text-xl text_color mb-2 group-hover:!text-[#0859b8] transition-colors duration-300">Cookie-Cutter Campaigns</h4>{" "}
              <p className="text_color opacity-100 font-medium text-sm leading-relaxed">
                You receive the exact same templated strategy they give to all their other clients, not something tailored to you.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 4. COMPARISON: AGENCY VS 4SIGHT */}{" "}
      <section
        id="comparison"
        className="py-24 primary_bg text-white text-white relative overflow-hidden"
      >
        {" "}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:24px_24px]"></div>{" "}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {" "}
          <h2 className="text-3xl md:text-5xl heading1 mb-16 text-center">
            The Direct Comparison
          </h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 max-w-5xl mx-auto">
            {" "}
            {/* Agency Side */}{" "}
            <div className="bg-black/20 border border-white/10 p-8 md:p-12 md:rounded-l-3xl rounded-3xl md:rounded-r-none backdrop-blur-md shadow-inner transition-transform duration-500 hover:scale-105 hover:z-20 relative">
              {" "}
              <h3 className="text-2xl heading2 secondary_color mb-8 flex items-center gap-3">
                {" "}
                <span className="secondary_bg bg-opacity-20 secondary_color p-2 rounded-lg text-sm">
                  ✕
                </span>{" "}
                Traditional Agency{" "}
              </h3>{" "}
              <ul className="space-y-6 text-white opacity-100 font-medium">
                {" "}
                <li className="flex items-start gap-3">
                  <span className="secondary_color heading2 mt-0.5">•</span> High
                  monthly retainer — fixed cost regardless of results.
                </li>{" "}
                <li className="flex items-start gap-3">
                  <span className="secondary_color heading2 mt-0.5">•</span> No
                  visibility into daily activities.
                </li>{" "}
                <li className="flex items-start gap-3">
                  <span className="secondary_color heading2 mt-0.5">•</span> You
                  depend on their reports to understand your own marketing.
                </li>{" "}
                <li className="flex items-start gap-3">
                  <span className="secondary_color heading2 mt-0.5">•</span> Slow
                  to pivot — every change needs approval and time.
                </li>{" "}
                <li className="flex items-start gap-3">
                  <span className="secondary_color heading2 mt-0.5">•</span> All
                  marketing knowledge stays with the agency.
                </li>{" "}
                <li className="flex items-start gap-3">
                  <span className="secondary_color heading2 mt-0.5">•</span>{" "}
                  Generic strategy not built around your specific business.
                </li>{" "}
              </ul>{" "}
            </div>{" "}
            {/* 4SIGHT Side */}{" "}
            <div className="secondary_bg p-8 md:p-12 md:rounded-r-3xl rounded-3xl md:rounded-l-none shadow-2xl border border-white transition-transform duration-500 hover:scale-105 hover:z-20 relative z-10">
              {" "}
              <h3 className="text-2xl heading2 text-white mb-8 flex items-center gap-3">
                {" "}
                <span className="bg-white/20 text-white p-2 rounded-lg text-sm">
                  ✓
                </span>{" "}
                Marketing 4SIGHT{" "}
              </h3>{" "}
              <ul className="space-y-6 text-white font-medium">
                {" "}
                <li className="flex items-start gap-3">
                  <span className="text-white heading2 mt-0.5">✓</span>{" "}
                  Structured platform cost — pay for results not retainers.
                </li>{" "}
                <li className="flex items-start gap-3">
                  <span className="text-white heading2 mt-0.5">✓</span> Full
                  visibility — see everything happening in real time.
                </li>{" "}
                <li className="flex items-start gap-3">
                  <span className="text-white heading2 mt-0.5">✓</span> Your own
                  dashboard shows exactly what is working.
                </li>{" "}
                <li className="flex items-start gap-3">
                  <span className="text-white heading2 mt-0.5">✓</span> Move
                  fast — make decisions and execute instantly.
                </li>{" "}
                <li className="flex items-start gap-3">
                  <span className="text-white heading2 mt-0.5">✓</span> All
                  marketing intelligence stays with your business.
                </li>{" "}
                <li className="flex items-start gap-3">
                  <span className="text-white heading2 mt-0.5">✓</span> SIGO
                  framework builds strategy around your specific goals.
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
          <div className="text-center mt-16">
            {" "}
            <a
              href="mailto:contact@quantyraanalytics.com"
              className="inline-block bg-white text_color px-10 py-4 rounded-xl heading2 hover:backgroupnd_color transition shadow-xl text-lg"
            >
              {" "}
              See the difference for yourself — Book a Demo{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 5. SIGO FRAMEWORK */}{" "}
      <section className="py-24 bg-brand-light border-b border-[var(--line)]">
        {" "}
        <div className="max-w-7xl mx-auto px-6 text-center">
          {" "}
          <h2 className="text-3xl md:text-4xl heading1 text_color mb-6 max-w-3xl mx-auto leading-tight">
            {" "}
            Marketing 4SIGHT replaces your agency with something better — a
            structured system you own.{" "}
          </h2>{" "}
          <p className="text_color opacity-100 mb-16">
            The SIGO Framework: Your in-house marketing system.
          </p>{" "}
          <div className="flex flex-col lg:flex-row gap-6 relative">
            {" "}
            {/* Connectors (Desktop) */}{" "}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 accent_color bg-opacity-20 -translate-y-1/2 z-0"></div>{" "}
            {/* Cards */}{" "}
            <div className="group relative z-10 flex-1 bg-white border border-[var(--line)] p-8 rounded-2xl shadow-sm text-left transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[var(--violet)] hover:-translate-y-2">
              {" "}
              <span className="secondary_color heading2 text-sm tracking-widest uppercase mb-2 block">
                Step 1
              </span>{" "}
              <h3 className="text-xl heading2 text_color group-hover:!text-[var(--violet)] transition-colors duration-300 mb-3">Strategy</h3>{" "}
              <p className="text_color opacity-100 text-sm leading-relaxed">
                Define your own goals and priorities — no more waiting for the
                agency to tell you what to do.
              </p>{" "}
            </div>{" "}
            <div className="group relative z-10 flex-1 bg-white border border-[var(--line)] p-8 rounded-2xl shadow-sm text-left transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[var(--violet)] hover:-translate-y-2">
              {" "}
              <span className="secondary_color heading2 text-sm tracking-widest uppercase mb-2 block">
                Step 2
              </span>{" "}
              <h3 className="text-xl heading2 text_color group-hover:!text-[var(--violet)] transition-colors duration-300 mb-3">
                Implementation
              </h3>{" "}
              <p className="text_color opacity-100 text-sm leading-relaxed">
                Turn your strategy into structured tasks — execute with clarity
                across all channels.
              </p>{" "}
            </div>{" "}
            <div className="group relative z-10 flex-1 bg-white border border-[var(--line)] p-8 rounded-2xl shadow-sm text-left transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[var(--violet)] hover:-translate-y-2">
              {" "}
              <span className="secondary_color heading2 text-sm tracking-widest uppercase mb-2 block">
                Step 3
              </span>{" "}
              <h3 className="text-xl heading2 text_color group-hover:!text-[var(--violet)] transition-colors duration-300 mb-3">Governance</h3>{" "}
              <p className="text_color opacity-100 text-sm leading-relaxed">
                Monitor everything yourself — full visibility into every
                marketing activity at all times.
              </p>{" "}
            </div>{" "}
            <div className="group relative z-10 flex-1 bg-white border border-[var(--line)] p-8 rounded-2xl shadow-sm text-left transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[var(--violet)] hover:-translate-y-2">
              {" "}
              <span className="secondary_color heading2 text-sm tracking-widest uppercase mb-2 block">
                Step 4
              </span>{" "}
              <h3 className="text-xl heading2 text_color group-hover:!text-[var(--violet)] transition-colors duration-300 mb-3">Optimization</h3>{" "}
              <p className="text_color opacity-100 text-sm leading-relaxed">
                Improve based on your own performance data — no more relying on
                agency interpretation.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 6. REDUCE DEPENDENCY & 7. FEATURES (Combined for flow) */}{" "}
      <section id="features" className="py-24 bg-white">
        {" "}
        <div className="max-w-7xl mx-auto px-6">
          {" "}
          <div className="text-center mb-16">
            {" "}
            <h2 className="text-3xl md:text-4xl heading1 text_color mb-4">
              Everything your agency does — now in your hands
            </h2>{" "}
            <p className="text_color opacity-100">
              The tools your agency uses are now directly in your control.
            </p>{" "}
          </div>{" "}
          {/* Features Grid */}{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {" "}
            <div className="p-8 backgroupnd_color rounded-2xl border border-[var(--line-soft)] group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                🎯
              </div>{" "}
              <h4 className="heading2 text_color mb-2 group-hover:!text-[#0859b8] transition-colors duration-300">
                Build Your Own Strategy
              </h4>{" "}
              <p className="text_color opacity-100 text-sm">
                Set your own OKRs and priorities. The platform generates a
                structured marketing plan based on your context, no external
                input needed.
              </p>{" "}
            </div>{" "}
            <div className="p-8 backgroupnd_color rounded-2xl border border-[var(--line-soft)] group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                👁️
              </div>{" "}
              <h4 className="heading2 text_color mb-2 group-hover:!text-[#0859b8] transition-colors duration-300">
                Full Visibility Always
              </h4>{" "}
              <p className="text_color opacity-100 text-sm">
                Monitor execution consistency. See every marketing activity,
                track results, and monitor every channel yourself in real time.
              </p>{" "}
            </div>{" "}
            <div className="p-8 backgroupnd_color rounded-2xl border border-[var(--line-soft)] group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                💰
              </div>{" "}
              <h4 className="heading2 text_color mb-2 group-hover:!text-[#0859b8] transition-colors duration-300">Reduce Manpower Cost</h4>{" "}
              <p className="text_color opacity-100 text-sm">
                Automated monitoring and reporting replaces hours of manual
                agency work, putting savings back into your business.
              </p>{" "}
            </div>{" "}
            <div className="p-8 backgroupnd_color rounded-2xl border border-[var(--line-soft)] group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                📊
              </div>{" "}
              <h4 className="heading2 text_color mb-2 group-hover:!text-[#0859b8] transition-colors duration-300">
                Make Your Own Decisions
              </h4>{" "}
              <p className="text_color opacity-100 text-sm">
                Track competitor positioning and visibility. Back your decisions
                with real performance data, not filtered agency reports.
              </p>{" "}
            </div>{" "}
            <div className="p-8 backgroupnd_color rounded-2xl border border-[var(--line-soft)] group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                🚀
              </div>{" "}
              <h4 className="heading2 text_color mb-2 group-hover:!text-[#0859b8] transition-colors duration-300">
                Move At Your Own Speed
              </h4>{" "}
              <p className="text_color opacity-100 text-sm">
                Manage publishing workflows and process orchestration without
                waiting on agency timelines to execute or change direction.
              </p>{" "}
            </div>{" "}
            <div className="p-8 backgroupnd_color rounded-2xl border border-[var(--line-soft)] group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                🌍
              </div>{" "}
              <h4 className="heading2 text_color mb-2 group-hover:!text-[#0859b8] transition-colors duration-300">Drive Organic Growth</h4>{" "}
              <p className="text_color opacity-100 text-sm">
                Run content operations in-house. Manage local SEO, GMB listings,
                and keyword rankings yourself seamlessly.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 8. COST SAVING SECTION (ROI PROOF) */}{" "}
      <section className="py-24 bg-brand-light border-y border-[var(--line)]">
        {" "}
        <div className="max-w-4xl mx-auto px-6 text-center">
          {" "}
          <h2 className="text-3xl md:text-5xl heading1 text_color mb-12">
            How much are you actually spending on your agency?
          </h2>{" "}
          <div className="primary_bg p-8 md:p-12 rounded-3xl shadow-2xl border border-white/10 text-left mb-12 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(8,89,184,0.3)] hover:border-white/20 group cursor-default">
            {" "}
            <ul className="space-y-6">
              {" "}
              <li className="flex gap-4">
                {" "}
                <div className="mt-1 secondary_color heading2 text-lg">−</div>{" "}
                <div>
                  {" "}
                  <strong className="text-white block text-lg mb-1">
                    Monthly Agency Retainer
                  </strong>{" "}
                  <p className="text-blue-50 opacity-100 text-sm leading-relaxed">
                    Strategy, execution, and reporting all bundled at a high,
                    inflexible fixed cost.
                  </p>{" "}
                </div>{" "}
              </li>{" "}
              <li className="flex gap-4">
                {" "}
                <div className="mt-1 secondary_color heading2 text-lg">−</div>{" "}
                <div>
                  {" "}
                  <strong className="text-white block text-lg mb-1">
                    Additional Hourly Charges
                  </strong>{" "}
                  <p className="text-blue-50 opacity-100 text-sm leading-relaxed">
                    Extra billing for every out-of-scope campaign, content
                    piece, or custom report.
                  </p>{" "}
                </div>{" "}
              </li>{" "}
              <li className="flex gap-4 pb-8 border-b border-white/20 group-hover:border-white/30 transition-colors duration-300">
                {" "}
                <div className="mt-1 secondary_color heading2 text-lg">−</div>{" "}
                <div>
                  {" "}
                  <strong className="text-white block text-lg mb-1">
                    The Hidden Cost of Dependency
                  </strong>{" "}
                  <p className="text-blue-50 opacity-100 text-sm leading-relaxed">
                    Slow decisions, missed market opportunities, and zero
                    internal capability building.
                  </p>{" "}
                </div>{" "}
              </li>{" "}
              <li className="flex gap-4 pt-6">
                {" "}
                <div className="mt-1 secondary_color text-2xl drop-shadow-md group-hover:scale-125 transition-transform duration-300">✦</div>{" "}
                <div>
                  {" "}
                  <strong className="text-white text-xl block mb-2">
                    The 4SIGHT Advantage
                  </strong>{" "}
                  <p className="text-blue-50 opacity-100 font-medium leading-relaxed">
                    Marketing 4SIGHT gives you strategy, execution, governance,
                    and optimization — at a structured platform cost that puts
                    the massive savings back into your business.
                  </p>{" "}
                </div>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          <a
            href="mailto:contact@quantyraanalytics.com"
            className="inline-block secondary_bg text-white text-white px-10 py-4 rounded-xl heading2 hover:accent_color transition shadow-lg text-lg"
          >
            {" "}
            Find out how much you can save — Book a Demo{" "}
          </a>{" "}
        </div>{" "}
      </section>{" "}
      {/* 9. HOW IT WORKS: 3 STEPS */}{" "}
      <section className="py-24 bg-white">
        {" "}
        <div className="max-w-6xl mx-auto px-6 text-center">
          {" "}
          <h2 className="text-3xl md:text-4xl heading1 text_color mb-16">
            Switch from agency dependency to full control in 3 steps
          </h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {" "}
            {/* Connector Line */}{" "}
            <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 backgroupnd_color z-0"></div>{" "}
            {/* Steps */}{" "}
            <div className="relative z-10 bg-white">
              {" "}
              <div className="w-12 h-12 primary_bg text-white rounded-full flex items-center justify-center heading2 text-lg mx-auto mb-6 border-4 border-white shadow-sm">
                1
              </div>{" "}
              <h3 className="heading2 text_color mb-2">Set Context</h3>{" "}
              <p className="text_color opacity-100 text-sm mb-6 px-4">
                Add your goals, priorities, and current marketing situation.
              </p>{" "}
              <div className="h-60 backgroupnd_color border border-[var(--line)] rounded-lg flex items-center justify-center overflow-hidden">
                <img src={setContext} alt="Setup UI" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition duration-300" />
              </div>{" "}
            </div>{" "}
            <div className="relative z-10 bg-white">
              {" "}
              <div className="w-12 h-12 primary_bg text-white rounded-full flex items-center justify-center heading2 text-lg mx-auto mb-6 border-4 border-white shadow-sm">
                2
              </div>{" "}
              <h3 className="heading2 text_color mb-2">Get Structured Plan</h3>{" "}
              <p className="text_color opacity-100 text-sm mb-6 px-4">
                4SIGHT generates your own strategy and action steps, no agency
                needed.
              </p>{" "}
              <div className="h-60 backgroupnd_color border border-[var(--line)] rounded-lg flex items-center justify-center overflow-hidden">
                <img src={getStructuredPlan} alt="Strategy UI" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition duration-300" />
              </div>{" "}
            </div>{" "}
            <div className="relative z-10 bg-white">
              {" "}
              <div className="w-12 h-12 secondary_bg text-white text-white rounded-full flex items-center justify-center heading2 text-lg mx-auto mb-6 border-4 border-white shadow-md shadow-md">
                3
              </div>{" "}
              <h3 className="heading2 text_color mb-2">
                Execute with Visibility
              </h3>{" "}
              <p className="text_color opacity-100 text-sm mb-6 px-4">
                Run your marketing in-house with complete control and real-time
                tracking.
              </p>{" "}
              <div className="h-60 backgroupnd_color border border-[var(--line)] rounded-lg flex items-center justify-center overflow-hidden">
                <img src={executeWithVisibility} alt="Dashboard UI" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition duration-300" />
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 10. TESTIMONIALS */}{" "}
      <section
        id="testimonials"
        className="py-24 primary_bg text-white text-white"
      >
        {" "}
        <div className="max-w-7xl mx-auto px-6">
          {" "}
          <h2 className="text-3xl md:text-4xl heading1 mb-16 text-center">
            Businesses that took back control of their marketing
          </h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {" "}
            {/* Highlight Testimonial */}{" "}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl flex flex-col justify-between relative transform md:-translate-y-4 shadow-2xl border-t-4 border-t-secondary_bg hover:-translate-y-5 transition-all duration-300">
              {" "}
              <p className="text-white opacity-100 text-sm leading-relaxed mb-8 italic">
                "Getting onboarded as a beta customer, we received strategic
                inputs from the platform which helped in improving our brand
                presence. We recommend Marketing 4SIGHT to all small and medium
                business owners."
              </p>{" "}
              <div>
                {" "}
                <h5 className="heading2 text-white text-sm">
                  Jagannath Thakur
                </h5>{" "}
                <p className="text-xs secondary_color mt-1 font-semibold">
                  Founder, enpropeL
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              {" "}
              <p className="text-white opacity-100 text-sm leading-relaxed mb-8 italic">
                "The platform is extremely effective in strategizing, governing
                and optimizing marketing processes."
              </p>{" "}
              <div>
                {" "}
                <h5 className="heading2 text-white text-sm">
                  Indranil Mandal
                </h5>{" "}
                <p className="text-xs secondary_color opacity-100 mt-1 font-semibold">
                  Founder, Bombay Local
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl flex flex-col justify-between hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              {" "}
              <p className="text-white opacity-100 text-sm leading-relaxed mb-8 italic">
                "The data-driven decision making framework helped us identify
                blind spots and address them effectively."
              </p>{" "}
              <div>
                {" "}
                <h5 className="heading2 text-white text-sm">
                  Nilagrib Mondal
                </h5>{" "}
                <p className="text-xs secondary_color opacity-100 mt-1 font-semibold">
                  Marketing Head, Excel Home Decor
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 11. FAQ */}{" "}
      <section className="py-24 bg-brand-light border-y border-[var(--line)]">
        {" "}
        <div className="max-w-3xl mx-auto px-6">
          {" "}
          <h2 className="text-3xl heading1 text_color mb-10 text-center">
            Frequently Asked Questions
          </h2>{" "}
          <div className="space-y-4">
            {" "}
            <details className="group bg-white rounded-xl border border-[var(--line)] shadow-sm open:border-brand-orange/50 transition-all">
              {" "}
              <summary className="flex justify-between items-center heading2 cursor-pointer p-6 text_color">
                {" "}
                Do I need a marketing team to use Marketing 4SIGHT?{" "}
                <span className="secondary_color group-open:rotate-180 transition-transform text-xl">
                  ▾
                </span>{" "}
              </summary>{" "}
              <div className="p-6 pt-0 text_color opacity-100 text-sm leading-relaxed">
                {" "}
                No. The platform is designed so that even a small in-house team
                or a single person can manage marketing effectively, replacing
                the heavy lifting an agency would do.{" "}
              </div>{" "}
            </details>{" "}
            <details className="group bg-white rounded-xl border border-[var(--line)] shadow-sm open:border-brand-orange/50 transition-all">
              {" "}
              <summary className="flex justify-between items-center heading2 cursor-pointer p-6 text_color">
                {" "}
                Can 4SIGHT really replace everything my agency does?{" "}
                <span className="secondary_color group-open:rotate-180 transition-transform text-xl">
                  ▾
                </span>{" "}
              </summary>{" "}
              <div className="p-6 pt-0 text_color opacity-100 text-sm leading-relaxed">
                {" "}
                Yes. Strategy planning, execution workflows, content operations,
                SEO, governance, and performance optimization are all built
                directly into the platform.{" "}
              </div>{" "}
            </details>{" "}
            <details className="group bg-white rounded-xl border border-[var(--line)] shadow-sm open:border-brand-orange/50 transition-all">
              {" "}
              <summary className="flex justify-between items-center heading2 cursor-pointer p-6 text_color">
                {" "}
                How long does the transition take?{" "}
                <span className="secondary_color group-open:rotate-180 transition-transform text-xl">
                  ▾
                </span>{" "}
              </summary>{" "}
              <div className="p-6 pt-0 text_color opacity-100 text-sm leading-relaxed">
                {" "}
                You can set your business context and get your very first
                structured action plan generated on day one, making the
                transition seamless.{" "}
              </div>{" "}
            </details>{" "}
            <details className="group bg-white rounded-xl border border-[var(--line)] shadow-sm open:border-brand-orange/50 transition-all">
              {" "}
              <summary className="flex justify-between items-center heading2 cursor-pointer p-6 text_color">
                {" "}
                What if I still want to use an agency for some things?{" "}
                <span className="secondary_color group-open:rotate-180 transition-transform text-xl">
                  ▾
                </span>{" "}
              </summary>{" "}
              <div className="p-6 pt-0 text_color opacity-100 text-sm leading-relaxed">
                {" "}
                4SIGHT works perfectly alongside external support. You retain
                absolute control of the strategy and visibility, while deploying
                agencies only for specific, specialized tasks where needed.{" "}
              </div>{" "}
            </details>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 12. FINAL CTA */}{" "}
      <section className="py-24 primary_bg text-white border-t border-b border-gray-200/10 text-center">
        {" "}
        <div className="max-w-4xl mx-auto px-6">
          {" "}
          <h2 className="text-3xl md:text-5xl heading1 text-white tracking-tight mb-6">
            {" "}
            Ready to stop paying for what you can now do yourself?{" "}
          </h2>{" "}
          <p className="text-base md:text-lg text-white opacity-80 mb-10 max-w-2xl mx-auto">
            {" "}
            Join businesses already using Marketing 4SIGHT to run their
            marketing in-house — with full clarity, control, and
            confidence.{" "}
          </p>{" "}
          <a
            href="mailto:contact@quantyraanalytics.com"
            className="inline-block bg-white text-[var(--violet)] px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition shadow-xl text-center mb-8"
          >
            {" "}
            Book a Free Demo{" "}
          </a>{" "}
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
      {/* 13. FOOTER */}{" "}
    </div>
  );
};
export default ICP3;
