import React from 'react';
import { ReactComponent as TikTokLogo } from '../assets/img/tiktok-icon.svg'; // Adjust the path to your SVG

const TiktokIcon = ({ fill = '#000', width = '50px', height = '50px' }) => {
  return (
    <TikTokLogo fill={fill} width={width} height={height}/>
  );
};

export default TiktokIcon;