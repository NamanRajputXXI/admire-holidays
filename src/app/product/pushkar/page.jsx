import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PushkarProduct from "@/components/product/pushkar/PushkarProduct";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <PushkarProduct />
      <Footer />
    </>
  );
};

export default page;
