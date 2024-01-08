import React from "react";
import { FaAngleDown } from "react-icons/fa";

const Accordian = ({ day, heading, isOpen, text, clickFunction }) => {
  return (
    <div className="flex flex-col gap-5 border-[1px] border-gray-300 rounded-lg">
      <div
        className="w-full flex justify-between px-3 bg-gray-200 py-3 rounded-lg items-center"
        onClick={clickFunction}
      >
        <div className="flex items-center gap-5">
          <button className="px-6 flex items-center justify-center py-2 text-white bg-[#FD4A4C] rounded-lg">
            {day}
          </button>
          <p className="font-medium">{heading}</p>
        </div>
        <FaAngleDown size={20} />
      </div>
      {isOpen === true && (
        <div className="flex justify-center items-center px-5 py-3">
          <p className="tracking-wider">{text}</p>
        </div>
      )}
    </div>
  );
};

export default Accordian;
