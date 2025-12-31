import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gauge, Bot } from 'lucide-react';
import { PollCard, ToolCard, ResourceCard } from '../components/community';
import { getPollData, savePollData, getUserVotes, recordUserVote, calculateTotalVotes } from '../services/pollService';
import './CommunityPage.css';

const tools = [
    {
        id: 1,
        name: 'SEO Maturity Grader',
        description: 'Assess your SEO maturity level and get a personalized roadmap for improvement.',
        icon: Gauge,
        url: '/community/seo-maturity-grader',
        comingSoon: false,
    },
    {
        id: 2,
        name: 'AI Assistant',
        description: 'Get personalized SEO guidance and answers from our AI-powered assistant.',
        icon: Bot,
        url: '/community/ai-assistant',
        comingSoon: true,
    },
];

const resources = [
    {
        id: 1,
        title: 'SEO Automation Playbook',
        description: 'A comprehensive guide to implementing SEO automation in your organization.',
        type: 'guide',
        url: '#',
    },
    {
        id: 2,
        title: 'Getting Started with 4Sight',
        description: 'Video walkthrough of setting up your first automation workflow.',
        type: 'video',
        url: '#',
    },
    {
        id: 3,
        title: 'Content Calendar Template',
        description: 'Pre-built template for planning and scheduling automated content.',
        type: 'template',
        url: '#',
    },
    {
        id: 4,
        title: 'Data Governance Framework',
        description: 'Best practices for ensuring data quality in automated systems.',
        type: 'guide',
        url: '#',
    },
];

const CommunityPage = () => {
    const [polls, setPolls] = useState([]);
    const [userVotes, setUserVotes] = useState({});

    // Load poll data and user votes on mount
    useEffect(() => {
        const pollData = getPollData();
        const votes = getUserVotes();
        setPolls(pollData);
        setUserVotes(votes);
    }, []);

    // Handle voting
    const handleVote = (pollId, optionIndex) => {
        // Update polls state
        setPolls(prevPolls => {
            const updatedPolls = prevPolls.map(poll => {
                if (poll.id === pollId) {
                    const updatedOptions = poll.options.map((option, idx) => {
                        if (idx === optionIndex) {
                            return { ...option, votes: option.votes + 1 };
                        }
                        return option;
                    });
                    return { ...poll, options: updatedOptions };
                }
                return poll;
            });

            // Save to localStorage
            savePollData(updatedPolls);
            return updatedPolls;
        });

        // Record user vote
        recordUserVote(pollId, optionIndex);
        setUserVotes(prev => ({ ...prev, [pollId]: optionIndex }));
    };

    return (
        <div className="community-page">
            {/* Hero */}
            <section className="community-hero">
                <div className="community-hero-container">
                    <motion.h1
                        className="community-hero-title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Community <span className="text-gradient">Hub</span>
                    </motion.h1>
                    <motion.p
                        className="community-hero-subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Connect, learn, and grow with the 4Sight community
                    </motion.p>
                </div>
            </section>

            {/* Polls Section - Open to all (no AuthGuard) */}
            <section className="community-section">
                <div className="community-section-container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="section-title">Community Polls</h2>
                        <p className="section-subtitle">Share your thoughts and see what the community is thinking</p>
                    </motion.div>

                    <div className="polls-grid">
                        {polls.map((poll, index) => (
                            <PollCard
                                key={poll.id}
                                pollId={poll.id}
                                question={poll.question}
                                options={poll.options}
                                totalVotes={calculateTotalVotes(poll)}
                                userVotedOption={userVotes[poll.id]}
                                onVote={handleVote}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="community-section community-section-alt">
                <div className="community-section-container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="section-title">Free Tools</h2>
                        <p className="section-subtitle">Helpful tools for your automation journey</p>
                    </motion.div>

                    <div className="tools-grid">
                        {tools.map((tool, index) => (
                            <ToolCard
                                key={tool.id}
                                name={tool.name}
                                description={tool.description}
                                icon={tool.icon}
                                url={tool.url}
                                comingSoon={tool.comingSoon}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="community-section">
                <div className="community-section-container">
                    <motion.div
                        className="section-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="section-title">Resources</h2>
                        <p className="section-subtitle">Guides, videos, and templates to help you succeed</p>
                    </motion.div>

                    <div className="resources-grid">
                        {resources.map((resource, index) => (
                            <ResourceCard
                                key={resource.id}
                                title={resource.title}
                                description={resource.description}
                                type={resource.type}
                                url={resource.url}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CommunityPage;
