import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import './Login.css';

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (formData.email && formData.password) {
        const userData = {
          name: 'John Doe',
          email: formData.email,
          phone: '+91-9999999999',
          address: 'Plot 123, Main Street'
        };
        onLogin(userData);
        navigate('/');
      } else {
        setError('Please fill in all fields');
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-form-wrapper">
          <div className="login-header">
            <div className="login-icon">🍽️</div>
            <h1>Welcome Back</h1>
            <p>Sign in to your RestaurantHub account</p>
          </div>

          {error && <div className="error">{error}</div>}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>
                <FaEnvelope /> Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>
                <FaLock /> Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-primary btn-block btn-large" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className="login-footer">
            <p>Don't have an account? <Link to="/register">Sign up here</Link></p>
          </div>

          <div className="demo-creds">
            <p>Demo Credentials:</p>
            <code>email@example.com / password123</code>
          </div>
        </div>

        <div className="login-image">
          <div className="image-placeholder">🎉</div>
          <h2>Delicious Food Awaits</h2>
          <p>Order from your favorite restaurants and enjoy amazing discounts!</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
