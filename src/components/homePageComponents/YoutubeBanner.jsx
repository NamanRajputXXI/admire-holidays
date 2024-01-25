import React from "react";

const YoutubeBanner = () => {
  return (
    <section
      className=" max-w-screen flex justify-center items-center p-10 bg-cover h-[600px]"
      style={{
        backgroundImage: 'url("/youtubeBannerBackground.avif")',
      }}
    >
      <iframe
        width="794"
        height="446"
        src="https://www.youtube.com/embed/-UwdenlgcQQ"
        title="❣️Reviews from our recent customers who visited Andaman &amp; Nicobar|❣️ANDAMAN TOUR PLANNER IN INDIA❣️"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </section>
  );
};

export default YoutubeBanner;
