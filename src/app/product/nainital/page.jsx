import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Navbar from "@/components/Navbar";
import NainitalProduct from "@/components/product/nainital/NainitalProduct";
import React from "react";

const page = () => {
  return (
    <>
      <FormModal />
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
