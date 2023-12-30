import CompanyStatsSection from "@/components/CompanyStatsSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";
import PageBanner from "@/components/PageBanner";
import React from "react";
import AboutUs from "@/components/aboutUs/AboutUs";

const page = () => {
  return (
    <main>
      <Navbar />
      <PageBanner heading={"About us"} text={"Home - About us"} />
      <AboutUs />
      <CompanyStatsSection />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default page;
