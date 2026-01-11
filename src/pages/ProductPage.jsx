import { motion } from 'framer-motion';
// TODO: Re-enable TestimonialsSection when real customer testimonials are available
// import { ProductDemoVideo, FeatureGrid, TestimonialsSection } from '../components/product';
import { ProductDemoVideo, FeatureGrid } from '../components/product';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';
import './ProductPage.css';

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
