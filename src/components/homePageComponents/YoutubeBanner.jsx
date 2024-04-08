import React from "react";

const YoutubeBanner = () => {
  return (
    <section
      className=" max-w-screen flex h-[600px] justify-center items-center sm:p-10 p-2 bg-cover "
      style={{
        backgroundImage: 'url("/youtubeBannerBackground.avif")',
      }}
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10">
        <iframe
          width="300"
          height="250"
          className="rounded-lg"
          src="https://www.youtube.com/embed/-UwdenlgcQQ"
          title="❣️Reviews from our recent customers who visited Andaman &amp; Nicobar|❣️ANDAMAN TOUR PLANNER IN INDIA❣️"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="300"
          className="rounded-lg"
          height="250"
          src="https://www.youtube.com/embed/wmi_B-dYk3o"
          title="❣️Reviews from our recent customers who visited Andaman &amp; Nicobar|❣️ANDAMAN TOUR PLANNER IN INDIA❣️"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default YoutubeBanner;
