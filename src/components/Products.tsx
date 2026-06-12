"use client";

import React, { useState, useMemo } from 'react';
import { RAW_PRODUCTS, getGridPatternType, padToGridLength } from '../data/ProductsData';

type ProductsProps = {
  roomFilter?: string; // If provided, filters by room and hides the header
};

const CATEGORIES = ['See All', 'Sofas', 'Sets', 'Accent Chairs', 'Sectional Sofas', 'Desk Chairs'];

export default function Products({ roomFilter }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState('See All');

  const displayedProducts = useMemo(() => {
    let filtered = RAW_PRODUCTS;
    if (roomFilter) {
      filtered = filtered.filter(p => p.room === roomFilter);
    }
    
    if (activeCategory !== 'See All') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (filtered.length === 0) return [];

    // Duplicate products to reach 23 items to maintain the exact 4-column asymmetrical grid perfectly
    return padToGridLength(filtered, 23);
  }, [roomFilter, activeCategory]);

  if (displayedProducts.length === 0) {
    return <div style={{ padding: '50px', textAlign: 'center' }}>No products found in this category.</div>;
  }

  return (
    <section className="products-section">
      {!roomFilter && (
        <div className="products-header">
          <div className="products-header-left">
            <h1 className="products-title">Products</h1>
          </div>
          <div className="products-header-right">
            <h2 className="products-subtitle">Find Your Dream Products with Ease!</h2>
            <div className="products-filters">
              {CATEGORIES.map(cat => (
                <span 
                  key={cat} 
                  className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <div className="products-grid">
        {displayedProducts.map((p, index) => {
          const type = getGridPatternType(index);
          return (
            <div key={`${p.id}-${index}`} className={`product-card ${type}`}>
              <div className="product-image-container">
                {p.badge && <span className="product-badge">{p.badge}</span>}
                <img src={p.img} alt={`Product ${p.id}`} className="product-img" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
