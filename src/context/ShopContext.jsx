import React, { createContext, useState, useEffect, useContext } from 'react';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('tm_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('tm_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('tm_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('tm_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: (item.qty || 1) + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    showToast(`<strong>${product.name}</strong> added to cart`, 'success');
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateCartQty = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, (item.qty || 1) + delta) } : item
      )
    );
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const idx = prev.findIndex((item) => item.id === product.id);
      if (idx > -1) {
        showToast('Removed from wishlist');
        return prev.filter((item) => item.id !== product.id);
      } else {
        showToast(`<strong>${product.name}</strong> added to wishlist ❤️`, 'success');
        return [...prev, product];
      }
    });
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price) * (item.qty || 1), 0);
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + (item.qty || 1), 0);
  };

  // Toast logic ported from main.js
  const showToast = (message, type = 'info') => {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${type === 'success' ? '✅' : 'ℹ️'}</span>
      <span>${message}</span>
    `;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = '.25s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  };

  const value = {
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    updateCartQty,
    toggleWishlist,
    getCartTotal,
    getCartCount,
    showToast,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
