/**
 * Grader Progress Component
 *
 * Step indicator showing progress through the wizard.
 */

import { Check } from 'lucide-react';

const STEP_LABELS = ['Website Details', 'Assessment', 'Results'];

const GraderProgress = ({ currentStep, totalSteps }) => {
    return (
        <nav className="grader-progress" aria-label="Progress">
            {STEP_LABELS.slice(0, totalSteps).map((label, index) => {
                const isCompleted = index < currentStep;
                const isActive = index === currentStep;
                const isInactive = index > currentStep;

                return (
                    <div key={label} className="grader-progress-step">
                        <div
                            className={`grader-progress-dot ${isCompleted ? 'completed' : ''
                                } ${isActive ? 'active' : ''} ${isInactive ? 'inactive' : ''
                                }`}
                            aria-current={isActive ? 'step' : undefined}
                        >
                            {isCompleted ? <Check size={16} /> : index + 1}
                        </div>

                        {/* Line between steps */}
                        {index < totalSteps - 1 && (
                            <div
                                className={`grader-progress-line ${isCompleted ? 'completed' : ''
                                    }`}
                                aria-hidden="true"
                            />
                        )}
                    </div>
                );
            })}
        </nav>
    );
};

export default GraderProgress;
