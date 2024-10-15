import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center px-8 py-3 w-full text-sm font-light leading-tight text-black border-t border-slate-200 max-md:px-5 max-md:max-w-full">
      <div className="flex justify-between items-start w-full max-w-screen-xl min-h-[17px] max-md:max-w-full">
        <div className="flex flex-wrap flex-1 shrink gap-10 justify-between items-start w-full max-w-screen-xl basis-0 min-w-[240px] max-md:max-w-full">
          <p>© 2023 Localhost, Inc. All Rights Reserved</p>
          <nav className="flex gap-5 items-start min-w-[240px]">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#contact">Contact us</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;