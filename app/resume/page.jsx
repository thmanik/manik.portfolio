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
            Dedicated and detail-oriented designer with a passion for crafting visually appealing and user-friendly designs.
          </p>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-4"></div>
        </div>

        {/* Resume Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column (Summary & Education) */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4">Summary</h3>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold text-gray-800">Brandon Johnson</h4>
              <p className="italic text-gray-600 mt-2">
                Creative and deadline-driven Graphic Designer with 3+ years of experience crafting visually appealing designs.
              </p>
              <ul className="mt-4 text-gray-600 space-y-2">
                <li className="flex items-center">
                  <FaMapMarkedAlt className="mr-2 text-green-500" /> Portland par 127, Orlando, FL
                </li>
                <li className="flex items-center">
                  <FaPhoneAlt className="mr-2 text-green-500" /> (123) 456-7891
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-2 text-green-500" /> alice.barkley@example.com
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold border-l-4 border-green-500 pl-4 mt-8 mb-4">Education</h3>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="font-bold">Master of Fine Arts & Graphic Design</h4>
              <h5 className="text-gray-600">2015 - 2016</h5>
              <p className="text-gray-500">Rochester Institute of Technology, Rochester, NY</p>
              <p className="text-gray-600 mt-2">Developed creative problem-solving skills and advanced design techniques.</p>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg mt-4">
              <h4 className="font-bold">Bachelor of Fine Arts & Graphic Design</h4>
              <h5 className="text-gray-600">2010 - 2014</h5>
              <p className="text-gray-500">Rochester Institute of Technology, Rochester, NY</p>
              <p className="text-gray-600 mt-2">Gained extensive knowledge in digital and print media.</p>
            </div>
          </div>

          {/* Right Column (Professional Experience) */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4">Professional Experience</h3>
            
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h4 className="font-bold">Senior Graphic Design Specialist</h4>
              <h5 className="text-gray-600">2019 - Present</h5>
              <p className="text-gray-500">Experion, New York, NY</p>
              <ul className="mt-4 text-gray-600 list-disc pl-5 space-y-2">
                <li>Led the design and development of marketing materials.</li>
                <li>Managed a team of designers and provided creative direction.</li>
                <li>Ensured the accuracy and quality of all visual assets.</li>
                <li>Handled production budgets ranging from $2,000 - $25,000.</li>
              </ul>
            </div>

            <div className="bg-white p-6 shadow-lg rounded-lg mt-4">
              <h4 className="font-bold">Graphic Design Specialist</h4>
              <h5 className="text-gray-600">2017 - 2018</h5>
              <p className="text-gray-500">Stepping Stone Advertising, New York, NY</p>
              <ul className="mt-4 text-gray-600 list-disc pl-5 space-y-2">
                <li>Designed branding materials, including logos and brochures.</li>
                <li>Managed multiple projects under tight deadlines.</li>
                <li>Consulted with clients to create compelling visual narratives.</li>
                <li>Developed interactive design presentations.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
