// Menggunakan Arrow Function dan ES6 Export
import React from 'react';
import './HeroSection.css'; // Kita akan buat file CSS terpisah untuk styling

// Impor foto profil dari folder assets
// (Saat ini kita gunakan placeholder, nanti diganti foto asli)
// import ProfilePic from '../assets/foto_profil.jpg';

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-image-container">
        {/* Nanti kita ganti <img> ini dengan foto asli Anda */}
        <div className="hero-image-placeholder">
          
        </div>
        {/* <img src={ProfilePic} alt="Foto Profil" className="hero-image" /> */}
      </div>
      <div className="hero-text-container">
        <h1 className="hero-name">Nama Anda (Placeholder)</h1>
        <p className="hero-title">Jabatan / Deskripsi Singkat (Placeholder)</p>
        <button className="hero-cta-button">Hubungi Saya</button>
      </div>
    </section>
  );
};

export default HeroSection;