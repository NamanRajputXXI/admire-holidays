import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CgCalendarDates } from "react-icons/cg";
import { IoMdPerson } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
const DestinationMaker = () => {
  return (
    <div className="p-5 bg-white mx-auto  md:ml-10  mt-[-40px] md:gap-0 gap-10 w-[80%] border-[1px] lg:w-[60%] md:w-[80%] md:grid-cols-4 sm:grid-cols-2 grid-cols-1   rounded-2xl border-gray-500 grid lg:grid-cols-4 items-center justify-center">
      <div className="flex-col items-center justify-center px-2 flex gap-5">
        <div className="flex gap-4">
          <CiLocationOn color="red" size={30} />
          Destination
        </div>
        <p className="text-gray-500  text-base md:text-lg">
          Where are you going
        </p>
      </div>
      <div className="flex-col items-center justify-center flex gap-5">
        <div className="flex gap-4">
          <CgCalendarDates color="red" size={30} />
          Dates
        </div>
        <p className="text-gray-500  text-base md:text-lg">DD-MM-YY</p>
      </div>
      <div className="flex-col items-center justify-center flex gap-5">
        <div className="flex gap-4">
          <IoMdPerson color="red" size={30} />
          Guest
        </div>
        <p className="text-gray-500  text-base md:text-lg">2 Person</p>
      </div>
      <div className="flex-col items-center justify-center flex gap-5">
        <button className="w-20 flex items-center justify-center p-4 h-20 bg-red-600 text-white">
          <CiSearch size={40} color="white" />
        </button>
      </div>
    </div>
  );
};

export default DestinationMaker;
