import React from 'react';
import Image from './Image';
import Rating from './Rating';
import PriceInfo from './PriceInfo';
import PriceChart from './PriceChart';

interface PropertyCardProps {
  imageSrc: string;
  logoSrc: string;
  title: string;
  location: string;
  rating: number;
  price: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  imageSrc,
  logoSrc,
  title,
  location,
  rating,
  price
}) => {
  return (
    <article className="flex overflow-hidden relative flex-col bg-white rounded-xl max-w-[305px] min-w-[280px]">
      <Image src={imageSrc} alt={`${title} property`} className="object-contain z-0 w-full aspect-[1.02] min-h-[300px]" />
      <Image src={logoSrc} alt="Property logo" className="object-contain absolute top-12  z-0 aspect-square h-[30px] right-[10px] shadow-[0px_0px_8px_rgba(0,0,0,0.08)] w-[30px]" />
      <div className="flex z-0 flex-col p-4 w-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col flex-1 shrink self-stretch my-auto leading-none basis-0">
            <h2 className="text-base font-semibold tracking-wide text-zinc-900">{title}</h2>
            <p className="mt-1 text-sm tracking-wide text-neutral-500">{location}</p>
          </div>
          <Rating rating={rating} />
        </div>
        <div className="flex gap-5 items-center mt-3.5 w-full min-h-[28px]">
          <PriceInfo price={price} />
          <PriceChart />
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;