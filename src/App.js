import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Reservations from './pages/Reservations/Reservations';
import Orders from './pages/Orders/Orders';
import Profile from './pages/Profile/Profile';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import './styles/App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  const handleLogin = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setCart([]);
  };

  const addToCart = (dish) => {
    const existingItem = cart.find(item => item.id === dish.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === dish.id
          ? { ...item, quantity: (item.quantity || 1) + (dish.quantity || 1) }
          : item
      ));
    } else {
      setCart([...cart, dish]);
    }
  };

  const removeFromCart = (dishId) => {
    setCart(cart.filter(item => item.id !== dishId));
  };

  const updateQuantity = (dishId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(dishId);
    } else {
      setCart(cart.map(item =>
        item.id === dishId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          isAuthenticated={isAuthenticated}
          user={user}
          cartCount={cart.length}
          onLogout={handleLogout}
        />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />
            <Route
              path="/checkout"
              element={isAuthenticated ? <Checkout cart={cart} user={user} clearCart={clearCart} /> : <Navigate to="/login" />}
            />
            <Route path="/reservations" element={<Reservations user={user} />} />
            <Route
              path="/orders"
              element={isAuthenticated ? <Orders user={user} /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile"
              element={isAuthenticated ? <Profile user={user} onLogout={handleLogout} /> : <Navigate to="/login" />}
            />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onLogin={handleLogin} />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
