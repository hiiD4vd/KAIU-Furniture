import React from 'react';

export default function TimelessElegance() {
  return (
    <section className="timeless-section">
      <div className="timeless-container">
        
        {/* Left Column */}
        <div className="timeless-left">
          <div className="timeless-image-wrapper top-left-clip">
            <img src="/assets/cewek duduk.jpg" alt="Woman sitting" className="timeless-img" />
          </div>
        </div>

        {/* Right Column */}
        <div className="timeless-right">
          
          <div className="timeless-top-half">
            <h2 className="timeless-title">
              Timeless<br />
              Elegance
            </h2>
          </div>
          
          <div className="timeless-bottom-half">
            <div className="timeless-text-row">
              <p className="timeless-desc">
                KAIU Furniture brings a celebrated sense of style to interiors with an exclusive line of beautifully crafted pieces. Every item in the collection has a distinctive found quality, designed with unique natural materials, refined textures, and a timeless aesthetic to elevate your living spaces.
              </p>
              <div className="timeless-arrow">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1">
                  <path d="M5 5l14 14M19 5v14H5" />
                </svg>
              </div>
            </div>
            
            <div className="timeless-image-wrapper bottom-right-clip">
              <img src="/assets/suryakant-prajapati-6OCmgz7n4fM-unsplash.jpg" alt="Marble Table" className="timeless-img" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
