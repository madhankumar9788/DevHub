import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Products from "./components/Products";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) return;

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".scroll-section");

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [loading]);

  return (
    <div className="bg-[#0B1120] text-[#F8FAFC] font-sans selection:bg-[#3B82F6] selection:text-white min-h-screen relative overflow-x-hidden">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Products />
        <Services />
        <Portfolio />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}