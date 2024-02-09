import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Navbar from "@/components/Navbar";
import Srinagar01NGulmarg01NPahalgram01NHouseboat01N from "@/components/product/Srinagar/Srinagar01NGulmarg01NPahalgram01NHouseboat01N";
import React from "react";

const page = () => {
  return (
    <>
      <FormModal />
      <FormModal />
      <Navbar />
      <Srinagar01NGulmarg01NPahalgram01NHouseboat01N />
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
