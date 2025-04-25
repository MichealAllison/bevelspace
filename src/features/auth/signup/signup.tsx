'use client'

import { SignupForm } from './components/signupForm';

export const SignupPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center py-6 px-4 sm:py-12 sm:px-6 lg:px-8"
         style={{ backgroundImage: `url('/images/authbg.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-full mt-20 sm:mt-50 sm:mb-50 sm:mx-auto sm:max-w-md">
        <div className="bg-white py-6 sm:py-8 px-4 shadow rounded-lg sm:px-10">
          <div className="flex flex-col items-center">
            <h2 className="mt-4 sm:mt-6 text-center text-2xl sm:text-3xl font-extrabold text-[#034642]">
              Create your account
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-500">Welcome to our platform</p>
          </div>
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
