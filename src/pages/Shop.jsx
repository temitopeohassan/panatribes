import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useShop } from '../context/ShopContext';

const Shop = () => {
  const { products, categories, loading } = useShop();
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [sortType, setSortType] = useState('default');

  useEffect(() => {
    if (loading) return;

    const params = new URLSearchParams(location.search);
    const cat = params.get('cat');
    const q = params.get('q');
    const sale = params.get('sale');

    let result = [...products];

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
      result = result.filter(p => p.discount || p.badge === 'Sale' || p.badge === 'Hot');
    }

    // Apply sorting
    if (sortType === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortType === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortType === 'newest') {
      // Assuming higher ID means newer, or use date if available
      result.sort((a, b) => b.id - a.id);
    }

    setFilteredProducts(result);
  }, [location.search, products, loading, sortType]);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', flexDirection: 'column', gap: '20px' }}>
        <div className="spinner" style={{ width: '40px', height: '40px', border: '4px solid #f3f3f3', borderTop: '4px solid var(--primary)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
        <p>Loading products...</p>
      </div>
    );
  }

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
                {categories.map((cat) => (
                  <Link
                    key={cat.key}
                    to={cat.key === 'all' ? '/shop' : `/shop?cat=${cat.key}`}
                    className={`filter-option ${category === cat.key ? 'checked' : ''}`}
                  >
                    {cat.key === 'all' ? 'All Products' : cat.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <div className="shop-main">
            <div className="shop-toolbar">
              <div className="toolbar-info">
                Displaying 1–{filteredProducts.length} of {filteredProducts.length} results
              </div>
              <div className="toolbar-right">
                <select 
                  className="sort-select" 
                  value={sortType} 
                  onChange={(e) => setSortType(e.target.value)}
                >
                  <option value="default">Default Sorting</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
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
                <Link to="/shop" className="btn btn-outline" style={{ marginTop: 24 }}>Clear All Filters</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
