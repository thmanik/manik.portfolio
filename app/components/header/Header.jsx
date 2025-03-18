"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Link from "next/link";

const navItems = [
  { name: "Home", link: "/home" },
  { name: "About", link: "/about" },
  { name: "Resume", link: "/resume" },
  { name: "Services", link: "/services" },
  { name: "Portfolio", link: "/portfolio" },
  { name: "Dropdown", link: "/dropdown" },
  { name: "Contact", link: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Manik</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700">
          {navItems.map((item, index) => (
            <li key={index}>
             <Link
  href={item.link}
  className={`relative cursor-pointer text-gray-800 transition-colors duration-300 ${
    pathname === item.link ? "text-teal-500 font-semibold" : "hover:text-teal-500"
  }`}
>
  {item.name}
  <span
    className={`absolute left-0 bottom-0 w-full h-[2px] bg-teal-400 transition-all duration-300 scale-x-0 origin-left ${
      pathname === item.link ? "scale-x-100" : "hover:scale-x-100"
    }`}
  ></span>
</Link>

            </li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex space-x-3 text-gray-500">
          <FaFacebookF className="cursor-pointer hover:text-gray-700" />
          <FaInstagram className="cursor-pointer hover:text-gray-700" />
          <FaLinkedin className="cursor-pointer hover:text-gray-700" />
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center gap-4">
          {/* Social Icons */}
          <div className="flex space-x-3 text-gray-500">
            <FaFacebookF className="cursor-pointer hover:text-gray-700" />
            <FaInstagram className="cursor-pointer hover:text-gray-700" />
            <FaLinkedin className="cursor-pointer hover:text-gray-700" />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu}>
            {isOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-gray-100 shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="absolute top-5 right-5" onClick={toggleMenu}>
          <RxCross2 size={28} />
        </button>

        <ul className="flex flex-col items-center mt-16 space-y-6 text-gray-700">
          {navItems.map((item, index) => (
            <li key={index} onClick={toggleMenu}>
              <Link
                href={item.link}
                className={`text-lg ${
                  pathname === item.link ? "text-teal-500 font-semibold" : "hover:text-teal-500"
                } cursor-pointer`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
