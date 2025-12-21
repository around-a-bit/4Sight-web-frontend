import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, User, AlertCircle, Loader2, Check } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './AuthModal.css';

const SignupForm = ({ onSuccess, onSwitchToLogin }) => {
    const { signup, loading } = useAuth();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError('');
    };

    // Password strength indicators
    const passwordChecks = {
        length: formData.password.length >= 6,
        hasLetter: /[a-zA-Z]/.test(formData.password),
        hasNumber: /[0-9]/.test(formData.password),
    };
    const passwordStrength = Object.values(passwordChecks).filter(Boolean).length;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Validation
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            setError('Please fill in all fields');
            return;
        }

        if (!formData.email.includes('@')) {
            setError('Please enter a valid email address');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            await signup(formData.email, formData.password, formData.name);
            onSuccess?.();
        } catch (err) {
            setError(err.message || 'Signup failed. Please try again.');
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-form-header">
                <h2>Create Account</h2>
                <p>Join to access all features</p>
            </div>

            {error && (
                <div className="auth-error">
                    <AlertCircle size={16} />
                    <span>{error}</span>
                </div>
            )}

            <div className="auth-input-group">
                <label htmlFor="signup-name">Name</label>
                <div className="auth-input-wrapper">
                    <User size={18} className="auth-input-icon" />
                    <input
                        id="signup-name"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={loading}
                        autoComplete="name"
                    />
                </div>
            </div>

            <div className="auth-input-group">
                <label htmlFor="signup-email">Email</label>
                <div className="auth-input-wrapper">
                    <Mail size={18} className="auth-input-icon" />
                    <input
                        id="signup-email"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={loading}
                        autoComplete="email"
                    />
                </div>
            </div>

            <div className="auth-input-group">
                <label htmlFor="signup-password">Password</label>
                <div className="auth-input-wrapper">
                    <Lock size={18} className="auth-input-icon" />
                    <input
                        id="signup-password"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
                        disabled={loading}
                        autoComplete="new-password"
                    />
                    <button
                        type="button"
                        className="auth-password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                        tabIndex={-1}
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                </div>

                {formData.password && (
                    <div className="password-strength">
                        <div className="strength-bars">
                            <div className={`strength-bar ${passwordStrength >= 1 ? 'active' : ''}`} />
                            <div className={`strength-bar ${passwordStrength >= 2 ? 'active' : ''}`} />
                            <div className={`strength-bar ${passwordStrength >= 3 ? 'active' : ''}`} />
                        </div>
                        <div className="strength-checks">
                            <span className={passwordChecks.length ? 'valid' : ''}>
                                <Check size={12} /> 6+ characters
                            </span>
                            <span className={passwordChecks.hasLetter ? 'valid' : ''}>
                                <Check size={12} /> Letters
                            </span>
                            <span className={passwordChecks.hasNumber ? 'valid' : ''}>
                                <Check size={12} /> Numbers
                            </span>
                        </div>
                    </div>
                )}
            </div>

            <div className="auth-input-group">
                <label htmlFor="signup-confirm">Confirm Password</label>
                <div className="auth-input-wrapper">
                    <Lock size={18} className="auth-input-icon" />
                    <input
                        id="signup-confirm"
                        type={showPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        disabled={loading}
                        autoComplete="new-password"
                    />
                </div>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                    <span className="auth-field-error">Passwords don't match</span>
                )}
            </div>

            <button
                type="submit"
                className="auth-submit-btn"
                disabled={loading}
            >
                {loading ? (
                    <>
                        <Loader2 size={18} className="spin" />
                        Creating account...
                    </>
                ) : (
                    'Create Account'
                )}
            </button>

            <div className="auth-form-footer">
                <p>
                    Already have an account?{' '}
                    <button
                        type="button"
                        className="auth-switch-btn"
                        onClick={onSwitchToLogin}
                    >
                        Sign in
                    </button>
                </p>
            </div>
        </form>
    );
};

export default SignupForm;
