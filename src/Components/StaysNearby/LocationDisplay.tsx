import React from 'react';

interface LocationDisplayProps {
  location: string;
}

const LocationDisplay: React.FC<LocationDisplayProps> = ({ location }) => {
  return (
    <div className="flex gap-1 items-center self-stretch my-auto text-xl tracking-wide leading-tight text-black min-w-[240px]">
      <p className="self-stretch my-auto">Stays nearby:</p>
      <p className="self-stretch my-auto font-semibold">{location}</p>
    </div>
  );
};

export default LocationDisplay;