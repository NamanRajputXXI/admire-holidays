import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AllBlogs from "@/components/blog/AllBlogs";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <AllBlogs />
      <Footer />
    </>
  );
};

export default page;
