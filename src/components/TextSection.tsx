// components/TextSection.tsx
import './TextSection.css';
import React from 'react';

interface TextSectionProps {
  title: string;
  description: string;
}

const TextSection: React.FC<TextSectionProps> = ({ title, description }) => {
  return (
    <div className="text-section">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default TextSection;