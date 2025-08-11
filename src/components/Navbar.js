
// import React from "react";
// import { Link } from "react-scroll";
// import "./Navbar.css";

// export default function Navbar() {
//   return (
//     <nav className="bg-black text-white py-6 fixed w-full top-0 z-50 flex justify-evenly items-center">
//       <div className="text-3xl font-extrabold text-white select-none cursor-pointer">
//         <Link to="home" smooth={true} duration={500} className="cursor-pointer">
//           Portfolio
//         </Link>
//       </div>
//       <div>
//         <ul className="flex space-x-6 justify-center">
//           <li>
//             <Link
//               to="home"
//               spy={true}
//               smooth={true}
//               duration={500}
//               activeClass="active"
//               className="cursor-pointer hover:text-red-600"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="about"
//               spy={true}
//               smooth={true}
//               duration={500}
//               activeClass="active"
//               className="cursor-pointer hover:text-red-600"
//             >
//               About
//             </Link>
//           </li>
//           <li>
//           <Link
//           to="services"
//           spy={true}
//           smooth={true}
//           duration={500}
//           activeClass="active"
//           className="cursor-pointer hover:text-red-600"
//         >
//           Services
//         </Link>
        
//           </li>
//           <li>
//             <Link
//               to="blog"
//               spy={true}
//               smooth={true}
//               duration={500}
//               activeClass="active"
//               className="cursor-pointer hover:text-red-600"
//             >
//               Blog
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="Contact"
//               spy={true}
//               smooth={true}
//               duration={500}
//               activeClass="active"
//               className="cursor-pointer hover:text-red-600"
//             >
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }


import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="bg-black text-white py-6 fixed w-full top-0 z-50 flex justify-evenly items-center">
      <div className="text-3xl font-extrabold text-white select-none cursor-pointer">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          Portfolio
        </Link>
      </div>
      <div>
        <ul className="flex space-x-6 justify-center">
          <li className="hover:text-red-600">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="text-red-600 font-semibold border-b-2 border-red-600"
              className="cursor-pointer pb-1"
            >
              Home
            </Link>
          </li>
          <li className="hover:text-red-600">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-20}
              duration={500}
              activeClass="text-red-600 font-semibold border-b-2 border-red-600"
              className="cursor-pointer pb-1"
            >
              About
            </Link>
          </li>
          <li className="hover:text-red-600">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={600}
              offset={-20}
              activeClass="text-red-600 font-semibold border-b-2 border-red-600"
              className="cursor-pointer pb-1"
            >
              Services
            </Link>
          </li>
          <li className="hover:text-red-600">
            <Link
              to="blog"
              spy={true}
              smooth={true}
              duration={500}
              offset={-20}
              activeClass="text-red-600 font-semibold border-b-2 border-red-600"
              className="cursor-pointer pb-1"
            >
              Blog
            </Link>
          </li>
          <li className="hover:text-red-600">
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-51}
              activeClass="text-red-600 font-semibold border-b-2 border-red-600"
              className="cursor-pointer pb-1"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
