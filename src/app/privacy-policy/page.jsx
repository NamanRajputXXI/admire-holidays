import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <PageBanner heading={"Privacy Policy"} text={"Home - Privacy Policy"} />
      <PrivacyPolicy />
    </>
  );
};

export default page;
export function generateMetadata({ param }) {
  return {
    title: "Privacy Policy",
  };
}
