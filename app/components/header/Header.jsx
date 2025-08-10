"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import Link from "next/link";

const navItems = [
  { name: "Home", link: "/home" },
  { name: "About", link: "/about" },
  { name: "Resume", link: "/resume" },
  { name: "Skills", link: "/skills" },
  { name: "Projects", link: "/projects" },
  { name: "Contact", link: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#0A0F1C] py-4 px-6 shadow-md shadow-[#0B1623] z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl text-white font-bold">Manik</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className={`relative cursor-pointer transition-colors duration-300 ${
                    pathname === item.link
                      ? "text-[#3B82F6] font-semibold"
                      : "text-gray-300 hover:text-[#3B82F6]"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#3B82F6] transition-all duration-300 scale-x-0 origin-left ${
                      pathname === item.link ? "scale-x-100" : "hover:scale-x-100"
                    }`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex space-x-3 text-gray-400">
            <a
              href="https://www.facebook.com/mdmanik.ahmed.90038882"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="cursor-pointer text-lg hover:text-[#3B82F6]" />
            </a>
            <a
              href="https://github.com/thmanik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer text-lg hover:text-[#3B82F6]" />
            </a>
            <a
              href="https://www.linkedin.com/in/md-tofazzol-hossain-manik-764544299"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="cursor-pointer text-lg hover:text-[#3B82F6]" />
            </a>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden flex items-center gap-4">
            {/* Social Icons */}
            <div className="flex space-x-3 text-gray-400">
              <a
                href="https://www.facebook.com/mdmanik.ahmed.90038882"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="cursor-pointer hover:text-[#3B82F6]" />
              </a>
              <a
                href="https://github.com/thmanik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="cursor-pointer hover:text-[#3B82F6]" />
              </a>
              <a
                href="https://www.linkedin.com/in/md-tofazzol-hossain-manik-764544299"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="cursor-pointer hover:text-[#3B82F6]" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu}>
              {isOpen ? (
                <RxCross2 className="text-gray-300" size={24} />
              ) : (
                <RxHamburgerMenu className="text-gray-300" size={24} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Push content down */}
      <div className="pt-16"></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-4/5 max-w-xs h-full bg-[#0D1117] shadow-2xl transform transition-transform duration-300 z-50 rounded-l-xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-gray-300 hover:text-[#3B82F6] transition duration-300"
          onClick={toggleMenu}
        >
          <RxCross2 size={28} />
        </button>

        {/* Menu Items */}
        <ul className="flex flex-col items-center mt-20 space-y-5 px-4">
          {navItems.map((item, index) => (
            <li
              key={index}
              onClick={toggleMenu}
              className={`w-full group ${
                pathname === item.link
                  ? "border border-[#3B82F6] bg-[#3B82F6]/10"
                  : "border border-white/10"
              } rounded-xl text-center py-3 px-2 transition-all duration-300 hover:bg-[#3B82F6]/10 hover:border-[#3B82F6] hover:scale-[1.03]`}
            >
              <Link
                href={item.link}
                className={`block w-full text-lg tracking-wide ${
                  pathname === item.link
                    ? "text-[#3B82F6] font-semibold"
                    : "text-gray-300 group-hover:text-[#3B82F6]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
