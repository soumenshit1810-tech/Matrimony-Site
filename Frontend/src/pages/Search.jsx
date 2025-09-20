import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 dark:from-gray-900 dark:to-black py-16 px-6">
      
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 dark:text-pink-400">
          Find Your Life Partner 💕
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Use filters below to discover your most compatible matches.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
        
        {/* Filters Sidebar */}
        <aside className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 lg:col-span-1">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Search Filters
          </h2>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Gender</label>
            <select className="w-full p-3 border rounded-lg focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:text-white">
              <option>Any</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          {/* Age */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Age Range</label>
            <div className="flex gap-3">
              <input type="number" placeholder="Min" className="w-1/2 p-3 border rounded-lg dark:bg-gray-700 dark:text-white" />
              <input type="number" placeholder="Max" className="w-1/2 p-3 border rounded-lg dark:bg-gray-700 dark:text-white" />
            </div>
          </div>

          {/* Religion */}
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Religion</label>
            <select className="w-full p-3 border rounded-lg focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:text-white">
              <option>Any</option>
              <option>Hindu</option>
              <option>Muslim</option>
              <option>Christian</option>
              <option>Sikh</option>
              <option>Buddhist</option>
            </select>
          </div>

          {/* Location */}
          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Location</label>
            <input type="text" placeholder="City / State" className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white" />
          </div>

          {/* Search Button */}
          <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-xl shadow-lg font-medium transition">
            <FaSearch /> Search
          </button>
        </aside>

        {/* Results */}
        <main className="lg:col-span-3">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Search Results
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Profile Card Example */}
            {[1, 2, 3, 4, 5, 6].map((profile) => (
              <div key={profile} className="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-xl transition p-6 text-center">
                <img
                  src={`https://randomuser.me/api/portraits/${profile % 2 === 0 ? "women" : "men"}/${profile + 10}.jpg`}
                  alt="Profile"
                  className="w-28 h-28 mx-auto rounded-full border-4 border-pink-200 shadow"
                />
                <h3 className="mt-4 text-xl font-semibold text-pink-700 dark:text-pink-400">
                  {profile % 2 === 0 ? "Ananya" : "Sanjib"} {profile}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">25 yrs • Kolkata</p>
                <p className="text-gray-500 dark:text-gray-400">Hindu • Engineer</p>
                <button className="mt-4 px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg shadow transition">
                  View Profile
                </button>
              </div>
            ))}

          </div>
        </main>
      </div>
    </div>
  );
}

export default Search;
