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
      color: "from-purple-500 to-indigo-500",
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
      color: "from-pink-500 to-rose-500",
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
      color: "from-amber-500 to-orange-500",
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
    <header className="fixed top-0 left-0 w-full flex h-20 items-center justify-between px-6 lg:px-10 z-[100] bg-white/80 backdrop-blur-md border-b border-slate-200/50">

      {/* Logo */}
      <Link to="/" className="logo shrink-0 flex items-center" title="Marketing 4Sight">
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 transition-all duration-300">
          <img src={logo} alt="Marketing 4Sight" className="w-full h-full object-contain" />
        </div>

        {/* <div className="logo-text">
          MARKETING <span>4SIGHT</span>
        </div> */}
      </Link>

      {/* CENTER NAVIGATION - Desktop */}
      <div className="hidden md:flex flex-1 justify-center">

        <nav className="main flex items-center gap-8" aria-label="Primary navigation">

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
                  isOpen ? "rotate-180 text-purple-400" : ""
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
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[460px] bg-slate-950/90 backdrop-blur-2xl border border-white/10 rounded-xl p-3.5 shadow-[0_15px_45px_rgba(0,0,0,0.8)] transition-all duration-200 origin-top z-[100] ${
                isOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-2 gap-2">

                {dropdownItems.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/solutions/${item.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="flex gap-2.5 p-2 rounded-lg hover:bg-white/5 transition-all text-left group/item"
                  >
                    <div
                      className={`w-7 h-7 rounded bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 text-white`}
                    >
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-[11px] font-bold text-white tracking-wide group-hover/item:text-purple-400 transition-colors">
                        {item.title}
                      </h4>

                      <p className="text-[9px] text-gray-400 leading-snug mt-0.5 font-light">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="border-t border-white/10 mt-3 pt-2.5 flex justify-between items-center text-[9px] font-medium tracking-wide">
                <span className="text-gray-500">
                  6 SPECIALIZED DOMAINS
                </span>

                <Link
                  to="/solutions"
                  onClick={() => setIsOpen(false)}
                  className="text-purple-400 font-bold hover:text-purple-300 transition-colors flex items-center gap-0.5"
                >
                  Solutions Hub →
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
          className="text-slate-800 hover:text-purple-600 transition-colors focus:outline-none p-2"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[calc(100%+0.5rem)] left-4 right-4 bg-slate-950/95 backdrop-blur-xl border border-white/10 rounded-2xl md:hidden shadow-2xl overflow-hidden z-50">
          <nav className="flex flex-col p-2 gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? "bg-purple-500/20 text-purple-300" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? "bg-purple-500/20 text-purple-300" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Story
            </NavLink>
            <NavLink
              to="/product"
              className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? "bg-purple-500/20 text-purple-300" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Product
            </NavLink>
            <NavLink
              to="/solutions"
              className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? "bg-purple-500/20 text-purple-300" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </NavLink>
            <NavLink
              to="/pricing"
              className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? "bg-purple-500/20 text-purple-300" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? "bg-purple-500/20 text-purple-300" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? "bg-purple-500/20 text-purple-300" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/compliance"
              className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? "bg-purple-500/20 text-purple-300" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}
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