import React from 'react';

const SignInForm: React.FC = () => {
  return (
    <form className="flex flex-col mt-6 w-full text-base max-md:max-w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex flex-col w-full tracking-wide text-neutral-500 max-md:max-w-full">
          <div className="flex overflow-hidden flex-wrap gap-2.5 items-center py-4 pr-5 pl-5 w-full bg-white rounded border border-solid border-zinc-300 min-h-[51px] max-md:max-w-full">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="flex-1 shrink py-2 text-xl focus:outline-none self-stretch my-auto basis-0 max-md:max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/edba69c9f88672befbbf8e67c98094107d87d3a529cd7b79db399533a4fb7a39?placeholderIfAbsent=true&apiKey=f16ea27e560e477eb55b2b3eba5f4472"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
          </div>
          <div className="flex overflow-hidden flex-wrap gap-2.5 items-center py-4 pr-5 pl-5 mt-4 w-full whitespace-nowrap bg-white rounded border border-solid border-zinc-300 min-h-[51px] max-md:max-w-full">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="flex-1 shrink py-2 text-xl focus:outline-none self-stretch my-auto basis-0 max-md:max-w-full"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2350f5c5a87d3cde30d83e860404d9fb6106ade9c3a97fcc26c3054dc3b41071?placeholderIfAbsent=true&apiKey=f16ea27e560e477eb55b2b3eba5f4472"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
            />
          </div>
        </div>
        <button
          type="submit"
          className="overflow-hidden gap-2.5 self-stretch px-5 py-3.5 mt-7 w-40 max-w-full font-semibold tracking-wide leading-loose text-center text-white bg-teal-500 rounded-md shadow-sm"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default SignInForm;