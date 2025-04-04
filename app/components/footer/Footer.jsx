"use client";
import { useState } from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 py-6 relative text-center">
      {/* Copyright Text */}
      <p className="text-gray-700">
        © Copyright <strong>Manik</strong> All Rights Reserved
      </p>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://github.com/thmanik" className="p-3 border rounded-full text-gray-800 hover:text-gray-950 transition">
          <FaGithub size={20} />
        </a>
        <a href="https://www.facebook.com/mdmanik.ahmed.90038882" className="p-3 border rounded-full  hover:text-blue-600 transition">
          <FaFacebookF size={20} />
        </a>
        <a href="https://www.linkedin.com/in/md-tofazzol-hossain-manik-764544299" className="p-3 border rounded-full hover:text-blue-700 transition">
          <FaLinkedin size={20} />
        </a>
      </div>
    
 
       {/* Call-to-Action Section */}
      <div className="mt-6">
        <a
        href="mailto:thmanik1241@gmail.com"
          className="flex items-center justify-center w-32 mx-auto px-4 py-2 bg-teal-500 text-white rounded-md"
          onClick={toggleDropdown}
        >
          Get in Touch
        </a>

        
        
      </div>

      {/* Scroll to Top Button */}
      <button
        className="fixed bottom-6 right-6 cursor-pointer bg-teal-500 text-white p-3 rounded-full shadow-md hover:bg-teal-600 transition"
        onClick={scrollToTop}
      >
        <MdKeyboardArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
