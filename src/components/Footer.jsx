import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
// Terima 'onOpenModal' sebagai prop
const Footer = ({ onOpenModal }) => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Kontainer 4 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* ... (Kolom 1: Portfolio (Brand) - tetap sama) ... */}
           <div>
            <h4 className="text-2xl font-bold text-white mb-4">Jordyee.dev</h4>
            <p className="text-gray-400 mb-4">
              Passionate developer creating innovative solutions 
              and beautiful experiences. Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/jordy.gerungan" className="text-gray-400 hover:text-white text-2xl"><FaFacebook /></a>
              <a href="https://github.com/Jordyee" className="text-gray-400 hover:text-white text-2xl"><FaGithub /></a>
              <a href="https://www.instagram.com/dj_gerungan/" className="text-gray-400 hover:text-white text-2xl"><FaInstagram /></a>
            </div>
          </div>

          {/* ... (Kolom 2: Quick Links - tetap sama) ... */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#experience" className="hover:text-white">Experience</a></li>
              <li><a href="#skills" className="hover:text-white">Skills</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>


          {/* Kolom 3: Get In Touch */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Get In Touch</h5>
            <ul className="space-y-2 text-gray-400">
              <li>info@emailanda.com</li>
              <li>+62 812-3456-7890</li>
            </ul>
            {/* Tambahkan 'onClick={onOpenModal}' pada tombol ini */}
            <button 
              onClick={onOpenModal}
              className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
            >
              Let's Work Together
            </button>
          </div>

          {/* ... (Kolom 4: Newsletter - tetap sama) ... */}
           <div>
            <h5 className="text-lg font-semibold text-white mb-4">Stay Updated</h5>
            <p className="text-gray-400 mb-4">
              Subscribe to get notified about my latest projects and articles.
            </p>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md mb-2"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Subscribe Now
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Gerungan,Dave Jordy. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;