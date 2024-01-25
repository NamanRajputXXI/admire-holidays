"use client";
import React, { useState, useEffect } from "react";
import Accordian from "./Accordian";
import { TiTick } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import { CiStar } from "react-icons/ci";
import { FaCarSide, FaHome, FaPlane, FaUserCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";

const ProductDetailLeft = ({
  overview,
  itinerary,
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
  const [allOpen, setAllOpen] = useState(false);
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

  const expandAll = () => {
    setAllOpen(!allOpen);
    setDayOneOpen(!allOpen);
    setDayTwoOpen(!allOpen);
    setDayThreeOpen(!allOpen);
  };

  const [activeLink, setActiveLink] = useState("#itinerary");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  useEffect(() => {
    console.log(itinerary[0].day2Overview);
  }, []);

  return (
    <div className="flex my-10 lg:w-[65%] rounded-lg w-full flex-col gap-6">
      <h5 className="md:text-3xl text-xl font-bold">Overview</h5>
      <p className="text-base text-gray-700">{overview}</p>

      <div className="grid sm:gap-5 gap-10  my-10 sm:grid-cols-5 grid-cols-2 items-center justify-center">
        <div className="flex text-xs text-gray-800 flex-col items-center justify-center gap-2">
          <FaCarSide size={40} color="#3a2f5b" />
          Transport Included
        </div>
        <div className="flex text-xs text-gray-800 flex-col items-center justify-center gap-2">
          <IoFastFoodSharp size={40} color="#3a2f5b" />
          Meals Included
        </div>
        <div className="flex text-xs text-gray-800 flex-col items-center justify-center gap-2">
          <FaHome size={40} color="#3a2f5b" />
          Stay Included
        </div>
        <div className="flex text-xs text-gray-800 flex-col items-center justify-center gap-2">
          <FaPlane size={40} color="#3a2f5b" />
          Airport Transfers
        </div>
        <div className="flex text-xs text-gray-800 flex-col items-center justify-center gap-2">
          <BsFillEmojiSunglassesFill size={40} color="#3a2f5b" />
          Sightseeing
        </div>
      </div>

      <div className="flex flex-col gap-10 bg-white rounded-lg px-4 py-4">
        <div className="grid sm:grid-cols-5 grid-cols-2 sm:gap-0 gap-3  py-2 w-full  text-xs text-gray-700 sm:text-base  items-center justify-center">
          <div
            className={`flex items-center py-2  px-2 justify-center border-l-[0.5px]  border-x-gray-300 border-t-gray-400 border-t-[1px] ${
              activeLink === "#itinerary"
                ? "border-b-[1px] border-b-red-500"
                : "border-b-gray-400 border-b-[1px]"
            }`}
          >
            <a
              id="itinerary"
              href="#itinerary"
              onClick={() => handleLinkClick("#itinerary")}
            >
              Itinerary
            </a>
          </div>
          <div
            className={`flex items-center py-2 px-2 justify-center border-l-[0.5px]  border-l-gray-300 border-t-gray-400 border-t-[1px] ${
              activeLink === "#map"
                ? "border-b-[1px] border-b-red-500"
                : "border-b-gray-400 border-b-[1px]"
            }`}
          >
            <a href="#map" onClick={() => handleLinkClick("#map")}>
              Map
            </a>
          </div>
          <div
            className={`flex items-center py-2 px-2 justify-center border-l-[0.5px]  border-x-gray-300 border-t-gray-400 border-t-[1px] ${
              activeLink === "#reviews"
                ? "border-b-[1px] border-b-red-500"
                : "border-b-gray-400 border-b-[1px]"
            }`}
          >
            <a href="#reviews" onClick={() => handleLinkClick("#reviews")}>
              Reviews
            </a>
          </div>
          <div
            className={`flex items-center py-2 px-2 justify-center border-l-[0.5px]  border-x-gray-300 border-t-gray-400 border-t-[1px] ${
              activeLink === "#inclusions"
                ? "border-b-[1px] border-b-red-500"
                : "border-b-gray-400 border-b-[1px]"
            }`}
          >
            <a
              href="#inclusions"
              onClick={() => handleLinkClick("#inclusions")}
            >
              Inclusions
            </a>
          </div>
          <div
            className={`flex items-center py-2 px-2 justify-center border-x-[0.5px]  border-x-gray-300 border-t-gray-400 border-t-[1px] ${
              activeLink === "#exclusions"
                ? "border-b-[1px] border-b-red-500"
                : "border-b-gray-400 border-b-[1px]"
            }`}
          >
            <a
              href="#exclusions"
              onClick={() => handleLinkClick("#exclusions")}
            >
              Exclusions
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-10 relative">
          <button
            className="flex items-center text-sm absolute right-0 top-[-30px] sm:right-4 sm:top-4 justify-center px-4 py-1 border-[1px] border-red-500 text-red-500  rounded-lg cursor-pointer"
            style={{ minWidth: "100px" }} // Set a fixed width for the button
            onClick={expandAll}
          >
            Expand all
          </button>
          <Accordian
            day={itinerary[0].day}
            heading={itinerary[0].day1Heading}
            isOpen={dayOneOpen}
            dayOverview={itinerary[0].day1Overview}
            clickFunction={dayOneClick}
          />

          <Accordian
            day={itinerary[1].day}
            heading={itinerary[1].day2Heading}
            isOpen={dayTwoOpen}
            dayOverview={itinerary[1].day2Overview}
            clickFunction={dayTwoClick}
          />
          <Accordian
            day={itinerary[2].day}
            heading={itinerary[2].day3Heading}
            isOpen={dayThreeOpen}
            dayOverview={itinerary[2].day3Overview}
            clickFunction={dayThreeClick}
          />
        </div>

        <h1 className="font-bold text-2xl  mt-10 md:text-4xl">Included</h1>
        <div className="flex  flex-col mb-10 gap-10 ">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <TiTick color="#00BB98" size={30} />
              <p className="font-light text-sm sm:text-base">{inclusion1}</p>
            </div>
            <div className="flex items-center gap-3">
              <TiTick color="#00BB98" size={30} />
              <p className="font-light text-sm sm:text-base" id="exclusions">
                {inclusion2}
              </p>
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
          <h1 className="font-bold text-2xl mt-10  md:text-4xl">Excluded</h1>

          <div className="flex flex-col mb-10 gap-4">
            <div className="flex items-center gap-5">
              <ImCross color="#FD4A4C" size={20} />
              <p className="font-light">{exclusion1}</p>
            </div>
            <div className="flex items-center gap-5">
              <ImCross color="#FD4A4C" size={20} />
              <p className="font-light">{exclusion2}</p>
            </div>
            <div className="flex items-center gap-5">
              <ImCross color="#FD4A4C" size={20} />
              <p className="font-light">{exclusion3}</p>
            </div>
            <div className="flex items-center gap-5">
              <ImCross color="#FD4A4C" size={20} />
              <p className="font-light">{exclusion4}</p>
            </div>
          </div>
        </div>

        <h1 className="font-bold  text-2xl md:text-4xl">Tour Map</h1>
        <div>
          <iframe
            src={mapSrc}
            className="lg:w-[700px] lg:h-[450px] sm:w-96 sm:h-96 w-64 h-64"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="h-[1px] my-8 bg-gray-300 w-full"></div>
        <h1 className="font-medium text-xl md:text-2xl">{reviewHeading}</h1>
        <div className="flex  sm:flex-row flex-col gap-5">
          <div className="bg-white flex-col flex sm:justify-center justify-start  gap-5 sm:items-center sm:h-[400px] h-fit w-full sm:w-1/2">
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
              <div
                className="bg-gray-300  text-sm text-white px-5 rounded-lg"
                id="reviews"
              >
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
              <div className="flex items-center sm:gap-2 gap-1">
                <CiStar size={20} color="#fcb900" />
                <CiStar size={20} color="#fcb900" />
                <CiStar size={20} color="#fcb900" />
                <CiStar size={20} color="#fcb900" />
                <CiStar size={20} color="#fcb900" />
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
