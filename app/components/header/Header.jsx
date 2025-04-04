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
  { name: "Portfolio", link: "/portfolio" },
  { name: "Contact", link: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-100 py-4 px-6 shadow-md z-50">
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
  <a href="https://www.facebook.com/mdmanik.ahmed.90038882" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="cursor-pointer text-lg hover:text-blue-600" />
  </a>
  <a href="https://github.com/thmanik" target="_blank" rel="noopener noreferrer">
    <FaGithub className="cursor-pointer text-lg hover:text-gray-700" />
  </a>
  <a href="https://www.linkedin.com/in/md-tofazzol-hossain-manik-764544299" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="cursor-pointer text-lg hover:text-blue-700" />
  </a>
</div>


          {/* Mobile Header */}
          <div className="md:hidden flex items-center gap-4">
            {/* Social Icons */}
            <div className="flex space-x-3 text-gray-500">
            <a href="https://www.facebook.com/mdmanik.ahmed.90038882" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="cursor-pointer hover:text-blue-600" />
  </a>
  <a href="https://github.com/thmanik" target="_blank" rel="noopener noreferrer">
    <FaGithub className="cursor-pointer hover:text-gray-700" />
  </a>
  <a href="https://www.linkedin.com/in/md-tofazzol-hossain-manik-764544299" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="cursor-pointer hover:text-blue-700" />
  </a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu}>
              {isOpen ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Push content down to avoid overlap */}
      <div className="pt-16"></div>

      {/* Mobile Sidebar */}
      <div
  className={`fixed top-0 right-0 w-3/4 h-full bg-[#1E2939] shadow-lg transform transition-transform duration-300 z-50 ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <button className="absolute top-5 right-5 text-white" onClick={toggleMenu}>
    <RxCross2 size={28} />
  </button>

  <ul className="flex flex-col items-center mt-16 space-y-4 text-white">
    {navItems.map((item, index) => (
      <li
        key={index}
        onClick={toggleMenu}
        className={`w-3/4  ${pathname == item.link ? " border border-teal-700":" border  border-white"}rounded-lg text-center py-3 transition-all duration-200 hover:bg-teal-500 hover:text-white cursor-pointer`}
      >
        <Link
          href={item.link}
          className={`block w-full text-lg ${
            pathname == item.link ? "text-teal-700 font-semibold  " : "hover:text-white"
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
