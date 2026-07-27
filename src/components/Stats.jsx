import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

function useCountUp(end, duration, active) {
  const [count, setCount] = useState(0);
  const frame = useRef(null);

  useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) frame.current = requestAnimationFrame(step);
      else setCount(end);
    };
    frame.current = requestAnimationFrame(step);
    return () => frame.current && cancelAnimationFrame(frame.current);
  }, [active, end, duration]);

  return count;
}

function Stat({ value, suffix, label, active }) {
  const count = useCountUp(value, 2, active);
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl font-black text-indigo-600">
        {count}{suffix}
      </div>
      <div className="text-gray-500 text-sm font-semibold uppercase tracking-wider mt-2">
        {label}
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-7 border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 group">
      <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function PuzzleIcon(props) {
  return <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a2 2 0 002 2h1a2 2 0 110 4h-1a2 2 0 00-2 2v1a2 2 0 11-4 0v-1a2 2 0 00-2-2H8a2 2 0 110-4h1a2 2 0 002-2V4z" /></svg>;
}
function HeadphonesIcon(props) {
  return <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 00-14 0m0 0v6a2 2 0 002 2h1a2 2 0 002-2v-4a2 2 0 00-2-2H5zm14 0v6a2 2 0 01-2 2h-1a2 2 0 01-2-2v-4a2 2 0 012-2h2z" /></svg>;
}
function ShieldIcon(props) {
  return <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
}
function ZapIcon(props) {
  return <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
}
function CoinsIcon(props) {
  return <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}
function ClockIcon(props) {
  return <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}

const features = [
  { icon: PuzzleIcon, title: "Team Extension", description: "Seamlessly integrate into your operations without the overhead of full-time hiring." },
  { icon: HeadphonesIcon, title: "Affordable Rates", description: "Expert frontend development at freelance pricing — transparent, no hidden fees." },
  { icon: ShieldIcon, title: "Reliable Partner", description: "Long-term commitment to code quality, maintenance, and your project's success." },
  { icon: ZapIcon, title: "Fast Delivery", description: "Agile workflow delivering production-ready designs ahead of schedule." },
  { icon: CoinsIcon, title: "Flexible Plans", description: "Pricing that adapts to your project scope, whether a page or a full portal." },
  { icon: ClockIcon, title: "Tight Deadlines", description: "Rapid turnaround for admission launches, business events, and urgent campaigns." },
];

const stats = [
  { value: 11, suffix: "+", label: "Projects Live" },
  { value: 100, suffix: "%", label: "Responsive" },
  { value: 60, suffix: "+", label: "Pages Built" },
  { value: 2, suffix: "+", label: "Years Exp." },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="about" ref={ref} className="bg-gray-50 py-24 px-6 md:px-10 scroll-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-indigo-600 text-xs font-bold uppercase tracking-[0.2em] mb-3 bg-indigo-50 px-3 py-1.5 rounded-full">
            Why Hire Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            What Sets Me Apart
          </h2>
          <p className="text-gray-500 mt-3 text-base leading-relaxed">
            A reliable freelance developer who delivers pixel-perfect, high-performance websites for schools, businesses, and startups.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <Stat key={s.label} {...s} active={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}