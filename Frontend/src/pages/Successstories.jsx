import React from "react";
import { FaHeart } from "react-icons/fa";
import Picture1 from '../assets/image3.png'
import picture2 from '../assets/image4.png'
import picture3 from '../assets/image5.png'

const stories = [
  {
    id: 1,
    name: "Arjun ❤️ Ritu",
    img: Picture1,
    story:
      "We met on SoulConnect and instantly felt the spark. Within months, our families met, and today we are happily married. Thank you SoulConnect for making this possible!",
    date: "Married on Jan 2024",
  },
  {
    id: 2,
    name: "Sujit ❤️ Roslen",
    img: picture2,
    story:
      "SoulConnect brought us together when we least expected it. Now, every day feels like a beautiful journey of love and togetherness.",
    date: "Married on Aug 2023",
  },
  {
    id: 3,
    name: "Vikram ❤️ Anjali",
    img: picture3,
    story:
      "We found each other through SoulConnect’s personalized matchmaking. Our story proves that love truly knows no boundaries!",
    date: "Married on Dec 2022",
  },
];

function SuccessStories() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 dark:from-gray-900 dark:to-black py-16 px-6">
      {/* Page Header */}
      <div className="text-center mb-12">
        <FaHeart className="text-pink-600 text-5xl mx-auto mb-4 animate-pulse" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-700 dark:text-pink-400">
          Success Stories 💕
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Every match is a love story waiting to be written. Here are some of
          our happy couples who found their soulmate on{" "}
          <span className="font-bold">SoulConnect Matrimony</span>.
        </p>
      </div>

      {/* Stories Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {stories.map((story) => (
          <div
            key={story.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition p-6 text-center flex flex-col"
          >
            <img
              src={story.img}
              alt={story.name}
              className="w-40 h-40 rounded-full mx-auto border-4 border-pink-400 object-cover shadow-md"
            />
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mt-4">
              {story.name}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {story.date}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {story.story}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-200">
          Ready to write your own love story? 💍
        </h2>
        <a
          href="/register"
          className="mt-6 inline-block px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-xl shadow-lg text-lg font-medium transition"
        >
          Register Now
        </a>
      </div>
    </div>
  );
}

export default SuccessStories;
