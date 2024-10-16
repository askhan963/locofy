import React from "react";

const SearchButton: React.FC = () => {
  return (
    <button
      type="submit"
      className="flex overflow-hidden gap-2.5 justify-center items-center px-8 py-4 my-auto text-base font-medium tracking-wide leading-loose text-center text-white whitespace-nowrap bg-teal-500 rounded shadow-sm w-auto max-md:w-full max-md:justify-center max-md:px-5" // Centered on mobile
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b5dca557fe7214984ddd96133bf56f7c7d1a81341a31861eeca9492f2acd530?placeholderIfAbsent=true&apiKey=f16ea27e560e477eb55b2b3eba5f4472"
        alt="Search icon"
        className="object-contain shrink-0 aspect-square w-[19px]"
      />
      <span>Search</span>
    </button>
  );
};

export default SearchButton;
