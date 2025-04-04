"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Swal from 'sweetalert2'; 
const ContactSection = () => {
  const { register, handleSubmit, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState(null);

  const sendEmail = async (data) => {
    try {
      await emailjs.send(
        "service_v7yrlj4", // Replace with your EmailJS Service ID
        "template_u2g2er7", // Replace with your EmailJS Template ID
        {
          user_name: data.name,
          user_email: data.email,
          user_subject: data.subject,
          user_message: data.message,
        },
        "iNL1-Zac1PKMZ8p92" // Replace with your EmailJS Public Key
      );
  
      // Show success message with SweetAlert2
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent! Please wait for our response.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#00BBA7',
      });
  
      reset(); // Reset form
    } catch (error) {
      console.error("Error sending email:", error);
  
      // Show error message with SweetAlert2
      Swal.fire({
        title: 'Error!',
        text: 'Failed to send message. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#FF6F61',
      });
    }
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
      Get in Touch
    </h2>
    <p className="mt-4 text-lg text-gray-600">
      We'd love to hear from you! Feel free to reach out for any inquiries or feedback.
    </p>
  </div><div className="w-20 h-1 bg-[#00BBA7] mx-auto mt-6 rounded-md"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {/* Left Section - Contact Info */}
        <div className="bg-white border-1 border-gray-100 p-6 rounded-lg" data-aos="fade-up">
          <div className="flex items-center gap-4 mb-4">
            <FaMapMarkerAlt className="text-[#00BBA7] text-2xl" />
            <div>
              <h4 className="font-semibold text-lg">Address</h4>
              <p className="text-gray-600 text-sm">Uttara, Dhaka-1230, Bangladesh</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <FaPhoneAlt className="text-[#00BBA7] text-2xl" />
            <div>
              <h4 className="font-semibold text-lg">Call Us</h4>
              <p className="text-gray-600 text-sm">+88 0163-1205714</p>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <FaEnvelope className="text-[#00BBA7] text-2xl" />
            <div>
              <h4 className="font-semibold text-lg">Email Us</h4>
              <p className="text-gray-600 text-sm">thmanik1241@gmail.com</p>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-lg overflow-hidden h-48 mt-4">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.9081706769295!2d90.38075507516807!3d23.874673384094684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c52469e82e47%3A0x3d32b30d218e88e6!2sUttara%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1712345678901!5m2!1sen!2sbd"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white  border-1 border-gray-100 p-6 rounded-lg" data-aos="fade-up">
          <form onSubmit={handleSubmit(sendEmail)} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: "Name is required" })}
                className="p-3 border border-gray-300 rounded-md focus:outline-[#00BBA7] w-full"
              />
              <input
                type="email"
                placeholder="Your Email"
                {...register("email", { required: "Email is required" })}
                className="p-3 border border-gray-300 rounded-md focus:outline-[#00BBA7] w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              {...register("subject", { required: "Subject is required" })}
              className="p-3 border border-gray-300 rounded-md focus:outline-[#00BBA7] w-full"
            />
            <textarea
              placeholder="Message"
              {...register("message", { required: "Message is required" })}
              rows={5}
              className="p-3 border border-gray-300 rounded-md focus:outline-[#00BBA7] w-full"
            ></textarea>

            <button
              type="submit"
              className="bg-[#00BBA7] text-white cursor-pointer font-medium py-3 px-6 rounded-md hover:bg-[#009BA9] transition-all w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>

          {/* Success Message */}
          {successMessage && (
            <p className={`text-center mt-4 font-semibold ${successMessage.includes("✅") ? "text-green-600" : "text-red-600"}`}>
              {successMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
