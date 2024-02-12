import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Navbar from "@/components/Navbar";
import Katra02NSrinagar03NHouseboat01NPahalgam02N from "@/components/product/kashmir/katra/Katra02NSrinagar03NHouseboat01NPahalgam02N";
import Katra03N from "@/components/product/kashmir/katra/Katra03N";
import React from "react";

const page = () => {
  return (
    <>
      <FormModal />
      <FormModal />
      <Navbar />
      <Katra02NSrinagar03NHouseboat01NPahalgam02N />
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
