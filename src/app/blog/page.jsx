import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import BlogLayout from "@/components/blog/BlogLayout";
import React from "react";

const page = () => {
  return (
    <main>
      <Navbar />
      <PageBanner heading={"Blog"} text={"Home - Blog"} />
      <BlogLayout />
      <Footer />
    </main>
  );
};

export default page;
export function generateMetadata({ param }) {
  return {
    title: "Blog",
  };
}
