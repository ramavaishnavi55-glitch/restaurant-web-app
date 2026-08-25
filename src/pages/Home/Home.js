import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaClock, FaShieldAlt, FaUtensils } from 'react-icons/fa';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to RestaurantHub</h1>
          <p>Your one-stop platform for exploring menus, making reservations, and ordering delicious food online</p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary btn-large">
              Explore Menu <FaArrowRight />
            </Link>
            <Link to="/reservations" className="btn btn-outline btn-large">
              Book a Table
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="placeholder-image">🍽️</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose RestaurantHub?</h2>
            <p>Everything you need for a perfect dining experience</p>
          </div>

          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">
                <FaUtensils />
              </div>
              <h3>Diverse Menu</h3>
              <p>Explore a wide variety of cuisines from multiple restaurants with detailed descriptions and ratings</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaClock />
              </div>
              <h3>Quick Ordering</h3>
              <p>Place orders in minutes with our streamlined checkout process and multiple payment options</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>
              <h3>Secure & Safe</h3>
              <p>Your data is protected with industry-leading security and encrypted payment processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how-it-works">
        <div className="container">
          <div className="section-title">
            <h2>How It Works</h2>
            <p>3 simple steps to enjoy your meal</p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Browse Menu</h3>
              <p>Explore our extensive menu with filters by cuisine, price, and dietary preferences</p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Customize & Order</h3>
              <p>Add items to cart, customize your order, and proceed to secure checkout</p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Track & Enjoy</h3>
              <p>Track your order in real-time and enjoy your meal when it arrives</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Order?</h2>
            <p>Join thousands of happy customers enjoying delicious food delivered to their doorstep</p>
            <Link to="/menu" className="btn btn-primary btn-large">
              Start Ordering Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
