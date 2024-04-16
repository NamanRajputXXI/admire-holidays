"use client";
import React, { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import exclusivePackage from "@/data/exclusivePackage";
import Link from "next/link";
import { MdOutlineDiscount } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import "../../styles/custom.css";

const WeekendTripTrendingCarousel = () => {
  const [windowWidth, setWindowWidth] = useState(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  const divHeight = windowWidth && windowWidth < 500 ? "443px" : "420px";
  return (
    <section className="container max-w-7xl my-10  mx-auto">
      <div className="flex items-center justify-center w-full   h-full lg:py-20 py-12 px-4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={0}
          isIntrinsicHeight={true}
          totalSlides={7}
          visibleSlides={4}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute   rounded-md bg-black py-3 px-2 bg-opacity-60 z-30 top-[30%] left-0 ml-[-10px]  cursor-pointer"
              id="prev"
            >
              <svg
                width={30}
                height={30}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex  md:gap-4 gap-3 items-center justify-start transition ease-out duration-700"
                >
                  {exclusivePackage.map((item, index) => (
                    <Slide index={index} key={index}>
                      <Link href={item.link}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="object-cover rounded-xl object-center h-96 w-96"
                          />

                          <div className="bg-black rounded-xl bg-opacity-5 absolute w-full h-full py-6">
                            <div className="flex h-fit items-center text-xs pl-2 pr-5 gap-3 py-1 w-fit text-white  bg-gradient-to-r from-red-500 to-yellow-400   relative top-0  ">
                              <MdOutlineDiscount color="white" size={20} />
                              Save upto {item.discount}
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full text-gray-500 px-1 mt-3 text-sm justify-between item-center">
                          <p className="">{item.days}</p>
                          <div className="flex items-center gap-2">
                            <FaStar color="green" />
                            4.8 (120)
                          </div>
                        </div>
                        <div className="flex w-full text-sm px-1 mt-3  justify-between item-center">
                          <p>{item.title}</p>
                        </div>
                        <div className="flex h-fit rounded-lg mt-3 items-center text-xs pl-2 pr-5 gap-3 py-1 w-fit text-white  bg-gradient-to-r from-red-600 to-yellow-400   relative top-0  ">
                          Early Summer sale !
                        </div>
                        <button className="flex w-full text-lg  mt-3  text-white bg-red-500 font-medium rounded-lg px-2 py-3 justify-center item-center">
                          Explore
                        </button>
                      </Link>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute   rounded-md top-[30%] bg-black py-3 px-2 bg-opacity-60 z-30 right-0  "
              id="next"
            >
              <svg
                width={30}
                height={30}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider
          className="lg:hidden md:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={7}
          visibleSlides={2}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute z-30   rounded-md bg-black py-3 px-2 bg-opacity-50 left-0 ml-[-10px] focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              id="prev"
            >
              <svg
                width={30}
                height={30}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full flex  md:gap-4 gap-3 items-center justify-start transition ease-out duration-700"
                >
                  {exclusivePackage.map((item, index) => (
                    <Slide index={index} key={index}>
                      <Link href={item.link}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="object-cover rounded-xl  object-center h-96 w-96"
                          />

                          <div className="bg-black rounded-xl bg-opacity-5 absolute w-full h-full py-6">
                            <div className="flex h-fit items-center text-xs pl-2 pr-5 gap-3 py-1 w-fit text-white  bg-gradient-to-r from-red-500 to-yellow-400   relative top-0  ">
                              <MdOutlineDiscount color="white" size={20} />
                              Save upto {item.discount}
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full text-gray-500 px-1 mt-3 text-sm justify-between item-center">
                          <p className="">{item.days}</p>
                          <div className="flex items-center gap-2">
                            <FaStar color="green" />
                            4.8 (120)
                          </div>
                        </div>
                        <div className="flex w-full text-sm px-1 mt-3  justify-between item-center">
                          <p>{item.title}</p>
                        </div>
                        <div className="flex h-fit rounded-lg mt-3 items-center text-xs pl-2 pr-5 gap-3 py-1 w-fit text-white  bg-gradient-to-r from-red-600 to-yellow-400   relative top-0  ">
                          Early Summer sale !
                        </div>
                        <button className="flex w-full text-lg  mt-3  text-white bg-red-500 font-medium rounded-lg px-2 py-3 justify-center item-center">
                          Explore
                        </button>
                      </Link>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute   rounded-md bg-black py-3 px-2 bg-opacity-60 z-30 right-0 mr-[-10px] focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              id="next"
            >
              <svg
                width={30}
                height={30}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>

        <CarouselProvider
          className="block md:hidden "
          naturalSlideWidth={100}
          isIntrinsicHeight={true}
          totalSlides={7}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute   rounded-md bg-black py-3 px-2 bg-opacity-50 z-30 left-0 ml-[-10px]  cursor-pointer"
              id="prev"
            >
              <svg
                width={30}
                height={30}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonBack>
            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
              <Slider>
                <div
                  id="slider"
                  className="h-full w-full flex  md:gap-4 gap-3 items-center justify-start transition ease-out duration-700"
                >
                  {exclusivePackage.map((item, index) => (
                    <Slide index={index} key={index}>
                      <Link href={item.link}>
                        <div
                          className="flex flex-shrink-0 exlusive-package-carousel-mobile-card relative w-full  sm:w-auto"
                          style={{
                            height: divHeight,
                          }}
                        >
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="object-cover rounded-xl object-center w-full"
                          />
                          <div className="bg-black rounded-xl bg-opacity-5 absolute w-full h-full py-6">
                            <div className="flex h-fit items-center text-xs pl-2 pr-5 gap-3 py-1 w-fit text-white  bg-gradient-to-r from-red-500 to-yellow-400   relative top-0  ">
                              <MdOutlineDiscount color="white" size={20} />
                              Save upto {item.discount}
                            </div>
                          </div>
                          <div className="bg-black  flex flex-col   rounded-xl bottom-0 bg-opacity-5 absolute w-full h-full ">
                            <div className="flex flex-col   text-xs py-2 px-3 rounded-b-xl gap-3  w-full text-white  bg-gradient-to-r from-red-500 to-yellow-400   relative top-[296px] ">
                              <div className=" flex  items-center justify-between gap-3  w-full text-white">
                                <p>{item.days}</p>
                                <div className="flex items-center gap-2">
                                  <FaStar color="green" />
                                  4.8 (120)
                                </div>
                              </div>
                              <div className="w-full">
                                <p className="flex text-base">{item.title}</p>
                              </div>
                              <div>
                                <button className="flex w-full text-lg   text-white bg-green-600 font-medium rounded-lg px-2 py-2 justify-center item-center">
                                  Explore
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext
              role="button"
              aria-label="slide forward"
              className="absolute   rounded-md bg-black py-3 px-2 bg-opacity-60 z-30 right-0 mr-[-10px] "
              id="next"
            >
              <svg
                width={30}
                height={30}
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </section>
  );
};

export default WeekendTripTrendingCarousel;
