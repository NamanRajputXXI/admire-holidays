import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import DomesticDestinationCarousel from "@/components/carousels/DomesticDestinationCarousel";
import InternationalDestinationCarousel from "@/components/carousels/InternationalDestinationCarousel";
import PopularDestinationCarousel from "@/components/carousels/PopularDestinationCarousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <PopularDestinationCarousel />
      <DomesticDestinationCarousel />
      <InternationalDestinationCarousel />
      <Footer />
    </>
  );
}
