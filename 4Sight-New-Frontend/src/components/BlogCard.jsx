import { Link } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';

export default function BlogCard({ blog }) {
  return (
    <Link to={`/resources/${blog.slug}`} className="block h-full group">
      <div className="bg-white/80 backdrop-blur-sm border border-purple-100 rounded-2xl overflow-hidden shadow-md shadow-purple-900/5 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col relative group-hover:border-purple-200">
        
        {/* Blog Image */}
        <div className="w-full h-52 overflow-hidden bg-purple-50 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent z-10"></div>
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Category Badge overlaying the image */}
          <span className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-white/90 backdrop-blur-md text-purple-700 text-xs font-semibold rounded-full shadow-sm">
            {blog.category}
          </span>
        </div>

        {/* Blog Content */}
        <div className="p-6 flex flex-col flex-grow relative bg-white">
          {/* Title */}
          <h3 className="text-xl font-bold text-[#1C1635] mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-500 transition-all duration-300">
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed">
            {blog.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center justify-between text-gray-400 text-[13px] mt-auto pt-4 border-t border-purple-50">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-purple-400" />
              <span>{new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-pink-400" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
