import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Navbar from "@/components/Navbar";
import ManaliHoneymoon from "@/components/product/himachal/manaliHoneymoon/ManaliHoneymoon";
import React from "react";

const page = () => {
  return (
    <>
      <FormModal />
      <Navbar />
      <ManaliHoneymoon />
      <Footer />
    </>
  );
};

export default page;
export function generateMetadata({ param }) {
  return {
    title: "Product | Shimla/Manali",
  };
}
