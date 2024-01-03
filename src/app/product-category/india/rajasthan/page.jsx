import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import ProductCategoryCard from "@/components/ProductCategoryCard";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <PageBanner
        heading={"Catergory : Uttarakhand"}
        text={"Home > India > Uttarakhand"}
      />

      <div className="max-w-7xl mx-auto my-20 sm:items-start items-center  px-5 flex flex-col gap-10">
        <p className=" text-gray-600">Showing the single result</p>
        <div className="grid lg:grid-cols-4 sm:items-start items-center sm:justify-start md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1">
          <ProductCategoryCard
            url="https://admireholidays.com/wp-content/uploads/2022/08/Copenhagen-636x426.jpg"
            days="7 Days"
            destination="Jaipur"
            details="Jaipur,Rajasthan, India"
          />
          <ProductCategoryCard
            url="https://admireholidays.com/wp-content/uploads/2023/04/tour-hours-2-636x426.jpg"
            days="2 Days"
            destination="Bharatpur
            "
            details="Bharatpur, india"
          />
          <ProductCategoryCard
            url="https://admireholidays.com/wp-content/uploads/2023/05/m4spp3gjyngtrt7mdzliuqltm7n1_jrjc1sfhh87khd80ovh9b4i7254r_shutterstock_664589182-636x426.jpg"
            days="1 Day"
            destination="Pushkar"
            details="Pushkar City in Rajasthan
            "
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
