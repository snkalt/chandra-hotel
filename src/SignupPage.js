// src/SignupPage.js

import React from 'react';
import './App.css';

function SignupPage() {
  return (
    <div className="booking-form">
      <h2>Create an Account</h2>
      <input type="text" placeholder="Full Name" />
      <input type="email" placeholder="Email Address" />
      <input type="text" placeholder="Phone Number (optional)" />
      
      <div style={{ margin: '10px 0', textAlign: 'left', width: '100%' }}>
        <label style={{ marginRight: '10px' }}>
          <input type="checkbox" name="gender" value="male" /> Male
        </label>
        <label style={{ marginRight: '10px' }}>
          <input type="checkbox" name="gender" value="female" /> Female
        </label>
        <label>
          <input type="checkbox" name="gender" value="other" /> Other
        </label>
      </div>

      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button>Signup</button>
    </div>
  );
}

export default SignupPage;
