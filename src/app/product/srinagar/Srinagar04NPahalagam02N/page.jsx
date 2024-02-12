import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Navbar from "@/components/Navbar";
import Srinagar03NPahalgam02NHouseboat01N from "@/components/product/kashmir/Srinagar/Srinagar03NPahalgam02NHouseboat01N";
import Srinagar04NPahalagam02N from "@/components/product/kashmir/Srinagar/Srinagar04NPahalagam02N";
import React from "react";

const page = () => {
  return (
    <>
      <FormModal />
      <FormModal />
      <Navbar />
      <Srinagar04NPahalagam02N />
      <Footer />
    </>
  );
};

export default page;
export function generateMetadata({ param }) {
  return {
    title: "Product | Srinagar 02N - Houseboat 01N",
  };
}
