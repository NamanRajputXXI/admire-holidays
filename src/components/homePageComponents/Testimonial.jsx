"use client";
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import testimonialData from "@/data/testimonialData";

const Testimonial = () => {
  return (
    <div className="py-20 bg-[#F2FBFA]">
      <p className="text-center text-xl font-medium text-[#00BB98] my-4 italic">
        Testimonials
      </p>
      <h1 className="text-center md:text-5xl  text-3xl  font-bold">
        What Our Happy Clients Say
      </h1>
      {/* Carousel for desktop and large size devices */}
      <CarouselProvider
        className="block bg-[#F2FBFA]  "
        naturalSlideWidth={100}
        isIntrinsicHeight={true}
        totalSlides={4}
        visibleSlides={1}
        step={1}
        infinite={true}
      >
        <div className="w-full bg-[#F2FBFA] relative flex items-center justify-center">
          <ButtonBack
            role="button"
            aria-label="slide backward"
            className="absolute z-30  ml-8 left-0  cursor-pointer"
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
                stroke="black"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonBack>
          <div className="w-full bg-[#F2FBFA]  h-full mx-auto overflow-x-hidden overflow-y-hidden">
            <Slider>
              <div
                id="slider"
                className="h-[450px] flex bg-[#F2FBFA]  items-center w-full justify-center transition ease-out duration-700"
              >
                {testimonialData.map((item, i) => (
                  <Slide key={i} className="bg-white">
                    <section className="relative  overflow-hidden bg-[#F2FBFA]  px-6 py-24 sm:py-32 lg:px-8">
                      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white   ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
                      <div className="mx-auto max-w-2xl lg:max-w-4xl">
                        <div className="mt-10 border-[1px] bg-white max-w-2xl mx-auto   rounded-xl flex items-center justify-center flex-col gap-3 py-10 px-5">
                          <div className="text-center flex justify-center items-center text-sm md:px-0 sm:px-10 px-4 font-medium  text-gray-900 md:text-base">
                            <p className="text-wrap text-center sm:w-[80%] w-full">
                              {item.thoughts}
                            </p>
                          </div>
                          <div className="mt-10">
                            <img
                              className="mx-auto h-10 w-10 rounded-full"
                              src={item.imageUrl}
                              alt=""
                            />
                            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                              <div className="font-semibold text-gray-900">
                                {item.userName}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Slide>
                ))}
              </div>
            </Slider>
          </div>
          <ButtonNext
            role="button"
            aria-label="slide forward"
            className="absolute z-30 right-0 mr-8"
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
                stroke="black"
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

export default Testimonial;
