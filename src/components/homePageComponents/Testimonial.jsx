"use client";
import React, { useState } from "react";

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Prathmesh Sagare,Mumbai",
      quote:
        "My contact at Admire Holidays was Mr. Sandeep. He followed up daily during my trip, resolving queries promptly. Our Manali-Kulu trip was enjoyable, with good hotels but average food. Driver Mr. Saurabh was exceptional.",
      rating: 5,
      image: "review1Image.jpg",
    },
    {
      name: "Akash Desarda,Mumbai",
      quote:
        " I will definitely recommend to use service of Admire holidays. We booked Andaman honeymoon package. It was very good experience. We got complete support from beginning till our vacation was completed.",
      rating: 5,
      image: "review2Image.jpg",
    },
    {
      name: " Prabhul, Kerala",
      quote:
        "I booked a Thailand holiday package for my parents through Admire Holidays. Despite initial concerns due to bad reviews, Sandeep from Admire Holidays provided exceptional service, ensuring a smooth trip. My parents returned happy and had an amazing experience. Kudos to Admire Holidays! 👏🏻👏🏻👏🏻",
      rating: 5,
      image: "review3Image.jpg",
    },
    {
      name: "Sudeeti Chaturvedi,Lucknow",
      quote:
        "We had a good experience with admire holidays.The entire trip was smoothly coordinated by them and they are available at any time to answer the phone calls.good hospitality affordable rate",
      rating: 5,
      image: "review4Image.jpg",
    },
    {
      name: "Sonal Sahu,Mumbai",
      quote:
        "It was nice trip to Andaman with admire holidays they provided best facilities to visit your dream places...",
      rating: 5,
      image: "review5Image.jpg",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <p className="text-center text-xl font-medium text-[#00BB98] my-4 italic">
          Testimonials
        </p>
        <h1 className="text-center md:text-5xl  text-3xl  font-bold">
          What Our Happy Clients Say
        </h1>
        <div
          id="carouselExampleCaptions"
          className="relative mt-20"
          data-te-carousel-init
          data-te-carousel-slide
        >
          <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`relative float-left -mr-[100%] ${
                  index === activeIndex ? "block" : "hidden"
                } w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
                data-te-carousel-active={index === activeIndex}
                data-te-carousel-item
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  className="mx-auto mb-6 h-[150px] rounded-full shadow-lg dark:shadow-black/20 w-[150px]"
                  src={testimonial.image}
                  alt="avatar"
                />
                <div className="flex flex-wrap justify-center">
                  <div className="w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
                    <h5 className="mb-2 text-lg font-bold">
                      {testimonial.name}
                    </h5>
                    <p className="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                      {testimonial.profession}
                    </p>
                    <p className="mb-6 text-neutral-500 dark:text-neutral-300">
                      {testimonial.quote}
                    </p>
                    <ul className="mb-0 flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <li key={i}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 96 960 960"
                            className={`w-5 ${
                              i < testimonial.rating
                                ? "text-yellow-400"
                                : "text-neutral-400"
                            }`}
                          >
                            <path
                              fill="currentColor"
                              d={
                                i < testimonial.rating
                                  ? "M233 976 65 695l218-189L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                                  : "M480 757v387l157-94 157 94V757l-157 95-157-95Zm-247 219 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                              }
                            />
                          </svg>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="absolute top-0 bottom-0 left-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide="prev"
            onClick={handlePrev}
          >
            <span className="inline-block h-8 w-8">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="text-neutral-600 dark:text-neutral-300"
              >
                <path
                  fill="currentColor"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Previous
            </span>
          </button>
          <button
            className="absolute top-0 bottom-0 right-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            data-te-target="#carouselExampleCaptions"
            data-te-slide="next"
            onClick={handleNext}
          >
            <span className="inline-block h-8 w-8">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="text-neutral-600 dark:text-neutral-300"
              >
                <path
                  fill="currentColor"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </span>
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Next
            </span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default TestimonialCarousel;
