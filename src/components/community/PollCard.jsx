import { motion } from 'framer-motion';
import { BarChart2, Check } from 'lucide-react';
import Card from '../ui/Card';
import './PollCard.css';

const PollCard = ({
    pollId,
    question,
    options,
    totalVotes,
    userVotedOption,
    onVote,
    index = 0,
}) => {
    const hasVoted = userVotedOption !== undefined && userVotedOption !== null;

    const handleOptionClick = (optionIndex) => {
        if (!hasVoted && onVote) {
            onVote(pollId, optionIndex);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card variant="glass" hover padding="lg" className="poll-card">
                <div className="poll-header">
                    <div className="poll-icon">
                        <BarChart2 size={20} />
                    </div>
                    <span className="poll-label">Community Poll</span>
                </div>

                <h3 className="poll-question">{question}</h3>

                <div className="poll-options">
                    {options.map((option, idx) => {
                        const percentage = totalVotes > 0
                            ? Math.round((option.votes / totalVotes) * 100)
                            : 0;
                        const isSelected = userVotedOption === idx;

                        return (
                            <motion.div
                                key={idx}
                                className={`poll-option ${!hasVoted ? 'votable' : ''} ${isSelected ? 'selected' : ''}`}
                                onClick={() => handleOptionClick(idx)}
                                whileHover={!hasVoted ? { scale: 1.01 } : {}}
                                whileTap={!hasVoted ? { scale: 0.99 } : {}}
                            >
                                <div className="option-header">
                                    <span className="option-text">
                                        {isSelected && <Check size={16} className="vote-check" />}
                                        {option.text}
                                    </span>
                                    {hasVoted && (
                                        <span className="option-percentage">{percentage}%</span>
                                    )}
                                </div>
                                {hasVoted && (
                                    <div className="option-bar">
                                        <motion.div
                                            className={`option-bar-fill ${isSelected ? 'selected' : ''}`}
                                            initial={{ width: 0 }}
                                            animate={{ width: `${percentage}%` }}
                                            transition={{ duration: 0.8, delay: 0.1 + idx * 0.05 }}
                                        />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                <div className="poll-footer">
                    <span className="poll-votes">{totalVotes.toLocaleString()} votes</span>
                    {!hasVoted && (
                        <span className="poll-cta">Click to vote</span>
                    )}
                    {hasVoted && (
                        <span className="poll-voted-badge">✓ Voted</span>
                    )}
                </div>
            </Card>
        </motion.div>
    );
};

export default PollCard;
