import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const Cart = () => {
  const { cart, removeFromCart, updateCartQty, getCartTotal } = useShop();

  const subtotal = getCartTotal();
  const shipping = subtotal > 50000 || subtotal === 0 ? 0 : 2500;
  const total = subtotal + shipping;

  return (
    <div className="section">
      <div className="container">
        <div className="page-hero" style={{ marginBottom: 40, background: 'none', border: 'none', padding: 0 }}>
          <h1 className="page-hero-title">Your Cart</h1>
          <p className="section-sub">You have {cart.length} items in your cart</p>
        </div>

        {cart.length > 0 ? (
          <div className="cart-layout">
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-img">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-info">
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-variant">Category: {item.category}</div>
                    <div className="cart-item-bottom">
                      <div className="qty-input">
                        <button className="qty-btn" onClick={() => updateCartQty(item.id, -1)}>−</button>
                        <span className="qty-num">{item.qty}</span>
                        <button className="qty-btn" onClick={() => updateCartQty(item.id, 1)}>+</button>
                      </div>
                      <div className="cart-item-price">₦{(parseFloat(item.price) * item.qty).toLocaleString()}</div>
                      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>🗑 Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="order-summary">
              <div className="summary-title">Order Summary</div>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'FREE' : `₦${shipping.toLocaleString()}`}</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
              
              <div className="coupon-input">
                <input type="text" placeholder="Coupon code" />
                <button className="btn btn-outline" style={{ padding: '10px 16px' }}>Apply</button>
              </div>

              <Link to="/checkout" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}>
                Proceed to Checkout 🚀
              </Link>
              <Link to="/shop" className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center', marginTop: 16 }}>
                ← Continue Shopping
              </Link>
            </aside>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <div style={{ fontSize: '4rem', marginBottom: 24 }}>🛒</div>
            <h2>Your cart is empty</h2>
            <p className="muted" style={{ marginBottom: 32 }}>Looks like you haven't added anything to your cart yet.</p>
            <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
