import Image from 'next/image';

export default function AccordionFeature() {
  return (
    <section className="accordion-feature-section">
      <h2 className="giant-title-left">STRONG, MINIMAL<br/>&amp; MODERN</h2>
      
      <div className="accordion-container">
        <div className="accordion-image">
          <Image src="/pages/page_06.png" alt="Feature Image" fill style={{ objectFit: 'cover' }} />
          <div className="feature-caption">
            <p>Discover pieces that define luxury and durability.</p>
            <a href="#discover" className="btn-outline">DISCOVER &rarr;</a>
          </div>
        </div>
        
        <div className="accordion-list">
          <div className="accordion-item open">
            <h3>Hand Selected Premium Materials</h3>
            <p>We source only the finest sustainable materials to ensure longevity and unparalleled quality in every piece.</p>
          </div>
          <div className="accordion-item">
            <h3>Timeless Minimalist Design</h3>
          </div>
          <div className="accordion-item">
            <h3>Crafted By Master Artisans</h3>
          </div>
        </div>
      </div>
      
      <div className="full-width-image">
        <Image src="/pages/page_07.png" alt="Full Width Feature" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
      </div>
    </section>
  );
}
