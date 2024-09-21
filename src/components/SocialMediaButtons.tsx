// components/SocialMediaButtons.tsx
import React from 'react';
import { FaTwitter, FaInstagram, FaReddit } from 'react-icons/fa';
import TiktokIcon from './TiktokLogo.tsx';
import './SocialMediaButtons.css';

interface SocialLink {
  icon: JSX.Element;
  link: string;
}

const SocialMediaButtons: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: <FaReddit />, link: 'https://www.reddit.com/user/DapperClassic6977/' },
    { icon: <FaTwitter />, link: 'https://x.com/BirdBurgerGames' },
    { icon: <FaInstagram />, link: 'https://www.instagram.com/birdburgergames/' },
    { icon: <TiktokIcon />, link: 'https://www.tiktok.com/@birdburgergames?lang=en' },
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
