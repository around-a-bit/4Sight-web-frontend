import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogsData } from '../data/blogsData';
import { ArrowLeft, Clock, User, Calendar, Share2 } from 'lucide-react';
import Footer from './Footer';

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);

  useEffect(() => {
    const container = document.getElementById('blog-detail-scroll-container');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [slug]);

  if (!blog) {
    return (
      <div className="relative w-full h-screen flex flex-col overflow-y-auto overflow-x-hidden bg-[#FAF8FD] pt-16">
        <div className="flex-grow flex items-center justify-center px-6">
          <div className="text-center bg-white p-10 rounded-3xl border border-purple-100 shadow-xl max-w-md w-full">
            <h1 className="text-4xl font-black text-[#1C1635] mb-4">404</h1>
            <p className="text-gray-600 mb-8 font-medium">The insight you're looking for doesn't exist or has been moved.</p>
            <Link 
              to="/resources" 
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all inline-block"
            >
              Back to Resources
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedBlogs = blogsData.filter(
    (b) => b.category === blog.category && b.id !== blog.id
  ).slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  return (
    <div id="blog-detail-scroll-container" className="relative w-full h-screen overflow-y-auto overflow-x-hidden bg-[#FAF8FD] pt-22">
      
      {/* Navigation Bar
      <div className="w-full bg-[#FAF8FD] py-4 relative z-40">
        <div className="max-w-4xl mx-auto px-6">
          <Link 
            to="/resources" 
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold transition group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Insights</span>
          </Link>
        </div>
      </div> */}

      {/* Hero Image Section */}
      <div className="w-full h-[400px] lg:h-[500px] overflow-hidden bg-purple-900 relative ">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1635] to-transparent z-10 opacity-80"></div>
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover scale-105"
        />
        {/* Title overlaying the hero */}
        <div className="absolute bottom-0 left-0 w-full z-20 pb-12 pt-24 bg-gradient-to-t from-[#1C1635] to-transparent">
          <div className="max-w-4xl mx-auto px-6">
            <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md text-white font-semibold rounded-full mb-6 text-sm border border-white/20">
              {blog.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-5xl font-black text-white leading-tight mb-6">
              {blog.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 text-purple-200 text-sm">
              <div className="flex items-center gap-2">
                <User size={16} className="text-pink-400" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-pink-400" />
                <span>{new Date(blog.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-pink-400" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <article className="max-w-4xl mx-auto px-6 py-16 bg-white relative -mt-6 rounded-t-3xl shadow-xl shadow-purple-900/5 z-30 border border-purple-50">
        
        <div className="max-w-3xl mx-auto">
          <div 
            className="
              text-lg leading-relaxed text-gray-700
              [&>p]:mb-7 [&>p]:leading-loose
              [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-16 [&>h2]:mb-6 [&>h2]:text-[#1C1635] [&>h2]:tracking-tight
              [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-[#1C1635]
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul>li]:mb-3 [&>ul>li]:pl-2 [&>ul>li::marker]:text-purple-500
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-8 [&>ol>li]:mb-3 [&>ol>li]:pl-2
              [&>blockquote]:border-l-4 [&>blockquote]:border-purple-500 [&>blockquote]:pl-6 [&>blockquote]:py-4 [&>blockquote]:my-10 [&>blockquote]:italic [&>blockquote]:text-2xl [&>blockquote]:text-[#1C1635] [&>blockquote]:bg-gradient-to-r [&>blockquote]:from-purple-50 [&>blockquote]:to-transparent [&>blockquote]:rounded-r-2xl [&>blockquote]:font-medium [&>blockquote]:leading-snug
              [&>strong]:font-bold [&>strong]:text-[#1C1635]
              [&>div]:my-8
            "
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></div>
        </div>

        {/* Share Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
          <h3 className="font-bold text-[#1C1635] mb-5 flex items-center gap-2.5">
            <Share2 size={20} className="text-purple-600" />
            Share This Insight
          </h3>
          <div className="flex flex-wrap gap-3.5">
            <button 
              onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')}
              className="px-5 py-2.5 bg-white text-[#1C1635] text-sm font-semibold border border-purple-100 rounded-xl hover:border-purple-300 hover:shadow-md transition-all flex items-center gap-2"
            >
              LinkedIn
            </button>
            <button 
              onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog.title}`, '_blank')}
              className="px-5 py-2.5 bg-white text-[#1C1635] text-sm font-semibold border border-purple-100 rounded-xl hover:border-purple-300 hover:shadow-md transition-all flex items-center gap-2"
            >
              Twitter
            </button>
            <button 
              onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
              className="px-5 py-2.5 bg-white text-[#1C1635] text-sm font-semibold border border-purple-100 rounded-xl hover:border-purple-300 hover:shadow-md transition-all flex items-center gap-2"
            >
              Facebook
            </button>
            <button 
              onClick={handleCopyLink}
              className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Copy Link
            </button>
          </div>
        </div>

      </article>

      {/* Related Blogs Section */}
      {relatedBlogs.length > 0 && (
        <section className="w-full bg-[#FAF8FD] py-20 px-6 lg:px-20 border-t border-purple-50 mt-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-black text-[#1C1635] mb-10 text-center">Related Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedBlogs.map((relatedBlog) => (
                <Link 
                  key={relatedBlog.id}
                  to={`/resources/${relatedBlog.slug}`}
                  className="bg-white p-5 rounded-2xl border border-purple-100 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all group"
                >
                  <div className="w-full h-40 overflow-hidden rounded-xl mb-5 relative">
                    <div className="absolute inset-0 bg-purple-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src={relatedBlog.image} 
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-bold text-[#1C1635] line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 transition-all leading-snug">
                    {relatedBlog.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs mt-3">
                    <Clock size={12} />
                    <span>{relatedBlog.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
