import { useState } from "react";
import { Link } from "react-scroll";
import { useMediaQuery } from "../utils/useMediaQuery"; 
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: "home", label: "Home", offset: -80 },
    { to: "about", label: "Technology", offset: -20 },
    { to: "services", label: "Services", offset: -10 },
    { to: "experience", label: "Experience", offset: 41 },
    { to: "blog", label: "Projects", offset: 50 },
    { to: "Contact", label: "Contact", offset: 50 },
  ];

  return (
    <nav className="text-white py-6 fixed w-full top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-stone-800">
      <div className="container flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-white select-none cursor-pointer">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            Portfolio
          </Link>
        </div>

        {/* Desktop Menu */}
        {!isMobile && (
          <ul className="flex space-x-6 justify-center">
            {navLinks.map((link) => (
              <li key={link.to} className="hover:text-red-600 transition-colors">
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={link.offset}
                  activeClass="text-red-600 font-semibold border-b-2 border-red-600"
                  className="cursor-pointer pb-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile Toggle Button */}
        {isMobile && (
          <button onClick={toggleMenu} className="z-[60] text-white focus:outline-none">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        )}
      </div>

      {/* Sidebar for Small Screens */}
      <div
        className={`fixed top-0 right-0 h-screen w-[70%] max-w-sm bg-stone-950 border-l backdrop-blur-sm border-stone-800 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen && isMobile ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <li key={link.to} className="text-xl hover:text-red-600">
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                duration={500}
                offset={link.offset}
                onClick={() => setIsOpen(false)} 
                activeClass="text-red-600 font-semibold"
                className="cursor-pointer"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Dark Overlay when Sidebar is open */}
      {isOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black/50 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}