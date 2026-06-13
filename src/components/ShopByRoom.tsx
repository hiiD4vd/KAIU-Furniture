"use client";

import React, { useState, useEffect, useRef } from 'react';

const ROOMS = [
  {
    id: 'LIVING ROOM',
    leftBg: '/assets/living room/sofa 1.jpg',
    leftFg: '/assets/living room/sofa.png',
    rightBg: '/assets/living room/meja 1.jpg',
    rightFg: '/assets/living room/meja.png'
  },
  {
    id: 'DINING ROOM',
    leftBg: '/assets/dining room/kursi 1.jpg',
    leftFg: '/assets/dining room/kursi.png',
    rightBg: '/assets/dining room/meja 1.jpg',
    rightFg: '/assets/dining room/meja.png'
  },
  {
    id: 'OUTDOOR',
    leftBg: '/assets/outdoor/sofa 1.jpg',
    leftFg: '/assets/outdoor/sofa.png',
    rightBg: '/assets/outdoor/meja 1.jpg',
    rightFg: '/assets/outdoor/meja.png'
  }
];

export default function ShopByRoom() {
  const [activeRoom, setActiveRoom] = useState(ROOMS[0]);
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Init
    window.addEventListener('resize', handleResize);
    
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const top = rect.top;
      const height = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress through the sticky section
      if (top <= 0 && top > -(height - viewportHeight)) {
        const progress = Math.abs(top) / (height - viewportHeight);
        let idx = Math.floor(progress * ROOMS.length);
        if (idx >= ROOMS.length) idx = ROOMS.length - 1;
        if (idx < 0) idx = 0;
        setActiveRoom(ROOMS[idx]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRoomClick = (roomId: string) => {
    const targetMap: Record<string, string> = {
      'LIVING ROOM': 'living-room',
      'DINING ROOM': 'dining-room',
      'OUTDOOR': 'outdoor'
    };
    
    const elementId = targetMap[roomId];
    if (elementId) {
      const el = document.getElementById(elementId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      className="shop-by-room" 
      ref={sectionRef}
      style={{ height: isMobile ? '300vh' : 'auto' }} // Sticky height on mobile
    >
      <div 
        className="sbr-sticky-container"
        style={isMobile ? { 
          position: 'sticky', 
          top: 0, 
          height: '100vh', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center' 
        } : {}}
      >
        <div className="sbr-top" style={isMobile ? { position: 'absolute', top: '20px', width: '100%' } : {}}>
          <span>Shop by Room</span>
        </div>

        <div className="sbr-center">
          <div className="sbr-left-container">
            <div className="sbr-left-img-wrapper">
              {ROOMS.map(room => (
                <React.Fragment key={room.id}>
                  <img 
                    src={room.leftBg} 
                    alt="Background Left" 
                    className={`sbr-bg-img ${activeRoom.id === room.id ? 'active' : ''}`} 
                  />
                  <img 
                    src={room.leftFg} 
                    alt="Foreground Left" 
                    className={`sbr-png-img sbr-left-fg ${room.id === 'LIVING ROOM' ? 'sbr-living-left' : ''} ${room.id === 'OUTDOOR' ? 'sbr-outdoor-left' : ''} ${activeRoom.id === room.id ? 'active' : ''}`} 
                  />
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="sbr-list">
            {ROOMS.map((room) => (
              <h1
                key={room.id}
                data-id={room.id}
                className={`sbr-item ${activeRoom.id === room.id ? 'active' : ''}`}
                onMouseEnter={() => {
                  if (!isMobile) setActiveRoom(room);
                }}
                onClick={() => handleRoomClick(room.id)}
                style={{ cursor: 'pointer' }}
              >
                {room.id}
              </h1>
            ))}
          </div>

          <div className="sbr-right-container">
            <div className="sbr-right-img-wrapper">
              {ROOMS.map(room => (
                <React.Fragment key={room.id}>
                  <img 
                    src={room.rightBg} 
                    alt="Background Right" 
                    className={`sbr-bg-img ${activeRoom.id === room.id ? 'active' : ''}`} 
                  />
                  <img 
                    src={room.rightFg} 
                    alt="Foreground Right" 
                    className={`sbr-png-img sbr-right-fg ${room.id === 'OUTDOOR' ? 'sbr-outdoor-right' : ''} ${activeRoom.id === room.id ? 'active' : ''}`} 
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="sbr-bottom" style={isMobile ? { position: 'absolute', bottom: '20px', width: '100%' } : {}}>
          <a href="#shop" className="sbr-link">SHOP BY ROOM &rarr;</a>
          <button className="sbr-back-to-top" onClick={scrollToTop}>BACK TO TOP &uarr;</button>
        </div>
      </div>
    </section>
  );
}
