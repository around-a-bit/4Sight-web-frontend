import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn, LogOut, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';
import { useAuth } from '../../context/AuthContext';
import './Header.css';

// Logo
import logo4Sight from '../../assets/4sight-logo.png';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/knowledge', label: 'Knowledge' },
    { path: '/product', label: 'Product' },
    { path: '/community', label: 'Community' },
];

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();
    const { user, isAuthenticated, logout, openAuthModal } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down & past 100px
                setIsHidden(true);
            } else {
                // Scrolling up
                setIsHidden(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleLogout = () => {
        logout();
        closeMobileMenu();
    };

    return (
        <header className={`header ${isHidden ? 'header-hidden' : ''}`}>
            <div className="header-container">
                <Link to="/" className="header-logo" onClick={closeMobileMenu}>
                    <img src={logo4Sight} alt="4Sight" className="logo-image" />
                    <span className="logo-text-gradient">4Sight</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="header-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
                        >
                            {link.label}
                            {location.pathname === link.path && (
                                <motion.div
                                    className="nav-link-indicator"
                                    layoutId="navIndicator"
                                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Actions: Auth + Theme Toggle + Mobile Menu */}
                <div className="header-actions">
                    {/* Auth Buttons */}
                    {isAuthenticated ? (
                        <div className="header-user">
                            <div className="header-user-info">
                                <User size={16} />
                                <span className="header-user-name">{user?.name?.split(' ')[0]}</span>
                            </div>
                            <button
                                className="header-auth-btn header-logout-btn"
                                onClick={handleLogout}
                                title="Log out"
                            >
                                <LogOut size={16} />
                                <span>Logout</span>
                            </button>
                        </div>
                    ) : (
                        <div className="header-auth-buttons">
                            <button
                                className="header-auth-btn header-login-btn"
                                onClick={() => openAuthModal('login')}
                            >
                                <LogIn size={16} />
                                <span>Login</span>
                            </button>
                            <button
                                className="header-auth-btn header-signup-btn"
                                onClick={() => openAuthModal('signup')}
                            >
                                Sign Up
                            </button>
                        </div>
                    )}

                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-button"
                        onClick={toggleMobileMenu}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        className="mobile-nav"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.path}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    to={link.path}
                                    className={`mobile-nav-link ${location.pathname === link.path ? 'mobile-nav-link-active' : ''}`}
                                    onClick={closeMobileMenu}
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}

                        {/* Mobile Auth */}
                        <motion.div
                            className="mobile-auth-section"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: navLinks.length * 0.1 }}
                        >
                            {isAuthenticated ? (
                                <>
                                    <div className="mobile-user-info">
                                        <User size={18} />
                                        <span>{user?.name}</span>
                                    </div>
                                    <button
                                        className="mobile-auth-btn"
                                        onClick={handleLogout}
                                    >
                                        <LogOut size={18} />
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        className="mobile-auth-btn mobile-login-btn"
                                        onClick={() => {
                                            closeMobileMenu();
                                            openAuthModal('login');
                                        }}
                                    >
                                        <LogIn size={18} />
                                        Login
                                    </button>
                                    <button
                                        className="mobile-auth-btn mobile-signup-btn"
                                        onClick={() => {
                                            closeMobileMenu();
                                            openAuthModal('signup');
                                        }}
                                    >
                                        Sign Up
                                    </button>
                                </>
                            )}
                        </motion.div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
