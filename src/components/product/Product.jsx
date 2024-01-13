"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { CiShare2 } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePhoto } from "react-icons/md";
import ProductCarousel from "../carousels/ProductCarousel";
import ProductRightPricing from "./ProductRightPricing";
import ProductDetailLeft from "./ProductDetailLeft";
import ProductBottomCarousel from "../carousels/ProductBottomCarousel";
const Product = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    console.log("Fetching data...");
    axios
      .get("http://localhost:3001/getRajasthanData")
      .then((response) => {
        console.log("Data received:", response.data);
        setDestinations(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);

  return (
    <section className="bg-[#f8f8f8]">
      <div className="mt-20 bg-[#F2FBFA]">
        <div className="max-w-7xl flex sm:justify-between gap-5 justify-start sm:flex-row flex-col sm:items-center sm:mx-auto py-20 px-5">
          <div className="flex flex-col gap-5">
            <h5 className="md:text-4xl text-2xl font-semibold">
              {destinations.length > 0 ? (
                destinations.map((destination) => (
                  <h1 key={destination._id}>{destination.heading}</h1>
                ))
              ) : (
                <p>No data available</p>
              )}
            </h5>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center ">
                <CiLocationOn size={25} color="#00bb98" />
                <p>Jaipur, Rajasthan, India</p>
                <CiHeart size={25} color="#fd4c5c" />
              </div>
            </div>
          </div>
          <div className="flex sm:gap-3 gap-1  items-center">
            <div className="flex p-2 transition-all duration-500 ease-in-out  text-red-500 border-[1px] hover:bg-red-500 hover:border-red-500 hover:text-white bg-white border-gray-300 rounded-lg sm:gap-3 gap-1 items-center">
              <CiVideoOn size={20} />
              <p className="text-sm hover:text-white">View Video</p>
            </div>
            <div className="flex p-2 border-[1px] transition-all duration-500 ease-in-out  text-red-500  bg-white hover:text-white  hover:bg-red-500  hover:border-[#FD4A4C border-gray-300 rounded-lg sm:gap-3 gap-1  items-center">
              <MdOutlinePhoto size={20} />
              <p className="text-sm hover:text-white">4 Photo</p>
            </div>
            <div className="flex p-2 border-[1px] transition-all duration-500 ease-in-out hover:text-white  bg-white hover:bg-red-500  hover:border-red-500  text-red-500  border-gray-300 rounded-lg gap-3 items-center">
              <CiShare2 size={20} />
            </div>
          </div>
        </div>
        <ProductCarousel />
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl lg:gap-2 gap-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  px-5 py-20">
            <div className="flex gap-5 items-center">
              <MdDateRange size={30} color="#FD4C5C" />
              <div className="flex flex-col gap-3 ">
                <p className="text-sm font-medium">Duration</p>
                <p className="text-sm text-gray-500">7 Days</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <GoPeople size={30} color="#FD4C5C" />
              <div className="flex flex-col gap-3 ">
                <p className="text-sm font-medium">Max People</p>
                <p className="text-sm text-gray-500">50</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <IoPersonOutline size={30} color="#FD4C5C" />
              <div className="flex flex-col gap-3 ">
                <p className="text-sm font-medium">Min Age</p>
                <p className="text-sm text-gray-500">10+</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <CiLocationOn size={30} color="#FD4C5C" />
              <div className="flex flex-col gap-3 ">
                <p className="text-sm font-medium">Pickup</p>
                <p className="text-sm text-gray-500">Airport</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex max-w-7xl lg:flex-row flex-col-reverse gap-10 px-5 mx-auto">
        <ProductDetailLeft />
        <ProductRightPricing />
      </div>
      <ProductBottomCarousel />
    </section>
  );
};

export default Product;
