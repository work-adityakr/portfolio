<<<<<<< HEAD
import React from "react";
import { Link } from "react-scroll";

export default function Services() {
  return (
    <section
      id="services"
      className="h-screen bg-black flex flex-col items-center py-16 px-4 text-white "
    >
      <h1 className="text-5xl font-bold pb-10 my-10">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full justify-items-center">
        {/* Frontend Card */}
        <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-lg hover:shadow-blue-600 transition-all duration-300 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 text-center">Frontend Development</h2>
          <p className="text-center text-md mb-6 w-64">I craft responsive, accessible, and interactive UI/UX using React.js, Tailwind CSS, and modern JavaScript. My focus is on performance, cross-browser compatibility, and seamless user experiences across all devices.
          </p>
          <Link
            to="Contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="bg-orange-700 hover:bg-orange-600 transition px-6 py-2 rounded-md text-white font-semibold cursor-pointer"
          >
            Know More
          </Link>
        </div>

        {/* Backend Card */}
        <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-lg hover:shadow-blue-600 transition-all duration-300 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 text-center">Backend Development</h2>
          <p className="text-center text-md mb-6 w-64">I specialize in creating robust, scalable server-side logic with Node.js and Express.js, implementing REST APIs, database design with MongoDB, and integrating third-party services with a strong focus on security and performance.
          </p>
          <Link
            to="Contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="bg-orange-700 hover:bg-orange-600 transition px-6 py-2 rounded-md text-white font-semibold cursor-pointer"
          >
            Know More
          </Link>
        </div>

        {/* Fullstack Card */}
        <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-lg hover:shadow-blue-600 transition-all duration-300 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 text-center">Full Stack Development</h2>
          <p className="text-center text-md mb-6 w-64">I build end-to-end web applications using the MERN stack — from creating dynamic user interfaces in React to developing secure APIs and managing databases with Node.js and MongoDB. Ideal for startups and SaaS platforms.
          </p>
          <Link
            to="Contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="bg-orange-700 hover:bg-orange-600 transition px-6 py-2 rounded-md text-white font-semibold cursor-pointer"
          >
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
}
=======
import React from "react";
import { Link } from "react-scroll";

export default function Services() {
  return (
    <section
      id="services"
      className="h-screen bg-black flex flex-col items-center py-16 px-4 text-white "
    >
      <h1 className="text-5xl font-bold pb-10 my-10">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full justify-items-center">
        {/* Frontend Card */}
        <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-lg hover:shadow-blue-600 transition-all duration-300 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 text-center">Frontend Development</h2>
          <p className="text-center text-md mb-6 w-64">I craft responsive, accessible, and interactive UI/UX using React.js, Tailwind CSS, and modern JavaScript. My focus is on performance, cross-browser compatibility, and seamless user experiences across all devices.
          </p>
          <Link
            to="Contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="bg-orange-700 hover:bg-orange-600 transition px-6 py-2 rounded-md text-white font-semibold cursor-pointer"
          >
            Know More
          </Link>
        </div>

        {/* Backend Card */}
        <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-lg hover:shadow-blue-600 transition-all duration-300 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 text-center">Backend Development</h2>
          <p className="text-center text-md mb-6 w-64">I specialize in creating robust, scalable server-side logic with Node.js and Express.js, implementing REST APIs, database design with MongoDB, and integrating third-party services with a strong focus on security and performance.
          </p>
          <Link
            to="Contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="bg-orange-700 hover:bg-orange-600 transition px-6 py-2 rounded-md text-white font-semibold cursor-pointer"
          >
            Know More
          </Link>
        </div>

        {/* Fullstack Card */}
        <div className="bg-[#1e1e1e] rounded-lg p-6 shadow-lg hover:shadow-blue-600 transition-all duration-300 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-6 text-center">Full Stack Development</h2>
          <p className="text-center text-md mb-6 w-64">I build end-to-end web applications using the MERN stack — from creating dynamic user interfaces in React to developing secure APIs and managing databases with Node.js and MongoDB. Ideal for startups and SaaS platforms.
          </p>
          <Link
            to="Contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="bg-orange-700 hover:bg-orange-600 transition px-6 py-2 rounded-md text-white font-semibold cursor-pointer"
          >
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
}
>>>>>>> c74e2fc4e4cfc2b5f499afbf110b474f17c829e9
