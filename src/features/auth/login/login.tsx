'use client'

import { LoginForm } from './components/loginForm';
import Image from "next/image";

export const LoginPage = () => {
  return (
    <div className="min-h-screen relative flex flex-col justify-center py-6 px-4 sm:py-12 sm:px-6 lg:px-8">
      <Image
        src="/images/authbg.png"
        alt="Authentication background"
        fill
        className="object-cover"
        sizes="100vw"
        quality={85}
      />
      <div className="w-full sm:mt-50 sm:mb-50 sm:mx-auto sm:max-w-md">
        <div className="bg-white py-6 sm:py-8 px-4 shadow rounded-lg sm:px-10">
          <div className="flex flex-col items-center">
            <h2 className="mt-4 sm:mt-6 text-center text-2xl sm:text-3xl font-extrabold text-[#034642]">
              Welcome Back
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-500">Login to your account</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
