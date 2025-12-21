import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, AlertCircle, Loader2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import './AuthModal.css';

const LoginForm = ({ onSuccess, onSwitchToSignup }) => {
    const { login, loading } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError(''); // Clear error on input change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Basic validation
        if (!formData.email || !formData.password) {
            setError('Please fill in all fields');
            return;
        }

        try {
            await login(formData.email, formData.password);
            onSuccess?.();
        } catch (err) {
            setError(err.message || 'Login failed. Please try again.');
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-form-header">
                <h2>Welcome Back</h2>
                <p>Sign in to access all features</p>
            </div>

            {error && (
                <div className="auth-error">
                    <AlertCircle size={16} />
                    <span>{error}</span>
                </div>
            )}

            <div className="auth-input-group">
                <label htmlFor="login-email">Email</label>
                <div className="auth-input-wrapper">
                    <Mail size={18} className="auth-input-icon" />
                    <input
                        id="login-email"
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
                <label htmlFor="login-password">Password</label>
                <div className="auth-input-wrapper">
                    <Lock size={18} className="auth-input-icon" />
                    <input
                        id="login-password"
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        disabled={loading}
                        autoComplete="current-password"
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
            </div>

            <button
                type="submit"
                className="auth-submit-btn"
                disabled={loading}
            >
                {loading ? (
                    <>
                        <Loader2 size={18} className="spin" />
                        Signing in...
                    </>
                ) : (
                    'Sign In'
                )}
            </button>

            <div className="auth-form-footer">
                <p>
                    Don't have an account?{' '}
                    <button
                        type="button"
                        className="auth-switch-btn"
                        onClick={onSwitchToSignup}
                    >
                        Sign up
                    </button>
                </p>
            </div>
        </form>
    );
};

export default LoginForm;
