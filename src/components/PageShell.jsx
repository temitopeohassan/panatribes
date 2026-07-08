import React from 'react';

const PageShell = ({ title, subtitle, children }) => (
  <div className="section">
    <div className="container page-content">
      <div className="page-hero" style={{ marginBottom: 40, background: 'none', border: 'none', padding: 0 }}>
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="section-sub">{subtitle}</p>}
      </div>
      <div className="page-body">{children}</div>
    </div>
  </div>
);

export default PageShell;
