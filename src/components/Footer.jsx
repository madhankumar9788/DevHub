import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null);

  const scrollTo = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      {
        y: 80,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="bg-gray-900 text-white pt-24 pb-10 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto -mt-100">

        {/* CTA */}

        <div className="bg-indigo-600  rounded-3xl p-10 md:p-14 mb-20 flex flex-col lg:flex-row items-center justify-between gap-10">

          <div>
            <h2 className="text-4xl font-black leading-tight">
              Ready to Build
              <br />
              Your Next Website?
            </h2>

            <p className="mt-4 text-indigo-100 max-w-lg">
              I develop modern React, Laravel and WordPress websites for
              colleges, institutes and businesses.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">

            <a
              href="mailto:info@devhub.com"
              className="bg-white text-indigo-700 px-6 py-3 rounded-full font-bold hover:scale-105 transition"
            >
              Email Me
            </a>

            <a
              href="tel:+919876543210"
              className="border border-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-indigo-700 transition"
            >
              Call Me
            </a>

          </div>

        </div>

        {/* Footer */}

        <div className="grid md:grid-cols-4 gap-10">

          <div>
            <h2 className="text-3xl font-black">
              DEV<span className="text-indigo-400">HUB</span>
            </h2>

            <p className="mt-4 text-gray-400">
              Frontend Developer specializing in React, Tailwind CSS,
              Laravel and WordPress.
            </p>
          </div>

          <div>

            <h3 className="font-bold mb-5">
              Navigation
            </h3>

            <div className="space-y-3">

              <button
                onClick={(e) => scrollTo(e, "hero")}
                className="block text-gray-400 hover:text-white"
              >
                Home
              </button>

              <button
                onClick={(e) => scrollTo(e, "services")}
                className="block text-gray-400 hover:text-white"
              >
                Services
              </button>

              <button
                onClick={(e) => scrollTo(e, "work")}
                className="block text-gray-400 hover:text-white"
              >
                Portfolio
              </button>

              <button
                onClick={(e) => scrollTo(e, "contact")}
                className="block text-gray-400 hover:text-white"
              >
                Contact
              </button>

            </div>

          </div>

          <div>

            <h3 className="font-bold mb-5">
              Services
            </h3>

            <div className="space-y-3 text-gray-400">

              <p>React Development</p>

              <p>Laravel Development</p>

              <p>WordPress Websites</p>

              <p>UI / UX Design</p>

            </div>

          </div>

          <div>

            <h3 className="font-bold mb-5">
              Contact
            </h3>

            <div className="space-y-3">

              <a
                href="mailto:info@devhub.com"
                className="block text-gray-400 hover:text-white"
              >
                info@devhub.com
              </a>

              <a
                href="tel:+919876543210"
                className="block text-indigo-400"
              >
                +91 98765 43210
              </a>

            </div>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-16 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © {new Date().getFullYear()} DEVHUB. All Rights Reserved.
          </p>

          <button
            onClick={(e) => scrollTo(e, "hero")}
            className="mt-4 md:mt-0 text-indigo-400 hover:text-indigo-300"
          >
            Back to Top ↑
          </button>

        </div>

      </div>
    </footer>
  );
}