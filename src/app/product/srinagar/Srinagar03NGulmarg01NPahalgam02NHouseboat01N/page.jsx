import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Navbar from "@/components/Navbar";
import Srinagar03NGulmarg01NPahalgam02NHouseboat01N from "@/components/product/kashmir/Srinagar/Srinagar03NGulmarg01NPahalgam02NHouseboat01N";
import React from "react";

const page = () => {
  return (
    <>
      <FormModal />
      <FormModal />
      <Navbar />
      <Srinagar03NGulmarg01NPahalgam02NHouseboat01N />
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
