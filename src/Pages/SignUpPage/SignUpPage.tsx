import React from 'react';
import Header from '../../Components/Header/Header';
import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import SocialSigns from '../../Components/SocialSigns/SocialSigns';
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-neutral-50">
      <Header />
      <main className="flex flex-col justify-center items-center w-full min-h-[1036px] max-md:max-w-full">
        <div className="flex overflow-hidden gap-2.5 items-start max-w-full rounded-lg w-[589px]">
          <div className="flex flex-col flex-1 shrink px-12 py-10 w-full bg-white basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
            <h1 className="w-full text-2xl font-bold tracking-wide text-zinc-900 max-md:max-w-full">
              Sign Up
            </h1>
            <SignUpForm />
            <div className="mt-10 w-full border-2 border-gray-200 border-solid min-h-[1px] max-md:max-w-full" />
            <SocialSigns check={true}  />
            <p className="self-start mt-10 tracking-wide leading-relaxed text-center text-zinc-900 max-md:max-w-full">
          I already have an account. <Link to="/login" className="text-teal-500">Login</Link>
        </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUpPage;