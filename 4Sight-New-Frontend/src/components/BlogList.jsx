import React, { useEffect } from 'react';
import BlogCard from './BlogCard';
import { blogsData } from '../data/blogsData';
import Footer from './Footer';

export default function BlogList() {
  useEffect(() => {
    // Reset scroll position when loading the page
    const container = document.getElementById('resources-scroll-container');
    if (container) {
      container.scrollTo(0, 0);
    }
  }, []);

  return (
    <div id="resources-scroll-container" className="relative w-full h-screen overflow-y-auto overflow-x-hidden bg-[#FAF8FD] pt-8">
      
      {/* Decorative Blobs */}
      <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] rounded-full bg-purple-200/30 blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-pink-100/30 blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {/* Hero Section */}
        <section className="w-full pt-20 pb-16 px-6 lg:px-20 text-center">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100/70 border border-purple-200 text-purple-700 text-xs font-semibold tracking-wider uppercase mb-5">
              Marketing 4Sight Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1C1635] mb-6 tracking-tight leading-tight">
              Modern Marketing{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore strategic frameworks, operational insights, and connected data perspectives designed for modern marketing teams.
            </p>
          </div>
        </section>

        {/* Blog Grid Section */}
        <section className="w-full px-6 lg:px-20 pb-32 flex-grow">
          <div className="max-w-7xl mx-auto">
            {blogsData.length === 0 ? (
              <div className="text-center py-24 bg-white/50 backdrop-blur-sm rounded-3xl border border-purple-100 shadow-sm">
                <div className="w-16 h-16 mx-auto bg-purple-100 text-purple-500 rounded-full flex items-center justify-center mb-4 text-2xl">📚</div>
                <h3 className="text-xl font-bold text-[#1C1635] mb-2">No Resources Yet</h3>
                <p className="text-gray-500">Check back soon for new marketing insights.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogsData.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Footer rendering at the bottom of the scroll container */}
        <Footer />
      </div>
    </div>
  );
}
