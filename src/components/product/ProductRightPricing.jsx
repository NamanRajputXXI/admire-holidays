"use client";
import React, { useState } from "react";
import { CiShoppingTag } from "react-icons/ci";
import { IoIosAirplane } from "react-icons/io";
const ProductRightPricing = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="p-10 min-w-[35%] flex flex-col gap-4 h-fit  my-5 bg-white">
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
          <div className="flex text-gray-500  justify-between items-center">
            <p>Booking Form</p>
            <p>Enquiry Form</p>
          </div>
          <hr className="my-2" />
          <div>
            <div className="mt-8">
              <label
                className="flex mt-4 text-gray-700   mb-2"
                htmlFor="mySelect"
              >
                Choose Time
              </label>
              <select
                id="mySelect"
                name="mySelect"
                className="flex w-full gap-5 border border-gray-300 px-4 py-2 rounded-md"
              >
                <option value="option1" className="py-2">
                  From 01-10-2024 - 07-10-2024
                </option>
                <option value="option2" className="py-2">
                  From 22-10-2024 - 28-10-2024
                </option>
                <option value="option3" className="py-2">
                  From 15-10-2025 - 21-10-2025
                </option>
              </select>
              <label
                className="flex mt-6 text-gray-700   mb-2"
                htmlFor="checkinDate"
              >
                Check in
              </label>
              <div className="w-full px-5 py-3 text-gray-600 rounded-md bg-gray-300">
                01-10-2024
              </div>
              <label
                className="flex mt-6 text-gray-700   mb-2"
                htmlFor="checkinDate"
              >
                Check out
              </label>
              <div className="w-full px-5 py-3 text-gray-600 rounded-md bg-gray-300">
                07-10-2024
              </div>
              <label
                className="flex mt-6 text-gray-700   mb-2"
                htmlFor="checkinDate"
              >
                Guests
              </label>
              <div className="w-full px-5 py-3 border-[1px] border-gray-400 text-gray-600 rounded-md ">
                1
              </div>
              <div className="py-6 flex flex-col gap-3 ">
                <p>Extra Service</p>
                <div className="flex gap-3 flex-col ">
                  <div className="flex items-center gap-5">
                    <div className="bg-gray-400 hover:bg-[#00BB98] rounded-full w-10 h-10"></div>
                    <p>Home Pickup</p>
                  </div>

                  <div className="flex  justify-between items-center">
                    <p className="text-gray-400">Adult : </p>
                    <p>
                      ₹10.00 <span className="text-gray-400">/per person</span>
                    </p>
                  </div>
                  <div className="flex  justify-between items-center">
                    <p className="text-gray-400">Child : </p>
                    <p>
                      ₹3.00 <span className="text-gray-400">/per person</span>
                    </p>
                  </div>
                  <div className="flex  justify-between items-center">
                    <p className="text-gray-400">Baby : </p>
                    <p>
                      ₹0.00 <span className="text-gray-400">/per person</span>
                    </p>
                  </div>
                </div>
              </div>
              <label
                className="flex mt-4 text-gray-700   mb-2"
                htmlFor="mySelect"
              >
                Services
              </label>
              <select
                id="mySelect"
                name="mySelect"
                className="flex w-full gap-3 border border-gray-300 px-4 py-2 rounded-md"
              >
                <option value="option1" className="py-2 ">
                  Select Healthcare
                </option>
                <option value="option2" className="py-2">
                  Massage (Adult : ₹10/per person - Children : ₹5/per - person -
                  Baby: ₹0/per - person )
                </option>
                <option value="option3" className="py-2">
                  Night Food (Adult : ₹5/per person - Children : ₹2/per - person
                  - Baby: ₹0/per - person )
                </option>
              </select>
              <div className="flex py-6 flex-col gap-3">
                <p>Deposit Option 50% Per item</p>
                <div className="flex">
                  <div className="w-1/2 py-3 flex justify-center items-center bg-[#00BB98] text-white">
                    Full Payment
                  </div>
                  <div className="w-1/2 py-3 bg-gray-200 flex justify-center items-center text-black">
                    Pay Deposit
                  </div>
                </div>
                <div className="flex  justify-between items-center">
                  <p className="text-lg">Available : </p>
                  <p className="text-2xl">200</p>
                </div>
                <div className="flex  justify-between items-center">
                  <p className="text-lg">Total : </p>
                  <p className="text-2xl">₹344.99</p>
                </div>
                <button className="py-5 bg-[#FD4A4C] mt-4 text-lg text-white rounded-lg  flex justify-center items-center">
                  Booking Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 min-w-[35%]  flex bg-white  flex-col gap-4 h-fit  my-10 ">
        <div className="flex flex-col gap-3 ">
          <h5 className="text-xl font-semibold">Global Discount</h5>
          <div>
            <div className="flex items-center py-5  text-white bg-[#00BB98] justify-around">
              <p>Min - Max</p>
              <p>Adult Price</p>
              <p>Children Price</p>
              <p>Baby Price</p>
            </div>
            <div className="flex items-center py-2  bg-gray-200 justify-around">
              <p>20 - 50 </p>
              <p>₹350.00 </p>
              <p>₹280.00 </p>
              <p>₹0.00</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <h5 className="text-xl font-semibold">Special Time</h5>
          <div className="w-fit overflow-x-hidden">
            <div className="flex items-center py-5 text-white bg-[#00BB98] justify-around">
              <p>Start Date</p>
              <p>End Date</p>
              <p>Adult Price</p>
              <p>Children Price</p>
              <p>Baby Price</p>
              <p>Special Discount</p>
            </div>
            <div className="flex items-center py-2 bg-gray-200 justify-around">
              <p>18-08-2022</p>
              <p>24-08-2022</p>
              <p>₹330.00</p>
              <p>₹290.00</p>
              <p>₹0.00</p>
              <p>View Discount</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRightPricing;
