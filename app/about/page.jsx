import React from "react";
import Image from "next/image";
import { FaAngleRight} from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full md:w-[90%] px-4 my-10 mx-auto">
      {/* Title Section */}
      <div className="text-center">
        <p className="text-4xl font-extrabold text-gray-800">
          About Me
        </p>
        <p className="text-md md:text-lg text-gray-600 mt-2">
          Hello! My name is{" "}
          <span className="font-semibold text-gray-700">
            Md Tofazzol Hossain Manik
          </span>
          . I'm an aspiring web developer.
        </p>
        <div className="w-16 h-1 bg-[#00BBA7] mx-auto mt-4"></div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-12  mt-5 md:mt-20 gap-8 md:gap-1 ">
        {/* Profile Image Section */}
        <div className="col-span-12 md:col-span-5 flex justify-center md:justify-end md:pe-3">
          <div className="relative w-full max-w-xs md:max-w-sm">
            <div className="absolute inset-0   rounded-md "></div>
            <Image
              src="/images/profile_manik.jpg"
              className="relative w-full rounded-md"
              alt="Profile Picture"
              width={600}
              height={800}
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="col-span-12 md:col-span-7 text-start">
          <h2 className="text-2xl md:text-3xl text-center md:text-start font-bold text-gray-800">
            Frontend Developer
          </h2>
          <p className="italic text-gray-700 mt-3 leading-relaxed">
            I have strong expertise in web development, working with
            technologies like
              HTML, CSS, JavaScript, React, Firebase, Next.js, TypeScript,
              Redux
            
            , and
           MongoDB. I
            build dynamic and responsive websites that work seamlessly across
            all devices. I love usingReact.js for
            its modularity and performance, and I have experience in backend
            development using Express.js.
          </p>

          {/* Contact Info */}
          <div className="mt-5 space-y-2">
            <p className="flex  gap-3 text-gray-800">
                <FaAngleRight className="w-5 h-5 text-[#00BBA7]" />
              <strong>Phone:</strong>{" "}
              <span className="text-gray-700">+88 01631205714</span>
            </p>
            <p className="flex  gap-3 text-gray-800">
              <FaAngleRight className="w-5 h-5 text-[#00BBA7]" />
              <strong>City:</strong>{" "}
              <span className="text-gray-700">Dhaka, Bangladesh</span>
            </p>
            <p className="flex  gap-3 text-gray-800">
              <FaAngleRight className="w-5 h-5 text-[#00BBA7]" />
              <strong>Email:</strong>{" "}
              <span className="text-gray-700">email@example.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
