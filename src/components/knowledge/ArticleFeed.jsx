import { motion } from 'framer-motion';
import ArticleCard from './ArticleCard';
import Skeleton from '../ui/Skeleton';
import { FileText } from 'lucide-react';
import './ArticleFeed.css';

// Mock articles - these would come from API in production
const mockArticles = [
    {
        id: '1',
        slug: 'data-driven-decision-making-in-marketing',
        title: 'Data Driven Decision Making in Marketing',
        excerpt: 'Discover how leveraging data analytics transforms marketing strategies, enabling precise targeting, optimized campaigns, and measurable ROI across all channels.',
        author: { name: 'TDSC Research Team' },
        publishedDate: '2024-12-20',
        readTime: '10 min read',
        coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
    },
    {
        id: '2',
        slug: 'data-driven-augmentation-of-seo-programs',
        title: 'Data Driven Augmentation of SEO Programs',
        excerpt: 'Learn how 4Sight\'s data-driven approach enhances SEO programs through intelligent automation, real-time analytics, and strategic keyword optimization.',
        author: { name: '4Sight Team' },
        publishedDate: '2024-12-18',
        readTime: '8 min read',
        coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
    },
    {
        id: '3',
        slug: 'sigo-framework-demystified',
        title: 'SIGO Framework De-mystified',
        excerpt: 'A comprehensive breakdown of the Strategy, Implementation, Governance, and Optimization framework that powers modern SEO excellence.',
        author: { name: 'TDSC Research Team' },
        publishedDate: '2024-12-15',
        readTime: '12 min read',
        coverImage: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=800&h=450&fit=crop',
    },
    {
        id: '4',
        slug: 'seo-projects-business-contextual-sigo-framework',
        title: 'SEO Projects Made Business Contextual and Growth Driven Using SIGO Framework',
        excerpt: 'Transform your SEO initiatives from technical exercises into strategic business drivers using the SIGO framework\'s holistic approach.',
        author: { name: '4Sight Team' },
        publishedDate: '2024-12-12',
        readTime: '9 min read',
        coverImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop',
    },
    {
        id: '5',
        slug: 'transforming-businesses-ai-predictive-modelling',
        title: 'Transforming Businesses with AI & Predictive Modelling',
        excerpt: 'Explore how artificial intelligence and predictive modeling are revolutionizing business operations, from forecasting to decision automation.',
        author: { name: 'TDSC Research Team' },
        publishedDate: '2024-12-08',
        readTime: '11 min read',
        coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop',
    },
    {
        id: '6',
        slug: '5-markers-predict-keyword-authority',
        title: '5 Markers or Symptoms That Can Predict Your Future Keyword Authority',
        excerpt: 'Identify the key indicators that signal your potential for keyword dominance and learn how to leverage them for sustained SEO success.',
        author: { name: '4Sight Team' },
        publishedDate: '2024-12-05',
        readTime: '7 min read',
        coverImage: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&h=450&fit=crop',
    },
];

const ArticleFeed = ({ articles, loading = false, error = null }) => {
    // Use mock data if no articles provided (for demo purposes)
    const displayArticles = articles || mockArticles;

    // Loading state
    if (loading) {
        return (
            <div className="article-feed">
                <div className="article-feed-grid">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Skeleton.Card key={index} />
                    ))}
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="article-feed">
                <div className="article-feed-error">
                    <div className="error-icon">
                        <FileText size={48} />
                    </div>
                    <h3 className="error-title">Unable to load articles</h3>
                    <p className="error-message">{error}</p>
                </div>
            </div>
        );
    }

    // Empty state
    if (!displayArticles || displayArticles.length === 0) {
        return (
            <div className="article-feed">
                <div className="article-feed-empty">
                    <div className="empty-icon">
                        <FileText size={48} />
                    </div>
                    <h3 className="empty-title">No articles yet</h3>
                    <p className="empty-message">Check back soon for new content!</p>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            className="article-feed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="article-feed-grid">
                {displayArticles.map((article, index) => (
                    <ArticleCard
                        key={article.id}
                        slug={article.slug}
                        title={article.title}
                        excerpt={article.excerpt}
                        author={article.author}
                        publishedDate={article.publishedDate}
                        readTime={article.readTime}
                        coverImage={article.coverImage}
                        index={index}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default ArticleFeed;
