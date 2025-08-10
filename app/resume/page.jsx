"use client";
import React, { useEffect } from "react";
import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Resume = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <div className="bg-[#0A0F1C] py-10 md:py-16 text-gray-300">
      <section
        id="resume"
        className="resume container mx-auto px-4 sm:px-6 lg:px-20"
      >
        {/* Section Title */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#3B82F6]">
            Resume
          </h2>
          <p className="text-base sm:text-lg text-gray-400 mt-2 max-w-2xl mx-auto">
            Passionate and detail-oriented Frontend Web Developer with expertise
            in crafting responsive, high-performance, and user-friendly web
            applications.
          </p>
          <div className="w-20 h-1 bg-[#3B82F6] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Resume Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            {/* Summary */}
            <h3 className="text-xl sm:text-2xl text-gray-100 font-semibold border-l-4 border-[#3B82F6] pl-4 mb-4">
              Summary
            </h3>
            <div
              className="bg-[#111827] p-6 rounded-2xl hover:shadow-lg hover:shadow-[#3B82F6]/20 transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4 className="text-lg sm:text-xl font-bold text-gray-100">
                Md Tofazzol Hossain Manik
              </h4>
              <p className="italic text-gray-400 mt-2">
                I’m a web developer recently worked at SM Technology, mainly
                focusing on frontend development. I began my career at
                FlexSoftr, where I worked on e-commerce projects and improved my
                skills in building responsive and user-friendly websites using
                TypeScript, Next.js, Redux, and Tailwind CSS. I enjoy working
                with modern technologies and always strive to grow as a
                developer.
              </p>
              <ul className="mt-4 text-gray-400 space-y-2">
                <li className="flex items-center flex-wrap">
                  <FaMapMarkedAlt className="mr-2 text-[#3B82F6]" />
                  Uttara, Dhaka, Bangladesh
                </li>
                <li className="flex items-center flex-wrap">
                  <FaPhoneAlt className="mr-2 text-[#3B82F6]" />
                  (+880) 163120-5714
                </li>
                <li className="flex items-center flex-wrap break-all">
                  <FaEnvelope className="mr-2 text-[#3B82F6]" />
                  thmanik1241@gmail.com
                </li>
              </ul>
            </div>

            {/* Education */}
            <h3 className="text-xl sm:text-2xl text-gray-100 font-semibold border-l-4 border-[#3B82F6] pl-4 mt-8 mb-4">
              Education
            </h3>

            <div
              className="bg-[#111827] p-6 rounded-2xl hover:shadow-lg hover:shadow-[#3B82F6]/20 transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <h4 className="font-bold text-base text-gray-100 sm:text-lg">
                Complete Web Development Course
              </h4>
              <h5 className="text-gray-400">Programming Hero</h5>
              <p className="text-gray-500">Batch: 07</p>
              <p className="text-gray-400 mt-2">
                With a rigorous amount of JavaScript, HTML, CSS, React and
                applied these skills to build several projects.
              </p>
            </div>

            <div
              className="bg-[#111827] p-6 rounded-2xl hover:shadow-lg hover:shadow-[#3B82F6]/20 transition-shadow duration-300 mt-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4 className="font-bold text-base text-gray-100 sm:text-lg">
                Bachelor of Business Administration (BBA)
              </h4>
              <h5 className="text-gray-400">2020 - 2025</h5>
              <p className="text-gray-500">Govt. Titumir College</p>
              <p className="text-gray-400 mt-2">Finance and Banking</p>
            </div>
          </div>

          {/* Right Column */}
          <div data-aos="fade-up" data-aos-delay="250">
            <h3 className="text-xl sm:text-2xl text-gray-100 font-semibold border-l-4 border-[#3B82F6] pl-4 mb-4">
              Professional Experience
            </h3>
            <div className="bg-[#111827] p-6 rounded-2xl hover:shadow-lg hover:shadow-[#3B82F6]/20 transition-shadow duration-300 mb-5">
              <h4 className="font-bold text-base text-gray-100 sm:text-lg">
                Junior Web Developer
              </h4>
              <div className="flex">
                <h5 className="text-gray-300 font-bold">
                  SM Technology{" "}
                  <span className="text-gray-500">
                    (Onside | Dhaka, Bangladesh)
                  </span>
                </h5>
              </div>
              <p className="text-gray-500">April 2025 - July 2025</p>
              <p className="text-gray-400 mt-2 leading-relaxed">
                Worked as a frontend developer on multiple ongoing projects,
                building responsive and user-friendly interfaces using modern
                web technologies.
              </p>
            </div>

            <div className="bg-[#111827] p-6 rounded-2xl hover:shadow-lg hover:shadow-[#3B82F6]/20 transition-shadow duration-300">
              <h4 className="font-bold text-base text-gray-100 sm:text-lg">
                Frontend Developer
              </h4>
              <div className="flex">
                <h5 className="text-gray-300 font-bold">
                  Flex Softr{" "}
                  <span className="text-gray-500">
                    ( Remote | Bangladesh)
                  </span>
                </h5>
              </div>
              <p className="text-gray-500">November 2023 - March 2025</p>
              <p className="text-gray-400 mt-2 leading-relaxed">
                Developed and maintained eCommerce platform using Next.js,
                TypeScript, and Tailwind CSS, ensuring a seamless and responsive
                user experience. Implemented dynamic product search,
                authentication, and state management with Redux, optimizing
                performance and efficiency. Integrated an order tracking system
                for real-time order status updates and a warranty claim system
                to streamline customer support. Collaborated with
                cross-functional teams to enhance UI/UX and integrate APIs for
                smooth data handling.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
