// components/SocialMediaButtons.js
import React from 'react';
import { FaTwitter, FaInstagram, FaReddit } from 'react-icons/fa';
import './SocialMediaButtons.css'

const SocialMediaButtons = () => {
  const socialLinks = [
    { icon: <FaReddit />, link: 'https://www.reddit.com/user/DapperClassic6977/' },
    { icon: <FaTwitter />, link: 'https://x.com/BirdBurgerGames' },
    { icon: <FaInstagram />, link: 'https://instagram.com' },
  ];

  return (
    <div>
      {socialLinks.map((social, index) => (
        <a className="social-buttons" key={index} href={social.link} target="_blank" rel="noopener noreferrer">
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaButtons;