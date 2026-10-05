import {
  FaCertificate,
  FaExternalLinkAlt,
  FaDownload,
} from "react-icons/fa";

import devpathCertificate from "../assets/certificates/devpath-mern-certificate.jpg";
import developersHubOffer from "../assets/certificates/developershub-offer-letter.jpeg";
import developersHubCertificate from "../assets/certificates/developershub-internship-certificate.jpeg";

export default function Certificates() {
  const certificates = [
    {
      title: "MERN Stack Development Certificate",
      organization: "DevPath",
      description:
        "Certificate of completion for the Complete MERN Stack Development course covering MongoDB, Express.js, React.js and Node.js.",
      type: "Certificate",
      file: devpathCertificate,
    },

    {
      title: "Full-Stack Development Internship Offer Letter",
      organization: "DevelopersHub Corporation",
      description:
        "Internship offer for Full-Stack Development with DevelopersHub Corporation.",
      type: "Offer Letter",
      file: developersHubOffer,
    },

    {
      title: "Full Stack Development Internship Certificate",
      organization: "DevelopersHub Corporation",
      description:
        "Certificate of successful completion of a 6-Week Internship Program in Full Stack Development.",
      type: "Certificate",
      file: developersHubCertificate,
    },
  ];

  return (
    <section
      id="certificates"
      className="py-32 bg-slate-950 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold mb-4 text-white">
            Certificates & Offer Letters
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications, internship achievements,
            and career documents that showcase my learning and experience.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((item, index) => (

            <div
              key={index}
              className="
                group
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                overflow-hidden
                hover:border-blue-500/60
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              {/* Image Preview */}
              <div className="relative h-64 bg-slate-900 overflow-hidden">

                <img
                  src={item.file}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-500
                  "
                />

                {/* Type Badge */}
                <div className="absolute top-4 left-4">

                  <span
                    className="
                      flex
                      items-center
                      gap-2
                      bg-blue-600
                      text-white
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      font-medium
                    "
                  >
                    <FaCertificate />
                    {item.type}
                  </span>

                </div>

              </div>

              {/* Content */}
              <div className="p-7">

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-blue-400 font-medium mb-4">
                  {item.organization}
                </p>

                <p className="text-gray-400 leading-7 mb-7">
                  {item.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3">

                  {/* View */}
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      flex-1
                      bg-blue-600
                      hover:bg-blue-700
                      text-white
                      px-4
                      py-3
                      rounded-xl
                      transition
                      duration-300
                    "
                  >
                    <FaExternalLinkAlt size={14} />
                    View
                  </a>

                  {/* Download */}
                  <a
                    href={item.file}
                    download
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      flex-1
                      border
                      border-slate-700
                      hover:border-blue-500
                      hover:text-blue-400
                      text-gray-300
                      px-4
                      py-3
                      rounded-xl
                      transition
                      duration-300
                    "
                  >
                    <FaDownload size={14} />
                    Download
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}