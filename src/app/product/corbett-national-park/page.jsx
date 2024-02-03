import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import CorbettNationalPark from "@/components/product/corbettNationalPark/CorbettNationalPark";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <CorbettNationalPark />
      <Footer />
    </>
  );
};

export default page;
export function generateMetadata({ param }) {
  return {
    title: "Product | Corbett National Park",
  };
}
