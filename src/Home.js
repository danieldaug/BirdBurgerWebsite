import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TextSection from './components/TextSection.tsx';
import ImageSlideshow from './components/ImageSlideshow.tsx';
import Divider from './components/Divider.tsx';
import IconButtonDropdown from './components/IconButtonDropdown.tsx';
import Footer from './components/Footer.tsx';
import DDIcon from './assets/img/DDIcon.png';
import main_logo from './assets/img/main_logo.png';
import wing_logo from './assets/img/buffalo-wing.png';
import './App.css'

// Locations for the user to change view to
const menuItems = [
  { name: 'Home', link: 'home-section' },
  { name: 'Products', link: 'product-section' },
  { name: 'Team', link: '/team' },
  { name: 'Blog', link: '/blogs'},
];

// Current products to display
const productData = [
  {
      imageUrl: DDIcon,
      header: 'Daily Disc',
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

const Home = () => {
    const location = useLocation();

    useEffect(() => {
    // This will run every time the location changes
    if (location.hash) {
        // Scroll to the element with the ID matching the hash
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    }, [location]);
  return (
    <div className="App" id="home-section">
        <IconButtonDropdown menuItems={menuItems} />
        <div className="App-header">
            <TextSection 
            title="Welcome to BirdBurger Games" 
            description="We are an indie development studio. Check out our socials and look out for our first mobile game, Daily Disc, coming later this year!" 
            />
            <div id="product-section"></div>
            <Divider color="#000" thickness="5px" width="80%"/>
            <div className="Slider">
            <h1>Products</h1>
            <ImageSlideshow images={productData} />
            </div>
        </div>
        <div>
            <Footer logo={wing_logo}/>
        </div>
        </div>
        );
    };
    
export default Home;