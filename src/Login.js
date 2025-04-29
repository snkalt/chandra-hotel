import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate(); // ✅ React Router navigation

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      alert('Login successful');
      navigate('/'); // ✅ Navigate to home after successful login
    } else {
      alert('Please fill in both email and password');
    }
  };

  return (
    <div>
      <header className="header">
        <h1 onClick={() => navigate('/')}>Chandra Hotel</h1> {/* ✅ Navigate on logo click */}
      </header>

      <main className="main-content">
        <div className="login-form">
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <div className="forgot-password">Forgot Password?</div>
        </div>
      </main>

      <footer className="footer">
        &copy; 2025 Chandra Hotel. All rights reserved.
      </footer>
    </div>
  );
}

export default Login;
