# Blog Implementation Guide - React + Tailwind
## Resources Page → Blog List → Individual Blog Pages

---

## 🎯 Overview

Your site structure:
- **Resources** (parent page) → **Blog List Page** (shows all blogs) → **Individual Blog Page** (specific blog content)

---

## 📁 Folder Structure

```
src/
├── pages/
│   ├── Resources/
│   │   ├── index.jsx          (Resources homepage - links to blogs)
│   │   ├── BlogList.jsx       (All blogs list page)
│   │   └── BlogDetail.jsx     (Individual blog page - dynamic)
│   │
│   ├── Home.jsx
│   ├── OurStory.jsx
│   └── ... other pages
│
├── components/
│   ├── BlogCard.jsx           (Reusable blog card component)
│   └── BlogHero.jsx           (Hero section for blog detail)
│
├── data/
│   └── blogsData.js           (All blog content - centralized data)
│
├── styles/
│   └── globals.css            (Global Tailwind styles)
│
└── App.jsx                    (Router setup)
```

---

## 🔑 Key Concept: Dynamic Routing

Instead of creating a separate file for EVERY blog (which is not scalable), use **dynamic routing with a slug**.

```
/resources/blogs         → BlogList page (shows all)
/resources/blogs/:slug   → BlogDetail page (shows specific blog based on slug)
```

**Example:**
- `/resources/blogs/unified-fragmented-marketing` → Blog 1
- `/resources/blogs/data-driven-decision-making` → Blog 2
- `/resources/blogs/future-proofing-with-ai` → Blog 3

---

## 📊 Data Structure

### `src/data/blogsData.js`

```javascript
export const blogsData = [
  {
    id: 1,
    slug: "unified-fragmented-marketing",
    title: "Unified Fragmented Modern Marketing Through an Integrated Technology-Driven Framework",
    excerpt: "A marketing review meeting begins on Monday morning. The SEO team is discussing ranking fluctuations...",
    category: "Marketing Strategy",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    author: "Quantyra Team",
    image: "/images/blog-1.jpg",
    content: `
      <h1>Unified Fragmented Modern Marketing...</h1>
      <p>A marketing review meeting begins...</p>
      <!-- Full blog content in HTML or JSX -->
    `,
    seo: {
      metaDescription: "Learn how to unify fragmented marketing operations...",
      keywords: ["marketing", "strategy", "operations"]
    }
  },
  {
    id: 2,
    slug: "data-driven-decision-making",
    title: "How Data-Backed Decision Making Can Optimize Marketing Performance",
    excerpt: "It is the last week of the month. The SEO agency has submitted ranking reports...",
    category: "Data Analytics",
    publishDate: "2024-01-20",
    readTime: "7 min read",
    author: "Quantyra Team",
    image: "/images/blog-2.jpg",
    content: `...`,
    seo: { /* ... */ }
  },
  {
    id: 3,
    slug: "future-proofing-with-ai",
    title: "Future-Proofing Your Marketing Framework with AI Copilot",
    excerpt: "A few years ago, marketing teams planned campaigns quarterly. Today, visibility shifts weekly...",
    category: "AI & Technology",
    publishDate: "2024-02-01",
    readTime: "9 min read",
    author: "Quantyra Team",
    image: "/images/blog-3.jpg",
    content: `...`,
    seo: { /* ... */ }
  }
  // Add more blogs as needed
];
```

---

## 🛠️ Component Implementation

### 1. BlogCard Component
### `src/components/BlogCard.jsx`

```jsx
import { Link } from 'react-router-dom';
import { Clock, User, Calendar } from 'lucide-react';

export default function BlogCard({ blog }) {
  return (
    <Link to={`/resources/blogs/${blog.slug}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        {/* Blog Image */}
        <div className="w-full h-48 overflow-hidden bg-gray-200">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Blog Content */}
        <div className="p-6">
          {/* Category Badge */}
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-3">
            {blog.category}
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600">
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {blog.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 text-gray-500 text-xs">
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{new Date(blog.publishDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{blog.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <User size={14} />
              <span>{blog.author}</span>
            </div>
          </div>

          {/* Read More Link */}
          <div className="mt-4 text-blue-600 font-semibold text-sm hover:text-blue-800">
            Read More →
          </div>
        </div>
      </div>
    </Link>
  );
}
```

---

### 2. BlogList Page
### `src/pages/Resources/BlogList.jsx`

```jsx
import { useEffect } from 'react';
import BlogCard from '../../components/BlogCard';
import { blogsData } from '../../data/blogsData';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BlogList() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/resources" 
            className="flex items-center gap-2 mb-6 hover:opacity-80 transition"
          >
            <ArrowLeft size={20} />
            <span>Back to Resources</span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Marketing Insights & Resources
          </h1>
          <p className="text-lg text-blue-100">
            Explore frameworks, strategies, and perspectives on modern marketing operations
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {blogsData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No blogs available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
```

---

### 3. BlogDetail Page (Dynamic)
### `src/pages/Resources/BlogDetail.jsx`

```jsx
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogsData } from '../../data/blogsData';
import { ArrowLeft, Clock, User, Calendar, Share2 } from 'lucide-react';

export default function BlogDetail() {
  const { slug } = useParams(); // Get slug from URL
  const navigate = useNavigate();

  // Find blog by slug
  const blog = blogsData.find((b) => b.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Handle blog not found
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-8">The blog you're looking for doesn't exist.</p>
          <Link 
            to="/resources/blogs" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to All Blogs
          </Link>
        </div>
      </div>
    );
  }

  // Get related blogs (other blogs with same category)
  const relatedBlogs = blogsData.filter(
    (b) => b.category === blog.category && b.id !== blog.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link 
            to="/resources/blogs" 
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
          >
            <ArrowLeft size={20} />
            <span>Back to All Blogs</span>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-96 overflow-hidden bg-gray-200">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 font-semibold rounded-full mb-4">
            {blog.category}
          </span>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-gray-600 border-b pb-6">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{new Date(blog.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div 
            dangerouslySetInnerHTML={{ __html: blog.content }}
            className="text-gray-700 leading-relaxed"
          />
        </div>

        {/* Share Section */}
        <div className="bg-blue-50 p-6 rounded-lg mb-12 border border-blue-200">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Share2 size={20} />
            Share This Article
          </h3>
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              LinkedIn
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">
              Twitter
            </button>
            <button className="px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-950">
              Facebook
            </button>
            <button className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800">
              Copy Link
            </button>
          </div>
        </div>

        {/* Related Blogs */}
        {relatedBlogs.length > 0 && (
          <div className="mt-16 pt-12 border-t">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog) => (
                <Link 
                  key={relatedBlog.id}
                  to={`/resources/blogs/${relatedBlog.slug}`}
                  className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
                >
                  <div className="w-full h-32 overflow-hidden rounded mb-4">
                    <img 
                      src={relatedBlog.image} 
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 line-clamp-2 hover:text-blue-600">
                    {relatedBlog.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-12 mt-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Explore More Resources</h2>
          <p className="text-blue-100 mb-8">Discover insights on marketing strategy, operations, and digital transformation</p>
          <Link 
            to="/resources/blogs" 
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition inline-block"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
```

---

## 🔀 Router Setup

### `src/App.jsx`

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogList from './pages/Resources/BlogList';
import BlogDetail from './pages/Resources/BlogDetail';
import ResourcesHome from './pages/Resources/index';
import Home from './pages/Home';
import OurStory from './pages/OurStory';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<ResourcesHome />} />
        <Route path="/resources/blogs" element={<BlogList />} />
        <Route path="/resources/blogs/:slug" element={<BlogDetail />} />
        <Route path="/our-story" element={<OurStory />} />
        {/* Other routes... */}
      </Routes>
    </Router>
  );
}
```

---

## 📱 Resources Home Page (Parent)

### `src/pages/Resources/index.jsx`

```jsx
import { Link } from 'react-router-dom';

export default function Resources() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-blue-100">
            Knowledge base, frameworks, and guides for modern marketing
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Explore Our Blog
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Insights, frameworks, and strategies on marketing operations, 
              data-driven decision making, and digital transformation.
            </p>
            <Link 
              to="/resources/blogs" 
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition inline-block"
            >
              Read Our Blog →
            </Link>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {/* Visual representation or recent posts preview */}
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## 🚀 Workflow Summary

### User Journey:

1. **User visits `/resources`**
   - Sees Resources home page
   - Clicks "Read Our Blog" button

2. **User visits `/resources/blogs`**
   - Sees grid of all blogs (BlogList component)
   - Each blog shows: title, image, excerpt, category, read time

3. **User clicks on a blog card**
   - URL changes to `/resources/blogs/blog-slug`
   - BlogDetail component loads
   - Content displays dynamically based on slug

4. **In BlogDetail:**
   - Full blog content is shown
   - Related articles appear at bottom
   - Share buttons available
   - Back button to return to blog list

---

## ✅ Advantages of This Approach

| Feature | Benefit |
|---------|---------|
| **Dynamic Routing with Slug** | Add unlimited blogs without creating new files |
| **Centralized Data** | Easy to manage, update, or move blogs to a database later |
| **Reusable Components** | BlogCard can be used in multiple places (homepage, category pages, etc.) |
| **SEO Friendly** | Clean URLs, meta data handling per blog |
| **Scalable** | Switch from JSON data to API/database without changing component logic |
| **Related Blogs** | Show relevant content for better UX |

---

## 📝 Adding New Blogs

Simply add to `blogsData.js`:

```javascript
{
  id: 4,
  slug: "new-blog-slug",
  title: "New Blog Title",
  excerpt: "Brief excerpt...",
  category: "Category Name",
  publishDate: "2024-03-01",
  readTime: "6 min read",
  author: "Author Name",
  image: "/images/blog-4.jpg",
  content: `HTML or formatted content...`,
  seo: { /* SEO metadata */ }
}
```

That's it! The blog will automatically appear on:
- `/resources/blogs` (blog list)
- `/resources/blogs/new-blog-slug` (individual page)

---

## 🎨 Tailwind Classes Used

- `prose` - For rich text formatting
- `line-clamp-2` - Truncate text to 2 lines
- `hover:shadow-lg` - Shadow on hover
- `transition-all` - Smooth animations
- Grid layouts - `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Responsive spacing - `px-4 py-16`

---

## 🔧 Next Steps

1. Create the folder structure
2. Set up React Router
3. Create `blogsData.js` with your blog content
4. Build the components (BlogCard, BlogList, BlogDetail)
5. Add routing to App.jsx
6. Update Resources home page

This approach scales beautifully and keeps everything organized! 🎯
