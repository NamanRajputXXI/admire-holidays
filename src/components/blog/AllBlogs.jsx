import blogPagedata from "@/data/blogPageData";
import React from "react";
import HomePageBlogCard from "../cards/HomePageBlogCard";

const AllBlogs = () => {
  return (
    <div className="grid max-w-7xl pt-20 px-10 lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1 mx-auto my-20">
      {blogPagedata.map((item, i) => (
        <HomePageBlogCard
          link={item.link}
          key={i}
          imageUrl={item.imageUrl}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default AllBlogs;
