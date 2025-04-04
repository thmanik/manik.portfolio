"use client";

import { notFound } from "next/navigation";
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';

import { IoIosLink, IoLogoGithub, IoMdRadioButtonOn } from "react-icons/io";

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
      live_link: "https://allneedzmart.com",
      confidential:true,
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
      live_link: "https://mustaqim.site",
      confidential:true,
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
      live_link: "https://traveltrek-6303c.web.app",
      client_code_link: "https://github.com/Flex-Softr/Bus-Ticket-Booking-Solution/tree/latest-achieve/Client",
      server_code_link: "https://github.com/Flex-Softr/Bus-Ticket-Booking-Solution/tree/latest-achieve/Server",
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
      live_link: "https://book-colleges.web.app",
      client_code_link: "https://github.com/thmanik/book-colleges-client",
      server_code_link: "https://github.com/thmanik/book-colleges-server",
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
      live_link: "https://symphonious-peony-d4a50a.netlify.app",
      client_code_link: "https://github.com/thmanik/nextjs-material-kit",
      
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
      live_link: "https://mil-school-c89cf.web.app",
      client_code_link: "https://github.com/thmanik/mil-club-client",
      server_code_link: "https://github.com/thmanik/mil-club-server",
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
      live_link: "https://toy-box-8d4dc.web.app",
      client_code_link: "https://github.com/thmanik/toy-box",
      server_code_link: "https://github.com/thmanik/Toy-box-server",
    },
  ];

export default function PortfolioDetails() {
 
  const { id } = useParams();


  const project = projects.find((p) => p.id == id);

  if (!project) return notFound();

  return (
    <div className=" mx-auto w-[95%] p-6 md:w-[90%] " >
   
      <h2 className="text-3xl  font-bold text-center text-gray-800">{project.title}</h2>
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        <div className="rounded-lg overflow-hidden md:h-[480px]  border-teal-700 border-2 shadow-lg"  data-aos="fade-up" >
          <Carousel showThumbs={false} autoPlay  infiniteLoop>
            {project?.images?.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Project Image ${index + 1}`} className="rounded-lg" />
              </div>
            ))}
          </Carousel>
        </div>

        <div className="bg-white rounded-lg p-2 md:p-6">
        <div className="flex flex-wrap items-center gap-2 md:gap-4">
  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-800">
    Project Information
  </h3>
  
  {project?.confidential && (
    <div className="text-sm sm:text-md md:text-lg my-2 mb-4 md:mb-4 text-[#00BBA7]">
      (Confidential)
    </div>
  )}
</div>

  {/* Links Section */}
  <div className="flex flex-wrap gap-4 mb-6" data-aos="fade-up"  >
    {
      project?.live_link && (
        <a
      href={project?.live_link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 py-2 px-6 cursor-pointer bg-[#00BBA7] text-white rounded-full text-sm font-medium shadow-md hover:bg-[#2a4b47] transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#00BBA7] focus:ring-offset-2"
    >
      <IoIosLink size={18} />
      Live Site
    </a>
      )
    }

    {
      project?.client_code_link && (
        <a
      href={project?.client_code_link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 py-2 px-6 cursor-pointer bg-[#00BBA7] text-white rounded-full text-sm font-medium shadow-md hover:bg-[#2a4b47] transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#00BBA7] focus:ring-offset-2"
    >
      <IoLogoGithub size={18} />
      Client Code
    </a>
      )
    }

    {
      project?.server_code_link &&(
        <a
      href={project?.server_code_link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 py-2 px-6 cursor-pointer bg-[#00BBA7] text-white rounded-full text-sm font-medium shadow-md hover:bg-[#2a4b47] transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#00BBA7] focus:ring-offset-2"
    >
      <IoLogoGithub size={18} />
      Server Code
    </a>
      )
    }
 
  </div>

  {/* Project Description */}
  <div data-aos="fade-up" >
    <h1 className="text-start text-gray-600 mb-3">Project Description:</h1>
    <ul className="list-none pl-0 space-y-3">
      {project.description.map((point, index) => (
        <li key={index} className="text-gray-600 flex items-start">
          <IoMdRadioButtonOn className="text-[#00BBA7] w-4 h-4 rounded-full mt-1 mr-3 flex-shrink-0" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>


</div>

      </div>
    </div>
  );
}
