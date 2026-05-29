/**
 * Poll Service
 * Handles poll vote persistence using localStorage.
 * 
 * Note: For true cross-user synchronization, replace localStorage 
 * with REST API calls to a backend database.
 */

const POLLS_STORAGE_KEY = '4sight_poll_data';
const USER_VOTES_KEY = '4sight_user_votes';

// Default poll data with initial structure
const DEFAULT_POLLS = [
    {
        id: 1,
        question: 'What gets more priority with Google in terms of indexing & ranking?',
        options: [
            { text: 'Page Speed', votes: 0 },
            { text: 'Page Content', votes: 0 },
            { text: 'Selection of right keywords', votes: 0 },
            { text: 'Domain Authority', votes: 0 },
        ],
    },
    {
        id: 2,
        question: 'My online traffic can increase if...',
        options: [
            { text: 'Rank on top keywords', votes: 0 },
            { text: 'Blogs getting audience participation', votes: 0 },
            { text: 'Maintaining core vitals as per Google recommendations', votes: 0 },
            { text: 'All of these', votes: 0 },
        ],
    },
];

/**
 * Get poll data from localStorage
 * @returns {Array} Poll data array
 */
export const getPollData = () => {
    try {
        const stored = localStorage.getItem(POLLS_STORAGE_KEY);
        if (stored) {
            return JSON.parse(stored);
        }
        // Initialize with default polls if none exist
        savePollData(DEFAULT_POLLS);
        return DEFAULT_POLLS;
    } catch (error) {
        console.error('Error reading poll data:', error);
        return DEFAULT_POLLS;
    }
};

/**
 * Save poll data to localStorage
 * @param {Array} polls - Poll data array to save
 */
export const savePollData = (polls) => {
    try {
        localStorage.setItem(POLLS_STORAGE_KEY, JSON.stringify(polls));
    } catch (error) {
        console.error('Error saving poll data:', error);
    }
};

/**
 * Get user's voted polls
 * @returns {Object} Object mapping pollId to optionIndex
 */
export const getUserVotes = () => {
    try {
        const stored = localStorage.getItem(USER_VOTES_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch (error) {
        console.error('Error reading user votes:', error);
        return {};
    }
};

/**
 * Record a user's vote
 * @param {number} pollId - ID of the poll
 * @param {number} optionIndex - Index of the selected option
 */
export const recordUserVote = (pollId, optionIndex) => {
    try {
        const userVotes = getUserVotes();
        userVotes[pollId] = optionIndex;
        localStorage.setItem(USER_VOTES_KEY, JSON.stringify(userVotes));
    } catch (error) {
        console.error('Error recording user vote:', error);
    }
};

/**
 * Calculate total votes for a poll
 * @param {Object} poll - Poll object with options
 * @returns {number} Total votes
 */
export const calculateTotalVotes = (poll) => {
    return poll.options.reduce((sum, option) => sum + option.votes, 0);
};

/**
 * Reset poll data to defaults (for testing/admin purposes)
 */
export const resetPollData = () => {
    localStorage.removeItem(POLLS_STORAGE_KEY);
    localStorage.removeItem(USER_VOTES_KEY);
};
