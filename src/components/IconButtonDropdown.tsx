// components/IconButtonDropdown.tsx
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './IconButtonDropdown.css';

interface MenuItem {
  name: string;
  link: string; // The ID of the section or URL you want to scroll to
}

interface IconButtonDropdownProps {
  menuItems: MenuItem[];
}

const IconButtonDropdown: React.FC<IconButtonDropdownProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (link: string) => {
    document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close the dropdown after selecting a location
  };

  return (
    <div className="icon-button-container">
      <button className="icon-button" onClick={toggleDropdown}>
        <FaBars size={24} />
      </button>
      <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        {menuItems.map((item, index) => (
          <div key={index} className="dropdown-item" onClick={() => handleClick(item.link)}>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconButtonDropdown;

