import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from './components/Banner.tsx';
import IconButtonDropdown from './components/IconButtonDropdown.tsx';
import Footer from './components/Footer.tsx';
import wing_logo from './assets/img/buffalo-wing.png';
import './App.css';

// Locations for the user to change view to
const menuItems = [
    { name: 'Blog', link: '/' },
    { name: 'Products', link: '/products' },
    { name: 'Team', link: '/team' },
  ];

const FullBlogPage = () => {
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
            <p>PlaceHolder</p>
        </header>
    <div>
      <Footer logo={wing_logo}/>
    </div>
    </div>
  );
};

export default FullBlogPage;