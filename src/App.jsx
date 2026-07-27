import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <Portfolio />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}