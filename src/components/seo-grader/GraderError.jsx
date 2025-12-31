/**
 * Grader Error Component
 *
 * Error state with recommended next steps.
 */

import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import Button from '../ui/Button';

const GraderError = ({ error, onRetry, onStartOver }) => {
    return (
        <div className="grader-error" role="alert">
            <div className="grader-error-icon">
                <AlertCircle size={32} />
            </div>

            <h2 className="grader-error-title">Analysis Failed</h2>

            <p className="grader-error-message">
                {error?.message || 'An unexpected error occurred while analyzing your website.'}
            </p>

            <div className="grader-error-suggestions">
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>
                    Recommended next steps:
                </h3>
                <ul style={{
                    textAlign: 'left',
                    color: 'var(--text-tertiary)',
                    listStyle: 'disc',
                    paddingLeft: '1.5rem',
                    marginBottom: '1.5rem'
                }}>
                    <li>Check that the website URL is correct and accessible</li>
                    <li>Ensure the website is not behind a login or firewall</li>
                    <li>Try again in a few minutes if the issue persists</li>
                    <li>Use HTTPS if the site supports it</li>
                </ul>
            </div>

            <div className="grader-error-actions">
                {error?.retryable && (
                    <Button onClick={onRetry}>
                        <RefreshCw size={18} />
                        Try Again
                    </Button>
                )}
                <Button variant="secondary" onClick={onStartOver}>
                    <Home size={18} />
                    Start Over
                </Button>
            </div>
        </div>
    );
};

export default GraderError;
