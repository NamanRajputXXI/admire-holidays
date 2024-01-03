"use client";
import React from "react";

import DestinationMaker from "./DestinationMaker";
const HeroSection = () => {
  return (
    <section className="my-20 pb-10 h-fit  bg-[#def5ff] bg-cover">
      <div className="flex items-center md:gap-4 gap-10 md:flex-row flex-col justify-between py-20 max-w-7xl mx-auto px-5">
        <div className="flex flex-col gap-10">
          <p className="text-green-600 text-xl  font-LaBelle  ">
            Travel Around The World
          </p>
          <h1 className="lg:text-7xl md:text-5xl text-4xl font-extrabold">
            Discover the <br /> most engaging <br /> places
          </h1>
          <p className="text-xl font-light">
            Less planning 50,000 trips are ready for you.
          </p>
          <DestinationMaker />
        </div>
        <div>
          <img
            src="https://admireholidays.com/wp-content/uploads/elementor/thumbs/image-banner-home1-01-q5n4xxh0icn4b1qy2pkk231mteu3gkb26q6xncsweu.jpg"
            className="lg:h-[450px] lg:w-[600px] rounded-full md:h-[300px] md:w-[400px] "
            alt=""
          />
        </div>
      </div>
      {/* <DestinationMaker /> */}
      <DestinationMaker />
    </section>
  );
};

export default HeroSection;
