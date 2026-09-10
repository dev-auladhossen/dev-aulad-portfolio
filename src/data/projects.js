import projectTrackingThumb from "../assets/projects/project-tracking-system.jpg";
import inventoryThumb from "../assets/projects/inventory-management-tool.jpg";
import passwordGenThumb from "../assets/projects/password-generator.jpg";

export const projects = [
  {
    title: "Project Tracking System",
    year: 2023,
    madeAt: "Personal Project",
    description:
      "A cloud-based system to facilitate software project tracking and team collaboration — task boards, activity logs, and status reporting for distributed teams.",
    tech: ["Vue.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/dev-auladhossen/MEVN_TeamTrax",
    accent: "#64ffda",
    thumbnail: projectTrackingThumb, // 👈 imported image, not a path string
  },
  {
    title: "Inventory Management Tool",
    year: 2022,
    madeAt: "Personal Project",
    description:
      "A web tool for tracking stock levels, movements, and low-stock alerts, with a component-driven Vue interface built for speed on low-end devices.",
    tech: ["Vue.js", "Vue Router", "Tailwind CSS"],
    link: "https://github.com/dev-auladhossen/inventory_management",
    accent: "#38bdf8",
    thumbnail: inventoryThumb,
  },
  {
    title: "Random Password Generator",
    year: 2021,
    madeAt: "Personal Project",
    description:
      "A small utility for generating strong, customizable passwords — length, character sets, and copy-to-clipboard, no dependencies beyond vanilla JS.",
    tech: ["HTML", "CSS", "JavaScript", "ES6"],
    link: "https://github.com/dev-auladhossen/password_generator_JS",
    accent: "#c084fc",
    thumbnail: passwordGenThumb,
  },
];
