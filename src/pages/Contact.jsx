import React, { useState } from 'react';
import PageShell from '../components/PageShell';
import { useShop } from '../context/ShopContext';

const Contact = () => {
  const { showToast } = useShop();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('Thank you — we will get back to you shortly.', 'success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <PageShell title="Contact Us" subtitle="We are here to help with orders, products, and support.">
      <div className="contact-grid">
        <div>
          <h2>Get in touch</h2>
          <p><strong>Email:</strong> support@panatribes.com</p>
          <p><strong>Phone:</strong> +234 806 607 0128</p>
          <p><strong>Hours:</strong> Mon–Sat, 9:00 AM – 6:00 PM (WAT)</p>
          <p><strong>Location:</strong> Lagos, Nigeria</p>
          <p className="muted">
            For order updates, include your order number in your message so we can assist you faster.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="contact-name">Full name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Send message</button>
        </form>
      </div>
    </PageShell>
  );
};

export default Contact;
