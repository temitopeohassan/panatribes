import React, { createContext, useState, useEffect, useContext } from 'react';

const ShopContext = createContext();

export const useShop = () => useContext(ShopContext);

const API_BASE = 'https://api.panatribes.com/wp-json/wc/v3';
const API_AUTH = 'consumer_key=ck_7350e162f69fed925ccd4d68482b6c25d1cd06cf&consumer_secret=cs_da22eedf445d1e3929dba4a9c2749cbfeb6a75d7';

const CATEGORY_ICONS = {
  'all': '🏪',
  'smartphones': '📱',
  'laptops': '💻',
  'audio': '🎧',
  'power': '⚡',
  'solar': '☀️',
  'uncategorized': '📦'
};

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paystackKey, setPaystackKey] = useState(null);
  const [apiAuth, setApiAuth] = useState(API_AUTH);

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('tm_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('tm_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('tm_user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        let currentAuth = API_AUTH;
        let pk = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || null;

        // Try to fetch config from multiple possible locations
        const paths = ['/get-env.php', 'get-env.php', './get-env.php'];
        let config = null;

        for (const path of paths) {
          try {
            const res = await fetch(path);
            if (res.ok) {
              const data = await res.json();
              if (data && (data.paystack_key || data.consumer_key)) {
                config = data;
                break;
              }
            }
          } catch (e) {
            continue;
          }
        }

        if (config) {
          if (config.paystack_key) {
            pk = config.paystack_key;
            setPaystackKey(pk);
            console.log('Paystack key loaded from server');
          }
          if (config.consumer_key && config.consumer_secret) {
            const newAuth = `consumer_key=${config.consumer_key}&consumer_secret=${config.consumer_secret}`;
            setApiAuth(newAuth);
            currentAuth = newAuth;
          }
        }

        if (!pk && import.meta.env.VITE_PAYSTACK_PUBLIC_KEY) {
          pk = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
          setPaystackKey(pk);
          console.log('Paystack key loaded from Vite env');
        }

        const [prodRes, catRes] = await Promise.all([
          fetch(`${API_BASE}/products?${currentAuth}&per_page=100`),
          fetch(`${API_BASE}/products/categories?${currentAuth}&per_page=100`)
        ]);

        if (!prodRes.ok || !catRes.ok) throw new Error('Failed to fetch data');

        const prodData = await prodRes.json();
        const catData = await catRes.json();

        // Map categories
        const mappedCats = [
          { key: 'all', label: 'All', icon: CATEGORY_ICONS['all'] },
          ...catData
            .filter(cat => cat.count > 0 || cat.slug !== 'uncategorized')
            .map(cat => ({
              key: cat.slug,
              label: cat.name,
              icon: CATEGORY_ICONS[cat.slug] || '📦'
            }))
        ];

        // Map products
        const mappedProds = prodData.map(p => ({
          id: p.id,
          name: p.name,
          price: parseFloat(p.price) || 0,
          oldPrice: parseFloat(p.regular_price) > parseFloat(p.price) ? parseFloat(p.regular_price) : null,
          category: p.categories.length > 0 ? p.categories[0].name : 'Uncategorized',
          categoryKey: p.categories.length > 0 ? p.categories[0].slug : 'uncategorized',
          image: p.images.length > 0 ? p.images[0].src : '/assets/placeholder.jpg',
          rating: parseFloat(p.average_rating) || 0,
          ratingCount: p.rating_count || 0,
          badge: p.on_sale ? 'Sale' : (p.featured ? 'Featured' : null),
          discount: p.regular_price && p.price && parseFloat(p.regular_price) > parseFloat(p.price) 
            ? Math.round((1 - parseFloat(p.price) / parseFloat(p.regular_price)) * 100) 
            : null,
          description: p.short_description || p.description,
          fullDescription: p.description,
          images: p.images.map(img => img.src)
        }));

        setCategories(mappedCats);
        setProducts(mappedProds);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('tm_cart');
  };

  const updateCartQty = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, (item.qty || 1) + delta) } : item
      )
    );
  };

  const placeOrder = async (customerData) => {
    try {
      // Use dynamic credentials if they were successfully fetched
      const currentAuth = apiAuth || API_AUTH;
      
      const orderPayload = {
        payment_method: customerData.paymentMethod || 'cod',
        payment_method_title: customerData.paymentMethod === 'paystack' ? 'Online Payment (Paystack)' : 'Pay on Delivery',
        set_paid: customerData.transaction_id ? true : false,
        customer_id: user ? user.id : 0,
        transaction_id: customerData.transaction_id || '',
        billing: {
          ...customerData.billing,
          email: customerData.billing.email || (user ? user.email : 'customer@example.com'),
          country: 'NG'
        },
        shipping: {
          ...customerData.shipping,
          country: 'NG'
        },
        line_items: cart.map(item => ({
          product_id: item.id,
          quantity: item.qty
        }))
      };

      const response = await fetch(`${API_BASE}/orders?${currentAuth}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderPayload)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to place order');
      }

      const result = await response.json();
      clearCart();
      return result;
    } catch (err) {
      console.error('Order placement error:', err);
      throw err;
    }
  };

  const register = async (userData) => {
    try {
      const currentAuth = apiAuth || API_AUTH;
      const response = await fetch(`${API_BASE}/customers?${currentAuth}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }

      return await response.json();
    } catch (err) {
      console.error('Registration error:', err);
      throw err;
    }
  };

  const login = async (email, password) => {
    try {
      const currentAuth = apiAuth || API_AUTH;
      const response = await fetch(`${API_BASE}/customers?${currentAuth}&email=${email}`);
      const customers = await response.json();

      if (customers.length > 0) {
        const customer = customers[0];
        const userData = {
          id: customer.id,
          email: customer.email,
          firstName: customer.first_name,
          lastName: customer.last_name,
          role: customer.role
        };
        setUser(userData);
        localStorage.setItem('tm_user', JSON.stringify(userData));
        return userData;
      } else {
        throw new Error('Invalid email or account not found');
      }
    } catch (err) {
      console.error('Login error:', err);
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('tm_user');
  };

  const fetchCustomerProfile = async (id) => {
    try {
      const auth = apiAuth || API_AUTH;
      const response = await fetch(`${API_BASE}/customers/${id}?${auth}`);
      if (!response.ok) throw new Error('Failed to fetch profile');
      return await response.json();
    } catch (err) {
      console.error('Fetch profile error:', err);
      throw err;
    }
  };

  const updateCustomer = async (id, data) => {
    try {
      const auth = apiAuth || API_AUTH;
      const response = await fetch(`${API_BASE}/customers/${id}?${auth}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update profile');
      }
      return await response.json();
    } catch (err) {
      console.error('Update profile error:', err);
      throw err;
    }
  };

  const fetchUserOrders = async (customerId) => {
    try {
      const auth = apiAuth || API_AUTH;
      const response = await fetch(`${API_BASE}/orders?${auth}&customer=${customerId}`);
      if (!response.ok) throw new Error('Failed to fetch orders');
      return await response.json();
    } catch (err) {
      console.error('Fetch orders error:', err);
      throw err;
    }
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
    products,
    categories,
    loading,
    error,
    cart,
    wishlist,
    user,
    paystackKey,
    login,
    register,
    logout,
    fetchCustomerProfile,
    updateCustomer,
    fetchUserOrders,
    addToCart,
    removeFromCart,
    clearCart,
    updateCartQty,
    placeOrder,
    toggleWishlist,
    getCartTotal,
    getCartCount,
    showToast,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
