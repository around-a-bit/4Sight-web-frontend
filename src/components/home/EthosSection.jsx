import { motion } from 'framer-motion';
import { Target, Rocket, Shield, TrendingUp, ExternalLink } from 'lucide-react';
import './EthosSection.css';

// SIGO Framework - Strategy, Implementation, Governance, Optimization
const ethosStatements = [
    {
        id: 1,
        icon: Target,
        title: 'Strategy',
        description: 'We believe in vision-first thinking. Every solution begins with a clear strategic roadmap that aligns technology with your business objectives.',
        dashboardLabel: 'Strategy Dashboard',
    },
    {
        id: 2,
        icon: Rocket,
        title: 'Implementation',
        description: 'Ideas are only as powerful as their execution. We deliver precision implementation that transforms strategic plans into tangible results.',
        dashboardLabel: 'Implementation Dashboard',
    },
    {
        id: 3,
        icon: Shield,
        title: 'Governance',
        description: 'Trust is built on transparency. Our governance framework ensures accountability, compliance, and ethical decision-making at every level.',
        dashboardLabel: 'Governance Dashboard',
    },
    {
        id: 4,
        icon: TrendingUp,
        title: 'Optimization',
        description: 'Excellence is a continuous journey. We embrace iterative improvement, leveraging data insights to constantly elevate performance.',
        dashboardLabel: 'Optimization Dashboard',
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

const FlipCard = ({ statement }) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                    <div className="ethos-icon-wrapper">
                        <statement.icon size={28} />
                    </div>
                    <h3 className="ethos-card-title">{statement.title}</h3>
                    <p className="ethos-card-description">{statement.description}</p>
                </div>

                {/* Back Side - Dashboard Preview */}
                <div className="flip-card-back">
                    <div className="dashboard-preview">
                        <div className="dashboard-header">
                            <statement.icon size={20} />
                            <span>{statement.dashboardLabel}</span>
                        </div>
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
                        <div className="dashboard-cta">
                            <ExternalLink size={14} />
                            <span>Coming Soon</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const EthosSection = () => {
    return (
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
                            <FlipCard statement={statement} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default EthosSection;
