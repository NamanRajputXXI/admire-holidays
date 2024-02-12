import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Navbar from "@/components/Navbar";
import Srinagar02NPahalgam02NHouseboat01NGulmarg01N from "@/components/product/kashmir/Srinagar/Srinagar02NPahalgam02NHouseboat01NGulmarg01N";
import React from "react";

const page = () => {
  return (
    <>
      <FormModal />
      <FormModal />
      <Navbar />
      <Srinagar02NPahalgam02NHouseboat01NGulmarg01N />
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
