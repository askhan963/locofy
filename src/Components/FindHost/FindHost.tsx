import React from 'react';
import AccommodationSearch from '../AccommodationSearch/AccommodationSearch';


const FindHost: React.FC = () => {
  return (
    <section className="flex flex-col items-center px-8 pt-12 pb-8 w-full bg-zinc-50 bg-opacity-20 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-screen-xl max-md:max-w-full">
        <header className="flex flex-col self-start text-black max-md:max-w-full">
          <h1 className="text-4xl font-bold leading-none max-md:max-w-full">
            Find a <span className="text-teal-500">host</span> for every journey
          </h1>
          <p className="mt-2 text-xl font-light leading-tight max-md:max-w-full">
            Discover the best local rental properties that fits your every travel needs
          </p>
        </header>
        <AccommodationSearch/>
      </div>
    </section>
  );
};

export default FindHost;