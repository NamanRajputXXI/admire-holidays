import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import KanatalProduct from "@/components/product/kanatal/KanatalProduct";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <KanatalProduct />
      <Footer />
    </>
  );
};

export default page;
export function generateMetadata({ param }) {
  return {
    title: "Product | Kanatal",
  };
}
