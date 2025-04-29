import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [roomType, setRoomType] = useState('Deluxe');

  const handleBooking = () => {
    if (name && checkIn && checkOut && numPeople && roomType) {
      alert(`Booking successful for ${name}
        from ${checkIn} to ${checkOut}
        for ${numPeople} people in a ${roomType} room.`);
      // You can send booking data to the server here
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <div style={{ backgroundImage: 'url(/hotel-bg.jpg)', backgroundSize: 'cover', minHeight: '100vh' }}>
      <header className="header">
        <h1 onClick={() => navigate('/')}>Chandra Hotel</h1>
        <div className="nav-buttons">
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/signup')}>Signup</button>
        </div>
      </header>

      <main className="main-content">
        <div className="booking-form">
          <h2>Book Your Stay</h2>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />

          <input
            type="number"
            placeholder="Total Number of People (max 6)"
            value={numPeople}
            onChange={(e) => setNumPeople(e.target.value)}
            min="1"
            max="6"
          />

          <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
            <option value="Deluxe">Deluxe</option>
            <option value="Super Deluxe">Super Deluxe</option>
          </select>

          <button onClick={handleBooking}>Book Now</button>
        </div>
      </main>

      <footer className="footer">
        &copy; 2025 Chandra Hotel. All rights reserved.
      </footer>
    </div>
  );
}

export default HomePage;
