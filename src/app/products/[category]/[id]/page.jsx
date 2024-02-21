import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Navbar from "@/components/Navbar";
import ProductPage from "@/components/productPage/ProductPage";
import React from "react";

export const getProductData = async ({ params }) => {
  const response = await fetch(
    `https://server-deploy-gamma.vercel.app/${params.category}/${params.id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    // Handle the case where the response is not OK (e.g., status code other than 200)
    console.error(`Error fetching data. Status: ${response.status}`);
    return [];
  }

  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    // Handle the case where the response is not in JSON format
    console.error("Response is not in JSON format");
    return [];
  }

  const productsData = await response.json();
  return productsData.data;
};

const Page = async ({ params }) => {
  const singleProductData = await getProductData({ params });

  return (
    <div>
      {singleProductData && (
        <>
          <FormModal />
          <Navbar />
          <ProductPage singleProductData={singleProductData} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Page;
