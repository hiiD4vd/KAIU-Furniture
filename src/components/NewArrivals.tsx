import Image from 'next/image';

export default function NewArrivals() {
  return (
    <section className="new-arrivals-section">
      <div className="new-arrivals-header">
        <h2 className="section-title">NEW ARRIVALS</h2>
        <a href="#new-arrivals" className="btn-small-dark">VIEW ALL &rarr;</a>
      </div>

      <div className="masonry-grid">
        <div className="masonry-item item-1">
          <Image src="/pages/page_11.png" alt="New 1" fill style={{ objectFit: 'cover' }} />
          <div className="item-label"><span>OAK DESK</span><span>$850</span></div>
        </div>
        <div className="masonry-item item-2">
          <Image src="/pages/page_12.png" alt="New 2" fill style={{ objectFit: 'cover' }} />
          <div className="item-label"><span>ROUND CHAIR</span><span>$420</span></div>
        </div>
        <div className="masonry-item item-3">
          <Image src="/pages/page_13.png" alt="New 3" fill style={{ objectFit: 'cover' }} />
          <div className="item-label"><span>BAMBOO BED</span><span>$1200</span></div>
        </div>
        <div className="masonry-item item-4">
          <Image src="/pages/page_14.png" alt="New 4" fill style={{ objectFit: 'cover' }} />
          <div className="item-label"><span>DINING TABLE</span><span>$980</span></div>
        </div>
        <div className="masonry-item item-5">
          <Image src="/pages/page_15.png" alt="New 5" fill style={{ objectFit: 'cover' }} />
          <div className="item-label"><span>WICKER CHAIR</span><span>$310</span></div>
        </div>
      </div>
    </section>
  );
}
