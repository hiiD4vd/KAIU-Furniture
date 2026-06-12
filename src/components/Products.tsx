import React from 'react';

const products = [
  { id: 1, type: 'wide', badge: 'Exclusive', img: '/assets/living room/sofa.png' },
  { id: 2, type: 'narrow', badge: '', img: '/assets/kursi.png' },
  { id: 3, type: 'narrow', badge: 'New', img: '/assets/stool.png' },
  { id: 4, type: 'narrow', badge: '', img: '/assets/lamp.png' },
  { id: 5, type: 'narrow', badge: 'Exclusive', img: '/assets/dining room/kursi.png' },
  { id: 6, type: 'wide', badge: 'New', img: '/assets/outdoor/sofa.png' },
  { id: 7, type: 'narrow', badge: 'Exclusive', img: '/assets/laci.png' },
  { id: 8, type: 'wide', badge: '', img: '/assets/living room/meja.png' },
  { id: 9, type: 'narrow', badge: 'New', img: '/assets/outdoor/meja.png' },
];

export default function Products() {
  return (
    <section className="products-section">
      <div className="products-header">
        <div className="products-header-left">
          <h1 className="products-title">Products</h1>
        </div>
        <div className="products-header-right">
          <h2 className="products-subtitle">Find Your Dream Products with Ease!</h2>
          <div className="products-filters">
            <span className="filter-chip active">See All</span>
            <span className="filter-chip">Sofas</span>
            <span className="filter-chip">Sets</span>
            <span className="filter-chip">Accent Chairs</span>
            <span className="filter-chip">Sectional Sofas</span>
            <span className="filter-chip">Desk Chairs</span>
          </div>
        </div>
      </div>
      
      <div className="products-grid">
        {products.map(p => (
          <div key={p.id} className={`product-card ${p.type === 'wide' ? 'wide' : 'narrow'}`}>
            <div className="product-image-container">
              {p.badge && <span className="product-badge">{p.badge}</span>}
              <img src={p.img} alt={`Product ${p.id}`} className="product-img" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
