import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QuestioningCardsLayout from "@/components/homePageComponents/QuestioningCardsLayout";
import SubscribeLetter from "@/components/homePageComponents/SubscribeLetter";
import YoutubeBanner from "@/components/homePageComponents/YoutubeBanner";
import DomesticDestinationCarousel from "@/components/carousels/DomesticDestinationCarousel";
import InternationalDestinationCarousel from "@/components/carousels/InternationalDestinationCarousel";
import PopularDestinationCarousel from "@/components/carousels/PopularDestinationCarousel";
import HomePageBlogSection from "@/components/homePageComponents/HomePageBlogSection";
import WeekendTrip from "@/components/homePageComponents/WeekendTrip";
import CompanyStatsSection from "@/components/homePageComponents/CompanyStatsSection";
import LatestUpdatesSection from "@/components/homePageComponents/LatestUpdatesSection";
import TravelGuideline from "@/components/homePageComponents/TravelGuideline";
import HeroSection from "@/components/homePageComponents/HeroSection";
import Testimonial from "@/components/homePageComponents/Testimonial";
const Home = () => {
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
};
export default Home;

export function generateMetadata({ param }) {
  return {
    title: "Home",
  };
}
