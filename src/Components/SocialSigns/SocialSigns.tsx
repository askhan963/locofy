import React from 'react';

interface SocialButtonProps {
  name: string;
  imageSrc: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ name, imageSrc }) => (
  <button className="flex flex-col flex-1 shrink items-center py-6 pr-3.5 pl-3.5 rounded-lg basis-[23px] bg-stone-50 min-w-[125px]">
    <img loading="lazy" src={imageSrc} alt={`${name} logo`} className="object-contain w-10 aspect-square" />
    <div className="mt-5">{name}</div>
  </button>
);
interface SocialSignsProps {
  check: boolean;
}
const SocialSignIn: React.FC<SocialSignsProps> = ({ check }) => {
  
  const socialButtons = [
    { name: 'Google', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5ed7fd3b3b94a6f3b3a4453f6df51c421096074fa72485456009d4c5b3c0cd4f?placeholderIfAbsent=true&apiKey=f16ea27e560e477eb55b2b3eba5f4472' },
    { name: 'Facebook', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/52457cf193fc3997bfda51c386ee53f1e6261ce17fb01f094c822e601a48f7cd?placeholderIfAbsent=true&apiKey=f16ea27e560e477eb55b2b3eba5f4472' },
    { name: 'Apple', imageSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9c9c0c62aefdf7977e6f10445d55eb506042c6d6793f17a669d51a27ccff754b?placeholderIfAbsent=true&apiKey=f16ea27e560e477eb55b2b3eba5f4472' },
  ];

  return (
    <div className="flex flex-col mt-10 w-full max-md:max-w-full">
      {
        check ? (
          <p className="tracking-wide leading-relaxed text-zinc-900 max-md:max-w-full">
            Sign in with
          </p>
        ) : (
          <p className="tracking-wide leading-relaxed text-zinc-900 max-md:max-w-full">
            Sign up with
          </p>
        )
      }
     
      <div className="flex flex-wrap gap-3.5 items-start mt-2.5 w-full tracking-wide text-center whitespace-nowrap text-neutral-500 max-md:max-w-full">
        {socialButtons.map((button) => (
          <SocialButton key={button.name} name={button.name} imageSrc={button.imageSrc} />
        ))}
      </div>
    </div>
  );
};

export default SocialSignIn;