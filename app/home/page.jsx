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
    <section className="relative min-h-[70vh] md:h-screen flex justify-center items-center overflow-hidden bg-[#0D1117]">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-20" data-aos="fade-in">
        <Image 
          src="/images/homePageImage.jpg" 
          alt="Hero Background" 
          layout="fill" 
          objectFit="cover" 
          priority 
          className="w-full h-full opacity-20"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1117]/80 via-[#0B1622]/80 to-[#0D1117]/80 -z-10"></div>

      {/* Animated Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute w-4 h-4 bg-[#2F81F7] rounded-full opacity-30 animate-float top-10 left-1/4"></span>
        <span className="absolute w-3 h-3 bg-[#58A6FF] rounded-full opacity-30 animate-float-slow top-1/3 left-2/3"></span>
        <span className="absolute w-5 h-5 bg-[#2F81F7] rounded-full opacity-20 animate-float top-2/3 left-1/5"></span>
        <span className="absolute w-2 h-2 bg-[#58A6FF] rounded-full opacity-25 animate-float-slow top-1/4 left-3/4"></span>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <h2 
          className="text-3xl md:text-5xl font-bold text-[#2F81F7]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Md Tofazzol Hossain Manik
        </h2>
        <p 
          className="text-lg text-[#8B949E] mt-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          I'm a Professional Frontend Web Developer
        </p>
        <a 
          href="/about"
          className="inline-block mt-6 px-6 py-3 rounded-md shadow-md transition bg-[#2F81F7] hover:bg-[#58A6FF] text-white font-medium"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          About Me
        </a>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HomePage;
