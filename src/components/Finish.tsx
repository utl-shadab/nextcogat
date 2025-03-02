"use client";

import Link from "next/link";

const Finish = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      {/* Home Page Button - Top Right */}
      <div className="absolute top-6 right-6">
        <Link
          href="/"
          className="px-6 py-2 border border-red-500 text-red-500 text-sm rounded-md hover:bg-red-500 hover:text-white transition"
        >
          Go to Home Page
        </Link>
      </div>

      {/* Dummy Text */}
      <p className="text-gray-500 text-sm">This is a dummy page and will be replaced with the User Landing Page</p>

      {/* Congratulations Message */}
      <h2 className="text-3xl md:text-5xl font-bold text-red-500 mt-6">Congratulations!</h2>
      <p className="text-gray-700 mt-2">You are now registered with CooGT.ai</p>

      {/* Go to User Page Button */}
      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-red-500 text-white text-sm md:text-base font-medium rounded-md hover:bg-red-600 transition">
          Go to User Page
        </button>
      </Link>
    </div>
  );
};

export default Finish;
