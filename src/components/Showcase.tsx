import Image from 'next/image';

export default function Showcase() {
  return (
    <section className="showcase-section">
      <h2 className="section-title">WHERE DESIGN MEETS DURABILITY</h2>
      
      <div className="showcase-container">
        <div className="showcase-side left">
          <div className="showcase-thumb"><Image src="/pages/page_16.png" alt="Showcase 1" fill style={{ objectFit: 'cover' }} /></div>
          <div className="showcase-thumb"><Image src="/pages/page_17.png" alt="Showcase 2" fill style={{ objectFit: 'cover' }} /></div>
        </div>
        
        <div className="showcase-center">
          <Image src="/pages/page_03.png" alt="Main Showcase" fill style={{ objectFit: 'cover' }} />
          <div className="showcase-caption">
            <p>HANDCRAFTED PERFECTION</p>
            <a href="#view" className="btn-small-dark">VIEW &rarr;</a>
          </div>
        </div>
        
        <div className="showcase-side right">
          <div className="showcase-thumb"><Image src="/pages/page_04.png" alt="Showcase 3" fill style={{ objectFit: 'cover' }} /></div>
          <div className="showcase-thumb"><Image src="/pages/page_05.png" alt="Showcase 4" fill style={{ objectFit: 'cover' }} /></div>
        </div>
      </div>
    </section>
  );
}
