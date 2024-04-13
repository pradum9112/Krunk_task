import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstItem = currentIndex === 0;
    const newIndex = isFirstItem ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastItem = currentIndex === items.length - 1;
    const newIndex = isLastItem ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2"
        onClick={goToPrevious}
      >
        Back
      </button>
      <div className="flex items-center justify-center">
        {items.map((item, index) => (
          <img
            key={index}
            src={item.imageUrl}
            alt={`Slide ${index}`}
            className={`mx-auto cursor-pointer ${
              index === currentIndex ? 'block' : 'hidden'
            }`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2"
        onClick={goToNext}
      >
        Forward
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-gray-800 px-4 py-2 rounded-md">
        {items[currentIndex].suggestion.items.map((item, index) => (
          <span key={index} className="mr-2">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
