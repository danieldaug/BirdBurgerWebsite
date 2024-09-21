// components/ImageDisplayer.tsx
import React from 'react';
import './ImageDisplayer.css';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import './SocialMediaButtons.css';

interface Image {
  imageUrl: string;
  description: string;
  header?: string;
  ig?: string;
  linkedin?: string;
  git?: string;
}

interface ImageDisplayerProps {
  images: Image[];
}

const ImageDisplayer: React.FC<ImageDisplayerProps> = ({ images }) => {
  return (
    <div className="display-container">
      {images.map((image, index) => (
        <div className="display-content" key={index} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src={image.imageUrl}
            alt={image.description}
            className="display-image"
            style={{ borderRadius: '20px', marginBottom: '10px', width: '100%' }} // Make the image full width
          />
          <div className="display-text" style={{ textAlign: 'center' }}>
            {image.header && <h1 className="display-header">{image.header}</h1>}
            <p className="display-description">{image.description}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {image.linkedin && (
            <a className="social-buttons" key={`linkedin-${index}`} href={image.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            </a>
            )}
            {image.ig && (
            <a className="social-buttons" key={`instagram-${index}`} href={image.ig} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
            </a>
            )}
            {image.git && (
            <a className="social-buttons" key={`github-${index}`} href={image.git} target="_blank" rel="noopener noreferrer">
            <FaGithub />
            </a>
            )}
        </div>

        </div>
      ))}
    </div>
  );
};

export default ImageDisplayer;


