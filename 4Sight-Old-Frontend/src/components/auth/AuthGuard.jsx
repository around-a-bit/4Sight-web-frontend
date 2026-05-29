import { Lock, LogIn } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './AuthModal.css';

/**
 * AuthGuard - Inline content gating
 * 
 * Wraps content that requires authentication.
 * Shows a locked overlay with login prompt for unauthenticated users.
 * Does NOT redirect - preserves user context.
 * 
 * Props:
 * - children: Content to protect
 * - fallback: Optional custom fallback UI
 * - title: Title for locked overlay (default: "Login Required")
 * - message: Message for locked overlay
 * - blurContent: Whether to show blurred content behind (default: true)
 * - actionType: Type of action for post-login resume
 * - actionData: Additional data for post-login resume
 */
const AuthGuard = ({
    children,
    fallback,
    title = "Login Required",
    message = "Please sign in to access this feature",
    blurContent = true,
    actionType,
    actionData,
}) => {
    const { isAuthenticated, loading, openAuthModal, storeIntendedAction } = useAuth();

    // Show loading state
    if (loading) {
        return (
            <div className="auth-guard-loading">
                <div className="auth-loading-spinner" />
            </div>
        );
    }

    // If authenticated, render children normally
    if (isAuthenticated) {
        return children;
    }

    // Handle login click
    const handleLoginClick = () => {
        // Store intended action for post-login resume
        if (actionType) {
            storeIntendedAction({
                type: actionType,
                data: actionData,
            });
        }
        openAuthModal('login');
    };

    // If custom fallback provided, use it
    if (fallback) {
        return fallback;
    }

    // Default locked overlay
    return (
        <div className="auth-guard-locked">
            {blurContent && (
                <div className="auth-guard-locked-content">
                    {children}
                </div>
            )}
            <div className="auth-guard-overlay">
                <div className="auth-guard-overlay-icon">
                    <Lock size={28} />
                </div>
                <h3>{title}</h3>
                <p>{message}</p>
                <button
                    className="auth-guard-btn"
                    onClick={handleLoginClick}
                >
                    <LogIn size={16} />
                    Sign In to Continue
                </button>
            </div>
        </div>
    );
};

export default AuthGuard;
