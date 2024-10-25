'use client'
import React from 'react'
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Newsletter = () => {
  return (
    <div className="text-center mt-24">
      {/* Newsletter Header */}
      <h1 className={`font-extrabold text-4xl ${comfortaa.className}`}>
        Newsletter
      </h1>
      
      {/* Newsletter Description */}
      <p className={`font-extrabold mt-5 ${comfortaa.className}`}>
        Get 15% off your first purchase! Plus, be the first to know about sales, new product launches, and exclusive offers!
      </p>
      
      {/* Email Input and Join Button */}
      <div className="mt-8 flex justify-center space-x-3">
        <input
          type="email"
          name="Email"
          id="input"
          placeholder="Enter Your Email"
          className="p-2 rounded-lg border border-black"
        />
        <button className="bg-cyan-700 text-white rounded-lg p-3">
          Join
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
