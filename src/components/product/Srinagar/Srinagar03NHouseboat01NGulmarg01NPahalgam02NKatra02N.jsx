"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import ProductRightPricing from "../ProductRightPricing";
import ProductDetailLeft from "../ProductDetailLeft";
import ProductBottomCarousel from "../../carousels/ProductBottomCarousel";
import FormModal from "@/components/FormModal";
import Loader from "../Loader";
import SwiperProductCarousel from "@/components/carousels/productCarousels/SwiperProductCarousel";

const Srinagar03NHouseboat01NGulmarg01NPahalgam02NKatra02N = () => {
  const [destinations, setDestinations] = useState(null);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    console.log("Fetching data...");
    axios
      .get("https://server-deploy-gamma.vercel.app/getKashmirData")
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
                key={destinations[0]._id}
              >
                <div className="mt-20 px-5 py-16 bg-[#F2FBFA]">
                  <SwiperProductCarousel
                    carouselImageUrl={destinations[18].carouselImageUrl}
                  />
                  <div className="max-w-7xl md:flex-row flex-col mx-auto grid  items-center grid-cols-1 md:grid-cols-2 gap-10">
                    <div className=" flex sm:justify-between gap-5 justify-start sm:flex-row flex-col sm:items-center   px-5">
                      <div className="flex flex-col gap-5">
                        <h1 className="md:text-4xl text-2xl font-semibold">
                          {destinations[18].heading}
                        </h1>

                        <div className="flex justify-between">
                          <div className="flex gap-2 items-center ">
                            <CiLocationOn size={25} color="#00bb98" />
                            <p>{destinations[18].subHeading}</p>
                            <CiHeart size={25} color="#fd4c5c" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex max-w-7xl lg:flex-row flex-col-reverse gap-10 px-5 mx-auto">
                  <ProductDetailLeft
                    overview={destinations[18].overview}
                    overView={destinations[18].overView}
                    mapSrc={destinations[18].mapSrc}
                    reviewHeading={destinations[18].reviewHeading}
                    reviews={destinations[18].reviews}
                    itinerary={destinations[18].itinerary}
                    exclusions={destinations[18].exclusions}
                    inclusions={destinations[18].inclusions}
                    packageOptions={destinations[18].packageOptions}
                  />
                  <ProductRightPricing
                    price={destinations[18].price}
                    previousPrice={destinations[18].previousPrice}
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

export default Srinagar03NHouseboat01NGulmarg01NPahalgam02NKatra02N;
