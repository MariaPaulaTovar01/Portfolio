import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-dark/80 backdrop-blur-md border-b border-neon z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="text-neon text-lg font-bold">Maria Paula Parga</h1>

        <ul className="hidden md:flex gap-6 text-gray-300">
          <li><a href="#hero" className="hover:text-neon transition">Sobre mí</a></li>
          <li><a href="#skills" className="hover:text-neon transition">Habilidades</a></li>
          <li><a href="#projects" className="hover:text-neon transition">Proyectos</a></li>
          <li><a href="#contact" className="hover:text-neon transition">Contacto</a></li>
        </ul>


        <button
          className="md:hidden text-neon text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-dark/95 border-t border-gray-700 py-4">
          <ul className="flex flex-col items-center gap-4 text-gray-300">
            <li><a href="#hero" onClick={() => setMenuOpen(false)} className="hover:text-neon">Sobre mí</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-neon">Habilidades</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-neon">Proyectos</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-neon">Contacto</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
