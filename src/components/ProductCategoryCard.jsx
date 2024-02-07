import Link from "next/link";
import React from "react";

const ProductCategoryCard = ({ url, days, destination, productLink }) => {
  return (
    <div className="flex flex-col gap-5">
      <img src={url} alt="" className="w-[300px] rounded-lg h-[280px]" />
      <div className="absolute flex flex-col justify-between h-[280px]   my-5 px-3 "></div>
      <div className="flex flex-col gap-3 py-5 px-3 w-fit">
        <h5 className="text-lg font-semibold">{destination}</h5>

        <Link
          className="text-white mt-1 bg-red-500 hover:bg-white border-[1px] border-red-500 hover:text-red-600 flex justify-center items-center w-[100px] font-medium py-2 rounded-lg"
          href={productLink}
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default ProductCategoryCard;
