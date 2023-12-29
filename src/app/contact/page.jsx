import CompanyStatsSection from "@/components/CompanyStatsSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";
import ContactUsBanner from "@/components/contactUs/ContactUsBanner";
import ContactUsForm from "@/components/contactUs/ContactUsForm";
import React from "react";

const page = () => {
  return (
    <main>
      <Navbar />
      <ContactUsBanner />
      <ContactUsForm />
      <CompanyStatsSection />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default page;
