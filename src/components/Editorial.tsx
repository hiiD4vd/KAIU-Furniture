import Image from 'next/image';

export default function Editorial() {
  return (
    <section className="editorial-section">
      <div className="editorial-container">
        <div className="editorial-text">
          <p>REFINED</p>
          <p>HAND CRAFTED</p>
          <p className="highlight" style={{ fontSize: '4vw', fontFamily: 'var(--font-cormorant), serif', color: '#111', margin: '20px 0' }}>Natural Materials</p>
          <p>SUSTAINABLE</p>
          <p>MODERN</p>
        </div>

        <div className="editorial-img img-1">
          <Image src="/assets/living room.jpg" alt="Elegant Living Room" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="editorial-img img-2">
          <Image src="/assets/cewek duduk.jpg" alt="Lifestyle Furniture" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="editorial-img img-3">
          <Image src="/assets/dining room.jpg" alt="Natural Materials" fill style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
}
