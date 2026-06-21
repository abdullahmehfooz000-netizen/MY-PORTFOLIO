import legalVault from "../assets/projects/legal-vault.png";
import restaurantPos from "../assets/projects/restaurant-pos.png";
import studyAbroad from "../assets/projects/study-abroad.png";
import jobBoard from "../assets/projects/job-board.png";
import fitnessPortal from "../assets/projects/fitness-portal.png";
import healthPortal from "../assets/projects/health-portal.png";
import lms from "../assets/projects/lms.png";
import realEstate from "../assets/projects/real-estate.png";
import crmBox from "../assets/projects/crm-box.png";

const projects = [
  {
    title: "Secure Legal & Finance Vault",
    image: legalVault,
  },
  {
    title: "Restaurant QR Menu & POS System",
    image: restaurantPos,
  },
  {
    title: "Study Abroad Platform",
    image: studyAbroad,
  },
  {
    title: "Niche Community Job Board",
    image: jobBoard,
  },
  {
    title: "Fitness Trainer Portal",
    image: fitnessPortal,
  },
  {
    title: "Healthcare Telemedicine Portal",
    image: healthPortal,
  },
  {
    title: "Multi-Tenant LMS System",
    image: lms,
  },
  {
    title: "Real Estate Property & Tenant",
    image: realEstate,
  },
  {
    title: "Subscription Box CRM",
    image: crmBox,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Featured Projects
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
                <h3 className="text-xl font-semibold">
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