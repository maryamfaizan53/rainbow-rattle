'use client'
import React from 'react'
import Image from 'next/image'
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const CustomerCare = () => {
  return (
    <div className={`p-4 mt-20 ${comfortaa.className}`}>
      
      <div className="flex flex-col md:flex-row justify-around items-center gap-4">
        <Image src="/Frame1.png" alt="customer care service" width={400} height={188} className="" />
        <Image src="/Frame3.png" alt="customer care service" width={400} height={188} className="" />
        <Image src="/Frame2.png" alt="customer care service" width={400} height={188} className="" />
      </div>
    </div>
  );
}

export default CustomerCare;
