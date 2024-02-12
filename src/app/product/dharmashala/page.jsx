import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Navbar from "@/components/Navbar";
import DharmashalaProduct from "@/components/product/himachal/dharmashala/DharmashalaProduct";
import HaridwarProduct from "@/components/product/uttarakhand/haridwar/HaridwarProduct";
import React from "react";

const page = () => {
  return (
    <>
      <FormModal />
      <Navbar />
      <DharmashalaProduct />
      <Footer />
    </>
  );
};

export default page;
export function generateMetadata({ param }) {
  return {
    title: "Product | Haridwar",
  };
}
