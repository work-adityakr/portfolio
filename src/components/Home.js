

import React from "react";
import AdityaImg from "./Aditya.jpg"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-black">
    <div className=" text-white font-sans relative">
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center lg:items-start justify-between">
      <div className="lg:w-1/2 w-full mb-12 lg:mb-0">
        <div className="max-w-xl">
          <p className="text-[#d72828] uppercase tracking-widest mb-2">I am</p>
          <h1 className="text-6xl font-serif font-extrabold leading-tight mb-4">Aditya Kumar</h1>
          <h2 className="text-[#d72828] font-semibold text-xl mb-6">Web Designer</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Full Stack Developer with strong front-end and back-end skills including JavaScript,
            React, Node.js, and databases. Skilled in building scalable applications and user-friendly interfaces.
          </p>
          <button className="border border-[#d72828] text-[#d72828] px-6 py-2 rounded-md text-sm font-semibold hover:bg-[#d72828] hover:text-black transition-colors duration-300">
            ABOUT ME
          </button>
        </div>
      </div>

      <div className="lg:w-1/2 w-full flex justify-center h-[500px]">
        <img
          src={AdityaImg}
          alt="Profile"
          className="rounded-lg max-w-full h-auto shadow-lg"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ce92967e-6751-426f-83a5-2d91b758ab0c.png";
          }}
        />
      </div>
    </div>

    <div className="fixed right-6 top-[400px] transform -translate-y-1/2 flex flex-col space-y-8 text-[#d72828] text-xl">
      <a href="https://www.instagram.com/adityaaa._.007" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:text-[#ff4848] transition-colors duration-300" />
      </a>
      <a href="https://www.linkedin.com/in/work-adityakr" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn className="hover:text-[#ff4848] transition-colors duration-300" />
      </a>
    </div>
  </div>
    </section>
  );
}
