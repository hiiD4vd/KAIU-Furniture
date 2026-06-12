import React from 'react';

export default function TimelessElegance() {
  return (
    <section className="timeless-section">
      <div className="timeless-container">
        
        {/* Left Column */}
        <div className="timeless-left">
          <div className="timeless-image-wrapper top-left-clip">
            {/* Menggunakan gambar placeholder dari asset sebelumnya jika belum ada */}
            <img src="/design_assets/img_0.jpg" alt="Woman sitting" className="timeless-img" onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/600x800?text=Image+1' }} />
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
                Fashion Designer and Creative Director Carly Cushnie has entered her next chapter. Known for her influence in the fashion world, Carly brings her celebrated sense of style to interiors with her first-ever line of furniture exclusively for Lulu and Georgia. Every piece in the collection has a distinctive found quality with unique materials, and textures.
              </p>
              <div className="timeless-arrow">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1">
                  <path d="M5 5l14 14M19 5v14H5" />
                </svg>
              </div>
            </div>
            
            <div className="timeless-image-wrapper bottom-right-clip">
              {/* Menggunakan gambar placeholder dari asset sebelumnya jika belum ada */}
              <img src="/design_assets/img_1.jpg" alt="Marble Table" className="timeless-img" onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/600x400?text=Image+2' }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
