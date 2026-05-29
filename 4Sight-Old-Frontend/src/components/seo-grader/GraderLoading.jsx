/**
 * Grader Loading Component
 *
 * Loading state while backend processes the grading request.
 */

import { useState, useEffect } from 'react';

const OMINOUS_MESSAGES = [
    "Scanning for unrecoverable structural decay...",
    "Exposing visibility gaps and market irrelevance...",
    "Analyzing organic decay and crawl death...",
    "Quantifying technical debt and architectural failure...",
    "Probing for crawler traps and index bloat...",
    "SIMULATING TOTAL SEARCH ENGINE OBSOLESCENCE...",
];

const GraderLoading = ({ url }) => {
    const [messageIndex, setMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prev) => (prev + 1) % OMINOUS_MESSAGES.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grader-loading" role="status" aria-live="polite">
            <div className="grader-loading-spinner" aria-hidden="true" />
            <p className="grader-loading-text toxic-text">{OMINOUS_MESSAGES[messageIndex]}</p>
            <p className="grader-loading-subtext">
                Checking {url ? new URL(url).hostname : 'your site'} for SEO signals
            </p>
            <p className="grader-loading-subtext" style={{ marginTop: '1rem' }}>
                System diagnostic in progress...
            </p>
        </div>
    );
};

export default GraderLoading;
