import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Navbar from "@/components/Navbar";
import HimachalHoneymoonProduct from "@/components/product/himachal/HimachalHoneymoon/HimachalHoneymoonProduct";
import React from "react";

const page = () => {
  return (
    <>
      <FormModal />
      <Navbar />
      <HimachalHoneymoonProduct />
      <Footer />
    </>
  );
};

export default page;
export function generateMetadata({ param }) {
  return {
    title: "Product | Himachal Honeymoon",
  };
}
