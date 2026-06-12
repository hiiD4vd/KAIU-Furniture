import React from 'react';

type RoomCoverProps = {
  title: string;
  bgImage: string;
  description?: string;
};

export default function RoomCover({ title, bgImage, description }: RoomCoverProps) {
  const defaultDesc = "Create a space that reflects your style and comfort. Our meticulously curated collection brings timeless elegance and modern functionality to your home. Explore our exclusive pieces designed to transform your everyday living.";
  
  return (
    <section className="room-cover-section" style={{ backgroundImage: `url('${bgImage}')` }}>
      <div className="room-cover-overlay">
        <div className="room-cover-content">
          <h2 className="room-cover-title">{title}</h2>
          <p className="room-cover-desc">{description || defaultDesc}</p>
        </div>
      </div>
    </section>
  );
}
