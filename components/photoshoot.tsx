'use client'
import React from 'react'
import Image from 'next/image'
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Photoshoot = () => {
  return (
    <div> 
      {/* Recent Photoshoots */}
      <div className="text-center mt-24">
        <h1 className={`font-extrabold text-4xl ${comfortaa.className}`}>
          Recent Photoshoots
        </h1>
        <p className={`font-extrabold mt-4 ${comfortaa.className}`}>
          Check Gallery
        </p>
        
        {/* Photo Gallery */}
        <div className="flex justify-around mt-20">
          <Image src="/ps1.png" alt="photoshoot 1" width={360} height={360} />
          <Image src="/ps2.png" alt="photoshoot 2" width={360} height={360} />
          <Image src="/ps3.png" alt="photoshoot 3" width={360} height={360} />
          <Image src="/ps4.png" alt="photoshoot 4" width={360} height={360} />
        </div>
      </div>
    </div>
  )
}

export default Photoshoot;
