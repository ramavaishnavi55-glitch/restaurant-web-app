import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaSignOutAlt, FaEdit } from 'react-icons/fa';
import './Profile.css';

function Profile({ user, onLogout }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john@example.com',
    phone: user?.phone || '+91-9999999999',
    address: user?.address || 'Plot 123, Main Street',
    city: 'New Delhi',
    postalCode: '110001'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile">
      <div className="container">
        <h1>My Profile</h1>

        <div className="profile-layout">
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar">
                {formData.name.charAt(0).toUpperCase()}
              </div>
              <div className="profile-info">
                <h2>{formData.name}</h2>
                <p className="member-since">Member since 2024</p>
              </div>
              <button
                className="btn btn-primary btn-small"
                onClick={() => setIsEditing(!isEditing)}
              >
                <FaEdit /> {isEditing ? 'Cancel' : 'Edit'}
              </button>
            </div>

            {isEditing ? (
              <form className="profile-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={handleSave}
                >
                  Save Changes
                </button>
              </form>
            ) : (
              <div className="profile-details">
                <div className="detail-item">
                  <FaEnvelope /> <span>{formData.email}</span>
                </div>
                <div className="detail-item">
                  <FaPhone /> <span>{formData.phone}</span>
                </div>
                <div className="detail-item">
                  <FaMapMarkerAlt /> <span>{formData.address}, {formData.city} - {formData.postalCode}</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="profile-stats">
            <div className="stat-card">
              <div className="stat-icon">📦</div>
              <div className="stat-content">
                <p className="stat-value">15</p>
                <p className="stat-label">Orders Placed</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-content">
                <p className="stat-value">4.8</p>
                <p className="stat-label">Avg Rating</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">💰</div>
              <div className="stat-content">
                <p className="stat-value">₹5,299</p>
                <p className="stat-label">Total Spent</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🎁</div>
              <div className="stat-content">
                <p className="stat-value">500</p>
                <p className="stat-label">Loyalty Points</p>
              </div>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div className="profile-footer">
          <button className="btn btn-danger btn-large" onClick={onLogout}>
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
