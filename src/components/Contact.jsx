import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaSearch,
  FaCopy,
} from "react-icons/fa";

const Contact = () => {
  const email = "rahulwebjs@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => alert("Email copied to clipboard!"))
      .catch(() => alert("Failed to copy email"));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 mt-16 text-center bg-white/90 shadow-lg rounded-2xl backdrop-blur-sm">
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Let's Connect!
      </h2>

      <div className="mb-6 animate-fade-in">
        <p className="text-gray-700 text-lg mb-4">
          Currently seeking exciting internship opportunities to grow my skills
          🚀
        </p>
        <div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-full text-blue-900 text-sm font-medium transition-all hover:bg-blue-100">
          <FaSearch className="mr-2 animate-bounce" aria-label="Searching" />
          Open to internship roles in web development
        </div>
      </div>

      <p className="text-gray-700 text-lg mb-6">
        Whether it's a project collaboration or just a friendly hello, I'd love
        to hear from you!
      </p>

      <div className="flex justify-center gap-6 text-3xl mb-6">
        <a
          href="https://github.com/rahul1015s"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black transition-all hover:-translate-y-1"
          title="GitHub Profile"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/rahul1015s"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition-all hover:-translate-y-1"
          title="LinkedIn Profile"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <div className="relative group flex items-center gap-2 text-red-600 hover:text-red-800 transition-all hover:-translate-y-1">
          <FaEnvelope />
          <span className="text-base font-medium hidden group-hover:inline-block animate-fade-in">
            {email}
          </span>
          <button
            type="button"
            onClick={copyToClipboard}
            className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-gray-600"
            title="Copy Email"
            aria-label="Copy email"
          >
            <FaCopy className="text-sm ml-1" />
          </button>
        </div>
      </div>

      <p className="text-sm text-gray-500 font-medium">
        Always excited to create meaningful digital experiences! ✨
      </p>
    </div>
  );
};

export default Contact;
