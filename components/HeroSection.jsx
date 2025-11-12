// src/components/HeroSection.jsx

import React from 'react';

// (Di masa depan, kita akan impor foto profil di sini)
// import ProfilePic from '../assets/foto_profil.jpg';

const HeroSection = () => {
  return (
    // Kontainer utama: 
    // - Latar belakang abu-abu muda (bg-gray-100)
    // - Padding (p-8 di mobile, p-12 di desktop)
    // - Layout flex: kolom di mobile (flex-col), baris di desktop (md:flex-row)
    // - Penyelarasan (items-center) dan jarak (gap-8)
    <section className="flex flex-col md:flex-row items-center justify-center p-8 md:p-12 bg-gray-100 gap-8 md:gap-12">
      
      {/* 1. Kontainer Foto Profil */}
      <div className="flex-shrink-0">
        
        {/* Placeholder: Ini adalah kotak abu-abu bulat */}
        <div className="w-52 h-52 bg-gray-300 rounded-full flex items-center justify-center shadow-md">
          <span className="text-gray-500 italic">Foto Profil</span>
        </div>

        {/* CATATAN: Nanti, baris di atas akan diganti dengan <img> asli:
          <img 
            src={ProfilePic} 
            alt="Foto Profil" 
            className="w-52 h-52 rounded-full object-cover shadow-lg" 
          /> 
        */}
      </div>

      {/* 2. Kontainer Teks (Nama, Jabatan, Tombol) */}
      <div className="text-center md:text-left">
        
        {/* Nama */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          Nama Anda (Placeholder)
        </h1>
        
        {/* Jabatan/Title */}
        <p className="text-xl md:text-2xl text-blue-600 font-light mb-6">
          Jabatan / Deskripsi Singkat (Placeholder)
        </p>
        
        {/* Tombol CTA (Call to Action) */}
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
          Hubungi Saya
        </button>
      </div>

    </section>
  );
};

// Ekspor default agar bisa di-impor oleh App.jsx
export default HeroSection;