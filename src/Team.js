import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from './components/Banner.tsx';
import IconButtonDropdown from './components/IconButtonDropdown.tsx';
import ImageDisplayer from './components/ImageDisplayer.tsx';
import Divider from './components/Divider.tsx';
import TextSection from './components/TextSection.tsx';
import Footer from './components/Footer.tsx';
import AndersonProfile from './assets/img/anderson_profile.JPG';
import DaugProfile from './assets/img/daugbjerg_profile.png';
import BirdProfile from './assets/img/bird_profile.png';
import wing_logo from './assets/img/buffalo-wing.png';
import './App.css';

// Locations for the user to change view to
const menuItems = [
    { name: 'Blog', link: '/' },
    { name: 'Products', link: '/products' },
    { name: 'Team', link: '/team' },
  ];

// Team Members
const teamData = [
    {
        imageUrl: DaugProfile,
        description: 'Co-founder | Developer | Visual Artist',
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
        imageUrl: AndersonProfile,
        description: 'Musician',
        school: 'Palomar College \'27',
        header: 'Kevin Anderson',
        ig: 'https://www.instagram.com/zizzerzazzerzuz4323/',
        other: 'https://linktr.ee/KevinAnd',
    },
  ];

const Team = () => {
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
            title="Meet The Team" 
            description="This studio is based in the US and was brought about by two college students whose love for video games and creativity has led them to spending their free-time as indie game developers. Through development, they have partnered up with other individuals for soundtracks and marketing." 
            />
        <Divider color="#000" thickness="5px" width="80%"/>
        <div className="Slider">
            <ImageDisplayer images={teamData} />
        </div>
      </header>
    <div>
      <Footer logo={wing_logo}/>
    </div>
    </div>
  );
};

export default Team;