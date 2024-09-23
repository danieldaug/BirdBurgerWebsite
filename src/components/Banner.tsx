import React from 'react';
import './Banner.css';
import banner from '../assets/img/birdburger-banner.png'

const Banner: React.FC = () => {
  return (
    <div className="banner-container">
      <div className="banner-text">
      <h1 id="birdburger-text">BirdBurger</h1>
      </div>
      <img src= {banner} alt="Banner" className="banner-image" />
    </div>
  );
};

export default Banner;
