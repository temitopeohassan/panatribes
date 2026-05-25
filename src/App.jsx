import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';

// Placeholder components for missing pages
const Placeholder = ({ title }) => (
  <div className="section">
    <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
      <h1>{title}</h1>
      <p className="muted">This page is coming soon.</p>
    </div>
  </div>
);

function App() {
  return (
    <ShopProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account" element={<Placeholder title="My Account" />} />
            <Route path="/login" element={<Placeholder title="Login" />} />
            <Route path="/signup" element={<Placeholder title="Sign Up" />} />
            <Route path="/about" element={<Placeholder title="About Us" />} />
            <Route path="/contact" element={<Placeholder title="Contact Us" />} />
            <Route path="/faq" element={<Placeholder title="FAQ" />} />
            <Route path="/track" element={<Placeholder title="Track Order" />} />
            <Route path="*" element={<Placeholder title="404 - Not Found" />} />
          </Routes>
        </Layout>
      </Router>
    </ShopProvider>
  );
}

export default App;
