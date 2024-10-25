'use client'
import React from 'react'
import Image from 'next/image'
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Footer = () => {
  return (
    <footer className={`relative flex flex-col md:flex-row justify-between items-start w-full px-6 md:px-10 py-12 space-y-12 md:space-y-0 ${comfortaa.className}`}>
      {/* Background Image */}
      <Image
        src="/footerbg.png"
        alt="background picture"
        fill
        className="object-cover w-full h-full absolute inset-0 -z-10"
      />
      
      {/* Left Section: Logo and Social Media */}
      <div className="flex flex-col items-start space-y-4 md:w-1/3">
        <Image
          src="/logo2.png"
          alt="brand logo"
          width={200}
          height={80}
          className="w-[150px] md:w-[250px]"
        />
        <p className="text-left text-sm md:text-base leading-relaxed">
          Nunc consequat interdum varius sit amet mattis.
        </p>
        <div className="flex space-x-4">
          <Image src="/Instagram.png" alt="Instagram icon" width={30} height={30} className="w-8 h-8" />
          <Image src="/Twitter.png" alt="Twitter icon" width={30} height={30} className="w-8 h-8" />
          <Image src="/Facebook.png" alt="Facebook icon" width={30} height={30} className="w-8 h-8" />
          <Image src="/Pinterest.png" alt="Pinterest icon" width={30} height={30} className="w-8 h-8" />
        </div>
      </div>

      {/* Middle Section: My Account */}
      <div className="space-y-4 md:w-1/3">
        <h1 className="font-bold text-lg md:text-xl">My Account</h1>
        <ul className="space-y-2 text-sm md:text-base">
          <li>Track my Order</li>
          <li>Terms of Use</li>
          <li>Wishlist</li>
          <li>Submit Your Feedback</li>
        </ul>
      </div>

      {/* Right Section: Customer Service */}
      <div className="space-y-4 md:w-1/3">
        <h1 className="font-bold text-lg md:text-xl">Customer Service</h1>
        <ul className="space-y-2 text-sm md:text-base">
          <li>Monday to Friday</li>
          <li>10am - 6pm (New York time)</li>
          <li>
            Call us: <a href="tel:123-456-7868" className="text-blue-500">123-456-7868</a>
          </li>
          <li>
            Email us: <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

