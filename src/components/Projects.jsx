import aiInventory from "../assets/projects/Ai inventry.png";
import blueraWebsite from "../assets/projects/bluera website.png";
import carRentalWeb from "../assets/projects/car rental web.png";
import couchlyWebsite from "../assets/projects/couchly website.png";
import crmBox from "../assets/projects/crm-box.png";
import digitalMarketingAgency from "../assets/projects/digital marketing agency.png";
import fitnessPortal from "../assets/projects/fitness-portal.png";
import freelanceWebsite from "../assets/projects/Freelance website.png";
import healthPortal from "../assets/projects/health-portal.png";
import jobBoard from "../assets/projects/job-board.png";
import legalVault from "../assets/projects/legal-vault.png";
import lms from "../assets/projects/lms.png";
import realEstate from "../assets/projects/real-estate.png";
import restaurantPos from "../assets/projects/restaurant-pos.png";
import studyAbroad from "../assets/projects/study-abroad.png";

const projects = [
  // ⭐ PREMIUM PROJECTS (TOP)
  {
    title: "FREELANCE MARKETPLACE PLATFORM",
    image: freelanceWebsite,
  },
  {
    title: "CAR RENTAL WEB APPLICATION",
    image: carRentalWeb,
  },
  {
    title: "COUCHLY BOOKING PLATFORM",
    image: couchlyWebsite,
  },

  // 🔥 OTHER FEATURED PROJECTS
  {
    title: "DIGITAL MARKETING AGENCY WEBSITE",
    image: digitalMarketingAgency,
  },
  {
    title: "AI INVENTORY MANAGEMENT SYSTEM",
    image: aiInventory,
  },
  {
    title: "BLUERA CORPORATE WEBSITE",
    image: blueraWebsite,
  },
  {
    title: "SECURE LEGAL & FINANCE VAULT",
    image: legalVault,
  },
  {
    title: "RESTAURANT QR MENU & POS SYSTEM",
    image: restaurantPos,
  },
  {
    title: "STUDY ABROAD PLATFORM",
    image: studyAbroad,
  },
  {
    title: "NICHE COMMUNITY JOB BOARD",
    image: jobBoard,
  },
  {
    title: "FITNESS TRAINER PORTAL",
    image: fitnessPortal,
  },
  {
    title: "HEALTHCARE TELEMEDICINE PORTAL",
    image: healthPortal,
  },
  {
    title: "MULTI-TENANT LMS SYSTEM",
    image: lms,
  },
  {
    title: "REAL ESTATE PROPERTY & TENANT SYSTEM",
    image: realEstate,
  },
  {
    title: "SUBSCRIPTION BOX CRM SYSTEM",
    image: crmBox,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16 uppercase">
          FEATURED PROJECTS
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-slate-900
                rounded-3xl
                overflow-hidden
                border border-slate-800
                hover:border-blue-500
                transition
                duration-300
              "
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold uppercase">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}