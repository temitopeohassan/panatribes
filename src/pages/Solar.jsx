import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useShop } from '../context/ShopContext';

const scales = [
  {
    range: '300W – 1000W',
    title: 'Portable',
    description:
      'Power your essentials anywhere. Phones, routers, fans, lights — for hours.',
    bestFor: 'Daily backup, travel, freelancers',
    icon: '⚡',
  },
  {
    range: '1000W – 3000W',
    title: 'Home backup',
    description:
      'Run your fridge, TV, fans and lights through any outage. Quiet. Clean. Instant.',
    bestFor: 'Apartments, family homes',
    icon: '🏠',
  },
  {
    range: 'Custom',
    title: 'Whole-home solar',
    description:
      'Solar panels + battery storage + inverter, professionally installed.',
    bestFor: 'Houses, SMEs, farms',
    icon: '☀️',
  },
];

const Solar = () => {
  const { products, loading } = useShop();

  const powerProducts = products
    .filter((p) => p.categoryKey === 'solar' || p.categoryKey === 'power')
    .slice(0, 4);

  return (
    <>
      <section className="solar-hero">
        <div className="container solar-hero-grid">
          <div className="solar-hero-content">
            <div className="hero-eyebrow">Solar & Backup Power</div>
            <h1 className="hero-title">Power that just works.</h1>
            <p className="hero-desc">
              NEPA off? No problem. Engineered for Nigeria — silent, clean, instant backup from
              portable units to whole-home solar.
            </p>
            <div className="hero-cta">
              <Link to="/shop?cat=solar" className="btn btn-primary">Shop power kits</Link>
              <Link to="/contact" className="btn btn-outline">Free consultation</Link>
            </div>
          </div>
          <div className="solar-hero-image">
            <img
              src="/assets/cat-solar-CVov2Vx8.jpg"
              alt="Solar and backup power solutions"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <p className="section-sub" style={{ marginBottom: 8 }}>Choose your scale</p>
              <div className="section-title">From a single device to your whole home.</div>
            </div>
          </div>

          <div className="solar-scale-grid">
            {scales.map((scale) => (
              <article key={scale.title} className="solar-scale-card">
                <span className="solar-scale-range">{scale.range}</span>
                <div className="solar-scale-icon">{scale.icon}</div>
                <h2 className="solar-scale-title">{scale.title}</h2>
                <p className="solar-scale-desc">{scale.description}</p>
                <p className="solar-scale-best">
                  <strong>Best for:</strong> {scale.bestFor}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {!loading && powerProducts.length > 0 && (
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="section-header">
              <div>
                <div className="section-title">Solar & Power Products</div>
                <p className="section-sub">Ready-to-ship kits and backup units</p>
              </div>
              <Link to="/shop?cat=solar" className="btn btn-ghost">View All →</Link>
            </div>
            <div className="product-grid">
              {powerProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section solar-cta">
        <div className="container">
          <div className="solar-cta-card">
            <h2 className="solar-cta-title">Not sure what you need?</h2>
            <p className="solar-cta-text">
              Tell us your appliances. We&apos;ll size the perfect kit and quote it free.
            </p>
            <Link to="/contact" className="btn btn-primary">Get a free quote</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solar;
