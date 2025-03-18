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
        <a href="#" className="p-3 border rounded-full hover:bg-gray-200 transition">
          <FaGithub size={20} />
        </a>
        <a href="#" className="p-3 border rounded-full hover:bg-gray-200 transition">
          <FaFacebookF size={20} />
        </a>
        <a href="#" className="p-3 border rounded-full hover:bg-gray-200 transition">
          <FaLinkedin size={20} />
        </a>
      </div>

      {/* Dropdown Section */}
      <div className="mt-6">
        <button
          className="flex items-center justify-center mx-auto px-4 py-2 bg-teal-500 text-white rounded-md"
          onClick={toggleDropdown}
        >
          More Info {isDropdownOpen ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
        </button>

        {isDropdownOpen && (
          <div className="mt-4 p-4 bg-white shadow-md rounded-md">
            <p className="text-gray-700">This is additional information in the dropdown.</p>
          </div>
        )}
      </div>

      {/* Scroll to Top Button */}
      <button
        className="fixed bottom-6 right-6 bg-teal-500 text-white p-3 rounded-full shadow-md hover:bg-teal-600 transition"
        onClick={scrollToTop}
      >
        <MdKeyboardArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
