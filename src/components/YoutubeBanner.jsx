import React from "react";

const YoutubeBanner = () => {
  return (
    <section
      className=" max-w-screen flex justify-center items-center p-10 bg-cover h-[600px]"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1447871622716-5dc761437456?q=80&w=1787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
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
