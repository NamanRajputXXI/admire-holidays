import React from "react";
import { CiShoppingTag } from "react-icons/ci";
import { IoIosAirplane } from "react-icons/io";
const ProductRightPricing = () => {
  return (
    <div className="p-10 min-w-[35%] flex flex-col gap-4  my-10 bg-white">
      <div className="flex text-lg font-medium gap-3 items-center">
        <CiShoppingTag size={30} color="#FD4A4C" /> From
      </div>
      <div className="flex items-baseline gap-2">
        <p className="text-[#00BB98] text-2xl font-bold">₹399.00</p>
        <p className="text-gray-500 line-through">₹390.00</p>
      </div>
      <div className="flex justify-center gap-1 items-center relative">
        <div className="bg-[#FD4A4C] h-[1px] z-10 w-[50%]"></div>
        <IoIosAirplane size={40} color="#FD4A4C" />
        <div className="bg-[#FD4A4C] h-[1px] z-10 w-[50%]"></div>
      </div>

      {/* Tabs */}
      <div>
        <div className="flex text-gray-500 justify-between items-center">
          <p>Booking Form</p>
          <p>Enquiry Form</p>
        </div>
        <hr className="my-2" />
      </div>
    </div>
  );
};

export default ProductRightPricing;
