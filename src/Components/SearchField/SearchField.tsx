import React, { useState } from "react";

interface SearchFieldProps {
  label: string;
  onSearchChange: (value: string) => void; // Pass input value to parent component
}

const SearchField: React.FC<SearchFieldProps> = ({ label, onSearchChange }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onSearchChange(e.target.value); // Update parent component with the input value
  };

  return (
    <div className="flex flex-wrap flex-1 shrink gap-2.5 items-center self-stretch px-3 py-4 my-auto text-sm leading-loose text-black whitespace-nowrap bg-white rounded border border-solid basis-9 border-zinc-300 min-w-[240px] max-md:max-w-full">
      <label htmlFor="accommodation-search" className="flex-shrink-0 my-auto text-sm">
        {label}
      </label>
      <input
        type="text"
        id="accommodation-search"
        className="flex-1 p-2 text-black border border-gray-300 rounded outline-none" // Style for input field
        value={searchValue}
        onChange={handleInputChange} // Handle input change
        aria-label={label}
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/79a90092424f9aa6faa48b55462ff7b07e8f2e2d278d2fcc44759eabb25f1f01?placeholderIfAbsent=true&apiKey=f16ea27e560e477eb55b2b3eba5f4472"
        alt=""
        className="object-contain shrink-0 aspect-square w-[25px]"
      />
    </div>
  );
};

export default SearchField;
