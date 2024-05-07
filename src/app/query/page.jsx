import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QueryForm from "@/components/queryForm/QueryForm";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <QueryForm />
      <Footer />
    </>
  );
};

export default page;
