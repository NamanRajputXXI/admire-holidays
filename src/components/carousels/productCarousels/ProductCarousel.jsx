"use client";
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
const ProductCarousel = ({ carouselImageUrl }) => {
  console.log(carouselImageUrl);
  return (
    <div className="flex items-center justify-center w-full   h-full  px-4">
      {/* Carousel for desktop and large size devices */}
      <CarouselProvider
        className="lg:block hidden"
        naturalSlideWidth={0}
        isIntrinsicHeight={true}
        totalSlides={4}
        visibleSlides={2}
        step={1}
        infinite={true}
        isPlaying={true} // Set isPlaying to true for autoplay
        interval={2000} // Set the interval in milliseconds (e.g., 3000 for 3 seconds)
      >
        <div className="w-full relative flex items-center justify-center">
          <ButtonBack
            role="button"
            aria-label="slide backward"
            className="absolute  bg-white  hover:text-white rounded-full p-4 flex justify-center items-center  z-30  left-10   cursor-pointer"
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
                stroke="#00BB98 "
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
                className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
              >
                {carouselImageUrl.map((img, i) => (
                  <Slide key={i}>
                    <div className="flex  flex-shrink-0  relative w-full sm:w-auto">
                      <img
                        src={img}
                        alt="img"
                        className="object-cover rounded-xl object-center "
                      />
                      <div className=" rounded-xl  absolute w-full h-full py-6">
                        <div className="flex h-full items-end  relative pb-6"></div>
                      </div>
                    </div>
                  </Slide>
                ))}
              </div>
            </Slider>
          </div>
          <ButtonNext
            role="button"
            aria-label="slide forward"
            className="absolute    bg-white rounded-full p-4 flex justify-center items-center z-30 right-10  "
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
                stroke="#00BB98"
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
        totalSlides={6}
        visibleSlides={2}
        step={1}
        infinite={true}
      >
        <div className="w-full relative flex items-center justify-center">
          <ButtonBack
            role="button"
            aria-label="slide backward"
            className="absolute  bg-white  hover:text-white rounded-full p-3 flex justify-center items-center  z-30  left-10   cursor-pointer"
            id="prev"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L1 7L7 13"
                stroke="#00BB98 "
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
                className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
              >
                {carouselImageUrl.map((img, i) => (
                  <Slide key={i}>
                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                      <img
                        src={img}
                        alt="image"
                        className="object-cover rounded-xl object-center "
                      />
                      <div className=" rounded-xl  absolute w-full h-full py-6">
                        <div className="flex h-full items-end  relative pb-6"></div>
                      </div>
                    </div>
                  </Slide>
                ))}
              </div>
            </Slider>
          </div>
          <ButtonNext
            role="button"
            aria-label="slide forward"
            className="absolute    bg-white rounded-full p-3 flex justify-center items-center z-30 right-10  "
            id="next"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="#00BB98"
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
        totalSlides={6}
        visibleSlides={1}
        step={1}
        infinite={true}
      >
        <div className="w-full relative flex items-center justify-center">
          <ButtonBack
            role="button"
            aria-label="slide backward"
            className="absolute  bg-white  hover:text-white rounded-full p-3 flex justify-center items-center  z-30  left-5   cursor-pointer"
            id="prev"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L1 7L7 13"
                stroke="#00BB98 "
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
                className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700"
              >
                {carouselImageUrl.map((img, i) => (
                  <Slide key={i}>
                    <div className="flex flex-shrink-0 relative w-full h-96 sm:w-auto">
                      <img
                        src={img}
                        alt="image"
                        className="object-cover rounded-xl object-center w-full"
                      />
                      <div className="rounded-xl absolute w-full h-full py-6">
                        <div className="flex h-full items-end  relative pb-6"></div>
                      </div>
                    </div>
                  </Slide>
                ))}
              </div>
            </Slider>
          </div>
          <ButtonNext
            role="button"
            aria-label="slide forward"
            className="absolute    bg-white rounded-full p-3 flex justify-center items-center z-30 right-5  "
            id="next"
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="#00BB98"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default ProductCarousel;
