import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Navbar from "@/components/Navbar";
import Katra03N from "@/components/product/katra/Katra03N";
import React from "react";

const page = () => {
  return (
    <>
      <FormModal />
      <FormModal />
      <Navbar />
      <Katra03N />
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
