import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Newsletter from '../components/Newsletter';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 4);
  const bestSellers = products.slice(4, 8);

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-eyebrow">🔥 New Arrivals 2025</div>
            <h1 className="hero-title">
              Premium Gadgets<br />
              at <em>Honest</em> Prices
            </h1>
            <p className="hero-desc">
              Curated UK-used and brand new electronics — iPhones, MacBooks, Samsung, and more.
              Quality-checked, warranty-backed, nationwide delivery.
            </p>
            <div className="hero-cta">
              <Link to="/shop" className="btn btn-primary">🛒 Shop Now</Link>
              <Link to="/shop?sale=1" className="btn btn-outline">🔥 View Deals</Link>
            </div>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-value">50K+</div>
                <div className="hero-stat-label">Happy Customers</div>
              </div>
              <div>
                <div className="hero-stat-value">2,000+</div>
                <div className="hero-stat-label">Products</div>
              </div>
              <div>
                <div className="hero-stat-value">4.9★</div>
                <div className="hero-stat-label">Avg Rating</div>
              </div>
            </div>
          </div>
          <div className="hero-image-wrap">
            <div className="hero-img-bg">
              <img className="hero-product-img"
                src="https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=600&q=80"
                alt="iPhone 15 Pro"
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

      {/* TRUST STRIP */}
      <div className="banner-strip">
        <div className="banner-strip-grid">
          <div className="strip-item">
            <div className="strip-icon">🚚</div>
            <div>
              <div className="strip-title">Free Delivery</div>
              <div className="strip-sub">Orders above ₦50,000</div>
            </div>
          </div>
          <div className="strip-item">
            <div className="strip-icon">🔒</div>
            <div>
              <div className="strip-title">Secure Payment</div>
              <div className="strip-sub">Paystack & Flutterwave</div>
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
              <div className="strip-sub">3–12 months on all items</div>
            </div>
          </div>
        </div>
      </div>

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
            <Link to="/shop?cat=phones" className="cat-pill active">
              <span className="icon">📱</span> Phones
            </Link>
            <Link to="/shop?cat=laptops" className="cat-pill">
              <span className="icon">💻</span> Laptops
            </Link>
            <Link to="/shop?cat=tablets" className="cat-pill">
              <span className="icon">📟</span> Tablets
            </Link>
            <Link to="/shop?cat=audio" className="cat-pill">
              <span className="icon">🎧</span> Audio
            </Link>
            <Link to="/shop?cat=wearables" className="cat-pill">
              <span className="icon">⌚</span> Wearables
            </Link>
            <Link to="/shop?cat=gaming" className="cat-pill">
              <span className="icon">🎮</span> Gaming
            </Link>
            <Link to="/shop?cat=accessories" className="cat-pill">
              <span className="icon">🔌</span> Accessories
            </Link>
          </div>

          {/* FEATURED PRODUCTS */}
          <div className="product-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* PROMO BANNERS */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="promo-grid">
            <Link to="/shop?cat=phones" className="promo-card accent-bg">
              <div>
                <div className="promo-eyebrow">Flash Sale</div>
                <div className="promo-title">Phones from<br />₦150,000</div>
                <div className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,.4)', color: '#fff' }}>Shop Phones →</div>
              </div>
              <img className="promo-img"
                src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&q=80"
                alt="Phones"
              />
            </Link>
            <Link to="/shop?cat=laptops" className="promo-card">
              <div>
                <div className="promo-eyebrow">Up to 25% Off</div>
                <div className="promo-title">Laptops &<br />MacBooks</div>
                <div className="btn btn-primary">Shop Laptops →</div>
              </div>
              <img className="promo-img"
                src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&q=80"
                alt="Laptops"
              />
            </Link>
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

      <Newsletter />
    </>
  );
};

export default Home;
