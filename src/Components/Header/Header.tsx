import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col justify-center items-center px-5 py-3.5 w-full text-sm text-black bg-white border-b border-slate-200 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-screen-xl max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dfe52683a94fce67d7b92ae89d2ff34bec6939cbd50000ea132d3e9f475b6ed?placeholderIfAbsent=true&apiKey=f16ea27e560e477eb55b2b3eba5f4472"
          alt="Company Logo"
          className="object-contain shrink-0 self-stretch my-auto aspect-[3.92] w-[157px]"
        />
        <nav className="flex gap-8 items-start self-stretch my-auto">
          <a href="#home">Home</a>
          <a href="#stays">Stays</a>
          <a href="#become-host">Become a host</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;