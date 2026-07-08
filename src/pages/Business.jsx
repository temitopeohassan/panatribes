import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useShop } from '../context/ShopContext';

const services = [
  {
    title: 'Bulk procurement',
    description: 'Volume pricing on devices, accessories, and power equipment.',
    icon: '📦',
  },
  {
    title: 'Office power infra',
    description: 'End-to-end design, supply, and install for office backup power.',
    icon: '⚡',
  },
  {
    title: 'Reseller program',
    description: 'Become an authorised Panatribes reseller in your city or sector.',
    icon: '🤝',
  },
];

const benefits = [
  'Dedicated account manager',
  'Net-30 payment terms (qualified buyers)',
  'Volume discounts from 10 units',
  'On-site delivery & installation',
  'Extended warranty options',
  'Quarterly business reviews',
];

const Business = () => {
  const { products, loading } = useShop();

  const businessProducts = products
    .filter((p) => ['laptops', 'smartphones', 'power', 'solar'].includes(p.categoryKey))
    .slice(0, 4);

  return (
    <>
      <section className="business-hero">
        <div className="container business-hero-grid">
          <div className="business-hero-content">
            <div className="hero-eyebrow">For Business</div>
            <h1 className="hero-title">Equip your team. Power your office.</h1>
            <p className="hero-desc">
              From 5-person startups to 500-person enterprises — devices, accessories, and
              reliable backup power, procured and supported as one partnership.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">Talk to sales</Link>
              <Link to="/shop" className="btn btn-outline">Browse catalog</Link>
            </div>
          </div>
          <div className="business-hero-image">
            <img
              src="/assets/cat-laptops-DjjMu2MX.jpg"
              alt="Business devices and office equipment"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="business-service-grid">
            {services.map((service) => (
              <article key={service.title} className="business-service-card">
                <div className="business-service-icon">{service.icon}</div>
                <h2 className="business-service-title">{service.title}</h2>
                <p className="business-service-desc">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="business-benefits">
            <h2 className="section-title">What you get</h2>
            <ul className="business-benefits-list">
              {benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {!loading && businessProducts.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-header">
              <div>
                <div className="section-title">Popular for teams</div>
                <p className="section-sub">Devices and power solutions businesses trust</p>
              </div>
              <Link to="/shop" className="btn btn-ghost">View All →</Link>
            </div>
            <div className="product-grid">
              {businessProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section business-cta">
        <div className="container">
          <div className="business-cta-card">
            <h2 className="business-cta-title">Ready to equip your business?</h2>
            <p className="business-cta-text">
              Tell us your team size, devices, and power needs. We&apos;ll build a custom quote
              with volume pricing and delivery options.
            </p>
            <Link to="/contact" className="btn btn-primary">Talk to sales</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Business;
