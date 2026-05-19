import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* PERSISTENT BRAND DECK BACKGROUND */}
      <div className="bg-wash-container" aria-hidden="true">
        <div className="bg-wash"></div>
        <div className="bg-grid"></div>
        <div className="silhouette s1">
          <svg viewBox="0 0 160 100" fill="currentColor">
            <rect x="6" y="60" width="20" height="34" rx="3" />
            <rect x="34" y="44" width="20" height="50" rx="3" />
            <rect x="62" y="28" width="20" height="66" rx="3" />
            <rect x="90" y="50" width="20" height="44" rx="3" />
            <rect x="118" y="14" width="20" height="80" rx="3" />
          </svg>
        </div>
        <div className="silhouette s2">
          <svg viewBox="0 0 200 100" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 78 L36 64 L70 70 L104 42 L138 50 L172 22 L196 12" />
            <path d="M4 78 L36 64 L70 70 L104 42 L138 50 L172 22 L196 12 L196 96 L4 96 Z" fill="currentColor" stroke="none" opacity=".35" />
          </svg>
        </div>
      </div>

      {/* STICKY HEADER */}
      <Header />

      {/* DYNAMIC ROUTE BODY */}
      <main className="flex-grow z-10 relative">
        <Outlet />
      </main>
    </div>
  );
}
