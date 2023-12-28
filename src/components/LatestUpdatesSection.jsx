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
      <h1 className="text-center md:text-4xl text-3xl text-white font-bold">
        Latest Updates For You
      </h1>

      <div className="grid  grid-layout-latestUpdate gap-5 max-w-7xl mx-auto py-10 px-5">
        <div class="relative" style={{ gridArea: "I1" }}>
          <img
            className="w-full h-full rounded-2xl"
            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGV1cm9wZXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <h1 className="md:text-4xl text-2xl text-white font-bold bottom-10 left-10 absolute">
            Europe
          </h1>
        </div>
        <div className="relative" style={{ gridArea: "I2" }}>
          <img
            className="w-full h-full rounded-2xl"
            src="https://images.unsplash.com/photo-1589983846997-04788035bc83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtlcmFsYXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <h1 className="md:text-4xl text-2xl text-white font-bold bottom-10 left-10 absolute">
            Kerala
          </h1>
        </div>
        <div className=" relative" style={{ gridArea: "I3" }}>
          <img
            className="w-full h-full rounded-2xl"
            src="https://images.unsplash.com/photo-1633984904221-29bb70dffef8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGVhc3QlMjBhc2lhfGVufDB8fDB8fHww"
            alt=""
          />
          <h1 className="md:text-4xl text-2xl text-white font-bold bottom-10 left-10 absolute">
            East Asia
          </h1>
        </div>
        <div className=" relative" style={{ gridArea: "I4" }}>
          <img
            className="w-full h-full rounded-2xl"
            src="https://images.unsplash.com/photo-1570804485046-b5b8d795dc5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHV0dGFyYWtoYW5kfGVufDB8fDB8fHww"
            alt=""
          />
          <h1 className="md:text-4xl text-2xl text-white font-bold bottom-10 left-10 absolute">
            Uttarakhand
          </h1>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdatesSection;
