import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const [numPeople, setNumPeople] = useState('');
  const [roomType, setRoomType] = useState('Deluxe');

  return (
    <div className="main-content">
      <div className="header">
        <h1>Chandra Hotel</h1>
        <div className="nav-buttons">
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/signup')}>Signup</button>
        </div>
      </div>

      <div className="booking-form">
        <h2>Book Your Stay</h2>

        {/* Total Number of People */}
        <div className="form-group">
          <label>Total Number of People (max 6):</label>
          <input
            type="number"
            min="1"
            max="6"
            value={numPeople}
            onChange={(e) => setNumPeople(e.target.value)}
            placeholder="Enter number of people"
          />
        </div>

        {/* Room Type Dropdown */}
        <div className="form-group">
          <label>Room Type:</label>
          <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
            <option value="Deluxe">Deluxe</option>
            <option value="Super Deluxe">Super Deluxe</option>
          </select>
        </div>
      </div>

      <div className="footer">
        © 2025 Chandra Hotel. All rights reserved.
      </div>
    </div>
  );
}

export default Home;
