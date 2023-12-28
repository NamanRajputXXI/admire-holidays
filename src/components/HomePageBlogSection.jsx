import homePageBlogData from "@/data/blogSectionHomepage";
import React from "react";
import HomePageBlogCard from "./cards/HomePageBlogCard";

const HomePageBlogSection = () => {
  return (
    <div className="mt-32">
      <h1 className="text-center md:text-5xl text-3xl  font-bold">
        Domestic Destination
      </h1>
      <div className="grid max-w-7xl px-10 lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1 mx-auto my-20">
        {homePageBlogData.map((item, i) => (
          <HomePageBlogCard
            key={i}
            imageUrl={item.imageUrl}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePageBlogSection;
