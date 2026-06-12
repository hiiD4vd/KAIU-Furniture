"use client";

import React from 'react';

export default function ShopByRoom() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="shop-by-room">
      <div className="sbr-top">
        <span>Shop by Room</span>
      </div>
      
      <div className="sbr-center">
        <div className="sbr-left-img-wrapper">
           <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80" alt="Living Room Setting" />
        </div>
        
        <div className="sbr-list">
           <h1 className="sbr-item active">LIVING ROOM</h1>
           <h1 className="sbr-item">DINING ROOM</h1>
           <h1 className="sbr-item">OUTDOOR</h1>
        </div>
        
        <div className="sbr-right-img-wrapper">
           <img src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=600&q=80" alt="Outdoor Setting" />
        </div>
      </div>
      
      <div className="sbr-bottom">
        <a href="#shop" className="sbr-link">SHOP BY ROOM &rarr;</a>
        <button className="sbr-back-to-top" onClick={scrollToTop}>BACK TO TOP &uarr;</button>
      </div>
    </section>
  );
}
