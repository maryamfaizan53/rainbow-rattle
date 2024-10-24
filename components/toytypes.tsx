'use client'
import React from 'react'
import Image from 'next/image'
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
    subsets: ["latin"],
    weight: ["400", "700"],
});

const Toytypes = () => {
  return (
    <div>
      {/* Toy Types Section */}
      <div className="text-center mt-24">
        <h1 className={`font-extrabold text-4xl ${comfortaa.className}`}>
          Find The Perfect Toy
        </h1>
        <p className={`font-extrabold mt-4 ${comfortaa.className}`}>
          Our Collections
        </p>

        {/* Toy Categories */}
        <div className="flex justify-around m-2 mt-20">
          <Image src="/cat1.png" alt="Category 1" width={150} height={150} />
          <Image src="/cat2.png" alt="Category 2" width={150} height={150} />
          <Image src="/cat3.png" alt="Category 3" width={150} height={150} />
          <Image src="/cat4.png" alt="Category 4" width={150} height={150} />
          <Image src="/cat5.png" alt="Category 5" width={150} height={150} />
        </div>
      </div>
    </div>
  );
};

export default Toytypes;
