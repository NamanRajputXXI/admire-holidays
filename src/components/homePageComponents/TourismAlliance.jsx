import React from "react";
import { FaPlaceOfWorship } from "react-icons/fa";
import { GrUserExpert } from "react-icons/gr";
import { MdModeOfTravel, MdSentimentVerySatisfied } from "react-icons/md";

const TourismAlliance = () => {
  return (
    <div className="">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10 "
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <h2 className="block w-full text-black bg-clip-text font-bold text-3xl sm:text-4xl">
            Tourism Board Alliance
          </h2>
        </div>
        <div className="flex items-center justify-center  pt-20 ">
          <div className="relative w-full  bg-white overflow-hidden">
            <div className="absolute z-10  w-48 left-0 top-0 bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute z-10  w-48 right-0 top-0 bg-gradient-to-l from-white to-transparent"></div>
            <div className="flex animate-scroll-infinite">
              <div className="h-24 w-24 flex items-center justify-center"></div>

              <img src="logo.jpg" alt="" className="h-24 w-60" />
              <img src="logo.jpg" alt="" className="h-24 w-60" />
              <img src="logo.jpg" alt="" className="h-24 w-60" />
              <img src="logo.jpg" alt="" className="h-24 w-60" />
              <img src="logo.jpg" alt="" className="h-24 w-60" />
              <img src="logo.jpg" alt="" className="h-24 w-60" />
              <img src="logo.jpg" alt="" className="h-24 w-60" />
              <img src="logo.jpg" alt="" className="h-24 w-60" />
              <img src="logo.jpg" alt="" className="h-24 w-60" />
              <img src="logo.jpg" alt="" className="h-24 w-60" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TourismAlliance;
