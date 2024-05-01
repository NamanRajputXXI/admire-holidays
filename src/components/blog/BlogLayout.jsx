"use client";
import blogPagedata from "@/data/blogPageData";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegFolderOpen } from "react-icons/fa";
import BlogPageCard from "../cards/BlogPageCard";
const BlogLayout = ({ params }) => {
  const [result, setResult] = useState("Subscribe");
  const [formValid, setFormValid] = useState(true);

  const post = blogPagedata.find((post) => post.slug === params.slug);

  // If no matching post is found, you can handle it accordingly
  if (!post) {
    return <div>Blog post not found</div>;
  }

  const submitForm = async (event) => {
    event.preventDefault();
    setResult("Subscribing....");
    const formData = new FormData(event.target);

    if (!formData.get("mail")) {
      setFormValid(false);
      setResult("Please enter your email");
      return;
    }

    formData.append("access_key", "c1e1dd01-589b-418d-b6bd-0ba7c09dfde5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Subscribed");
      event.target.reset();
      setFormValid(true);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="max-w-7xl pt-20 flex items-center justify-center mx-auto px-5 my-20">
      <div className="flex w-full md:flex-row flex-col justify-between gap-10 ">
        <div className=" md:w-[70%] w-full flex flex-col gap-20 ">
          <BlogPageCard
            imageUrl={post.imageUrl}
            title={post.title}
            detail={post.detail}
            comment={post.comment}
            date={post.date}
          />
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
            <CiSearch
              size={40}
              className="absolute cursor-pointer right-2"
              color="gray"
            />
          </div>
          <div className="flex flex-col gap-5 h-fit border-[1px] border-gray-300 px-4  py-6 rounded-xl ">
            <h5 className="text-lg font-medium">Blog Categories</h5>
            <hr />
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaRegFolderOpen size={20} color="#6b7280" />
                  <p className="font-light text-base cursor-pointer">Food</p>
                </div>
                <p className="font-light text-base">(1)</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaRegFolderOpen size={20} color="#6b7280" />
                  <p className="font-light text-base cursor-pointer">
                    Imrove Life
                  </p>
                </div>
                <p className="font-light text-base cursor-pointer">(8)</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaRegFolderOpen size={20} color="#6b7280" />
                  <p className="font-light text-base cursor-pointer">Life</p>
                </div>
                <p className="font-light text-base cursor-pointer">(2)</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaRegFolderOpen size={20} color="#6b7280" />
                  <p className="font-light text-base cursor-pointer">
                    Off topic{" "}
                  </p>
                </div>
                <p className="font-light text-base">(2)</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaRegFolderOpen size={20} color="#6b7280" />
                  <p className="font-light text-base cursor-pointer">
                    Productivity
                  </p>
                </div>
                <p className="font-light text-base">(2)</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaRegFolderOpen size={20} color="#6b7280" />
                  <p className="font-light text-base cursor-pointer">
                    Self Decipline
                  </p>
                </div>
                <p className="font-light text-base cursor-pointer">(1)</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaRegFolderOpen size={20} color="#6b7280" />
                  <p className="font-light text-base cursor-pointer">Sport</p>
                </div>
                <p className="font-light text-base">(1)</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaRegFolderOpen size={20} color="#6b7280" />
                  <p className="font-light text-base cursor-pointer">
                    Tips and Tricks
                  </p>
                </div>
                <p className="font-light text-base">(7)</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaRegFolderOpen size={20} color="#6b7280" />
                  <p className="font-light text-base cursor-pointer">Travel</p>
                </div>
                <p className="font-light text-base cursor-pointer">(11)</p>
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
            <form
              onSubmit={submitForm}
              className="flex flex-col gap-5 items-center justify-center"
            >
              <input
                type="email"
                placeholder="Enter your email"
                name="mail"
                className={`min-w-[100%] rounded-xl text-black p-3 border-[1px] bg-white ${
                  !formValid && "border-red-500"
                }`}
              />
              {!formValid && (
                <p className="text-red-500">Please enter a valid email</p>
              )}
              <button className="w-full h-12 rounded-xl bg-[#ef4444]">
                {result}
              </button>
            </form>
          </div>
          <div className="flex flex-col gap-5 h-fit border-[1px] border-gray-300 px-4  py-6 rounded-xl ">
            <h5 className="text-lg font-medium">Popular Tags</h5>
            <hr />
            <div className="flex flex-col  gap-5">
              <div className="flex  gap-2">
                <div className="px-4 py-3 font-light cursor-pointer w-fit flex bg-gray-300 rounded-xl items-center justify-center">
                  Backpacking Clothes
                </div>
                <div className="px-4 py-3 font-light cursor-pointer w-fit flex bg-gray-300 rounded-xl items-center justify-center">
                  Place
                </div>
              </div>
              <div className="flex gap-2">
                <div className="px-4 py-3 font-light cursor-pointer w-fit flex bg-gray-300 rounded-xl items-center justify-center">
                  Story
                </div>
                <div className="px-4 py-3 font-light cursor-pointer w-fit flex bg-gray-300 rounded-xl items-center justify-center">
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
