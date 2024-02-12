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
          <ProductCategoryCard
            url={
              "https://images.unsplash.com/photo-1579689189009-874f5cac2db5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuYWxpfGVufDB8fDB8fHww"
            }
            days={"8 Night / 9 Days"}
            destination={"Snowy Escapade: Shimla Manali Trail Unveiled"}
            productLink={"/product/shimla/shimla-manali"}
          />
          <ProductCategoryCard
            url={
              "https://images.unsplash.com/photo-1600947509785-29fb4e7d1362?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            days={"3 Night / 4 Days"}
            destination={
              "Dharamshala Discovery: Himalayan Tranquility and Marvels"
            }
            productLink={"/product/dharmashala"}
          />
          <ProductCategoryCard
            url={
              "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            days={"3 Night / 4 Days"}
            destination={"Mountain Majesty: Manali's Scenic Spectacle Unveiled"}
            productLink={"/product/manali/manali4D"}
          />
          <ProductCategoryCard
            url={
              "https://images.unsplash.com/photo-1589702413183-ca141958b7c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGFsaG91c2llfGVufDB8fDB8fHww"
            }
            days={"2 Night / 3 Days"}
            destination={"Hill Station Haven: Discovering Dalhousie's Charms"}
            productLink={"/product/dalhousie"}
          />
          <ProductCategoryCard
            url={
              "https://images.unsplash.com/photo-1649140068309-6f82e4db2081?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpbWxhJTIwdG95JTIwdHJhaW58ZW58MHx8MHx8fDA%3D"
            }
            days={"2 Night / 3 Days"}
            destination={"Shimla's Timeless Charm and Toy Train Marvels"}
            productLink={"/product/shimla/shimlaToyTrain"}
          />
          <ProductCategoryCard
            url={
              "https://images.unsplash.com/photo-1649140068309-6f82e4db2081?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpbWxhJTIwdG95JTIwdHJhaW58ZW58MHx8MHx8fDA%3D"
            }
            days={"10 Night / 11 Days"}
            destination={
              "Manali Skiing Extravaganza: Carving Adventure on Snowy"
            }
            productLink={"/product/manali/manaliSkiing"}
          />
          <ProductCategoryCard
            url={
              "https://images.unsplash.com/photo-1579689189009-874f5cac2db5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuYWxpfGVufDB8fDB8fHww"
            }
            days={"4 Night / 5 Days"}
            destination={
              "Romantic Retreat Manali: Honeymoon Bliss Amids Beauty"
            }
            productLink={"/product/manali/manaliHoneymoon"}
          />
          <ProductCategoryCard
            url={
              "https://images.unsplash.com/photo-1606667544139-81e47935d769?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhpbWFjaGFsJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D"
            }
            days={"6 Night / 7 Days"}
            destination={
              "Beyond the Stars: Exploring the Mysteries of Deep Space Travel"
            }
            productLink={"/product/HimachalHoneymoon"}
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
