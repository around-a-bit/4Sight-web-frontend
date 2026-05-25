import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/4Sight_new_logo.png';

export default function Footer() {
  return (
    <footer className="site-footer" id="site-footer" data-screen-label="Footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="flex items-center shrink-0 mb-4" title="Marketing 4Sight">
            <div className="w-20 h-20 sm:w-24 sm:h-24 transition-all duration-300">
              <img src={logo} alt="Marketing 4Sight" className="w-full h-full object-contain" />
            </div>
          </Link>
          <p>The data-driven marketing OS. Built on the SIGO framework by Quantyra.</p>
          <div className="footer-contact" style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ display: 'flex', gap: '10px', fontSize: '13.5px', color: 'var(--ink-dim)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--violet)', flexShrink: 0 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              83, S.P Mukherjee Road, Hazra, Kolkata - 700026, West Bengal, India
            </span>
            <a href="tel:+919830050939" style={{ display: 'flex', gap: '10px', fontSize: '13.5px', color: 'var(--ink-dim)', textDecoration: 'none', transition: 'color .2s' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style={{ color: 'var(--violet)', flexShrink: 0 }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L8 9.69a16 16 0 0 0 6 6l1.25-1.25a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92z"/>
              </svg>
              +91 98300 50939
            </a>
          </div>
        </div>
        <div className="footer-col" style={{ paddingTop: '10px' }}>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => (isActive ? "active text-purple-500 font-medium" : "hover:text-purple-400 transition-colors")}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active text-purple-500 font-medium" : "hover:text-purple-400 transition-colors")}>Our Story</NavLink></li>
            <li><NavLink to="/product" className={({ isActive }) => (isActive ? "active text-purple-500 font-medium" : "hover:text-purple-400 transition-colors")}>Product</NavLink></li>
          </ul>
        </div>
        <div className="footer-col" style={{ paddingTop: '10px' }}>
          <ul>
            <li><NavLink to="/solutions" className={({ isActive }) => (isActive ? "active text-purple-500 font-medium" : "hover:text-purple-400 transition-colors")}>Solutions</NavLink></li>
            <li><NavLink to="/pricing" className={({ isActive }) => (isActive ? "active text-purple-500 font-medium" : "hover:text-purple-400 transition-colors")}>Pricing</NavLink></li>
            <li><NavLink to="/resources" className={({ isActive }) => (isActive ? "active text-purple-500 font-medium" : "hover:text-purple-400 transition-colors")}>Resources</NavLink></li>
          </ul>
        </div>
        <div className="footer-col" style={{ paddingTop: '10px' }}>
          <ul>
            <li><NavLink to="/contact-us" className={({ isActive }) => (isActive ? "active text-purple-500 font-medium" : "hover:text-purple-400 transition-colors")}>Contact Us</NavLink></li>
            <li><NavLink to="/compliance" className={({ isActive }) => (isActive ? "active text-purple-500 font-medium" : "hover:text-purple-400 transition-colors")}>Compliance</NavLink></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          &copy; {new Date().getFullYear()} Quantyra Analytics Private Limited. All rights reserved.
        </div>
        <div className="socials">
          <a href="https://www.facebook.com/share/18RT1JdEhP/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/quantyra-analytics/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22V8zm7.4 0h4.36v2.05h.06c.61-1.15 2.09-2.36 4.3-2.36 4.6 0 5.45 3.03 5.45 6.97V23h-4.55v-6.83c0-1.63-.03-3.73-2.27-3.73-2.27 0-2.62 1.78-2.62 3.61V23H7.62V8z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
