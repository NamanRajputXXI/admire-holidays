import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Navbar from "@/components/Navbar";
import Srinagar04NPahalgam01NHouseboat01 from "@/components/product/Srinagar/Srinagar04NPahalgam01NHouseboat01";
import React from "react";

const page = () => {
  return (
    <>
      <FormModal />
      <FormModal />
      <Navbar />
      <Srinagar04NPahalgam01NHouseboat01 />
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
