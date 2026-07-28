import React from "react";
import { BookOpen, ShoppingCart, Rocket, ArrowUpRight, Star } from "lucide-react";

const productsList = [
  {
    icon: BookOpen,
    tag: "React 19 & Tailwind",
    title: "EduSphere LMS Portal Layout",
    description: "Complete student learning dashboard template with admissions modules, online exams, and responsive grade sheets.",
    price: "₹4,999",
    rating: "4.9",
    reviews: "54 reviews",
    badge: "Bestseller",
    color: "indigo"
  },
  {
    icon: ShoppingCart,
    tag: "Next.js & Stripe Ready",
    title: "SwiftStore Headless Storefront",
    description: "Super fast headless e-commerce store template with dynamic catalog lists, sliding cart drawers, and checkouts.",
    price: "₹6,499",
    rating: "4.8",
    reviews: "38 reviews",
    badge: "Popular",
    color: "cyan"
  },
  {
    icon: Rocket,
    tag: "Vite + Auth Boilerplate",
    title: "SaaS Launchpad Boilerplate",
    description: "Fully featured SaaS template containing authentication layouts, Stripe pricing grids, and custom settings forms.",
    price: "₹7,999",
    rating: "5.0",
    reviews: "72 reviews",
    badge: "Hot Release",
    color: "amber"
  }
];

export default function Products() {
  return (
    <section id="products" className="bg-gray-50 py-24 px-6 md:px-10 scroll-section border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block text-indigo-600 text-xs font-bold uppercase tracking-[0.25em] mb-3 bg-indigo-50 px-3 py-1.5 rounded-full">
              Digital Products
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight max-w-lg">
              Ready-Made Digital Assets
            </h2>
          </div>
          <p className="text-gray-500 text-base max-w-sm leading-relaxed">
            Boost your development with pre-built, pixel-perfect templates and developer boilerplate components.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productsList.map((p, idx) => {
            const Icon = p.icon;
            
            // Glassy theme classes based on color config
            const bgClasses = p.color === "cyan" 
              ? "bg-cyan-50/55 border-cyan-100/40 text-cyan-600" 
              : p.color === "amber" 
              ? "bg-amber-50/55 border-amber-100/40 text-amber-600"
              : "bg-indigo-50/55 border-indigo-100/40 text-indigo-600";

            return (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Product Status Badge */}
                {p.badge && (
                  <div className="absolute top-6 right-6 bg-slate-900 text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm z-10">
                    {p.badge}
                  </div>
                )}

                <div>
                  {/* Glassy Theme Icon Box */}
                  <div className={`w-12 h-12 rounded-xl backdrop-blur-md flex items-center justify-center mb-6 shadow-sm border ${bgClasses}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-2">
                    {p.tag}
                  </span>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
                    {p.description}
                  </p>
                </div>

                <div>
                  {/* Rating / Review bar */}
                  <div className="flex items-center gap-1 mb-6 text-sm">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-gray-800">{p.rating}</span>
                    <span className="text-gray-400 text-xs">({p.reviews})</span>
                  </div>

                  {/* Pricing and Action row */}
                  <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block">Single License</span>
                      <span className="text-2xl font-black text-gray-900">{p.price}</span>
                    </div>
                    <button className="flex items-center gap-1.5 px-4 py-2.5 bg-slate-950 hover:bg-slate-800 text-white text-[11px] font-bold uppercase tracking-wider rounded-xl transition-all duration-300 hover:scale-105 shadow-sm">
                      Get License
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
