import React from 'react';
import boutiqueImg from '../assets/images/boutique_owner.png';
import salonImg from '../assets/images/salon_operator.png';
import chefImg from '../assets/images/restaurant_chef.png';
import tutorImg from '../assets/images/private_tutor.png';
import diwaliImg from '../assets/images/diwali_sale.png';

export default function ICP1() {
  return (
    <div className="backgroupnd_color bodyText antialiased">

     

      <section className="pt-24 relative py-24 overflow-hidden backgroupnd_color">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-7 space-y-6 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 primary_color text-xs heading1 uppercase tracking-widest px-3 py-1.5 rounded-full">
              BUILT FOR INDIA'S LOCAL BUSINESS OWNERS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl heading1 text_color tracking-tight leading-none">
              You built the business. <br />
              <span className="primary_color">We bring the customers.</span>
            </h1>
            <p className="text-lg text_color opacity-80 max-w-xl bodyText leading-relaxed">
              Stop fighting with complicated marketing apps. You focus on running your business—Marketing4SIGHT handles your online discovery automatically using data-driven intelligence.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-3 text-left pt-2">
              <div className="flex items-center gap-2 text-sm heading2 text_color hover:primary_color cursor-default transition-colors"><i className="fa-solid fa-circle-check secondary_color"></i> Stand out in your city</div>
              <div className="flex items-center gap-2 text-sm heading2 text_color hover:primary_color cursor-default transition-colors"><i className="fa-solid fa-circle-check secondary_color"></i> Get real leads every week</div>
              <div className="flex items-center gap-2 text-sm heading2 text_color hover:primary_color cursor-default transition-colors"><i className="fa-solid fa-circle-check secondary_color"></i> Dominate Google & Maps</div>
              <div className="flex items-center gap-2 text-sm heading2 text_color hover:primary_color cursor-default transition-colors"><i className="fa-solid fa-circle-check secondary_color"></i> Lock in customer referrals</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a href="#" className="primary_bg text-white px-8 py-4 rounded-xl heading1 shadow-lg text-center tracking-tight hover:-translate-y-1 hover:shadow-xl transform active:translate-y-0 transition-all border-2 border-transparent">
                Claim My Free Growth Plan &rarr;
              </a>
              <a href="#" className="border-2 border-gray-200 bg-white text_color hover:primary_color px-8 py-4 rounded-xl heading2 text-center flex items-center justify-center gap-2 text-sm hover:-translate-y-1 shadow-sm hover:shadow-md transform active:translate-y-0 hover:border-blue-200 transition-all">
                Watch it work in 60s
              </a>
            </div>
          </div>
          
          <div className="md:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white rounded-2xl h-44 overflow-hidden shadow-md relative border-[6px] border-white flex flex-col justify-end p-3 hover:scale-[1.04] hover:shadow-xl transform duration-300 cursor-pointer group">
                  <img src={boutiqueImg} className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 duration-500" alt="Boutique Owner" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-colors duration-300 z-10"></div>
                  <div className="z-20 bg-black/60 backdrop-blur-md border border-white/20 p-3 rounded-xl group-hover:translate-y-[-4px] transform duration-300 w-full shadow-lg">
                    <span className="block text-blue-300 heading1 uppercase text-[10px] tracking-widest mb-1">Boutique</span>
                    <span className="text-sm heading2 text-white">Traditional Saree Shop</span>
                  </div>
                </div>
                <div className="bg-white rounded-2xl h-60 overflow-hidden shadow-md relative border-[6px] border-white flex flex-col justify-end p-3 hover:scale-[1.04] hover:shadow-xl transform duration-300 cursor-pointer group">
                  <img src={salonImg} className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 duration-500" alt="Salon Operator" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-colors duration-300 z-10"></div>
                  <div className="z-20 bg-black/60 backdrop-blur-md border border-white/20 p-3 rounded-xl group-hover:translate-y-[-4px] transform duration-300 w-full shadow-lg">
                    <span className="block text-blue-300 heading1 uppercase text-[10px] tracking-widest mb-1">Wellness</span>
                    <span className="text-sm heading2 text-white">Local Salon Operator</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white rounded-2xl h-60 overflow-hidden shadow-md relative border-[6px] border-white flex flex-col justify-end p-3 hover:scale-[1.04] hover:shadow-xl transform duration-300 cursor-pointer group">
                  <img src={chefImg} className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 duration-500" alt="Restaurant Chef" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-colors duration-300 z-10"></div>
                  <div className="z-20 bg-black/60 backdrop-blur-md border border-white/20 p-3 rounded-xl group-hover:translate-y-[-4px] transform duration-300 w-full shadow-lg">
                    <span className="block text-blue-300 heading1 uppercase text-[10px] tracking-widest mb-1">Dining</span>
                    <span className="text-sm heading2 text-white">Restaurant Chef</span>
                  </div>
                </div>
                <div className="bg-white rounded-2xl h-44 overflow-hidden shadow-md relative border-[6px] border-white flex flex-col justify-end p-3 hover:scale-[1.04] hover:shadow-xl transform duration-300 cursor-pointer group">
                  <img src={tutorImg} className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 duration-500" alt="Private Tutor" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-colors duration-300 z-10"></div>
                  <div className="z-20 bg-black/60 backdrop-blur-md border border-white/20 p-3 rounded-xl group-hover:translate-y-[-4px] transform duration-300 w-full shadow-lg">
                    <span className="block text-blue-300 heading1 uppercase text-[10px] tracking-widest mb-1">Education</span>
                    <span className="text-sm heading2 text-white">Private Coaching Tutors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F9FAFB] border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-3 mb-16">
          <span className="text-xs heading1 uppercase tracking-widest text_color opacity-60">The Reality</span>
          <h2 className="text-3xl sm:text-4xl heading1 text_color tracking-tight">Marketing should not feel impossible.</h2>
          <p className="text_color opacity-80 text-base bodyText max-w-xl mx-auto">Are you throwing time and money into a black box?</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200/60 shadow-sm flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-md hover:border-blue-200 transform duration-300 cursor-pointer group">
            <p className="text-sm text_color opacity-80 heading2 leading-relaxed group-hover:opacity-100 transition-opacity">
              "I am constantly swapping between Google, Facebook, and WhatsApp. <span className="primary_color heading1 transition-colors group-hover:opacity-80">I don't know where to focus first."</span>
            </p>
            <span className="text-[10px] heading1 text_color opacity-50 uppercase tracking-wider block mt-4 group-hover:primary_color transition-colors">&mdash; Too many platforms</span>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200/60 shadow-sm flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-md hover:border-blue-200 transform duration-300 cursor-pointer group">
            <p className="text-sm text_color opacity-80 heading2 leading-relaxed group-hover:opacity-100 transition-opacity">
              "People explain marketing in absolute jargon. <span className="primary_color heading1 transition-colors group-hover:opacity-80">I shouldn't need a degree to grow my sales."</span>
            </p>
            <span className="text-[10px] heading1 text_color opacity-50 uppercase tracking-wider block mt-4 group-hover:primary_color transition-colors">&mdash; Complicated Jargon</span>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200/60 shadow-sm flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-md hover:border-blue-200 transform duration-300 cursor-pointer group">
            <p className="text-sm text_color opacity-80 heading2 leading-relaxed group-hover:opacity-100 transition-opacity">
              "I am busy dealing with customers. <span className="primary_color heading1 transition-colors group-hover:opacity-80">I do not have hours to waste creating posts every day."</span>
            </p>
            <span className="text-[10px] heading1 text_color opacity-50 uppercase tracking-wider block mt-4 group-hover:primary_color transition-colors">&mdash; Zero Spare Time</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-3 mb-16">
          <span className="text-xs heading1 uppercase tracking-widest primary_color">The Solution</span>
          <h2 className="text-3xl sm:text-4xl heading1 text_color tracking-tight">Your entire growth machine. Simple language. One place.</h2>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-4 hover:border-blue-200 hover:bg-blue-50/20 transform hover:translate-x-1 cursor-default transition-all">
              <div className="w-7 h-7 rounded-lg bg-blue-50 primary_color flex items-center justify-center heading1 text-xs">01</div>
              <div className="flex-1 sm:flex justify-between items-center gap-4">
                <h4 className="heading1 text_color text-sm">The Custom Action Plan</h4>
                <p className="text-xs text_color opacity-60 smallText">See exactly where your business stands instantly.</p>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-4 hover:border-blue-200 hover:bg-blue-50/20 transform hover:translate-x-1 cursor-default transition-all">
              <div className="w-7 h-7 rounded-lg bg-blue-50 primary_color flex items-center justify-center heading1 text-xs">02</div>
              <div className="flex-1 sm:flex justify-between items-center gap-4">
                <h4 className="heading1 text_color text-sm">Automated Execution</h4>
                <p className="text-xs text_color opacity-60 smallText">Create content and scale visibility with zero stress.</p>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border-2 border-[#00adc4]/40 flex items-center gap-4 shadow-sm hover:border-[#00adc4] hover:bg-teal-50/10 transform hover:translate-x-1 cursor-default transition-all">
              <div className="w-7 h-7 rounded-lg secondary_bg text-white flex items-center justify-center heading1 text-xs">03</div>
              <div className="flex-1 sm:flex justify-between items-center gap-4">
                <h4 className="heading1 text_color text-sm">Unified Performance Tracker</h4>
                <p className="text-xs secondary_color heading2">Watch your channels from one master dashboard.</p>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-4 relative hover:shadow-md transform hover:translate-x-1 cursor-default transition-all">
              <div className="absolute top-2 right-2 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full secondary_bg opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 secondary_bg"></span>
              </div>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center heading1 text-xs text_color" style={{ backgroundColor: '#e7eb90' }}>04</div>
              <div className="flex-1 sm:flex justify-between items-center gap-4">
                <h4 className="heading1 text_color text-sm">Daily Smart Suggestions</h4>
                <p className="text-xs text_color opacity-60 smallText">Get clear action items to improve step-by-step.</p>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-4 hover:border-blue-200 hover:bg-blue-50/20 transform hover:translate-x-1 cursor-default transition-all">
              <div className="w-7 h-7 rounded-lg bg-blue-50 primary_color flex items-center justify-center heading1 text-xs">05</div>
              <div className="flex-1 sm:flex justify-between items-center gap-4">
                <h4 className="heading1 text_color text-sm">Expert Human & AI Support</h4>
                <p className="text-xs text_color opacity-60 smallText">Get guidance whenever you need it.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 primary_bg text-white p-8 rounded-2xl space-y-6 shadow-xl relative overflow-hidden group border-2 border-transparent hover:border-[#00adc4] transform hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 cursor-default">
            <div className="absolute -right-12 -top-12 w-36 h-36 bg-white/10 rounded-full blur-2xl group-hover:scale-125 duration-500"></div>
            
            <h4 className="text-xs heading1 accent_color uppercase tracking-widest group-hover:tracking-wider duration-300">The Ultimate Shift</h4>
            
            <div className="space-y-4 border-l-2 border-blue-400 pl-4">
              <div>
                <span className="text-xs text-blue-200 block heading2">BEFORE MARKETING4SIGHT</span>
                <p className="text-sm heading2 text-white opacity-90 group-hover:opacity-100 transition-opacity">Pure chaos. Disconnected apps, random guesswork, and wasted budget.</p>
              </div>
              <div className="pt-2">
                <span className="text-xs accent_color block heading1">AFTER MARKETING4SIGHT</span>
                <p className="text-sm heading1 text-white text-transparent bg-clip-text">Absolute clarity. Automated mapping, strategic focus, and local market control.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F9FAFB] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs heading1 uppercase tracking-widest text_color opacity-60">Instant Execution</span>
            <h2 className="text-3xl sm:text-4xl heading1 text_color tracking-tight">Create marketing materials in seconds.</h2>
            <p className="text_color opacity-80 text-sm bodyText leading-relaxed">
              No graphic designer. No copywriter. No learning curve. Tell the platform what you want and watch it generate flawless, ready-to-share assets.
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs heading2 text_color opacity-90">
              <div className="bg-white p-3 rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md hover:border-[#00adc4] cursor-default transform hover:-translate-y-0.5 transition-all"><i className="fa-solid fa-bolt secondary_color mr-1"></i> Facebook Posts</div>
              <div className="bg-white p-3 rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md hover:border-[#00adc4] cursor-default transform hover:-translate-y-0.5 transition-all"><i className="fa-solid fa-bolt secondary_color mr-1"></i> WhatsApp Offers</div>
              <div className="bg-white p-3 rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md hover:border-[#00adc4] cursor-default transform hover:-translate-y-0.5 transition-all"><i className="fa-solid fa-bolt secondary_color mr-1"></i> Festival Flyers</div>
              <div className="bg-white p-3 rounded-xl border border-gray-200/60 shadow-sm hover:shadow-md hover:border-[#00adc4] cursor-default transform hover:-translate-y-0.5 transition-all"><i className="fa-solid fa-bolt secondary_color mr-1"></i> Store Booklets</div>
            </div>
          </div>
          
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200 shadow-xl p-6 space-y-4 hover:shadow-2xl duration-300">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-[10px] heading1 text_color opacity-60 uppercase tracking-widest"><i className="fa-solid fa-wand-magic-sparkles secondary_color mr-1"></i> Smart Content Engine Workspace</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded heading1 uppercase">Tailored for You</span>
            </div>
            
            <div className="space-y-1">
              <span className="text-[9px] heading1 text_color opacity-60 uppercase block">User Input Prompt</span>
              <div className="bg-gray-50 border border-gray-200 p-3.5 rounded-xl text_color heading2 text-sm flex items-center justify-between hover:border-blue-400 duration-200">
                <span>"Create a Diwali offer for my saree boutique"</span>
                <span className="text-xs heading1 primary_color flex items-center gap-1"><i className="fa-solid fa-circle-notch fa-spin secondary_color"></i> Done</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="border border-teal-200/50 bg-teal-50/20 p-4 rounded-xl space-y-2 relative hover:border-[#00adc4] hover:bg-teal-50/40 transform hover:-translate-y-1 duration-200 cursor-pointer group">
                <span className="text-[9px] heading1 secondary_bg text-white px-1.5 py-0.5 rounded uppercase tracking-wider absolute top-3 right-3">12 Seconds</span>
                <h4 className="text-[10px] heading1 text_color opacity-60 uppercase">Instagram Post</h4>
                <div className="rounded border border-gray-200 shadow-sm overflow-hidden group-hover:shadow-md duration-200 aspect-square w-full relative">
                  <img src={diwaliImg} alt="Diwali Sale Post" className="w-full h-full object-contain bg-black/5 group-hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
              <div className="border border-blue-100 bg-blue-50/30 p-4 rounded-xl space-y-2 hover:border-blue-300 hover:bg-blue-50/60 transform hover:-translate-y-1 duration-200 cursor-pointer">
                <h4 className="text-[10px] heading1 text_color opacity-60 uppercase">WhatsApp Message Broadcast</h4>
                <div className="p-2.5 bg-white rounded border border-gray-100 shadow-sm text-[11px] text_color opacity-80 smallText italic leading-relaxed">
                  "Celebrate Diwali with exclusive premium collections at Aadya Creattions. Head to our boutique to claim your special festive discount today!"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30 overflow-hidden relative border-t border-gray-100">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-100/20 rounded-full blur-3xl -z-10 animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 primary_color text-xs heading1 uppercase tracking-widest px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full primary_bg animate-pulse"></span> Smarter way to get discovered
            </span>
            
            <h2 className="text-4xl sm:text-5xl heading1 text_color tracking-tight leading-none">
              Stop Being Invisible. <br />
              <span className="primary_color">
                Get Chosen First.
              </span>
            </h2>
            
            <p className="text_color opacity-80 text-base bodyText max-w-xl">
              Every single day, buyers in your local neighborhood are searching online for your services. If they can't find your brand, they buy from your direct competitors. Marketing4SIGHT locks in your visibility automatically.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 text-left pt-2">
              <div className="bg-white/90 p-4 rounded-xl border border-gray-200 shadow-sm hover:border-[#0859b8] hover:-translate-y-1 transform duration-200 cursor-default">
                <div className="text-xs heading1 primary_color bg-blue-50 px-2 py-0.5 w-max rounded">01</div>
                <h4 className="heading1 text_color text-xs mt-3">2-Minute Sync</h4>
                <p className="text-[11px] text_color opacity-60 smallText mt-0.5">Tell us about your business.</p>
              </div>
              <div className="bg-white/90 p-4 rounded-xl border border-gray-200 shadow-sm hover:border-[#0859b8] hover:-translate-y-1 transform duration-200 cursor-default">
                <div className="text-xs heading1 primary_color bg-blue-50 px-2 py-0.5 w-max rounded">02</div>
                <h4 className="heading1 text_color text-xs mt-3">Auto Presence</h4>
                <p className="text-[11px] text_color opacity-60 smallText mt-0.5">We map your entire footprint.</p>
              </div>
              <div className="bg-gradient-to-b from-white to-blue-50/40 p-4 rounded-xl border border-indigo-200 shadow-sm hover:border-[#00adc4] hover:-translate-y-1 transform duration-200 cursor-default">
                <div className="text-xs heading1 text-white primary_bg px-2 py-0.5 w-max rounded">03</div>
                <h4 className="heading1 text-indigo-900 text-xs mt-3">Dominate Locally</h4>
                <p className="text-[11px] primary_color heading2 mt-0.5">Scale map hits & reviews.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[480px] w-full">
            
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block" xmlns="http://www.w3.org/2000/svg">
                {/* Center to Top (Google Search) */}
                <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="#00adc4" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />
                <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="#0859b8" strokeWidth="2.5" className="animated-pipeline" />

                {/* Center to Top-Left (Instagram) */}
                <line x1="50%" y1="50%" x2="15%" y2="30%" stroke="#00adc4" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />
                <line x1="50%" y1="50%" x2="15%" y2="30%" stroke="#0859b8" strokeWidth="2.5" className="animated-pipeline" />

                {/* Center to Bottom-Left (Maps) */}
                <line x1="50%" y1="50%" x2="25%" y2="80%" stroke="#00adc4" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />
                <line x1="50%" y1="50%" x2="25%" y2="80%" stroke="#0859b8" strokeWidth="2.5" className="animated-pipeline" />

                {/* Center to Top-Right (Facebook) */}
                <line x1="50%" y1="50%" x2="85%" y2="30%" stroke="#00adc4" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />
                <line x1="50%" y1="50%" x2="85%" y2="30%" stroke="#0859b8" strokeWidth="2.5" className="animated-pipeline" />

                {/* Center to Bottom-Right (Reviews) */}
                <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="#00adc4" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />
                <line x1="50%" y1="50%" x2="75%" y2="80%" stroke="#0859b8" strokeWidth="2.5" className="animated-pipeline" />
            </svg>

            <div className="w-40 h-40 rounded-full bg-white shadow-2xl border-4 border-[#00adc4] flex flex-col items-center justify-center text-center p-4 z-20 hover:scale-105 duration-300 group cursor-pointer relative">
                <span className="text-[9px] heading1 tracking-widest text_color opacity-60 uppercase">MARKETING</span>
                <span className="text-xl heading1 tracking-tighter primary_color -mt-0.5 group-hover:text-[#00adc4] duration-200">4SIGHT</span>
                <div className="w-6 h-0.5 secondary_bg rounded-full mt-1.5 group-hover:w-10 duration-300"></div>
            </div>

            <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 bg-white p-3 rounded-xl shadow-md border border-gray-100 flex items-center gap-2.5 hover:scale-110 hover:shadow-lg hover:border-red-200 cursor-pointer transform z-10">
                <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center text-red-500 heading1 text-sm">G</div>
                <div className="text-[10px] heading2 text_color leading-tight">Google <br />Search</div>
            </div>
            
            <div className="absolute left-2 sm:left-4 top-1/4 w-32 bg-white p-3 rounded-xl shadow-md border border-gray-100 flex items-center gap-2.5 hover:scale-110 hover:shadow-lg hover:border-pink-200 cursor-pointer transform z-10 -translate-y-4">
                <div className="w-7 h-7 rounded-lg bg-pink-50 flex items-center justify-center text-pink-500 text-xs"><i className="fa-brands fa-instagram"></i></div>
                <div className="text-[10px] heading2 text_color leading-tight">Instagram <br />Feed</div>
            </div>

            <div className="absolute left-8 sm:left-12 bottom-12 w-32 bg-white p-3 rounded-xl shadow-md border border-gray-100 flex items-center gap-2.5 hover:scale-110 hover:shadow-lg hover:border-emerald-200 cursor-pointer transform z-10 translate-y-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-500 text-xs"><i className="fa-solid fa-map-location-dot"></i></div>
                <div className="text-[10px] heading2 text_color leading-tight">Google <br />Maps</div>
            </div>

            <div className="absolute right-2 sm:right-4 top-1/4 w-32 bg-white p-3 rounded-xl shadow-md border border-gray-100 flex items-center gap-2.5 hover:scale-110 hover:shadow-lg hover:border-blue-300 cursor-pointer transform z-10 -translate-y-4">
                <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 text-xs"><i className="fa-brands fa-facebook-f"></i></div>
                <div className="text-[10px] heading2 text_color leading-tight">Facebook <br />Reach</div>
            </div>

            <div className="absolute right-8 sm:right-12 bottom-12 w-32 bg-white p-3 rounded-xl shadow-md border border-gray-100 flex items-center gap-2.5 hover:scale-110 hover:shadow-lg hover:border-amber-300 cursor-pointer transform z-10 group translate-y-2">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-900 text-xs heading1 bg-[#e7eb90] group-hover:rotate-12 duration-200"><i className="fa-solid fa-star"></i></div>
                <div className="text-[10px] heading2 text_color leading-tight">5★ Local <br />Reviews</div>
            </div>
          </div>
        </div>

      </section>

      <section className="py-24 primary_bg text-white border-t border-b border-gray-200/10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl heading1 text-white tracking-tight mb-6">
            Every local business deserves to be discovered
          </h2>
          <p className="text-base md:text-lg text-white opacity-80 mb-10 max-w-2xl mx-auto bodyText">
            Stop checking dozens of complex tools. Take total control over your customer pipeline.
          </p>
          <a
            href="mailto:contact@quantyraanalytics.com"
            className="inline-block bg-white primary_color px-8 py-4 rounded-xl button-font hover:bg-gray-50 transition shadow-xl text-center mb-8"
          >
            Put My Business On The Map — Free
          </a>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-white opacity-80 heading2 border-t border-white/20 pt-6">
            <span>📞 +91 98300 50939</span>
            <span className="hidden sm:inline">•</span>
            <span>✉️ contact@quantyraanalytics.com</span>
          </div>
          <div className="mt-4 text-xs text-white opacity-60 bodyText">
            83 S.P. Mukherjee Road, Hazra, Kolkata — 700026
          </div>
        </div>
      </section>
    </div>
  );
}
