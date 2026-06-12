import Image from 'next/image';

export default function Editorial() {
  return (
    <section className="editorial-section">
      <div className="editorial-container">
        <div className="editorial-text">
          <p>Refined</p>
          <p>Hand Crafted</p>
          <p className="highlight">Natural Materials</p>
          <p>Sustainable</p>
          <p>Modern</p>
        </div>

        <div className="editorial-img img-1">
          <Image src="/pages/page_08.png" alt="Editorial 1" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="editorial-img img-2">
          <Image src="/pages/page_09.png" alt="Editorial 2" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="editorial-img img-3">
          <Image src="/pages/page_10.png" alt="Editorial 3" fill style={{ objectFit: 'cover' }} />
        </div>
      </div>
    </section>
  );
}
