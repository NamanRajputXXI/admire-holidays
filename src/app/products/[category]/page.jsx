import Navbar from "@/components/Navbar";
import PageBanner from "@/components/PageBanner";
import ProductCategoryCard from "@/components/ProductCategoryCard";
import Link from "next/link";

export const getProductsData = async ({ params }) => {
  const response = await fetch(
    `https://server-deploy-gamma.vercel.app/${params.category}`,
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
  const data = await getProductsData({ params });

  if (data.length === 0) {
    // Handle the case where data is empty (e.g., display a message)
    return <div>No data available.</div>;
  }

  return (
    <>
      <Navbar />
      <PageBanner
        heading={`Catergory : ${params.category}`}
        text={`Home > India > ${params.category}`}
      />

      <div className="max-w-7xl mx-auto my-20 px-5 flex flex-col gap-10">
        <div className="grid lg:grid-cols-4   justify-center md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1">
          {data.map((destination, index) => (
            <div key={index}>
              <ProductCategoryCard
                url={
                  "https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                days={destination.duration}
                destination={destination.heading}
                productLink={`/products/${params.category}/${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;