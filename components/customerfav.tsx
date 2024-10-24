'use client'
import React from 'react'
import Image from 'next/image'
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Customerfav = () => {
  return (
    <div>
      <h1
        className={`text-center font-extrabold text-4xl mt-24 ${comfortaa.className}`}
      >
        Customer Loves
      </h1>
      <p className={`text-center font-extrabold ${comfortaa.className}`}>
        Popular products
      </p>
      <div className="flex flex-col md:flex-row justify-around items-center my-5 mt-20 gap-4">
        <Image src="/gallery1.png" alt="gallery 1" width={295} height={398} className="w-full md:w-auto" />
        <Image src="/gallery2.png" alt="gallery 2" width={295} height={398} className="w-full md:w-auto" />
        <Image src="/gallery3.png" alt="gallery 3" width={295} height={398} className="w-full md:w-auto" />
        <Image src="/gallery4.png" alt="gallery 4" width={295} height={398} className="w-full md:w-auto" />
      </div>
    </div>
  )
}

export default Customerfav;
