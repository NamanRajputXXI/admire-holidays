import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import ProductCarousel from "./carousels/ProductCarousel";
const Product = () => {
  return (
    <section className="mt-20 bg-[#F2FBFA]">
      <div className="max-w-7xl mx-auto py-20 px-5">
        <div className="flex flex-col gap-5">
          <h5 className="text-4xl font-semibold">Jaipur</h5>
          <div className="flex justify-between">
            <div className="flex gap-2 items-center ">
              <CiLocationOn size={25} color="#00bb98" />
              <p>Jaipur, Rajasthan, India</p>
              <CiHeart size={25} color="#fd4c5c" />
            </div>
          </div>
        </div>
      </div>
      <ProductCarousel />
    </section>
  );
};

export default Product;
