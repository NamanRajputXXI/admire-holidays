"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhoto } from "react-icons/md";
import ProductCarousel from "../carousels/productCarousels/ProductCarouselJaipur";
import ProductRightPricing from "./ProductRightPricing";
import ProductDetailLeft from "./ProductDetailLeft";
import ProductBottomCarousel from "../carousels/ProductBottomCarousel";
const Product = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    console.log("Fetching data...");
    axios
      .get("https://server-deploy-gamma.vercel.app/getRajasthanData")
      .then((response) => {
        console.log("Data received:", response.data.data);
        setDestinations(response.data.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <>
      {Array.isArray(destinations) &&
        destinations.map((destination) => (
          <section className="bg-[#f8f8f8]" key={destination._id}>
            <div className="mt-20 bg-[#F2FBFA]">
              <div className="max-w-7xl flex sm:justify-between gap-5 justify-start sm:flex-row flex-col sm:items-center sm:mx-auto py-20 px-5">
                <div className="flex flex-col gap-5">
                  <h1 className="md:text-4xl text-2xl font-semibold">
                    {destination.heading}
                  </h1>

                  <div className="flex justify-between">
                    <div className="flex gap-2 items-center ">
                      <CiLocationOn size={25} color="#00bb98" />
                      <p>{destination.subHeading}</p>
                      <CiHeart size={25} color="#fd4c5c" />
                    </div>
                  </div>
                </div>
                <div className="flex sm:gap-3 gap-1  items-center">
                  <div className="flex p-2 transition-all duration-500 ease-in-out  text-red-500 border-[1px] hover:bg-red-500 hover:border-red-500 hover:text-white bg-white border-gray-300 rounded-lg sm:gap-3 gap-1 items-center">
                    <CiVideoOn size={20} />
                    <p className="text-sm hover:text-white">View Video</p>
                  </div>
                  <div className="flex p-2 border-[1px] transition-all  duration-500 ease-in-out  text-red-500  bg-white hover:text-white  hover:bg-red-500  hover:border-[#FD4A4C border-gray-300 rounded-lg sm:gap-3 gap-1  items-center">
                    <MdOutlinePhoto size={20} />
                    <p className="text-sm hover:text-white ">
                      {destination.numberOfPhotos} Photo
                    </p>
                  </div>
                  <div className="flex p-2 border-[1px] transition-all duration-500 ease-in-out hover:text-white  bg-white hover:bg-red-500  hover:border-red-500  text-red-500  border-gray-300 rounded-lg gap-3 items-center">
                    <CiShare2 size={20} />
                  </div>
                </div>
              </div>
              <ProductCarousel />
              <div className="max-w-7xl mx-auto">
                <div className="max-w-4xl lg:gap-2 gap-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  px-5 py-20">
                  <div className="flex gap-5 items-center">
                    <MdDateRange size={30} color="#FD4C5C" />
                    <div className="flex flex-col gap-3 ">
                      <p className="text-sm font-medium">Duration</p>
                      <p className="text-sm text-gray-500">
                        {destination.duration}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center">
                    <GoPeople size={30} color="#FD4C5C" />
                    <div className="flex flex-col gap-3 ">
                      <p className="text-sm font-medium">Max People</p>
                      <p className="text-sm text-gray-500">
                        {destination.maxPeople}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center">
                    <IoPersonOutline size={30} color="#FD4C5C" />
                    <div className="flex flex-col gap-3 ">
                      <p className="text-sm font-medium">Min Age</p>
                      <p className="text-sm text-gray-500">
                        {destination.minAge}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 items-center">
                    <CiLocationOn size={30} color="#FD4C5C" />
                    <div className="flex flex-col gap-3 ">
                      <p className="text-sm font-medium">Pickup</p>
                      <p className="text-sm text-gray-500">
                        {destination.pickup}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex max-w-7xl lg:flex-row flex-col-reverse gap-10 px-5 mx-auto">
              <ProductDetailLeft
                overview={destination.overview}
                day1Heading={destination.day1Heading}
                day1Overview={destination.day1Overview}
                day2Heading={destination.day2Heading}
                day2Overview={destination.day2Overview}
                day3Heading={destination.day3Heading}
                day3Overview={destination.day3Overview}
                inclusion1={destination.inclusion1}
                inclusion2={destination.inclusion2}
                inclusion3={destination.inclusion3}
                inclusion4={destination.inclusion4}
                exclusion1={destination.exclusion1}
                exclusion2={destination.exclusion2}
                exclusion3={destination.exclusion3}
                exclusion4={destination.exclusion4}
                mapSrc={destination.mapSrc}
                reviewHeading={destination.reviewHeading}
                reviews={destination.reviews}
              />
              <ProductRightPricing
                price={destination.price}
                previousPrice={destination.previousPrice}
                homePickupAdultPrice={destination.homePickupAdultPrice}
                homePickupBabyPrice={destination.homePickupBabyPrice}
                homePickupChildPrice={destination.homePickupChildPrice}
                adultPrice={destination.adultPrice}
                childPrice={destination.childPrice}
                babyPrice={destination.babyPrice}
                discount={destination.discount}
                startDate={destination.startDate}
                endDate={destination.endDate}
                minMax={destination.minMax}
              />
            </div>
            <ProductBottomCarousel />
          </section>
        ))}
    </>
  );
};

export default Product;
