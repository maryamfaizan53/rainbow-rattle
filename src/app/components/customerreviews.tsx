'use client'
import React from 'react'
import Image from 'next/image'
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Customerreviews = () => {
  return (
    <div className={`p-4 mt-20 ${comfortaa.className}`}>
      <div className="flex flex-col md:flex-row justify-around items-center gap-4">
        <Image
          src="/review1.png"
          alt="client reviews"
          width={400}
          height={216}
          className="w-full md:w-auto"
        />
        <Image
          src="/review2.png"
          alt="client reviews"
          width={400}
          height={216}
          className="w-full md:w-auto"
        />
        <Image
          src="/review3.png"
          alt="client reviews"
          width={400}
          height={216}
          className="w-full md:w-auto"
        />
      </div>
    </div>
  );
}

export default Customerreviews;
