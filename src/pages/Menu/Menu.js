import React, { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import DishCard from '../../components/DishCard/DishCard';
import './Menu.css';

function Menu({ addToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(500);

  // Sample menu data with real image URLs
  const dishes = [
    {
      id: 1,
      name: 'Margherita Pizza',
      category: 'Pizza',
      price: 299,
      image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop',
      description: 'Classic pizza with fresh mozzarella and basil',
      rating: 4.5,
      vegetarian: true,
      discount: 10,
      calories: 280
    },
    {
      id: 2,
      name: 'Butter Chicken',
      category: 'Curry',
      price: 349,
      image: 'https://images.unsplash.com/photo-1603894542802-f5ebb3a000da?w=400&h=300&fit=crop',
      description: 'Tender chicken in creamy tomato-based sauce',
      rating: 4.7,
      vegetarian: false,
      discount: 5,
      calories: 350
    },
    {
      id: 3,
      name: 'Caesar Salad',
      category: 'Salad',
      price: 199,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      description: 'Crispy romaine with parmesan and croutons',
      rating: 4.3,
      vegetarian: true,
      discount: 0,
      calories: 150
    },
    {
      id: 4,
      name: 'Biryani',
      category: 'Rice',
      price: 299,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a104?w=400&h=300&fit=crop',
      description: 'Fragrant basmati rice with aromatic spices',
      rating: 4.6,
      vegetarian: false,
      discount: 15,
      calories: 400
    },
    {
      id: 5,
      name: 'Pasta Carbonara',
      category: 'Pasta',
      price: 349,
      image: 'https://images.unsplash.com/photo-1612874742237-415c69f18333?w=400&h=300&fit=crop',
      description: 'Creamy pasta with bacon and parmesan',
      rating: 4.4,
      vegetarian: false,
      discount: 0,
      calories: 450
    },
    {
      id: 6,
      name: 'Paneer Tikka',
      category: 'Appetizer',
      price: 249,
      image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd94548?w=400&h=300&fit=crop',
      description: 'Grilled cottage cheese with spices',
      rating: 4.5,
      vegetarian: true,
      discount: 20,
      calories: 200
    },
    {
      id: 7,
      name: 'Fish & Chips',
      category: 'Seafood',
      price: 399,
      image: 'https://images.unsplash.com/photo-1615326340584-92525521c91f?w=400&h=300&fit=crop',
      description: 'Crispy battered fish with fries',
      rating: 4.6,
      vegetarian: false,
      discount: 0,
      calories: 500
    },
    {
      id: 8,
      name: 'Chocolate Cake',
      category: 'Dessert',
      price: 149,
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
      description: 'Rich chocolate cake with frosting',
      rating: 4.8,
      vegetarian: true,
      discount: 10,
      calories: 350
    },
    {
      id: 9,
      name: 'Tandoori Chicken',
      category: 'Curry',
      price: 329,
      image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd94548?w=400&h=300&fit=crop',
      description: 'Spiced chicken cooked in traditional tandoor',
      rating: 4.7,
      vegetarian: false,
      discount: 12,
      calories: 320,
      spicy: true
    },
    {
      id: 10,
      name: 'Veggie Burger',
      category: 'Appetizer',
      price: 219,
      image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&h=300&fit=crop',
      description: 'Plant-based burger with fresh vegetables',
      rating: 4.4,
      vegetarian: true,
      discount: 0,
      calories: 280
    },
    {
      id: 11,
      name: 'Grilled Salmon',
      category: 'Seafood',
      price: 449,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
      description: 'Fresh salmon fillet with lemon butter sauce',
      rating: 4.8,
      vegetarian: false,
      discount: 8,
      calories: 380
    },
    {
      id: 12,
      name: 'Tiramisu',
      category: 'Dessert',
      price: 179,
      image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&h=300&fit=crop',
      description: 'Italian dessert with mascarpone and espresso',
      rating: 4.9,
      vegetarian: true,
      discount: 5,
      calories: 400
    }
  ];

  const categories = ['All', 'Pizza', 'Curry', 'Salad', 'Rice', 'Pasta', 'Appetizer', 'Seafood', 'Dessert'];

  const filteredDishes = dishes.filter(dish => {
    const matchCategory = selectedCategory === 'All' || dish.category === selectedCategory;
    const matchSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchPrice = dish.price <= priceRange;
    return matchCategory && matchSearch && matchPrice;
  });

  return (
    <div className="menu">
      <div className="menu-header">
        <div className="container">
          <h1>Our Menu</h1>
          <p>Discover our delicious selection of dishes</p>
        </div>
      </div>

      <div className="container">
        <div className="menu-controls">
          {/* Search Bar */}
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            <div className="filter-label">
              <FaFilter /> Categories
            </div>
            <div className="category-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="price-filter">
            <label>Price Range: ₹0 - ₹{priceRange}</label>
            <input
              type="range"
              min="0"
              max="500"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="price-slider"
            />
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="menu-grid">
          {filteredDishes.length > 0 ? (
            filteredDishes.map(dish => (
              <DishCard key={dish.id} dish={dish} onAddToCart={addToCart} />
            ))
          ) : (
            <div className="no-results">
              <p>No dishes found. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
