import { motion } from 'framer-motion';
import { LineChart, ArrowRight, TrendingUp, Calendar, Filter, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import './CalculatorPage.css';

const TrendTrackerPage = () => {
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
                        <LineChart size={48} />
                    </motion.div>
                    <motion.h1
                        className="calculator-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Trend <span className="text-gradient">Tracker</span>
                    </motion.h1>
                    <motion.p
                        className="calculator-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Track industry trends and benchmark your performance
                    </motion.p>
                    <motion.span
                        className="coming-soon-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Coming Soon
                    </motion.span>
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
                        <h2 className="card-title">Track Settings</h2>

                        <div className="input-group">
                            <label className="input-label">
                                <Layers size={18} />
                                Industry
                            </label>
                            <select className="calculator-input calculator-select" disabled>
                                <option>Select your industry</option>
                                <option>Technology</option>
                                <option>E-commerce</option>
                                <option>Healthcare</option>
                                <option>Finance</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label className="input-label">
                                <Filter size={18} />
                                Keywords to Track
                            </label>
                            <input
                                type="text"
                                className="calculator-input"
                                placeholder="e.g., AI, automation, SaaS"
                                disabled
                            />
                        </div>

                        <div className="input-group">
                            <label className="input-label">
                                <Calendar size={18} />
                                Time Range
                            </label>
                            <select className="calculator-input calculator-select" disabled>
                                <option>Last 30 days</option>
                                <option>Last 90 days</option>
                                <option>Last 6 months</option>
                                <option>Last year</option>
                            </select>
                        </div>

                        <Button size="lg" className="calculate-btn" disabled>
                            Track Trends
                        </Button>

                        <p className="coming-soon-text">
                            This feature is coming soon! Stay tuned.
                        </p>
                    </motion.div>

                    <motion.div
                        className="results-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h2 className="card-title">Trend Analysis</h2>

                        <div className="trend-chart-placeholder">
                            <div className="trend-line">
                                <svg viewBox="0 0 200 100" className="trend-svg">
                                    <path
                                        d="M0 80 Q50 60 100 40 T200 20"
                                        fill="none"
                                        stroke="var(--color-primary)"
                                        strokeWidth="2"
                                        strokeDasharray="5,5"
                                    />
                                </svg>
                            </div>
                            <p className="chart-label">Trend visualization will appear here</p>
                        </div>

                        <div className="trend-insights">
                            <div className="insight-item">
                                <TrendingUp size={18} className="insight-icon positive" />
                                <span>Rising trends in your industry</span>
                            </div>
                            <div className="insight-item">
                                <TrendingUp size={18} className="insight-icon negative" style={{ transform: 'rotate(180deg)' }} />
                                <span>Declining topics to avoid</span>
                            </div>
                            <div className="insight-item">
                                <Calendar size={18} className="insight-icon" />
                                <span>Seasonal patterns & predictions</span>
                            </div>
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

export default TrendTrackerPage;
