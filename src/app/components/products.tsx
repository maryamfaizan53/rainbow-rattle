'use client'
import React from 'react'
import Image from 'next/image'
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Products = () => {
  return (
    <div>
      {/* Top Picks Section */}
      <div className="text-center mt-24">
        <h1 className={`font-extrabold text-4xl ${comfortaa.className}`}>
          Top Picks For Your Little Ones
        </h1>
        
        {/* Navigation Links */}
        <ul className={`flex justify-center gap-16 mt-10 text-lg ${comfortaa.className}`}>
          <li className="cursor-pointer">Featured</li>
          <li className="cursor-pointer">Best Seller</li>
          <li className="cursor-pointer">New Arrivals</li>
        </ul>
      </div>

      {/* Products Grid */}
      <section className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product Card 1 */}
          <div className="relative text-white rounded-lg overflow-hidden h-[400px] ">
            <Image
              src="/p1.png"
              alt="1st product"
              layout="fill"
              objectFit="center"
              className="absolute inset-0 z-0 p-2"
            />
            <div className="relative z-10 p-6 bg-black bg-opacity-60">
              <h2 className="text-xl font-bold mb-2">Special Offer</h2>
              <p className="text-sm">Discount 60% off</p>
              <button className="bg-white text-black px-4 py-2 mt-4 rounded-full hover:bg-gray-800">
                Shop Now
              </button>
            </div>
          </div>

          {/* Repeat Product Cards with Same Dimensions */}
          <div className="relative text-white rounded-lg overflow-hidden h-[400px]">
            <Image
              src="/p2.png"
              alt="2nd product"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-0 p-2"
            />
            <div className="relative z-10 p-6 bg-black bg-opacity-60">
              <h2 className="text-xl font-bold mb-2">Casual Comfortwear</h2>
              <a href="#" className="text-sm font-semibold mt-2 hover:underline">
                Learn More &rarr;
              </a>
            </div>
          </div>

          {/* Add more cards as needed */}
          {/* Example with Placeholder Images */}
          <div className="relative text-white rounded-lg overflow-hidden h-[400px]">
            <Image
              src="/p3.png"
              alt="3rd product"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-0 p-2"
            />
            <div className="relative z-10 p-6 bg-black bg-opacity-60">
              <h2 className="text-xl font-bold mb-2">Stylish Outfits</h2>
              <a href="#" className="text-sm font-semibold mt-2 hover:underline">
                Learn More &rarr;
              </a>
            </div>
          </div>

          <div className="relative text-white rounded-lg overflow-hidden h-[400px]">
            <Image
              src="/p4.png"
              alt="4th product"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-0 p-2"
            />
            <div className="relative z-10 p-6 bg-black bg-opacity-60">
              <h2 className="text-xl font-bold mb-2">Trendy Collection</h2>
              <a href="#" className="text-sm font-semibold mt-2 hover:underline">
                Learn More &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products;

