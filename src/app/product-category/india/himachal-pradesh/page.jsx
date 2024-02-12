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
        <div className="grid lg:grid-cols-4   justify-center md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1">
          <ProductCategoryCard
            url={
              "https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            days={"4 Days"}
            destination={"Kasauli Hills: Serenity Beckons, Nature's Delight"}
            productLink={"/product/kasauli"}
          />
          <ProductCategoryCard
            url={
              "https://images.unsplash.com/photo-1568207182762-8838beec7dca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhpbWFjaGFsfGVufDB8fDB8fHww"
            }
            days={"5 Night / 4 Days"}
            destination={"Adventure and Serenity in Kullu-Manali"}
            productLink={"/product/kullu-manali"}
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
    title: "Category | Himachal",
  };
}
