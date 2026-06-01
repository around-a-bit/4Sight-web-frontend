import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from '../assets/4Sight_new_logo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownItems = [
    {
      slug: "strategy-planning",
      title: "Strategy Planning",
      desc: "Align teams, set goals, and cascade strategic OKRs.",
      color: "from-blue-600 to-cyan-500",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },

    {
      slug: "governance",
      title: "Governance",
      desc: "Monitor execution consistency and compliance.",
      color: "from-blue-500 to-cyan-400",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },

    {
      slug: "optimization",
      title: "Optimization",
      desc: "Competitor positioning and visibility dashboards.",
      color: "from-blue-400 to-cyan-300",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },

    {
      slug: "multi-channel-ops",
      title: "Multi-Channel Ops",
      desc: "Process orchestration and publishing workflows.",
      color: "from-blue-500 to-teal-500",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </svg>
      ),
    },

    {
      slug: "organic-growth",
      title: "Organic Growth",
      desc: "Local search GMB listings and keyword rank universes.",
      color: "from-emerald-500 to-teal-500",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },

    {
      slug: "content-operations",
      title: "Content Operations",
      desc: "Campaign-aligned asset planning and social flows.",
      color: "from-indigo-500 to-cyan-500",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
  ];

  return (
    <header className="heading2 fixed top-0 left-0 z-[100] w-full flex h-20 items-center justify-between px-6 lg:px-10 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm">

      {/* Logo */}
      <Link to="/" className="logo shrink-0 flex items-center" title="Marketing4Sight">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 transition-all duration-300">
          <img src={logo} alt="Marketing4Sight" className="w-full h-full object-contain" />
        </div>

        {/* <div className="logo-text">
          MARKETING <span>4SIGHT</span>
        </div> */}
      </Link>

      {/* CENTER NAVIGATION - Desktop */}
      <div className="hidden md:flex flex-1 justify-center">

        <nav className="main font-extrabold text-[#1C1635] flex items-center gap-8" aria-label="Primary navigation">

          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Our Story
          </NavLink>

          <NavLink
            to="/product"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Product
          </NavLink>

          {/* Dropdown */}
          <div
            className="relative inline-block py-2"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <NavLink
              to="/solutions"
              className={({ isActive }) =>
                `flex items-center gap-1 cursor-pointer transition-all ${
                  isActive ? "active" : ""
                }`
              }
            >
              Solutions

              <svg
                className={`w-2.5 h-2.5 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-blue-500" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </NavLink>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[880px] bg-white  rounded-3xl shadow-[0_40px_100px_rgba(8,89,184,0.15)] border border-gray-100 p-8 origin-top z-[100] transition-all duration-200 ${
                isOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                
                <Link to="/solutions?tab=strategy-planning" onClick={() => setIsOpen(false)} className="flex items-start gap-4 group/item hover:bg-blue-50/80 p-4 rounded-2xl transition duration-300 cursor-pointer border border-transparent hover:border-blue-100">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover/item:bg-[#0859b8] group-hover/item:text-white group-hover/item:shadow-md transition-all text-[#0859b8]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-[#1C1635] mb-1 group-hover/item:text-[#0859b8] transition">Strategy Planning</h4>
                        <p className="text-xs text-gray-500 font-normal leading-relaxed">Align teams, set goals, and cascade strategic OKRs.</p>
                    </div>
                </Link>

                <Link to="/solutions?tab=governance" onClick={() => setIsOpen(false)} className="flex items-start gap-4 group/item hover:bg-blue-50/80 p-4 rounded-2xl transition duration-300 cursor-pointer border border-transparent hover:border-blue-100">
                    <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover/item:bg-[#00adc4] group-hover/item:text-white group-hover/item:shadow-md transition-all text-[#00adc4]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-[#1C1635] mb-1 group-hover/item:text-[#00adc4] transition">Governance</h4>
                        <p className="text-xs text-gray-500 font-normal leading-relaxed">Monitor execution consistency and compliance.</p>
                    </div>
                </Link>

                <Link to="/solutions?tab=optimization" onClick={() => setIsOpen(false)} className="flex items-start gap-4 group/item hover:bg-blue-50/80 p-4 rounded-2xl transition duration-300 cursor-pointer border border-transparent hover:border-blue-100">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover/item:bg-[#0859b8] group-hover/item:text-white group-hover/item:shadow-md transition-all text-[#0859b8]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path></svg>
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-[#1C1635] mb-1 group-hover/item:text-[#0859b8] transition">Optimization</h4>
                        <p className="text-xs text-gray-500 font-normal leading-relaxed">Competitor positioning and visibility dashboards.</p>
                    </div>
                </Link>

                <Link to="/solutions?tab=multi-channel-ops" onClick={() => setIsOpen(false)} className="flex items-start gap-4 group/item hover:bg-blue-50/80 p-4 rounded-2xl transition duration-300 cursor-pointer border border-transparent hover:border-blue-100">
                    <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover/item:bg-[#00adc4] group-hover/item:text-white group-hover/item:shadow-md transition-all text-[#00adc4]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-[#1C1635] mb-1 group-hover/item:text-[#00adc4] transition">Multi-Channel Ops</h4>
                        <p className="text-xs text-gray-500 font-normal leading-relaxed">Process orchestration and publishing workflows.</p>
                    </div>
                </Link>

                <Link to="/solutions?tab=organic-growth" onClick={() => setIsOpen(false)} className="flex items-start gap-4 group/item hover:bg-blue-50/80 p-4 rounded-2xl transition duration-300 cursor-pointer border border-transparent hover:border-blue-100">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover/item:bg-[#0859b8] group-hover/item:text-white group-hover/item:shadow-md transition-all text-[#0859b8]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-[#1C1635] mb-1 group-hover/item:text-[#0859b8] transition">Organic Growth</h4>
                        <p className="text-xs text-gray-500 font-normal leading-relaxed">Local search GMB listings and keyword rank universes.</p>
                    </div>
                </Link>

                <Link to="/solutions?tab=content-operations" onClick={() => setIsOpen(false)} className="flex items-start gap-4 group/item hover:bg-blue-50/80 p-4 rounded-2xl transition duration-300 cursor-pointer border border-transparent hover:border-blue-100">
                    <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center shrink-0 shadow-sm group-hover/item:bg-[#00adc4] group-hover/item:text-white group-hover/item:shadow-md transition-all text-[#00adc4]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v12m0 0l-4-4m4 4l4-4M16 17V3m0 0l-4 4m4-4l4 4"></path></svg>
                    </div>
                    <div>
                        <h4 className="text-base font-bold text-[#1C1635] mb-1 group-hover/item:text-[#00adc4] transition">Content Operations</h4>
                        <p className="text-xs text-gray-500 font-normal leading-relaxed">Campaign-aligned asset planning and social flows.</p>
                    </div>
                </Link>

              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-gray-400 text-xs tracking-widest font-bold uppercase">6 Specialized Domains</span>
                  <Link to="/solutions" onClick={() => setIsOpen(false)} className="text-[#0859b8] font-bold hover:text-[#00adc4] transition flex items-center gap-1 cursor-pointer">
                      Explore Solutions Hub &rarr;
                  </Link>
              </div>
            </div>
          </div>

          <NavLink
            to="/pricing"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Pricing
          </NavLink>

          <NavLink
            to="/resources"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Resources
          </NavLink>

          <NavLink
            to="/contact-us"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/compliance"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Compliance
          </NavLink>

        </nav>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-slate-800 hover:text-blue-600 transition-colors focus:outline-none p-2"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[calc(100%+0.5rem)] left-4 right-4 bg-slate-950/95  border border-white/10 rounded-2xl md:hidden shadow-2xl overflow-hidden z-50">
          <nav className="flex flex-col p-2 gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? "bg-blue-500/20 text-blue-400" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? "bg-blue-500/20 text-blue-400" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Story
            </NavLink>
            <NavLink
              to="/product"
              className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? "bg-blue-500/20 text-blue-400" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Product
            </NavLink>
            <NavLink
              to="/solutions"
              className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? "bg-blue-500/20 text-blue-400" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? "bg-blue-500/20 text-blue-400" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? "bg-blue-500/20 text-blue-400" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? "bg-blue-500/20 text-blue-400" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/compliance"
              className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? "bg-blue-500/20 text-blue-400" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Compliance
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}