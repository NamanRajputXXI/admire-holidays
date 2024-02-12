import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Navbar from "@/components/Navbar";
import ManaliProduct from "@/components/product/himachal/manali/ManaliProduct";
import React from "react";

const page = () => {
  return (
    <>
      <FormModal />
      <Navbar />
      <ManaliProduct />
      <Footer />
    </>
  );
};

export default page;
export function generateMetadata({ param }) {
  return {
    title: "Product | Shimla/Manali",
  };
}
