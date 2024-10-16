import React from 'react';
import Image from './Image';

const PriceChart: React.FC = () => {
  return (
    <div className="flex gap-1.5 items-center self-stretch my-auto text-sm tracking-wide leading-none text-teal-500">
      <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/70cb10404329ed28cd576a12d76754a4f8dc3c32291bf930d47aab03e21a84dc?placeholderIfAbsent=true&apiKey=f16ea27e560e477eb55b2b3eba5f4472" alt="Price chart icon" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]" />
      <div className="self-stretch my-auto">Price chart</div>
    </div>
  );
};

export default PriceChart;