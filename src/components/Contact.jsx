import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaDownload,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-slate-950 px-6">
      <div className="max-w-6xl mx-auto">

        {/* MAIN HEADING */}
        <h2 className="text-5xl font-bold text-center mb-4 text-white uppercase">
          GET IN TOUCH
        </h2>

        <p className="text-gray-400 text-center mb-16">
          Let's build something amazing together.
        </p>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <div>

              <h3 className="text-3xl font-bold mb-8 text-white uppercase">
                CONTACT INFORMATION
              </h3>

              <div className="space-y-6">

                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-blue-500 text-xl" />
                  <span className="text-gray-300">
                    abdullahmehfooz000@gmail.com
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-green-500 text-xl" />
                  <span className="text-gray-300">
                    +92 300 1586915
                  </span>
                </div>

              </div>

              {/* SOCIAL ICONS */}
              <div className="flex gap-6 mt-10">

                <a
                  href="https://github.com/abdullahmehfooz000-netizen"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-800 p-4 rounded-full hover:bg-blue-600 duration-300"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/abdullah-chaudhary-852153275?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-800 p-4 rounded-full hover:bg-blue-600 duration-300"
                >
                  <FaLinkedin size={22} />
                </a>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col justify-center">

              <div className="bg-slate-900 rounded-3xl p-8 border border-slate-700">

                <h3 className="text-2xl font-bold mb-6 text-white uppercase">
                  RESUME
                </h3>

                <p className="text-gray-400 mb-8">
                  Download my latest resume and explore my experience,
                  skills, and projects.
                </p>

                <a
                  href="/Abdullahch.resume.pdf"
                  download="CH-Abdullah-Resume.pdf"
                  className="inline-flex items-center gap-3 bg-blue-600 px-6 py-4 rounded-xl hover:bg-blue-700 duration-300 text-white font-medium uppercase"
                >
                  <FaDownload />
                  DOWNLOAD RESUME
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}