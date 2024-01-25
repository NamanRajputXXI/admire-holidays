"use client";
import React, { useState, useEffect } from "react";
import { CiShoppingTag } from "react-icons/ci";
import { IoIosAirplane } from "react-icons/io";
import BookingForm from "./BookingForm";
import EnquiryForm from "./EnquiryForm";
import { TiTick } from "react-icons/ti";
const ProductRightPricing = ({
  price,
  previousPrice,
  homePickupAdultPrice,
  homePickupBabyPrice,
  homePickupChildPrice,
  adultPrice,
  childPrice,
  babyPrice,
  discount,
  startDate,
  endDate,
  minMax,
  openModalFunc,
}) => {
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

  const [selectedTime, setSelectedTime] = useState("option1");
  const [checkinDate, setCheckinDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");

  useEffect(() => {
    // Get current date
    const currentDate = new Date();
    const currentDateString = formatDate(currentDate);

    // Calculate check-out date based on the selected time range
    const checkoutDate = new Date(currentDate);
    checkoutDate.setDate(checkoutDate.getDate() + 6); // Assuming 7 days duration

    // Format dates
    const checkinDateString = formatDate(currentDate);
    const checkoutDateString = formatDate(checkoutDate);

    // Set the values in the state
    setCheckinDate(checkinDateString);
    setCheckoutDate(checkoutDateString);
  }, [selectedTime]);

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div className="flex lg:min-w-[35%] w-full flex-col gap-10">
      <div className="p-10  flex flex-col gap-4 h-fit  my-5 bg-white">
        <div className="flex text-lg font-medium gap-3 items-center">
          <CiShoppingTag size={30} color="#FD4A4C" /> Starting from
        </div>
        <div className="flex items-baseline gap-2">
          <p className="text-[#00BB98] text-2xl font-bold">₹{price}</p>
          <p className="text-gray-500 line-through">₹{previousPrice}</p>
        </div>
        <div className="flex justify-center gap-1 items-center relative">
          <div className="bg-[#FD4A4C] h-[1px] z-10 w-[50%]"></div>
          <IoIosAirplane size={40} color="#FD4A4C" />
          <div className="bg-[#FD4A4C] h-[1px] z-10 w-[50%]"></div>
        </div>

        {/* Tabs */}
        <div>
          <div className="flex text-gray-500  gap-10 justify-center items-center"></div>

          <EnquiryForm
            homePickupAdultPrice={homePickupAdultPrice}
            homePickupBabyPrice={homePickupBabyPrice}
            homePickupChildPrice={homePickupChildPrice}
            openModalFunc={openModalFunc}
          />
        </div>
      </div>
      <div className="lg:p-10 p-4 lg:min-w-[35%]  w-full   flex bg-white  flex-col gap-4 h-fit  m ">
        <div className="flex flex-col gap-3 ">
          <h5 className="text-xl font-semibold">Global Discount</h5>
          <div>
            <div className="flex items-center font-light text-sm py-5  text-white bg-[#00BB98] justify-around">
              <p className="text-center font-bold">Min - Max</p>
              <p className="text-center font-bold">Adult Price</p>
              <p className="text-center font-bold">Child Price</p>
              <p className="text-center font-bold ">Baby Price</p>
            </div>
            <div className="flex items-center py-2 text-sm font-light  bg-gray-200 justify-around">
              <p className="text-center">{minMax} </p>
              <p className="text-center">₹{adultPrice} </p>
              <p className="text-center">₹{childPrice} </p>
              <p className="text-center">₹{babyPrice}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <h5 className="text-xl font-semibold">Special Time</h5>
          <div className="w-full overflow-x-hidden">
            <table className="min-w-full bg-white border overflow-auto  border-gray-300">
              <thead className=" bg-[#00BB98]">
                <tr className="text-sm  text-white ">
                  <th className="py-2 font-bold  text-center px-2 border-b">
                    Start Date
                  </th>
                  <th className="py-2 font-bold text-center px-2 border-b">
                    End Date
                  </th>
                  <th className="py-2 font-bold text-center px-2 border-b">
                    Adult Price
                  </th>
                  <th className="py-2 font-bold text-center  px-2 border-b">
                    Children Price
                  </th>
                  <th className="py-2  font-bold px-2 border-b">Baby Price</th>
                  <th className="py-2 font-bold px-2 border-b">
                    Special Discount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-sm font-light bg-gray-200">
                  <td className="py-2  text-center border-b">{startDate}</td>
                  <td className="py-2  text-center border-b">{endDate}</td>
                  <td className="py-2  text-center  border-b">{adultPrice}</td>
                  <td className="py-2   text-center border-b">{childPrice}</td>
                  <td className="py-2   text-center border-b">{babyPrice}</td>
                  <td className="py-2  text-center  border-b">View Discount</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10  bg-white justify-center  ">
        <div className="w-full  px-5 py-3 bg-[#3a2f5b] text-white ">
          <p className="sm:text-xl text-base text-center font-medium">
            Why Admire Holidays
          </p>
        </div>
        <div className="px-5 flex flex-col gap-10 pb-5">
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <TiTick size={30} color="#00BB98" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium  text-lg">Verified Reviews</p>
              <p className="sm:text-base text-sm font-normal  text-gray-700">
                25000+ Pictures and Reviews on the platform.
              </p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <TiTick size={30} color="#00BB98" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-lg">10000+ Tours and Activities</p>
              <p className="sm:text-base text-sm  font-normal text-gray-700">
                We have activities across 17 countries, across every category so
                that you never miss best things to do anywhere.{" "}
              </p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <TiTick size={30} color="#00BB98" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-lg">Customer Delight</p>
              <p className="sm:text-base text-sm  font-normal text-gray-700">
                We are always able to support you so that you have a hassle free
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRightPricing;
