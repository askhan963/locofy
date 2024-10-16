import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  return <img loading="lazy" src={src} alt={alt} className={className} />;
};

export default Image;