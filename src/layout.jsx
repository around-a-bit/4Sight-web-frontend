import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background inherited from index.css */}

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
