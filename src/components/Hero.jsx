import profile from "../assets/profile.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 relative overflow-hidden flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full top-10 left-10"></div>

      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-[150px] rounded-full bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-blue-400 mb-3 text-lg">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            CH Abdullah
          </h1>

          <div className="text-2xl md:text-3xl text-gray-300 mb-8">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "MERN Stack Developer",
                2000,
                "React Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 leading-8 max-w-xl">
            Software Engineer passionate about building modern,
            scalable and high-performance web applications using
            React, Node.js, Express and MongoDB.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 duration-300 px-7 py-4 rounded-2xl font-medium"
            >
              Hire Me
            </a>

            <a
              href="/Abdullahch.resume.pdf"
              download
              className="border border-slate-700 hover:border-blue-500 duration-300 px-7 py-4 rounded-2xl flex items-center gap-3"
            >
              <FaDownload />
              Download CV
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-10">

            <a
              href="https://github.com/abdullahmehfooz000-netizen"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 p-4 rounded-full hover:bg-blue-600 duration-300"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-800 p-4 rounded-full hover:bg-blue-600 duration-300"
            >
              <FaLinkedin size={22} />
            </a>

          </div>
        </motion.div>

        {/* Right Side */}
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
              alt="Abdullah"
              className="
                relative
                w-[320px]
                h-[320px]
                md:w-[450px]
                md:h-[450px]
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