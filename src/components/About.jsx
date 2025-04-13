import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 text-center mt-16 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Gradient Heading with Animation */}
      <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
        About Me
      </h1>

      {/* Enhanced Text Content */}
      <div className="space-y-6 mb-8">
        <p className="text-gray-700 text-lg leading-loose">
          Hey there! I'm <span className="font-bold text-gray-900 hover:text-purple-600 transition-colors duration-200">Rahul Verma</span>, a dedicated self-taught web developer who combines creative insights from my arts background with strong technical skills. I've sharpened my abilities through hands-on learning on platforms like{" "}
          <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 hover:text-indigo-800 underline underline-offset-4">
            FreeCodeCamp
          </a>,{" "}
          <a href="https://www.udemy.com/" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 hover:text-indigo-800 underline underline-offset-4">
            Udemy
          </a>, and other digital resources.
        </p>

        <p className="text-gray-700 text-lg leading-loose">
          I specialize in crafting modern web experiences using{" "}
          <span className="font-semibold text-green-600 hover:text-green-700 transition-colors duration-200">React</span>,{" "}
          <span className="font-semibold text-yellow-600 hover:text-yellow-700 transition-colors duration-200">Node.js</span>, and{" "}
          <span className="font-semibold text-sky-500 hover:text-sky-600 transition-colors duration-200">Tailwind CSS</span>. My focus is on creating clean, interactive interfaces that prioritize user experience and performance.
        </p>
      </div>

      {/* Social Links with Enhanced Interaction */}
      <div className="flex justify-center gap-6 mt-10">
        <a
          href="https://github.com/rahul1015s"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full text-gray-800 hover:bg-gray-100 transition-all duration-300 hover:scale-110"
          aria-label="GitHub Profile"
        >
          <FaGithub className="text-3xl" />
        </a>
        <a
          href="https://linkedin.com/in/rahul1015s"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-110"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="text-3xl" />
        </a>
        <a
          href="mailto:rahulwebjs@gmail.com"
          className="p-3 rounded-full text-red-600 hover:bg-red-50 transition-all duration-300 hover:scale-110"
          aria-label="Send Email"
        >
          <FaEnvelope className="text-3xl" />
        </a>
      </div>

      {/* Animated Coming Soon Notice */}
      <div className="mt-8">
        <p className="text-sm text-gray-500 italic animate-pulse">
          🚀 Crafting an amazing portfolio - Stay tuned for launch!
        </p>
      </div>
    </div>
  );
};

export default About;