import React from 'react';
import './Footer.css';

interface FooterProps {
  logo: string; // URL for the logo image
}

const Footer: React.FC<FooterProps> = ({ logo }) => (
  <footer className="footer">
    <div className="footer-left">
      <img src={logo} alt="Logo" className="footer-logo" />
    </div>
    <div className="footer-right">
      <p className="footer-text">© 2024 BirdBurger Games. All rights reserved.</p>
      <div className="contact-us">
        <h3>Contact Us</h3>
        <p>Email: birdburgergames@gmail.com</p>
      </div>
    </div>
  </footer>
);

export default Footer;
