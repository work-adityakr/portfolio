import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white font-sans relative">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center lg:items-start justify-between">
        {/* Left side content */}
        <div className="lg:w-1/2 w-full mb-12 lg:mb-0">
          {/* Logo & Nav */}
          <header className="flex justify-between items-center mb-16">
            <div className="text-3xl font-extrabold tracking-tight text-white cursor-pointer select-none">
              Portfolio
            </div>

            <nav className="hidden md:flex space-x-8 font-medium text-sm">
              <a
                href="#home"
                className="text-[#d72828] hover:text-[#ff4848] transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Portfolio
              </a>
              <a
                href="#blog"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </nav>
          </header>

          {/* Intro Text */}
          <div className="max-w-xl">
            <p className="text-[#d72828] uppercase tracking-widest mb-2">I am</p>
            <h1 className="text-6xl font-serif font-extrabold leading-tight mb-4">
              Aditya kumar
            </h1>
            <h2 className="text-[#d72828] font-semibold text-xl mb-6">
              Web Designer
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
            Full Stack Developer with a strong foundation in both front-end and back-end technologies, including JavaScript,
            React, Node.js, and SQL/NoSQL databases. Skilled in building scalable web applications, RESTful APIs, and
            user-friendly interfaces.
            </p>
            <button className="border border-[#d72828] text-[#d72828] px-6 py-2 rounded-md text-sm font-semibold hover:bg-[#d72828] hover:text-black transition-colors duration-300">
              ABOUT ME
            </button>
          </div>
        </div>

        {/* Right side image */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <img
            src=""
            alt="Portrait of a mature man with glasses and a serious expression looking slightly to the side, wearing a black shirt on a dark background"
            className="rounded-lg max-w-full h-auto shadow-lg"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ce92967e-6751-426f-83a5-2d91b758ab0c.png";
            }}
          />
        </div>
      </div>

      {/* Social icons vertical on right side */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col space-y-8 text-[#d72828] text-xl">
        <a
          href="https://www.instagram.com/adityaaa._.007?igsh=czhudWI4M2M1Y2Fz"
          aria-label="Instagram"
          className="hover:text-[#ff4848] transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="#linkedin"
          aria-label="LinkedIn"
          className="hover:text-[#ff4848] transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="#dribbble"
          aria-label="Dribbble"
          className="hover:text-[#ff4848] transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDribbble />
        </a>
        <a
          href="#behance"
          aria-label="Behance"
          className="hover:text-[#ff4848] transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBehance />
        </a>
      </div>
    </div>
  );
}

