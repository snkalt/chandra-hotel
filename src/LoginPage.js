// src/LoginPage.js

import React from 'react';
import './App.css';

function LoginPage() {
  return (
    <div className="booking-form">
      <h2>Login to Your Account</h2>
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
      <div style={{ marginTop: '10px' }}>
        <a href="#" style={{ color: '#004080', textDecoration: 'underline' }}>Forgot Password?</a>
      </div>
    </div>
  );
}

export default LoginPage;
