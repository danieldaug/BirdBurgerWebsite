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
        <div className="display-content" key={index} style={{ marginBottom: '20px', display: 'flex' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <img
              src={image.imageUrl}
              alt={image.description}
              className="display-image"
              style={{
                borderRadius: '20px',
                marginRight: '20px',
                width: '400px',  // Set a fixed width
                height: '400px', // Set a fixed height
                objectFit: 'cover' // Maintain aspect ratio and cover the box
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            {image.header && <h1 className="display-header" style={{ textAlign: 'right' }}>{image.header}</h1>}
            <p className="display-description" style={{ textAlign: 'right' }}>{image.description}</p>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
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
