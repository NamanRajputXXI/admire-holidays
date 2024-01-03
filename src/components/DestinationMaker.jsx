import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CgCalendarDates } from "react-icons/cg";
import { IoMdPerson } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
const DestinationMaker = () => {
  return (
    <div className="p-4 bg-white    md:gap-6 gap-10   md:grid-cols-4 sm:grid-cols-2 grid-cols-1   rounded-2xl  grid lg:grid-cols-4 items-center justify-center">
      <div className="flex-col items-center justify-center px-2 flex gap-5">
        <div className="flex items-center gap-4">
          <CiLocationOn color="red" size={30} />
          <p className="text-sm"> Destination</p>
        </div>
        <p className="text-gray-500  text-base md:text-lg">
          <p className="text-sm"> Where you going</p>
        </p>
      </div>
      <div className="flex-col items-center justify-center flex gap-5">
        <div className="flex items-center gap-4">
          <CgCalendarDates color="red" size={30} />

          <p className="text-sm">Dates</p>
        </div>
        <p className="text-gray-500  text-sm">DD-MM-YY</p>
      </div>
      <div className="flex-col items-center justify-center flex gap-5">
        <div className="flex items-center gap-4">
          <IoMdPerson color="red" size={30} />
          <p className="text-sm">Guest</p>
        </div>
        <p className="text-gray-500  text-sm">2 Person</p>
      </div>
      <div className="flex-col items-center justify-center flex gap-5">
        <button className="w-20 flex items-center justify-center p-4 h-16 bg-red-600 text-white">
          <CiSearch size={40} color="white" />
        </button>
      </div>
    </div>
  );
};

export default DestinationMaker;
