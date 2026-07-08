import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { useTheme } from '../context/ThemeContext';
import AccountDropdown from './AccountDropdown';

const Header = ({ onMenuOpen }) => {
  const { getCartCount, user } = useShop();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo-mark" aria-label="Panatribes Global home">
          <span className="logo-mark-icon">
            <img
              alt="Panatribes Global"
              className="logo-mark-img"
              src={theme === 'light' ? '/light-logo.png' : '/nav-logo.png'}
            />
          </span>
          <span className="logo-mark-text">
            <span className="logo-mark-title">Panatribes</span>
            <span className="logo-mark-subtitle">Global Co.</span>
          </span>
        </Link>

        <nav className="header-nav">
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/solar" className="nav-link">Solar & Power</Link>
          <Link to="/business" className="nav-link">Business</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/wishlist" className="nav-link">Wishlist</Link>
        </nav>

        <div className="header-actions">
          <div className="header-auth-desktop">
            {user ? (
              <AccountDropdown />
            ) : (
              <Link to="/login" className="header-auth-link">Log in</Link>
            )}
          </div>

          <button
            onClick={toggleTheme}
            className="icon-btn theme-toggle"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            style={{ fontSize: '1rem' }}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
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
  );
};

export default Header;
