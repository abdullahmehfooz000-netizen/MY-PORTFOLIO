import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiCanva,
} from "react-icons/si";

export default function Skills() {
  const frontend = [
    {
      name: "React.js",
      icon: <FaReact className="text-cyan-400 text-4xl" />,
      level: "90%",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 text-4xl" />,
      level: "85%",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-300 text-4xl" />,
      level: "90%",
    },
  ];

  const backend = [
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500 text-4xl" />,
      level: "85%",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-white text-4xl" />,
      level: "80%",
    },
  ];

  const database = [
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-400 text-4xl" />,
      level: "85%",
    },
  ];

  const tools = [
    {
      name: "Git",
      icon: <FaGitAlt className="text-orange-500 text-4xl" />,
      level: "85%",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-white text-4xl" />,
      level: "90%",
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-400 text-4xl" />,
      level: "85%",
    },
    {
      name: "Canva",
      icon: <SiCanva className="text-blue-400 text-4xl" />,
      level: "80%",
    },
  ];

  const SkillCard = ({ title, skills }) => (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:scale-105 duration-300">

      <h3 className="text-2xl font-bold mb-8 text-blue-400 uppercase">
        {title.toUpperCase()}
      </h3>

      <div className="space-y-8">

        {skills.map((skill) => (
          <div key={skill.name}>

            <div className="flex items-center gap-4 mb-3">
              {skill.icon}

              <div className="flex justify-between w-full">
                <span className="uppercase">{skill.name}</span>
                <span className="text-gray-400">
                  {skill.level}
                </span>
              </div>
            </div>

            <div className="w-full bg-slate-800 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: skill.level }}
              ></div>
            </div>

          </div>
        ))}

      </div>

    </div>
  );

  return (
    <section id="skills" className="py-32 bg-slate-950 px-6">
      <div className="max-w-7xl mx-auto">

        {/* MAIN HEADING */}
        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold mb-4 uppercase">
            MY SKILLS
          </h2>

          <p className="text-gray-400">
            Technologies and tools I use to build modern applications.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          <SkillCard title="FRONTEND" skills={frontend} />
          <SkillCard title="BACKEND" skills={backend} />
          <SkillCard title="DATABASE" skills={database} />
          <SkillCard title="TOOLS" skills={tools} />

        </div>

      </div>
    </section>
  );
}