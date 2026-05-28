import { Link } from 'react-router-dom';

export default function BlogCard({ blog }) {
  return (
    <Link to={`/resources/${blog.slug}`} className="block group h-full">
      <article className="bg-white rounded-xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.1)] group-hover:shadow-[0_30px_60px_rgba(8,89,184,0.2)] group-hover:-translate-y-5 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] flex flex-col h-full">
        
        <div className="relative h-60 bg-gradient-to-tr from-[#e0e8f0] to-[#f8fafd] border-b-4 border-[#00adc4] group-hover:border-[#e7eb90] transition-colors duration-300">
            <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
            <span className="absolute top-5 left-5 bg-white text-[#0859b8] px-4 py-1.5 rounded heading2 text-xs uppercase tracking-wider shadow-md">
                {blog.category}
            </span>
        </div>

        <div className="p-8 flex flex-col flex-grow">
            <h2 className="text-2xl font-bold text-[#222222] group-hover:text-[#0859b8] transition-colors duration-300 mb-4 leading-snug heading1">
                {blog.title}
            </h2>
            <p className="text-gray-600 text-base mb-8 flex-grow bodyText line-clamp-3">
                {blog.excerpt}
            </p>
            <div className="inline-block w-full sm:w-auto px-8 py-3.5 bg-white text-[#0859b8] border-2 border-[#0859b8] group-hover:bg-[#e7eb90] group-hover:text-[#222222] group-hover:border-[#e7eb90] rounded-lg heading1 text-sm uppercase text-center transition-all duration-300 group-hover:scale-[1.02]">
                Read Article
            </div>
        </div>

      </article>
    </Link>
  );
}
