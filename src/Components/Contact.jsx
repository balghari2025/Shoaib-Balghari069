import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
import React from "react";
const Contact = () => {
  return (
    <div
    name= "Contact"
     className="mt-20 bg-white dark:bg-[#061231]">
      
      <div className="max-w-6xl bg-white dark:bg-[#061231] mt-3 mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Contact <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400">
            Let’s work together. Feel free to reach out anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">

            <a
              href="mailto:shoaibbalghari@gmail.com"
              className="flex items-center gap-4 p-5 rounded-2xl shadow-md hover:shadow-lg transition 
                         bg-neutral-100 dark:bg-[#0b0f1a] dark:text-white"
            >
              <FaEnvelope className="text-2xl text-blue-500" />
              <span>shoaibbalghari@gmail.com</span>
            </a>

            <a
              href="https://wa.me/923555711812"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl shadow-md hover:shadow-lg transition 
                         bg-neutral-100 dark:bg-[#0b0f1a] dark:text-white"
            >
              <FaWhatsapp className="text-2xl text-green-500" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl shadow-md hover:shadow-lg transition 
                         bg-neutral-100 dark:bg-[#0b0f1a] dark:text-white"
            >
              <FaLinkedin className="text-2xl text-blue-600" />
              <span>LinkedIn Profile</span>
            </a>

          </div>

          {/* Contact Form */}
          <form className="space-y-6 p-8 rounded-2xl shadow-lg 
                           bg-neutral-100 dark:bg-[#061231]
                           border border-gray-200 dark:border-gray-800">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg 
                         bg-white dark:bg-[#0b0f1a]
                         border border-gray-300 dark:border-gray-700
                         outline-none focus:ring-2 focus:ring-blue-500
                         text-gray-800 dark:text-white transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg 
                         bg-white dark:bg-[#0b0f1a]
                         border border-gray-300 dark:border-gray-700
                         outline-none focus:ring-2 focus:ring-blue-500
                         text-gray-800 dark:text-white transition"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg 
                         bg-white dark:bg-[#0b0f1a]
                         border border-gray-300 dark:border-gray-700
                         outline-none focus:ring-2 focus:ring-blue-500
                         text-gray-800 dark:text-white transition"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-lg 
                         bg-blue-600 hover:bg-blue-700
                         text-white font-semibold 
                         transition duration-300"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </div>
    
  );
};

export default Contact;