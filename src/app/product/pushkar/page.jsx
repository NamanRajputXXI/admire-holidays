import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Navbar from "@/components/Navbar";
import PushkarProduct from "@/components/product/pushkar/PushkarProduct";
import React from "react";

const page = () => {
  return (
    <>
      <FormModal />
      <Navbar />
      <PushkarProduct />
      <Footer />
    </>
  );
};

export default page;
