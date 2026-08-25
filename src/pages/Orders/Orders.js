import React, { useState } from 'react';
import { FaBox, FaTruck, FaCheckCircle, FaClock } from 'react-icons/fa';
import './Orders.css';

function Orders({ user }) {
  const [orders] = useState([
    {
      id: 'ORD001',
      date: '2024-08-25',
      items: ['Butter Chicken', 'Biryani', 'Paneer Tikka'],
      total: 1299,
      status: 'Delivered',
      deliveryDate: '2024-08-26',
      image: '📦'
    },
    {
      id: 'ORD002',
      date: '2024-08-23',
      items: ['Margherita Pizza', 'Caesar Salad'],
      total: 599,
      status: 'Delivered',
      deliveryDate: '2024-08-23',
      image: '🍕'
    },
    {
      id: 'ORD003',
      date: '2024-08-20',
      items: ['Fish & Chips', 'Chocolate Cake'],
      total: 799,
      status: 'Delivered',
      deliveryDate: '2024-08-20',
      image: '🐟'
    }
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Pending':
        return <FaClock />;
      case 'Processing':
        return <FaBox />;
      case 'Delivered':
        return <FaCheckCircle />;
      case 'Cancelled':
        return <FaTruck />;
      default:
        return <FaBox />;
    }
  };

  const getStatusClass = (status) => {
    return `status-${status.toLowerCase()}`;
  };

  return (
    <div className="orders">
      <div className="container">
        <h1>My Orders</h1>
        <p className="subtitle">Track your orders and view order history</p>

        {orders.length === 0 ? (
          <div className="no-orders">
            <div className="empty-icon">📭</div>
            <h2>No Orders Yet</h2>
            <p>You haven't placed any orders. Start exploring our menu!</p>
          </div>
        ) : (
          <div className="orders-grid">
            {orders.map(order => (
              <div key={order.id} className="order-card">
                <div className="order-header">
                  <div className="order-id-date">
                    <h3>Order {order.id}</h3>
                    <p className="order-date">📅 {order.date}</p>
                  </div>
                  <div className={`order-status ${getStatusClass(order.status)}`}>
                    {getStatusIcon(order.status)}
                    <span>{order.status}</span>
                  </div>
                </div>

                <div className="order-items">
                  <h4>Items:</h4>
                  <ul>
                    {order.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </div>

                <div className="order-footer">
                  <div className="order-total">
                    <span>Total:</span>
                    <span className="amount">₹{order.total}</span>
                  </div>
                  {order.deliveryDate && (
                    <p className="delivery-date">Delivered: {order.deliveryDate}</p>
                  )}
                </div>

                <button className="btn btn-outline btn-small btn-block">
                  View Details
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
