import EmptyProductCategory from "@/components/EmptyProductCategory";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import React from "react";
const page = () => {
  return (
    <>
      <Navbar />
      <PageBanner
        heading={"Catergory : West Bengal"}
        text={"Home > India > West Bengal"}
      />
      <EmptyProductCategory />
      <Footer />
    </>
  );
};

export default page;
