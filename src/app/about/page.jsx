import CompanyStatsSection from "@/components/CompanyStatsSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";
import React from "react";

const page = () => {
  return (
    <main>
      <Navbar />
      <CompanyStatsSection />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default page;
