import React from 'react';

interface InputProps {
  placeholder: string;
  type: string;
  iconSrc: string;
}

const Input: React.FC<InputProps> = ({ placeholder, type, iconSrc }) => (
  <div className="flex overflow-hidden md:flex-wrap gap-2.5 items-center py-4 pr-5 pl-5 w-full bg-white rounded border border-solid mb-4 border-zinc-300 min-h-[51px] max-md:max-w-full">
    <input
      type={type}
      placeholder={placeholder}
      className="flex-1 shrink self-stretch text-xl py-2 my-auto basis-0 focus:outline-none max-md:max-w-full"
      aria-label={placeholder}
    />
    <img loading="lazy" src={iconSrc} alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square" />
  </div>
);

const SignUpForm: React.FC = () => {
  return (
    <form className="flex flex-col flex-1 shrink px-12 sm:px-6 py-10 w-full bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <h2 className="w-full text-2xl font-bold tracking-wide text-zinc-900 max-md:max-w-full">
        Create Account
      </h2>
      <div className="flex flex-col mt-6 w-full text-base max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex flex-col w-full tracking-wide text-neutral-500 max-md:max-w-full">
            <Input placeholder="Email address" type="email" iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/91c4578e7820cb4c080418dddc094cdafae0433d786fd4bf4513063a9df1bc1d?placeholderIfAbsent=true&apiKey=f16ea27e560e477eb55b2b3eba5f4472" />
            <Input placeholder="Password" type="password" iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/28ed1a229e203085baf01b89aafa65fa26fd1b8e9702720a2cfba1a19e945dba?placeholderIfAbsent=true&apiKey=f16ea27e560e477eb55b2b3eba5f4472" />
            <Input placeholder="Confirm password" type="password" iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2a4cafcc9291fd508484998e13ca34c2413bc51a7c883d376694d34114ff9609?placeholderIfAbsent=true&apiKey=f16ea27e560e477eb55b2b3eba5f4472" />
          </div>
          <button className="overflow-hidden gap-2.5 self-stretch px-5 py-3.5 mt-7 w-40 max-w-full font-semibold tracking-wide leading-loose text-center text-white bg-teal-500 rounded-md shadow-sm">
            Sign up
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;