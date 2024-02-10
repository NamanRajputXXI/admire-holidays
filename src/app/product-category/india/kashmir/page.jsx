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
        heading={"Catergory : Kashmir"}
        text={"Home > India > Kashmir"}
      />
      <div className="max-w-7xl mx-auto my-20 justify-center items-center  px-5 flex flex-col gap-10">
        <div className="grid lg:grid-cols-4   justify-center md:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1">
          <ProductCategoryCard
            url="/srinagar.jpg"
            days="3 Night / 4 Days"
            destination="Whispers of the Valley: Unveil Kashmir's Hidden Gems"
            productLink={"/product/srinagar/SriNagar02HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1566323124805-757e5c41d37c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
            days="3 Night / 4 Days"
            destination="Secret Splendors: Discover Kashmir's Enigmatic Charms"
            productLink={"/product/katra/katra03N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1632231065530-f5fd55c62846?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
            days="4 Night / 5 Days"
            destination="Offbeat Elegance: Your Unique Kashmir Adventure Awaits"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1575336127377-71c4af9ce931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
            destination="Kashmir Escape: 4 Nights, 3 Gems, Endless Memories!"
            days="4 Night / 5 Days"
            productLink={"/product/srinagar/Srinagar02NPahalgam01NHouseboat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1647876406690-9219264ab85a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2F0cmF8ZW58MHx8MHx8fDA%3D"
            destination="Alpine Thrills: Srinagar, Gulmarg, Pahalgam Bliss!"
            days="4 Night / 5 Days"
            productLink={
              "/product/srinagar/Srinagar01NGulmarg01NPahalgam01NHouseboat01N"
            }
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1664964836305-36ee35cbe365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGthdHJhfGVufDB8fDB8fHww"
            destination="Srinagar Serenade: 3 Nights, Pahalgam, Houseboat Harmony!"
            days="5 Night / 6 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1632231065530-f5fd55c62846?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
            destination="Four-Night Symphony: Srinagar, Pahalgam, Gulmarg, Houseboat"
            days="5 Night / 6 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1609412489711-2f037d8f4c77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
            destination="Five Nights in Paradise: Srinagar, Pahalgam Unwind!"
            days="5 Night / 6 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1624254043725-17b101f88901?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
            destination="From Jammu's Gates: Srinagar, Pahalgam, Houseboat Bliss!"
            days="5 Night / 6 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1623612175509-30e97f5aa195?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
            destination="Kashmir Odyssey: Extended Stay Pahalgam, Houseboat!"
            days="6 Night / 7 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1567600668465-2e324c5cb8b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            destination="Valley Extravaganza: Srinagar, Pahalgam, Houseboat, Gulmarg"
            days="6 Night / 7 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1637558929744-024c00b06075?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3VsbWFyZ3xlbnwwfHwwfHx8MA%3D%3D"
            destination="Srinagar to Serenity: 6 Nights of Kashmir Magic!"
            days="6 Night / 7 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1646203028626-b5a3b2b54055?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            destination="Srinagar to Pahalgam: A Six-Night Kashmir Sojourn!"
            days="6 Night / 7 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1621607507269-e29f8a8181e7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            destination="Vaishno Devi to Dal Lake: Katra, Srinagar, Pahalgam Delight!"
            days="7 Night / 8 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1680300971729-81950acea113?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGd1bG1hcmd8ZW58MHx8MHx8fDA%3D"
            destination="Snowy Peaks to Houseboat: Srinagar, Gulmarg, Pahalgam"
            days="7 Night / 8 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1666545380922-1296a4ac9521?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            destination="Four Destinations, One Journey: Kashmir Adventure."
            days="7 Night / 8 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1616190423660-abdf5cc5a66b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3JpbmFnYXJ8ZW58MHx8MHx8fDA%3D"
            destination="Enchanting Trails: Srinagar to Katra"
            days="8 Night / 9 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1623996604892-22be6b44d841?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3JpbmFnYXJ8ZW58MHx8MHx8fDA%3D"
            destination="Spiritual Katra, Majestic Srinagar, Houseboat, Pahalgam."
            days="8 Night / 9 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1641910389345-5a30d4c01d90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNyaW5hZ2FyfGVufDB8fDB8fHww"
            destination="Harmony: Srinagar, Houseboat, Gulmarg, Pahalgam, Katra."
            days="9 Night / 10 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;

export function generateMetadata({ param }) {
  return {
    title: "Category | Srinagar",
  };
}
