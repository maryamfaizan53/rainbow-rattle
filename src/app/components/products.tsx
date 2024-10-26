 "use client";
import React from "react";
import Image from "next/image";
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Product Card */}
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden relative">
              <div className="relative h-48 md:h-56 w-full">
                <Image
                  src={`/i${index + 1}.png`} // Adjust path as necessary
                  alt={`Product ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="p-4"
                />
                {index % 3 === 0 && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    SALE
                  </span>
                )}
              </div>
              <div className="p-4">
                <h2 className="text-gray-800 text-lg font-bold mb-1">
                  Magna etiam tempor orci
                </h2>
                <p className="text-green-600 font-bold text-lg">$29.00 <span className="text-gray-500 line-through">$39.00</span></p>
                <div className="text-yellow-500 mt-2">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
