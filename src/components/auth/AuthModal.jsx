import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './AuthModal.css';

const AuthModal = () => {
    const {
        authModalOpen,
        authModalMode,
        closeAuthModal,
        openAuthModal,
        getAndClearIntendedAction,
    } = useAuth();

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && authModalOpen) {
                closeAuthModal();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [authModalOpen, closeAuthModal]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (authModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [authModalOpen]);

    const handleSuccess = useCallback(() => {
        closeAuthModal();

        // Check for intended action to resume
        const intendedAction = getAndClearIntendedAction();
        if (intendedAction) {
            // Handle the intended action (e.g., navigate, trigger action)
            if (intendedAction.type === 'navigate' && intendedAction.path) {
                window.location.href = intendedAction.path;
            }
            // Other action types can be handled here
        }
    }, [closeAuthModal, getAndClearIntendedAction]);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeAuthModal();
        }
    };

    return (
        <AnimatePresence>
            {authModalOpen && (
                <motion.div
                    className="auth-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={handleOverlayClick}
                >
                    <motion.div
                        className="auth-modal"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                    >
                        <button
                            className="auth-modal-close"
                            onClick={closeAuthModal}
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>

                        <div className="auth-modal-content">
                            {authModalMode === 'login' ? (
                                <LoginForm
                                    onSuccess={handleSuccess}
                                    onSwitchToSignup={() => openAuthModal('signup')}
                                />
                            ) : (
                                <SignupForm
                                    onSuccess={handleSuccess}
                                    onSwitchToLogin={() => openAuthModal('login')}
                                />
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AuthModal;
