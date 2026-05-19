import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer" id="site-footer" data-screen-label="Footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <div className="logo-mark">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2 L14.6 9.4 L22 12 L14.6 14.6 L12 22 L9.4 14.6 L2 12 L9.4 9.4 Z" fill="#fff"/>
              </svg>
            </div>
            <div className="logo-text">MARKETING <span>4SIGHT</span></div>
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
        <div className="footer-col">
          <h4>Product</h4>
          <ul>
            <li><Link to="/product">Overview</Link></li>
            <li><Link to="/product">How it works</Link></li>
            <li><Link to="/product">Capabilities</Link></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li><a href="#founders">For Founders</a></li>
            <li><a href="#teams">For Marketing Teams</a></li>
            <li><a href="#agencies">For Agencies</a></li>
            <li><a href="#usecases">Use Cases</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="#blogs">Blog</a></li>
            <li><a href="#whitepapers">Whitepapers</a></li>
            <li><a href="#ebooks">eBooks</a></li>
            <li><a href="#shf">Self-Help Forum</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#terms">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div>&copy; 2026 Quantyra. All rights reserved.</div>
        <div className="socials">
          <a href="#" aria-label="LinkedIn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22V8zm7.4 0h4.36v2.05h.06c.61-1.15 2.09-2.36 4.3-2.36 4.6 0 5.45 3.03 5.45 6.97V23h-4.55v-6.83c0-1.63-.03-3.73-2.27-3.73-2.27 0-2.62 1.78-2.62 3.61V23H7.62V8z"/>
            </svg>
          </a>
          <a href="#" aria-label="X">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.844l-5.36-7.014L4.6 22H1.34l8.02-9.16L1 2h7.014l4.847 6.41L18.244 2zm-2.4 18h1.886L7.24 4H5.215l10.628 16z"/>
            </svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
