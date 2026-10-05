import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "certificates",
  "contact",
];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-white uppercase">
          <span className="text-blue-500">CH</span> ABDULLAH
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="text-blue-500"
                className="cursor-pointer text-gray-300 hover:text-blue-400 duration-300 uppercase"
              >
                {link}
              </Link>
            </li>
          ))}

          <a
            href="/Abdullahch.resume.pdf"
            download="CH-Abdullah-Resume.pdf"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl duration-300 uppercase"
          >
            <FaDownload />
            RESUME
          </a>

        </ul>

        {/* MOBILE ICON */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          <div className="flex flex-col items-center py-8 gap-8">

            {navLinks.map((link) => (
              <Link
                key={link}
                to={link}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer text-gray-300 hover:text-blue-500 duration-300 uppercase"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </Link>
            ))}

            <a
              href="/Abdullahch.resume.pdf"
              download="CH-Abdullah-Resume.pdf"
              className="flex items-center gap-2 bg-blue-600 px-5 py-3 rounded-xl uppercase"
            >
              <FaDownload />
              RESUME
            </a>

          </div>

        </div>
      )}

    </nav>
  );
}