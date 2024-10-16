import React from 'react';

interface PriceInfoProps {
  price: number;
}

const PriceInfo: React.FC<PriceInfoProps> = ({ price }) => {
  return (
    <div className="flex flex-1 shrink gap-0.5 items-center self-stretch my-auto whitespace-nowrap basis-0">
      <div className="self-stretch my-auto text-xl font-semibold tracking-wide leading-none text-zinc-900">
        ${price}
      </div>
      <div className="self-stretch my-auto text-sm tracking-wide leading-none text-neutral-500">
        /night
      </div>
    </div>
  );
};

export default PriceInfo;