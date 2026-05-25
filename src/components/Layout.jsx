import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileMenu from './MobileMenu';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app-layout">
      <Header onMenuOpen={() => setIsMenuOpen(true)} />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
