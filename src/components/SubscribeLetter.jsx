import Image from "next/image";
import React from "react";

const SubscribeLetter = () => {
  return (
    <section className="md:px-10 px-5">
      <div className="max-w-7xl  flex justify-around items-center mx-auto rounded-xl bg-gray-100 my-20 h-72 px-2  md:px-8 py-5">
        <img
          src="deliveryBoy.png"
          alt="News Letter"
          className="lg:w-[300px] lg:h-[200px] w-[0px] h-[0px]"
        />

        <div className="flex flex-col px-2 gap-5">
          <p className="md:text-xl text-md w-[99%] text-center font-medium">
            Subscribe To Be The First To Receive New Offers, Discounts And More.
          </p>
          <div className="flex md:px-5 px-0 py-3">
            <input
              type="email"
              className="md:w-96 w-[99%] text-center rounded-s-xl md:text-lg text-md h-16 flex justify-center items-center"
              placeholder="Enter your email"
            />
            <button className="text-white rounded-e-xl md:text-xl text-md font-medium h-16 md:w-56 w-[150px] bg-red-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeLetter;
