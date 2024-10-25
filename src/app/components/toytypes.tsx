'use client'
import React from 'react'
import Image from 'next/image'
import { Comfortaa } from "next/font/google";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Toytypes = () => {
  return (
    <div>
      {/* Toy Types Section */}
      <div className="text-center mt-16 px-4">
        <h1 className={`font-extrabold text-2xl md:text-4xl ${comfortaa.className}`}>
          Find The Perfect Toy
        </h1>
        <p className={`font-extrabold mt-2 md:mt-4 text-base md:text-lg ${comfortaa.className}`}>
          Our Collections
        </p>

        {/* Toy Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 md:mt-20 place-items-center">
          <Image src="/cat1.png" alt="Category 1" width={120} height={120} className="w-24 h-24 md:w-36 md:h-36"/>
          <Image src="/cat2.png" alt="Category 2" width={120} height={120} className="w-24 h-24 md:w-36 md:h-36"/>
          <Image src="/cat3.png" alt="Category 3" width={120} height={120} className="w-24 h-24 md:w-36 md:h-36"/>
          <Image src="/cat4.png" alt="Category 4" width={120} height={120} className="w-24 h-24 md:w-36 md:h-36"/>
          <Image src="/cat5.png" alt="Category 5" width={120} height={120} className="w-24 h-24 md:w-36 md:h-36"/>
        </div>
      </div>
    </div>
  );
};

export default Toytypes;



// 'use client'
// import React from 'react'
// import Image from 'next/image'
// import { Comfortaa } from "next/font/google";

// const comfortaa = Comfortaa({
//     subsets: ["latin"],
//     weight: ["400", "700"],
// });

// const Toytypes = () => {
//   return (
//     <div>
//       {/* Toy Types Section */}
//       <div className="text-center mt-24">
//         <h1 className={`font-extrabold text-4xl ${comfortaa.className}`}>
//           Find The Perfect Toy
//         </h1>
//         <p className={`font-extrabold mt-4 ${comfortaa.className}`}>
//           Our Collections
//         </p>

//         {/* Toy Categories */}
//         <div className="flex justify-around m-2 mt-20">
//           <Image src="/cat1.png" alt="Category 1" width={150} height={150} />
//           <Image src="/cat2.png" alt="Category 2" width={150} height={150} />
//           <Image src="/cat3.png" alt="Category 3" width={150} height={150} />
//           <Image src="/cat4.png" alt="Category 4" width={150} height={150} />
//           <Image src="/cat5.png" alt="Category 5" width={150} height={150} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Toytypes;
