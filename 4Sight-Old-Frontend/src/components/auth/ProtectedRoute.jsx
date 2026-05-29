import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

/**
 * ProtectedRoute - Page-level route protection
 * 
 * Wraps routes that require authentication.
 * Redirects to login page if user is not authenticated.
 * Stores the intended destination for post-login redirect.
 */
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading, storeIntendedAction } = useAuth();
    const location = useLocation();

    // Show nothing while checking auth state
    if (loading) {
        return (
            <div className="auth-loading">
                <div className="auth-loading-spinner" />
            </div>
        );
    }

    // If not authenticated, redirect to login
    if (!isAuthenticated) {
        // Store intended destination
        storeIntendedAction({
            type: 'navigate',
            path: location.pathname + location.search,
        });

        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;
