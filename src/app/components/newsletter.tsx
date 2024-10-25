'use client'
import React from 'react'
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Newsletter = () => {
  return (
    <div className="text-center m-24">
      {/* Newsletter Header */}
      <h1 className={`font-extrabold weight-800 text-4xl ${comfortaa.className}`}>
        <b>Newsletter</b>
      </h1>
      
      {/* Newsletter Description */}
      <p className={`font-extrabold mt-5 ${comfortaa.className}`}>
       <b> Get 15% off your first purchase! Plus, be the first to know about sales,<br />
         new product launches, and exclusive offers!</b> 
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
        <button className="bg-cyan-700 text-white rounded-2xl p-3 px-6">
          Join
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
