import React from "react";
import { FaHeart, FaUserFriends, FaLock, FaStar } from "react-icons/fa";
import picture from '../assets/image2.png'

function Home() {
  return (
    <div className="bg-gradient-to-b from-pink-50 via-white to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-black">

      {/* Hero Section */}

      <section
        className="relative text-center py-35 px-6 bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${picture})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

        {/* Content goes above image */}
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Find Your Perfect Match ❤️
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
            Join <span className="font-bold text-fuchsia-800">SoulConnect Matrimony</span>,
            where hearts unite, families connect, and love stories begin.
            Start your journey today!
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/register"
              className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-xl shadow-lg text-lg font-medium transition"
            >
              Register Free
            </a>
            <a
              href="/plans"
              className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-pink-600 rounded-xl shadow-lg text-lg font-medium transition"
            >
              View Plans
            </a>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
          Why Choose SoulConnect?
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 bg-pink-50 dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
            <FaHeart className="text-pink-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Verified Profiles
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Every profile is manually verified to ensure authenticity and trust.
            </p>
          </div>
          <div className="p-8 bg-pink-50 dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
            <FaUserFriends className="text-pink-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Personalized Matches
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              AI-powered matchmaking to find your most compatible life partner.
            </p>
          </div>
          <div className="p-8 bg-pink-50 dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition">
            <FaLock className="text-pink-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Privacy First
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Your data and privacy are always protected with top security.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-6 bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 dark:from-gray-800 dark:via-gray-900 dark:to-black">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
          Success Stories 🌸
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
            <FaStar className="text-yellow-500 text-3xl mb-4 mx-auto" />
            <p className="text-gray-700 dark:text-gray-300">
              “I met my soulmate on SoulConnect. We couldn’t be happier! Thank you for bringing us together.”
            </p>
            <h4 className="mt-4 font-semibold text-pink-700">– Arjun & Ritu</h4>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
            <FaStar className="text-yellow-500 text-3xl mb-4 mx-auto" />
            <p className="text-gray-700 dark:text-gray-300">
              “Safe, genuine, and easy to use. SoulConnect made my marriage journey stress-free.”
            </p>
            <h4 className="mt-4 font-semibold text-pink-700">– Sujit & Roslen</h4>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow hover:shadow-lg transition text-center">
            <FaStar className="text-yellow-500 text-3xl mb-4 mx-auto" />
            <p className="text-gray-700 dark:text-gray-300">
              “The best matrimony site! Great matches and amazing support throughout.”
            </p>
            <h4 className="mt-4 font-semibold text-pink-700">– Vikram & Anjali</h4>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-4xl font-extrabold text-pink-700 dark:text-pink-400 mb-6">
          Ready to Begin Your Journey? 💕
        </h2>
        <a
          href="/register"
          className="px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white rounded-2xl shadow-lg text-xl font-semibold transition"
        >
          Join Now
        </a>
      </section>
    </div>
  );
}

export default Home;
