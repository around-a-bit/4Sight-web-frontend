import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogsData } from '../data/blogsData';
import { ArrowLeft, Clock, User, Calendar, Share2, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogsData.find((b) => b.slug === slug);

  useEffect(() => {
    const container = document.getElementById('blog-detail-scroll-container');
    if (container) container.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  if (!blog) {
    return (
      <div className="relative w-full h-screen flex flex-col overflow-y-auto overflow-x-hidden bg-transparent pt-20">
        <div className="flex-grow flex items-center justify-center px-6">
          <div className="text-center bg-white/95 backdrop-blur-xl p-12 rounded-3xl border border-blue-100 shadow-xl max-w-md w-full">
            <div className="w-16 h-16 mx-auto bg-[#f0f7ff] rounded-2xl flex items-center justify-center mb-5 text-3xl border border-blue-100">
              🔍
            </div>
            <h1 className="heading1 text-5xl font-bold text_color mb-3">404</h1>
            <p className="bodyText text-gray-500 mb-8 text-base">The insight you're looking for doesn't exist or has been moved.</p>
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 px-6 py-3 primary_bg text-white heading2 font-semibold rounded-xl shadow hover:opacity-90 transition-all"
            >
              <ArrowLeft size={16} /> Back to Resources
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

  return (
    <div id="blog-detail-scroll-container" className="relative w-full h-screen overflow-y-auto overflow-x-hidden bg-transparent">

      {/* ── Hero Section ── */}
      <div className="w-full h-[420px] lg:h-[520px] relative overflow-hidden">
        {/* Background image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0859b8]/60 to-transparent"></div>

        {/* Back link */}
        <div className="absolute top-0 left-0 w-full pt-24 px-6 lg:px-20 z-20">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-semibold heading2 transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Resources
          </Link>
        </div>

        {/* Hero text */}
        <div className="absolute bottom-0 left-0 w-full z-20 px-6 lg:px-20 pb-12">
          <div className="max-w-4xl mx-auto">
            {/* Category */}
            <span className="heading2 inline-block px-4 py-1.5 secondary_bg text-white text-xs font-semibold rounded-full mb-5 shadow">
              {blog.category}
            </span>
            {/* Title */}
            <h1 className="heading1 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl">
              {blog.title}
            </h1>
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-6 text-white/70 text-sm smallText">
              <div className="flex items-center gap-2">
                <User size={14} className="text-[#00adc4]" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-[#00adc4]" />
                <span>{new Date(blog.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#00adc4]" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Article body ── */}
      <div className="w-full bg-transparent">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">

          {/* White content card */}
          <article className="bg-white rounded-3xl shadow-xl border border-gray-100 -mt-10 relative z-10 p-8 lg:p-14">

            {/* Article content */}
            <div
              className="
                bodyText text-lg leading-relaxed text-gray-700
                [&>p]:mb-7 [&>p]:leading-loose
                [&>h2]:heading1 [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-14 [&>h2]:mb-6 [&>h2]:text-[#0859b8] [&>h2]:tracking-tight
                [&>h3]:heading2 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text_color
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul>li]:mb-3 [&>ul>li]:pl-2
                [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-8 [&>ol>li]:mb-3 [&>ol>li]:pl-2
                [&>blockquote]:border-l-4 [&>blockquote]:border-[#0859b8] [&>blockquote]:pl-6 [&>blockquote]:py-2 [&>blockquote]:my-10 [&>blockquote]:italic [&>blockquote]:text-xl [&>blockquote]:text-[#0859b8] [&>blockquote]:bg-[#f0f7ff] [&>blockquote]:rounded-r-2xl [&>blockquote]:font-medium [&>blockquote]:leading-snug
                [&_strong]:font-bold [&_strong]:text-[#0859b8]
                [&>div]:my-8
              "
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Share section */}
            <div className="mt-14 bg-[#f0f7ff] rounded-2xl border border-blue-100 p-8">
              <h3 className="heading2 font-bold text_color mb-5 flex items-center gap-2.5 text-base">
                <Share2 size={18} className="primary_color" />
                Share This Insight
              </h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank')}
                  className="heading2 px-5 py-2.5 bg-white text_color text-sm font-semibold border border-blue-100 rounded-xl hover:border-[#0859b8] hover:shadow-md transition-all flex items-center gap-2"
                >
                  LinkedIn
                </button>
                <button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${window.location.href}&text=${blog.title}`, '_blank')}
                  className="heading2 px-5 py-2.5 bg-white text_color text-sm font-semibold border border-blue-100 rounded-xl hover:border-[#0859b8] hover:shadow-md transition-all flex items-center gap-2"
                >
                  Twitter / X
                </button>
                <button
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank')}
                  className="heading2 px-5 py-2.5 bg-white text_color text-sm font-semibold border border-blue-100 rounded-xl hover:border-[#0859b8] hover:shadow-md transition-all flex items-center gap-2"
                >
                  Facebook
                </button>
                <button
                  onClick={handleCopyLink}
                  className="heading2 px-5 py-2.5 primary_bg text-white text-sm font-semibold rounded-xl hover:opacity-90 shadow transition-all"
                >
                  Copy Link
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* ── Related articles ── */}
      {relatedBlogs.length > 0 && (
        <section className="w-full py-20 px-6 lg:px-20 bg-transparent mt-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-grow h-px bg-gray-200"></div>
              <h2 className="heading1 text-2xl font-bold text_color whitespace-nowrap">Related Insights</h2>
              <div className="flex-grow h-px bg-gray-200"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {relatedBlogs.map((relatedBlog) => (
                <Link
                  key={relatedBlog.id}
                  to={`/resources/${relatedBlog.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:shadow-[#0859b8]/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="w-full h-44 overflow-hidden relative">
                    <img
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 heading2 px-3 py-1 primary_bg text-white text-xs font-semibold rounded-full shadow">
                      {relatedBlog.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="heading2 font-bold text_color line-clamp-2 leading-snug mb-3 group-hover:primary_color transition-colors">
                      {relatedBlog.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-auto text-gray-400 text-xs smallText">
                      <Clock size={12} className="secondary_color" />
                      <span>{relatedBlog.readTime}</span>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="bodyText text-gray-400 text-xs">{relatedBlog.author}</span>
                      <span className="heading2 inline-flex items-center gap-1 text-xs primary_color font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Read <ArrowRight size={12} />
                      </span>
                    </div>
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
