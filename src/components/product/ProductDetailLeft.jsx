"use client";
import React, { useState } from "react";
import Accordian from "./Accordian";
import { TiTick } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import { CiStar } from "react-icons/ci";
import { FaCarSide, FaHome, FaPlane, FaUserCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdConnectingAirports, MdDateRange } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
const ProductDetailLeft = ({
  overview,
  day1Heading,
  day1Overview,
  day2Heading,
  day2Overview,
  day3Heading,
  day3Overview,
  inclusion1,
  inclusion2,
  inclusion3,
  inclusion4,
  exclusion1,
  exclusion2,
  exclusion3,
  exclusion4,
  mapSrc,
  reviewHeading,
  reviews,
}) => {
  const [dayOneOpen, setDayOneOpen] = useState(false);
  const [dayTwoOpen, setDayTwoOpen] = useState(false);
  const [dayThreeOpen, setDayThreeOpen] = useState(false);
  const dayOneClick = () => {
    setDayOneOpen((prev) => !prev);
  };
  const dayTwoClick = () => {
    setDayTwoOpen((prev) => !prev);
  };
  const dayThreeClick = () => {
    setDayThreeOpen((prev) => !prev);
  };
  return (
    <div className="flex my-10 lg:w-[65%] w-full flex-col gap-6">
      <h5 className="md:text-3xl text-xl font-bold">Overview</h5>
      <p className="text-base text-gray-700">{overview}</p>

      <div className="h-[1px] my-8 bg-gray-300 w-full"></div>
      <div className="grid sm:gap-5 gap-10 pb-10 sm:grid-cols-5 grid-cols-2 items-center justify-center">
        <div className="flex text-xs text-gray-800 flex-col items-center justify-center gap-2">
          <FaCarSide size={40} color="#f0901f" />
          Transport Included
        </div>
        <div className="flex text-xs text-gray-800 flex-col items-center justify-center gap-2">
          <IoFastFoodSharp size={40} color="#f0901f" />
          Meals Included
        </div>
        <div className="flex text-xs text-gray-800 flex-col items-center justify-center gap-2">
          <FaHome size={40} color="#f0901f" />
          Stay Included
        </div>
        <div className="flex text-xs text-gray-800 flex-col items-center justify-center gap-2">
          <FaPlane size={40} color="#f0901f" />
          Airport Transfers
        </div>
        <div className="flex text-xs text-gray-800 flex-col items-center justify-center gap-2">
          <BsFillEmojiSunglassesFill size={40} color="#f0901f" />
          Sightseeing
        </div>
      </div>
      <div className="h-[1px] my-8 bg-gray-300 w-full"></div>

      <div className="flex flex-col gap-10">
        <h1 className="font-bold  text-2xl md:text-4xl">Tour Plan</h1>
        <Accordian
          day={"Day 1"}
          heading={day1Heading}
          text={day1Overview}
          isOpen={dayOneOpen}
          clickFunction={dayOneClick}
        />
        <Accordian
          day={"Day 2"}
          heading={day2Heading}
          text={day2Overview}
          isOpen={dayTwoOpen}
          clickFunction={dayTwoClick}
        />
        <Accordian
          day={"Day 3"}
          heading={day3Heading}
          text={day3Overview}
          isOpen={dayThreeOpen}
          clickFunction={dayThreeClick}
        />
        <div className="h-[1px] my-8 bg-gray-300 w-full"></div>
        <h1 className="font-bold text-2xl  md:text-4xl">Included</h1>
        <div className="flex  flex-col  gap-10 ">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <TiTick color="#00BB98" size={30} />
              <p className="font-light text-sm sm:text-base">{inclusion1}</p>
            </div>
            <div className="flex items-center gap-3">
              <TiTick color="#00BB98" size={30} />
              <p className="font-light text-sm sm:text-base">{inclusion2}</p>
            </div>
            <div className="flex items-center gap-3">
              <TiTick color="#00BB98" size={30} />
              <p className="font-light text-sm sm:text-base">{inclusion3}</p>
            </div>
            <div className="flex items-center gap-3">
              <TiTick color="#00BB98" size={30} />
              <p className="font-light text-sm sm:text-base">{inclusion4}</p>
            </div>
          </div>
          <h1 className="font-bold text-2xl  md:text-4xl">Excluded</h1>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <RxCross1 color="#FD4A4C" size={20} />
              <p className="font-light">{exclusion1}</p>
            </div>
            <div className="flex items-center gap-3">
              <RxCross1 color="#FD4A4C" size={20} />
              <p className="font-light">{exclusion2}</p>
            </div>
            <div className="flex items-center gap-3">
              <RxCross1 color="#FD4A4C" size={20} />
              <p className="font-light">{exclusion3}</p>
            </div>
            <div className="flex items-center gap-3">
              <RxCross1 color="#FD4A4C" size={20} />
              <p className="font-light">{exclusion4}</p>
            </div>
          </div>
        </div>

        <div className="h-[1px] my-8 bg-gray-300 w-full"></div>
        <h1 className="font-bold  text-2xl md:text-4xl">Tour Map</h1>
        <div>
          <iframe
            src={mapSrc}
            className="lg:w-[700px] lg:h-[450px] sm:w-96 sm:h-96 w-72 h-72"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="h-[1px] my-8 bg-gray-300 w-full"></div>
        <h1 className="font-medium text-xl md:text-2xl">{reviewHeading}</h1>
        <div className="flex  sm:flex-row flex-col gap-5">
          <div className="bg-white flex-col flex justify-center gap-5 items-center h-[400px] w-full sm:w-1/2">
            <div className="flex gap-5">
              <p className="text-gray-400">/5 </p>
              <p>Based On 0 ratings</p>
            </div>
            <div className="flex gap-2 ">
              <CiStar size={30} color="#fcb900" />
              <CiStar size={30} color="#fcb900" />
              <CiStar size={30} color="#fcb900" />
              <CiStar size={30} color="#fcb900" />
              <CiStar size={30} color="#fcb900" />
            </div>
          </div>
          <div className="bg-white flex gap-4  flex-col justify-center items-center px-5 h-[400px] w-full sm:w-1/2">
            <div className="flex flex-col gap-3 w-full">
              <p>5 Star</p>
              <div className="bg-gray-300 text-sm text-white px-5 rounded-lg">
                0 %
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <p>4 Star</p>
              <div className="bg-gray-300 text-sm   text-white px-5 rounded-lg">
                0 %
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <p>3 Star</p>
              <div className="bg-gray-300 text-sm   text-white px-5 rounded-lg">
                0 %
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <p>2 Star</p>
              <div className="bg-gray-300  text-sm text-white px-5 rounded-lg">
                0 %
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <p>1 Star</p>
              <div className="bg-gray-300  text-sm text-white px-5 rounded-lg">
                0 %
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg py-2 text-gray-600 px-5">
          Reviewed by 02 customer(s)
        </div>

        {reviews.map((review, index) => (
          <div
            className="bg-gray-200 rounded-lg py-5 gap-10 pt-3 flex px-5"
            key={index}
          >
            <div className="flex items-center flex-col justify-center gap-3">
              <FaUserCircle
                className=" sm:text-[100px] text-[40px]"
                color="gray"
              />
              <p className="font-medium">{review.name}</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <CiStar size={25} color="#fcb900" />
                <CiStar size={25} color="#fcb900" />
                <CiStar size={25} color="#fcb900" />
                <CiStar size={25} color="#fcb900" />
                <CiStar size={25} color="#fcb900" />
              </div>
              <p className="sm:text-sm text-xs">{review.review}</p>
              <div className="flex text-gray-500 gap-3 items-center">
                <MdDateRange size={20} />
                {review.date}
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-5 bg-[#F2FBFA] rounded-lg px-5 py-3">
          <h5 className="text-xl">LEAVE FEEDBACK ABOUT THIS</h5>
          <p className="font-light">
            Your email address will not be published.
          </p>
          <div className="flex gap-2 items-center">
            <FaStar size={20} color="#fcb900" />
            <FaStar size={20} color="#fcb900" />
            <FaStar size={20} color="#fcb900" />
            <FaStar size={20} color="#fcb900" />
            <FaStar size={20} color="#fcb900" />
          </div>
          <form action="" className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Name"
              className="h-10 px-5 rounded-lg"
            />
            <input
              type="email "
              placeholder="Email"
              className="h-10 px-5 rounded-lg"
            />
            <textarea
              name=""
              id=""
              className="rounded-lg px-5 py-3"
              cols="30"
              rows="10"
              placeholder="Describe your review"
            ></textarea>
            <button className="bg-[#FD4A4C] text-white py-3 px-3 w-44">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailLeft;
