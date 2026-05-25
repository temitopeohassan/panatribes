import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const Header = ({ onMenuOpen }) => {
  const { cart, wishlist, getCartCount } = useShop();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <>
      <div className="topbar">
        🚀 Free shipping on orders over ₦50,000 — <Link to="/shop">Shop Now →</Link>
      </div>

      <header className="header">
        <div className="header-inner">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="TechMart" className="logo-img" />
          </Link>



          <div className="header-actions">
            <Link to="/account" className="icon-btn" title="Account">
              👤
            </Link>
            <Link to="/wishlist" className="icon-btn" title="Wishlist">
              🤍
              {wishlist.length > 0 && (
                <span className="count wishlist-count">{wishlist.length}</span>
              )}
            </Link>
            <Link to="/cart" className="icon-btn" title="Cart">
              🛒
              {getCartCount() > 0 && (
                <span className="count cart-count">{getCartCount()}</span>
              )}
            </Link>
            <button className="icon-btn hamburger" title="Menu" onClick={onMenuOpen}>
              ☰
            </button>
          </div>
        </div>
      </header>

      <nav className="nav">
        <div className="nav-inner">
          <Link to="/shop?cat=phones" className="nav-link">📱 Phones</Link>
          <Link to="/shop?cat=laptops" className="nav-link">💻 Laptops</Link>
          <Link to="/shop?cat=tablets" className="nav-link">📟 Tablets</Link>
          <Link to="/shop?cat=audio" className="nav-link">🎧 Audio</Link>
          <Link to="/shop?cat=wearables" className="nav-link">⌚ Wearables</Link>
          <Link to="/shop?cat=gaming" className="nav-link">🎮 Gaming</Link>
          <Link to="/shop?cat=accessories" className="nav-link">🔌 Accessories</Link>
          <Link to="/shop?sale=1" className="nav-link" style={{ color: 'var(--danger)' }}>
            🔥 Sales
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
