// components/ImageSlideshow.tsx
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './ImageSlideshow.css';

interface Image {
  imageUrl: string;
  description: string;
  header?: string;
}

interface ImageSliderProps {
  images: Image[];
}

const ImageSlideshow: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const nextSlide = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
      setFadeOut(false);
    }, 300);
  };

  const prevSlide = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
      setFadeOut(false);
    }, 300);
  };

  return (
    <div className="slider-container">
      <div className="slider-content">
        {/* Image on the left */}
        <div className={`slider-image-container ${fadeOut ? 'fade-out' : 'fade-in'}`}>
          <img
            src={images[currentIndex].imageUrl}
            alt={images[currentIndex].description}
            className="slider-image"
          />
        </div>

        {/* Header and description on the right */}
        <div className="slider-text">
          <h1 className="slider-header">{images[currentIndex].header}</h1>
          <p className="slider-description">{images[currentIndex].description}</p>
        </div>
      </div>

      {/* Navigation buttons */}
      <button className="left-arrow" onClick={prevSlide}>
        <FaArrowLeft />
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ImageSlideshow;
