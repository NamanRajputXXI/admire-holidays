import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Accordian = ({ day, heading, isOpen, text, clickFunction }) => {
  return (
    <div className="flex flex-col gap-5  rounded-lg" id="itinerary">
      <div
        className="w-full flex gap-10 px-3  py-3 rounded-lg items-center"
        onClick={clickFunction}
      >
        <div className="flex items-center gap-5">
          <button className="px-6 flex items-center font-semibold  sm:text-base text-sm justify-center py-2 border-[1px] border-gray-400  rounded-lg">
            {day}
          </button>
          <p className=" font-semibold  sm:text-base text-sm">{heading}</p>
        </div>
        <FaAngleDown size={20} color="#ef4444" />
      </div>
      {isOpen === true && (
        <div className="flex justify-center items-center px-5 py-3">
          <p className="tracking-wider sm:text-base text-sm">{text}</p>
        </div>
      )}
    </div>
  );
};

export default Accordian;
