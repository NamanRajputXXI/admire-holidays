import blogPagedata from "@/data/blogPageData";
import React from "react";
import BlogPageCard2 from "../cards/BlogPageCard2";
import BlogHeader from "./BlogHeader";
const AllBlogs = () => {
  return (
    <>
      <BlogHeader />
      <div className="grid max-w-7xl pt-10 px-10 lg:grid-cols-2 gap-4 md:grid-cols-2 grid-cols-1 mx-auto my-10">
        {blogPagedata.map((item, i) => (
          <BlogPageCard2
            link={item.link}
            key={i}
            imageUrl={item.imageUrl}
            title={item.title}
          />
        ))}
      </div>
    </>
  );
};

export default AllBlogs;
