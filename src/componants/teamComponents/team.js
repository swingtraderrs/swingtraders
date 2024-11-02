import React, { useState } from 'react';

const images = [
  'https://via.placeholder.com/300x400',
  'https://via.placeholder.com/300x400',
  'https://via.placeholder.com/300x400',
  'https://via.placeholder.com/300x400',
  'https://via.placeholder.com/300x400',
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState(0);

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartPosition(e.clientX);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    
    const dragAmount = e.clientX - startPosition;

    // If the drag amount exceeds a threshold, slide to the next or previous image
    if (dragAmount > 100 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsDragging(false);
    } else if (dragAmount < -100 && currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
      setIsDragging(false);
    }
  };

  return (
    <>
     <h2 className='text-center py-5'>Meet Our Professionals</h2>
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          width: '900px', // Width to fit 3 slides
          position: 'relative',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onMouseMove={handleDragMove}
      >
        <div
          style={{
            display: 'flex',
            transition: 'transform 0.3s ease-in-out',
            transform: `translateX(-${currentIndex * 300}px)`,
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                minWidth: '300px', // Width of each image card
                height: '400px', // Height of each image card
                margin: '0 10px',
                overflow: 'hidden',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
              }}
            >
              <img
                src={img}
                alt={`Slide ${index}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Team;
