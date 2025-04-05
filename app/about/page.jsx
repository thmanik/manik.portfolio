"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; 

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-full px-4 py-10 mx-auto bg-gradient-to-r from-teal-50 to-white rounded-xl shadow-lg">
      {/* Title Section */}
      <div className="text-center" data-aos="fade-in">
        <p className="text-4xl font-extrabold text-gray-800">About Me</p>
        <p className="text-md md:text-lg text-gray-600 mt-2">
          Hello! My name is{" "}
          <span className="font-semibold text-gray-700">
            Md Tofazzol Hossain Manik
          </span>
          . I'm a web developer with a passion for building impactful web applications.
        </p>
        <div className="w-20 h-1 bg-[#00BBA7] mx-auto mt-6 rounded-md"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 mt-10 gap-8 md:px-10 md:gap-16">
        {/* Profile Image Section */}
        <div className="col-span-12 md:col-span-5 flex justify-center md:justify-end">
  <div className="relative w-[80%] max-w-xs md:max-w-sm mx-auto" data-aos="flip-left">
    <Image
      src="/images/profile_manik.jpg"
      className="w-full rounded-full border-4 border-[#1E2939] object-cover shadow-xl"
      alt="Profile Picture"
      width={600}
      height={800}
    />
  </div>
</div>


        {/* Text Content */}
        <div className="col-span-12 md:col-span-7 text-start" data-aos="fade-right">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center md:text-left">
            Frontend Developer
          </h2>
          <p className="italic text-gray-700 mt-4 md:mt-6 leading-relaxed text-base md:text-lg">
            I have strong expertise in web development, working with
            technologies like HTML, CSS, JavaScript, React, Firebase, Next.js, TypeScript, Redux,
            and MongoDB. I build dynamic and responsive websites that work seamlessly across
            all devices. I love using React.js for its modularity and performance, and I
            have experience in backend development using Express.js.
          </p>

          {/* Contact Info */}
          <div className="mt-8 space-y-4 text-base md:text-lg">
            <p className="flex gap-2 text-gray-800">
              <FaAngleRight className="w-5 h-5 text-[#00BBA7]" />
              <strong>Phone:</strong>{" "}
              <span className="text-gray-700">+88 01631205714</span>
            </p>
            <p className="flex gap-2 text-gray-800">
              <FaAngleRight className="w-5 h-5 text-[#00BBA7]" />
              <strong>City:</strong>{" "}
              <span className="text-gray-700">Dhaka, Bangladesh</span>
            </p>
            <p className="flex gap-2 text-gray-800">
              <FaAngleRight className="w-5 h-5 text-[#00BBA7]" />
              <strong>Email:</strong>
              <span className="text-gray-700">thmanik1241@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
