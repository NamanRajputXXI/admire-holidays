import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const HomePageBlogCard = ({ imageUrl, title, link }) => {
  return (
    <div className="flex shadow-lg rounded-xl flex-col gap-5  border-[1px]  border-gray-200 ">
      <img src={imageUrl} alt={title} className=" sm:h-72 rounded-t-xl h-56" />
      <div className="p-5 flex flex-col gap-4">
        <p className="sm:text-xl text-lg font-medium">{title}</p>
        <Link className="flex items-center gap-5 text-red-500" href={link}>
          Read More <FaLongArrowAltRight size={30} color="#ef4444" />
        </Link>
      </div>
    </div>
  );
};

export default HomePageBlogCard;
