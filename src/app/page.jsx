import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import QuestioningCardsLayout from "@/components/homePageComponents/QuestioningCardsLayout";
import SubscribeLetter from "@/components/homePageComponents/SubscribeLetter";
import YoutubeBanner from "@/components/homePageComponents/YoutubeBanner";
import DomesticDestinationCarousel from "@/components/carousels/DomesticDestinationCarousel";
import InternationalDestinationCarousel from "@/components/carousels/InternationalDestinationCarousel";
import PopularDestinationCarousel from "@/components/carousels/ExclusiveCarousel";
import HomePageBlogSection from "@/components/homePageComponents/HomePageBlogSection";
import WeekendTrip from "@/components/homePageComponents/WeekendTrip";
import CompanyStatsSection from "@/components/homePageComponents/CompanyStatsSection";
import LatestUpdatesSection from "@/components/homePageComponents/LatestUpdatesSection";
import TravelGuideline from "@/components/homePageComponents/TravelGuideline";
import HeroSection from "@/components/homePageComponents/HeroSection";
import Testimonial from "@/components/homePageComponents/Testimonial";
import FeaturesSection from "@/components/homePageComponents/FeaturesSection";
import TourismAlliance from "@/components/homePageComponents/TourismAlliance";
import Query from "@/components/homePageComponents/QueryButton";
const Home = () => {
  return (
    <>
      <Query />
      <Navbar />
      <HeroSection />
      <PopularDestinationCarousel />
      <DomesticDestinationCarousel />
      <InternationalDestinationCarousel />
      <QuestioningCardsLayout />
      <WeekendTrip />
      <YoutubeBanner />
      <TourismAlliance />
      <TravelGuideline />
      <LatestUpdatesSection />
      <FeaturesSection />
      <CompanyStatsSection />
      <Testimonial />
      <HomePageBlogSection />
      <SubscribeLetter />
      <Footer />
    </>
  );
};
export default Home;

export function generateMetadata() {
  return {
    metadataBase: new URL("http://localhost:3000"),
    title:
      "Best Tour and Travel Agency in Delhi |Travel Agents in Delhi - Admire Holidays",
    description:
      "Discover the best tour and travel agency in Delhi for unforgettable adventures. Explore premium India tour packages at unbeatable prices. Book now!",
    keywords:
      "best tour and travel agency in delhi,tour and travel agency in delhi,travel agency in delhi,best travel agency in delhi,best tour operators in delhi,international travel agencies in delhi,best travel agency in delhi ncr",
    openGraph: {
      title:
        "Best Tour and Travel Agency in Delhi |Travel Agents in Delhi - Admire Holidays",
      description:
        "Discover the best tour and travel agency in Delhi for unforgettable adventures. Explore premium India tour packages at unbeatable prices. Book now!",
      url: "https://admireholidays.com",
      siteName: "Admire Holidays",
      images: [
        {
          url: "https://admireholidays.com/products/goa",
          alt: "Admire Holidays",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      noimdcp: true,
      notranslate: true,
      nosnippet: false,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Best Tour and Travel Agency in Delhi |Travel Agents in Delhi - Admire Holidays",
      description:
        "Discover the best tour and travel agency in Delhi for unforgettable adventures. Explore premium India tour packages at unbeatable prices. Book now!",
      images: ["https://admireholidays.com/products/goa"],
    },
    verification: {
      google: "YahooSeeker:Index,Follow",
      yandex: "Googlebot:Index,Follow",
    },
    other: {
      "msapplication-TileColor": "#da532c",
      "theme-color": "#ffffff",
      referrer: "origin-when-cross-origin",
      "format-detection": "telephone=no",
    },
    article: {
      section: "Admire Holidays",
      author: "Maitreya.com",
      tags: "best tour and travel agency in India,tour and travel agency in India,india travel agency delhi,international travel agencies in india,tour and travel services in india,best tour operators in india,tour and travels in india",
    },
  };
}
