"use client";
import { useState } from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";

const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 py-8 relative text-center">
      {/* Copyright Text */}
      <p className="text-gray-700 text-sm sm:text-base">
        © Copyright <strong>Manik</strong> All Rights Reserved
      </p>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="https://github.com/thmanik"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 border rounded-full text-gray-800 hover:text-gray-950 transition flex items-center justify-center"
        >
          <FaGithub className="w-5 h-5" />
        </a>
        <a
          href="https://www.facebook.com/mdmanik.ahmed.90038882"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 border rounded-full text-gray-800 hover:text-blue-600 transition flex items-center justify-center"
        >
          <FaFacebookF className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/md-tofazzol-hossain-manik-764544299"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 border rounded-full text-gray-800 hover:text-blue-700 transition flex items-center justify-center"
        >
          <FaLinkedin className="w-5 h-5" />
        </a>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-6">
        <a
          href="mailto:thmanik1241@gmail.com"
          className="flex items-center justify-center w-36 mx-auto px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition"
          onClick={toggleDropdown}
        >
          Get in Touch
        </a>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="fixed bottom-6 right-6 z-50 cursor-pointer bg-teal-500 text-white p-3 rounded-full shadow-md hover:bg-teal-600 transition"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <MdKeyboardArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
