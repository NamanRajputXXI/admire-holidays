// app/blog/[slug]/page.jsx

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import BlogLayout from "@/components/blog/BlogLayout";
import blogPagedata from "@/data/blogPageData";
import { notFound } from "next/navigation";

export default function BlogPost({ params }) {
  const post = blogPagedata.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <div>
        <Navbar />
        <BlogLayout params={params} />
        <Footer />
      </div>
    </div>
  );
}

export function generateMetadata({ param }) {
  return {
    title: "Blog",
  };
}
