// components/ImageSlider.tsx
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './ImageSlider.css';

interface Image {
  imageUrl: string;
  description: string;
  header?: string;
}

interface ImageSliderProps {
  images: Image[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const nextSlide = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
      setFadeOut(false);
    }, 300); // Match this timeout with the CSS transition duration
  };

  const prevSlide = () => {
    setFadeOut(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
      setFadeOut(false);
    }, 300); // Match this timeout with the CSS transition duration
  };

  return (
    <div className="slider-container">
      <div className={`slider-content ${fadeOut ? 'fade-out' : 'fade-in'}`}>
        <img
          src={images[currentIndex].imageUrl}
          alt={images[currentIndex].description}
          className="slider-image"
          style={{ borderRadius: '20px' }}
        />
        <h1 className='slider-header'>{images[currentIndex].header}</h1>
        <p className="slider-description">{images[currentIndex].description}</p>
      </div>

      <button className="left-arrow" onClick={prevSlide}>
        <FaArrowLeft />
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ImageSlider;