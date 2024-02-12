import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Navbar from "@/components/Navbar";
import KulluManaliProduct from "@/components/product/himachal/kullu-manali/KulluManaliProduct";
import Katra03N from "@/components/product/kashmir/katra/Katra03N";
import React from "react";

const page = () => {
  return (
    <>
      <FormModal />
      <Navbar />
      <KulluManaliProduct />

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
