// "use client";

// import React from "react";
// import CountUp from "react-countup";
// import { 
//   FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaGithub, FaFigma, 
//   FaVimeoSquare,
//   FaCaravan
// } from "react-icons/fa";
// import { 
//   SiNextdotjs, SiTypescript, SiExpress, SiRedux, SiTailwindcss, SiBootstrap, SiVisualstudio, 
//   SiPostman, SiNetlify, SiJirasoftware, SiNpm 
// } from "react-icons/si";
// import { BsBrowserChrome } from "react-icons/bs";
// import { TbBrandCanva } from "react-icons/tb";

// const skills = [
//   { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-6xl" />, percentage: 90 },
//   { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-6xl" />, percentage: 85 },
//   { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-6xl" />, percentage: 80 },
//   { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-6xl" />, percentage: 75 },
//   { name: "React.js", icon: <FaReact className="text-blue-400 text-6xl" />, percentage: 90 },
//   { name: "Next.js", icon: <SiNextdotjs className="text-gray-200 text-6xl" />, percentage: 85 },
//   { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-6xl" />, percentage: 80 },
//   { name: "Express.js", icon: <SiExpress className="text-gray-400 text-6xl" />, percentage: 75 },
//   { name: "MongoDB", icon: <FaDatabase className="text-green-400 text-6xl" />, percentage: 80 },
//   { name: "Redux", icon: <SiRedux className="text-purple-500 text-6xl" />, percentage: 70 },
//   { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400 text-6xl" />, percentage: 90 },
//   { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 text-6xl" />, percentage: 85 },
// ];

// const tools = [
//   { name: "GitHub", icon: <FaGithub className="text-gray-200 text-6xl" /> },
//   { 
//     name: "VS Code", 
//     icon: <img src="/images/vsCode.png" alt="Canva" className="w-16 h-16 mx-auto" />
//   },
//   { name: "Postman", icon: <SiPostman className="text-orange-500 text-6xl" /> },
//   { name: "Netlify", icon: <SiNetlify className="text-teal-400 text-6xl" /> },
//   { name: "Figma", icon: <FaFigma className="text-pink-500 text-6xl" /> },
//   { name: "Chrome DevTools", icon: <BsBrowserChrome className="text-yellow-400 text-6xl" /> },
//   { name: "NPM", icon: <SiNpm className="text-red-500 text-6xl" /> },
//   { name: "Jira", icon: <SiJirasoftware className="text-blue-500 text-6xl" /> },
//   { 
//     name: "Canva", 
//     icon: <img src="/images/canva.png" alt="Canva" className="w-16 h-16 mx-auto" />
//   },
// ];

// const Skills = () => {
//   return (
//     <section className="py-12 bg-gray-900 text-white">
//       {/* Skills Section */}
//       <div className="flex flex-col mx-5">
//         <h3 className="text-center text-3xl font-bold">Coding Skills</h3>
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-12 gap-5 mt-10 text-center">
//           {skills.map((skill, index) => (
//             <div key={index} className="col-span-1 md:col-span-2 bg-gray-800 p-6 rounded-lg shadow-lg">
//               <div className="flex justify-center">{skill.icon}</div>
//               <h2 className="text-4xl font-bold mt-3">
//                 <CountUp start={0} end={skill.percentage} duration={2} delay={0.2} />%
//               </h2>
//               <p className="mt-2 text-lg">{skill.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Tools Section */}
//       <div className="flex flex-col mx-5 mt-16">
//         <h3 className="text-center text-3xl font-bold">Tools</h3>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10 text-center">
//           {tools.map((tool, index) => (
//             <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
//               <div className="flex justify-center">{tool.icon}</div>
//               <p className="mt-2 text-lg">{tool.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


"use client";

import React from "react";
import CountUp from "react-countup";
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaDatabase, FaGithub, FaFigma, 
  
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiExpress, SiRedux, SiTailwindcss, SiBootstrap, SiVisualstudio, 
  SiPostman, SiNetlify, SiJirasoftware, SiNpm 
} from "react-icons/si";
import { BsBrowserChrome } from "react-icons/bs";


const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-6xl" />, percentage: 90 },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-6xl" />, percentage: 90 },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500 text-6xl" />, percentage: 70 },
  { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] text-6xl" />, percentage: 70 },
  { name: "React.js", icon: <FaReact className="text-blue-400 text-6xl" />, percentage: 85 },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 text-6xl" />, percentage: 75 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-6xl" />, percentage: 50 },
  { name: "Express.js", icon: <SiExpress className="text-gray-600 text-6xl" />, percentage: 60 },
  { name: "MongoDB", icon: <FaDatabase className="text-green-400 text-6xl" />, percentage: 60 },
  { name: "Redux", icon: <SiRedux className="text-purple-500 text-6xl" />, percentage: 75 },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400 text-6xl" />, percentage: 90 },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 text-6xl" />, percentage: 95 },
];

const tools = [
  { name: "GitHub", icon: <FaGithub className="text-gray-800 text-6xl" /> },
  { 
    name: "VS Code", 
    icon: <img src="/images/vsCode.png" alt="VS Code" className="w-16 h-16 mx-auto" />
  },
  { name: "Postman", icon: <SiPostman className="text-orange-500 text-6xl" /> },
  { name: "Netlify", icon: <SiNetlify className="text-teal-400 text-6xl" /> },
  { name: "Figma", icon: <FaFigma className="text-pink-500 text-6xl" /> },
  { name: "Chrome DevTools", icon: <BsBrowserChrome className="text-yellow-400 text-6xl" /> },
  { name: "NPM", icon: <SiNpm className="text-red-500 text-6xl" /> },
  { name: "Jira", icon: <SiJirasoftware className="text-blue-500 text-6xl" /> },
  { 
    name: "Canva", 
    icon: <img src="/images/canva.png" alt="Canva" className="w-16 h-16 mx-auto" />
  },
];

const Skills = () => {
 
  return (
    <section className="py-12 bg-white text-gray-900">
      {/* Skills Section */}
      <div className="flex flex-col mx-5">
        <h3 className="text-4xl font-extrabold text-gray-800 text-center">Coding Skills</h3>
        <div className="w-16 h-1 bg-[#00BBA7] mx-auto mt-6"></div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-12 gap-5 mt-10 text-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-span-1 md:col-span-2 bg-gray-100 p-6 rounded-lg shadow-md" data-aos="zoom-in-up">
              <div className="flex justify-center">{skill.icon}</div>
              {/* <h2 className="text-4xl font-bold mt-3">
                <CountUp start={0} end={skill.percentage} duration={2} delay={0.2} />%
              </h2> */}
              <p className="mt-2 text-gray-800 text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div className="flex flex-col mx-5 mt-16">
        <h3 className="text-4xl font-extrabold text-gray-800 text-center">Tools</h3>
        <div className="w-16 h-1 bg-[#00BBA7] mx-auto mt-6"></div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10 text-center">
          {tools.map((tool, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md" data-aos="zoom-in-up">
              <div className="flex justify-center">{tool.icon}</div>
              <p className="mt-2 text-gray-800 text-lg">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
