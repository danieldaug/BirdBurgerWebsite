import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from './components/Banner.tsx';
import IconButtonDropdown from './components/IconButtonDropdown.tsx';
import TextSection from './components/TextSection.tsx';
import Footer from './components/Footer.tsx';
import wing_logo from './assets/img/buffalo-wing.png';

// Locations for the user to change view to
const menuItems = [
    { name: 'Home', link: '/#home-section' },
    { name: 'Products', link: '/#product-section' },
    { name: 'Team', link: '/#team-section' },
    { name: 'Blog', link: '/blogs'},
  ];

const BlogPage = () => {
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
        <TextSection 
            title="Welcome to the BirdBurger Blog Page" 
            description="Check out updates, information, and documentation throughout our development journey!" 
        />
      </header>
    <div>
      <Footer logo={wing_logo}/>
    </div>
    </div>
  );
};

export default BlogPage;
