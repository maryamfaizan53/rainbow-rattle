'use client'
import React from 'react'
import Image from 'next/image'
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Navbar = () => {
  return (
    <div>
      {/* Toolbar Section */}
      <div className="relative w-full h-[50px] m-0">
        {/* Toolbar Image */}
        <Image
          src="/toolbar.png"
          alt="toolbar"
          fill
          className="object-cover w-full h-full"
        />

        {/* Free Shipping overlay */}
        <div
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-between px-5 ${comfortaa.className}`}
        >
          <div className="flex items-center text-white ml-20">
            <Image
              src="/FreeShipping.png"
              alt="Free shipping"
              width={40}
              height={40}
            />
            <p className="ml-3 text-lg font-bold">
              Free shipping on orders over $150
            </p>
          </div>
          <ul className="flex space-x-6 text-white text-lg">
            <li className="cursor-pointer">Login</li>
            <li className="cursor-pointer">Register</li>
          </ul>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="m-10 flex items-center justify-between h-20">
        <Image
          src="/brandlogonav.png"
          alt="brand logo"
          width={80}
          height={60}
        />
        <ul className="flex space-x-10 text-lg">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">Pages</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        {/* Search Bar */}
        <div className="flex items-center ml-10 text-black">
          <Image
            src="/searchlogo.png"
            alt="search logo"
            width={40}
            height={40}
          />
          <input
            type="search"
            name="search"
            id="input"
            placeholder="Search..."
            className="ml-3 p-2 rounded-lg border border-black"
          />
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
