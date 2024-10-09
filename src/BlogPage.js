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
  { imageUrl: DDIcon, 
    title: 'Daily Disc', 
    description: 'Our first mobile release set for later this year. Blah blah blah', 
    view: 'View Full Blog' ,
    data: {
      title: 'Introducing Daily Disc: A New Adventure Awaits Every Day!',
      descriptions: [
        ['We are thrilled to announce the launch of Daily Disc, a brand-new mobile game now available on the App Store! Designed for disc golf enthusiasts and casual gamers alike, Daily Disc offers a fresh twist to your daily gaming routine. Whether you’re an experienced disc golfer or someone looking for a fun and engaging way to pass the time, Daily Disc brings a unique experience you won’t want to miss.'],
        ['At its core, Daily Disc is a disc golf-inspired game where you navigate courses, throw discs, and aim for the perfect shot. But what sets Daily Disc apart from other games is the way it keeps the adventure fresh every single day. Each morning, players are greeted with a new random map—crafted with different terrains, challenges, and layouts. Every map offers a new experience, and no two days are ever the same!', 
        'Whether you\'re playing during your morning coffee, lunch break, or winding down at night, Daily Disc’s quick and fun gameplay will keep you coming back for more.'],
        ['1. A New Random Map Every Day\nThe excitement of Daily Disc lies in its ever-changing landscapes. Every day, a randomly generated map challenges you to adapt and master the terrain. Will today’s course be a scenic forest trail, a windy desert expanse, or a lakeside paradise? You’ll never know until you play!', 
        '2. Unlockable Discs\nAs you progress through the game, you’ll have the chance to unlock a variety of unique and powerful discs. Each disc comes with its own set of stats, giving you options for control, power, or precision. Whether you want to master the perfect putt or throw a long-distance driver, there’s a disc for every play style. Collect them all and find the perfect one for each challenge!', 
        '3. Achievements and Rewards\nWhat’s a game without something to strive for? In Daily Disc, we’ve packed in achievements and rewards to keep you motivated. From completing daily challenges to mastering difficult maps, there are numerous ways to earn rewards and unlock hidden achievements. Can you complete a hole in one? Or perhaps conquer 10 daily maps in a row? The more you play, the more achievements you’ll unlock, adding layers of depth to your gameplay.', 
        '4. Gorgeous Graphics and Immersive Sound/Music\nWe’ve spared no effort in making Daily Disc a visually stunning experience. Each map is beautifully designed with rich colors, detailed environments, and immersive soundtracks to transport you into the world of disc golf. Combined with smooth, intuitive controls, every throw feels satisfying and fun.'],
        ['Daily Disc is the perfect combination of simplicity, strategy, and skill. Its easy-to-learn mechanics make it accessible to all players, but the depth of its gameplay keeps you engaged. The random daily maps mean you’ll never get bored—each day is a new chance to test your skills and unlock rewards.', 
        'Whether you’re aiming for a high score, competing on the leaderboards, or just looking for a relaxing game to enjoy in your free time, Daily Disc delivers a fresh and exciting experience. With constant updates, new discs, and achievements, the game will continue to evolve and grow along with its player community.'],
        ['We can’t wait for you to experience Daily Disc and join our community of disc-throwing adventurers! Download it today on the App Store and start your journey to mastering the disc. Don’t forget to invite your friends to play and see who can become the daily disc master!', 
        'Stay tuned for more updates, including special events and new features we’ll be rolling out soon. Every day is a new adventure in Daily Disc—are you ready to take on the challenge?'],
      ],
      subtitles: [
        '',
        'What is Daily Disc?',
        'Key Features',
        'Why You\'ll Love Daily Disc',
        'Get Ready to Tee Off!',
      ],
      images: [
        DDIcon
      ]
    },
  },
  { imageUrl: DDIcon, 
    title: 'Daily Disc', 
    description: 'Our first mobile release set for later this year. Blah blah blah', 
    view: 'View Full Blog',
    data: {
      title: 'Placeholder',
      descriptions: [['Description']],
      subtitles: ['Subtitle'],
      images: [
        
      ]
    },
  }
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
