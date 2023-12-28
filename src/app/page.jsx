import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
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
import LatestUpdatesSection from "@/components/LatestUpdatesSection";
import TravelGuideline from "@/components/TravelGuideline";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PopularDestinationCarousel />
      <DomesticDestinationCarousel />
      <InternationalDestinationCarousel />
      <QuestioningCardsLayout />
      <WeekendTrip />
      <YoutubeBanner />
      <TravelGuideline />
      <LatestUpdatesSection />
      <CompanyStatsSection />
      <Testimonial />
      <HomePageBlogSection />
      <SubscribeLetter />
      <Footer />
    </>
  );
}
