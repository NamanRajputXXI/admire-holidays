"use client";
import blogPagedata from "@/data/blogPageData";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

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
    <section>
      <img
        src={post.imageUrl}
        className="w-full h-full px-5 lg:px-16  md:px-8 sm:pt-32 pt-[116px] lg:pt-44"
        alt=""
      />
      <div className="max-w-7xl  flex items-center justify-center mx-auto px-5 my-20">
        <div className="flex w-full md:flex-row flex-col justify-between gap-10 ">
          <div className=" md:w-[70%] w-full flex flex-col gap-20 ">
            <BlogPageCard
              imageUrl={post.imageUrl}
              title={post.title}
              detail={post.detail}
              comment={post.comment}
              date={post.date}
              author={post.author}
              imageUrl1={post.imageUrl1}
              imageUrl2={post.imageUrl2}
              content={post.content}
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
      </div>
    </section>
  );
};

export default BlogLayout;
