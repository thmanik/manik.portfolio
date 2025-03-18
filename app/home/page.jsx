"use client";
import Image from "next/image";

const HomePage = () => {
  return (
    <section className="relative h-screen flex justify-center items-center overflow-hidden">
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
      <div className="relative z-10 text-center px-4" data-aos="zoom-out" data-aos-delay="100">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">Md Tofazzol Hossain Manik</h2>
        <p className="text-lg text-gray-600 mt-4">I'm a Professional Frontend Web Developer</p>
        <a 
          href="/about"
          className="inline-block mt-6 px-6 py-3 bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-600 transition"
        >
          About Me
        </a>
      </div>
    </section>
  );
};

export default HomePage;
