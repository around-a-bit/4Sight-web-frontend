/**
 * API Configuration
 * 
 * Centralized API configuration for 4Sight Frontend.
 * Uses environment variable or defaults to production backend.
 */

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://foursightbackend.onrender.com';

/**
 * Helper to make authenticated API requests
 * @param {string} endpoint - API endpoint (without base URL)
 * @param {Object} options - Fetch options
 * @returns {Promise<Response>}
 */
export const apiRequest = async (endpoint, options = {}) => {
    const token = localStorage.getItem('foresight_auth_token');

    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers,
    });

    return response;
};

export default { API_BASE_URL, apiRequest };
