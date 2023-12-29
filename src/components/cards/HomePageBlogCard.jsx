import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const HomePageBlogCard = ({ imageUrl, title }) => {
  return (
    <div className="flex shadow-lg rounded-2xl flex-col gap-5  border-[1px]  border-gray-200 ">
      <img src={imageUrl} alt={title} className=" sm:h-72 rounded-t-2xl h-56" />
      <div className="p-5 flex flex-col gap-4">
        <p className="sm:text-xl text-lg font-medium">{title}</p>
        <a className="flex items-center gap-5 text-red-500" href="#">
          Read More <FaLongArrowAltRight size={30} color="#ef4444" />
        </a>
      </div>
    </div>
  );
};

export default HomePageBlogCard;
