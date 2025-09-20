import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHeart } from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 dark:from-gray-900 dark:to-black py-16 px-6">
      
      {/* Hero Section */}
      <div className="text-center mb-12">
        <FaHeart className="text-pink-600 text-5xl mx-auto mb-4 animate-bounce" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 dark:text-pink-400">
          Get in Touch 💌
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We’d love to hear from you! Whether you have questions, feedback, or 
          need assistance, the <span className="font-bold">SoulConnect Matrimony</span> 
          team is here to help you on your journey of love.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-pink-400 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-xl shadow-lg font-semibold text-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-br from-pink-100 via-pink-200 to-pink-300 dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-2xl shadow-lg p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Contact Information
          </h2>
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-pink-600 text-2xl" />
              <p className="text-lg">+91 9749011391</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-pink-600 text-2xl" />
              <p className="text-lg">support@soulconnect.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-pink-600 text-2xl" />
              <p className="text-lg">123, Love Street, Kolkata, India</p>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8">
            <iframe
              title="map"
              className="w-full h-60 rounded-xl shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.979!2d88.3639!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02763f2b8d3a21%3A0xf1c1c6b7b2c4ef2!2sKolkata!5e0!3m2!1sen!2sin!4v1631681342268!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
