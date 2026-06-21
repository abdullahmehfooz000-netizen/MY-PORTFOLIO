import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Left Side */}
          <div>

            <h2 className="text-3xl font-bold text-white mb-4">
              CH Abdullah
            </h2>

            <p className="text-gray-400 leading-7">
              Full Stack MERN Developer passionate about building
              scalable and modern web applications with clean UI
              and powerful backend systems.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">

              <a href="#home" className="hover:text-blue-400 duration-300">
                Home
              </a>

              <a href="#about" className="hover:text-blue-400 duration-300">
                About
              </a>

              <a href="#skills" className="hover:text-blue-400 duration-300">
                Skills
              </a>

              <a href="#experience" className="hover:text-blue-400 duration-300">
                Experience
              </a>

              <a href="#projects" className="hover:text-blue-400 duration-300">
                Projects
              </a>

              <a href="#contact" className="hover:text-blue-400 duration-300">
                Contact
              </a>

            </div>

          </div>

          {/* Social Links */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Connect With Me
            </h3>

            <div className="flex gap-5">

              {/* GitHub */}
              <a
                href="https://github.com/abdullahmehfooz000-netizen"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 p-4 rounded-full hover:bg-blue-600 duration-300"
              >
                <FaGithub size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/abdullah-chaudhary-852153275?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 p-4 rounded-full hover:bg-blue-600 duration-300"
              >
                <FaLinkedin size={20} />
              </a>

              {/* Email */}
              <a
                href="mailto:abdullahmehfooz000@gmail.com"
                className="bg-slate-800 p-4 rounded-full hover:bg-blue-600 duration-300"
              >
                <FaEnvelope size={20} />
              </a>

            </div>

            {/* Badge */}
            <div className="mt-8">

              

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800 py-6">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © 2026 CH Abdullah. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed & Developed by Abdullah
          </p>

        </div>

      </div>

    </footer>
  );
}