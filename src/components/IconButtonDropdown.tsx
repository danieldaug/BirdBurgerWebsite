// components/IconButtonDropdown.tsx
import React, { useState, useEffect } from 'react';
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
  const [iconSize, setIconSize] = useState(50); // Default size

  useEffect(() => {
    // Function to handle resizing
    const handleResize = () => {
      if ((window.innerWidth < 800)){
        setIconSize(15);
      } else if (window.innerWidth < 1200) {
        setIconSize(25); // Smaller size for mobile devices
      } else {
        setIconSize(50); // Larger size for larger screens
      }
    };

    // Set initial size
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (link: string) => {
    if (link.startsWith('/')) {
      // If it's an external link, use window.location to navigate
      window.location.href = link;
    } else {
      // Otherwise, scroll to the section
      document.getElementById(link)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the dropdown after selecting a location
  };

  return (
    <div className="icon-button-container">
      <button className="icon-button" onClick={toggleDropdown}>
        <FaBars size={iconSize} />
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

