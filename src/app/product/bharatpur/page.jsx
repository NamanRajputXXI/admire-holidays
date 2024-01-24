import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Navbar from "@/components/Navbar";
import BharatpurProduct from "@/components/product/bharatpur/BharatpurProduct";
import React from "react";

const page = () => {
  return (
    <>
      <FormModal />
      <Navbar />
      <BharatpurProduct />
      <Footer />
    </>
  );
};

export default page;
