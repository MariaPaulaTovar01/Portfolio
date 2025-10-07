import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_k5fmn4g", // Service ID
        "template_yamsfhh", // Template ID
        form.current,
        "z-2u32_4C4CYN_Pa7" // Public Key
      )
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          form.current.reset();
          setTimeout(() => setStatus(null), 3000);
        },
        (error) => {
          console.error("Error:", error.text);
          setStatus("error");
          setLoading(false);
          setTimeout(() => setStatus(null), 3000);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="min-h-screen flex flex-col justify-center items-center text-center bg-dark text-white px-6"
    >
      {/* TÍTULO */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-neon mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contáctame
      </motion.h2>

      <motion.p
        className="text-gray-400 max-w-xl mx-auto mb-12 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        ¿Tienes una idea, proyecto o propuesta?  
        Escríbeme y estaré encantada de responderte.
      </motion.p>

      {/* CONTENEDOR PRINCIPAL */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 items-start w-full">
        
        {/* INFORMACIÓN */}
        <motion.div
          className="relative flex flex-col gap-6 text-left p-8 rounded-2xl border border-cyan-400/20 
                     bg-gradient-to-b from-gray-900/70 to-gray-800/40 backdrop-blur-lg
                     shadow-lg transition-all duration-500 hover:shadow-cyan-400/20 hover:border-cyan-400/50"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Glow interno */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-emerald-500/10 opacity-0 hover:opacity-100 blur-2xl transition-all duration-700" />

          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-cyan-300 mb-4">Información</h3>
            <p className="text-gray-300 flex items-center gap-3">
              <FaEnvelope className="text-cyan-400 text-lg" /> mppt0919@gmail.com
            </p>
            <p className="text-gray-300 flex items-center gap-3">
              <FaPhoneAlt className="text-cyan-400 text-lg" /> +57 300 766 2303
            </p>
            <p className="text-gray-300 flex items-center gap-3">
              <FaMapMarkerAlt className="text-cyan-400 text-lg" /> La Dorada, Caldas, Colombia 🇨🇴
            </p>
          </div>
        </motion.div>

        {/* FORMULARIO */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="relative flex flex-col gap-4 p-8 rounded-2xl border border-cyan-400/20 
                     bg-gradient-to-b from-gray-900/70 to-gray-800/40 backdrop-blur-lg shadow-lg 
                     transition-all duration-500 hover:shadow-cyan-400/20 hover:border-cyan-400/50"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Glow interno */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-emerald-500/10 opacity-0 hover:opacity-100 blur-2xl transition-all duration-700" />

          <div className="relative z-10">
            <input
              type="text"
              name="user_name"
              placeholder="Tu nombre"
              required
              className="w-full bg-gray-900/60 border border-gray-700 rounded-md px-4 py-2 
                         text-gray-200 placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Tu correo"
              required
              className="w-full bg-gray-900/60 border border-gray-700 rounded-md px-4 py-2 
                         text-gray-200 placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition"
            />
            <textarea
              name="message"
              placeholder="Tu mensaje..."
              rows="5"
              required
              className="w-full bg-gray-900/60 border border-gray-700 rounded-md px-4 py-2 
                         text-gray-200 placeholder-gray-500 focus:border-cyan-400 focus:outline-none transition resize-none"
            ></textarea>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00FFFF" }}
              transition={{ type: "spring", stiffness: 250 }}
              disabled={loading}
              className={`mt-4 w-full border border-cyan-400 text-cyan-300 px-6 py-2 rounded-md font-semibold 
                         hover:bg-cyan-400/20 hover:text-white transition-all duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Enviando..." : "Enviar mensaje"}
            </motion.button>
          </div>
        </motion.form>
      </div>

      {/* POPUP DE ESTADO */}
      <AnimatePresence>
        {status && (
          <motion.div
            className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-4 rounded-lg 
                        shadow-lg backdrop-blur-md ${
              status === "success" ? "bg-green-600/80" : "bg-red-600/80"
            } text-white flex items-center gap-3`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
          >
            {status === "success" ? (
              <>
                <FaCheckCircle className="text-white text-xl" />
                <p>¡Mensaje enviado correctamente!</p>
              </>
            ) : (
              <>
                <FaTimesCircle className="text-white text-xl" />
                <p>Error al enviar el mensaje. Intenta nuevamente.</p>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
