// components/ImageDisplayer.tsx
import React from 'react';
import './ImageDisplayer.css';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import './SocialMediaButtons.css';

interface Image {
  imageUrl: string;
  description: string;
  school?: string;
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
        <div className="display-content" key={index}>
          <div className="image-section">
            <img
              src={image.imageUrl}
              alt={image.description}
              className="display-image"
            />
          </div>
          <div className="text-section-display">
            {image.header && <h1 className="display-header">{image.header}</h1>}
            <p className="display-description">{image.description}</p>
            <p className="display-description">{image.school}</p>
            <div className="social-media-buttons">
              {image.linkedin && (
                <a className="social-buttons-small" key={`linkedin-${index}`} href={image.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              )}
              {image.ig && (
                <a className="social-buttons-small" key={`instagram-${index}`} href={image.ig} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              )}
              {image.git && (
                <a className="social-buttons-small" key={`github-${index}`} href={image.git} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageDisplayer;
