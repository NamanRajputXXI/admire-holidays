import EmptyProductCategory from "@/components/EmptyProductCategory";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import React from "react";
import { CgBox } from "react-icons/cg";
const page = () => {
  return (
    <>
      <Navbar />
      <PageBanner
        heading={"Catergory : Andaman"}
        text={"Home > India > Andaman"}
      />
      <EmptyProductCategory />
      <Footer />
    </>
  );
};

export default page;
export function generateMetadata({ param }) {
  return {
    title: "Category | Andaman",
  };
}
