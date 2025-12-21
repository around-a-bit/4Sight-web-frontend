import { motion } from 'framer-motion';
import { Bot, ArrowRight, MessageSquare, Lightbulb, Zap, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import './CalculatorPage.css';

const AIAssistantPage = () => {
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
                        <Bot size={48} />
                    </motion.div>
                    <motion.h1
                        className="calculator-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        AI <span className="text-gradient">Assistant</span>
                    </motion.h1>
                    <motion.p
                        className="calculator-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Get personalized guidance from our AI-powered assistant
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
                <div className="calculator-container ai-container">
                    <motion.div
                        className="chat-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="chat-header">
                            <Bot size={24} />
                            <span>4Sight AI Assistant</span>
                            <span className="chat-status">Offline</span>
                        </div>

                        <div className="chat-messages">
                            <div className="chat-message assistant">
                                <div className="message-avatar">
                                    <Bot size={20} />
                                </div>
                                <div className="message-content">
                                    <p>Hello! I'm the 4Sight AI Assistant. I'm currently in development, but soon I'll be able to help you with:</p>
                                    <ul>
                                        <li>SEO strategy recommendations</li>
                                        <li>Automation workflow suggestions</li>
                                        <li>Performance optimization tips</li>
                                        <li>Answering your questions</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="chat-input-area">
                            <input
                                type="text"
                                className="chat-input"
                                placeholder="Type your message..."
                                disabled
                            />
                            <Button size="md" disabled>
                                Send
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="features-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h2 className="card-title">What I Can Help With</h2>

                        <div className="feature-list">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <MessageSquare size={20} />
                                </div>
                                <div className="feature-content">
                                    <h3>Natural Conversations</h3>
                                    <p>Ask questions in plain language and get helpful responses</p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">
                                    <Lightbulb size={20} />
                                </div>
                                <div className="feature-content">
                                    <h3>Smart Recommendations</h3>
                                    <p>Receive personalized suggestions based on your data</p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">
                                    <Zap size={20} />
                                </div>
                                <div className="feature-content">
                                    <h3>Quick Actions</h3>
                                    <p>Execute common tasks with simple voice commands</p>
                                </div>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">
                                    <HelpCircle size={20} />
                                </div>
                                <div className="feature-content">
                                    <h3>24/7 Support</h3>
                                    <p>Get help anytime, day or night</p>
                                </div>
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

export default AIAssistantPage;
