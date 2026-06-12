import Image from 'next/image';

export default function HeroNatural() {
  return (
    <section className="hero-natural-section">
      {/* Navigation Bar */}
      <nav className="natural-nav">
        <div className="nav-logo">KAIU</div>
        <ul className="nav-links">
          <li>FURNITURE</li>
          <li>OUTDOOR</li>
          <li>INDOOR</li>
          <li>DECOR</li>
          <li>CONTACT</li>
        </ul>
        <div className="nav-icons">
          <span>🔍</span>
          <span>🛒</span>
        </div>
      </nav>

      {/* Giant Title */}
      <h1 className="giant-title-natural">NATURAL</h1>

      {/* Hero Image */}
      <div className="hero-natural-image-wrapper">
        {/* Using one of the PDF pages as the lifestyle hero image */}
        <Image src="/pages/page_02.png" alt="Natural Living Room" fill style={{ objectFit: 'cover' }} priority />
      </div>

      {/* Filters Bar */}
      <div className="filters-bar">
        <div className="filter-item">
          <span>Filter By</span>
          <span className="dropdown-arrow">▼</span>
        </div>
        <div className="filter-item">
          <span>Size</span>
          <span className="dropdown-arrow">▼</span>
        </div>
        <div className="filter-item">
          <span>Materials</span>
          <span className="dropdown-arrow">▼</span>
        </div>
        <div className="filter-item right-align">
          <span>Sort by</span>
          <span className="dropdown-arrow">▼</span>
        </div>
      </div>
    </section>
  );
}
