/**
 * Grader Report Component
 *
 * Displays the complete SEO maturity grading results.
 * Renders the presentation-ready JSON from the backend.
 */

import { AlertTriangle, RefreshCw, ExternalLink, Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

// Stage color mapping
const STAGE_COLORS = {
    Chaotic: '#ef4444',
    Reactive: '#f59e0b',
    Structured: '#3b82f6',
    Optimised: '#22c55e',
    Strategic: '#8b5cf6',
};

const GraderReport = ({ results, websiteUrl, onStartOver }) => {
    const {
        total_score,
        stage,
        questionnaire_score,
        observed_score,
        dimension_scores,
        declared_vs_observed_gap,
        top_risks,
        raw_signals_summary,
        notes,
        generated_at,
    } = results;

    // Format CWV values for display
    const formatMetric = (value, unit) => {
        if (value === null || value === undefined) return 'N/A';
        return `${value}${unit}`;
    };

    const formatBoolean = (value) => {
        if (value === null || value === undefined) return 'N/A';
        return value ? 'Yes' : 'No';
    };

    return (
        <div className="grader-results">
            {/* Score Card */}
            <motion.div
                className={`grader-score-card ${stage === 'Chaotic' ? 'pulse-red chaotic-theme' : ''}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
            >
                {stage === 'Chaotic' && (
                    <div className="critical-status-bar">
                        CRITICAL STATUS DETECTED
                    </div>
                )}
                <div
                    className={`grader-score-value ${stage === 'Chaotic' ? 'glitch' : ''}`}
                    data-text={total_score}
                >
                    {total_score}
                </div>
                <div className="grader-score-label">out of 100</div>
                <div
                    className={`grader-stage-badge ${stage === 'Chaotic' ? 'toxic-text glitch' : ''}`}
                    data-text={stage}
                    style={{ borderColor: STAGE_COLORS[stage] }}
                >
                    {stage}
                </div>

                {/* Score breakdown */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '2rem',
                        marginTop: '1.5rem',
                        fontSize: '0.875rem',
                        color: 'rgba(255,255,255,0.8)',
                    }}
                >
                    <div>
                        <strong>{questionnaire_score}</strong> declared
                    </div>
                    <div>+</div>
                    <div>
                        <strong>{observed_score}</strong> observed
                    </div>
                </div>
            </motion.div>

            {stage === 'Chaotic' && (
                <motion.div
                    className="critical-alert-banner"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <AlertTriangle size={24} color="#ef4444" />
                    <span>SYSTEM ALERT: MULTIPLE CRITICAL FAILURES IDENTIFIED</span>
                    <AlertTriangle size={24} color="#ef4444" />
                </motion.div>
            )}

            {/* Gap Indicator */}
            <motion.div
                className="gap-indicator"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <div className="gap-title">Declared vs Observed Gap</div>
                <div className="gap-text">{declared_vs_observed_gap}</div>
            </motion.div>

            {/* Dimension Breakdown */}
            <motion.div
                className="dimension-breakdown"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                {/* Declared Scores */}
                <div className="dimension-section">
                    <h3 className="dimension-section-title">
                        Declared Capabilities ({questionnaire_score}/50)
                    </h3>
                    <div className="dimension-item">
                        <span className="dimension-name">Technical SEO</span>
                        <span className="dimension-score">
                            {dimension_scores.declared.technical}/20
                        </span>
                    </div>
                    <div className="dimension-item">
                        <span className="dimension-name">Content & Keywords</span>
                        <span className="dimension-score">
                            {dimension_scores.declared.content_keywords}/20
                        </span>
                    </div>
                    <div className="dimension-item">
                        <span className="dimension-name">Measurement & Analytics</span>
                        <span className="dimension-score">
                            {dimension_scores.declared.measurement}/10
                        </span>
                    </div>
                </div>

                {/* Observed Scores */}
                <div className="dimension-section">
                    <h3 className="dimension-section-title">
                        Observed Signals ({observed_score}/50)
                    </h3>
                    <div className="dimension-item">
                        <span className="dimension-name">Core Web Vitals</span>
                        <span className="dimension-score">
                            {dimension_scores.observed.core_web_vitals}/20
                        </span>
                    </div>
                    <div className="dimension-item">
                        <span className="dimension-name">On-page SEO</span>
                        <span className="dimension-score">
                            {dimension_scores.observed.onpage}/15
                        </span>
                    </div>
                    <div className="dimension-item">
                        <span className="dimension-name">Authority Proxies</span>
                        <span className="dimension-score">
                            {dimension_scores.observed.authority_proxies}/10
                        </span>
                    </div>
                    <div className="dimension-item">
                        <span className="dimension-name">SERP Reality</span>
                        <span className="dimension-score">
                            {dimension_scores.observed.serp_reality}/5
                        </span>
                    </div>
                </div>
            </motion.div>

            {/* Top Risks */}
            <motion.div
                className="risks-section"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <h3 className="risks-title">
                    <AlertTriangle
                        size={20}
                        style={{ marginRight: '0.5rem', color: 'var(--warning)' }}
                    />
                    Top Improvement Areas
                </h3>
                {top_risks.map((risk, index) => (
                    <div key={index} className="risk-item">
                        <span className="risk-icon">
                            <AlertTriangle size={16} />
                        </span>
                        <span>{risk}</span>
                    </div>
                ))}
            </motion.div>

            {/* Raw Signals */}
            <motion.div
                className="raw-signals"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                <h3 className="raw-signals-title">Raw Signal Data</h3>
                <div className="raw-signals-grid">
                    <div className="raw-signal-item">
                        <div className="raw-signal-value">
                            {formatMetric(raw_signals_summary.lcp_ms, 'ms')}
                        </div>
                        <div className="raw-signal-label">LCP</div>
                        {raw_signals_summary.lcp_ms === null && raw_signals_summary.cwv_notes && (
                            <div className="raw-signal-note">({raw_signals_summary.cwv_notes})</div>
                        )}
                    </div>
                    <div className="raw-signal-item">
                        <div className="raw-signal-value">
                            {raw_signals_summary.cls !== null
                                ? raw_signals_summary.cls.toFixed(2)
                                : 'N/A'}
                        </div>
                        <div className="raw-signal-label">CLS</div>
                        {raw_signals_summary.cls === null && raw_signals_summary.cwv_notes && (
                            <div className="raw-signal-note">({raw_signals_summary.cwv_notes})</div>
                        )}
                    </div>
                    <div className="raw-signal-item">
                        <div className="raw-signal-value">
                            {formatMetric(raw_signals_summary.inp_ms, 'ms')}
                        </div>
                        <div className="raw-signal-label">INP</div>
                        {raw_signals_summary.inp_ms === null && raw_signals_summary.cwv_notes && (
                            <div className="raw-signal-note">({raw_signals_summary.cwv_notes})</div>
                        )}
                    </div>
                    <div className="raw-signal-item">
                        <div className="raw-signal-value">
                            {raw_signals_summary.title_present === null ? (
                                <span style={{ color: 'var(--text-tertiary)' }}>?</span>
                            ) : raw_signals_summary.title_present ? (
                                <Check size={20} color="var(--success)" />
                            ) : (
                                <X size={20} color="var(--error)" />
                            )}
                        </div>
                        <div className="raw-signal-label">Title</div>
                        {raw_signals_summary.title_present === null && raw_signals_summary.onpage_notes && (
                            <div className="raw-signal-note">({raw_signals_summary.onpage_notes})</div>
                        )}
                    </div>
                    <div className="raw-signal-item">
                        <div className="raw-signal-value">
                            {raw_signals_summary.meta_unique === null ? (
                                <span style={{ color: 'var(--text-tertiary)' }}>?</span>
                            ) : raw_signals_summary.meta_unique ? (
                                <Check size={20} color="var(--success)" />
                            ) : (
                                <X size={20} color="var(--error)" />
                            )}
                        </div>
                        <div className="raw-signal-label">Meta Unique</div>
                        {raw_signals_summary.meta_unique === null && raw_signals_summary.onpage_notes && (
                            <div className="raw-signal-note">({raw_signals_summary.onpage_notes})</div>
                        )}
                    </div>
                    <div className="raw-signal-item">
                        <div className="raw-signal-value">
                            {raw_signals_summary.domain_age_years !== null
                                ? `${raw_signals_summary.domain_age_years}y`
                                : 'N/A'}
                        </div>
                        <div className="raw-signal-label">Domain Age</div>
                    </div>
                </div>
            </motion.div>

            {/* Notes */}
            <motion.p
                className={`grader-notes ${stage === 'Chaotic' ? 'toxic-text' : ''}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={stage === 'Chaotic' ? { fontWeight: 'bold' } : {}}
            >
                {notes}
            </motion.p>

            {/* Actions */}
            <motion.div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginTop: '2rem',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <Button onClick={onStartOver}>
                    <RefreshCw size={18} />
                    Analyze Another Site
                </Button>
                <Button
                    variant="secondary"
                    onClick={() => window.open(websiteUrl, '_blank')}
                >
                    <ExternalLink size={18} />
                    Visit Site
                </Button>
            </motion.div>

            {/* Timestamp */}
            <motion.p
                style={{
                    textAlign: 'center',
                    fontSize: '0.75rem',
                    color: 'var(--text-tertiary)',
                    marginTop: '2rem',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                Report generated: {new Date(generated_at).toLocaleString()}
            </motion.p>
        </div>
    );
};

export default GraderReport;
