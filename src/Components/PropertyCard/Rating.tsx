import React from 'react';
import Image from './Image';

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div className="flex gap-1.5 items-center self-stretch my-auto text-sm font-semibold tracking-wide leading-none whitespace-nowrap text-zinc-900 w-[42px]">
      <div className="self-stretch my-auto w-[23px]">{rating.toFixed(1)}</div>
      <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/006928306b532fa129b70b8d4e4dc043738739cb902c1492f6d6a90910eccc7a?placeholderIfAbsent=true&apiKey=f16ea27e560e477eb55b2b3eba5f4472" alt="Star icon" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[13px]" />
    </div>
  );
};

export default Rating;