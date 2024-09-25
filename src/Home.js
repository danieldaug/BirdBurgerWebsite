import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TextSection from './components/TextSection.tsx';
import Divider from './components/Divider.tsx';
import IconButtonDropdown from './components/IconButtonDropdown.tsx';
import Footer from './components/Footer.tsx';
import wing_logo from './assets/img/buffalo-wing.png';
import './App.css'

// Locations for the user to change view to
const menuItems = [
  { name: 'Home', link: 'home-section' },
  { name: 'Products', link: '/products' },
  { name: 'Team', link: '/team' },
  { name: 'Blog', link: '/blogs'},
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
        </div>
        <div>
            <Footer logo={wing_logo}/>
        </div>
        </div>
        );
    };
    
export default Home;