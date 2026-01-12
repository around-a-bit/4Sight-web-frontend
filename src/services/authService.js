/**
 * Authentication Service
 * 
 * Handles user authentication via the 4Sight Backend API.
 * Stores JWT token in localStorage for session management.
 */

import { API_BASE_URL, apiRequest } from './apiConfig';

const TOKEN_KEY = 'foresight_auth_token';
const USER_KEY = 'foresight_user';
const INTENDED_ACTION_KEY = 'foresight_intended_action';

// ============================================
// TOKEN MANAGEMENT
// ============================================

/**
 * Store JWT token in localStorage
 * @param {string} token - JWT access token
 */
const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
};

/**
 * Get JWT token from localStorage
 * @returns {string|null}
 */
const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

/**
 * Remove JWT token from localStorage
 */
const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
};

/**
 * Store user data in localStorage for quick access
 * @param {Object} user - User object
 */
const setStoredUser = (user) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
};

/**
 * Get stored user from localStorage
 * @returns {Object|null}
 */
const getStoredUser = () => {
    try {
        const stored = localStorage.getItem(USER_KEY);
        return stored ? JSON.parse(stored) : null;
    } catch {
        return null;
    }
};

/**
 * Remove stored user from localStorage
 */
const removeStoredUser = () => {
    localStorage.removeItem(USER_KEY);
};

// ============================================
// USER MANAGEMENT
// ============================================

/**
 * Create a new user (signup)
 * @param {string} email - User email
 * @param {string} password - User password
 * @param {string} name - User display name (username)
 * @returns {Object} Created user object with token
 */
export const createUser = async (email, password, name) => {
    const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email.toLowerCase().trim(),
            password,
            username: name.trim(),
        }),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.detail || 'Failed to create account');
    }

    const data = await response.json();

    // Store token and user
    setToken(data.access_token);
    setStoredUser(data.user);

    return data.user;
};

// ============================================
// AUTHENTICATION
// ============================================

/**
 * Authenticate a user with email and password
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Object} Authenticated user object
 */
export const authenticate = async (email, password) => {
    const response = await fetch(`${API_BASE_URL}/auth/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email.toLowerCase().trim(),
            password,
        }),
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.detail || 'Invalid email or password');
    }

    const data = await response.json();

    // Store token and user
    setToken(data.access_token);
    setStoredUser(data.user);

    return data.user;
};

/**
 * Get the currently logged-in user
 * First checks localStorage, then verifies with backend if token exists
 * @returns {Object|null} Current user or null if not logged in
 */
export const getCurrentUser = () => {
    const token = getToken();
    if (!token) {
        return null;
    }

    // Return cached user for quick access
    // The token will be verified on actual API calls
    return getStoredUser();
};

/**
 * Verify current session with backend
 * @returns {Object|null} Verified user or null
 */
export const verifySession = async () => {
    const token = getToken();
    if (!token) {
        return null;
    }

    try {
        const response = await apiRequest('/auth/me');

        if (!response.ok) {
            // Token is invalid, clear session
            logout();
            return null;
        }

        const user = await response.json();
        setStoredUser(user);
        return user;
    } catch (error) {
        console.error('Session verification failed:', error);
        return getStoredUser(); // Fall back to cached user
    }
};

/**
 * Log out the current user
 */
export const logout = () => {
    removeToken();
    removeStoredUser();
};

// ============================================
// INTENDED ACTION TRACKING (Post-login resume)
// ============================================

/**
 * Store the intended action before redirecting to login
 * @param {Object} action - Action to store { type, path, data }
 */
export const storeIntendedAction = (action) => {
    try {
        sessionStorage.setItem(INTENDED_ACTION_KEY, JSON.stringify(action));
    } catch (error) {
        console.error('Error storing intended action:', error);
    }
};

/**
 * Retrieve and clear the intended action after login
 * @returns {Object|null} The stored action or null
 */
export const getAndClearIntendedAction = () => {
    try {
        const action = sessionStorage.getItem(INTENDED_ACTION_KEY);
        if (action) {
            sessionStorage.removeItem(INTENDED_ACTION_KEY);
            return JSON.parse(action);
        }
        return null;
    } catch (error) {
        console.error('Error retrieving intended action:', error);
        return null;
    }
};

// ============================================
// LEGACY COMPATIBILITY (for existing code)
// ============================================

/**
 * Find a user by email (legacy - not needed with backend)
 * @deprecated Use authenticate() instead
 */
export const findUserByEmail = () => {
    console.warn('findUserByEmail is deprecated with backend authentication');
    return null;
};

/**
 * Get all users (legacy - not available with backend)
 * @deprecated Not available in production
 */
export const getUsers = () => {
    console.warn('getUsers is not available with backend authentication');
    return [];
};

// ============================================
// EXPORTS
// ============================================

const authService = {
    createUser,
    authenticate,
    getCurrentUser,
    verifySession,
    logout,
    storeIntendedAction,
    getAndClearIntendedAction,
    findUserByEmail,
    getUsers,
    getToken,
};

export default authService;
