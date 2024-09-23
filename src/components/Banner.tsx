import React from 'react';
import './Banner.css';
import banner from '../assets/img/birdburger-banner.png'

const Banner: React.FC = () => {
  return (
    <div className="banner-container">
      <img src= {banner} alt="Banner" className="banner-image" />
    </div>
  );
};

export default Banner;
