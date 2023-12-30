import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import React from "react";

const page = () => {
  return (
    <main>
      <Navbar />
      <PageBanner heading={"Blog"} text={"Home - Blog"} />
      <Footer />
    </main>
  );
};

export default page;
