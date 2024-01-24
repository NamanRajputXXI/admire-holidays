import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BharatpurProduct from "@/components/product/bharatpur/BharatpurProduct";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <BharatpurProduct />
      <Footer />
    </>
  );
};

export default page;
