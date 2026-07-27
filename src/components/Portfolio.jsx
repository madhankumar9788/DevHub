import { projects } from "../data/projects";

export default function Portfolio() {
  return (
    <section id="work" className="bg-gray-50 py-24 px-6 md:px-10 scroll-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="inline-block text-indigo-600 text-xs font-bold uppercase tracking-[0.2em] mb-3 bg-indigo-50 px-3 py-1.5 rounded-full">
              Portfolio
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Live Projects
            </h2>
          </div>

          <p className="text-gray-500 max-w-md">
            Production websites developed for colleges, educational institutions,
            and business organizations.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-60">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 px-5 py-2 rounded-full font-semibold shadow-lg hover:bg-indigo-600 hover:text-white transition"
                  >
                    Visit Website ↗
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {project.name}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}