"use client";
import React from "react";
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
    </section>
  );
};

export default WeekendTrip;
