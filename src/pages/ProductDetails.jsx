import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart, toggleWishlist, wishlist, loading } = useShop();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (loading) return;
    
    // WooCommerce IDs are numbers, URL params are strings
    const found = products.find(p => String(p.id) === id);
    if (found) {
      setProduct(found);
      setMainImage(found.image);
    }
  }, [id, products, loading]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', flexDirection: 'column', gap: '20px' }}>
        <div className="spinner" style={{ width: '40px', height: '40px', border: '4px solid #f3f3f3', borderTop: '4px solid var(--primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        <p>Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/shop" className="btn btn-primary" style={{ marginTop: 20 }}>Back to Shop</Link>
      </div>
    );
  }

  const isWishlisted = wishlist.some(item => item.id === product.id);
  const relatedProducts = products.filter(p => p.categoryKey === product.categoryKey && p.id !== product.id).slice(0, 4);

  return (
    <div className="section">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Home</Link> <span className="sep">/</span> 
          <Link to="/shop">Shop</Link> <span className="sep">/</span> 
          <span>{product.name}</span>
        </div>

        <div className="product-detail-grid">
          <div className="product-gallery">
            <div className="gallery-main">
              <img src={mainImage} alt={product.name} />
            </div>
            <div className="gallery-thumbs">
              <div className={`gallery-thumb ${mainImage === product.image ? 'active' : ''}`} onClick={() => setMainImage(product.image)}>
                <img src={product.image} alt="Thumb" />
              </div>
              {product.images && product.images.length > 1 && product.images.map((img, idx) => (
                img !== product.image && (
                  <div key={idx} className={`gallery-thumb ${mainImage === img ? 'active' : ''}`} onClick={() => setMainImage(img)}>
                    <img src={img} alt={`Thumb ${idx}`} />
                  </div>
                )
              ))}
            </div>
          </div>

          <div className="product-info-panel">
            <div className="product-category">{product.category}</div>
            <h1 className="product-detail-title">{product.name}</h1>
            
            <div className="product-rating">
              <span className="stars">{'★'.repeat(Math.floor(product.rating || 5))}{product.rating % 1 !== 0 ? '½' : ''}</span>
              <span className="rating-count">({product.ratingCount || 0} customer reviews)</span>
            </div>

            <div className="detail-price-row">
              <span className="detail-price-current">₦{parseFloat(product.price).toLocaleString()}</span>
              {product.oldPrice && (
                <>
                  <span className="detail-price-old">₦{parseFloat(product.oldPrice).toLocaleString()}</span>
                  <span className="detail-save">Save ₦{(product.oldPrice - product.price).toLocaleString()}</span>
                </>
              )}
            </div>

            <div className="detail-desc" dangerouslySetInnerHTML={{ __html: product.description }}></div>

            <div className="qty-row">
              <span className="variant-label" style={{ marginBottom: 0 }}>Quantity:</span>
              <div className="qty-input">
                <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
                <input type="number" className="qty-num" value={qty} readOnly />
                <button className="qty-btn" onClick={() => setQty(qty + 1)}>+</button>
              </div>
            </div>

            <div className="detail-actions">
              <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => addToCart({ ...product, qty })}>
                🛒 Add to Cart
              </button>
              <button 
                className={`btn btn-outline ${isWishlisted ? 'active' : ''}`} 
                onClick={() => toggleWishlist(product)}
                style={isWishlisted ? { color: 'var(--accent)', borderColor: 'var(--accent)' } : {}}
              >
                {isWishlisted ? '❤️' : '🤍'} Wishlist
              </button>
            </div>

            <div className="detail-meta">
              <div className="meta-row">
                <span className="meta-key">SKU:</span>
                <span className="meta-value">TM-{String(product.id).toUpperCase()}</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">Category:</span>
                <span className="meta-value">{product.category}</span>
              </div>
              <div className="meta-row">
                <span className="meta-key">Tags:</span>
                <span className="meta-value">Gadget, Tech, Premium</span>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="section-header">
            <div className="section-title">Related Products</div>
          </div>
          <div className="product-grid">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
