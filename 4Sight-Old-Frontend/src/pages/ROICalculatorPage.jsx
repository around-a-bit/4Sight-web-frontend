import { motion } from 'framer-motion';
import { Calculator, ArrowRight, DollarSign, TrendingUp, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import './CalculatorPage.css';

const ROICalculatorPage = () => {
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
                        <Calculator size={48} />
                    </motion.div>
                    <motion.h1
                        className="calculator-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        ROI <span className="text-gradient">Calculator</span>
                    </motion.h1>
                    <motion.p
                        className="calculator-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Calculate the potential return on investment from implementing automation
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
                        <h2 className="card-title">Investment Details</h2>

                        <div className="input-group">
                            <label className="input-label">
                                <DollarSign size={18} />
                                Monthly Investment
                            </label>
                            <input
                                type="number"
                                className="calculator-input"
                                placeholder="e.g., 5000"
                                disabled
                            />
                        </div>

                        <div className="input-group">
                            <label className="input-label">
                                <Clock size={18} />
                                Time Period (months)
                            </label>
                            <input
                                type="number"
                                className="calculator-input"
                                placeholder="e.g., 12"
                                disabled
                            />
                        </div>

                        <div className="input-group">
                            <label className="input-label">
                                <TrendingUp size={18} />
                                Expected Growth Rate (%)
                            </label>
                            <input
                                type="number"
                                className="calculator-input"
                                placeholder="e.g., 25"
                                disabled
                            />
                        </div>

                        <div className="input-group">
                            <label className="input-label">
                                <Target size={18} />
                                Target Revenue Increase
                            </label>
                            <input
                                type="number"
                                className="calculator-input"
                                placeholder="e.g., 50000"
                                disabled
                            />
                        </div>

                        <Button size="lg" className="calculate-btn" disabled>
                            Calculate ROI
                        </Button>

                        <p className="coming-soon-text">
                            Full calculator functionality coming soon!
                        </p>
                    </motion.div>

                    <motion.div
                        className="results-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h2 className="card-title">Projected Results</h2>

                        <div className="result-item">
                            <span className="result-label">Total Investment</span>
                            <span className="result-value">$--,---</span>
                        </div>

                        <div className="result-item">
                            <span className="result-label">Projected Returns</span>
                            <span className="result-value result-positive">$--,---</span>
                        </div>

                        <div className="result-item">
                            <span className="result-label">Net ROI</span>
                            <span className="result-value result-highlight">---%</span>
                        </div>

                        <div className="result-item">
                            <span className="result-label">Payback Period</span>
                            <span className="result-value">-- months</span>
                        </div>

                        <div className="chart-placeholder">
                            <div className="chart-bars">
                                <div className="chart-bar" style={{ height: '30%' }}></div>
                                <div className="chart-bar" style={{ height: '45%' }}></div>
                                <div className="chart-bar" style={{ height: '60%' }}></div>
                                <div className="chart-bar" style={{ height: '75%' }}></div>
                                <div className="chart-bar" style={{ height: '90%' }}></div>
                            </div>
                            <p className="chart-label">Projected Growth Over Time</p>
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

export default ROICalculatorPage;
