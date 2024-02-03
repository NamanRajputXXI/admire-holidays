import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NainitalProduct from "@/components/product/nainital/NainitalProduct";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <NainitalProduct />
      <Footer />
    </>
  );
};

export default page;
export function generateMetadata({ param }) {
  return {
    title: "Product | Nainital",
  };
}
