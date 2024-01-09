"use client";
import React, { useState } from "react";
import Accordian from "./Accordian";
import { TiTick } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import { CiStar } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
const ProductDetailLeft = () => {
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
      <p className="text-base text-gray-700">
        Jaipur is the capital of India’s Rajasthan state. It evokes the royal
        family that once ruled the region and that, in 1727, founded what is now
        called the Old City, or “Pink City” for its trademark building color. At
        the center of its stately street grid (notable in India) stands the
        opulent, colonnaded City Palace complex. With gardens, courtyards and
        museums, part of it is still a royal residence
      </p>
      <div className="h-[1px] my-8 bg-gray-300 w-full"></div>
      <div className="flex flex-col gap-10">
        <h1 className="font-bold  text-2xl md:text-4xl">Tour Plan</h1>
        <Accordian
          day={"Day 1"}
          heading={"Departure"}
          text={
            "Morning drive to Jaipur, On arrival at Jaipur check-in at hotel. Rest of the day free at leisure or you can enjoy the recreational facilities offered by hotel, In the evening visit local market of Jaipur for shopping. Jaipur is a shoppers’ paradise. You can find different kinds of handicrafts, jewelry, fabrics and carpets here. Overnight stay at hotel."
          }
          isOpen={dayOneOpen}
          clickFunction={dayOneClick}
        />
        <Accordian
          day={"Day 2"}
          heading={"The South Coast"}
          text={
            "Morning after breakfast we take you for full day sightseeing tour of Jaipur which starts from Amber Fort, Ascend the Fort in open jeep and experience the best of fort. It is one of the principal tourist attractions in the Jaipur area, located high on a hill. Amer Fort was built by Raja Man Singh, it is known for its artistic style of Hindu elements. With its large ramparts, series of gates and cobbled paths, the fort overlooks the Maota Lake at its forefront. In the afternoon visit City Palace, Jantar Mantar Observatory, and Ram Niwas Gardens. Drive past Hawa Mahal & Jaigarh Fort.Jaipur is named after the King Sawai Jai Singh, the founder of the city and the city was built in four years, to complete in November of 1731. Jaipur is also known as the Pink City. In 1853, when the Prince of Wales visited the city, all buildings were painted with the colour made from sand. All the buildings in the walled city have been painted with the same colour since then. Late evening drive back to the hotel. Overnight stay at hotel."
          }
          isOpen={dayTwoOpen}
          clickFunction={dayTwoClick}
        />
        <Accordian
          day={"Day 3"}
          heading={"Optional Activities"}
          text={
            "Jaipur- Delhi Departure (260 Kms / 05 hours drive)  Morning after breakfast, drive back to Delhi."
          }
          isOpen={dayThreeOpen}
          clickFunction={dayThreeClick}
        />
        <div className="h-[1px] my-8 bg-gray-300 w-full"></div>
        <h1 className="font-bold text-2xl  md:text-4xl">Included/Excluded</h1>
        <div className="flex sm:flex-row flex-col gap-5 ">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <TiTick color="#00BB98" size={30} />
              <p className="font-light text-sm sm:text-base">
                Specialized bilingual guide
              </p>
            </div>
            <div className="flex items-center gap-3">
              <TiTick color="#00BB98" size={30} />
              <p className="font-light text-sm sm:text-base">
                Private Transport
              </p>
            </div>
            <div className="flex items-center gap-3">
              <TiTick color="#00BB98" size={30} />
              <p className="font-light text-sm sm:text-base">
                Entrance fees (Cable, car and Moon Valley)
              </p>
            </div>
            <div className="flex items-center gap-3">
              <TiTick color="#00BB98" size={30} />
              <p className="font-light text-sm sm:text-base">
                Box lunch water, banana apple and chocolate
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <RxCross1 color="#FD4A4C" size={20} />
              <p className="font-light">Departure Taxes</p>
            </div>
            <div className="flex items-center gap-3">
              <RxCross1 color="#FD4A4C" size={20} />
              <p className="font-light">Entry Fees</p>
            </div>
            <div className="flex items-center gap-3">
              <RxCross1 color="#FD4A4C" size={20} />
              <p className="font-light">5 Star Accommodation</p>
            </div>
            <div className="flex items-center gap-3">
              <RxCross1 color="#FD4A4C" size={20} />
              <p className="font-light">Airport Transfers</p>
            </div>
          </div>
        </div>
        <div className="h-[1px] my-8 bg-gray-300 w-full"></div>
        <h1 className="font-bold  text-2xl md:text-4xl">Tour Map</h1>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45872.534320582!2d75.76503740618563!3d26.922470930222502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1704695586865!5m2!1sen!2sin"
            className="lg:w-[700px] lg:h-[450px] sm:w-96 sm:h-96 w-72 h-72"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="h-[1px] my-8 bg-gray-300 w-full"></div>
        <h1 className="font-medium text-xl md:text-2xl">
          2 Reviews for Jaipur
        </h1>
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

        <div className="bg-gray-200 rounded-lg py-5 gap-10 pt-3 flex px-5">
          <div className="flex items-center flex-col justify-center gap-3">
            <FaUserCircle
              className=" sm:text-[100px] text-[40px]"
              color="gray"
            />
            <p className="font-medium">Mohak</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <CiStar size={25} color="#fcb900" />
              <CiStar size={25} color="#fcb900" />
              <CiStar size={25} color="#fcb900" />
              <CiStar size={25} color="#fcb900" />
              <CiStar size={25} color="#fcb900" />
            </div>
            <p className="sm:text-sm text-xs">
              prednisone 40mg oral{" "}
              <span className="text-[#FD4A4C]">
                order prednisone 5mg generic
              </span>
            </p>
            <div className="flex text-gray-500 gap-3 items-center">
              <MdDateRange size={20} />
              January 7, 2024
            </div>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg py-5 gap-10 pt-3 flex px-5">
          <div className="flex items-center flex-col justify-center gap-3">
            <FaUserCircle
              className=" sm:text-[100px] text-[40px]"
              color="gray"
            />
            <p className="font-medium">Vimal</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <CiStar size={25} color="#fcb900" />
              <CiStar size={25} color="#fcb900" />
              <CiStar size={25} color="#fcb900" />
              <CiStar size={25} color="#fcb900" />
              <CiStar size={25} color="#fcb900" />
            </div>
            <p className="sm:text-sm text-xs">
              best off counter seasonal allergy{" "}
              <span className="text-[#FD4A4C]">
                best allergy pill for itching
              </span>{" "}
              best allergy pill for itching
            </p>
            <div className="flex text-gray-500 gap-3 items-center">
              <MdDateRange size={20} />
              January 4, 2024
            </div>
          </div>
        </div>
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
