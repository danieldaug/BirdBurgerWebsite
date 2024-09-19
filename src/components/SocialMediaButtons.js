// components/SocialMediaButtons.js
import React from 'react';
import { FaTwitter, FaInstagram, FaReddit } from 'react-icons/fa';

const SocialMediaButtons = () => {
  const socialLinks = [
    { icon: <FaReddit />, link: 'https://www.reddit.com/user/DapperClassic6977/' },
    { icon: <FaTwitter />, link: 'https://x.com/BirdBurgerGames' },
    { icon: <FaInstagram />, link: 'https://instagram.com' },
  ];

  return (
    <div className="social-buttons">
      {socialLinks.map((social, index) => (
        <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaButtons;