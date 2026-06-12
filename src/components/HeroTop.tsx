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
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#product">Product <span style={{fontSize: '10px', marginLeft: '3px'}}>&#8964;</span></a></li>
            <li><a href="#collection">Collection</a></li>
            <li><a href="#new-arrivals">New Arrivals</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
          <div className="nav-icons">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
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
