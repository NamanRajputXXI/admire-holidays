"use client";

import React, { useEffect, useRef } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
const TourismAlliance = () => {
  const hotelsData = [
    {
      id: 1,
      imageUrl: "royalHeritageLogo.png",
    },
    {
      id: 2,
      imageUrl: "pineViewLogo.png",
    },
    {
      id: 3,
      imageUrl: "pillicanLogo.png",
    },
    {
      id: 4,
      imageUrl: "reefValley.png",
    },
    {
      id: 5,
      imageUrl: "sangrilla.png",
    },
    {
      id: 6,
      imageUrl: "casaMontana.png",
    },
    {
      id: 7,
      imageUrl: "munnarCastle.png",
    },
    {
      id: 8,
      imageUrl: "bambooDale.png",
    },
    {
      id: 9,
      imageUrl: "periyarNest.png",
    },
    {
      id: 10,
      imageUrl: "grandThekaddy.png",
    },

    {
      id: 11,
      imageUrl: "sangrilla.png",
    },
  ];
  const sliderContainer = useRef(null);
  const keenSlider = useRef(null);

  useEffect(() => {
    if (sliderContainer.current && !keenSlider.current) {
      keenSlider.current = new KeenSlider(sliderContainer.current, {
        loop: true,
        slides: {
          origin: "center",
          perView: 1, // Default to 1 review visible
          spacing: 16,
        },
        autoplay: {
          delay: 3000, // Delay in milliseconds between slides
          pauseOnHover: true, // Pause autoplay when hovering over the slider
        },
        breakpoints: {
          "(min-width: 288px)": {
            slides: {
              origin: "auto",
              perView: 2, // Show 2 reviews on screens >= 768px
              spacing: 32,
            },
          },
          "(min-width: 768px)": {
            slides: {
              origin: "auto",
              perView: 3, // Show 2 reviews on screens >= 768px
              spacing: 32,
            },
          },
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 5, // Show 3 reviews on screens >= 1024px
              spacing: 32,
            },
          },
        },
      });
    }
  }, []);

  const handlePrevSlide = () => {
    if (keenSlider.current) {
      keenSlider.current.prev();
    }
  };

  const handleNextSlide = () => {
    if (keenSlider.current) {
      keenSlider.current.next();
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-8 py-12 sm:px-6  lg:mt-32  lg:ps-8 xl:py-24">
        <div className="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Hotel Alliances
          </h2>
          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              onClick={handlePrevSlide}
              className="rounded-full border flex justify-center  items-center bg-red-600 border-red-500 p-3 text-rose-600 transition  hover:text-white"
            >
              <span className="inline-block h-5 w-5">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="text-white" // Apply 'text-black' class directly here
                >
                  <path
                    fill="currentColor"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </span>
            </button>
            <button
              aria-label="Next slide"
              onClick={handleNextSlide}
              className="rounded-full border bg-red-600 border-rose-600 p-3 flex justify-center items-center text-rose-600 transition  hover:text-white"
            >
              <span className="inline-block h-5 w-5">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  className="text-white" // Change this class to 'text-black'
                >
                  <path
                    fill="currentColor"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        <div className=" sm:mt-16 mt-8 lg:col-span-2  px-2 lg:mx-0">
          <div ref={sliderContainer} className="keen-slider">
            {hotelsData.map((item, i) => (
              <div
                className="keen-slider__slide h-48 w-24 flex items-center "
                key={item.id}
              >
                <img
                  className="mx-auto mb-6 w-full max-h-full max-w-full   dark:shadow-black/20 "
                  src={item.imageUrl}
                  alt="avatar"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismAlliance;
