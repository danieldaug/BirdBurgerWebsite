// components/TiktokIcon.tsx
import React from 'react';
import { ReactComponent as TikTokLogo } from '../assets/img/tiktok-icon.svg'; // Adjust the path to your SVG

interface TiktokIconProps {
  fill?: string;
  width?: string;
  height?: string;
}

const TiktokIcon: React.FC<TiktokIconProps> = ({ fill = '#000', width = '50px', height = '50px' }) => {
  return <TikTokLogo fill={fill} width={width} height={height} />;
};

export default TiktokIcon;
