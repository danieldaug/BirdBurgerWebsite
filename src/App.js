// App.js
import React from 'react';
import './App.css';
import SocialMediaButtons from './components/SocialMediaButtons.tsx';
import Logo from './components/MainLogo.tsx';
import TextSection from './components/TextSection.tsx';
import ImageSlider from './components/ImageSlider.tsx';
import DDIcon from './assets/img/DDIcon.png'
import main_logo from './assets/img/main_logo.png';

// Current products to display
const imageData = [
  {
      imageUrl: DDIcon,
      description: 'Our first mobile game to be released in the near future. Look out for Daily Disc on the IOS App Store!',
  },
  {
      imageUrl: main_logo,
      description: 'This is the second image',
  },
  {
      imageUrl: DDIcon,
      description: 'This is the third image',
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <TextSection 
          title="Welcome to BirdBurger Games" 
          description="We are an indie development studio. Look out for our first mobile game, Daily Disc, coming later this year." 
        />
        <SocialMediaButtons />
        <div className="Slider">
          <h1>Products</h1>
          <ImageSlider images={imageData} />
        </div>
      </header>
    </div>
  );
}

export default App;