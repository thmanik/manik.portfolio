import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "AllNeedzMart",
    description: "This is an Ecommerce website with having exciting feature like order tracking , thank you page, warrantry claim",
    technologies: ["Next.js", "TypeScript", "Redux Toolkit ","Tailwind CSS","shadcn/ui"],
    image: "/images/allneedsmart/allneezmart.png",
    link: "/project-details/1", // Link to the details page
  },   
  {
    id: 2,
    name: "Oneselfbd",
    description: "A modern web app design.",
    technologies: ["Next.js", "TypeScript", "Redux Toolkit ","Tailwind CSS","shadcn/ui"],
    image: "/images/oneself/home.png",
    link: "/project-details/2", // Link to the details page
  },
  {
    id: 3,
    name: "TravelTrek",
    description: "An innovative project concept.",
    technologies: ["MUI", "Tailwind","React.js", "Firebase"," Node.js", "MongoDB(MVC)","Express"],
   
    image: "/your-image-3.jpg",
    link: "/project-details/3", // Link to the details page
  },
  {
    id: 4,
    name: "NextJS Material Kit.",
    description: "An innovative project concept.",
    technologies: ["HTML5", "CSS3"],
   
    image: "/your-image-3.jpg",
    link: "/project-details/3", // Link to the details page
  },
];

const Portfolio = () => {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-semibold text-center mb-12">My Portfolio</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Image Container */}
            <div className="h-64 overflow-hidden">
              <Image width={1000} height={1000}
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card Body */}
            <div className="p-6">
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

            {/* Card Footer with Details Button */}
            <div className="bg-gray-800 text-white p-4 flex justify-center">
              <a
                href={project.link} // Link to project details page
                className="flex items-center justify-center p-3 bg-gray-600 hover:bg-gray-700 rounded-full"
              >
                <span className="ml-2">Details</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
