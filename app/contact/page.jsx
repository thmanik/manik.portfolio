"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import Swal from "sweetalert2";

const ContactSection = () => {
  const { register, handleSubmit, reset } = useForm();
  const [sending, setSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  const sendEmail = async (data) => {
    setSending(true);
    try {
      await emailjs.send(
        "service_v7yrlj4",
        "template_u2g2er7",
        {
          user_name: data.name,
          user_email: data.email,
          user_subject: data.subject,
          user_message: data.message,
        },
        "iNL1-Zac1PKMZ8p92"
      );

      Swal.fire({
        title: "Success!",
        text: "Your message has been sent! Please wait for our response.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#00C2FF",
      });

      setSuccessMessage("✅ Message sent successfully");
      reset();
    } catch (error) {
      console.error("Error sending email:", error);

      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#FF6F61",
      });

      setSuccessMessage("❌ Failed to send message");
    } finally {
      setSending(false);
      setTimeout(() => setSuccessMessage(null), 5000);
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Decorative gradient blobs */}
      <div
        aria-hidden
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-tr from-[#002235] to-[#001827] opacity-60 blur-3xl transform -rotate-12 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-28 -right-24 w-80 h-80 rounded-full bg-gradient-to-br from-[#001628] to-[#001a2b] opacity-50 blur-2xl transform rotate-6 pointer-events-none"
      />

      {/* Main gradient background */}
      <div className="bg-gradient-to-b from-[#0B1623] via-[#0F2231] to-[#142236] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Get in Touch
            </h2>
            <p className="mt-3 text-lg text-[#B0B8C4] max-w-2xl mx-auto">
              Have a project, question or just want to say hi? Send a message —
              I usually reply within 24–48 hours.
            </p>
            <div className="mx-auto mt-6 w-28 h-1 rounded-full bg-[#00C2FF]" />
          </div>

          {/* Content card */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: Info + Map */}
              <div
                className="lg:col-span-5 transform transition duration-400 hover:-translate-y-1"
              >
                <div className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.04)] rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:bg-[rgba(255,255,255,0.02)]">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-br from-[#00C2FF] to-[#1E90FF] p-3 rounded-lg shadow-sm">
                      <FaMapMarkerAlt className="text-[#0B1623] text-xl" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Our Office</h4>
                      <p className="text-[#B0B8C4] text-sm">
                        Uttara, Dhaka-1230, Bangladesh
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[rgba(0,194,255,0.08)] p-3 rounded-lg">
                      <FaPhoneAlt className="text-[#00C2FF] text-lg" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Call Us</h4>
                      <p className="text-[#B0B8C4] text-sm">+88 0163-1205714</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[rgba(30,144,255,0.08)] p-3 rounded-lg">
                      <FaEnvelope className="text-[#1E90FF] text-lg" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <p className="text-[#B0B8C4] text-sm">
                        thmanik1241@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[rgba(0,194,255,0.08)] p-3 rounded-lg">
                      <FiClock className="text-[#00C2FF] text-lg" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Office Hours</h4>
                      <p className="text-[#B0B8C4] text-sm">Mon - Fri, 9:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl overflow-hidden border border-[rgba(255,255,255,0.04)]">
                    <iframe
                      className="w-full h-48"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.9081706769295!2d90.38075507516807!3d23.874673384094684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c52469e82e47%3A0x3d32b30d218e88e6!2sUttara%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1712345678901!5m2!1sen!2sbd"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Right: Glass Form */}
              <div className="lg:col-span-7 transform transition duration-400 hover:-translate-y-1">
                <div className="relative">
                  <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-[#002233]/40 via-transparent to-[#001827]/30 blur-lg opacity-60 pointer-events-none" />
                  <div className="relative bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                    <p className="text-sm text-[#B0B8C4] mb-6">
                      Tell me about your project — the more details the better.
                    </p>

                    <form onSubmit={handleSubmit(sendEmail)} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Your Name"
                          {...register("name", { required: true })}
                          className="p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] text-white placeholder-[#8f99a6] focus:outline-none focus:ring-2 focus:ring-[#00C2FF] transition"
                        />
                        <input
                          type="email"
                          placeholder="Your Email"
                          {...register("email", { required: true })}
                          className="p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] text-white placeholder-[#8f99a6] focus:outline-none focus:ring-2 focus:ring-[#00C2FF] transition"
                        />
                      </div>

                      <input
                        type="text"
                        placeholder="Subject"
                        {...register("subject", { required: true })}
                        className="w-full p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] text-white placeholder-[#8f99a6] focus:outline-none focus:ring-2 focus:ring-[#00C2FF] transition"
                      />

                      <textarea
                        placeholder="Message"
                        {...register("message", { required: true })}
                        rows={6}
                        className="w-full p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.03)] text-white placeholder-[#8f99a6] focus:outline-none focus:ring-2 focus:ring-[#00C2FF] transition"
                      />

                      <div className="flex items-center gap-4 justify-between flex-col sm:flex-row">
                        <button
                          type="submit"
                          disabled={sending}
                          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#00C2FF] to-[#1E90FF] text-[#0B1623] font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-0.5 transition-all disabled:opacity-60"
                        >
                          {sending ? "Sending..." : "Send Message"}
                        </button>

                        <div className="text-sm text-[#B0B8C4]">
                          Or email directly:{" "}
                          <a
                            href="mailto:thmanik1241@gmail.com"
                            className="text-[#00C2FF] underline"
                          >
                            thmanik1241@gmail.com
                          </a>
                        </div>
                      </div>

                      {successMessage && (
                        <p
                          className={`mt-3 text-sm font-medium ${
                            successMessage.includes("✅") ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {successMessage}
                        </p>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer note */}
            <div className="mt-12 text-center text-sm text-[#9aa8b6]">
              <span>© {new Date().getFullYear()} Your Name. Built with care.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
