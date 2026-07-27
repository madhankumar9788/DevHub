const techStack = [
  "React 19", "Tailwind CSS", "WordPress", "Next.js",
  "Vite", "Framer Motion", "GSAP", "TypeScript", "JavaScript ES6+", "Figma to Code",
];

export default function Marquee() {
  return (
    <div className="bg-gray-50 border-y border-gray-200 py-5 overflow-hidden">
      <div className="flex gap-10 whitespace-nowrap overflow-hidden select-none">
        {[0, 1].map((i) => (
          <div key={i} className="flex shrink-0 animate-marquee gap-10 items-center">
            {techStack.map((tech) => (
              <span
                key={`${tech}-${i}`}
                className="text-gray-400 text-sm font-semibold tracking-wide uppercase"
              >
                · {tech}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
