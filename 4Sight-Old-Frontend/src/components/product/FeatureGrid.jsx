import { motion } from 'framer-motion';
import { BrainCircuit, Wrench, Eye, LineChart } from 'lucide-react';
import FeatureCard from './FeatureCard';
import './FeatureGrid.css';

// Core Value Propositions
const features = [
    {
        id: 1,
        icon: BrainCircuit,
        title: 'Data Driven Intelligence',
        description: 'Transform raw information into strategic insights with our AI-powered analytics engine. Make confident decisions backed by real-time market data, competitor analysis, and performance metrics that matter.',
    },
    {
        id: 2,
        icon: Wrench,
        title: 'DIY',
        description: 'Take control of your digital strategy with intuitive self-service tools. No coding required—configure campaigns, analyze results, and optimize performance on your own terms with our user-friendly interface.',
    },
    {
        id: 3,
        icon: Eye,
        title: 'Transparent & Business Contextual',
        description: 'Every recommendation comes with clear reasoning aligned to your business goals. Understand the "why" behind each insight, ensuring strategies resonate with your unique market position and objectives.',
    },
    {
        id: 4,
        icon: LineChart,
        title: 'Predictive Forecasting',
        description: 'Stay ahead of market shifts with intelligent trend prediction and scenario modeling. Anticipate opportunities, mitigate risks, and plan strategically with confidence using advanced forecasting algorithms.',
    },
];

const FeatureGrid = () => {
    return (
        <section className="features-section">
            <div className="features-container">
                <motion.div
                    className="features-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="features-title">
                        Powerful <span className="text-gradient">Features</span>
                    </h2>
                    <p className="features-subtitle">
                        Everything you need to transform your business operations
                    </p>
                </motion.div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={feature.id}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureGrid;
