import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 bg-slate-950 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold mb-4 uppercase">
            ABOUT ME
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, education,
            experience, and passion for software development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

              <h3 className="text-3xl font-bold mb-8 text-blue-400 uppercase">
                WHO AM I?
              </h3>

              <p className="text-gray-300 leading-9 mb-6">
                I'm <span className="font-semibold text-white">CH Abdullah</span>,
                a Full Stack MERN Developer and Software Engineering graduate
                passionate about building modern and scalable web applications.
              </p>

              <p className="text-gray-300 leading-9 mb-6">
                I specialize in React.js, Node.js, Express.js, MongoDB,
                and Tailwind CSS to create responsive and user-friendly
                digital experiences.
              </p>

              <p className="text-gray-300 leading-9">
                I enjoy solving problems, learning new technologies,
                and transforming ideas into real-world applications.
              </p>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* STATS */}
            <div className="grid grid-cols-2 gap-6 mb-8">

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:scale-105 duration-300">
                <h2 className="text-4xl font-bold text-blue-400">
                  10+
                </h2>
                <p className="text-gray-400 mt-2 uppercase">
                  PROJECTS COMPLETED
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:scale-105 duration-300">
                <h2 className="text-4xl font-bold text-blue-400">
                  MERN
                </h2>
                <p className="text-gray-400 mt-2 uppercase">
                  STACK SPECIALIST
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:scale-105 duration-300">
                <h2 className="text-4xl font-bold text-blue-400">
                  REACT
                </h2>
                <p className="text-gray-400 mt-2 uppercase">
                  FRONTEND DEVELOPMENT
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center hover:scale-105 duration-300">
                <h2 className="text-4xl font-bold text-blue-400">
                  MONGODB
                </h2>
                <p className="text-gray-400 mt-2 uppercase">
                  DATABASE MANAGEMENT
                </p>
              </div>

            </div>

            {/* EDUCATION */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

              <h3 className="text-3xl font-bold mb-8 text-blue-400 uppercase">
                EDUCATION
              </h3>

              <div className="space-y-8">

                <div>
                  <h4 className="text-xl font-semibold uppercase">
                    BS SOFTWARE ENGINEERING
                  </h4>

                  <p className="text-gray-400 mt-2">
                    Ibadat International University, Islamabad
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    2021 – 2025
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold uppercase">
                    FSC PRE-ENGINEERING
                  </h4>

                  <p className="text-gray-400 mt-2">
                    National College
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    2019 – 2021
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}