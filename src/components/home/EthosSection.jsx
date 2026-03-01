import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Target, Rocket, Shield, TrendingUp, ExternalLink, X, ZoomIn, LayoutDashboard } from 'lucide-react';
import './EthosSection.css';

// Import marketing dashboard screenshot
import marketingDashboardImg from '../../assets/marketing-dashboard.jpeg';

// Import dashboard screenshots
import strategyDashboardImg from '../../assets/strategy-dashboard.png';
import implementationDashboardImg from '../../assets/implementation-dashboard.png';
import governanceDashboardImg from '../../assets/governance-dashboard.png';
import optimizationDashboardImg from '../../assets/optimization-dashboard.png';

// Marketing Dashboard featured card
const marketingDashboardStatement = {
    id: 0,
    icon: LayoutDashboard,
    title: 'Marketing Dashboard',
    description: (
        <>
            A unified command centre with a left-side navigator spanning all four pillars:
            <ul className="md-nav-list">
                <li><strong>Strategy</strong> — Strategic workbench combining a Diagnostic Dashboard for current health checks with a data-driven workspace for goal-oriented planning to address visibility gaps and drive sustainable growth across SEO, content funnel, and media channels.</li>
                <li><strong>Implementation</strong> — AI-enabled toolset generates lifecycle-specific artifacts—like keyword content, funnel nurtures, media creatives, and metadata—to boost performance end-to-end.</li>
                <li><strong>Governance</strong> — Real-time governance of lifecycle execution via 24×7 monitoring of channel markers, with degradation alerts and Target vs. Achievement metrics linked to strategy action plans.</li>
                <li><strong>Optimization</strong> — Strategic workbench optimizes lifecycle performance through insights into ecosystem dynamics, competitive landscapes, and keyword/content/media opportunity universes.</li>
            </ul>
        </>
    ),
    dashboardLabel: 'Marketing Dashboard',
    dashboardImage: marketingDashboardImg,
};

// SIGO Framework - Strategy, Implementation, Governance, Optimization
const ethosStatements = [
    {
        id: 1,
        icon: Target,
        title: 'Strategy',
        description: 'Strategic workbench that combines a Diagnostic Dashboard for current health check with a data driven workspace for Goal oriented planning to address health issues related to search visibility and drive sustainable keyword led growth.',
        dashboardLabel: 'Strategy Dashboard',
        dashboardImage: strategyDashboardImg,
    },
    {
        id: 2,
        icon: Rocket,
        title: 'Implementation',
        description: 'AI enabled toolset to generate artifacts like Blogs, FAQs, Meta Tags etc., needed to boost SEO performance.',
        dashboardLabel: 'Implementation Dashboard',
        dashboardImage: implementationDashboardImg,
    },
    {
        id: 3,
        icon: Shield,
        title: 'Governance',
        description: 'Real time governance of SEO implementation by 24×7 monitoring of Search Engine Markers and providing real time alerts for performance degradation. Additionally it provides Target Vs Achievement metrics in terms of SEO action plan finalized in the strategy phase.',
        dashboardLabel: 'Governance Dashboard',
        dashboardImage: governanceDashboardImg,
    },
    {
        id: 4,
        icon: TrendingUp,
        title: 'Optimization',
        description: 'Strategic workbench to optimize SEO performance by providing insights related to ecosystem, competition & keyword universe.',
        dashboardLabel: 'Optimization Dashboard',
        dashboardImage: optimizationDashboardImg,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

// Lightbox Modal Component
const ImageLightbox = ({ image, title, onClose }) => {
    if (!image) return null;

    return (
        <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="lightbox-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
            >
                <button className="lightbox-close" onClick={onClose}>
                    <X size={24} />
                </button>
                <div className="lightbox-header">
                    <h3>{title}</h3>
                </div>
                <img src={image} alt={title} className="lightbox-image" />
            </motion.div>
        </motion.div>
    );
};

const FlipCard = ({ statement, onImageClick }) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                    <div className="ethos-icon-wrapper">
                        <statement.icon size={28} />
                    </div>
                    <h3 className="ethos-card-title">{statement.title}</h3>
                    <div className="ethos-card-description">{statement.description}</div>
                </div>

                {/* Back Side - Dashboard Preview */}
                <div className="flip-card-back">
                    <div className="dashboard-preview">
                        <div className="dashboard-header">
                            <statement.icon size={20} />
                            <span>{statement.dashboardLabel}</span>
                        </div>

                        {/* Show actual dashboard image if available, otherwise show placeholder */}
                        {statement.dashboardImage ? (
                            <div
                                className="dashboard-image-container clickable"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onImageClick(statement.dashboardImage, statement.dashboardLabel);
                                }}
                            >
                                <img
                                    src={statement.dashboardImage}
                                    alt={`${statement.title} Dashboard`}
                                    className="dashboard-image"
                                />
                                <div className="image-zoom-hint">
                                    <ZoomIn size={20} />
                                    <span>Click to enlarge</span>
                                </div>
                            </div>
                        ) : (
                            <div className="dashboard-placeholder">
                                {/* Placeholder dashboard elements */}
                                <div className="dashboard-chart-placeholder">
                                    <div className="chart-bar" style={{ height: '40%' }}></div>
                                    <div className="chart-bar" style={{ height: '65%' }}></div>
                                    <div className="chart-bar" style={{ height: '45%' }}></div>
                                    <div className="chart-bar" style={{ height: '80%' }}></div>
                                    <div className="chart-bar" style={{ height: '55%' }}></div>
                                </div>
                                <div className="dashboard-stats">
                                    <div className="stat-box">
                                        <span className="stat-number">--</span>
                                        <span className="stat-text">KPIs</span>
                                    </div>
                                    <div className="stat-box">
                                        <span className="stat-number">--</span>
                                        <span className="stat-text">Metrics</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="dashboard-cta">
                            <ExternalLink size={14} />
                            <span>{statement.dashboardImage ? 'View Dashboard' : 'Coming Soon'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EthosSection = () => {
    const [lightboxImage, setLightboxImage] = useState(null);
    const [lightboxTitle, setLightboxTitle] = useState('');

    const openLightbox = (image, title) => {
        setLightboxImage(image);
        setLightboxTitle(title);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
        setLightboxTitle('');
    };

    return (
        <>
        {/* Marketing Dashboard Featured Flip Card */}
        <section className="marketing-dashboard-section">
            <div className="marketing-dashboard-container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="marketing-flip-card-wrapper"
                >
                    <FlipCard statement={marketingDashboardStatement} onImageClick={openLightbox} />
                </motion.div>
            </div>
        </section>

        <section className="ethos-section">
            <div className="ethos-container">
                <motion.div
                    className="ethos-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="ethos-title">
                        Our <span className="text-gradient">Philosophy</span>
                    </h2>
                    <p className="ethos-subtitle">
                        Building the foundation for data-driven excellence in business operations
                    </p>
                </motion.div>

                <motion.div
                    className="ethos-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {ethosStatements.map((statement) => (
                        <motion.div key={statement.id} variants={itemVariants}>
                            <FlipCard statement={statement} onImageClick={openLightbox} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {lightboxImage && (
                    <ImageLightbox
                        image={lightboxImage}
                        title={lightboxTitle}
                        onClose={closeLightbox}
                    />
                )}
            </AnimatePresence>
        </section>
        </>
    );
};

export default EthosSection;

