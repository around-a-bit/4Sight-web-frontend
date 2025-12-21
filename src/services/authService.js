/**
 * Authentication Service
 * 
 * ⚠️ POC IMPLEMENTATION WARNING ⚠️
 * This service uses localStorage to simulate JSON file-based user storage.
 * Password encoding uses base64 which is NOT secure for production.
 * 
 * For production migration:
 * - Replace localStorage calls with REST API calls
 * - Implement proper bcrypt password hashing on backend
 * - Add JWT token management
 * - This service interface remains the same (zero UI rewrite needed)
 */

const STORAGE_KEY = 'foresight_auth_data';

// ============================================
// STORAGE HELPERS (Simulating JSON file)
// ============================================

/**
 * Get all stored auth data from localStorage
 * @returns {Object} Auth data with users array and currentSession
 */
const getAuthData = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) {
            return { users: [], currentSession: null };
        }
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading auth data:', error);
        return { users: [], currentSession: null };
    }
};

/**
 * Save auth data to localStorage
 * @param {Object} data - Auth data to save
 */
const saveAuthData = (data) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
        console.error('Error saving auth data:', error);
        throw new Error('Failed to save authentication data');
    }
};

// ============================================
// PASSWORD HANDLING (POC - NOT PRODUCTION SAFE)
// ============================================

/**
 * Encode password for storage (POC only - NOT SECURE)
 * ⚠️ Replace with bcrypt hashing on backend for production
 * @param {string} password - Plain text password
 * @returns {string} Encoded password
 */
const encodePasswordPoC = (password) => {
    // Simple base64 encoding - NOT SECURE, for PoC demonstration only
    return btoa(password + '_foresight_salt_poc');
};

/**
 * Verify password against stored hash (POC only)
 * @param {string} password - Plain text password to verify
 * @param {string} storedHash - Stored encoded password
 * @returns {boolean} Whether password matches
 */
const verifyPasswordPoC = (password, storedHash) => {
    return encodePasswordPoC(password) === storedHash;
};

// ============================================
// USER ID GENERATION
// ============================================

/**
 * Generate a unique user ID
 * @returns {string} Unique user ID
 */
const generateUserId = () => {
    const timestamp = Date.now();
    const randomPart = Math.random().toString(36).substring(2, 8);
    return `user_${timestamp}_${randomPart}`;
};

// ============================================
// USER MANAGEMENT
// ============================================

/**
 * Get all registered users
 * @returns {Array} Array of user objects (without passwords)
 */
export const getUsers = () => {
    const { users } = getAuthData();
    // Return users without password hashes for safety
    return users.map(({ passwordHash, ...user }) => user);
};

/**
 * Find a user by email
 * @param {string} email - User email to find
 * @returns {Object|null} User object or null if not found
 */
export const findUserByEmail = (email) => {
    const { users } = getAuthData();
    return users.find(user => user.email.toLowerCase() === email.toLowerCase()) || null;
};

/**
 * Create a new user
 * @param {string} email - User email
 * @param {string} password - User password
 * @param {string} name - User display name
 * @returns {Object} Created user object (without password)
 */
export const createUser = (email, password, name) => {
    const authData = getAuthData();

    // Check for existing user
    const existingUser = findUserByEmail(email);
    if (existingUser) {
        throw new Error('An account with this email already exists');
    }

    // Validate inputs
    if (!email || !email.includes('@')) {
        throw new Error('Please enter a valid email address');
    }
    if (!password || password.length < 6) {
        throw new Error('Password must be at least 6 characters');
    }
    if (!name || name.trim().length < 2) {
        throw new Error('Please enter your name');
    }

    const now = new Date().toISOString();
    const newUser = {
        id: generateUserId(),
        email: email.toLowerCase().trim(),
        name: name.trim(),
        passwordHash: encodePasswordPoC(password),
        createdAt: now,
        lastLogin: now,
    };

    authData.users.push(newUser);
    saveAuthData(authData);

    // Return user without password hash
    const { passwordHash, ...safeUser } = newUser;
    return safeUser;
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
export const authenticate = (email, password) => {
    const authData = getAuthData();
    const user = authData.users.find(
        u => u.email.toLowerCase() === email.toLowerCase()
    );

    if (!user) {
        throw new Error('No account found with this email');
    }

    if (!verifyPasswordPoC(password, user.passwordHash)) {
        throw new Error('Incorrect password');
    }

    // Update last login
    user.lastLogin = new Date().toISOString();

    // Create session (expires in 24 hours)
    const sessionExpiry = new Date();
    sessionExpiry.setHours(sessionExpiry.getHours() + 24);

    authData.currentSession = {
        userId: user.id,
        expiresAt: sessionExpiry.toISOString(),
    };

    saveAuthData(authData);

    // Return user without password hash
    const { passwordHash, ...safeUser } = user;
    return safeUser;
};

/**
 * Get the currently logged-in user from session
 * @returns {Object|null} Current user or null if not logged in
 */
export const getCurrentUser = () => {
    const authData = getAuthData();

    if (!authData.currentSession) {
        return null;
    }

    // Check if session is expired
    const expiresAt = new Date(authData.currentSession.expiresAt);
    if (expiresAt < new Date()) {
        // Session expired, clear it
        logout();
        return null;
    }

    // Find the user
    const user = authData.users.find(
        u => u.id === authData.currentSession.userId
    );

    if (!user) {
        // User not found, clear session
        logout();
        return null;
    }

    // Return user without password hash
    const { passwordHash, ...safeUser } = user;
    return safeUser;
};

/**
 * Log out the current user
 */
export const logout = () => {
    const authData = getAuthData();
    authData.currentSession = null;
    saveAuthData(authData);
};

// ============================================
// INTENDED ACTION TRACKING (Post-login resume)
// ============================================

const INTENDED_ACTION_KEY = 'foresight_intended_action';

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
// EXPORTS
// ============================================

const authService = {
    getUsers,
    findUserByEmail,
    createUser,
    authenticate,
    getCurrentUser,
    logout,
    storeIntendedAction,
    getAndClearIntendedAction,
};

export default authService;
