"use client";
import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Navbar from "@/components/Navbar";
import Product from "@/components/product/jaipur/Product";
import React, { useState } from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <Product />
      <Footer />
    </>
  );
};

export default page;
