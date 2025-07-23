import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import GoogleReviews from "./components/GoogleReviews";
import Plans from "./components/Plans";
import Footer from "./components/Footer";
import SponsorCarousel from "./components/SponsorCarousel";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <Hero />
      <Services />
      <GoogleReviews />
      <Plans />
      <Contact />
      <SponsorCarousel />
      <Footer />
    </div>
  );
}