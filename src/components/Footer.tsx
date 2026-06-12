import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-overlay"></div>
      <div className="footer-container">
        
        <div className="footer-content">
          <div className="footer-text-column">
            <div className="footer-item">
              <h4>Manufactured in</h4>
              <p>Jepara, Indonesia</p>
            </div>
            
            <div className="footer-item">
              <h4>What We Offer</h4>
              <p>Custom furniture production, scalable manufacturing, and long-term quality assurance.</p>
            </div>
            
            <div className="footer-item">
              <h4>Delivery</h4>
              <p>Local &amp; overseas shipping available</p>
            </div>
            
            <div className="footer-item">
              <h4>Reach Us</h4>
              <p>kaiufurniture.my@gmail.com</p>
            </div>
          </div>

          <div className="footer-logo-column">
            <img src="/assets/logo.png" alt="KAIU Furniture" className="footer-logo-img" />
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} KAIU Furniture. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
