"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
      offset: 80,
    });
  }, []);

  return (
    <section className="relative w-full py-16 bg-[#0D1117] overflow-hidden">
      {/* Background gradient & dots */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1117]/90 via-[#0B1622]/90 to-[#0D1117]/90 -z-10"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <span className="absolute w-4 h-4 bg-[#2F81F7] rounded-full opacity-20 animate-float top-10 left-1/4"></span>
        <span className="absolute w-3 h-3 bg-[#58A6FF] rounded-full opacity-20 animate-float-slow top-1/3 left-2/3"></span>
        <span className="absolute w-5 h-5 bg-[#2F81F7] rounded-full opacity-10 animate-float top-2/3 left-1/5"></span>
        <span className="absolute w-2 h-2 bg-[#58A6FF] rounded-full opacity-15 animate-float-slow top-1/4 left-3/4"></span>
      </div>

      {/* Title */}
      <div className="text-center px-4" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold text-[#2F81F7]">About Me</h2>
        <p className="mt-3 text-[#8B949E] max-w-2xl mx-auto">
          Hello! I’m <span className="font-semibold text-[#C9D1D9]">Md Tofazzol Hossain Manik</span>, 
          a passionate frontend web developer dedicated to crafting interactive, visually appealing, 
          and user-friendly web experiences.
        </p>
        <div className="w-20 h-1 bg-[#2F81F7] mx-auto mt-6 rounded-md"></div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14 px-6 md:px-16 items-center">
        
        {/* Mobile Image First */}
        <div 
          className="flex justify-center md:order-2"
          data-aos="fade-left"
        >
          <div className="relative w-[80%] max-w-sm">
            <Image
              src="/images/profile_manik.jpg"
              alt="Profile Picture"
              width={600}
              height={800}
              className="rounded-lg border-4 border-[#2F81F7] shadow-xl object-cover"
            />
          </div>
        </div>

        {/* Text & Skills */}
        <div 
          className="text-start md:order-1"
          data-aos="fade-right"
        >
          <h3 className="text-2xl font-bold text-[#C9D1D9] mb-4">
            Frontend Developer
          </h3>
          <p className="text-[#8B949E] mb-8 leading-relaxed">
            I have strong expertise in web development, working with technologies
            like HTML, CSS, JavaScript, React, Firebase, Next.js, TypeScript, Redux,
            and MongoDB. I build dynamic and responsive websites that work seamlessly
            across all devices. I love using React.js for its modularity and performance,
            and I have experience in backend development using Express.js.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#161B22] p-5 rounded-lg shadow-lg hover:shadow-[#2F81F7]/20 transition text-center">
              <h4 className="text-lg font-semibold text-[#2F81F7]">Frontend</h4>
              <p className="text-[#8B949E] text-sm mt-1">React, Next.js, Tailwind CSS</p>
            </div>
            <div className="bg-[#161B22] p-5 rounded-lg shadow-lg hover:shadow-[#2F81F7]/20 transition text-center">
              <h4 className="text-lg font-semibold text-[#2F81F7]">Backend</h4>
              <p className="text-[#8B949E] text-sm mt-1">Node.js, Express.js, MongoDB</p>
            </div>
            <div className="bg-[#161B22] p-5 rounded-lg shadow-lg hover:shadow-[#2F81F7]/20 transition text-center sm:col-span-2">
              <h4 className="text-lg font-semibold text-[#2F81F7]">UI/UX Design</h4>
              <p className="text-[#8B949E] text-sm mt-1">Figma, Responsive Design</p>
            </div>
          </div>
        </div>
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

export default About;
