"use client";
import React from "react";

import DestinationMaker from "./DestinationMaker";
const HeroSection = () => {
  return (
    <section className="my-20  h-fit  bg-[#def5ff] bg-cover">
      <div className="flex items-center lg:gap-4 gap-10 lg:flex-row flex-col justify-between  ">
        <div className="flex flex-col gap-10 py-10 lg:pl-32 px-5">
          <p className="text-[#00BB98] text-xl  font-LaBelle  ">
            Travel Around The World
          </p>
          <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold">
            Discover the <br /> most engaging <br /> places
          </h1>
          <p className="text-xl font-normal">
            Less planning 50,000 trips are ready for you.
          </p>
          <DestinationMaker />
        </div>

        <div>
          <img
            src="https://admireholidays.com/wp-content/uploads/elementor/thumbs/image-banner-home1-01-q5n4xxh0icn4b1qy2pkk231mteu3gkb26q6xncsweu.jpg"
            className="lg:h-[700px] lg:w-[750px] w-full"
            alt=""
            style={{
              clipPath:
                "polygon(100% 0%, 100% 51%, 100% 100%, 25% 100%, 0 48%, 25% 0%)",
              borderRadius: "20px",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
