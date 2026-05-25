import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, wishlist } = useShop();
  const [isAdded, setIsAdded] = useState(false);

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <div className="product-card">
      <div className="product-img-wrap">
        <div className="product-badges">
          {product.badge && (
            <span className={`badge ${product.badge.toLowerCase()}`}>
              {product.badge}
            </span>
          )}
          {product.discount && (
            <span className="badge sale">−{product.discount}%</span>
          )}
        </div>
        <div className="product-actions">
          <button
            className={`product-action-btn wishlist-toggle ${isWishlisted ? 'active' : ''}`}
            onClick={handleWishlist}
            title="Wishlist"
          >
            {isWishlisted ? '❤️' : '🤍'}
          </button>
          <Link to={`/product/${product.id}`} className="product-action-btn" title="Quick View">
            👁
          </Link>
        </div>
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/300x300/1E1E1E/FF5C00?text=${encodeURIComponent(product.name)}`;
            }}
          />
        </Link>
      </div>
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <Link to={`/product/${product.id}`} className="product-name">
          {product.name}
        </Link>
        <div className="product-rating">
          <span className="stars">{'★'.repeat(Math.floor(product.rating || 5))}{product.rating % 1 !== 0 ? '½' : ''}</span>
          <span className="rating-count">({product.ratingCount || 0})</span>
        </div>
        <div className="product-price">
          <span className="price-current">₦{parseFloat(product.price).toLocaleString()}</span>
          {product.oldPrice && (
            <span className="price-old">₦{parseFloat(product.oldPrice).toLocaleString()}</span>
          )}
        </div>
        <button
          className="add-to-cart"
          onClick={handleAddToCart}
          style={isAdded ? { background: 'var(--success)', borderColor: 'var(--success)', color: '#fff' } : {}}
        >
          {isAdded ? '✓ Added' : '🛒 Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
