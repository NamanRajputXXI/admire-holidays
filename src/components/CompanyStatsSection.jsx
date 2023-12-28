import companyStatsData from "@/data/comapanyStatsData";
import React from "react";

const CompanyStatsSection = () => {
  return (
    <section
      className="bg-[#00BB98] h-fit py-20"
      style={{
        backgroundImage:
          "url('https://admireholidays.com/wp-content/uploads/2023/04/background-testimonial-home-6.png')",
      }}
    >
      <div className="max-w-7xl  mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center gap-10 px-5 ">
        {companyStatsData.map((item, i) => (
          <div
            className="flex flex-col justify-center items-center gap-10 "
            key={i}
          >
            <div> {item.icon}</div>
            <div className="text-5xl text-white font-medium">
              {item.numbers}
            </div>
            <div className="text-sm text-gray-200 -mt-8 font-medium">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyStatsSection;
