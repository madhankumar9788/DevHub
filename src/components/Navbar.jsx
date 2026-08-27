import { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import gsap from "gsap";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const headerRef = useRef(null);
  const linksRef = useRef(null);

  const navItems = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "products", label: "Products" },
    { id: "work", label: "Work" },
    { id: "testimonials", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    // Initial GSAP stagger drop-down
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );

      if (linksRef.current) {
        gsap.fromTo(
          linksRef.current.children,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out", delay: 0.5 }
        );
      }
    });

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Section ScrollTrigger detection for active link underline
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0B1120]/90 border-b border-[#334155] backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3"
          : "bg-[#0B1120]/40 backdrop-blur-sm border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={(e) => scrollTo(e, "hero")}>
          <Logo light={true} />
        </a>

        {/* Desktop Nav */}
        <nav ref={linksRef} className="hidden md:flex items-center gap-8 font-sans relative">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollTo(e, item.id)}
                className={`relative text-sm font-medium transition-colors py-1 ${
                  isActive ? "text-[#F8FAFC]" : "text-[#94A3B8] hover:text-[#3B82F6]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-fade-in" />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4 font-space">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "contact")}
            className="text-sm font-semibold text-[#94A3B8] hover:text-[#06B6D4] transition-colors"
          >
            Let's Talk
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "contact")}
            className="bg-[#3B82F6] hover:bg-blue-600 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(59,130,246,0.4)] border border-[#3B82F6]/50 hover:scale-105"
          >
            Hire Me →
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#F8FAFC] hover:text-[#3B82F6] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#111827] border-t border-[#334155] px-6 py-4 flex flex-col gap-4 font-sans shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollTo(e, item.id)}
              className="text-sm font-medium text-[#94A3B8] hover:text-[#3B82F6] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "contact")}
            className="bg-[#3B82F6] text-white text-sm font-bold px-5 py-2.5 rounded-full text-center mt-2 shadow-md font-space"
          >
            Hire Me →
          </a>
        </div>
      )}
    </header>
  );
}
