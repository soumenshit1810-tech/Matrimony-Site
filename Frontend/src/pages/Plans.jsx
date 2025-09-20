import React from "react";
import { FaCheckCircle, FaCrown, FaGem, FaHeart } from "react-icons/fa";

function Plans() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 dark:from-gray-900 dark:to-black py-16 px-6">
      
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 dark:text-pink-400">
          Choose Your Perfect Plan 💍
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Unlock more opportunities to find your soulmate with our membership options.
        </p>
      </div>

      {/* Plans Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Free Plan */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition p-8 text-center border-t-8 border-pink-400">
          <FaHeart className="text-pink-500 text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Free</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Start your journey for free</p>
          <h3 className="mt-6 text-4xl font-extrabold text-pink-600">₹0</h3>
          <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-400 text-left">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Create Profile</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Browse Matches</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Basic Search Filters</li>
          </ul>
          <button className="mt-8 w-full px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-xl shadow-lg font-medium transition">
            Get Started
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition p-8 text-center border-t-8 border-yellow-400 scale-105">
          <FaCrown className="text-yellow-500 text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Premium</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Most Popular Choice</p>
          <h3 className="mt-6 text-4xl font-extrabold text-pink-600">₹999 / mo</h3>
          <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-400 text-left">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Unlimited Profile Views</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Contact Members Directly</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Advanced Search Filters</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Priority Customer Support</li>
          </ul>
          <button className="mt-8 w-full px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl shadow-lg font-medium transition">
            Upgrade to Premium
          </button>
        </div>

        {/* Elite Plan */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition p-8 text-center border-t-8 border-purple-500">
          <FaGem className="text-purple-500 text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Elite</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Exclusive Privileges</p>
          <h3 className="mt-6 text-4xl font-extrabold text-pink-600">₹2999 / mo</h3>
          <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-400 text-left">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Dedicated Relationship Manager</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Personalized Matchmaking</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Appear on Top of Search</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500"/> Invitations to Elite Events</li>
          </ul>
          <button className="mt-8 w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow-lg font-medium transition">
            Go Elite
          </button>
        </div>

      </div>
    </div>
  );
}

export default Plans;
