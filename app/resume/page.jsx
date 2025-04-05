"use client"
import React, { useEffect } from "react";
import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Resume = () => {
  useEffect(() => {
    // Prevent any content hidden due to uninitialized animations
    if (typeof window !== "undefined" && (window ).AOS) {
      (window ).Aos.refresh();
    }
  }, []);

  return (
    <div className="bg-gray-100 py-8 md:py-16">
      <section
        id="resume"
        className="resume container mx-auto px-4 sm:px-6 lg:px-20"
      >
        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-tight">
            Resume
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mt-2 max-w-2xl mx-auto leading-relaxed">
            Passionate and detail-oriented Frontend Web Developer with expertise in crafting responsive, high-performance, and user-friendly web applications.
          </p>
          <div className="w-16 h-1 bg-[#00BBA7] mx-auto mt-4"></div>
        </div>

        {/* Resume Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            {/* Summary */}
            <h3 className="text-xl sm:text-2xl text-gray-800 font-semibold border-l-4 border-[#00BBA7] pl-4 mb-4">
              Summary
            </h3>
            <div
              className="bg-white p-6 shadow-lg rounded-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4 className="text-lg sm:text-xl font-bold text-gray-800">
                Md Tofazzol Hossain Manik
              </h4>
              <p className="italic text-gray-600 mt-2 text-sm sm:text-base">
                Frontend Web Developer with 1.5 years of professional experience, specializing in crafting fast, responsive, and visually appealing web applications using React.js, Next.js, TypeScript, and Tailwind CSS. Passionate about clean code, user experience, and modern web technologies.
              </p>
              <ul className="mt-4 text-gray-600 space-y-2 text-sm sm:text-base">
                <li className="flex items-center flex-wrap">
                  <FaMapMarkedAlt className="mr-2 text-[#00BBA7]" />
                  Uttara, Dhaka, Bangladesh
                </li>
                <li className="flex items-center flex-wrap">
                  <FaPhoneAlt className="mr-2 text-[#00BBA7]" />
                  (+880) 163120-5714
                </li>
                <li className="flex items-center flex-wrap break-all">
                  <FaEnvelope className="mr-2 text-[#00BBA7]" />
                  thmanik1241@gmail.com
                </li>
              </ul>
            </div>

            {/* Education */}
            <h3 className="text-xl sm:text-2xl text-gray-800 font-semibold border-l-4 border-[#00BBA7] pl-4 mt-8 mb-4">
              Education
            </h3>

            <div
              className="bg-white p-6 shadow-lg rounded-lg"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4 className="font-bold text-base text-gray-800 sm:text-lg">
                Complete Web Development Course
              </h4>
              <h5 className="text-gray-600">Programming Hero</h5>
              <p className="text-gray-500">Batch: 07</p>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                With a rigorous amount of JavaScript, HTML, CSS, React and applied these skills to build several projects.
              </p>
            </div>

            <div
              className="bg-white p-6 shadow-lg rounded-lg mt-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4 className="font-bold text-base text-gray-800 sm:text-lg">
                Bachelor of Business Administration (BBA)
              </h4>
              <h5 className="text-gray-600">2020 - 2025</h5>
              <p className="text-gray-500">Govt. Titumir College</p>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Finance and Banking
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl sm:text-2xl text-gray-800 font-semibold border-l-4 border-[#00BBA7] pl-4 mb-4">
              Professional Experience
            </h3>

            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="font-bold text-base text-gray-800 sm:text-lg">Frontend Developer</h4>
              <h5 className="text-gray-600">November 2023 - Present</h5>
              <p className="text-gray-500">Remote | Bangladesh</p>
              <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
                Developed and maintained eCommerce platform using Next.js, TypeScript, and Tailwind CSS, ensuring a seamless and responsive user experience. Implemented dynamic product search, authentication, and state management with Redux, optimizing performance and efficiency. Integrated an order tracking system for real-time order status updates and a warranty claim system to streamline customer support. Collaborated with cross-functional teams to enhance UI/UX and integrate APIs for smooth data handling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
