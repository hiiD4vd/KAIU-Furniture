import Image from 'next/image';

export default function CollectionsGrid() {
  const collections = [
    { id: 1, name: 'Chair', src: '/pages/page_04.png' },
    { id: 2, name: 'Table', src: '/pages/page_05.png' },
    { id: 3, name: 'Cabinet', src: '/pages/page_06.png' },
    { id: 4, name: 'Stool', src: '/pages/page_07.png' },
  ];

  return (
    <section className="collections-section">
      <h2 className="section-title">OUR COLLECTIONS</h2>
      
      <div className="collections-grid">
        {collections.map((item) => (
          <div key={item.id} className="collection-card">
            <div className="collection-image">
              <Image src={item.src} alt={item.name} fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </div>
            <p className="collection-name">{item.name}</p>
          </div>
        ))}
      </div>

      <div className="view-all-wrapper">
        <a href="#collections" className="btn-view-all">SEE ALL COLLECTIONS &rarr;</a>
      </div>
    </section>
  );
}
