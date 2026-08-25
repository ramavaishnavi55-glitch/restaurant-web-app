import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaMinus, FaPlus } from 'react-icons/fa';
import './Cart.css';

function Cart({ cart, removeFromCart, updateQuantity }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
  };

  const calculateSubtotal = () => calculateTotal();
  const tax = calculateSubtotal() * 0.05; // 5% tax
  const delivery = calculateSubtotal() > 500 ? 0 : 50; // Free delivery above 500
  const total = calculateSubtotal() + tax + delivery;

  if (cart.length === 0) {
    return (
      <div className="cart empty-cart">
        <div className="container">
          <div className="empty-state">
            <div className="empty-icon">🛒</div>
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added any items yet. Start exploring our delicious menu!</p>
            <Link to="/menu" className="btn btn-primary btn-large">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="container">
        <h1>Shopping Cart</h1>

        <div className="cart-layout">
          {/* Cart Items */}
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-image">
                  <span className="emoji-image">{item.image}</span>
                </div>

                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-category">{item.category}</p>
                  <p className="item-price">₹{item.price}</p>
                </div>

                <div className="item-quantity">
                  <button className="qty-btn" onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}>
                    <FaMinus />
                  </button>
                  <span className="qty-value">{item.quantity || 1}</span>
                  <button className="qty-btn" onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}>
                    <FaPlus />
                  </button>
                </div>

                <div className="item-total">
                  <p>₹{item.price * (item.quantity || 1)}</p>
                </div>

                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="order-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{calculateSubtotal().toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Tax (5%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>{delivery === 0 ? 'FREE' : `₹${delivery}`}</span>
            </div>

            {delivery === 0 && <p className="free-delivery">✓ Free delivery applied</p>}

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            <Link to="/checkout" className="btn btn-primary btn-block btn-large">
              Proceed to Checkout
            </Link>

            <Link to="/menu" className="btn btn-outline btn-block">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
