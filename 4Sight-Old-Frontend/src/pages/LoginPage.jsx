import { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { LoginForm } from '../components/auth';
import '../components/auth/AuthModal.css';
import './AuthPage.css';

const LoginPage = () => {
    const { isAuthenticated, getAndClearIntendedAction } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // Redirect if already authenticated
    useEffect(() => {
        if (isAuthenticated) {
            // Check for intended action
            const intendedAction = getAndClearIntendedAction();
            if (intendedAction?.type === 'navigate' && intendedAction.path) {
                navigate(intendedAction.path, { replace: true });
            } else if (location.state?.from) {
                navigate(location.state.from.pathname, { replace: true });
            } else {
                navigate('/', { replace: true });
            }
        }
    }, [isAuthenticated, navigate, location, getAndClearIntendedAction]);

    const handleSuccess = () => {
        // Navigation will be handled by the useEffect above
    };

    return (
        <div className="auth-page">
            <motion.div
                className="auth-page-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link to="/" className="auth-page-back">
                    <ArrowLeft size={18} />
                    Back to Home
                </Link>

                <div className="auth-page-card">
                    <div className="auth-page-branding">
                        <Link to="/" className="auth-page-logo">
                            <span className="logo-text">4</span>
                            <span className="logo-text-gradient">Sight</span>
                        </Link>
                    </div>

                    <LoginForm
                        onSuccess={handleSuccess}
                        onSwitchToSignup={() => navigate('/signup')}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
