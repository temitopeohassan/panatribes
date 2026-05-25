import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const { wishlist } = useShop();

  return (
    <div className="section">
      <div className="container">
        <div className="page-hero" style={{ marginBottom: 40, background: 'none', border: 'none', padding: 0 }}>
          <h1 className="page-hero-title">My Wishlist</h1>
          <p className="section-sub">You have {wishlist.length} saved items</p>
        </div>

        {wishlist.length > 0 ? (
          <div className="product-grid">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <div style={{ fontSize: '4rem', marginBottom: 24 }}>🤍</div>
            <h2>Your wishlist is empty</h2>
            <p className="muted" style={{ marginBottom: 32 }}>Save items you love to find them easily later.</p>
            <Link to="/shop" className="btn btn-primary">Go to Shop</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
