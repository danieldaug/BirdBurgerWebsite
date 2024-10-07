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

  const data = JSON.parse(localStorage.getItem('userData'));
  const params = new URLSearchParams(location.search);
  const title = params.get('title');
  const descriptions = params.get('descriptions');
  const subtitles = params.get('subtitles');

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
          <h1>{data.title}</h1>
          {data.descriptions.map((description, index) => (
            <div key={index}>
              {/* Display subtitle if it exists for the current index */}
              {index < data.subtitles.length && <h2>{data.subtitles[index]}</h2>}
              
              {/* Display the description */}
              <p>{description}</p>
            </div>
          ))}
        </header>
    <div>
      <Footer logo={wing_logo}/>
    </div>
    </div>
  );
};

export default FullBlogPage;