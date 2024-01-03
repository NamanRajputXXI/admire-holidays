import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaRegCommentDots, FaRegFolderOpen } from "react-icons/fa";

const BlogPageCard = ({ imageUrl, title, date, comment, detail, i }) => {
  return (
    <div className="w-[100%] flex flex-col gap-10  " key={i}>
      <img src={imageUrl} className="w-[100%]" alt="" />
      <h1 className=" md:text-3xl text-xl  font-semibold">{title}</h1>
      <div className="flex text-xs sm:text-base gap-10 items-center">
        <div className="flex items-center   sm:flex-row flex-col  gap-3">
          <CiCalendarDate size={30} color="#ef4444" />
          <p className="text-gray-600 ">{date}</p>
        </div>
        <div className="flex items-center gap-3 sm:flex-row flex-col ">
          <FaRegFolderOpen size={30} color="#ef4444" />
          <p className="text-gray-600 ">Travel</p>
        </div>
        <div className="flex items-center gap-3 sm:flex-row flex-col ">
          <FaRegCommentDots size={30} color="#ef4444" />
          <p className="text-gray-600 ">{comment}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p>Introduction :</p>
        <p>{detail}</p>
      </div>
      <button className="w-fit px-5 h-16 rounded-xl text-white bg-[#ef4444]">
        Read More
      </button>
    </div>
  );
};

export default BlogPageCard;
