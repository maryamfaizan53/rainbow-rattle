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
    <footer className={`relative flex flex-col md:flex-row justify-between items-start w-full h-[570px] px-10 py-12 ${comfortaa.className}`}>
      {/* Background Image */}
      <Image
        src="/footerbg.png"
        alt="background picture"
        fill
        className="object-cover w-full h-full absolute inset-0 -z-10"
      />
      
      {/* Left Section: Logo and Social Media */}
      <div className="flex flex-col items-start m-12 mt-20 md:w-1/3 space-y-6">
        <Image
          src="/logo2.png"
          alt="brand logo"
          width={250}
          height={400}
        />
        <p className="text-left text-lg leading-relaxed">
          Nunc consequat interdum varius sit amet mattis.
        </p>
        <div className="flex space-x-4">
          <Image src="/Instagram.png" alt="Instagram icon" width={35} height={35} />
          <Image src="/Twitter.png" alt="Twitter icon" width={35} height={35} />
          <Image src="/Facebook.png" alt="Facebook icon" width={35} height={35} />
          <Image src="/Pinterest.png" alt="Pinterest icon" width={35} height={35} />
        </div>
      </div>

      {/* Middle Section: My Account */}
      <div className="md:w-1/3 m-12 mt-20 space-y-6">
        <ul className="space-y-2">
          <h1 className="font-bold text-lg">My Account</h1>
          <li>Track my Order</li>
          <li>Terms of Use</li>
          <li>Wishlist</li>
          <li>Submit Your Feedback</li>
        </ul>
      </div>

      {/* Right Section: Customer Service */}
      <div className="md:w-1/3 m-12 mt-20 space-y-6">
        <ul className="space-y-2">
          <h1 className="font-bold text-lg">Customer Service</h1>
          <li>Monday to Friday</li>
          <li>10am - 6pm (New York time)</li>
          <li>Call us: <a href="tel:123-456-7868" className="text-blue-500">123-456-7868</a></li>
          <li>Email us: <a href="mailto:info@example.com" className="text-blue-500">info@example.com</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
