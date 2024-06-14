import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);

  }, [currentIndex, images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <div
        key={index}
        className={`top-0 left-0 w-full h-full transition-transform duration-1000 transform ${
          index === currentIndex ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ display: index === currentIndex ? 'block' : 'none' }}
      >
        <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
      </div>
      ))}
    </div>
  );
};

export default Carousel