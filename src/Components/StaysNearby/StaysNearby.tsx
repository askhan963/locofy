import React from 'react';
import LocationDisplay from './LocationDisplay';
import IconButton from './IconButton';

interface StaysNearbyProps {
  location: string;
}

const StaysNearby: React.FC<StaysNearbyProps> = ({ location }) => {
  return (
    <header className="flex flex-wrap gap-10 justify-between items-center pt-3.5 w-full  max-md:max-w-full">
      <LocationDisplay location={location} />
      <nav className="flex items-center self-stretch px-1.5 py-1.5 my-auto bg-white rounded-lg border border-solid border-slate-200">
        <IconButton
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b62a6b12fb82dd80de1a0f987289943adeed38e60c51940212b8f4c2735d1ef?placeholderIfAbsent=true&apiKey=f16ea27e560e477eb55b2b3eba5f4472"
          alt="First icon"
          className="bg-teal-500"
        />
        <IconButton
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/16d3e47c5380640413f2cba5869fdec37a53c431c509473c1b5abc1af98ca42c?placeholderIfAbsent=true&apiKey=f16ea27e560e477eb55b2b3eba5f4472"
          alt="Second icon"
        />
      </nav>
    </header>
  );
};

export default StaysNearby;