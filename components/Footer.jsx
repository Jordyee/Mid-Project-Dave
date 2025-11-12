// src/components/Footer.jsx

import React from 'react';

// (Kita bisa tambahkan ikon dari library seperti 'react-icons' nanti jika diperlukan)

const Footer = () => {
  return (
    // Kontainer utama:
    // - Latar belakang gelap (bg-gray-800)
    // - Teks terang (text-gray-300)
    // - Padding (py-8 px-6)
    <footer className="bg-gray-800 text-gray-300 py-8 px-6">
      
      {/* Kontainer pembatas */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* 1. Copyright Text */}
        {/* 'mb-4' (margin-bottom) di mobile, 'md:mb-0' (reset di desktop) */}
        <div className="mb-4 md:mb-0">
          {/* Gunakan ES6 Template Literal (backticks) untuk memasukkan 
            tahun secara dinamis menggunakan JavaScript.
          */}
          <p>&copy; {new Date().getFullYear()} Nama Anda. All rights reserved.</p>
          <p className="text-sm text-gray-400">Dibuat dengan React & Tailwind CSS</p>
        </div>
        
        {/* 2. Social Media Links (Placeholder) */}
        {/* 'space-x-4' memberi jarak horizontal antar ikon/link */}
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition-colors">
            {/* Nanti kita ganti 'string' ini dengan <img> atau <svg> ikon */}
            [LinkedIn]
          </a>
          <a href="#" className="hover:text-white transition-colors">
            [GitHub]
          </a>
          <a href="#" className="hover:text-white transition-colors">
            [Instagram]
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;