import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-200 via-pink-300 to-pink-400 dark:from-gray-800 dark:via-gray-900 dark:to-black shadow-lg mt-0">
      <div className="max-w-screen-xl mx-auto px-8 py-10 md:flex md:items-center md:justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-extrabold text-pink-700 dark:text-pink-400">
            💍 SoulConnect 
          </span>
        </div>

        
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 dark:border-gray-700"></div>

      {/* Copyright + Socials */}
      <div className="max-w-screen-xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400 align-text-center">
        <span>© {new Date().getFullYear()} SoulConnect Matrimony. Created By Soumen.</span>  
        </div>
     
    </footer>
  );
}

export default Footer;
