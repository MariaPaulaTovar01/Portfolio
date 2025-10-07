import { FaGithub, FaLinkedin, FaInstagram  } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";


export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gray-700 py-6 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://www.facebook.com/mariapaula.pargatovar.1"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-neon text-2xl transition"
        >
          <IoLogoFacebook />
        </a>
                <a
          href="https://www.instagram.com/_is.pauu09"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-neon text-2xl transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/MariaPaulaTovar01"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-neon text-2xl transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/maria-paula-parga-tovar-69324834a"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-neon text-2xl transition"
        >
          <FaLinkedin />
        </a>
      </div>

      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} <span className="text-neon">María Paula Parga Tovar</span> ·
        Desarrolladora Web · La Dorada, Caldas 🇨🇴
      </p>

      <p className="text-gray-600 text-xs mt-2">
        Construido con <span className="text-neon">React + TailwindCSS</span>
      </p>
    </footer>
  );
}
