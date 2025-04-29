import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const navigate = useNavigate(); // ✅ React Router navigation

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (name && email && password && confirmPassword) {
      if (password === confirmPassword) {
        alert('Signup successful');
        navigate('/'); // ✅ Go to home after signup
      } else {
        alert('Passwords do not match');
      }
    } else {
      alert('Please fill in all required fields');
    }
  };

  return (
    <div>
      <header className="header">
        <h1 onClick={() => navigate('/')}>Chandra Hotel</h1> {/* ✅ Navigate on click */}
      </header>

      <main className="main-content">
        <div className="signup-form">
          <h2>Signup</h2>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <div className="gender-selection">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={() => setGender('male')}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={() => setGender('female')}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                onChange={() => setGender('other')}
              />
              Other
            </label>
          </div>

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button onClick={handleSignup}>Signup</button>
        </div>
      </main>

      <footer className="footer">
        &copy; 2025 Chandra Hotel. All rights reserved.
      </footer>
    </div>
  );
}

export default Signup;
