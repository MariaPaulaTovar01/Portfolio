import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col items-center justify-center text-center min-h-screen bg-dark text-white px-4 sm:px-8 pt-24"
    >
      {/* Imagen con halo degradado */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full mb-8">
        {/* Halo animado */}
       <div className="absolute inset-0 rounded-full blur-2xl animate-rotate-gradient"></div>
        {/* Imagen principal */}
        <img
          src="/Portafolio.png"
          alt="Foto de Maria Paula Parga"
          className="relative z-10 w-full h-full object-cover rounded-full border-[3px] border-transparent shadow-[0_0_25px_rgba(0,255,255,0.3)]"
        />
      </div>

      {/* Nombre */}
      <motion.h1
        className="text-3xl sm:text-5xl font-bold mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Maria Paula Parga Tovar
      </motion.h1>

      {/* Subtítulo */}
      <motion.h2
        className="text-lg sm:text-2xl text-neon mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Desarrolladora Web | Ingeniera Informática
      </motion.h2>

      {/* Descripción */}
      <motion.p
        className="max-w-2xl text-gray-400 mb-10 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Apasionada por el desarrollo frontend y el diseño de interfaces modernas.  
        Me gusta construir experiencias digitales que combinan funcionalidad, diseño y tecnología.
      </motion.p>

      {/* Botón */}
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00FFFF" }}
        transition={{ type: "spring", stiffness: 250 }}
        className="border border-neon text-neon px-6 py-3 rounded-md hover:bg-neon hover:text-dark transition font-semibold"
      >
        Ver mis proyectos
      </motion.a>
    </motion.section>
  );
}
