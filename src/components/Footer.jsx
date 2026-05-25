import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="footer-logo">
              <img src="/logo.png" alt="TechMart" className="footer-logo-img" />
            </Link>
            <p className="footer-about">
              Nigeria's premium destination for quality UK-used and brand new electronics & gadgets.
              Trusted by 50,000+ happy customers nationwide.
            </p>
            <div className="footer-social">
              <a href="#" className="social-btn" title="Facebook">f</a>
              <a href="#" className="social-btn" title="Instagram">📸</a>
              <a href="#" className="social-btn" title="Twitter">𝕏</a>
              <a href="#" className="social-btn" title="WhatsApp">💬</a>
              <a href="#" className="social-btn" title="TikTok">♪</a>
            </div>
          </div>

          <div>
            <div className="footer-heading">Shop</div>
            <div className="footer-links">
              <Link to="/shop?cat=phones">Phones</Link>
              <Link to="/shop?cat=laptops">Laptops</Link>
              <Link to="/shop?cat=tablets">Tablets</Link>
              <Link to="/shop?cat=audio">Audio</Link>
              <Link to="/shop?cat=wearables">Wearables</Link>
              <Link to="/shop?sale=1">Sales &amp; Deals</Link>
            </div>
          </div>

          <div>
            <div className="footer-heading">Support</div>
            <div className="footer-links">
              <Link to="/faq">FAQ</Link>
              <Link to="/contact">Contact Us</Link>
              <Link to="/track">Track Order</Link>
              <a href="#">Returns Policy</a>
              <a href="#">Warranty Info</a>
              <a href="#">Repair Centre</a>
            </div>
          </div>

          <div>
            <div className="footer-heading">Company</div>
            <div className="footer-links">
              <Link to="/about">About Panatribes</Link>
              <a href="#">Careers</a>
              <a href="#">Press</a>
              <a href="#">Partners</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 Panatribes Nigeria. All rights reserved.</div>
          <div className="payment-icons">
            <span className="payment-icon">Paystack</span>
            <span className="payment-icon">Flutterwave</span>
            <span className="payment-icon">Bank Transfer</span>
            <span className="payment-icon">USSD</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
