// components/Logo.tsx
import React from 'react';
import logo from '../assets/img/icon_logo.png';

const MainLogo: React.FC = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" style={{ width: '400px', height: 'auto' }} />
    </div>
  );
};

export default MainLogo;