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
        heading={"Catergory : Uttarakhand"}
        text={"Home > India > Uttarakhand"}
      />

      <div className="max-w-7xl mx-auto my-20 sm:items-start items-center  px-5 flex flex-col gap-10">
        <p className=" text-gray-600">Showing the single result</p>
        <div className="grid lg:grid-cols-4 sm:items-start items-center sm:justify-start md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1">
          <ProductCategoryCard
            url="/mussoorie.png"
            days="4 Days"
            destination="Mussoorie"
            details="Mussoorie, Uttarakhand"
            productLink={"/product/mussoorie"}
          />
          <ProductCategoryCard
            url="/haridwar2.jpg"
            days="4 Days"
            destination="Haridwar"
            details="Haridwar City in Uttarakhand"
            productLink={"/product/haridwar"}
          />
          <ProductCategoryCard
            url="/kanantal.jpg"
            days="1 Day"
            destination="Kanantal"
            details="KanatalKaudia Range, Uttarakhand"
            productLink={"/product/mussoorie"}
          />
          <ProductCategoryCard
            url="/corbett.jpg"
            days="1 Day"
            destination="Corbett National Park"
            details="National park in Uttarakhanddos"
            productLink={"/product/mussoorie"}
          />
          <ProductCategoryCard
            url="/mussoorie2.jpg"
            days="4 Days"
            destination="Mussoorie"
            details="Mussoorie, Uttarakhand"
            productLink={"/product/mussoorie"}
          />
          <ProductCategoryCard
            url="/nainital.jpg"
            days="7 Days"
            destination="Nainital"
            details="Nainital City in Uttarakhand"
            productLink={"/product/mussoorie"}
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
    title: "Category | Uttrakhand",
  };
}
