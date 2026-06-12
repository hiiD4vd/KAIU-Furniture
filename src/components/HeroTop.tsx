import Image from 'next/image';

export default function HeroTop() {
  return (
    <div className="hero-top-container">
      <div className="image-umbrella">
        <Image src="/assets/laci.png" alt="Laci" width={600} height={600} priority />
      </div>
      
      <div className="image-stool">
        <Image src="/assets/kursi.png" alt="Kursi" width={350} height={350} priority />
      </div>

      <div className="image-lamp">
        <Image src="/assets/meja.png" alt="Meja" width={280} height={280} priority />
      </div>

      <div className="typography-container">
        <h1 className="title-outdoor">KAIU</h1>
        <h1 className="title-entertaining">FURNITURE</h1>
      </div>

      <div className="content-bottom-right">
        <p className="description">
          Whether garden furniture or accessories, we&apos;ve got everything you need to<br />
          elevate seasonal entertaining.
        </p>
        <div className="actions">
          <a href="#shop" className="btn btn-primary" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>SHOP OUTDOOR ENTERTAINING ESSENTIALS</a>
          <a href="#top" className="btn btn-secondary" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>BACK TO TOP &uarr;</a>
        </div>
      </div>
    </div>
  );
}
