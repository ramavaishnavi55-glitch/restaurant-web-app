import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ isAuthenticated, user, cartCount, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <span>🍽️</span>
          RestaurantHub
        </Link>

        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/orders">Orders</Link></li>
        </ul>

        <div className="navbar-actions">
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>

          {isAuthenticated ? (
            <div className="user-menu">
              <Link to="/profile" className="user-profile">
                <FaUser />
              </Link>
              <button onClick={onLogout} className="btn btn-small btn-danger">
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="btn btn-small btn-outline">
                Login
              </Link>
              <Link to="/register" className="btn btn-small btn-primary">
                Register
              </Link>
            </>
          )}

          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/menu" onClick={() => setMobileMenuOpen(false)}>Menu</Link>
          <Link to="/reservations" onClick={() => setMobileMenuOpen(false)}>Reservations</Link>
          <Link to="/orders" onClick={() => setMobileMenuOpen(false)}>Orders</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
