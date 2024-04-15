"use client";
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import internationalDestinations from "@/data/internationalDestination";
import Link from "next/link";
const InternationalDestinationCarousel = () => {
  return (
    <section className="container max-w-7xl my-20  mx-auto">
      <h1 className="text-center font-Aboreto  md:text-5xl text-2xl  ">
        International Destinations
      </h1>
      <div className="flex items-center justify-center w-full   h-full lg:py-20 py-12 px-4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={0}
          isIntrinsicHeight={true}
          totalSlides={8}
          visibleSlides={4}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute  rounded-md bg-black py-3 px-2 bg-opacity-50  z-30  left-0 ml-[-10px]  cursor-pointer"
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
                  {internationalDestinations.map((item, index) => (
                    <Slide index={index} key={index}>
                      <Link href={item.link}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="object-cover rounded-xl object-center h-96 w-96"
                          />
                          <div className="bg-gray-800 rounded-xl bg-opacity-5 absolute w-full h-full py-6">
                            <div className="flex h-full items-end  relative pb-6">
                              <h3 className="text-xl lg:text-2xl text-center flex items-center justify-center font-semibold absolute h-16 bg-black bg-opacity-50 w-full leading-5 lg:leading-7 text-white">
                                {item.title}
                              </h3>
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
              className="absolute   rounded-md bg-black py-3 px-2 bg-opacity-50 z-30 right-[-30px] mr-8 "
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
          totalSlides={8}
          visibleSlides={2}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute  rounded-md bg-black py-3 px-2 bg-opacity-60  z-30 left-0 ml-[-10px] focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
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
                  className="h-full flex md:gap-4 gap-3 items-center justify-start transition ease-out duration-700"
                >
                  {internationalDestinations.map((item, index) => (
                    <Slide index={index} key={index}>
                      <Link href={item.link}>
                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                          <img
                            src={item.imageUrl}
                            alt={item.title}
                            className="object-cover rounded-xl object-center h-96 w-96"
                          />
                          <div className="bg-gray-800 rounded-xl bg-opacity-5 absolute w-full h-full py-6">
                            <div className="flex h-full items-end  relative pb-6">
                              <h3 className="text-xl lg:text-2xl text-center flex items-center justify-center font-semibold absolute h-16 bg-black bg-opacity-50 w-full leading-5 lg:leading-7 text-white">
                                {item.title}
                              </h3>
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
          totalSlides={8}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <ButtonBack
              role="button"
              aria-label="slide backward"
              className="absolute  rounded-md bg-black py-3 px-2 bg-opacity-50 z-30 left-0 ml-[-10px]  cursor-pointer"
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
                  {internationalDestinations.map((items, index) => (
                    <Slide index={index} key={index}>
                      <Link href={items.link}>
                        <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                          <img
                            src={items.imageUrl}
                            alt={items.title}
                            className="object-cover rounded-xl object-center w-full"
                          />
                          <div className="bg-gray-800 rounded-xl bg-opacity-5 absolute w-full h-full py-6">
                            <div className="flex h-full items-end  relative pb-6">
                              <h3 className="text-xl lg:text-2xl text-center flex items-center justify-center font-semibold absolute h-16 bg-black bg-opacity-50 w-full leading-5 lg:leading-7 text-white">
                                {items.title}
                              </h3>
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
              className="absolute  rounded-md bg-black py-3 px-2 bg-opacity-60 z-30 right-0 mr-[-10px] "
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

export default InternationalDestinationCarousel;
