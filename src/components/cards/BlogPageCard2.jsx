// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import { FaLongArrowAltRight } from "react-icons/fa";

// const BlogPageCard2 = ({ imageUrl, title, link }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div
//       className="flex shadow-lg rounded-xl flex-col gap-1 border border-gray-200 relative overflow-hidden"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="relative">
//         <img
//           src={imageUrl}
//           alt={title}
//           className={`w-full sm:h-80 rounded-xl h-56 transition-transform duration-1000 ${
//             isHovered ? "scale-110 filter grayscale" : ""
//           }`}
//         />
//         <div
//           className={`absolute inset-0 flex flex-col items-start justify-end p-5 transition-opacity duration-1000 ${
//             isHovered ? "bg-black bg-opacity-60 opacity-100" : "opacity-0"
//           }`}
//         >
//           <div className="flex flex-col gap-4">
//             <p
//               className={`sm:text-xl text-lg font-medium transition-colors duration-1000 ${
//                 isHovered ? "text-white" : "text-gray-100"
//               }`}
//             >
//               {title}
//             </p>
//             <Link
//               className={`flex items-center gap-5 transition-colors duration-1000 ${
//                 isHovered ? "text-white" : "text-gray-100"
//               }`}
//               href={link}
//             >
//               Read More{" "}
//               <FaLongArrowAltRight
//                 size={30}
//                 color={isHovered ? "white" : "gray-400"}
//               />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogPageCard2;

"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const BlogPageCard2 = ({ imageUrl, title, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="flex shadow-lg rounded-xl flex-col gap-1 border border-gray-200 relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className={`w-full sm:h-80 rounded-xl h-56 transition-transform duration-1000 ${
            isHovered ? "scale-110 filter grayscale" : ""
          }`}
        />
        <div
          className={`absolute inset-0 flex flex-col items-start justify-end p-5 transition-opacity duration-1000 ${
            isHovered ? "bg-black bg-opacity-60 opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4">
            <p
              className={`sm:text-xl text-lg font-medium transition-colors duration-1000 ${
                isHovered ? "text-white" : "text-gray-100"
              }`}
            >
              {title}
            </p>
            {link && ( // Check if link is not undefined
              <Link
                className={`flex items-center gap-5 transition-colors duration-1000 ${
                  isHovered ? "text-white" : "text-gray-100"
                }`}
                href={link}
              >
                Read More{" "}
                <FaLongArrowAltRight
                  size={30}
                  color={isHovered ? "white" : "gray-400"}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPageCard2;
