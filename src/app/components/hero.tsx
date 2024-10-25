'use client'
import React from 'react'
import Image from 'next/image'
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[570px] mt-2">
        <Image
          src="/hero.png"
          alt="hero picture"
          fill
          className="object-cover  object-center w-full h-full"
        />

        {/* Overlay Content on Hero */}
        <div className={`absolute top-32 right-2 text-black ${comfortaa.className}`}>
          <Image
            src="/play,learnandgrow.png"
            alt="Play, Learn, and Grow"
            width={500}
            height={300}
          />
          <p className="mt-4 text-lg">
            Crafting smiles with every toy, made for learning,
            <br /> fun, and growth
          </p>
          <button className="mt-7 bg-yellow-300 px-6 py-3 rounded-3xl text-lg">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
