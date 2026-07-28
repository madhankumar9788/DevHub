import React from "react";

const icons = {
  react: (
    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="-11.5 -10.23 23 20.46" fill="none" stroke="#00d8ff" strokeWidth="1.5">
      <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
      <g stroke="#00d8ff" strokeWidth="1.5" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  node: (
    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="#339933">
      <path d="M12 2L4.5 6.2v8.5L12 19l7.5-4.3V6.2L12 2zm5.7 12.1L12 17.4l-5.7-3.3V7.9L12 4.6l5.7 3.3v6.2z" />
    </svg>
  ),
  nestjs: (
    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="#ea2849">
      <path d="M12 2l10 5.8v11.5L12 22 2 16.3V5.8L12 2zm0 3.2L5.2 9.1v5.8L12 18.8l6.8-3.9V9.1L12 5.2z" />
    </svg>
  ),
  express: (
    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  nextjs: (
    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="#ffffff">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5l-3.5-5v5H9v-7h1.5l3.5 5v-5h1.5v7H13z" />
    </svg>
  ),
  wordpress: (
    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="#21759b">
      <path d="M12.158 12.786l-2.698 7.84c1.825.565 3.774.58 5.61-.035l-2.912-7.805zm-1.89-4.887c0-.52-.187-.878-.346-1.164-.265-.436-.519-.81-.519-1.25 0-.493.38-.954.912-.954.025 0 .048.006.073.01C7.755 5.566 5.88 7.397 5.093 9.77c.07-.003.14-.006.21-.006.772 0 1.963.093 1.963.093.402.023.45.602.047.625 0 0-.404.032-.855.048l2.71 8.082 1.624-4.872-1.155-3.167c-.394-.016-.768-.048-.768-.048-.402-.023-.356-.602.046-.625 0 0 1.218.093 1.948.093.078 0 .178-.003.284-.007zm3.178 4.296l2.368 6.945c2.316-1.637 3.896-4.225 4.07-7.21l-1.026.046c-.402.016-.62-.323-.62-.625 0-.29.218-.62.62-.625l1.096-.048C21.72 13.905 21.05 16.32 19.8 18.258l-4.354-12.24c.45-.016.855-.048.855-.048.402-.023.356-.602-.047-.625 0 0-1.258.093-2.02.093-.659 0-1.782-.093-1.782-.093-.402-.023-.45.602-.047.625 0 0 .428.032.825.048l3.41 9.539zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18.57c-3.623 0-6.732-2.42-7.737-5.753L9 6.208c.367 1.054.636 2.054.636 2.923 0 1.053-.524 1.782-.968 2.532l3.46 10.375c.024-.002.048-.008.072-.01z" />
    </svg>
  ),
  shopify: (
    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="#96bf48">
      <path d="M19 6.5h-3v-1c0-1.38-1.12-2.5-2.5-2.5h-3C9.12 3 8 4.12 8 5.5v1H5c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-11c0-1.1-.9-2-2-2zM9.5 5.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v1h-4v-1zm4.5 8c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" />
    </svg>
  ),
  html: (
    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="#e34f26">
      <path d="M1.5 0h21l-1.91 21.63L12 24l-8.59-2.37L1.5 0Zm14.28 7.37H7.76l.16 1.77h8.18l-.29 3.23-3.81 1.05-3.81-1.05-.26-2.92H6.31l.43 4.8 5.26 1.46 5.26-1.46.56-6.18h-.04Z" />
    </svg>
  ),
  css: (
    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="#1572b6">
      <path d="M1.5 0h21l-1.91 21.63L12 24l-8.59-2.37L1.5 0Zm17.08 3.55h-13.3l.16 1.77h12.98l-.13 1.48H5.21l.16 1.77h12.78l-.34 3.78-5.81 1.61-5.81-1.61-.39-4.26h-1.62l.53 5.76 7.29 2.02 7.29-2.02.66-7.29H5.53l-.16-1.77h13.38l-.16-1.77Z" />
    </svg>
  ),
  javascript: (
    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="#f7df1e">
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <path d="M12 18c0 1.1-.9 2-2 2H6v-3h4v1H8v-1H6v-3h6v4zm8-6h-3v8h-3v-8h-2V9h7v3z" fill="#000000" />
    </svg>
  ),
  typescript: (
    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="#3178c6">
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <path d="M8.5 8.5v1h-2v6h-1.5v-6h-2v-1h5.5zm4.5 3c0 1.1-.9 2-2 2h-1.5v2.5h-1.5V8.5H11c1.1 0 2 .9 2 2v1zm-3.5-.5h2v-1h-2v1z" fill="#ffffff" />
    </svg>
  ),
  redux: (
    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  tailwind: (
    <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="#38bdf8">
      <path d="M12 6.086c-2.316-2.316-6.07-2.316-8.386 0-2.316 2.316-2.316 6.07 0 8.386l8.386 8.386 8.386-8.386c2.316-2.316 2.316-6.07 0-8.386-2.316-2.316-6.07-2.316-8.386 0z" />
    </svg>
  ),
};

const rowA = [
  { icon: 'react', name: 'React' },
  { icon: 'node', name: 'Node.js' },
  { icon: 'nestjs', name: 'NestJS' },
  { icon: 'express', name: 'ExpressJS' },
  { icon: 'nextjs', name: 'NextJS' },
  { icon: 'wordpress', name: 'WordPress' },
  { icon: 'shopify', name: 'Shopify' },
];

const rowB = [
  { icon: 'html', name: 'HTML5' },
  { icon: 'css', name: 'CSS3' },
  { icon: 'javascript', name: 'JavaScript' },
  { icon: 'typescript', name: 'TypeScript' },
  { icon: 'redux', name: 'Redux' },
  { icon: 'tailwind', name: 'Tailwind' },
  { icon: 'wordpress', name: 'WordPress' }
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden bg-white py-20 border-y border-gray-200">

      {/* Background Glow */}
      <div className="absolute -top-32 left-0 w-[500px] h-[500px] bg-indigo-400 rounded-full blur-[160px] opacity-20 pointer-events-none" />

      <div className="absolute -bottom-32 right-0 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[160px] opacity-20 pointer-events-none" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:60px_60px] opacity-50" />

      <div className="relative z-10 flex flex-col items-center gap-12">

        {/* Header */}
        <div className="text-center px-6">

          <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
            Core Technologies
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-gray-900">
            Powering Modern Web Products
          </h2>

          <p className="mt-4 max-w-2xl text-gray-500 text-lg leading-8">
            Modern technologies used to build scalable websites,
            enterprise portals, SaaS platforms, and high-performance
            digital products.
          </p>

        </div>

        {/* Marquee */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >

          {/* Row 1 */}
          <div className="group overflow-hidden">

            <div className="flex gap-6 pt-5 animate-marquee group-hover:[animation-play-state:paused]">

              {[...rowA, ...rowA].map((item, index) => (

                <div
                  key={index}
                  className="
              flex items-center gap-3
              rounded-2xl
              border border-gray-100
              bg-white
              px-6 py-4
              
              transition-all duration-300
              hover:-translate-y-1
              hover:border-indigo-300
              
              hover:shadow-indigo-100
              "
                >
                  <div className="text-2xl text-indigo-600">
                    {icons[item.icon]}
                  </div>

                  <span className="font-semibold text-gray-700">
                    {item.name}
                  </span>
                </div>

              ))}

            </div>

          </div>

          {/* Row 2 */}
          <div className="group overflow-hidden mt-6">

            <div className="flex gap-6 pt-5 animate-marquee-reverse group-hover:[animation-play-state:paused]">

              {[...rowB, ...rowB].map((item, index) => (

                <div
                  key={index}
                  className="
              flex items-center gap-3
              rounded-2xl
              border border-gray-100
              bg-white
              px-6 py-4
              
              transition-all duration-300
              hover:-translate-y-1
              hover:border-cyan-300
              
              hover:shadow-cyan-100
              "
                >
                  <div className="text-2xl text-cyan-600">
                    {icons[item.icon]}
                  </div>

                  <span className="font-semibold text-gray-700">
                    {item.name}
                  </span>
                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
