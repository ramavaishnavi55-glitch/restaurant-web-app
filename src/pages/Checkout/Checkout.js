import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBox, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './Checkout.css';

function Checkout({ cart, user, clearCart }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    city: '',
    postalCode: '',
    paymentMethod: 'card'
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const calculateTotal = () => {
    const subtotal = cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
    const tax = subtotal * 0.05;
    const delivery = subtotal > 500 ? 0 : 50;
    return subtotal + tax + delivery;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate order processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Order placed successfully!');
      clearCart();
      navigate('/orders');
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="checkout empty-checkout">
        <div className="container">
          <div className="empty-state">
            <h2>No items in cart</h2>
            <p>Add items to your cart before checking out</p>
            <button className="btn btn-primary" onClick={() => navigate('/menu')}>
              Back to Menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout">
      <div className="container">
        <h1>Checkout</h1>

        <div className="checkout-layout">
          {/* Checkout Form */}
          <div className="checkout-form-section">
            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="form-section">
                <h2>Delivery Address</h2>

                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
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

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Address</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Enter your complete address"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-section">
                <h2>Payment Method</h2>

                <div className="payment-options">
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleInputChange}
                    />
                    <span>Credit/Debit Card</span>
                  </label>
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={formData.paymentMethod === 'upi'}
                      onChange={handleInputChange}
                    />
                    <span>UPI</span>
                  </label>
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="wallet"
                      checked={formData.paymentMethod === 'wallet'}
                      onChange={handleInputChange}
                    />
                    <span>Digital Wallet</span>
                  </label>
                  <label className="payment-option">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={handleInputChange}
                    />
                    <span>Cash on Delivery</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-block btn-large"
                disabled={isProcessing}
              >
                {isProcessing ? 'Processing...' : 'Place Order'}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="order-summary-section">
            <div className="summary-card">
              <h2>Order Summary</h2>

              <div className="summary-items">
                {cart.map((item, index) => (
                  <div key={index} className="summary-item">
                    <div className="item-info">
                      <span className="item-name">{item.name}</span>
                      <span className="item-qty">x{item.quantity || 1}</span>
                    </div>
                    <span className="item-price">₹{item.price * (item.quantity || 1)}</span>
                  </div>
                ))}
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0).toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Tax (5%)</span>
                <span>₹{(cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0) * 0.05).toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Delivery</span>
                <span>{cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0) > 500 ? 'FREE' : '₹50'}</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-total">
                <span>Total Amount</span>
                <span>₹{calculateTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
