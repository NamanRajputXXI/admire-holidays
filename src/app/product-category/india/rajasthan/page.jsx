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
        heading={"Catergory : Rajasthan"}
        text={"Home > India > Rajasthan"}
      />

      <div className="max-w-7xl mx-auto my-20 justify-center items-center  px-5 flex flex-col gap-10">
        <p className=" text-gray-600">Showing the single result</p>
        <div className="grid lg:grid-cols-4  items-center justify-center md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1">
          <ProductCategoryCard
            url="/jaipurProductCategory.jpg"
            days="7 Days"
            destination="Jaipur"
            details="Jaipur,Rajasthan, India"
            productLink={"/product/jaipur"}
          />
          <ProductCategoryCard
            url="/bharatpur.jpg"
            days="2 Days"
            destination="Bharatpur
            "
            details="Bharatpur, india"
            productLink={"/product/bharatpur"}
          />
          <ProductCategoryCard
            url="/pushkar.jpg"
            days="1 Day"
            destination="Pushkar"
            details="Pushkar City in Rajasthan
            "
            productLink={"/product/pushkar"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;

export function generateMetadata({ param }) {
  return {
    title: "Category | Rajasthan",
  };
}
