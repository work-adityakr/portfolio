
  

import React from "react";
import AdityaImg from './Aditya.jpg';

export default function About() {
  return (
    <section id="about" className="max-h-screen bg-black flex items-center justify-center">
    <div  className="text-white text-2xl">
    <h1 className="flex justify-center text-6xl font-bold py-16 tracking-tight">
      About Me
    </h1>

    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
      <div className="w-[550px]">
        <p>
          As a Full Stack Developer, I am passionate about building powerful, user-centric digital experiences.
          <br /><br />
          I specialize in both front-end and back-end development, with a strong foundation in HTML, CSS, JavaScript, React, Node.js, and MongoDB. I enjoy designing responsive, accessible interfaces and crafting robust APIs.
          <br /><br />
          My approach focuses on performance, scalability, and clean, maintainable code.
        </p>
      </div>
      <div className="lg:w-1/2 w-full flex justify-center h-[500px]">
      <img
      src={AdityaImg}
      alt="Portrait of Aditya Kumar"
      className="rounded-lg max-w-full h-auto shadow-lg"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ce92967e-6751-426f-83a5-2d91b758ab0c.png";
      }}
    />
    
      </div>
    </div>
  </div>
    </section>
  );
}
