"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; 

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative min-h-[70vh] md:h-screen flex justify-center items-center overflow-hidden">
      {/* Background Image with Animation */}
      <div className="absolute inset-0 w-full h-full -z-10" data-aos="fade-in">
        <Image 
          src="/images/homePageImage.jpg" 
          alt="Hero Background" 
          layout="fill" 
          objectFit="cover" 
          priority 
          className="w-full h-full"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h2 
          className="text-3xl md:text-5xl font-bold text-gray-800"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Md Tofazzol Hossain Manik
        </h2>
        <p 
          className="text-lg text-gray-600 mt-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          I'm a Professional Frontend Web Developer
        </p>
        <a 
          href="/about"
          className="inline-block mt-6 px-6 py-3 bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-600 transition"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          About Me
        </a>
      </div>
    </section>
  );
};

export default HomePage;
