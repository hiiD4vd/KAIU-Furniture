"use client";

import React, { useState } from 'react';

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          {ROOMS.map(room => (
            <h1
              key={room.id}
              className={`sbr-item ${activeRoom.id === room.id ? 'active' : ''}`}
              onMouseEnter={() => setActiveRoom(room)}
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
