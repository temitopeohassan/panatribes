import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const Checkout = () => {
  const { cart, getCartTotal, showToast } = useShop();
  const navigate = useNavigate();

  const subtotal = getCartTotal();
  const shipping = subtotal > 50000 ? 0 : 2500;
  const total = subtotal + shipping;

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('Order placed successfully! 🚀', 'success');
    navigate('/');
    // In a real app, clear cart here
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="section">
      <div className="container">
        <div className="page-hero" style={{ marginBottom: 40, background: 'none', border: 'none', padding: 0 }}>
          <h1 className="page-hero-title">Checkout</h1>
          <p className="section-sub">Complete your order details below</p>
        </div>

        <form className="checkout-layout" onSubmit={handleSubmit}>
          <div className="checkout-main">
            <div className="form-section">
              <div className="form-section-title">Shipping Information</div>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control" placeholder="Doe" required />
                </div>
                <div className="form-group full">
                  <label className="form-label">Street Address</label>
                  <input type="text" className="form-control" placeholder="House number and street name" required />
                </div>
                <div className="form-group">
                  <label className="form-label">City / State</label>
                  <input type="text" className="form-control" placeholder="Lagos" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" placeholder="0801 234 5678" required />
                </div>
              </div>
            </div>

            <div className="form-section">
              <div className="form-section-title">Payment Method</div>
              <div className="payment-option selected">
                <input type="radio" name="payment" defaultChecked />
                <div className="payment-option-icon">💳</div>
                <div>
                  <div className="payment-option-label">Online Payment (Paystack)</div>
                  <div className="payment-option-sub">Cards, Bank Transfer, USSD</div>
                </div>
              </div>
              <div className="payment-option">
                <input type="radio" name="payment" />
                <div className="payment-option-icon">🚚</div>
                <div>
                  <div className="payment-option-label">Pay on Delivery</div>
                  <div className="payment-option-sub">Lagos residents only</div>
                </div>
              </div>
            </div>
          </div>

          <aside className="order-summary">
            <div className="summary-title">Your Order</div>
            <div className="cart-summary-items" style={{ marginBottom: 20 }}>
              {cart.map(item => (
                <div key={item.id} className="summary-row" style={{ fontSize: '.8rem', border: 'none' }}>
                  <span>{item.name} x {item.qty}</span>
                  <span>₦{(item.price * item.qty).toLocaleString()}</span>
                </div>
              ))}
            </div>
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
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 24 }}>
              Complete Order ₦{total.toLocaleString()}
            </button>
          </aside>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
