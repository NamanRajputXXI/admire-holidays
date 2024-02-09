import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Navbar from "@/components/Navbar";
import Srinagar03NPahalgam01NHouseboat01N5Nights from "@/components/product/Srinagar/Srinagar03NPahalgam01NHouseboat01N5Nights";
import React from "react";

const page = () => {
  return (
    <>
      <FormModal />
      <FormModal />
      <Navbar />
      <Srinagar03NPahalgam01NHouseboat01N5Nights />
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
