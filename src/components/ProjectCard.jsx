import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500 transition-all duration-300 group flex flex-col justify-between shadow-lg shadow-black/50"
    >
      <div>
        <div className="overflow-hidden relative h-48 bg-gray-950">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentNode.classList.add("bg-gradient-to-br", "from-cyan-950", "to-purple-950");
            }}
          />
        </div>
        <div className="p-5">
          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            {project.description}
          </p>
          <div className="flex gap-2 mt-4 flex-wrap">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs bg-gray-800 text-cyan-400 px-2.5 py-1 rounded-full font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5 pt-0">
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 hover:text-cyan-300 hover:underline transition-colors mt-2"
        >
          Visit Website <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </motion.div>
  );
}