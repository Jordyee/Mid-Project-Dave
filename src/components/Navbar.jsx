import React from 'react';
import { Link } from 'react-scroll';
// Impor ikon
import { 
  FaHome, 
  FaUser, 
  FaBriefcase, 
  FaCode, 
  FaEnvelope 
} from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-4 py-3 bg-white/80 backdrop-blur-md rounded-full shadow-lg">
    
        <Link
          to="hero" // ID untuk HeroSection
          spy={true}
          smooth={true}
          offset={-100}
          activeClass="bg-blue-600 text-white"
          className="p-3 rounded-full cursor-pointer hover:bg-gray-200"
        >
          <FaHome />
        </Link>
        
        <Link
          to="about" // ID untuk AboutMe
          spy={true}
          smooth={true}
          offset={-50}
          activeClass="bg-blue-600 text-white"
          className="p-3 rounded-full cursor-pointer hover:bg-gray-200"
        >
          <FaUser />
        </Link>

        <Link
          to="experience" // ID untuk Experience
          spy={true}
          smooth={true}
          offset={-50}
          activeClass="bg-blue-600 text-white"
          className="p-3 rounded-full cursor-pointer hover:bg-gray-200"
        >
          <FaBriefcase />
        </Link>

        <Link
          to="skills" // ID untuk Skills
          spy={true}
          smooth={true}
          offset={-50}
          activeClass="bg-blue-600 text-white"
          className="p-3 rounded-full cursor-pointer hover:bg-gray-200"
        >
          <FaCode />
        </Link>

        <Link
          to="contact" // ID untuk ContactForm
          spy={true}
          smooth={true}
          offset={-50}
          activeClass="bg-blue-600 text-white"
          className="p-3 rounded-full cursor-pointer hover:bg-gray-200"
        >
          <FaEnvelope />
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;