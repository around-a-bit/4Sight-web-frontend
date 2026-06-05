import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingSocialMediaButton from './components/FloatingSocialMediaButton';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.body.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, 10);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
        <main className="flex-grow z-10 relative">
          <Outlet />
        </main>
      <FloatingSocialMediaButton />
    </div>
  );
}
