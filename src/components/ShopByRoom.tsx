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
  const itemRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && window.innerWidth <= 768) {
          const roomId = entry.target.getAttribute('data-id');
          const room = ROOMS.find(r => r.id === roomId);
          if (room) setActiveRoom(room);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    });

    itemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
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
    <section className="shop-by-room">
      <div className="sbr-top">
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
          {ROOMS.map((room, i) => (
            <h1
              key={room.id}
              data-id={room.id}
              ref={el => { itemRefs.current[i] = el; }}
              className={`sbr-item ${activeRoom.id === room.id ? 'active' : ''}`}
              onMouseEnter={() => {
                if (window.innerWidth > 768) setActiveRoom(room);
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

      <div className="sbr-bottom">
        <a href="#shop" className="sbr-link">SHOP BY ROOM &rarr;</a>
        <button className="sbr-back-to-top" onClick={scrollToTop}>BACK TO TOP &uarr;</button>
      </div>
    </section>
  );
}
