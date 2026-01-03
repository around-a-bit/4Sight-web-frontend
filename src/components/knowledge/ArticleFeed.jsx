import { motion } from 'framer-motion';
import ArticleCard from './ArticleCard';
import Skeleton from '../ui/Skeleton';
import { FileText } from 'lucide-react';
import { getAllBlogPosts } from '../../data/blogContent1';
import './ArticleFeed.css';

// Get blog posts from centralized data source
const blogPosts = getAllBlogPosts();

const ArticleFeed = ({ articles, loading = false, error = null }) => {
    // Use blog data if no articles provided
    const displayArticles = articles || blogPosts;

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
