import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Navbar from "@/components/Navbar";
import ShimlaManaliProduct from "@/components/product/himachal/shimlaManali/ShimlaManaliProduct";
import React from "react";

const page = () => {
  return (
    <>
      <FormModal />
      <Navbar />
      <ShimlaManaliProduct />
      <Footer />
    </>
  );
};

export default page;
export function generateMetadata({ param }) {
  return {
    title: "Product | Shimala/Manali",
  };
}
