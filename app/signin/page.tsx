import Image from "next/image";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center bg-white mb-[100px] mt-[30px] px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* Logo Section */}
        <div className="text-center">
          <Image
            className="mx-auto rounded-lg"
            src="/Profile.jpeg"
            alt="User profile image"
            width={90}
            height={90}
          />
          <h2 className="mx-auto mt-10 font-bold text-gray-900 text-center w-[186.5px] text-[18px]">
            YOUR ACCOUNT FOR EVERYTHING HAMZA
          </h2>
        </div>

        {/* Login Form */}
        <form className="space-y-6">
          {/* Email and Password Fields */}
          <div className="space-y-4">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="w-full h-10 appearance-none rounded-sm block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full h-10 appearance-none rounded-sm block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between flex-col sm:flex-row">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-gray-600 focus:ring-black border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 text-sm text-gray-600"
              >
                Keep me signed in
              </label>
            </div>
            <div className="mt-2 sm:mt-0">
              <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-700">
                Forgotten your password?
              </Link>
            </div>
          </div>

          {/* Privacy Policy */}
          <p className="text-center text-sm text-gray-600">
            By logging in, you agree to Hamza{"'"}s{" "}
            <Link href="#" className="font-normal hover:text-gray-700">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="#" className="font-normal">
              Terms of Use
            </Link>
            .
          </p>

          {/* Sign-In Button */}
          <button
            type="submit"
            className="mt-12 w-full h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Sign In
          </button>

          {/* Join Us */}
          <p className="text-center text-gray-600 text-sm">
            Not a Member?{" "}
            <Link href="/signup" className="font-medium text-black underline">
              Join Us.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
