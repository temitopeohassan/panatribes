import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { showToast } = useShop();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      showToast('Thank you for subscribing! 🎉', 'success');
      setEmail('');
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="newsletter">
          <div className="section-title newsletter-title">Get the Best Deals First</div>
          <p className="newsletter-sub">
            Join 20,000+ subscribers and be first to know about flash sales, new arrivals, and exclusive offers.
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email address…"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Subscribe 🚀</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
