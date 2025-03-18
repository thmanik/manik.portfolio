import React from "react";
import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="bg-gray-100 py-16">
      <section id="resume" className="resume container mx-auto px-6 lg:px-20">
        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-gray-800">Resume</h2>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
          Passionate and detail-oriented Frontend Web Developer with expertise in crafting responsive, high-performance, and user-friendly web applications.
          </p>
          <div className="w-16 h-1 bg-[#00BBA7] mx-auto mt-4"></div>
        </div>

        {/* Resume Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column (Summary & Education) */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-semibold border-l-4 border-[#00BBA7] pl-4 mb-4">Summary</h3>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold text-gray-800">Md Tofazzol Hossain Manik</h4>
              <p className="italic text-gray-600 mt-2">
              Frontend Web Developer with 1.5 years of professional experience, specializing in crafting fast, responsive, and visually appealing web applications using React.js, Next.js, TypeScript, and Tailwind CSS. Passionate about clean code, user experience, and modern web technologies.
              </p>
              <ul className="mt-4 text-gray-600 space-y-2">
                <li className="flex items-center">
                  <FaMapMarkedAlt className="mr-2 text-[#00BBA7]" /> Uttara, Dhaka, Bangladesh
                </li>
                <li className="flex items-center">
                  <FaPhoneAlt className="mr-2 text-[#00BBA7]" /> (+880) 163120-5714
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-2 text-[#00BBA7]" /> thmanik1241@gmail.com
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold border-l-4 border-[#00BBA7] pl-4 mt-8 mb-4">Education</h3>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="font-bold">Complete Web Development Course</h4>
              <h5 className="text-gray-600">Programming Hero</h5>
              <p className="text-gray-500">Batch: 07</p>
              <p className="text-gray-600 mt-2">With a rigorous amount of JavaScript, HTML, CSS, React and applied these skills to build several projects.</p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg mt-4">
            <h4 className="font-bold">Bachelor of Business Administration(BBA)</h4>
              <h5 className="text-gray-600">2020 - 2025</h5>
              <p className="text-gray-500">Govt. Titumir College</p>
              <p className="text-gray-600 mt-2">Finance and Banking</p>
            </div>
           
          </div>

          {/* Right Column (Professional Experience) */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-semibold border-l-4 border-[#00BBA7] pl-4 mb-4">Professional Experience</h3>
            
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="font-bold">Frontend Developer</h4>
              <h5 className="text-gray-600">November 2023 - Present</h5>
              <p className="text-gray-500">Remote | Bangladesh</p>
              <p className="text-gray-500">Developed and maintained eCommerce platform using Next.js, TypeScript, and Tailwind CSS, ensuring a seamless and responsive user experience. Implemented dynamic product search, authentication, and state management with Redux, optimizing performance and efficiency. Integrated an order tracking system for real-time order status updates and a warranty claim system to streamline customer support. Collaborated with cross-functional teams to enhance UI/UX and integrate APIs for smooth data handling.</p>
            </div>

            {/* <div className="bg-white p-6 shadow-lg rounded-lg mt-4">
              <h4 className="font-bold">Graphic Design Specialist</h4>
              <h5 className="text-gray-600">2017 - 2018</h5>
              <p className="text-gray-500">Stepping Stone Advertising, New York, NY</p>
              <ul className="mt-4 text-gray-600 list-disc pl-5 space-y-2">
                <li>Designed branding materials, including logos and brochures.</li>
                <li>Managed multiple projects under tight deadlines.</li>
                <li>Consulted with clients to create compelling visual narratives.</li>
                <li>Developed interactive design presentations.</li>
              </ul>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
