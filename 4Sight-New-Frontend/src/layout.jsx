import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* PERSISTENT BRAND DECK BACKGROUND */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-slate-50" aria-hidden="true">
        {/* bg-wash */}
        <div className="absolute inset-[-5%] bg-[radial-gradient(60%_50%_at_85%_8%,rgba(219,39,119,0.07),transparent_60%),radial-gradient(55%_50%_at_10%_90%,rgba(124,58,237,0.08),transparent_65%),linear-gradient(180deg,#FBF8FE_0%,#F4EEFB_100%)] transition-transform duration-1000"></div>
        
        {/* bg-grid */}
        <div className="absolute inset-0 bg-[image:linear-gradient(to_right,rgba(124,58,237,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(124,58,237,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,#000_35%,transparent_90%)] transition-all duration-1000"></div>
        
        <div className="absolute -bottom-24 -left-24 w-[32rem] opacity-[0.03] text-[var(--violet)]">
          <svg viewBox="0 0 160 100" fill="currentColor" className="w-full h-full">
            <rect x="6" y="60" width="20" height="34" rx="3" />
            <rect x="34" y="44" width="20" height="50" rx="3" />
            <rect x="62" y="28" width="20" height="66" rx="3" />
            <rect x="90" y="50" width="20" height="44" rx="3" />
            <rect x="118" y="14" width="20" height="80" rx="3" />
          </svg>
        </div>
        <div className="absolute -bottom-12 -right-12 w-[40rem] opacity-[0.03] text-[var(--magenta)]">
          <svg viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
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

      {/* STICKY WHATSAPP BUTTON */}
      <WhatsAppButton />
    </div>
  );
}
