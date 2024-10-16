import React from 'react';

interface IconButtonProps {
  src: string;
  alt: string;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ src, alt, className }) => {
  return (
    <button className={`flex gap-2.5 items-center self-stretch p-2 my-auto w-9 h-9 rounded-md ${className || ''}`}>
      <img loading="lazy" src={src} alt={alt} className="object-contain w-5 aspect-square" />
    </button>
  );
};

export default IconButton;