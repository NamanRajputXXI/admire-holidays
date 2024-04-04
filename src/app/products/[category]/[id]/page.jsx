import Footer from "@/components/Footer";
import FormModal from "@/components/FormModal";
import Navbar from "@/components/Navbar";
import SocialMediaShare from "@/components/SocialMediaShare";
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
    console.error(`Error fetching data. Status: ${response.status}`);
    return [];
  }

  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    console.error("Response is not in JSON format");
    return [];
  }

  const productsData = await response.json();
  return productsData.data;
};

// const getShareUrl = (platform, singleProductData, params) => {
//   if (!params || !params.category || !params.id) {
//     return ""; // Return an empty string if params is undefined or missing category/id
//   }

//   const url = `https://admireholidays.com/products/${params.category}/${params.id}`;
//   const text = encodeURIComponent(singleProductData.heading);

//   switch (platform) {
//     case "whatsapp":
//       return `https://wa.me/?text=${text}%20${url}`;
//     case "facebook":
//       return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
//     case "twitter":
//       return `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
//     default:
//       return "";
//   }
// };

const Page = async ({ params }) => {
  const singleProductData = await getProductData({ params });

  return (
    <div>
      {singleProductData && (
        <>
          <FormModal />

          <Navbar />

          <ProductPage singleProductData={singleProductData} params={params} />

          <Footer />
        </>
      )}
    </div>
  );
};

export default Page;
