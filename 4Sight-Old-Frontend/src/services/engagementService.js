/**
 * Engagement Service
 * 
 * Handles votes and comments via the 4Sight Backend API.
 */

import { apiRequest } from './apiConfig';

// ============================================
// VOTES
// ============================================

/**
 * Get vote counts for a post
 * @param {string} slug - Post slug/identifier
 * @returns {Object} { upvotes, downvotes, user_vote }
 */
export const getVotes = async (slug) => {
    try {
        const response = await apiRequest(`/posts/${encodeURIComponent(slug)}/votes`);

        if (!response.ok) {
            throw new Error('Failed to fetch votes');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching votes:', error);
        return { upvotes: 0, downvotes: 0, user_vote: null };
    }
};

/**
 * Submit a vote for a post
 * @param {string} slug - Post slug/identifier
 * @param {string} voteType - 'up' or 'down'
 * @returns {Object} Updated vote counts { upvotes, downvotes, user_vote }
 */
export const submitVote = async (slug, voteType) => {
    const response = await apiRequest(`/posts/${encodeURIComponent(slug)}/votes`, {
        method: 'POST',
        body: JSON.stringify({ vote_type: voteType }),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        if (response.status === 401) {
            throw new Error('Please log in to vote');
        }
        throw new Error(error.detail || 'Failed to submit vote');
    }

    return await response.json();
};

// ============================================
// COMMENTS
// ============================================

/**
 * Get all comments for a post
 * @param {string} slug - Post slug/identifier
 * @returns {Array} Array of comment objects
 */
export const getComments = async (slug) => {
    try {
        const response = await apiRequest(`/posts/${encodeURIComponent(slug)}/comments`);

        if (!response.ok) {
            throw new Error('Failed to fetch comments');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching comments:', error);
        return [];
    }
};

/**
 * Add a comment to a post
 * @param {string} slug - Post slug/identifier
 * @param {string} text - Comment text
 * @returns {Object} Created comment object
 */
export const addComment = async (slug, text) => {
    const response = await apiRequest(`/posts/${encodeURIComponent(slug)}/comments`, {
        method: 'POST',
        body: JSON.stringify({ text }),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        if (response.status === 401) {
            throw new Error('Please log in to comment');
        }
        throw new Error(error.detail || 'Failed to add comment');
    }

    return await response.json();
};

/**
 * Delete a comment
 * @param {string} slug - Post slug/identifier
 * @param {string} commentId - Comment ID to delete
 * @returns {Object} Success message
 */
export const deleteComment = async (slug, commentId) => {
    const response = await apiRequest(`/posts/${encodeURIComponent(slug)}/comments/${commentId}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        if (response.status === 401) {
            throw new Error('Please log in to delete comments');
        }
        if (response.status === 403) {
            throw new Error('You can only delete your own comments');
        }
        throw new Error(error.detail || 'Failed to delete comment');
    }

    return await response.json();
};

// ============================================
// EXPORTS
// ============================================

const engagementService = {
    getVotes,
    submitVote,
    getComments,
    addComment,
    deleteComment,
};

export default engagementService;
