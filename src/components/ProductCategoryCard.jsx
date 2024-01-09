import Link from "next/link";
import React from "react";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const ProductCategoryCard = ({ url, days, destination, details }) => {
  return (
    <div className="flex flex-col gap-5">
      <img src={url} alt="" className="w-[300px] rounded-lg h-[280px]" />
      <div className="absolute flex flex-col justify-between h-[280px]   my-5 px-3 ">
        <button className="text-white bg-red-500  p-2 rounded-lg">
          Featured
        </button>
        <div className="bg-white gap-2 flex text-[#00BB98] border-[#00BB98] border-2 rounded-lg px-3 py-2 ">
          <CiClock2 size={24} color="#00BB98" />
          {days}
        </div>
      </div>
      <div className="flex flex-col gap-2 py-5 px-3 w-fit">
        <h5 className="text-lg font-semibold">{destination}</h5>
        <div className="flex gap-2 items-center">
          <CiLocationOn size={20} color="#00BB98" />
          <p className="font-light">{details}</p>
        </div>
        <Link
          className="text-white bg-red-500 hover:bg-white border-[1px] border-red-500 hover:text-red-600 flex justify-center items-center w-[100px] font-medium py-2 rounded-lg"
          href="/product/jaipur"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default ProductCategoryCard;
