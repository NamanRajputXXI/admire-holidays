import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import ProductCategoryCard from "@/components/ProductCategoryCard";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <PageBanner
        heading={"Catergory : Himachal pradesh"}
        text={"Home > India > Himchal Pradesh"}
      />

      <div className="max-w-7xl mx-auto my-20 px-5 flex flex-col gap-10">
        <p className=" text-gray-600">Showing the single result</p>
        <div className="grid lg:col-span-4 md:col-span-3 sm:col-span-2 col-span-1">
          <ProductCategoryCard
            url={"/himachalProductCateoryImage1.jpg"}
            days={"4 Days"}
            destination={"Himachal Pradesh"}
            details={"Kasauli Town in Himachal Pradesh"}
            productLink={"/product/pushkar"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
