import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
        <button className="mobile-close" onClick={onClose}>✕</button>
        <Link to="/" className="mobile-nav-link" onClick={onClose}>🏠 Home</Link>
        <Link to="/shop?cat=phones" className="mobile-nav-link" onClick={onClose}>📱 Phones</Link>
        <Link to="/shop?cat=laptops" className="mobile-nav-link" onClick={onClose}>💻 Laptops</Link>
        <Link to="/shop?cat=tablets" className="mobile-nav-link" onClick={onClose}>📟 Tablets</Link>
        <Link to="/shop?cat=audio" className="mobile-nav-link" onClick={onClose}>🎧 Audio</Link>
        <Link to="/shop?cat=wearables" className="mobile-nav-link" onClick={onClose}>⌚ Wearables</Link>
        <Link to="/shop?cat=gaming" className="mobile-nav-link" onClick={onClose}>🎮 Gaming</Link>
        <Link to="/shop?sale=1" className="mobile-nav-link" onClick={onClose}>🔥 Sales</Link>
        <Link to="/cart" className="mobile-nav-link" onClick={onClose}>🛒 Cart</Link>
        <Link to="/account" className="mobile-nav-link" onClick={onClose}>👤 Account</Link>
      </div>
    </div>
  );
};

export default MobileMenu;
