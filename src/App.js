// App.js
import React from 'react';
import './App.css';
import SocialMediaButtons from './components/SocialMediaButtons.tsx';
import Logo from './components/MainLogo.tsx';
import TextSection from './components/TextSection.tsx';
import ImageSlider from './components/ImageSlider.tsx';
import ImageDisplayer from './components/ImageDisplayer.tsx';
import Divider from './components/Divider.tsx';
import DDIcon from './assets/img/DDIcon.png';
import DaugProfile from './assets/img/daugbjerg_profile.png';
import BirdProfile from './assets/img/bird_profile.jpg';
import main_logo from './assets/img/main_logo.png';

// Current products to display
const productData = [
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

// Team Members
const teamData = [
  {
      imageUrl: DaugProfile,
      description: 'Co-founder | Developer | Artist',
      school: 'University of San Diego \'25',
      header: 'Daniel Daugbjerg',
      linkedin: 'https://www.linkedin.com/in/daniel-daugbjerg-852a26282/',
      ig: 'https://www.instagram.com/daniel.daug/',
      git: 'https://github.com/danieldaug',
  },
  {
      imageUrl: BirdProfile,
      description: 'Co-founder | Developer',
      school: 'Rensselaer Polytechnic Institute \'25',
      header: 'Thomas Bird',
      linkedin: 'https://www.linkedin.com/in/tommycbird/',
      ig: 'https://www.instagram.com/tommycbird/',
      git: 'https://github.com/tommycbird',
  },
  {
      imageUrl: main_logo,
      description: 'Other members to be added',
      header: 'Other Members',
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Divider color="#000" thickness="5px" width="80%"/>
        <TextSection 
          title="Welcome to BirdBurger Games" 
          description="We are an indie development studio. Check out our socials and look out for our first mobile game, Daily Disc, coming later this year!" 
        />
        <SocialMediaButtons />
        <Divider color="#000" thickness="5px" width="80%"/>
        <div className="Slider">
          <h1>Products</h1>
          <ImageSlider images={productData} />
        </div>
        <Divider color="#000" thickness="5px" width="80%"/>
        <div className="Slider">
          <h1>Meet The Team</h1>
          <ImageDisplayer images={teamData} />
        </div>
      </header>
    </div>
  );
}

export default App;