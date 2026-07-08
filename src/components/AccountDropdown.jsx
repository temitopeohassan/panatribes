import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ACCOUNT_NAV, accountPath } from '../data/accountNav';

const AccountDropdown = ({ onNavigate }) => {
  const { user, logout, showToast } = useShop();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    showToast('Logged out successfully');
    setOpen(false);
    onNavigate?.();
    navigate('/');
  };

  const handleLinkClick = () => {
    setOpen(false);
    onNavigate?.();
  };

  return (
    <div className="account-dropdown" ref={ref}>
      <button
        type="button"
        className="account-dropdown-trigger"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        My Account
        <span className={`account-dropdown-chevron${open ? ' open' : ''}`}>▾</span>
      </button>

      {open && (
        <div className="account-dropdown-menu" role="menu">
          <div className="account-dropdown-user">
            Hi, {user.firstName}
          </div>
          {ACCOUNT_NAV.map((item) => (
            <Link
              key={item.tab}
              to={accountPath(item.tab)}
              className="account-dropdown-item"
              role="menuitem"
              onClick={handleLinkClick}
            >
              <span>{item.icon}</span> {item.label}
            </Link>
          ))}
          <button
            type="button"
            className="account-dropdown-item account-dropdown-logout"
            role="menuitem"
            onClick={handleLogout}
          >
            <span>🚪</span> Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
