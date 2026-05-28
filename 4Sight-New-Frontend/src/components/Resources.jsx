import React, { useEffect } from 'react';
import BlogCard from './BlogCard';
import { blogsData } from '../data/blogsData';
import Footer from './Footer';

export default function Resources() {
  useEffect(() => {
    const container = document.getElementById('resources-scroll-container');
    if (container) container.scrollTo(0, 0);
  }, []);

  return (
    <div id="resources-scroll-container" className="relative w-full h-screen overflow-y-auto overflow-x-hidden bg-[#f4f7f9]">
      <div className="relative z-10 w-full flex flex-col min-h-screen">

        {/* ── HIGH CONTRAST HERO SECTION ── */}
        <section className="relative bg-gradient-to-br from-[#0859b8] to-[#053b7a] pt-40 px-5 pb-48 md:pb-56 text-center text-white overflow-hidden shrink-0">
            {/* Top White Fade for Header Visibility */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-90 z-0 pointer-events-none"></div>

            {/* Geometric Abstract Background */}
            <div className="absolute w-[600px] h-[600px] border-[20px] border-[#00adc4] rounded-full opacity-10 -top-[200px] -left-[150px] z-0 pointer-events-none"></div>
            <div className="absolute w-[400px] h-[400px] bg-[#e7eb90] rounded-full opacity-10 -bottom-[100px] -right-[100px] z-0 pointer-events-none"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
                <span className="inline-block bg-[#00adc4] text-white font-bold px-5 py-2 rounded-full text-xs md:text-sm uppercase tracking-widest mb-6 heading2 shadow-md">Knowledge Base</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight heading1 text-white drop-shadow-md">Transforming Business Intelligence</h1>
                <p className="text-lg md:text-xl lg:text-2xl text-blue-100 bodyText max-w-3xl mx-auto">Master data driven decision making in marketing to achieve intelligent automation, accelerated growth, and increased operational efficiency.</p>
            </div>
        </section>

        {/* ── LAYERED RESOURCES GRID ── */}
        <section className="bg-[#f4f7f9] pb-24 flex-grow">
            <div className="max-w-[1250px] mx-auto px-5 -mt-24 md:-mt-32 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogsData.map((blog, index) => (
                    <div 
                      key={blog.id} 
                      className="opacity-0 translate-y-10 animate-[fadeInUp_0.8s_ease_forwards]"
                      style={{ animationDelay: `${0.6 + (index * 0.2)}s` }}
                    >
                      <BlogCard blog={blog} />
                    </div>
                ))}
            </div>
        </section>

        <Footer />
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
