import { motion } from "framer-motion";
import {
  FaJava, FaPython, FaJs, FaDatabase, FaGithub, FaHtml5, FaCss3Alt,
} from "react-icons/fa";
import {
  SiTypescript, SiAngular, SiMongodb, SiMysql, SiPostgresql,
} from "react-icons/si";
import { DiModernizr, DiVisualstudio } from "react-icons/di";

const skills = [
  { name: "Java", color: "#E11F21", icon: <FaJava /> },
  { name: "Python", color: "#3776AB", icon: <FaPython /> },
  { name: "JavaScript", color: "#F7E018", icon: <FaJs /> },
  { name: "TypeScript", color: "#3178C6", icon: <SiTypescript /> },
  { name: "Angular", color: "#C3002F", icon: <SiAngular /> },
  { name: "MongoDB", color: "#4DB33D", icon: <SiMongodb /> },
  { name: "MySQL", color: "#00758F", icon: <SiMysql /> },
  { name: "PostgreSQL", color: "#336791", icon: <SiPostgresql /> },
  { name: "Power BI", color: "#F2C811", icon: <DiModernizr /> },
  { name: "GitHub", color: "#FFFFFF", icon: <FaGithub /> },
  { name: "HTML5", color: "#E34F26", icon: <FaHtml5 /> },
  { name: "CSS3", color: "#1572B6", icon: <FaCss3Alt /> },
  { name: "SQL", color: "#00FFFF", icon: <FaDatabase /> },
  { name: "VisualStudio Code", color: "#FFFFFF", icon: <DiVisualstudio /> },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-screen flex flex-col justify-center items-center bg-dark text-white px-4"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-neon mb-12">
        Habilidades Técnicas
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto px-6">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.08,
              rotate: 1,
              boxShadow: `0 0 25px ${skill.color}`,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center justify-center p-6 rounded-2xl 
                       bg-gradient-to-b from-gray-900/80 to-gray-800/50 
                       backdrop-blur-md border border-cyan-400/30 
                       hover:border-cyan-300/60 text-center group overflow-hidden shadow-lg
                       hover:cursor-pointer transition-all duration-500"
          >
            {/* Glow dinámico al hover */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-emerald-500/20 
                         opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"
            ></div>

            {/* Contenido principal */}
            <div className="relative z-10 flex flex-col items-center">
              <div
                style={{ color: skill.color }}
                className="text-6xl mb-3 drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]"
              >
                {skill.icon}
              </div>
              <p className="text-gray-200 font-semibold text-sm sm:text-base">
                {skill.name}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
