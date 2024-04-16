"use client";
import React from "react";
import WeekendTripCard from "../cards/WeekendTripCard";
import weekendTripData from "@/data/weekendTrip";
import WeekendTripTrendingCarousel from "../carousels/WeekendTripTrendingCarousel";
import WeekendTripStateCarousel from "../carousels/WeekendTripStateCarousel";
const WeekendTrip = () => {
  return (
    <section className="max-w-7xl mt-32 mx-auto ">
      <h1 className="text-center md:text-5xl text-3xl  font-bold">
        Weekend Trip
      </h1>
      <WeekendTripTrendingCarousel />
      <WeekendTripStateCarousel />
      {/* <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center w-full gap-4 h-full lg:py-20 py-12 px-4">
        {weekendTripData.map((item, index) => (
          <WeekendTripCard
            key={index}
            url={item.url}
            imageUrl={item.imageUrl}
            location={item.location}
            about={item.about}
          />
        ))} */}
      {/* </div> */}
    </section>
  );
};

export default WeekendTrip;
