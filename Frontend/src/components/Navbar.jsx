import React from "react";
// import {link} from "react-router-dom"
import logo from '../assets/logo.png'

 function Navbar  ()  {
  return (
    <nav className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} className="mr-3 h-6 sm:h-9 rounded-full" alt="matrimony logo" />
          <span className="text-white text-2xl font-extrabold tracking-wide">💍 ShaadiSangam</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8 text-white font-medium">
          <a href="/" className="hover:text-yellow-200 transition duration-300">Home</a>
          <a href="/search" className="hover:text-yellow-200 transition duration-300">Search</a>
          <a href="/plans" className="hover:text-yellow-200 transition duration-300">Plans</a>
          <a href="/successstories" className="hover:text-yellow-200 transition duration-300">Success Stories</a>
          <a href="/contact" className="hover:text-yellow-200 transition duration-300">Contact</a>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <a href="/login" className="px-4 py-2 bg-white text-pink-600 rounded-full font-semibold hover:bg-yellow-200 transition duration-300">
          Login
          </a>
          <a href="/register" className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-full font-semibold hover:bg-yellow-300 transition duration-300">
          Register
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

