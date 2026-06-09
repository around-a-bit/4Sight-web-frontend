import React from "react";
import strategyOverview from "../assets/screenshorts/HomePageImages/Strategy Overview.png";
import scatteredTeams from "../assets/screenshorts/HomePageImages/scattered_teams.png";
const ICP2 = () => {
  return (
    <div className="backgroupnd_color bodyText">
      {" "}
      {/* 2. HERO SECTION */}{" "}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white">
        {" "}
        <div className="absolute top-0 right-0 w-1/2 h-full from-[#E6F1FB]/50 opacity-50 pointer-events-none rounded-bl-full"></div>{" "}
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          {" "}
          <h1 className="text-4xl md:text-6xl lg:text-7xl heading1 text_color tracking-tight mb-6 leading-tight">
            {" "}
            Your business is growing. <br />{" "}
            <span className="secondary_color">
              Your marketing needs a system to match.
            </span>{" "}
          </h1>{" "}
          <p className="text-lg md:text-xl text_color opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
            {" "}
            Marketing 4SIGHT aligns your entire team around one strategy —
            connecting planning, execution, and performance in a single
            structured system.{" "}
          </p>{" "}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            {" "}
            <a
              href="mailto:contact@quantyraanalytics.com"
              className="w-full sm:w-auto primary_bg text-white px-8 py-4 rounded-xl heading2 hover:primary_bg transition shadow-xl shadow-md text-center"
            >
              {" "}
              Book a Free Demo{" "}
            </a>{" "}
            <a
              href="#sigo"
              className="w-full sm:w-auto bg-white border border-[var(--line)] text_color opacity-80 px-8 py-4 rounded-xl heading2 hover:backgroupnd_color transition text-center"
            >
              {" "}
              See the SIGO Framework{" "}
            </a>{" "}
          </div>{" "}
          {/* Dashboard Visual Placeholder */}{" "}
          <div className="border border-[var(--line-soft)] rounded-2xl bg-white p-2 shadow-2xl max-w-3xl hover:scale-103 hover:border-2 hover:border-blue-800 transition-all duration-300 mx-auto mb-16 relative">
            {" "}
            <div className="backgroupnd_color rounded-xl overflow-hidden border border-[var(--line)]">
              {" "}
              <img src={strategyOverview} alt="Strategy Overview Dashboard" className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition duration-500" />
            </div>{" "}
          </div>{" "}
         
        </div>{" "}
      </section>{" "}
      {/* 3. PROBLEM SECTION: THE GROWING BUSINESS TRAP */}{" "}
      <section
        id="problem"
        className="py-24 backgroupnd_color border-t border-[var(--line-soft)]"
      >
        {" "}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {" "}
          <div>
            {" "}
            <span className="primary_color heading2 tracking-wider uppercase text-sm mb-2 block">
              The Growing Business Trap
            </span>{" "}
            <h2 className="text-3xl md:text-4xl heading1 text_color mb-8">
              As your team grows, marketing gets complicated fast
            </h2>{" "}
            <ul className="space-y-6">
              {" "}
              <li className="flex items-start gap-4">
                {" "}
                <div className="w-6 h-6 mt-1 rounded-full accent_color bg-opacity-10 accent_color flex items-center justify-center shrink-0 text-xs heading2">
                  ✕
                </div>{" "}
                <p className="text_color opacity-100 leading-relaxed">
                  <strong className="block primary_color">
                    Siloed Execution:
                  </strong>{" "}
                  Multiple teams working on SEO, content, ads, and social — but
                  no one has a unified view of what is actually happening.
                </p>{" "}
              </li>{" "}
              <li className="flex items-start gap-4">
                {" "}
                <div className="w-6 h-6 mt-1 rounded-full accent_color bg-opacity-10 accent_color flex items-center justify-center shrink-0 text-xs heading2">
                  ✕
                </div>{" "}
                <p className="text_color opacity-100 leading-relaxed">
                  <strong className="primary_color block">
                    Strategy Disconnect:
                  </strong>{" "}
                  Strategy is set at the top but execution at the ground level
                  is inconsistent and hard to track.
                </p>{" "}
              </li>{" "}
              <li className="flex items-start gap-4">
                {" "}
                <div className="w-6 h-6 mt-1 rounded-full accent_color bg-opacity-10 accent_color flex items-center justify-center shrink-0 text-xs heading2">
                  ✕
                </div>{" "}
                <p className="text_color opacity-100 leading-relaxed">
                  <strong className="primary_color block">
                    Fragmented Budget:
                  </strong>{" "}
                  Marketing budget is being spent across channels but there is
                  no single place to see combined ROI.
                </p>{" "}
              </li>{" "}
              <li className="flex items-start gap-4">
                {" "}
                <div className="w-6 h-6 mt-1 rounded-full accent_color bg-opacity-10 accent_color flex items-center justify-center shrink-0 text-xs heading2">
                  ✕
                </div>{" "}
                <p className="text_color opacity-100 leading-relaxed">
                  <strong className="primary_color block">
                    Reactive Decisions:
                  </strong>{" "}
                  Decisions are still being made on gut feeling because data is
                  scattered across multiple tools and reports. There is no
                  structured system.
                </p>{" "}
              </li>{" "}
            </ul>{" "}
          </div>{" "}
          {/* Diagram Placeholder */}{" "}
          <div className="bg-white rounded-3xl border border-[var(--line-soft)]  hover:scale-101 hover:shadow-2xl transition-all duration-300shadow-xl relative overflow-hidden flex flex-col items-center justify-center text-center">
            {" "}
            <img src={scatteredTeams} alt="Scattered Teams and Disjointed Tools" className="w-full h-auto object-cover" />
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 4. THE SIGO FRAMEWORK */}{" "}
      <section
        id="sigo"
        className="py-24 bg-white border-t border-[var(--line-soft)]"
      >
        {" "}
        <div className="max-w-7xl mx-auto px-6 text-center">
          {" "}
          <span className="inline-block py-1.5 px-4 rounded-full primary_bg text-white text-sm heading2 tracking-wide uppercase mb-6">
            Our Methodology
          </span>{" "}
          <h2 className="text-3xl md:text-4xl heading1 text_color mb-16 max-w-3xl mx-auto leading-tight">
            {" "}
            Marketing 4SIGHT is built on the SIGO Framework — a proven 4-step
            system for structured marketing.{" "}
          </h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {" "}
            {/* Step 1 */}{" "}
            <div className="bg-[#FAFCFF] border border-gray-200 p-8 rounded-2xl text-left relative card-hover group transition-all duration-300 hover:scale-[1.03] hover:shadow-xl cursor-default">
              {" "}
              <div className="w-12 h-12 primary_bg text-white rounded-xl flex items-center justify-center heading2 text-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                1
              </div>{" "}
              <h3 className="text-xl heading2 text_color mb-3 group-hover:!text-[#0859b8] transition-colors duration-300">Strategy</h3>{" "}
              <p className="text_color opacity-60 text-sm leading-relaxed">
                Define what matters most. Set clear goals, align your team, and
                replace scattered thinking with structured direction.
              </p>{" "}
            </div>{" "}
            {/* Step 2 */}{" "}
            <div className="bg-[#FAFCFF] border border-gray-200 p-8 rounded-2xl text-left relative card-hover group transition-all duration-300 hover:scale-[1.03] hover:shadow-xl cursor-default">
              {" "}
              <div className="w-12 h-12 primary_bg text-white rounded-xl flex items-center justify-center heading2 text-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                2
              </div>{" "}
              <h3 className="text-xl heading2 text_color mb-3 group-hover:!text-[#0859b8] transition-colors duration-300">
                Implementation
              </h3>{" "}
              <p className="text_color opacity-60 text-sm leading-relaxed">
                Turn direction into action. Convert strategy into clear,
                structured tasks across all your marketing efforts.
              </p>{" "}
            </div>{" "}
            {/* Step 3 */}{" "}
            <div className="bg-[#FAFCFF] border border-gray-200 p-8 rounded-2xl text-left relative card-hover group transition-all duration-300 hover:scale-[1.03] hover:shadow-xl cursor-default">
              {" "}
              <div className="w-12 h-12 secondary_bg text-white rounded-xl flex items-center justify-center heading2 text-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                3
              </div>{" "}
              <h3 className="text-xl heading2 text_color mb-3 group-hover:!text-[#0859b8] transition-colors duration-300">Governance</h3>{" "}
              <p className="text_color opacity-60 text-sm leading-relaxed">
                Stay in control. Track what is being done, monitor consistency,
                and maintain complete visibility across all activities.
              </p>{" "}
            </div>{" "}
            {/* Step 4 */}{" "}
            <div className="bg-[#FAFCFF] border border-gray-200 p-8 rounded-2xl text-left relative card-hover group transition-all duration-300 hover:scale-[1.03] hover:shadow-xl cursor-default">
              {" "}
              <div className="w-12 h-12 secondary_bg text-white rounded-xl flex items-center justify-center heading2 text-xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                4
              </div>{" "}
              <h3 className="text-xl heading2 text_color mb-3 group-hover:!text-[#0859b8] transition-colors duration-300">Optimization</h3>{" "}
              <p className="text_color opacity-60 text-sm leading-relaxed">
                Improve based on performance. Identify gaps, evaluate outcomes,
                and continuously improve results.
              </p>{" "}
            </div>{" "}
          </div>{" "}
          <a
            href="mailto:contact@quantyraanalytics.com"
            className="inline-flex items-center primary_color heading2 hover:primary_color transition group"
          >
            {" "}
            See the SIGO Framework in action — Book a Demo{" "}
            <span className="ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>{" "}
          </a>{" "}
        </div>{" "}
      </section>{" "}
      {/* 5. BENEFITS FOR YOUR TEAM */}{" "}
      <section className="py-24 backgroupnd_color border-t border-[var(--line-soft)]">
        {" "}
        <div className="max-w-7xl mx-auto px-6">
          {" "}
          <h2 className="text-3xl md:text-4xl heading1 text_color mb-16 text-center">
            One platform. Every team. Full clarity.
          </h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {" "}
            {/* Role 1 */}{" "}
            <div className="bg-white p-8 rounded-2xl border border-[var(--line)] shadow-sm text-center group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="w-16 h-16 primary_bg text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:scale-110 transition-transform duration-300 inline-flex">
                📈
              </div>{" "}
              <h4 className="heading2 text_color mb-2 uppercase tracking-wide text-sm group-hover:!text-[#0859b8] transition-colors duration-300">
                For the Business Owner
              </h4>{" "}
              <p className="text_color opacity-60 text-sm leading-relaxed">
                See the full marketing picture in one place — strategy,
                execution, and performance always visible.
              </p>{" "}
            </div>{" "}
            {/* Role 2 */}{" "}
            <div className="bg-white p-8 rounded-2xl border border-[var(--line)] shadow-sm text-center group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="w-16 h-16 primary_bg text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:scale-110 transition-transform duration-300 inline-flex">
                🎯
              </div>{" "}
              <h4 className="heading2 text_color mb-2 uppercase tracking-wide text-sm group-hover:!text-[#0859b8] transition-colors duration-300">
                For the Marketing Head
              </h4>{" "}
              <p className="text_color opacity-60 text-sm leading-relaxed">
                Align your team around one structured plan — no more
                coordination chaos or missed priorities.
              </p>{" "}
            </div>{" "}
            {/* Role 3 */}{" "}
            <div className="bg-white p-8 rounded-2xl border border-[var(--line)] shadow-sm text-center group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <div className="w-16 h-16 primary_bg text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl group-hover:scale-110 transition-transform duration-300 inline-flex">
                ⚡
              </div>{" "}
              <h4 className="heading2 text_color mb-2 uppercase tracking-wide text-sm group-hover:!text-[#0859b8] transition-colors duration-300">
                For the Team
              </h4>{" "}
              <p className="text_color opacity-60 text-sm leading-relaxed">
                Clear task-driven execution — everyone knows exactly what to do
                and when, connected to real data.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 6. KEY FEATURES */}{" "}
      <section
        id="features"
        className="py-24 bg-white border-t border-[var(--line-soft)]"
      >
        {" "}
        <div className="max-w-7xl mx-auto px-6">
          {" "}
          <h2 className="text-3xl md:text-4xl heading1 text_color mb-16 text-center max-w-2xl mx-auto">
            Every feature your growing marketing team needs — in one place
          </h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {" "}
            {/* Grid items */}{" "}
            <div className="p-6 border border-[var(--line-soft)]  hover:border-blue-800 rounded-xl flex gap-4 hover:backgroupnd_color transition">
              {" "}
              <div className="primary_color text-2xl">🗺️</div>{" "}
              <div>
                {" "}
                <h4 className="heading2 text_color mb-1">
                  Strategy Planning & OKR Alignment
                </h4>{" "}
                <p className="text_color opacity-100 text-sm">
                  Set goals that cascade across the entire team effortlessly.
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="p-6 border border-[var(--line-soft)]  hover:border-blue-800 rounded-xl flex gap-4 hover:backgroupnd_color transition">
              {" "}
              <div className="primary_color text-2xl">🔄</div>{" "}
              <div>
                {" "}
                <h4 className="heading2 text_color mb-1">
                  Multi-Channel Operations
                </h4>{" "}
                <p className="text_color opacity-100 text-sm">
                  Process orchestration and publishing workflows across all
                  channels.
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="p-6 border border-[var(--line-soft)]  hover:border-blue-800 rounded-xl flex gap-4 hover:backgroupnd_color transition">
              {" "}
              <div className="primary_color text-2xl">🛡️</div>{" "}
              <div>
                {" "}
                <h4 className="heading2 text_color mb-1">
                  Governance Dashboard
                </h4>{" "}
                <p className="text_color opacity-100 text-sm">
                  Monitor execution consistency and compliance in real time.
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="p-6 border border-[var(--line-soft)]  hover:border-blue-800 rounded-xl flex gap-4 hover:backgroupnd_color transition">
              {" "}
              <div className="primary_color text-2xl">🚀</div>{" "}
              <div>
                {" "}
                <h4 className="heading2 text_color mb-1">Optimization</h4>{" "}
                <p className="text_color opacity-100 text-sm">
                  Competitor positioning and visibility dashboards to stay
                  ahead.
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="p-6 border border-[var(--line-soft)]  hover:border-blue-800 rounded-xl flex gap-4 hover:backgroupnd_color transition">
              {" "}
              <div className="primary_color text-2xl">📝</div>{" "}
              <div>
                {" "}
                <h4 className="heading2 text_color mb-1">
                  Content Operations
                </h4>{" "}
                <p className="text_color opacity-100 text-sm">
                  Campaign aligned asset planning and social flows for the whole
                  team.
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="p-6 border border-[var(--line-soft)]  hover:border-blue-800 rounded-xl flex gap-4 hover:backgroupnd_color transition">
              {" "}
              <div className="primary_color text-2xl">📈</div>{" "}
              <div>
                {" "}
                <h4 className="heading2 text_color mb-1">
                  Organic Growth
                </h4>{" "}
                <p className="text_color opacity-100 text-sm">
                  Local search GMB listings and keyword rank tracking.
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 7. BEFORE VS AFTER */}{" "}
      <section className="py-24 primary_bg text-white relative overflow-hidden">
        {" "}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#F97316_1px,transparent_1px)] [background-size:24px_24px]"></div>{" "}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {" "}
          <h2 className="text-3xl md:text-5xl heading1 mb-16 text-center">
            What changes when your team uses Marketing 4SIGHT
          </h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 max-w-5xl mx-auto">
            {" "}
            {/* Before */}{" "}
            <div className="bg-black/20 border border-white/10 p-8 md:p-12 md:rounded-l-3xl rounded-3xl md:rounded-r-none backdrop-blur-md shadow-inner transition-transform duration-500 hover:scale-105 hover:z-20 relative">
              {" "}
              <h3 className="text-2xl heading2 secondary_color mb-8 flex items-center gap-3">
                {" "}
                <span className="secondary_bg bg-opacity-20 secondary_color p-2 rounded-lg text-sm">
                  ✕
                </span>{" "}
                Before — Without 4SIGHT{" "}
              </h3>{" "}
              <ul className="space-y-6 text-white opacity-80 font-medium">
                {" "}
                <li className="flex items-start gap-3">
                  <span className="secondary_color heading2 mt-0.5">•</span> Scattered tools
                </li>{" "}
                <li className="flex items-start gap-3">
                  <span className="secondary_color heading2 mt-0.5">•</span> No unified strategy
                </li>{" "}
                <li className="flex items-start gap-3">
                  <span className="secondary_color heading2 mt-0.5">•</span> Reactive decisions
                </li>{" "}
                <li className="flex items-start gap-3">
                  <span className="secondary_color heading2 mt-0.5">•</span> Invisible execution
                </li>{" "}
                <li className="flex items-start gap-3">
                  <span className="secondary_color heading2 mt-0.5">•</span> Budget wasted on what doesn't work
                </li>{" "}
              </ul>{" "}
            </div>{" "}
            {/* After */}{" "}
            <div className="secondary_bg p-8 md:p-12 md:rounded-r-3xl rounded-3xl md:rounded-l-none shadow-2xl border border-white transition-transform duration-500 hover:scale-105 hover:z-20 relative z-10">
              {" "}
              <h3 className="text-2xl heading2 text-white mb-8 flex items-center gap-3">
                {" "}
                <span className="bg-white/20 text-white p-2 rounded-lg text-sm">
                  ✓
                </span>{" "}
                After — With 4SIGHT{" "}
              </h3>{" "}
              <ul className="space-y-6 text-white font-medium">
                {" "}
                <li className="flex items-start gap-3">
                  <span className="text-white heading2 mt-0.5">✓</span> One connected system
                </li>{" "}
                <li className="flex items-start gap-3">
                  <span className="text-white heading2 mt-0.5">✓</span> Clear SIGO-based strategy
                </li>{" "}
                <li className="flex items-start gap-3">
                  <span className="text-white heading2 mt-0.5">✓</span> Data-driven decisions
                </li>{" "}
                <li className="flex items-start gap-3">
                  <span className="text-white heading2 mt-0.5">✓</span> Full execution visibility
                </li>{" "}
                <li className="flex items-start gap-3">
                  <span className="text-white heading2 mt-0.5">✓</span> Budget allocated to what performs
                </li>{" "}
              </ul>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 8. HOW IT WORKS */}{" "}
      <section className="py-24 bg-white border-t border-[var(--line-soft)]">
        {" "}
        <div className="max-w-6xl mx-auto px-6">
          {" "}
          <h2 className="text-3xl md:text-4xl heading1 text_color mb-16 text-center">
            Getting started is simple
          </h2>{" "}
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
            {" "}
            {/* Connector Line */}{" "}
            <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 backgroupnd_color z-0"></div>{" "}
            <div className="relative z-10 flex-1 text-center bg-white">
              {" "}
              <div className="w-12 h-12 primary_bg text-white rounded-full flex items-center justify-center heading2 text-lg mx-auto mb-6 shadow-md shadow-md border-4 border-white">
                1
              </div>{" "}
              <h3 className="heading2 text_color mb-2">Set Context</h3>{" "}
              <p className="text_color opacity-60 text-sm">
                Add your team structure, goals, and marketing priorities.
              </p>{" "}
            </div>{" "}
            <div className="relative z-10 flex-1 text-center bg-white">
              {" "}
              <div className="w-12 h-12 primary_bg text-white rounded-full flex items-center justify-center heading2 text-lg mx-auto mb-6 shadow-md shadow-md border-4 border-white">
                2
              </div>{" "}
              <h3 className="heading2 text_color mb-2">Get Direction</h3>{" "}
              <p className="text_color opacity-60 text-sm">
                4SIGHT generates your strategy, priorities, and action plan
                automatically.
              </p>{" "}
            </div>{" "}
            <div className="relative z-10 flex-1 text-center bg-white">
              {" "}
              <div className="w-12 h-12 secondary_bg text-white rounded-full flex items-center justify-center heading2 text-lg mx-auto mb-6 shadow-md shadow-md border-4 border-white">
                3
              </div>{" "}
              <h3 className="heading2 text_color mb-2">Execute & Control</h3>{" "}
              <p className="text_color opacity-60 text-sm">
                Your entire team runs activities with full visibility and
                ongoing tracking.
              </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 9. TESTIMONIALS */}{" "}
      <section
        id="testimonials"
        className="py-24 backgroupnd_color border-t border-[var(--line-soft)]"
      >
        {" "}
        <div className="max-w-7xl mx-auto px-6">
          {" "}
          <h2 className="text-3xl md:text-4xl heading1 text_color mb-16 text-center max-w-2xl mx-auto">
            Growing businesses already running on Marketing 4SIGHT
          </h2>{" "}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {" "}
            <div className="bg-white p-8 rounded-2xl border border-[var(--line)] shadow-sm flex flex-col justify-between group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <p className="text_color opacity-60 text-sm leading-relaxed mb-8 italic">
                "The data-driven decision making framework helped us identify
                blind spots and address them effectively."
              </p>{" "}
              <div>
                {" "}
                <h5 className="heading2 text_color text-sm group-hover:!text-[#0859b8] transition-colors duration-300">
                  Nilagrib Mondal
                </h5>{" "}
                <p className="text-xs primary_color font-semibold mt-1">
                  Marketing Head, Excel Home Decor Pvt Ltd
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-white p-8 rounded-2xl border border-[var(--line)] shadow-sm flex flex-col justify-between group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <p className="text_color opacity-60 text-sm leading-relaxed mb-8 italic">
                "The platform is extremely effective in strategizing, governing
                and optimizing marketing processes."
              </p>{" "}
              <div>
                {" "}
                <h5 className="heading2 text_color text-sm group-hover:!text-[#0859b8] transition-colors duration-300">
                  Indranil Mandal
                </h5>{" "}
                <p className="text-xs primary_color font-semibold mt-1">
                  Founder, Bombay Local
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="bg-white p-8 rounded-2xl border border-[var(--line)] shadow-sm flex flex-col justify-between group transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-default">
              {" "}
              <p className="text_color opacity-60 text-sm leading-relaxed mb-8 italic">
                "Strategic inputs from the platform helped in improving our
                brand presence."
              </p>{" "}
              <div>
                {" "}
                <h5 className="heading2 text_color text-sm group-hover:!text-[#0859b8] transition-colors duration-300">
                  Jagannath Thakur
                </h5>{" "}
                <p className="text-xs primary_color font-semibold mt-1">
                  Founder, enpropeL
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 10. FAQ SECTION */}{" "}
      <section className="py-24 bg-white border-t border-[var(--line-soft)]">
        {" "}
        <div className="max-w-3xl mx-auto px-6">
          {" "}
          <h2 className="text-3xl heading1 text_color mb-10 text-center">
            Frequently Asked Questions
          </h2>{" "}
          <div className="space-y-4">
            {" "}
            <details className="faq-details group backgroupnd_color rounded-xl border border-[var(--line)] open:bg-white open:border-gray-200/30 open:shadow-md transition-all">
              {" "}
              <summary className="flex justify-between items-center heading2 cursor-pointer p-6 text_color">
                {" "}
                Do we need a large team to use Marketing 4SIGHT?{" "}
                <span className="primary_color group-open:rotate-180 transition-transform">
                  ▼
                </span>{" "}
              </summary>{" "}
              <div className="p-6 pt-0 text_color opacity-60 text-sm leading-relaxed">
                {" "}
                No. The platform is designed to work perfectly for teams of any
                size within the 25-100 employee range, ensuring scalable
                governance without heavy overhead.{" "}
              </div>{" "}
            </details>{" "}
            <details className="faq-details group backgroupnd_color rounded-xl border border-[var(--line)] open:bg-white open:border-gray-200/30 open:shadow-md transition-all">
              {" "}
              <summary className="flex justify-between items-center heading2 cursor-pointer p-6 text_color">
                {" "}
                How long does it take to set up?{" "}
                <span className="primary_color group-open:rotate-180 transition-transform">
                  ▼
                </span>{" "}
              </summary>{" "}
              <div className="p-6 pt-0 text_color opacity-60 text-sm leading-relaxed">
                {" "}
                You can set your business context and get your first structured
                plan within the same day, rapidly reducing time- for your core
                marketing activities.{" "}
              </div>{" "}
            </details>{" "}
            <details className="faq-details group backgroupnd_color rounded-xl border border-[var(--line)] open:bg-white open:border-gray-200/30 open:shadow-md transition-all">
              {" "}
              <summary className="flex justify-between items-center heading2 cursor-pointer p-6 text_color">
                {" "}
                Can we track real business outcomes, not just marketing metrics?{" "}
                <span className="primary_color group-open:rotate-180 transition-transform">
                  ▼
                </span>{" "}
              </summary>{" "}
              <div className="p-6 pt-0 text_color opacity-60 text-sm leading-relaxed">
                {" "}
                Yes. 4SIGHT connects marketing activity directly to business
                performance data so every strategic decision is strictly
                outcome-focused.{" "}
              </div>{" "}
            </details>{" "}
            <details className="faq-details group backgroupnd_color rounded-xl border border-[var(--line)] open:bg-white open:border-gray-200/30 open:shadow-md transition-all">
              {" "}
              <summary className="flex justify-between items-center heading2 cursor-pointer p-6 text_color">
                {" "}
                Does it replace our existing tools?{" "}
                <span className="primary_color group-open:rotate-180 transition-transform">
                  ▼
                </span>{" "}
              </summary>{" "}
              <div className="p-6 pt-0 text_color opacity-60 text-sm leading-relaxed">
                {" "}
                4SIGHT works as the central overarching system that connects,
                coordinates, and makes statistical sense of your existing
                dispersed marketing efforts.{" "}
              </div>{" "}
            </details>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 11. FINAL CTA */}{" "}
      <section className="py-24 primary_bg text-white border-t border-b border-gray-200/10 text-center">
        {" "}
        <div className="max-w-4xl mx-auto px-6">
          {" "}
          <h2 className="text-3xl md:text-5xl heading1 text-white tracking-tight mb-6">
            {" "}
            Give your growing team the structure they need to win{" "}
          </h2>{" "}
          <p className="text-base md:text-lg text-white opacity-80 mb-10 max-w-2xl mx-auto">
            {" "}
            Marketing 4SIGHT connects your strategy, execution, and performance
            into one intelligent system — built for businesses that are serious
            about growth.{" "}
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
      {/* 12. FOOTER */}{" "}
    </div>
  );
};
export default ICP2;
