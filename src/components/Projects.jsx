import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Dashboard Herencia Verde",
    desc: "Dashboard interactivo con visualización de datos y métricas clave. Desarrollado con Bootstrap, TypeScript y APIs REST.",
    tech: ["TypeScript", "Bootstrap", "API REST"],
    link: "https://github.com/MariaPaulaTovar01/Proyecto-Herencia-Verde",
    color: "#8B5EEA",
  },
  {
    title: "Página Web Negocio Manila's Restaurant",
    desc: "Sitio web adaptable enfocado en presencia digital y branding, con integración a servicios externos.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/MariaPaulaTovar01/ProyectoManila",
    color: "#00FFFF",
  },
  {
    title: "Reestructuración Web Empresarial",
    desc: "Optimización del sitio de Software Colombia. Mejoras en rendimiento, diseño y estructura de componentes.",
    tech: ["Angular", "TypeScript", "UI/UX"],
    link: "https://github.com/MariaPaulaTovar01/Proyecto_SC",
    color: "#5188E6",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-screen flex flex-col items-center justify-center text-center bg-dark text-white px-6"
    >
      {/* Título */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-neon mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Proyectos Destacados
      </motion.h2>

      {/* Tarjetas */}
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotate: 0.5,
              boxShadow: `0 0 25px ${p.color}`,
            }}
            className="relative group rounded-2xl border border-gray-700 overflow-hidden 
                       bg-gradient-to-b from-gray-900/70 to-gray-800/40 
                       backdrop-blur-md shadow-lg hover:shadow-[0_0_35px_rgba(0,255,255,0.3)]
                       transition-all duration-500 cursor-pointer"
          >
            {/* Fondo animado interno */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${p.color}33, transparent 70%)`,
              }}
            />

            {/* Overlay con gradiente animado */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition duration-700" />

            {/* Contenido */}
            <div className="relative z-10 p-6 flex flex-col justify-between h-full text-left">
              <div>
                <h3
                  className="text-2xl font-bold mb-3 transition-colors duration-300"
                  style={{ color: p.color }}
                >
                  {p.title}
                </h3>

                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs bg-gray-800/60 text-gray-300 px-3 py-1 rounded-full 
                                 border border-gray-700 group-hover:border-cyan-300 transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Botón */}
              <motion.a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.1,
                  textShadow: `0 0 10px ${p.color}`,
                }}
                className="mt-auto inline-flex items-center gap-2 justify-center 
                           border border-cyan-400 text-cyan-300 
                           px-4 py-2 rounded-md font-medium hover:bg-cyan-400/20 
                           hover:text-white transition-all duration-300"
              >
                <FaGithub /> Ver en GitHub
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
