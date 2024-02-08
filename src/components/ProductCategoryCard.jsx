import Link from "next/link";
import React from "react";

const ProductCategoryCard = ({ url, days, destination, productLink }) => {
  return (
    <Link href={productLink} className="cursor-pointer">
      <div className="flex flex-col ">
        <img src={url} alt="" className="w-[400px] rounded-lg h-[320px]" />

        <div className="flex flex-col gap-3 py-5 px-1 w-fit">
          <p className="text-gray-500 text-sm">{days}</p>
          <h5 className="text-md font-semibold">{destination}</h5>
          <Link
            className="text-white mt-1 bg-red-500 hover:bg-white border-[1px] border-red-500 hover:text-red-600 flex justify-center items-center w-[100px] font-medium py-2 rounded-lg"
            href={productLink}
          >
            Explore
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default ProductCategoryCard;
