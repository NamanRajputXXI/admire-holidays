import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Product from "@/components/product/jaipur/JaipurProduct";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Product />
      <Footer />
    </>
  );
};

export default page;
export function generateMetadata({ param }) {
  return {
    title: "Product | Jaipur",
  };
}
