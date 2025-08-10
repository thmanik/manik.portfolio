"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

const projects = [
  {
    id: 1,
    name: "AllNeedzMart",
    description:
      "This is an Ecommerce website with exciting features like order tracking, thank you page, warranty claim.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    image: "/images/allneedsmart/scroolimage.png",
    link: "/project-details/1",
  },
  {
    id: 2,
    name: "Oneselfbd",
    description: "A modern web app design.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    image: "/images/oneself/scrollingPhoto.png",
    link: "/project-details/2",
  },
  {
    id: 3,
    name: "TravelTrek",
    description: "An innovative project concept.",
    technologies: [
      "MUI",
      "Tailwind",
      "React.js",
      "Firebase",
      "Node.js",
      "MongoDB(MVC)",
      "Express",
    ],
    image: "/images/Traveltrek/scrolling.png",
    link: "/project-details/3",
  },
  {
    id: 4,
    name: "BOOK COLLEGE",
    description: "An innovative project concept.",
    technologies: [
      "Tailwind",
      "React.js",
      "Firebase",
      "Node.js",
      "MongoDB",
      "Express",
    ],
    image: "/images/bookCollege/homeScrool.png",
    link: "/project-details/3",
  },
  {
    id: 5,
    name: "NextJS Material Kit.",
    description: "An innovative project concept.",
    technologies: ["HTML5", "CSS3"],
    image: "/images/nextkit/homesrcoll.png",
    link: "/project-details/3",
  },
  {
    id: 6,
    name: "MIL School",
    description: "An innovative project concept.",
    technologies: [
      "Tailwind",
      "React.js",
      "Firebase",
      "Node.js",
      "MongoDB",
      "Express",
    ],
    image: "/images/milclub/homeScroll.png",
    link: "/project-details/3",
  },
  {
    id: 7,
    name: "TOY BOX",
    description: "An innovative project concept.",
    technologies: [
      "Tailwind",
      "React.js",
      "Firebase",
      "Node.js",
      "MongoDB",
      "Express",
    ],
    image: "/images/toybok/homeScroll.png",
    link: "/project-details/3",
  },
];

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);
  const router = useRouter();

  const handleRemoveBlur = (id) => {
    setActiveCard(id);
  };

  const handleNavigate = (id) => {
    router.push(`/projects/${id}`);
  };

  return (
    <section className="min-h-screen bg-[#0A0F1C] text-white py-12 px-4">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">My Projects</h2>
        <div className="w-20 h-1 bg-[#00BBA7] mx-auto mt-4 rounded-md"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-[#111827] border border-[#1F2937] rounded-xl shadow-lg hover:shadow-[#00BBA7]/30 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
            data-aos="fade-up"
          >
            {/* Image */}
            <div className="w-full overflow-hidden relative h-64">
              <Image
                src={project.image}
                alt={project.name}
                layout="responsive"
                width={800}
                height={600}
                className={`object-cover w-full h-full transition-transform duration-[4500ms] ${
                  activeCard === project.id ? "translate-y-[-70%]" : ""
                }`}
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md transition-all duration-1000 ${
                  activeCard === project.id ? "opacity-0" : "opacity-50"
                }`}
              ></div>
              <button
                onClick={() => handleRemoveBlur(project.id)}
                className={`absolute bottom-4 right-4 z-10 bg-[#00BBA7] text-white cursor-pointer p-2 rounded-full shadow-md hover:scale-110 transition-all duration-500 ${
                  activeCard === project.id ? "opacity-0" : "opacity-90"
                }`}
              >
                <ArrowUpCircleIcon className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Text */}
            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold text-white">
                {project.name}
              </h3>
              <p className="text-gray-400 mt-2">{project.description}</p>

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-[#1E293B] text-gray-300 px-3 py-1 rounded-full border border-[#334155]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="bg-[#0F172A] p-4 flex justify-center mt-auto">
              <button
                onClick={() => handleNavigate(project.id)}
                className="flex items-center justify-center text-white cursor-pointer px-5 py-2 bg-[#1E293B] hover:bg-[#00BBA7] hover:text-black rounded-full transition-colors duration-300"
              >
                <span>Details</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
