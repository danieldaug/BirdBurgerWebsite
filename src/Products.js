import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from './components/Banner.tsx';
import IconButtonDropdown from './components/IconButtonDropdown.tsx';
import ImageSlideshow from './components/ImageSlideshow.tsx';
import Footer from './components/Footer.tsx';
import DDIcon from './assets/img/DDIcon.png';
import wing_logo from './assets/img/buffalo-wing.png';
import main_logo from './assets/img/main_logo.png'
import './App.css';

// Locations for the user to change view to
const menuItems = [
    { name: 'Blog', link: '/' },
    { name: 'Products', link: '/products' },
    { name: 'Team', link: '/team' },
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

const Products = () => {
    const location = useLocation();

    useEffect(() => {
    // Scroll to the anchor if there's a hash in the URL
    if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    }
    }, [location]);
  return (
    <div>
        <Banner />
        <IconButtonDropdown menuItems={menuItems} />
        <header className="App-header">
        <div className="Slider">
            <h1>Products</h1>
            <ImageSlideshow images={productData} />
            </div>
      </header>
    <div>
      <Footer logo={wing_logo}/>
    </div>
    </div>
  );
};

export default Products;