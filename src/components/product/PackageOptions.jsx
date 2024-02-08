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
            className="p-5 border-[1px] rounded-lg border-gray-400"
          >
            <div className="flex justify-between">
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold text-xl">{item.package}</h2>
                <p
                  className="text-[#FD4A4C] cursor-pointer font-bold"
                  onClick={() => togglePackage(index)}
                >
                  {openPackage === index ? "Hide Details" : "Show Details"}
                </p>
              </div>
              <div className="flex flex-col">
                <p
                  className="text-[#00BB98] text-2xl font-bold"
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
                  className="px-4 py-3 cursor-pointer border-[#FD4A4C] border-[1px] text-[#FD4A4C] rounded-lg"
                  onClick={openQuotepopup}
                >
                  Request a Quote
                </button>
              </div>
            </div>
            <div>
              {openPackage === index && (
                <div className="flex flex-col mt-10 gap-3 ">
                  <ul className="text-sm text-gray-500 list-disc px-5">
                    {item.hotelsName.map((hotel, i) => (
                      <li key={i}>{hotel}</li>
                    ))}
                  </ul>
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
