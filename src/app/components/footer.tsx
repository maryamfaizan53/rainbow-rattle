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
    <div className={`relative w-full h-[570px] ${comfortaa.className}`}>
      <footer className="relative w-full h-full">
        <Image
          src="/footerbg.png"
          alt="background picture"
          fill
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 m-10 flex flex-col md:flex-row items-center justify-between">
          <Image
            src="/logo.png"
            alt="brand logo"
            width={80}
            height={60}
          />
          <p className="text-center md:text-left">
            Nunc consequat interdum varius sit amet mattis.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Image src="/Instagram.png" alt="Instagram icon" width={35} height={35} />
            <Image src="/Twitter.png" alt="Twitter icon" width={35} height={35} />
            <Image src="/Facebook.png" alt="Facebook icon" width={35} height={35} />
            <Image src="/Pinterest.png" alt="Pinterest icon" width={35} height={35} />
          </div>
        </div>

        <div className="absolute bottom-0 w-full flex flex-col md:flex-row justify-between p-10">
          <ul className="space-y-2">
            <h1 className="font-bold">My Account</h1>
            <li>Track my Order</li>
            <li>Terms of Use</li>
            <li>Wishlist</li>
            <li>Submit your Feedback</li>
          </ul>
          <ul className="space-y-2 mt-5 md:mt-0">
            <h1 className="font-bold">Customer Service</h1>
            <li>Monday to Friday</li>
            <li>10am - 6pm (New York time)</li>
            <li>Call us: 123-456-7868</li>
            <li>Email us: info@example.com</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
