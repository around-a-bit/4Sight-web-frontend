/**
 * Questionnaire Step Component
 *
 * Multi-question form with radio button answers.
 * Shows one question at a time with navigation.
 */

import { useState, useCallback } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const QuestionnaireStep = ({
    questions,
    answerScale,
    initialAnswers,
    onComplete,
    onBack,
}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(initialAnswers || {});

    const currentQuestion = questions[currentQuestionIndex];
    const isFirstQuestion = currentQuestionIndex === 0;
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    const isCurrentAnswered = answers[currentQuestion.id] !== undefined;

    // Check if all questions are answered
    const allAnswered = questions.every((q) => answers[q.id] !== undefined);

    // Handle answer selection
    const handleAnswer = useCallback(
        (value) => {
            setAnswers((prev) => ({
                ...prev,
                [currentQuestion.id]: value,
            }));
        },
        [currentQuestion.id]
    );

    // Navigate to next question
    const handleNext = useCallback(() => {
        if (!isLastQuestion) {
            setCurrentQuestionIndex((prev) => prev + 1);
        }
    }, [isLastQuestion]);

    // Navigate to previous question
    const handlePrev = useCallback(() => {
        if (!isFirstQuestion) {
            setCurrentQuestionIndex((prev) => prev - 1);
        } else {
            onBack?.();
        }
    }, [isFirstQuestion, onBack]);

    // Submit all answers
    const handleSubmit = useCallback(() => {
        if (allAnswered) {
            onComplete(answers);
        }
    }, [allAnswered, answers, onComplete]);

    // Calculate progress
    const answeredCount = Object.keys(answers).length;
    const progressPercent = (answeredCount / questions.length) * 100;

    return (
        <div className="seo-grader-card">
            <div className="questionnaire-header">
                <h2 className="seo-grader-card-title">SEO Maturity Assessment</h2>
                <p className="seo-grader-card-description">
                    Answer each question honestly based on your current SEO practices.
                </p>

                {/* Progress bar */}
                <div className="questionnaire-progress">
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>
                    <span className="progress-text">
                        {answeredCount} of {questions.length} answered
                    </span>
                </div>
            </div>

            {/* Question display */}
            <div className="questionnaire-body">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuestion.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="questionnaire-question"
                    >
                        <div className="question-header">
                            <span className="question-number">
                                {currentQuestionIndex + 1}
                            </span>
                            <div className="question-content">
                                <p className="question-dimension">
                                    {currentQuestion.dimension}
                                </p>
                                <p className="question-text">{currentQuestion.text}</p>
                            </div>
                        </div>

                        {/* Answer options */}
                        <div className="answer-options" role="radiogroup" aria-label="Answer options">
                            {answerScale.map((option) => (
                                <div key={option.value} className="answer-option">
                                    <input
                                        type="radio"
                                        id={`${currentQuestion.id}-${option.value}`}
                                        name={currentQuestion.id}
                                        value={option.value}
                                        checked={answers[currentQuestion.id] === option.value}
                                        onChange={() => handleAnswer(option.value)}
                                    />
                                    <label htmlFor={`${currentQuestion.id}-${option.value}`}>
                                        <span className="answer-value">{option.value}</span>
                                        <span className="answer-label">{option.label}</span>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Question navigation dots */}
                <div className="question-dots">
                    {questions.map((q, index) => (
                        <button
                            key={q.id}
                            className={`question-dot ${index === currentQuestionIndex ? 'active' : ''
                                } ${answers[q.id] !== undefined ? 'answered' : ''}`}
                            onClick={() => setCurrentQuestionIndex(index)}
                            aria-label={`Go to question ${index + 1}`}
                            aria-current={index === currentQuestionIndex ? 'step' : undefined}
                        >
                            {answers[q.id] !== undefined && (
                                <CheckCircle size={12} />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Navigation buttons */}
            <div className="grader-nav-buttons">
                <Button
                    type="button"
                    variant="ghost"
                    className="btn-back"
                    onClick={handlePrev}
                >
                    <ArrowLeft size={18} />
                    {isFirstQuestion ? 'Back' : 'Previous'}
                </Button>

                {isLastQuestion ? (
                    <Button
                        type="button"
                        size="lg"
                        onClick={handleSubmit}
                        disabled={!allAnswered}
                    >
                        Submit & Analyze
                    </Button>
                ) : (
                    <Button
                        type="button"
                        size="lg"
                        onClick={handleNext}
                        disabled={!isCurrentAnswered}
                    >
                        Next
                        <ArrowRight size={18} />
                    </Button>
                )}
            </div>

            <style jsx>{`
                .questionnaire-progress {
                    margin-top: var(--space-6);
                }

                .progress-bar {
                    height: 6px;
                    background: var(--bg-tertiary);
                    border-radius: var(--radius-full);
                    overflow: hidden;
                }

                .progress-fill {
                    height: 100%;
                    background: var(--accent-gradient);
                    transition: width 0.3s ease;
                }

                .progress-text {
                    display: block;
                    text-align: center;
                    font-size: var(--font-size-sm);
                    color: var(--text-tertiary);
                    margin-top: var(--space-2);
                }

                .questionnaire-body {
                    margin-top: var(--space-8);
                }

                .question-dots {
                    display: flex;
                    justify-content: center;
                    gap: var(--space-2);
                    margin-top: var(--space-6);
                }

                .question-dot {
                    width: 24px;
                    height: 24px;
                    border-radius: var(--radius-full);
                    border: 2px solid var(--border-color);
                    background: var(--bg-primary);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all var(--transition-fast);
                }

                .question-dot:hover {
                    border-color: var(--border-hover);
                }

                .question-dot.active {
                    border-color: var(--accent-primary);
                    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
                }

                .question-dot.answered {
                    background: var(--accent-primary);
                    border-color: var(--accent-primary);
                    color: white;
                }
            `}</style>
        </div>
    );
};

export default QuestionnaireStep;
