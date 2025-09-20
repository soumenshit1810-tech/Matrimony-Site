import React from "react";
import { FaHeart } from "react-icons/fa";
import pic1 from '../../assets/login.png'

function Login() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Background Image */}
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${pic1})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-pink-600/50 to-black/60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-8">
          <FaHeart className="text-6xl mb-4 animate-pulse text-pink-300" />
          <h1 className="text-4xl font-extrabold leading-snug">
            Welcome Back to <br /> SoulConnect 💍
          </h1>
          <p className="mt-4 text-lg text-pink-100">
            Your journey of love continues... Log in and discover your perfect match today!
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-pink-100 dark:from-gray-900 dark:to-black">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-center text-pink-700 dark:text-pink-400 mb-6">
            Login to Your Account
          </h2>
          <form className="space-y-6">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 
              bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
              focus:ring-2 focus:ring-pink-400 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 
              bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 
              focus:ring-2 focus:ring-pink-400 outline-none"
            />
            <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="accent-pink-600" />
                <span>Remember Me</span>
              </label>
              <a href="/forgot-password" className="text-pink-600 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-pink-600 hover:bg-pink-700 
              text-white rounded-xl shadow-lg font-semibold text-lg transition"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600 dark:text-gray-400">
            Don’t have an account?{" "}
            <a
              href="/register"
              className="text-pink-600 font-semibold hover:underline"
            >
              Register Now
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
