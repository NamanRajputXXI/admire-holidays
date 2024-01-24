"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import ProductCarousel from "../../carousels/productCarousels/ProductCarousel";
import ProductRightPricing from "../ProductRightPricing";
import ProductDetailLeft from "../ProductDetailLeft";
import ProductBottomCarousel from "../../carousels/ProductBottomCarousel";
const BharatpurProduct = () => {
  const [destinations, setDestinations] = useState(null);

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
      {Array.isArray(destinations) && destinations.length > 0 && (
        <section className="bg-[#f8f8f8]" key={destinations[1]._id}>
          <div className="mt-20 bg-[#F2FBFA]">
            <div className="max-w-7xl flex sm:justify-between gap-5 justify-start sm:flex-row flex-col sm:items-center sm:mx-auto py-20 px-5">
              <div className="flex flex-col gap-5">
                <h1 className="md:text-4xl text-2xl font-semibold">
                  {destinations[1].heading}
                </h1>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center ">
                    <CiLocationOn size={25} color="#00bb98" />
                    <p>{destinations[1].subHeading}</p>
                    <CiHeart size={25} color="#fd4c5c" />
                  </div>
                </div>
              </div>
            </div>
            <ProductCarousel
              carouselImageUrl={destinations[1].carouselImageUrl}
            />
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl lg:gap-2 gap-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  px-5 py-20">
                <div className="flex gap-5 items-center">
                  <MdDateRange size={30} color="#FD4C5C" />
                  <div className="flex flex-col gap-3 ">
                    <p className="text-sm font-medium">Duration</p>
                    <p className="text-sm text-gray-500">
                      {destinations[1].duration}
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <GoPeople size={30} color="#FD4C5C" />
                  <div className="flex flex-col gap-3 ">
                    <p className="text-sm font-medium">Max People</p>
                    <p className="text-sm text-gray-500">
                      {destinations[1].maxPeople}
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <IoPersonOutline size={30} color="#FD4C5C" />
                  <div className="flex flex-col gap-3 ">
                    <p className="text-sm font-medium">Min Age</p>
                    <p className="text-sm text-gray-500">
                      {destinations[0].minAge}
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <CiLocationOn size={30} color="#FD4C5C" />
                  <div className="flex flex-col gap-3 ">
                    <p className="text-sm font-medium">Pickup</p>
                    <p className="text-sm text-gray-500">
                      {destinations[1].pickup}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-w-7xl lg:flex-row flex-col-reverse gap-10 px-5 mx-auto">
            <ProductDetailLeft
              overview={destinations[1].overview}
              inclusion1={destinations[1].inclusion1}
              inclusion2={destinations[1].inclusion2}
              inclusion3={destinations[1].inclusion3}
              inclusion4={destinations[1].inclusion4}
              exclusion1={destinations[1].exclusion1}
              exclusion2={destinations[1].exclusion2}
              exclusion3={destinations[1].exclusion3}
              exclusion4={destinations[1].exclusion4}
              mapSrc={destinations[1].mapSrc}
              reviewHeading={destinations[1].reviewHeading}
              reviews={destinations[1].reviews}
              itinerary={destinations[1].itinerary}
            />
            <ProductRightPricing
              price={destinations[1].price}
              previousPrice={destinations[1].previousPrice}
              homePickupAdultPrice={destinations[1].homePickupAdultPrice}
              homePickupBabyPrice={destinations[1].homePickupBabyPrice}
              homePickupChildPrice={destinations[1].homePickupChildPrice}
              adultPrice={destinations[1].adultPrice}
              childPrice={destinations[1].childPrice}
              babyPrice={destinations[1].babyPrice}
              discount={destinations[1].discount}
              startDate={destinations[1].startDate}
              endDate={destinations[1].endDate}
              minMax={destinations[1].minMax}
            />
          </div>
          <ProductBottomCarousel />
        </section>
      )}
    </>
  );
};

export default BharatpurProduct;
