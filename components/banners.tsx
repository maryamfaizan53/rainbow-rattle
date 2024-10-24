'use client'
import React from 'react'
import Image from 'next/image'
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const Banners = () => {
  return (
    <div className={`p-4 ${comfortaa.className}`}>
      {/* Banners */}
      <div className="flex flex-col md:flex-row items-center justify-around w-full gap-4">
        <div className="w-full md:w-1/2">
          <Image
            src="/banner1.png"
            alt="Discover the Joy of Play"
            height={338}
            width={610}
            className="w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/banner2.png"
            alt="Eco-Friendly Toys"
            height={338}
            width={610}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Banners;
