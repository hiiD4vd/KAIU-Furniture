import Image from 'next/image';

export default function HeroTop() {
  return (
    <div className="hero-top-container">
      
      {/* --- TOP NAVBAR --- */}
      <nav className="top-navbar">
        <div className="nav-left">
          <img src="/assets/logo.png" alt="KAIU Logo" className="logo-img" style={{ filter: 'brightness(0)' }} />
        </div>
        <div className="nav-right">
          <ul className="top-nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#product">Product <span style={{fontSize: '14px', marginLeft: '3px'}}>&#8964;</span></a></li>
            <li><a href="#collection">Collection</a></li>
            <li><a href="#new-arrivals">New Arrivals</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </nav>

      {/* --- FLOATING IMAGES --- */}
      <div className="image-umbrella">
        <Image src="/assets/laci.png" alt="Laci" width={600} height={600} priority />
      </div>
      
      <div className="image-stool">
        <Image src="/assets/kursi.png" alt="Kursi" width={350} height={350} priority />
      </div>

      <div className="image-lamp">
        <Image src="/assets/meja.png" alt="Meja" width={280} height={280} priority />
      </div>

      {/* --- FLOATING TYPOGRAPHY --- */}
      <div className="typography-container">
        <h1 className="title-outdoor">KAIU</h1>
        <h1 className="title-entertaining">FURNITURE</h1>
      </div>

      {/* --- BOTTOM CATEGORY NAVBAR --- */}
      <div className="bottom-category-navbar">
        <div className="category-item">
          <span>LIVING ROOM</span>
          <span className="arrow">&#8599;</span>
        </div>
        <div className="category-item">
          <span>DINING ROOM</span>
          <span className="arrow">&#8599;</span>
        </div>
        <div className="category-item">
          <span>OUTDOOR</span>
          <span className="arrow">&#8599;</span>
        </div>
      </div>
    </div>
  );
}
