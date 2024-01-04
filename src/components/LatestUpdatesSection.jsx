import React from "react";

const LatestUpdatesSection = () => {
  return (
    <section
      className="h-fit py-20 bg-cover bg-[#1B1B3F] "
      style={{
        backgroundImage:
          "url('https://admireholidays.com/wp-content/uploads/2023/04/background-testimonial-home-6.png')",
      }}
    >
      <p class="text-[#00BB98] my-3 ml-[30%] text-xl  font-LaBelle  ">
        Trending Travel Stories
      </p>
      <h1 className="ml-[30%] md:text-4xl text-3xl text-white font-bold">
        Latest Updates For You
      </h1>

      <div className="grid  grid-layout-latestUpdate gap-5 max-w-7xl mx-auto py-10 px-5">
        <div class="relative" style={{ gridArea: "I1" }}>
          <div className="absolute w-full h-full bg-black bg-opacity-35"></div>
          <img
            className="w-full h-full rounded-xl  "
            src="https://admireholidays.com/wp-content/uploads/2022/07/destination-01.jpg"
            alt=""
          />
          <h1 className="md:text-4xl text-2xl text-white font-bold bottom-10 left-10 absolute">
            Europe
          </h1>
        </div>
        <div className="relative" style={{ gridArea: "I2" }}>
          <div className="absolute w-full h-full bg-black bg-opacity-35"></div>
          <img
            className="w-full h-full rounded-xl"
            src="https://admireholidays.com/wp-content/uploads/2022/07/destination-03-636x306.jpg"
            alt=""
          />
          <h1 className="md:text-4xl text-2xl text-white font-bold bottom-10 left-10 absolute">
            Kerala
          </h1>
        </div>
        <div className=" relative" style={{ gridArea: "I3" }}>
          <div className="absolute w-full h-full bg-black bg-opacity-35"></div>

          <img
            className="w-full h-full rounded-xl"
            src="https://admireholidays.com/wp-content/uploads/2022/07/destination-03-306x306.jpg"
            alt=""
          />
          <h1 className="md:text-4xl text-2xl text-white font-bold bottom-10 left-10 absolute">
            East Asia
          </h1>
        </div>
        <div className=" relative" style={{ gridArea: "I4" }}>
          <div className="absolute w-full h-full bg-black bg-opacity-35"></div>

          <img
            className="w-full h-full rounded-xl"
            src="https://admireholidays.com/wp-content/uploads/2022/07/destination-02-306x306.jpg"
            alt=""
          />
          <h1 className="md:text-4xl text-2xl text-white font-bold bottom-10 left-10 absolute">
            Scandinavia
          </h1>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdatesSection;
