/**
 * SEO Maturity Grader Page
 *
 * Multi-step wizard for assessing SEO maturity with:
 * 1. Website input (URL, category, keywords)
 * 2. Questionnaire (10 questions)
 * 3. Loading/Processing
 * 4. Results report
 */

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import {
    WebsiteInputStep,
    QuestionnaireStep,
    GraderProgress,
    GraderReport,
    GraderError,
    GraderLoading,
} from '../components/seo-grader';
import './SEOMaturityGraderPage.css';

// API configuration
const API_BASE_URL = import.meta.env.VITE_SEO_GRADER_API_URL || 'http://localhost:8000';

// Questionnaire questions with deterministic IDs
const QUESTIONS = [
    {
        id: 'T1',
        dimension: 'Technical SEO',
        text: "How would you rate your website's page load speed and Core Web Vitals optimization?",
    },
    {
        id: 'T2',
        dimension: 'Technical SEO',
        text: 'How effectively is your site crawlable and indexable by search engines?',
    },
    {
        id: 'T3',
        dimension: 'Technical SEO',
        text: 'How well-implemented is your technical SEO infrastructure (sitemaps, robots.txt, structured data)?',
    },
    {
        id: 'T4',
        dimension: 'Technical SEO',
        text: 'How secure and mobile-friendly is your website (HTTPS, responsive design)?',
    },
    {
        id: 'C1',
        dimension: 'Content & Keywords',
        text: 'How comprehensive is your keyword research and targeting strategy?',
    },
    {
        id: 'C2',
        dimension: 'Content & Keywords',
        text: 'How well-optimized is your on-page content (titles, meta descriptions, headers)?',
    },
    {
        id: 'C3',
        dimension: 'Content & Keywords',
        text: 'How consistent is your content creation and publishing schedule?',
    },
    {
        id: 'C4',
        dimension: 'Content & Keywords',
        text: 'How effectively do you align content with user search intent?',
    },
    {
        id: 'M1',
        dimension: 'Measurement & Analytics',
        text: 'How well do you track and measure SEO performance metrics?',
    },
    {
        id: 'M2',
        dimension: 'Measurement & Analytics',
        text: 'How effectively do you use data to inform SEO strategy decisions?',
    },
];

// Answer scale
const ANSWER_SCALE = [
    { value: 1, label: 'Not at all' },
    { value: 2, label: 'Rarely' },
    { value: 3, label: 'Sometimes' },
    { value: 4, label: 'Often' },
    { value: 5, label: 'Always' },
];

// Brand categories
const BRAND_CATEGORIES = [
    'SaaS',
    'E-commerce',
    'Agency',
    'Publisher',
    'Local Business',
    'Enterprise',
    'Startup',
    'Other',
];

const SEOMaturityGraderPage = () => {
    // Step state: 0=website, 1=questionnaire, 2=loading, 3=results, -1=error
    const [currentStep, setCurrentStep] = useState(0);

    // Form data
    const [websiteData, setWebsiteData] = useState({
        url: '',
        category: 'SaaS',
        keywords: [],
    });
    const [answers, setAnswers] = useState({});

    // Results
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);

    // Handle website input submission
    const handleWebsiteSubmit = useCallback((data) => {
        setWebsiteData(data);
        setCurrentStep(1);
    }, []);

    // Handle questionnaire completion
    const handleQuestionnaireComplete = useCallback(
        async (questionnaireAnswers) => {
            setAnswers(questionnaireAnswers);
            setCurrentStep(2); // Loading

            try {
                const requestBody = {
                    website_url: websiteData.url,
                    brand_category: websiteData.category,
                    target_keywords: websiteData.keywords,
                    questionnaire_answers: questionnaireAnswers,
                    client_request_id: crypto.randomUUID(),
                };

                const response = await fetch(`${API_BASE_URL}/seo/grader/submit`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(requestBody),
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to analyze website');
                }

                const data = await response.json();
                setResults(data);
                setCurrentStep(3); // Results
            } catch (err) {
                console.error('Grader error:', err);
                setError({
                    message: err.message || 'An unexpected error occurred',
                    retryable: true,
                });
                setCurrentStep(-1); // Error
            }
        },
        [websiteData]
    );

    // Handle retry
    const handleRetry = useCallback(() => {
        setError(null);
        setCurrentStep(1); // Back to questionnaire
    }, []);

    // Handle start over
    const handleStartOver = useCallback(() => {
        setWebsiteData({ url: '', category: 'SaaS', keywords: [] });
        setAnswers({});
        setResults(null);
        setError(null);
        setCurrentStep(0);
    }, []);

    // Go back one step
    const handleBack = useCallback(() => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    }, [currentStep]);

    return (
        <div className="seo-grader-page">
            {/* Hero */}
            <section className="seo-grader-hero">
                <div className="seo-grader-hero-container">
                    <motion.div
                        className="seo-grader-icon-wrapper"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Gauge size={48} />
                    </motion.div>
                    <motion.h1
                        className="seo-grader-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        SEO Maturity <span className="text-gradient">Grader</span>
                    </motion.h1>
                    <motion.p
                        className="seo-grader-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Assess your SEO maturity level and get actionable insights
                    </motion.p>
                </div>
            </section>

            {/* Progress indicator */}
            {currentStep >= 0 && currentStep < 3 && (
                <GraderProgress currentStep={currentStep} totalSteps={3} />
            )}

            {/* Content */}
            <section className="seo-grader-content">
                <div className="seo-grader-container">
                    <AnimatePresence mode="wait">
                        {/* Step 0: Website Input */}
                        {currentStep === 0 && (
                            <motion.div
                                key="website-input"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <WebsiteInputStep
                                    initialData={websiteData}
                                    categories={BRAND_CATEGORIES}
                                    onSubmit={handleWebsiteSubmit}
                                />
                            </motion.div>
                        )}

                        {/* Step 1: Questionnaire */}
                        {currentStep === 1 && (
                            <motion.div
                                key="questionnaire"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <QuestionnaireStep
                                    questions={QUESTIONS}
                                    answerScale={ANSWER_SCALE}
                                    initialAnswers={answers}
                                    onComplete={handleQuestionnaireComplete}
                                    onBack={handleBack}
                                />
                            </motion.div>
                        )}

                        {/* Step 2: Loading */}
                        {currentStep === 2 && (
                            <motion.div
                                key="loading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <GraderLoading url={websiteData.url} />
                            </motion.div>
                        )}

                        {/* Step 3: Results */}
                        {currentStep === 3 && results && (
                            <motion.div
                                key="results"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <GraderReport
                                    results={results}
                                    websiteUrl={websiteData.url}
                                    onStartOver={handleStartOver}
                                />
                            </motion.div>
                        )}

                        {/* Error state */}
                        {currentStep === -1 && error && (
                            <motion.div
                                key="error"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <GraderError
                                    error={error}
                                    onRetry={handleRetry}
                                    onStartOver={handleStartOver}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Back to community link */}
            <motion.div
                className="back-link-wrapper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <Link to="/community" className="back-link">
                    <ArrowLeft size={18} />
                    Back to Community
                </Link>
            </motion.div>
        </div>
    );
};

export default SEOMaturityGraderPage;
