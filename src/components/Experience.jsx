import { motion } from "framer-motion";
import { FaBriefcase, FaCertificate } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      role: "MERN Stack Developer",
      company: "Aztrosys IT & Solutions",
      duration: "Oct 2025 - Dec 2025",
      responsibilities: [
        "Developed and maintained MERN stack applications.",
        "Built responsive UI components using React.js.",
        "Created backend APIs with Node.js and Express.",
        "Worked with MongoDB databases and optimized performance.",
      ],
    },

    {
      role: "Freelance Full Stack Developer",
      company: "Self Employed",
      duration: "2022 - Present",
      responsibilities: [
        "Built custom MERN stack applications.",
        "Worked with clients to deliver scalable solutions.",
        "Designed and deployed complete web applications.",
      ],
    },

    {
      role: "WordPress Developer",
      company: "Freelance / Personal Projects",
      duration: "2024 - Present",
      responsibilities: [
        "Created and customized WordPress websites.",
        "Optimized website performance.",
        "Delivered professional client solutions.",
      ],
    },
  ];

  const certifications = [
    {
      title: "Full Stack Development (MERN)",
      institute: "Dev Path Institute Lahore",
      duration: "3 Months - 2025",
    },

    {
      title: "Laravel PHP Course",
      institute: "Ibadat International University",
      duration: "3 Months - 2025",
    },
  ];

  return (
    <section id="experience" className="py-32 bg-slate-950 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">
            Experience & Certifications
          </h2>

          <p className="text-gray-400">
            My professional journey and continuous learning path.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* EXPERIENCE */}
          <div>

            <h3 className="text-3xl font-bold mb-10 text-blue-400">
              Experience
            </h3>

            <div className="relative border-l-2 border-blue-500 pl-8 space-y-12">

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative"
                >
                  {/* Circle */}
                  <div className="absolute -left-[42px] top-1 bg-blue-500 p-3 rounded-full">
                    <FaBriefcase />
                  </div>

                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">

                    <h4 className="text-2xl font-bold">
                      {exp.role}
                    </h4>

                    <p className="text-blue-400 mt-2">
                      {exp.company}
                    </p>

                    <p className="text-gray-500 text-sm mt-2 mb-6">
                      {exp.duration}
                    </p>

                    <ul className="space-y-3 text-gray-300">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i}>
                          • {item}
                        </li>
                      ))}
                    </ul>

                  </div>
                </motion.div>
              ))}

            </div>

          </div>

          {/* CERTIFICATIONS */}
          <div>

            <h3 className="text-3xl font-bold mb-10 text-blue-400">
              Certifications
            </h3>

            <div className="space-y-8">

              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:scale-105 duration-300"
                >
                  <div className="flex items-center gap-4 mb-5">

                    <div className="bg-blue-600 p-4 rounded-full">
                      <FaCertificate />
                    </div>

                    <div>
                      <h4 className="text-xl font-bold">
                        {cert.title}
                      </h4>

                      <p className="text-gray-400">
                        {cert.institute}
                      </p>
                    </div>

                  </div>

                  <p className="text-gray-500">
                    {cert.duration}
                  </p>

                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}