import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QuestioningCard from "@/components/cards/QuestioningCard";
import QuestioningCardsLayout from "@/components/QuestioningCardsLayout";
import SubscribeLetter from "@/components/SubscribeLetter";
import Testimonial from "@/components/Testimonial";
import YoutubeBanner from "@/components/YoutubeBanner";
import DomesticDestinationCarousel from "@/components/carousels/DomesticDestinationCarousel";
import InternationalDestinationCarousel from "@/components/carousels/InternationalDestinationCarousel";
import PopularDestinationCarousel from "@/components/carousels/PopularDestinationCarousel";
import HomePageBlogSection from "@/components/HomePageBlogSection";
import WeekendTrip from "@/components/WeekendTrip";
import CompanyStatsSection from "@/components/CompanyStatsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <PopularDestinationCarousel />
      <DomesticDestinationCarousel />
      <InternationalDestinationCarousel />
      <QuestioningCardsLayout />
      <WeekendTrip />
      <YoutubeBanner />
      <CompanyStatsSection />
      <Testimonial />
      <HomePageBlogSection />
      <SubscribeLetter />
      <Footer />
    </>
  );
}
