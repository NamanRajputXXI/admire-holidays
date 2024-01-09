"use client";
import React, { useState } from "react";
import { CiShoppingTag } from "react-icons/ci";
import { IoIosAirplane } from "react-icons/io";
const ProductRightPricing = () => {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(true);
  const [isEnquiryFormOpen, setIsEnquiryFormOpen] = useState(false);
  const openBookingForm = () => {
    setIsBookingFormOpen(true);
    setIsEnquiryFormOpen(false);
  };
  const openEnquiryForm = () => {
    setIsEnquiryFormOpen(true);
    setIsBookingFormOpen(false);
  };
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
          <div className="flex text-gray-500  gap-10 justify-center items-center">
            <p
              className={`text-center pb-3 w-1/2  ${
                isBookingFormOpen === true ? "border-[#00BB98]  border-b-2" : ""
              } `}
              onClick={openBookingForm}
            >
              Booking Form
            </p>
            <p
              className={`text-center pb-3 w-1/2  ${
                isEnquiryFormOpen === true ? "border-[#00BB98]  border-b-2" : ""
              } `}
              onClick={openEnquiryForm}
            >
              Enquiry Form
            </p>
          </div>

          {isBookingFormOpen === true && (
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
                        ₹10.00{" "}
                        <span className="text-gray-400">/per person</span>
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
                    Massage (Adult : ₹10/per person - Children : ₹5/per - person
                    - Baby: ₹0/per - person )
                  </option>
                  <option value="option3" className="py-2">
                    Night Food (Adult : ₹5/per person - Children : ₹2/per -
                    person - Baby: ₹0/per - person )
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
                  <button className="py-5 bg-[#FD4A4C] mt-4 text-sm text-white rounded-lg  flex justify-center items-center">
                    Booking Now
                  </button>
                </div>
              </div>
            </div>
          )}
          {isEnquiryFormOpen === true && (
            <div>
              <div className="mt-8">
                <form action="">
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className=" font-medium text-gray-700"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder=" Your Name"
                      className="mt-2 py-2  px-5 w-full border rounded-md"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className=" font-medium text-gray-700"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="example@gmail.com"
                      className="mt-2 py-2  px-5 w-full border rounded-md"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className=" font-medium text-gray-700"
                    >
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="(229)555 - 2872"
                      className="mt-2 py-2  px-5 w-full border rounded-md"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="address"
                      className=" font-medium text-gray-700"
                    >
                      Address *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      className="mt-2 py-2  px-5 w-full border rounded-md"
                      rows="2"
                      required
                    ></textarea>
                  </div>

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
                          ₹10.00{" "}
                          <span className="text-gray-400">/per person</span>
                        </p>
                      </div>
                      <div className="flex  justify-between items-center">
                        <p className="text-gray-400">Child : </p>
                        <p>
                          ₹3.00{" "}
                          <span className="text-gray-400">/per person</span>
                        </p>
                      </div>
                      <div className="flex  justify-between items-center">
                        <p className="text-gray-400">Baby : </p>
                        <p>
                          ₹0.00{" "}
                          <span className="text-gray-400">/per person</span>
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
                      Massage (Adult : ₹10/per person - Children : ₹5/per -
                      person - Baby: ₹0/per - person )
                    </option>
                    <option value="option3" className="py-2">
                      Night Food (Adult : ₹5/per person - Children : ₹2/per -
                      person - Baby: ₹0/per - person )
                    </option>
                  </select>
                  <div className="flex py-6 flex-col gap-3">
                    <textarea
                      id="address"
                      name="address"
                      className="mt-2 py-2  px-5 w-full border rounded-md"
                      rows="4"
                      required
                    ></textarea>
                    <button className="py-5 bg-[#FD4A4C] mt-4 text-sm text-white rounded-lg  flex justify-center items-center">
                      Send Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="p-10 min-w-[35%]  flex bg-white  flex-col gap-4 h-fit  m ">
        <div className="flex flex-col gap-3 ">
          <h5 className="text-xl font-semibold">Global Discount</h5>
          <div>
            <div className="flex items-center font-light text-sm py-5  text-white bg-[#00BB98] justify-around">
              <p>Min - Max</p>
              <p>Adult Price</p>
              <p>Children Price</p>
              <p>Baby Price</p>
            </div>
            <div className="flex items-center py-2 text-sm font-light  bg-gray-200 justify-around">
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
            <table className="min-w-full bg-white border border-gray-300">
              <thead className=" bg-[#00BB98]">
                <tr className="text-sm  text-white">
                  <th className="py-2 font-light  px-2 border-b">Start Date</th>
                  <th className="py-2 font-light px-2 border-b">End Date</th>
                  <th className="py-2 font-light px-2 border-b">Adult Price</th>
                  <th className="py-2 font-light px-2 border-b">
                    Children Price
                  </th>
                  <th className="py-2 font-light px-2 border-b">Baby Price</th>
                  <th className="py-2 font-light px-2 border-b">
                    Special Discount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-sm font-light bg-gray-200">
                  <td className="py-2  text-center border-b">18-08-2022</td>
                  <td className="py-2  text-center border-b">24-08-2022</td>
                  <td className="py-2  text-center  border-b">₹330.00</td>
                  <td className="py-2   text-center border-b">₹290.00</td>
                  <td className="py-2   text-center border-b">₹0.00</td>
                  <td className="py-2  text-center  border-b">View Discount</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRightPricing;
