'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="flex items-center text-white ml-5 sm:ml-20 p-5">
            <Image
              src="/FreeShipping.png"
              alt="Free shipping"
              width={30}
              height={30}
            />
            <p className="ml-2 text-sm sm:text-lg font-bold">
              Free shipping on orders over $150
            </p>
          </div>
          <ul className="flex space-x-4 sm:space-x-6 text-white text-sm sm:text-lg mr-5">
            <li className="cursor-pointer">Login</li>
            <li className="cursor-pointer">Register</li>
          </ul>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="p-5 flex items-center justify-between h-20">
        {/* Brand Logo */}
        <Image
          src="/brandlogonav.png"
          alt="brand logo"
          width={60}
          height={50}
          className="sm:w-20 sm:h-16"
        />

        {/* Hamburger Icon for mobile */}
        <div className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Image src="/hamburger-icon.png" alt="menu" width={30} height={30} />
        </div>

        {/* Navigation Links */}
        <ul className={`flex-col sm:flex-row flex items-center space-y-5 sm:space-y-0 sm:space-x-10 
            ${isOpen ? "flex" : "hidden"} sm:flex text-base sm:text-lg`}>
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">Pages</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Contact</li>
        </ul>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center ml-5 text-black">
          <Image
            src="/searchlogo.png"
            alt="search logo"
            width={25}
            height={25}
          />
          <input
            type="search"
            placeholder="Search..."
            className="ml-2 p-2 rounded-lg border border-gray-300 w-28 sm:w-40"
          />
        </div>
      </nav>
    </div>
  )
}

export default Navbar;



// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import { Comfortaa } from "next/font/google";

// const comfortaa = Comfortaa({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });

// const Navbar = () => {
//   return (
//     <div>
//       {/* Toolbar Section */}
//       <div className="relative w-full h-[50px] m-0">
//         {/* Toolbar Image */}
//         <Image
//           src="/toolbar.png"
//           alt="toolbar"
//           fill
//           className="object-cover w-full h-full"
//         />

//         {/* Free Shipping overlay */}
//         <div
//           className={`absolute top-0 left-0 w-full h-full flex items-center justify-between px-5 ${comfortaa.className}`}
//         >
//           <div className="flex items-center text-white ml-20">
//             <Image
//               src="/FreeShipping.png"
//               alt="Free shipping"
//               width={40}
//               height={40}
//             />
//             <p className="ml-3 text-lg font-bold">
//               Free shipping on orders over $150
//             </p>
//           </div>
//           <ul className="flex space-x-6 text-white text-lg">
//             <li className="cursor-pointer">Login</li>
//             <li className="cursor-pointer">Register</li>
//           </ul>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav className="m-10 flex items-center justify-between h-20">
//         <Image
//           src="/brandlogonav.png"
//           alt="brand logo"
//           width={80}
//           height={60}
//         />
//         <ul className="flex space-x-10 text-lg">
//           <li className="cursor-pointer">Home</li>
//           <li className="cursor-pointer">Shop</li>
//           <li className="cursor-pointer">Pages</li>
//           <li className="cursor-pointer">Blog</li>
//           <li className="cursor-pointer">Contact</li>
//         </ul>

//         {/* Search Bar */}
//         <div className="flex items-center ml-10 text-black">
//           <Image
//             src="/searchlogo.png"
//             alt="search logo"
//             width={40}
//             height={40}
//           />
//           <input
//             type="search"
//             name="search"
//             id="input"
//             placeholder="Search..."
//             className="ml-3 p-2 rounded-lg border border-black"
//           />
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar;
