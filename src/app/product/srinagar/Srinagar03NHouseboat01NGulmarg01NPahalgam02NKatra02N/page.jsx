import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Navbar from "@/components/Navbar";
import Srinagar03NHouseboat01NGulmarg01NPahalgam02NKatra02N from "@/components/product/kashmir/Srinagar/Srinagar03NHouseboat01NGulmarg01NPahalgam02NKatra02N";
import React from "react";

const page = () => {
  return (
    <>
      <FormModal />
      <FormModal />
      <Navbar />
      <Srinagar03NHouseboat01NGulmarg01NPahalgam02NKatra02N />
      <Footer />
    </>
  );
};

export default page;
export function generateMetadata({ param }) {
  return {
    title: "Product | Pushkar",
  };
}
