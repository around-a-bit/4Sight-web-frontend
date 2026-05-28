import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function Layout() {
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
