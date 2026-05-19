import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownItems = [
    {
      slug: "strategy-planning",
      title: "Strategy Planning",
      desc: "Align teams, set goals, and cascade strategic OKRs.",
      color: "from-purple-500 to-indigo-500",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    },
    {
      slug: "governance",
      title: "Governance",
      desc: "Monitor execution consistency and compliance.",
      color: "from-pink-500 to-rose-500",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      slug: "optimization",
      title: "Optimization",
      desc: "Competitor positioning and visibility dashboards.",
      color: "from-amber-500 to-orange-500",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      slug: "multi-channel-ops",
      title: "Multi-Channel Ops",
      desc: "Process orchestration and publishing workflows.",
      color: "from-blue-500 to-teal-500",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </svg>
      )
    },
    {
      slug: "organic-growth",
      title: "Organic Growth",
      desc: "Local search GMB listings and keyword rank universes.",
      color: "from-emerald-500 to-teal-500",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      slug: "content-operations",
      title: "Content Operations",
      desc: "Campaign-aligned asset planning and social flows.",
      color: "from-indigo-500 to-cyan-500",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    }
  ];

  return (
    <header className="site-header">
      <Link to="/" className="logo" title="Marketing 4Sight">
        <div className="logo-mark">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 2 L14.6 9.4 L22 12 L14.6 14.6 L12 22 L9.4 14.6 L2 12 L9.4 9.4 Z" fill="#fff" />
          </svg>
        </div>
        <div className="logo-text">MARKETING <span>4SIGHT</span></div>
      </Link>
      <nav className="main" aria-label="Primary navigation">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>Our Story</NavLink>
        <NavLink to="/product" className={({ isActive }) => isActive ? 'active' : ''}>Product</NavLink>
        
        {/* Dynamic Hover Dropdown */}
        <div 
          className="relative inline-block py-2"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <NavLink 
            to="/solutions" 
            className={({ isActive }) => `flex items-center gap-1 cursor-pointer transition-all ${isActive ? 'active' : ''}`}
          >
            Solutions
            <svg 
              className={`w-2.5 h-2.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-purple-400' : ''}`} 
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
          
          <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[460px] bg-slate-950/90 backdrop-blur-2xl border border-white/10 rounded-xl p-3.5 shadow-[0_15px_45px_rgba(0,0,0,0.8)] transition-all duration-200 origin-top z-[100] ${
            isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
          }`}>
            <div className="grid grid-cols-2 gap-2">
              {dropdownItems.map((item) => (
                <Link
                  key={item.slug}
                  to={`/solutions/${item.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="flex gap-2.5 p-2 rounded-lg hover:bg-white/5 transition-all text-left group/item"
                >
                  <div className={`w-7 h-7 rounded bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 text-white font-semibold shadow-inner group-hover/item:scale-105 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-white tracking-wide group-hover/item:text-purple-400 transition-colors">{item.title}</h4>
                    <p className="text-[9px] text-gray-400 leading-snug mt-0.5 font-light">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="border-t border-white/10 mt-3 pt-2.5 flex justify-between items-center text-[9px] font-medium tracking-wide">
              <span className="text-gray-500">6 SPECIALIZED DOMAINS</span>
              <Link 
                to="/solutions" 
                onClick={() => setIsOpen(false)}
                className="text-purple-400 font-bold hover:text-purple-300 transition-colors flex items-center gap-0.5"
              >
                Solutions Hub &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* <NavLink to="/use-cases" className={({ isActive }) => isActive ? 'active' : ''}>Use Cases</NavLink> */}
        <NavLink to="/pricing" className={({ isActive }) => isActive ? 'active' : ''}>Pricing</NavLink>
        <NavLink to="/resources" className={({ isActive }) => isActive ? 'active' : ''}>Resources</NavLink>
        <NavLink to="/contact-us" className={({ isActive }) => isActive ? 'active' : ''}>Contact Us</NavLink>
        <NavLink to="/compliance" className={({ isActive }) => isActive ? 'active' : ''}>Compliance</NavLink>
      </nav>
      <div className="auth">
        <a href="#" className="btn-ghost">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" style={{ marginRight: '4px' }}>
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" y1="12" x2="3" y2="12" />
          </svg>
          Login
        </a>
        <a href="#" className="btn-solid">Sign Up</a>
      </div>
    </header>
  );
}

