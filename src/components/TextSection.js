// components/TextSection.js
import './TextSection.css';

import React from 'react';

const TextSection = ({ title, description }) => {
  return (
    <div className="text-section">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default TextSection;