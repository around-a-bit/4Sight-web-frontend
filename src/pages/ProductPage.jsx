import { motion } from 'framer-motion';
import { ProductDemoVideo, FeatureGrid } from '../components/product';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { ArrowRight, Check } from 'lucide-react';
import './ProductPage.css';

const pricingTiers = [
    {
        id: 'beginner',
        name: 'Beginner',
        price: 'Contact Us',
        description: 'Perfect for small teams getting started with SEO intelligence.',
        features: [
            'Strategy Dashboard',
            'Up to 50 SEO Health Markers',
            'Basic Keyword Research',
            'Monthly Performance Reports',
            'Email Support',
        ],
        highlighted: false,
        cta: 'Get Started',
    },
    {
        id: 'professional',
        name: 'Professional',
        price: 'Contact Us',
        description: 'For growing businesses that need advanced automation and governance.',
        features: [
            'Everything in Beginner',
            'Implementation Toolkit (Blogs, FAQs, Meta Tags)',
            'Governance & 24×7 Monitoring',
            'Real-time Alerts',
            'Target vs Achievement Metrics',
            'AI Content Generation',
            'Priority Support',
        ],
        highlighted: true,
        cta: 'Most Popular',
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        price: 'Custom',
        description: 'Full-suite access with custom integrations and dedicated support.',
        features: [
            'Everything in Professional',
            'Optimization & Competitive Insights',
            'Ecosystem Analysis',
            'Custom Dashboard Configurations',
            'Dedicated Account Manager',
            'SLA-backed Support',
            'On-premise / Private Cloud Option',
        ],
        highlighted: false,
        cta: 'Talk to Sales',
    },
];

const ProductPage = () => {
    return (
        <div className="product-page">
            {/* Hero Section */}
            <section className="product-hero">
                <div className="product-hero-container">
                    <motion.h1
                        className="product-hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Transform Your Business with
                        <span className="text-gradient"> 4Sight</span>
                    </motion.h1>
                    <motion.p
                        className="product-hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        End-to-end automation solutions designed for modern enterprises
                    </motion.p>
                </div>
            </section>

            {/* Onboard to 4Sight Button */}
            <section className="product-onboard-section">
                <motion.div
                    className="product-onboard-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <Link to="#">
                        <Button
                            size="lg"
                            icon={<ArrowRight size={18} />}
                            iconPosition="right"
                            className="onboard-button"
                        >
                            Onboard to 4Sight
                        </Button>
                    </Link>
                </motion.div>
            </section>

            <ProductDemoVideo />
            <FeatureGrid />

            {/* Pricing Section */}
            <section className="pricing-section" id="pricing">
                <div className="pricing-container">
                    <motion.div
                        className="pricing-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="pricing-title">
                            Simple, Transparent <span className="text-gradient">Pricing</span>
                        </h2>
                        <p className="pricing-subtitle">
                            Choose the plan that fits your team. Upgrade anytime.
                        </p>
                    </motion.div>

                    <div className="pricing-grid">
                        {pricingTiers.map((tier, index) => (
                            <motion.div
                                key={tier.id}
                                className={`pricing-card ${tier.highlighted ? 'pricing-card-highlighted' : ''}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {tier.highlighted && (
                                    <div className="pricing-badge">Most Popular</div>
                                )}
                                <div className="pricing-card-header">
                                    <h3 className="pricing-tier-name">{tier.name}</h3>
                                    <div className="pricing-price">{tier.price}</div>
                                    <p className="pricing-description">{tier.description}</p>
                                </div>
                                <ul className="pricing-features">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="pricing-feature-item">
                                            <Check size={16} className="pricing-check" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="pricing-card-footer">
                                    <Link to="/#contact">
                                        <Button
                                            size="lg"
                                            variant={tier.highlighted ? 'primary' : 'outline'}
                                            className="pricing-cta-btn"
                                        >
                                            {tier.cta}
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 
             * =================================================================
             * TESTIMONIALS SECTION - TEMPORARILY HIDDEN
             * =================================================================
             * Re-enable this when real customer testimonials are available.
             * 
             * To re-enable:
             * 1. Uncomment the import at the top of this file
             * 2. Uncomment the <TestimonialsSection /> component below
             * 3. Update testimonials data in: 
             *    src/components/product/TestimonialsSection.jsx
             * =================================================================
             */}
            {/* <TestimonialsSection /> */}

            {/* CTA Section */}
            <section className="product-cta-section">
                <div className="product-cta-container">
                    <motion.div
                        className="product-cta-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="product-cta-title">
                            Ready to Get Started?
                        </h2>
                        <p className="product-cta-subtitle">
                            Join hundreds of enterprises already transforming their operations with 4Sight
                        </p>
                        <div className="product-cta-buttons">
                            <Link to="/#contact">
                                <Button size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                                    Contact Sales
                                </Button>
                            </Link>
                            <Link to="/knowledge">
                                <Button variant="outline" size="lg">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ProductPage;
