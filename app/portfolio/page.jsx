"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const projects = [
  {
    id: 1,
    name: "AllNeedzMart",
    description: "This is an Ecommerce website with exciting features like order tracking, thank you page, warranty claim.",
    technologies: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "shadcn/ui"],
    image: "/images/allneedsmart/scroolimage.png",
    link: "/project-details/1",
  },
  {
    id: 2,
    name: "Oneselfbd",
    description: "A modern web app design.",
    technologies: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "shadcn/ui"],
    image: "/images/oneself/scrollingPhoto.png",
    link: "/project-details/2",
  },
  {
    id: 3,
    name: "TravelTrek",
    description: "An innovative project concept.",
    technologies: ["MUI", "Tailwind", "React.js", "Firebase", "Node.js", "MongoDB(MVC)", "Express"],
    image: "/images/Traveltrek/scrolling.png",
    link: "/project-details/3",
  },
  {
    id: 4,
    name: "BOOK COLLEGE",
    description: "An innovative project concept.",
    technologies: ["Tailwind", "React.js", "Firebase", "Node.js", "MongoDB", "Express"],
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
    technologies: ["Tailwind", "React.js", "Firebase", "Node.js", "MongoDB", "Express"],
    image: "/images/milclub/homeScroll.png",
    link: "/project-details/3",
  },
  {
    id: 7,
    name: "TOY BOX",
    description: "An innovative project concept.",
    technologies: ["Tailwind", "React.js", "Firebase", "Node.js", "MongoDB", "Express"],
    image: "/images/toybok/homeScroll.png",
    link: "/project-details/3",
  },
];


const Portfolio = () => {
  const [activeCard, setActiveCard] = useState(null);
  const router = useRouter();

  const handleRemoveBlur = (id) => {
    setActiveCard(id);
  };

  const handleNavigate = (id) => {
    router.push(`/portfolio/${id}`);
  };

  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-semibold text-center mb-12">My Portfolio</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <div className="w-full overflow-hidden relative h-64">
              <Image
                src={project.image}
                alt={project.name}
                layout="responsive"
                width={800}
                height={600}
                className={`object-cover w-full h-full transition-transform duration-4500
                ${activeCard === project.id ? "translate-y-[-70%]" : ""}`}
              />

              <div
                className={`absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md transition-all duration-1000 
                ${activeCard === project.id ? "opacity-0" : "opacity-50"}`}
              ></div>

              <button
                className={`absolute bottom-4 right-4 cursor-pointer bg-black text-white p-2 rounded-full transition-opacity duration-1000
                ${activeCard === project.id ? "opacity-0" : "opacity-50"}`}
                onClick={() => handleRemoveBlur(project.id)}
              >
                ⬆️
              </button>
            </div>

            <div className="flex-1 p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{project.name}</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-200 px-3 py-1 rounded-full text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 text-white p-4 flex justify-center mt-auto">
              <button
                onClick={() => handleNavigate(project.id)}
                
                className="flex items-center justify-center cursor-pointer p-3 bg-gray-600 hover:bg-gray-700 rounded-full"
              >
                <span className="ml-2">Details</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;