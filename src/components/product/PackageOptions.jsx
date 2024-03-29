"use client";
import React, { useState } from "react";
import PackageOptionQuote from "./PackageOptionQuote";

const PackageOptions = ({ packageOptions }) => {
  const [openPackage, setOpenPackage] = useState(null);
  const [openRequestQuotePopup, setRequestQuotePopup] = useState(false);

  const openQuotepopup = () => {
    setRequestQuotePopup(true);
  };
  const closeQuotepopup = () => {
    setRequestQuotePopup(false);
  };
  const togglePackage = (index) => {
    setOpenPackage((prevOpenPackage) =>
      prevOpenPackage === index ? null : index
    );
  };

  return (
    <div className="flex flex-col gap-5" id="packageOptions">
      <PackageOptionQuote
        openRequestQuotePopup={openRequestQuotePopup}
        closeQuotepopup={closeQuotepopup}
      />
      <h1 className="font-bold text-2xl my-10 md:text-4xl">
        Exclusive Packages
      </h1>
      <div className="flex flex-col gap-5">
        {packageOptions.map((item, index) => (
          <div
            key={index}
            className="sm:p-5 p-3 border-[1px] rounded-lg border-gray-300"
          >
            <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-0 gap-5 justify-between">
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold text-xl">{item.package}</h2>
                <p
                  className="text-[#FD4A4C]  cursor-pointer font-bold"
                  onClick={() => togglePackage(index)}
                >
                  {openPackage === index ? "Hide Details" : "Show Details"}
                </p>
              </div>
              <div className="flex items-center flex-col">
                <p
                  className="text-[#00BB98] sm:text-2xl text-xl font-bold"
                  id="packageOption"
                >
                  {item.price}
                </p>
                <p className="text-gray-500 line-through">
                  {item.previousPrice}
                </p>
              </div>
              <div>
                <button
                  className="sm:px-4 px-1 py-3 cursor-pointer sm:text-base text-sm border-[#FD4A4C] border-[1px] text-[#FD4A4C] rounded-lg"
                  onClick={openQuotepopup}
                >
                  Request a Quote
                </button>
              </div>
            </div>
            <div>
              {openPackage === index && (
                <div className="flex text-sm text-gray-500  px-5  mt-10 gap-1 ">
                  {item.hotelsName.map((hotel, i) => (
                    <p key={i}>{hotel}, </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageOptions;
