// src/components/Navbar.jsx

import React from 'react';

const Navbar = () => {
  return (
    // 'sticky top-0' membuat navbar tetap di atas
    // 'z-50' memastikan navbar di atas konten lain
    // 'shadow-md' untuk efek bayangan halus
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      
      {/* Kontainer pembatas */}
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* 1. Logo atau Nama Anda */}
          <div className="text-xl font-bold text-blue-600">
            {/* Nanti kita ganti dengan nama atau logo */}
            NamaAnda.dev
          </div>
          
          {/* 2. Menu Navigasi (Desktop) */}
          {/* 'hidden md:flex' = tersembunyi di mobile, tampil (flex) di desktop */}
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-blue-600">Tentang Saya</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600">Skills</a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600">Pengalaman</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Kontak</a>
          </div>

          {/* 3. Tombol Menu (Mobile) */}
          {/* 'md:hidden' = tampil di mobile, tersembunyi di desktop */}
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">
              {/* Ikon hamburger (placeholder) */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

        </div>
      </div>
      
      {/* CATATAN: 
        Untuk menu mobile (dropdown saat ikon hamburger diklik), 
        kita perlu menambahkan state (useState) dan sedikit JavaScript. 
        Untuk 'layout' awal, ini sudah cukup.
      */}
      
    </nav>
  );
};

export default Navbar;