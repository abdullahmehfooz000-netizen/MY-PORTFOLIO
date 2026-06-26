import profile from "../assets/profile.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 relative overflow-hidden flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/20 blur-[120px] md:blur-[150px] rounded-full top-10 left-10"></div>

      <div className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-cyan-500/20 blur-[120px] md:blur-[150px] rounded-full bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
        >
          {/* MAIN HEADINGS (CAPITAL) */}
          <p className="text-blue-400 mb-2 md:mb-3 text-base md:text-lg uppercase tracking-wider">
            HELLO, I'M
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 uppercase">
            CH ABDULLAH
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 md:mb-8 uppercase">
            <TypeAnimation
              sequence={[
                "FULL STACK DEVELOPER",
                2000,
                "MERN STACK DEVELOPER",
                2000,
                "REACT DEVELOPER",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 leading-6 md:leading-8 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base">
            Software Engineer passionate about building modern,
            scalable and high-performance web applications using
            React, Node.js, Express and MongoDB.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 md:mt-10 justify-center lg:justify-start">

            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 duration-300 px-6 py-3 md:px-7 md:py-4 rounded-2xl font-medium text-center uppercase"
            >
              HIRE ME
            </a>

            <a
              href="/Abdullahch.resume.pdf"
              download
              className="border border-slate-700 hover:border-blue-500 duration-300 px-6 py-3 md:px-7 md:py-4 rounded-2xl flex items-center justify-center gap-3 uppercase"
            >
              <FaDownload />
              DOWNLOAD CV
            </a>

          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 md:gap-5 mt-8 md:mt-10 justify-center lg:justify-start">

            <a
              href="https://github.com/abdullahmehfooz000-netizen"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 p-3 md:p-4 rounded-full hover:bg-blue-600 duration-300"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 p-3 md:p-4 rounded-full hover:bg-blue-600 duration-300"
            >
              <FaLinkedin size={20} />
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Glow Ring */}
            <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full"></div>

            <img
              src={profile}
              alt="ABDUALLH"
              className="
                relative
                w-[220px]
                h-[220px]
                sm:w-[280px]
                sm:h-[280px]
                md:w-[380px]
                md:h-[380px]
                lg:w-[450px]
                lg:h-[450px]
                object-cover
                rounded-full
                border-4
                border-blue-500
                shadow-2xl
              "
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}