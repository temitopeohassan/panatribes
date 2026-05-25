import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Shop = () => {
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('cat');
    const q = params.get('q');
    const sale = params.get('sale');

    let result = products;

    if (cat) {
      result = result.filter(p => p.categoryKey === cat);
      setCategory(cat);
    } else {
      setCategory('all');
    }

    if (q) {
      const query = q.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query)
      );
    }

    if (sale) {
      result = result.filter(p => p.discount || p.badge === 'Hot');
    }

    setFilteredProducts(result);
  }, [location.search]);

  return (
    <div className="section">
      <div className="container">
        <div className="page-hero" style={{ marginBottom: 40, background: 'none', border: 'none', padding: 0 }}>
          <h1 className="page-hero-title">
            {category === 'all' ? 'All Products' : category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
          <p className="section-sub">Showing {filteredProducts.length} items</p>
        </div>

        <div className="shop-layout">
          <aside className="sidebar">
            <div className="filter-group">
              <div className="filter-title">Categories</div>
              <div className="filter-links">
                <a href="/shop" className={`filter-option ${category === 'all' ? 'checked' : ''}`}>All Products</a>
                <a href="/shop?cat=phones" className={`filter-option ${category === 'phones' ? 'checked' : ''}`}>Phones</a>
                <a href="/shop?cat=laptops" className={`filter-option ${category === 'laptops' ? 'checked' : ''}`}>Laptops</a>
                <a href="/shop?cat=tablets" className={`filter-option ${category === 'tablets' ? 'checked' : ''}`}>Tablets</a>
                <a href="/shop?cat=audio" className={`filter-option ${category === 'audio' ? 'checked' : ''}`}>Audio</a>
                <a href="/shop?cat=wearables" className={`filter-option ${category === 'wearables' ? 'checked' : ''}`}>Wearables</a>
              </div>
            </div>
          </aside>

          <div className="shop-main">
            <div className="shop-toolbar">
              <div className="toolbar-info">
                Displaying 1–{filteredProducts.length} of {filteredProducts.length} results
              </div>
              <div className="toolbar-right">
                <select className="sort-select">
                  <option>Default Sorting</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="product-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '80px 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 20 }}>🔍</div>
                <h3>No products found</h3>
                <p className="muted">Try adjusting your filters or search query.</p>
                <a href="/shop" className="btn btn-outline" style={{ marginTop: 24 }}>Clear All Filters</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
