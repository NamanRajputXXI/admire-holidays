import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QuestioningCard from "@/components/QuestioningCard";
import QuestioningCardsLayout from "@/components/QuestioningCardsLayout";
import DomesticDestinationCarousel from "@/components/carousels/DomesticDestinationCarousel";
import InternationalDestinationCarousel from "@/components/carousels/InternationalDestinationCarousel";
import PopularDestinationCarousel from "@/components/carousels/PopularDestinationCarousel";
import WeekendTrip from "@/components/weekendTrip/WeekendTrip";
import { SiIcomoon } from "react-icons/si";

export default function Home() {
  return (
    <>
      <Navbar />
      <PopularDestinationCarousel />
      <DomesticDestinationCarousel />
      <InternationalDestinationCarousel />
      <QuestioningCardsLayout />
      <WeekendTrip />
      <Footer />
    </>
  );
}
