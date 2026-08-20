import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "products", label: "Products" },
    { id: "work", label: "Work" },
    { id: "testimonials", label: "Reviews" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070510]/90 border-b border-orange-500/20 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3"
          : "bg-[#070510]/70 backdrop-blur-md border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={(e) => scrollTo(e, "hero")}>
          <Logo light={true} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollTo(e, item.id)}
              className="text-sm font-semibold text-slate-300 hover:text-orange-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "contact")}
            className="text-sm font-semibold text-slate-300 hover:text-orange-400 transition-colors"
          >
            Let's Talk
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "contact")}
            className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-400 hover:to-amber-400 text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(249,115,22,0.5)] border border-orange-400/30 hover:scale-105"
          >
            Hire Me →
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-200 hover:text-orange-400 p-2"
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
        <div className="md:hidden bg-[#0a0714] border-t border-slate-800 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollTo(e, item.id)}
              className="text-sm font-semibold text-slate-200 hover:text-orange-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "contact")}
            className="bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-bold px-5 py-2.5 rounded-full text-center mt-2 shadow-[0_0_20px_rgba(249,115,22,0.4)]"
          >
            Hire Me →
          </a>
        </div>
      )}
    </header>
  );
}
