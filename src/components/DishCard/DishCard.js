import React, { useState } from 'react';
import { FaPlus, FaMinus, FaHeart, FaRegHeart, FaStar } from 'react-icons/fa';
import './DishCard.css';

function DishCard({ dish, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = () => {
    onAddToCart({ ...dish, quantity });
    setQuantity(1);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="dish-card">
      <div className="dish-image-container">
        <img src={dish.image} alt={dish.name} className="dish-image" />
        <div className="dish-category">{dish.category}</div>
        {dish.discount && <div className="dish-discount">-{dish.discount}%</div>}
        <button
          className="favorite-btn"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>

      <div className="dish-body">
        <div className="dish-header">
          <h3 className="dish-name">{dish.name}</h3>
          <div className="dish-rating">
            <FaStar className="star" />
            <span>{dish.rating}</span>
          </div>
        </div>

        <p className="dish-description">{dish.description}</p>

        <div className="dish-price">
          <span className="price-label">Price:</span>
          <span className="price-value">₹{dish.price}</span>
        </div>

        {dish.calories && (
          <div className="dish-info">
            <span className="info-badge">{dish.calories} cal</span>
            {dish.vegetarian && <span className="info-badge vegetarian">🌱 Veg</span>}
            {dish.spicy && <span className="info-badge spicy">🌶️ Spicy</span>}
          </div>
        )}

        <div className="dish-quantity">
          <button className="qty-btn" onClick={decrementQuantity}>
            <FaMinus />
          </button>
          <span className="qty-display">{quantity}</span>
          <button className="qty-btn" onClick={incrementQuantity}>
            <FaPlus />
          </button>
        </div>

        <button className="btn btn-primary btn-block" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default DishCard;
