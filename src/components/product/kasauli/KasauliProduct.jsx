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

const KasauliProduct = () => {
  const [destinations, setDestinations] = useState(null);

  useEffect(() => {
    console.log("Fetching data...");
    axios
      .get("https://server-deploy-gamma.vercel.app/getHimachalData")
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
        <section className="bg-[#f8f8f8]" key={destinations[0]._id}>
          <div className="mt-20 bg-[#F2FBFA]">
            <div className="max-w-7xl flex sm:justify-between gap-5 justify-start sm:flex-row flex-col sm:items-center sm:mx-auto py-20 px-5">
              <div className="flex flex-col gap-5">
                <h1 className="md:text-4xl text-2xl font-semibold">
                  {destinations[0].heading}
                </h1>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center ">
                    <CiLocationOn size={25} color="#00bb98" />
                    <p>{destinations[0].subHeading}</p>
                    <CiHeart size={25} color="#fd4c5c" />
                  </div>
                </div>
              </div>
            </div>
            <ProductCarousel
              carouselImageUrl={destinations[0].carouselImageUrl}
            />
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl lg:gap-2 gap-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  px-5 py-20">
                <div className="flex gap-5 items-center">
                  <MdDateRange size={30} color="#FD4C5C" />
                  <div className="flex flex-col gap-3 ">
                    <p className="text-sm font-medium">Duration</p>
                    <p className="text-sm text-gray-500">
                      {destinations[0].duration}
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 items-center">
                  <GoPeople size={30} color="#FD4C5C" />
                  <div className="flex flex-col gap-3 ">
                    <p className="text-sm font-medium">Max People</p>
                    <p className="text-sm text-gray-500">
                      {destinations[0].maxPeople}
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
                      {destinations[0].pickup}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex max-w-7xl lg:flex-row flex-col-reverse gap-10 px-5 mx-auto">
            <ProductDetailLeft
              overview={destinations[0].overview}
              inclusion1={destinations[0].inclusion1}
              inclusion2={destinations[0].inclusion2}
              inclusion3={destinations[0].inclusion3}
              inclusion4={destinations[0].inclusion4}
              exclusion1={destinations[0].exclusion1}
              exclusion2={destinations[0].exclusion2}
              exclusion3={destinations[0].exclusion3}
              exclusion4={destinations[0].exclusion4}
              mapSrc={destinations[0].mapSrc}
              reviewHeading={destinations[0].reviewHeading}
              reviews={destinations[0].reviews}
              itinerary={destinations[0].itinerary}
            />
            <ProductRightPricing
              price={destinations[0].price}
              previousPrice={destinations[0].previousPrice}
              homePickupAdultPrice={destinations[0].homePickupAdultPrice}
              homePickupBabyPrice={destinations[0].homePickupBabyPrice}
              homePickupChildPrice={destinations[0].homePickupChildPrice}
              adultPrice={destinations[0].adultPrice}
              childPrice={destinations[0].childPrice}
              babyPrice={destinations[0].babyPrice}
              discount={destinations[0].discount}
              startDate={destinations[0].startDate}
              endDate={destinations[0].endDate}
              minMax={destinations[0].minMax}
            />
          </div>
          <ProductBottomCarousel />
        </section>
      )}
    </>
  );
};

export default KasauliProduct;
