import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ACCOUNT_NAV, accountPath } from '../data/accountNav';

const MobileMenu = ({ isOpen, onClose }) => {
  const { user, wishlist, logout, showToast } = useShop();
  const [accountOpen, setAccountOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    showToast('Logged out successfully');
    setAccountOpen(false);
    onClose();
    navigate('/');
  };

  const navLinks = [
    { to: '/', label: '🏠 Home' },
    { to: '/shop', label: '🛍️ Shop' },
    { to: '/solar', label: '☀️ Solar & Power' },
    { to: '/business', label: '💼 Business' },
    { to: '/about', label: 'ℹ️ About' },
    { to: '/contact', label: '📞 Contact' },
  ];

  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
        <button className="mobile-close" onClick={onClose} aria-label="Close menu">✕</button>

        {navLinks.map((link) => (
          <Link key={link.to} to={link.to} className="mobile-nav-link" onClick={onClose}>
            {link.label}
          </Link>
        ))}

        <Link to="/wishlist" className="mobile-nav-link" onClick={onClose}>
          🤍 Wishlist
          {wishlist.length > 0 && (
            <span className="mobile-nav-badge">{wishlist.length}</span>
          )}
        </Link>

        <Link to="/cart" className="mobile-nav-link" onClick={onClose}>🛒 Cart</Link>

        <div className="mobile-nav-divider" />

        {user ? (
          <div className="mobile-account-section">
            <button
              type="button"
              className="mobile-nav-link mobile-account-toggle"
              onClick={() => setAccountOpen((prev) => !prev)}
              aria-expanded={accountOpen}
            >
              👤 My Account
              <span className={`account-dropdown-chevron${accountOpen ? ' open' : ''}`}>▾</span>
            </button>
            {accountOpen && (
              <div className="mobile-account-submenu">
                {ACCOUNT_NAV.map((item) => (
                  <Link
                    key={item.tab}
                    to={accountPath(item.tab)}
                    className="mobile-account-link"
                    onClick={onClose}
                  >
                    {item.icon} {item.label}
                  </Link>
                ))}
                <button
                  type="button"
                  className="mobile-account-link mobile-account-logout"
                  onClick={handleLogout}
                >
                  🚪 Log out
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="mobile-nav-link" onClick={onClose}>
            👤 Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
