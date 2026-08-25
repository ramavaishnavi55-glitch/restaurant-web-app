import React, { useState } from 'react';
import { FaCalendar, FaUsers, FaClock, FaPhone } from 'react-icons/fa';
import './Reservations.css';

function Reservations({ user }) {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 2,
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    specialRequests: ''
  });
  const [reservations, setReservations] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReservation = {
      id: Date.now(),
      ...formData,
      status: 'Confirmed'
    };
    setReservations([newReservation, ...reservations]);
    setIsSubmitted(true);
    setFormData({
      date: '',
      time: '',
      guests: 2,
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      specialRequests: ''
    });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="reservations">
      <div className="container">
        <h1>Reserve a Table</h1>

        <div className="reservations-layout">
          {/* Reservation Form */}
          <div className="reservation-form-section">
            {isSubmitted && <div className="success">✓ Reservation confirmed!</div>}

            <form onSubmit={handleSubmit} className="reservation-form">
              <div className="form-row">
                <div className="form-group">
                  <label>
                    <FaCalendar /> Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>
                    <FaClock /> Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>
                    <FaUsers /> Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>
                  <FaPhone /> Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Special Requests</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  placeholder="Any special requests? (e.g., window seat, celebration)"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block btn-large">
                Reserve Table
              </button>
            </form>
          </div>

          {/* Reservations List */}
          <div className="reservations-list-section">
            <h2>Your Reservations</h2>
            {reservations.length === 0 ? (
              <div className="no-reservations">
                <p>No reservations yet. Book your table above!</p>
              </div>
            ) : (
              <div className="reservations-list">
                {reservations.map(reservation => (
                  <div key={reservation.id} className="reservation-card">
                    <div className="reservation-header">
                      <div className="reservation-date-time">
                        <span className="date">📅 {reservation.date}</span>
                        <span className="time">🕐 {reservation.time}</span>
                      </div>
                      <span className={`status status-${reservation.status.toLowerCase()}`}>
                        {reservation.status}
                      </span>
                    </div>
                    <div className="reservation-details">
                      <p><strong>Name:</strong> {reservation.name}</p>
                      <p><strong>Guests:</strong> {reservation.guests}</p>
                      <p><strong>Phone:</strong> {reservation.phone}</p>
                      {reservation.specialRequests && (
                        <p><strong>Requests:</strong> {reservation.specialRequests}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservations;
