import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import { useShop } from '../context/ShopContext';

const Home = () => {
  const { products, categories, loading, error } = useShop();

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', flexDirection: 'column', gap: '20px' }}>
        <div className="spinner" style={{ width: '40px', height: '40px', border: '4px solid #f3f3f3', borderTop: '4px solid var(--primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        <p>Loading our latest arrivals...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>Something went wrong</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()} className="btn btn-primary" style={{ marginTop: 20 }}>Try Again</button>
      </div>
    );
  }

  const featuredProducts = products.slice(0, 4);
  const bestSellers = products.slice(4, 8);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-eyebrow">🔥 New Arrivals </div>
            <h1 className="hero-title">
            The devices you trust.<br />
            The power  <em>that keeps </em> them running.
            </h1>
            <p className="hero-desc">
            Smartphones, laptops, audio, and accessories — paired with portable power stations, solar kits, and backup systems built for Nigerian homes and businesses.
            </p>
            <div className="hero-cta">
              <Link to="/shop" className="btn btn-primary">🛒 Shop Now</Link>
              <Link to="/shop?sale=1" className="btn btn-outline">🔥 View Deals</Link>
            </div>
          </div>
          <div className="hero-image-wrap">
            <div className="hero-img-bg">
              <img className="hero-product-img"
                src="/assets/hero-power-BOlF7ZUY.jpg"
                alt="Portable power station"
              />
              <div className="hero-badge-float top">
                <span className="icon">✅</span>
                <div><strong>Quality Checked</strong><br /><small>Every device inspected</small></div>
              </div>
              <div className="hero-badge-float bot">
                <span className="icon">🚚</span>
                <div><strong>Fast Delivery</strong><br /><small>Lagos: Same day</small></div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CATEGORIES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-title">Shop by Category</div>
              <p className="section-sub">Find exactly what you need</p>
            </div>
            <Link to="/shop" className="btn btn-ghost">View All →</Link>
          </div>

          <div className="category-row">
            {categories.map((cat) => (
              <Link
                key={cat.key}
                to={cat.key === 'all' ? '/shop' : `/shop?cat=${cat.key}`}
                className={`cat-pill${cat.key === 'all' ? ' active' : ''}`}
              >
                <span className="icon">{cat.icon}</span> {cat.label}
              </Link>
            ))}
          </div>

          {/* FEATURED PRODUCTS */}
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>


      {/* BEST SELLERS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <div>
              <div className="section-title">Best Sellers</div>
              <p className="section-sub">Most loved by our customers</p>
            </div>
            <Link to="/shop" className="btn btn-ghost">View All →</Link>
          </div>
          <div className="product-grid">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-title" style={{ marginBottom: 24 }}>Trusted Brands</div>
          <div className="brands-row">
            <span className="brand-logo">Apple</span>
            <span className="brand-logo">Samsung</span>
            <span className="brand-logo">Sony</span>
            <span className="brand-logo">Dell</span>
            <span className="brand-logo">Lenovo</span>
            <span className="brand-logo">LG</span>
            <span className="brand-logo">HP</span>
          </div>
        </div>
      </section>
      {/* TRUST STRIP */}
      <div className="banner-strip">
        <div className="banner-strip-grid">
           <div className="strip-item">
            <div className="strip-icon">🔒</div>
            <div>
              <div className="strip-title">Secure Payment</div>
              <div className="strip-sub">Paystack</div>
            </div>
          </div>
          <div className="strip-item">
            <div className="strip-icon">🔄</div>
            <div>
              <div className="strip-title">Easy Returns</div>
              <div className="strip-sub">7-day return policy</div>
            </div>
          </div>
          <div className="strip-item">
            <div className="strip-icon">🛡️</div>
            <div>
              <div className="strip-title">Warranty</div>
              <div className="strip-sub">3–12 months on selected items</div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default Home;
