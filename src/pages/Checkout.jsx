import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const Checkout = () => {
  const { cart, getCartTotal, placeOrder, showToast, user, paystackKey } = useShop();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    billing: {
      first_name: '',
      last_name: '',
      address_1: '',
      city: '',
      phone: ''
    },
    shipping: {
      first_name: '',
      last_name: '',
      address_1: '',
      city: '',
      phone: ''
    },
    paymentMethod: 'paystack',
    shipToDifferentAddress: false
  });

  const subtotal = getCartTotal();
  const shipping = subtotal > 50000 ? 0 : 2500;
  const total = subtotal + shipping;

  const handleChange = (e, section = null) => {
    const { name, value, type, checked } = e.target;
    if (section) {
      setFormData(prev => ({
        ...prev,
        [section]: { ...prev[section], [name]: value }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const processOrder = async (reference = null) => {
    const submissionData = {
      paymentMethod: formData.paymentMethod,
      billing: formData.billing,
      shipping: formData.shipToDifferentAddress ? formData.shipping : formData.billing,
      transaction_id: reference
    };

    try {
      await placeOrder(submissionData);
      showToast('Order placed successfully! 🚀 Check your email for details.', 'success');
      navigate('/');
    } catch (err) {
      showToast(err.message || 'Failed to save order in database. Please contact support.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.paymentMethod === 'paystack') {
      if (!paystackKey) {
        showToast('Payment system configuration (Paystack Key) is missing. Please check your .env file on the server.', 'error');
        setLoading(false);
        return;
      }

      const handler = window.PaystackPop.setup({
        key: paystackKey,
        email: user?.email || 'customer@example.com',
        amount: total * 100, // Kobo
        currency: 'NGN',
        ref: 'PT-' + Date.now(),
        metadata: {
          custom_fields: [
            {
              display_name: "Customer Phone",
              variable_name: "customer_phone",
              value: formData.billing.phone
            }
          ]
        },
        callback: function(response) {
          processOrder(response.reference);
        },
        onClose: function() {
          showToast('Payment window closed.', 'info');
          setLoading(false);
        }
      });
      handler.openIframe();
    } else {
      // Pay on Delivery
      processOrder();
    }
  };

  if (cart.length === 0 && !loading) {
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
            {/* BILLING SECTION */}
            <div className="form-section">
              <div className="form-section-title">Billing Information</div>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input 
                    type="text" 
                    name="first_name"
                    className="form-control" 
                    placeholder="John" 
                    required 
                    value={formData.billing.first_name}
                    onChange={(e) => handleChange(e, 'billing')}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input 
                    type="text" 
                    name="last_name"
                    className="form-control" 
                    placeholder="Doe" 
                    required 
                    value={formData.billing.last_name}
                    onChange={(e) => handleChange(e, 'billing')}
                  />
                </div>
                <div className="form-group full">
                  <label className="form-label">Street Address</label>
                  <input 
                    type="text" 
                    name="address_1"
                    className="form-control" 
                    placeholder="House number and street name" 
                    required 
                    value={formData.billing.address_1}
                    onChange={(e) => handleChange(e, 'billing')}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">City / State</label>
                  <input 
                    type="text" 
                    name="city"
                    className="form-control" 
                    placeholder="Lagos" 
                    required 
                    value={formData.billing.city}
                    onChange={(e) => handleChange(e, 'billing')}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    className="form-control" 
                    placeholder="0801 234 5678" 
                    required 
                    value={formData.billing.phone}
                    onChange={(e) => handleChange(e, 'billing')}
                  />
                </div>
              </div>
            </div>

            {/* SHIPPING OPTION */}
            <div className="form-group" style={{ marginBottom: 30, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <input 
                type="checkbox" 
                id="shipToDifferentAddress" 
                name="shipToDifferentAddress"
                checked={formData.shipToDifferentAddress}
                onChange={handleChange}
                style={{ width: 'auto' }}
              />
              <label htmlFor="shipToDifferentAddress" style={{ marginBottom: 0, fontWeight: '600', cursor: 'pointer' }}>
                Ship to a different address?
              </label>
            </div>

            {/* SHIPPING SECTION */}
            {formData.shipToDifferentAddress && (
              <div className="form-section animate-fade-in">
                <div className="form-section-title">Shipping Information</div>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">First Name</label>
                    <input 
                      type="text" 
                      name="first_name"
                      className="form-control" 
                      placeholder="John" 
                      required={formData.shipToDifferentAddress}
                      value={formData.shipping.first_name}
                      onChange={(e) => handleChange(e, 'shipping')}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Last Name</label>
                    <input 
                      type="text" 
                      name="last_name"
                      className="form-control" 
                      placeholder="Doe" 
                      required={formData.shipToDifferentAddress}
                      value={formData.shipping.last_name}
                      onChange={(e) => handleChange(e, 'shipping')}
                    />
                  </div>
                  <div className="form-group full">
                    <label className="form-label">Street Address</label>
                    <input 
                      type="text" 
                      name="address_1"
                      className="form-control" 
                      placeholder="House number and street name" 
                      required={formData.shipToDifferentAddress}
                      value={formData.shipping.address_1}
                      onChange={(e) => handleChange(e, 'shipping')}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">City / State</label>
                    <input 
                      type="text" 
                      name="city"
                      className="form-control" 
                      placeholder="Lagos" 
                      required={formData.shipToDifferentAddress}
                      value={formData.shipping.city}
                      onChange={(e) => handleChange(e, 'shipping')}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      className="form-control" 
                      placeholder="0801 234 5678" 
                      required={formData.shipToDifferentAddress}
                      value={formData.shipping.phone}
                      onChange={(e) => handleChange(e, 'shipping')}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="form-section">
              <div className="form-section-title">Payment Method</div>
              <div 
                className={`payment-option ${formData.paymentMethod === 'paystack' ? 'selected' : ''}`}
                onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'paystack' }))}
              >
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value="paystack"
                  checked={formData.paymentMethod === 'paystack'}
                  onChange={handleChange}
                />
                <div className="payment-option-icon">💳</div>
                <div>
                  <div className="payment-option-label">Online Payment (Paystack)</div>
                  <div className="payment-option-sub">Cards, Bank Transfer, USSD</div>
                </div>
              </div>
              <div 
                className={`payment-option ${formData.paymentMethod === 'cod' ? 'selected' : ''}`}
                onClick={() => setFormData(prev => ({ ...prev, paymentMethod: 'cod' }))}
              >
                <input 
                  type="radio" 
                  name="paymentMethod" 
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={handleChange}
                />
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
            
            <button 
              type="submit" 
              className="btn btn-primary" 
              style={{ width: '100%', justifyContent: 'center', marginTop: 24 }}
              disabled={loading}
            >
              {loading ? 'Processing...' : `Complete Order ₦${total.toLocaleString()}`}
            </button>
          </aside>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
