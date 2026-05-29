import { motion } from 'framer-motion';
import { FileSearch, ArrowRight, Globe, Search, BarChart3, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import './CalculatorPage.css';

const SEOAnalyzerPage = () => {
    return (
        <div className="calculator-page">
            <section className="calculator-hero">
                <div className="calculator-hero-container">
                    <motion.div
                        className="calculator-icon-wrapper"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FileSearch size={48} />
                    </motion.div>
                    <motion.h1
                        className="calculator-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        SEO <span className="text-gradient">Analyzer</span>
                    </motion.h1>
                    <motion.p
                        className="calculator-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Analyze your website SEO performance and get actionable recommendations
                    </motion.p>
                </div>
            </section>

            <section className="calculator-content">
                <div className="calculator-container">
                    <motion.div
                        className="calculator-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="card-title">Website Analysis</h2>

                        <div className="input-group">
                            <label className="input-label">
                                <Globe size={18} />
                                Website URL
                            </label>
                            <input
                                type="url"
                                className="calculator-input"
                                placeholder="https://example.com"
                                disabled
                            />
                        </div>

                        <div className="input-group">
                            <label className="input-label">
                                <Search size={18} />
                                Target Keywords (comma separated)
                            </label>
                            <input
                                type="text"
                                className="calculator-input"
                                placeholder="e.g., SEO, automation, analytics"
                                disabled
                            />
                        </div>

                        <div className="input-group">
                            <label className="input-label">
                                <BarChart3 size={18} />
                                Competitor URLs (optional)
                            </label>
                            <textarea
                                className="calculator-input calculator-textarea"
                                placeholder="Enter competitor URLs, one per line"
                                disabled
                            />
                        </div>

                        <Button size="lg" className="calculate-btn" disabled>
                            Analyze Website
                        </Button>

                        <p className="coming-soon-text">
                            Full analyzer functionality coming soon!
                        </p>
                    </motion.div>

                    <motion.div
                        className="results-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h2 className="card-title">SEO Score</h2>

                        <div className="score-circle">
                            <div className="score-value">--</div>
                            <div className="score-label">/ 100</div>
                        </div>

                        <div className="seo-metrics">
                            <div className="metric-item">
                                <CheckCircle size={18} className="metric-icon" />
                                <span className="metric-label">Technical SEO</span>
                                <span className="metric-value">--/100</span>
                            </div>
                            <div className="metric-item">
                                <CheckCircle size={18} className="metric-icon" />
                                <span className="metric-label">Content Quality</span>
                                <span className="metric-value">--/100</span>
                            </div>
                            <div className="metric-item">
                                <CheckCircle size={18} className="metric-icon" />
                                <span className="metric-label">Backlink Profile</span>
                                <span className="metric-value">--/100</span>
                            </div>
                            <div className="metric-item">
                                <CheckCircle size={18} className="metric-icon" />
                                <span className="metric-label">User Experience</span>
                                <span className="metric-value">--/100</span>
                            </div>
                        </div>

                        <div className="recommendations-placeholder">
                            <h3>Top Recommendations</h3>
                            <div className="recommendation-item">Analyze your website to get personalized recommendations</div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="back-link-wrapper"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <Link to="/community" className="back-link">
                        <ArrowRight size={18} className="rotate-180" />
                        Back to Community
                    </Link>
                </motion.div>
            </section>
        </div>
    );
};

export default SEOAnalyzerPage;
