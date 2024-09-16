import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './LoginPage.css'; // Assuming you have a CSS file for styling

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = () => {
        if (!email || !password) {
            setError('Email and Password are required');
            return;
        }

        setIsLoading(true);
        setError('');

        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
            if (email === 'admin@example.com' && password === 'password') {
                navigate('/home');
            } else {
                setError('Invalid credentials');
            }
        }, 1000);
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <p>By signing in you are agreeing to our <a href="/terms">Terms</a> and <a href="/privacy">Privacy Policy</a></p>
            {error && <div className="error">{error}</div>}
            <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
            />
            <div className="remember-forget">
             
                <a href="/forget-password" className="forget-password">Forget password?</a>
            </div>
            <button onClick={handleLogin} disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
            </button>
            <p>or connect with</p>
            <div className="social-login">
                <button className="social-button google"><i className="fab fa-google"></i></button>
                <button className="social-button facebook"><i className="fab fa-facebook-f"></i></button>
                <button className="social-button twitter"><i className="fab fa-twitter"></i></button>
                <button className="social-button linkedin"><i className="fab fa-linkedin-in"></i></button>
            </div>
            <p>Don't have an account? <a href="/register">Register</a></p>
        </div>
    );
}

export default LoginPage;
