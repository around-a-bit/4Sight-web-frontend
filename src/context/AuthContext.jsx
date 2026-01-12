import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import authService from '../services/authService';

/**
 * Authentication Context
 * 
 * Single source of truth for authentication state.
 * No component should read directly from localStorage - always use this context.
 */

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [authModalMode, setAuthModalMode] = useState('login'); // 'login' or 'signup'

    // Initialize auth state on mount
    useEffect(() => {
        const initAuth = () => {
            try {
                const currentUser = authService.getCurrentUser();
                setUser(currentUser);
            } catch (error) {
                console.error('Error initializing auth:', error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        initAuth();
    }, []);

    /**
     * Login with email and password
     * @param {string} email 
     * @param {string} password 
     * @returns {Object} Logged in user
     */
    const login = useCallback(async (email, password) => {
        setLoading(true);
        try {
            const authenticatedUser = await authService.authenticate(email, password);
            setUser(authenticatedUser);
            return authenticatedUser;
        } finally {
            setLoading(false);
        }
    }, []);

    /**
     * Sign up with email, password, and name
     * @param {string} email 
     * @param {string} password 
     * @param {string} name 
     * @returns {Object} Created user
     */
    const signup = useCallback(async (email, password, name) => {
        setLoading(true);
        try {
            // Create user - this also logs them in and returns user
            const newUser = await authService.createUser(email, password, name);
            setUser(newUser);
            return newUser;
        } finally {
            setLoading(false);
        }
    }, []);

    /**
     * Logout current user
     */
    const logout = useCallback(() => {
        authService.logout();
        setUser(null);
    }, []);

    /**
     * Open auth modal
     * @param {string} mode - 'login' or 'signup'
     */
    const openAuthModal = useCallback((mode = 'login') => {
        setAuthModalMode(mode);
        setAuthModalOpen(true);
    }, []);

    /**
     * Close auth modal
     */
    const closeAuthModal = useCallback(() => {
        setAuthModalOpen(false);
    }, []);

    /**
     * Store intended action for post-login resume
     * @param {Object} action - { type, path, data }
     */
    const storeIntendedAction = useCallback((action) => {
        authService.storeIntendedAction(action);
    }, []);

    /**
     * Get and clear intended action after login
     * @returns {Object|null}
     */
    const getAndClearIntendedAction = useCallback(() => {
        return authService.getAndClearIntendedAction();
    }, []);

    const value = {
        // State
        user,
        isAuthenticated: !!user,
        loading,

        // Auth actions
        login,
        signup,
        logout,

        // Modal control
        authModalOpen,
        authModalMode,
        openAuthModal,
        closeAuthModal,

        // Intended action (for resuming after login)
        storeIntendedAction,
        getAndClearIntendedAction,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

/**
 * Hook to access auth context
 * @returns {Object} Auth context value
 */
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export default AuthContext;
