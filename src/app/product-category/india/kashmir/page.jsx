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
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1575336127377-71c4af9ce931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
            destination="Alpine Thrills: Srinagar, Gulmarg, Pahalgam Bliss!"
            days="4 Night / 5 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1575336127377-71c4af9ce931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
            destination="Srinagar Serenade: 3 Nights, Pahalgam, Houseboat Harmony!"
            days="5 Night / 6 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1575336127377-71c4af9ce931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
            destination="Four-Night Symphony: Srinagar, Pahalgam, Gulmarg, Houseboat"
            days="5 Night / 6 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1575336127377-71c4af9ce931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
            destination="Five Nights in Paradise: Srinagar, Pahalgam Unwind!"
            days="5 Night / 6 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1575336127377-71c4af9ce931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
            destination="From Jammu's Gates: Srinagar, Pahalgam, Houseboat Bliss!"
            days="5 Night / 6 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1575336127377-71c4af9ce931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
            destination="Kashmir Odyssey: Extended Stay Pahalgam, Houseboat!"
            days="6 Night / 7 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1575336127377-71c4af9ce931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
            destination="Valley Extravaganza: Srinagar, Pahalgam, Houseboat, Gulmarg"
            days="6 Night / 7 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1575336127377-71c4af9ce931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
            destination="Srinagar to Serenity: 6 Nights of Kashmir Magic!"
            days="6 Night / 7 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1575336127377-71c4af9ce931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
            destination="Srinagar to Pahalgam: A Six-Night Kashmir Sojourn!"
            days="6 Night / 7 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1575336127377-71c4af9ce931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
            destination="Vaishno Devi to Dal Lake: Katra, Srinagar, Pahalgam Delight!"
            days="7 Night / 8 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1575336127377-71c4af9ce931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
            destination="Snowy Peaks to Houseboat: Srinagar, Gulmarg, Pahalgam"
            days="7 Night / 8 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1575336127377-71c4af9ce931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
            destination="Four Destinations, One Journey: Kashmir Adventure."
            days="7 Night / 8 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1575336127377-71c4af9ce931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
            destination="Enchanting Trails: Srinagar to Katra"
            days="8 Night / 9 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1575336127377-71c4af9ce931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
            destination="Spiritual Katra, Majestic Srinagar, Houseboat, Pahalgam."
            days="8 Night / 9 Days"
            productLink={"/product/srinagar/SriNagar03HouseBoat01N"}
          />
          <ProductCategoryCard
            url="https://images.unsplash.com/photo-1575336127377-71c4af9ce931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGthc2htaXJ8ZW58MHx8MHx8fDA%3D"
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
