// components/Logo.js
import React from 'react';
import logo from '../assets/img/main_logo.png';

const MainLogo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" style={{ width: '300px', height: 'auto' }} />
    </div>
  );
};

export default MainLogo;