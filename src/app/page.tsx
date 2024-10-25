"use client";
// import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Toytypes from "./components/toytypes";
import Products from "./components/products";
import Banners from "./components/banners";
import Customerfav from "./components/customerfav";
import CustomerCare from "./components/customerCare";
 import Footer from "./components/footer";
import Customerreviews from "./components/customerreviews";
import Photoshoot from "./components/photoshoot";
import Newsletter from "./components/newsletter";
// import Head from "next/head";  // Import Head for SEO

const Home = () => {
  return (
    <>
      {/* <Head>
        <title>Rianbow Rattle</title>
        <meta name="description" content="A multi toys store" />
        <meta name="keywords" content="toys, products, shop, kids" />
      </Head> */}
      <Navbar />
      <Hero />
      <Toytypes />
      <Products />
      <Banners />
      <Customerfav />
      <Customerreviews />
      <Photoshoot />
      <CustomerCare />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;

// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import { Comfortaa } from 'next/font/google';

// // Initialize the Comfortaa font
// const comfortaa = Comfortaa({
//   subsets: ['latin'],
//   weight: ['400', '700'],
// });

// const Home = () => {
//   return (
//     <>
//       {/* Toolbar with Free Shipping overlay */}
//       <div className="relative w-full h-[50px] m-0">
//         {/* Toolbar Image */}
//         <Image
//           src="/toolbar.png"
//           alt="toolbar"
//           layout="fill"
//           objectFit="cover"
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
//         <Image src="/brandlogonav.png" alt="brand logo" width={80} height={60} />
//         <ul className="flex space-x-10 text-lg">
//           <li className="cursor-pointer">Home</li>
//           <li className="cursor-pointer">Shop</li>
//           <li className="cursor-pointer">Pages</li>
//           <li className="cursor-pointer">Blog</li>
//           <li className="cursor-pointer">Contact</li>
//         </ul>

//         {/* Search Bar */}
//         <div className="flex items-center ml-10 text-black">
//           <Image src="/searchlogo.png" alt="search logo" width={40} height={40} />
//           <input
//             type="search"
//             name="search"
//             id="input"
//             placeholder="Search..."
//             className="ml-3 p-2 rounded-lg border border-black"
//           />
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="relative w-full h-[570px]">
//         <Image
//           src="/hero.png"
//           alt="hero picture"
//           layout="fill"
//           objectFit="cover"
//           className="w-full h-full"
//         />

//         {/* Overlay Content on Hero */}
//         <div
//           className={`absolute top-32 right-2 text-black ${comfortaa.className}`}
//         >
//           <Image
//             src="/play,learnandgrow.png"
//             alt="Play, Learn, and Grow"
//             width={500}
//             height={300}
//           />
//           <p className="mt-4 text-lg">
//             Crafting smiles with every toy, made for learning,
//             <br /> fun, and growth
//           </p>
//           <button className="mt-7 bg-yellow-300 px-6 py-3 rounded-3xl text-lg">
//             Shop Now
//           </button>
//         </div>
//       </div>

//       {/* Collections Section */}
//       <div>
//         <h1
//           className={`text-center font-extrabold text-4xl mt-24 ${comfortaa.className}`}
//         >
//           Find The Perfect Toy
//         </h1>
//         <p className={`text-center font-extrabold ${comfortaa.className}`}>
//           Our Collections
//         </p>
//         <div className="flex justify-around m-2 mt-20">
//           <Image src="/cat1.png" alt="category 1" width={150} height={150} />
//           <Image src="/cat2.png" alt="category 2" width={150} height={150} />
//           <Image src="/cat3.png" alt="category 3" width={150} height={150} />
//           <Image src="/cat4.png" alt="category 4" width={150} height={150} />
//           <Image src="/cat5.png" alt="category 5" width={150} height={150} />
//         </div>
//       </div>

//       {/* Top Picks Section */}
//       <div>
//         <h1
//           className={`text-center font-extrabold text-4xl mt-24 ${comfortaa.className}`}
//         >
//           Top Picks For Your Little Ones
//         </h1>
//         <ul className={`flex text-center justify-center gap-16 mt-10 ${comfortaa.className}`}>
//           <li>Featured</li>
//           <li>Best seller</li>
//           <li>New arrivals</li>
//         </ul>

//         {/* Product Grid */}
//         <div className="grid grid-cols-4 gap-y-10 justify-evenly m-32 align-middle gap-6">
//           <Image src="/p1.png" alt="product 1" width={295} height={398} />
//           <Image src="/p2.png" alt="product 2" width={295} height={398} />
//           <Image src="/p3.png" alt="product 3" width={295} height={398} />
//           <Image src="/p4.png" alt="product 4" width={295} height={398} />
//           <Image src="/p5.png" alt="product 5" width={295} height={398} />
//           <Image src="/p6.png" alt="product 6" width={295} height={398} />
//           <Image src="/p7.png" alt="product 7" width={295} height={398} />
//           <Image src="/p8.png" alt="product 8" width={295} height={398} />
//         </div>
//       </div>

//       {/* Banners */}
//       <div className="flex flex-row items-center justify-around w-full gap-4">
//         <div>
//           <Image
//             src="/banner1.png"
//             alt="Discover the Joy of Play"
//             height={338}
//             width={610}
//           />
//         </div>
//         <div>
//           <Image src="/banner2.png" alt="Eco-Friendly Toys" height={338} width={610} />
//         </div>
//       </div>

//       {/* Popular Products Gallery */}
//       <div>
//         <h1 className={`text-center font-extrabold text-4xl mt-24 ${comfortaa.className}`}>
//           Customer Loves
//         </h1>
//         <p className={`text-center font-extrabold ${comfortaa.className}`}>Popular products</p>
//         <div className="flex justify-around my-5 mt-20">
//           <Image src="/gallery1.png" alt="gallery 1" width={295} height={398} />
//           <Image src="/gallery2.png" alt="gallery 2" width={295} height={398} />
//           <Image src="/gallery3.png" alt="gallery 3" width={295} height={398} />
//           <Image src="/gallery4.png" alt="gallery 4" width={295} height={398} />
//         </div>
//       </div>

//       {/* Customer Reviews */}
//       <div className="flex justify-around my-5 mt-20">
//         <Image src="/review1.png" alt="client review 1" width={400} height={216} />
//         <Image src="/review2.png" alt="client review 2" width={400} height={216} />
//         <Image src="/review3.png" alt="client review 3" width={400} height={216} />
//       </div>

//       {/* Recent Photoshoots */}
//       <div>
//         <h1 className={`text-center font-extrabold text-4xl mt-24 ${comfortaa.className}`}>
//           Recent Photoshoots
//         </h1>
//         <p className={`text-center font-extrabold ${comfortaa.className}`}>Check Gallery</p>
//         <div className="flex justify-around mt-20">
//           <Image src="/ps1.png" alt="photoshoot 1" width={360} height={360} />
//           <Image src="/ps2.png" alt="photoshoot 2" width={360} height={360} />
//           <Image src="/ps3.png" alt="photoshoot 3" width={360} height={360} />
//           <Image src="/ps4.png" alt="photoshoot 4" width={360} height={360} />
//         </div>
//       </div>

//       {/* Customer Care Service */}
//       <div className="flex justify-around mt-20">
//         <Image src="/Frame1.png" alt="customer care 1" width={400} height={188} />
//         <Image src="/Frame3.png" alt="customer care 2" width={400} height={188} />
//         <Image src="/Frame2.png" alt="customer care 3" width={400} height={188} />
//       </div>

//       {/* Newsletter Section */}
//       <div className="flex justify-around mt-20 items-center bg-yellow-200 w-full h-80">
//         <div>
//           <Image
//             src="/Mailinglist.png"
//             alt="join mailing list"
//             height={260}
//             width={260}
//           />
//         </div>
//         <div>
//           <h1 className="font-bold text-2xl text-black mb-4">
//             Join Our Newsletter
//           </h1>
//           <p className="font-bold text-black text-sm mb-8">
//             Get the latest updates on new arrivals and discounts.
//           </p>
//           <div className="flex">
//             <input
//               type="text"
//               placeholder="Your email address"
//               className="w-full p-3"
//             />
//             <button className="bg-red-500 text-white py-3 px-6">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-10 mt-20">
//         <div className="container mx-auto flex justify-between">
//           <div>
//             <h1 className="font-bold text-2xl mb-6">Company</h1>
//             <ul className="space-y-4">
//               <li>About Us</li>
//               <li>Our Blog</li>
//               <li>Contact Us</li>
//               <li>Our Services</li>
//             </ul>
//           </div>
//           <div>
//             <h1 className="font-bold text-2xl mb-6">Shop</h1>
//             <ul className="space-y-4">
//               <li>New Arrivals</li>
//               <li>Best Sellers</li>
//               <li>Clearance</li>
//               <li>Gift Cards</li>
//             </ul>
//           </div>
//           <div>
//             <h1 className="font-bold text-2xl mb-6">Support</h1>
//             <ul className="space-y-4">
//               <li>FAQs</li>
//               <li>Shipping & Returns</li>
//               <li>Privacy Policy</li>
//               <li>Terms & Conditions</li>
//             </ul>
//           </div>
//         </div>
//         <div className="mt-8 text-center">
//           <p>&copy; 2024 Your Company Name. All rights reserved.</p>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Home;

