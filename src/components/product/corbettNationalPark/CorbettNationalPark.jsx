"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import ProductRightPricing from "../ProductRightPricing";
import ProductDetailLeft from "../ProductDetailLeft";
import ProductBottomCarousel from "../../carousels/ProductBottomCarousel";
import FormModal from "@/components/FormModal";
import Loader from "../Loader";
import SwiperProductCarousel from "@/components/carousels/productCarousels/SwiperProductCarousel";

const CorbettNationalPark = () => {
  const [destinations, setDestinations] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    console.log("Fetching data...");
    axios
      .get("https://server-deploy-gamma.vercel.app/getUttarakhandData")
      .then((response) => {
        console.log("Data received:", response.data.data);
        setDestinations(response.data.data);
        setLoading(false); // Set loading to false when data is received
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false); // Set loading to false on error as well
      });
  }, []);
  const [openModal, setOpenModal] = useState(false);

  const closeModalFunc = () => {
    setOpenModal(false);
  };
  const openModalFunc = () => {
    setOpenModal(true);
  };

  return (
    <>
      {loading && <Loader />}

      <div>
        {openModal && (
          <FormModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            closeModalFunc={closeModalFunc}
            openModalFunc={openModalFunc}
          />
        )}
        {!loading && (
          <div>
            {Array.isArray(destinations) && destinations.length > 0 && (
              <section
                className="bg-[rgb(248,248,248)]"
                key={destinations[3]._id}
              >
                <div className="mt-20 px-5 py-16 bg-[#F2FBFA]">
                  {/* <ProductCarousel
                        carouselImageUrl={destinations[0].carouselImageUrl}
                      /> */}
                  <SwiperProductCarousel
                    carouselImageUrl={destinations[3].carouselImageUrl}
                  />
                  <div className="max-w-7xl md:flex-row flex-col mx-auto grid  items-center grid-cols-1 md:grid-cols-2 gap-10">
                    <div className=" flex sm:justify-between gap-5 justify-start sm:flex-row flex-col sm:items-center   px-5">
                      <div className="flex flex-col gap-5">
                        <h1 className="md:text-4xl text-2xl font-semibold">
                          {destinations[3].heading}
                        </h1>
                        <div className="flex justify-between">
                          <div className="flex gap-2 items-center ">
                            <CiLocationOn size={25} color="#00bb98" />
                            <p>{destinations[3].subHeading}</p>
                            <CiHeart size={25} color="#fd4c5c" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" ">
                      <div className=" lg:gap-2 gap-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  px-5 py-10">
                        <div className="flex gap-5 items-center">
                          <MdDateRange size={30} color="#FD4C5C" />
                          <div className="flex flex-col gap-3 ">
                            <p className="text-sm font-medium">Duration</p>
                            <p className="text-sm text-gray-500">
                              {destinations[3].duration}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-5 items-center">
                          <GoPeople size={30} color="#FD4C5C" />
                          <div className="flex flex-col gap-3 ">
                            <p className="text-sm font-medium">Max People</p>
                            <p className="text-sm text-gray-500">
                              {destinations[3].maxPeople}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-5 items-center">
                          <IoPersonOutline size={30} color="#FD4C5C" />
                          <div className="flex flex-col gap-3 ">
                            <p className="text-sm font-medium">Min Age</p>
                            <p className="text-sm text-gray-500">
                              {destinations[3].minAge}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-5 items-center">
                          <CiLocationOn size={30} color="#FD4C5C" />
                          <div className="flex flex-col gap-3 ">
                            <p className="text-sm font-medium">Pickup</p>
                            <p className="text-sm text-gray-500">
                              {destinations[3].pickup}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex max-w-7xl lg:flex-row flex-col-reverse gap-10 px-5 mx-auto">
                  <ProductDetailLeft
                    overview={destinations[3].overview}
                    mapSrc={destinations[3].mapSrc}
                    reviewHeading={destinations[3].reviewHeading}
                    reviews={destinations[3].reviews}
                    itinerary={destinations[3].itinerary}
                    exclusions={destinations[3].exclusions}
                    inclusions={destinations[3].inclusions}
                  />
                  <ProductRightPricing
                    price={destinations[3].price}
                    previousPrice={destinations[3].previousPrice}
                    openModalFunc={openModalFunc}
                  />
                </div>
                <ProductBottomCarousel />
              </section>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CorbettNationalPark;
