import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from './components/Banner.tsx';
import IconButtonDropdown from './components/IconButtonDropdown.tsx';
import TextSection from './components/TextSection.tsx';
import Footer from './components/Footer.tsx';
import BlogPostDisplayer from './components/BlogPostDisplayer.tsx';
import DDIcon from './assets/img/DDIcon.png';
import wing_logo from './assets/img/buffalo-wing.png';
import './App.css';

// Locations for the user to change view to
const menuItems = [
  { name: 'Blog', link: '/' },
  { name: 'Products', link: '/products' },
  { name: 'Team', link: '/team' },
];

const blogItems = [
  { imageUrl: DDIcon, title: 'Daily Disc', description: 'Our first mobile release set for later this year. Blah blah blah', view: 'View Full Blog' },
  { imageUrl: DDIcon, title: 'Daily Disc', description: 'Our first mobile release set for later this year. Blah blah blah', view: 'View Full Blog' },
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
        <BlogPostDisplayer posts={blogItems} />
      </header>
    <div>
      <Footer logo={wing_logo}/>
    </div>
    </div>
  );
};

export default BlogPage;
