import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Plans from "./components/Plans";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <Hero />
      <Services />
      <Plans />
      <Footer />
    </div>
  );
}