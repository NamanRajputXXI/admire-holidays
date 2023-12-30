import blogPagedata from "@/data/blogPageData";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaRegFolderOpen } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa";
const BlogLayout = () => {
  return (
    <section className="max-w-7xl flex items-center justify-center mx-auto px-5 my-20">
      <div className="flex w-full md:flex-row flex-col justify-between gap-10 ">
        <div className=" md:w-[70%] w-full flex flex-col gap-20 ">
          {blogPagedata.map((item, i) => (
            <div className="w-[100%] flex flex-col gap-10  " key={i}>
              <img src={item.imageUrl} className="w-[100%]" alt="" />
              <h1 className=" md:text-3xl text-xl  font-semibold">
                {item.title}
              </h1>
              <div className="flex text-xs sm:text-base gap-10 items-center">
                <div className="flex items-center   sm:flex-row flex-col  gap-3">
                  <CiCalendarDate size={30} color="#ef4444" />
                  <p className="text-gray-600 ">{item.date}</p>
                </div>
                <div className="flex items-center gap-3 sm:flex-row flex-col ">
                  <FaRegFolderOpen size={30} color="#ef4444" />
                  <p className="text-gray-600 ">Travel</p>
                </div>
                <div className="flex items-center gap-3 sm:flex-row flex-col ">
                  <FaRegCommentDots size={30} color="#ef4444" />
                  <p className="text-gray-600 ">{item.comment}</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p>Introduction :</p>
                <p>{item.detail}</p>
              </div>
              <button className="w-fit px-5 h-16 rounded-xl text-white bg-[#ef4444]">
                Read More
              </button>
            </div>
          ))}
        </div>
        <div className="md:w-[30%] w-full flex flex-col gap-5">
          <div className="flex flex-col gap-5 h-fit border-[1px] border-gray-300 px-4  py-6 rounded-xl ">
            <h5 className="text-lg font-medium">Recent Post</h5>
            <hr />
            <div className="flex flex-col gap-5">
              <p className="font-light text-base">
                The Majestic Tiger Falls: Nature’s Hidden Gem
              </p>
              <p className="font-light text-base">
                Pachmarhi: The Queen of Satpura, A Hidden Gem in Central India
              </p>
              <p className="font-light text-base">
                Exploring the Wilderness: Discovering the Riches of Kaziranga
                National Park
              </p>
              <p className="font-light text-base">
                Unveiling the Enigmatic Charm of Pithoragarh
              </p>
              <p className="font-light text-base">
                Konark: Exploring the Architectural Marvel of the Sun Temple
              </p>
            </div>
          </div>
          <div className="flex items-center relative min-w-[100%] ">
            <input
              type="text"
              placeholder="search..."
              className="min-w-[100%] rounded-xl  p-3 border-[1px] border-gray-300"
            />
            <CiSearch size={40} className="absolute right-2" color="gray" />
          </div>
          <div className="flex flex-col gap-5 h-fit border-[1px] border-gray-300 px-4  py-6 rounded-xl ">
            <h5 className="text-lg font-medium">Blog Categories</h5>
            <hr />
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaRegFolderOpen size={20} color="#6b7280" />
                  <p className="font-light text-base">Food</p>
                </div>
                <p className="font-light text-base">(1)</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaRegFolderOpen size={20} color="#6b7280" />
                  <p className="font-light text-base">Imrove Life</p>
                </div>
                <p className="font-light text-base">(8)</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaRegFolderOpen size={20} color="#6b7280" />
                  <p className="font-light text-base">Life</p>
                </div>
                <p className="font-light text-base">(2)</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaRegFolderOpen size={20} color="#6b7280" />
                  <p className="font-light text-base">Off topic </p>
                </div>
                <p className="font-light text-base">(2)</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaRegFolderOpen size={20} color="#6b7280" />
                  <p className="font-light text-base">Productivity</p>
                </div>
                <p className="font-light text-base">(2)</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaRegFolderOpen size={20} color="#6b7280" />
                  <p className="font-light text-base">Self Decipline</p>
                </div>
                <p className="font-light text-base">(1)</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaRegFolderOpen size={20} color="#6b7280" />
                  <p className="font-light text-base">Sport</p>
                </div>
                <p className="font-light text-base">(1)</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaRegFolderOpen size={20} color="#6b7280" />
                  <p className="font-light text-base">Tips and Tricks</p>
                </div>
                <p className="font-light text-base">(7)</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaRegFolderOpen size={20} color="#6b7280" />
                  <p className="font-light text-base">Travel</p>
                </div>
                <p className="font-light text-base">(11)</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 h-fit  text-white bg-[#1A1A3D;] justify-center items-center  px-4  py-6 rounded-xl ">
            <img
              src="https://admireholidays.com/wp-content/uploads/2022/07/subscribe-mail.png"
              alt=""
            />
            <h5 className="text-[#ef4444]  text-center">
              SUBSCRIBE TO OUR NEWS LETTER
            </h5>
            <h1 className="font-semibold">
              GET THE LATEST NEWS, UPDATES AND LATEST OFFERS
            </h1>
            <input
              type="text"
              placeholder="Enter your email"
              className="min-w-[100%] rounded-xl  p-3 border-[1px] bg-white"
            />
            <button className="w-full h-16 rounded-xl bg-[#ef4444]">
              Subscribe Now
            </button>
          </div>
          <div className="flex flex-col gap-5 h-fit border-[1px] border-gray-300 px-4  py-6 rounded-xl ">
            <h5 className="text-lg font-medium">Popular Tags</h5>
            <hr />
            <div className="flex flex-col  gap-5">
              <div className="flex  gap-2">
                <div className="px-4 py-3 font-light w-fit flex bg-gray-300 rounded-xl items-center justify-center">
                  Backpacking Clothes
                </div>
                <div className="px-4 py-3 font-light w-fit flex bg-gray-300 rounded-xl items-center justify-center">
                  Place
                </div>
              </div>
              <div className="flex gap-2">
                <div className="px-4 py-3 font-light w-fit flex bg-gray-300 rounded-xl items-center justify-center">
                  Story
                </div>
                <div className="px-4 py-3 font-light w-fit flex bg-gray-300 rounded-xl items-center justify-center">
                  Travel
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogLayout;
