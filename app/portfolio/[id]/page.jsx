"use client";

import { notFound } from "next/navigation";
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import { IoIosMale, IoMdRadioButtonOn } from "react-icons/io";
// Dynamically import Carousel component to disable SSR
const Carousel = dynamic(() => import('react-responsive-carousel').then(mod => mod.Carousel), { ssr: false });
import "react-responsive-carousel/lib/styles/carousel.min.css";


const projects = [
    {
      id: 1,
      name: "AllNeedzMart",
      description:[
        "Developed a responsive e-commerce platform with features like product browsing, cart management, order placement, coupon-based discounts, and a multiple variation selection system for products.",
        "Designed a Thank You Page to enhance the post-purchase experience.",
        "Implemented an Order Tracking System for users to track their orders via unique order IDs.",
        "Developed a Warranty Claim System to validate warranty claims and provide instant support."
      ],
      technologies: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "shadcn/ui"],
      images: ["/images/allneedsmart/allneezmart.png", "/images/allneedsmart/orderTracking.png", "/images/allneedsmart/shoppage.png"],
      link: "/project-details/1",
    },
    {
      id: 2,
      name: "Oneselfbd",
      description:[
        "Developed a responsive e-commerce platform with features like product browsing, cart management, order placement, coupon-based discounts, and a multiple variation selection system for products.",
        "Designed a Thank You Page to enhance the post-purchase experience.",
        "Implemented an Order Tracking System for users to track their orders via unique order IDs.",
        "Developed a Warranty Claim System to validate warranty claims and provide instant support."
      ],
      technologies: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "shadcn/ui"],
      images: ["/images/oneself/home.png", "/images/oneself/productpage.png", "/images/oneself/checkout.png"],
      link: "/project-details/2",
    },
    {
      id: 3,
      name: "TravelTrek",
      description:[
        "Developed a Bus Ticket Booking platform primarily for bus counters, restricting access to the general public. ",
        "Built a single-page application (SPA) using React-Router for smooth navigation.",
        "Implemented Firebase authentication for secure access and role-based user management.",
        "Designed a responsive MERN Stack-based system for seamless booking and management."
      ],
      technologies: ["MUI", "Tailwind", "React.js", "Firebase", "Node.js", "MongoDB(MVC)", "Express"],
      images: ["/images/Traveltrek/homePage.png", "/images/Traveltrek/findeticket.png"],
    },
    {
      id: 4,
      name: "BOOK COLLEGE",
      description:[
        "Developed a responsive MERN Stack-based college booking platform where students can apply to their preferred colleges.",
        "Implemented React-Router for seamless navigation and Firebase authentication for secure user access.",
        "Designed for mobile and desktop compatibility, ensuring a smooth user experience across devices."
      ],
      technologies: ["Tailwind", "React.js", "Firebase", "Node.js", "MongoDB", "Express"],
      images: ["/images/bookCollege/homepage.png", "/images/bookCollege/aboutSection.png", "/images/bookCollege/footer.png"],
    },
    {
      id: 5,
      name: "NextJS Material Kit.",
      description: [
        "It's a structure. or parts of a website similar to a library. This website is static.",
        "These are the ones where the only focus was on design. Computer responsive only."
      ],
      technologies: ["HTML5", "CSS3"],
      images: ["/images/nextkit/home.png", "/images/nextkit/homepage2.png", "/images/nextkit/navigation.png"],
    },
    
    {
      id: 6,
      name: "MIL School",
     
      description:[
        "This is a Musical instruments website, where Instructors can add instrument classes, and users can purchase their preferred instrument class.",
        " This website has a dashboard, where the data of the admin, instructor, and user is shown according to their role",
        "If a user wants to buy an instrument class, he must first create an account."
      ],
      technologies: ["Tailwind", "React.js", "Firebase", "Node.js", "MongoDB", "Express"],
      images: ["/images/milclub/home.png","/images/milclub/instructor.png"],
    },
    {
      id: 7,
      name: "TOY BOX",
      description:[
        "Single page application using React-Router",
        "Implemented authentication system using Firebase",
        "A responsive MERN Stack Base Toy MarketPlace website where a user can explore the website well on his phone and computer. ",
        "After successful login a user can add, update, delete any of his products"
      ],
      technologies: ["Tailwind", "React.js", "Firebase", "Node.js", "MongoDB", "Express"],
      images: ["/images/toybok/home.png", "/images/toybok/faq.png"],
    },
  ];

export default function PortfolioDetails() {
 
  const { id } = useParams();


  const project = projects.find((p) => p.id == id);

  if (!project) return notFound();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-gray-800">{project.title}</h2>
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className="rounded-lg overflow-hidden md:h-[480px] shadow-lg">
          <Carousel showThumbs={false} autoPlay  infiniteLoop>
            {project?.images?.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Project Image ${index + 1}`} className="rounded-lg" />
              </div>
            ))}
          </Carousel>
        </div>

        <div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Project Information</h3>
            {/* link section */}
            <div className=" flex gap-4">
              <div className="flex items-center py-1 px-4  bg-[#00BBA7] text-white rounded-xl text-sm cursor-pointer hover:bg-[#2a4b47]  transition-all duration-300 transform hover:scale-103">Live Link <IoIosMale className="font-bold ms-1"/></div>
              {/* client side link */}
              <div className="flex items-center py-1 px-4  bg-[#00BBA7] text-white rounded-xl text-sm cursor-pointer hover:bg-[#2a4b47]  transition-all duration-300 transform hover:scale-103">Client Side Code<IoIosMale className="font-bold ms-1"/></div>
              {/* server side link */}
              <div className="flex items-center py-1 px-4  bg-[#00BBA7] text-white rounded-xl text-sm cursor-pointer hover:bg-[#2a4b47]  transition-all duration-300 transform hover:scale-103">Server Side Code <IoIosMale className="font-bold ms-1"/></div>
            </div>
            
    <div>
      <h1 className="text-start text-gray-500 mt-2">Project Description:</h1>
      <ul className="list-none pl-0 space-y-2">
        {project.description.map((point, index) => (
          <li key={index} className="text-gray-500 flex items-start">
            {/* Custom Dotted Bullet */}
            {/* <span className="w-2 h-2 bg-gray-600 rounded-full mt-1 mr-3 flex-shrink-0"></span> */}
            <IoMdRadioButtonOn className="text-[#00BBA7] w-4 h-4  rounded-full mt-1 mr-3 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>

            <ul className="mt-4 text-gray-600 space-y-2">
              <li><strong>Category:</strong> {project.category}</li>
              <li><strong>Client:</strong> {project.client}</li>
              <li><strong>Project Date:</strong> {project.date}</li>
              <li>
                <strong>Project URL:</strong> 
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {project.url}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
