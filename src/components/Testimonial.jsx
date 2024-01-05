"use client";
// import React from "react";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
// import testimonialData from "@/data/testimonialData";

// const Testimonial = () => {
//   return (
//     <div className="my-20">
//       <p className="text-center text-xl font-medium text-[#00BB98] my-4 italic">
//         Testimonials
//       </p>
//       <h1 className="text-center md:text-5xl  text-3xl  font-bold">
//         What Our Happy Clients Say
//       </h1>
//       {/* Carousel for desktop and large size devices */}
//       <CarouselProvider
//         className="block  "
//         naturalSlideWidth={100}
//         isIntrinsicHeight={true}
//         totalSlides={4}
//         visibleSlides={1}
//         step={1}
//         infinite={true}
//       >
//         <div className="w-full relative flex items-center justify-center">
//           <ButtonBack
//             role="button"
//             aria-label="slide backward"
//             className="absolute z-30  left-0 ml-8  cursor-pointer"
//             id="prev"
//           >
//             <svg
//               width={30}
//               height={30}
//               viewBox="0 0 8 14"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M7 1L1 7L7 13"
//                 stroke="black"
//                 strokeWidth={2}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </ButtonBack>
//           <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
//             <Slider>
//               <div
//                 id="slider"
//                 className="h-[450px] flex  items-center w-full justify-center transition ease-out duration-700"
//               >
//                 {testimonialData.map((item, i) => (
//                   <Slide key={i}>
//                     <section className="relative  overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
//                       <div className="absolute inset-0 -z-10 opacity-20" />
//                       <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
//                       <div className="mx-auto max-w-2xl lg:max-w-4xl">
//                         <div className="mt-10">
//                           <div className="text-center text-sm md:px-0 px-10 font-medium  text-gray-900 md:text-2xl">
//                             <p className="text-wrap text-center w-full">
//                               {item.thoughts}
//                             </p>
//                           </div>
//                           <div className="mt-10">
//                             <img
//                               className="mx-auto h-10 w-10 rounded-full"
//                               src={item.imageUrl}
//                               alt=""
//                             />
//                             <div className="mt-4 flex items-center justify-center space-x-3 text-base">
//                               <div className="font-semibold text-gray-900">
//                                 {item.userName}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </section>
//                   </Slide>
//                 ))}
//               </div>
//             </Slider>
//           </div>
//           <ButtonNext
//             role="button"
//             aria-label="slide forward"
//             className="absolute z-30 right-0 mr-8 "
//             id="next"
//           >
//             <svg
//               width={30}
//               height={30}
//               viewBox="0 0 8 14"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M1 1L7 7L1 13"
//                 stroke="black"
//                 strokeWidth={2}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </ButtonNext>
//         </div>
//       </CarouselProvider>
//     </div>
//   );
// };

// export default Testimonial;
import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import TestimonialCard from "./cards/TestmonialCard";

const Testimonials = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  return (
    <div className="flex gap-5 mt-20 flex-col">
      <p className="text-center text-xl font-medium text-[#00BB98] my-4 italic">
        Testimonials
      </p>
      <h1 className="text-center md:text-5xl  text-3xl  font-bold">
        What Our Happy Clients Say
      </h1>
      <div
        className="max-w-5xl mx-auto  bg-white flex flex-col justify-center items-center
   p-10 transition-all duration-700  rounded-md"
      >
        <TestimonialCard review={reviews[index]} />

        <div className="flex text-3xl mt-10 gap-3  font-bold mx-auto">
          <button onClick={leftShiftHandler} className="cursor-pointer  ">
            <FiChevronLeft />
          </button>
          <button onClick={rightShiftHandler} className="cursor-pointer ">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
