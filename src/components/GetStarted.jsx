import React from "react";
import userImg from "../assets/user.png";
import packageImg from "../assets/package.png";
import rocketImg from "../assets/rocket.png";

const GetStarted = () => {
  return (
    <div className="py-16 px-5 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-6xl font-bold">
          Get Started in 3 Steps
        </h1>
        <p className="text-lg md:text-xl text-gray-500 py-5 max-w-2xl mx-auto">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="relative flex flex-col items-center text-center p-8 bg-white shadow-xl rounded-3xl border border-gray-100 transition-transform hover:scale-105 duration-300">
          <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-purple-600 text-white rounded-full font-bold text-lg shadow-md">
            1
          </div>
          <div className="mb-6">
            <img
              src={userImg}
              alt="Create Account"
              className="w-24 h-24 object-contain"
            />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
            <p className="text-gray-500 leading-relaxed">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative flex flex-col items-center text-center p-8 bg-white shadow-xl rounded-3xl border border-gray-100 transition-transform hover:scale-105 duration-300">
          <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-purple-600 text-white rounded-full font-bold text-lg shadow-md">
            2
          </div>
          <div className="mb-6">
            <img
              src={packageImg}
              alt="Choose Products"
              className="w-24 h-24 object-contain"
            />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-800">
              Choose Products
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative flex flex-col items-center text-center p-8 bg-white shadow-xl rounded-3xl border border-gray-100 transition-transform hover:scale-105 duration-300">
          <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-purple-600 text-white rounded-full font-full font-bold text-lg shadow-md">
            3
          </div>
          <div className="mb-6">
            <img
              src={rocketImg}
              alt="Start Creating"
              className="w-24 h-24 object-contain"
            />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-800">Start Creating</h2>
            <p className="text-gray-500 leading-relaxed">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
