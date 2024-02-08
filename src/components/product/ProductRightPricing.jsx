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
      <div className="p-10  flex flex-col gap-4 h-fit rounded-lg  my-5 bg-white">
        <div className="flex text-lg font-medium gap-3 items-center">
          {/* <CiShoppingTag size={30} color="#FD4A4C" /> Starting from */}
        </div>
        <div className="flex items-baseline gap-2">
          {price && previousPrice && (
            <>
              <p className="text-[#00BB98] text-2xl font-bold">₹{price}</p>
              <p className="text-gray-500 line-through">₹{previousPrice}</p>
            </>
          )}
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

      <div className="flex flex-col gap-10 rounded-lg  bg-white justify-center  ">
        <div className="w-full  px-5 py-3  rounded-t-lg bg-[#3a2f5b] text-white ">
          <p className="sm:text-xl text-base text-center font-medium">
            Why book Admire Holidays?
          </p>
        </div>
        <div className="px-5 flex flex-col gap-3 pb-5">
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <TiTick size={30} color="#00BB98" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm  md:text-lg">Wide range of exclusive</p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <TiTick size={30} color="#00BB98" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm  md:text-lg">deals with resorts.</p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <TiTick size={30} color="#00BB98" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm  md:text-lg">24*7 help line</p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <TiTick size={30} color="#00BB98" />
            </div>
            <div className="flex flex-col gap-2">
              <p className=" text-sm  md:text-lg">Detail information about </p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <TiTick size={30} color="#00BB98" />
            </div>
            <div className="flex flex-col gap-2">
              <p className=" text-sm  md:text-lg">
                package information clearly.
              </p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <TiTick size={30} color="#00BB98" />
            </div>
            <div className="flex flex-col gap-2">
              <p className=" text-sm  md:text-lg">Local support</p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <TiTick size={30} color="#00BB98" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm  md:text-lg ">Deals on flights booking</p>
            </div>
          </div>
          <div className="flex  items-center gap-5">
            <div className="w-fit h-fit flex items-center justify-center">
              <TiTick size={30} color="#00BB98" />
            </div>
            <div className="flex flex-col gap-2">
              <p className=" text-sm  md:text-lg">Quick book</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRightPricing;
