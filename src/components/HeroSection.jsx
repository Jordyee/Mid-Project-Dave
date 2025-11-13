// src/components/HeroSection.jsx

import React, { useState, useEffect } from 'react'; // Diperbarui
import axios from 'axios'; // Diperbarui
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Link } from 'react-scroll'; 
import ProfileImage from '../assets/foto-profil.jpg'; // (atau /foto-profil.jpg)
import ContactModal from './ContactModal.jsx'; 

const HeroSection = ({ onOpenModal }) => { 
  
  // State untuk menampung data dari db.json
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect untuk fetch data dengan axios saat komponen dimuat
  useEffect(() => {
    axios.get('/db.json')
      .then(response => {
        setHeroData(response.data.hero); // Simpan data hero ke state
        setLoading(false); // Matikan loading
      })
      .catch(error => {
        console.error("Error fetching hero data:", error);
        setLoading(false);
      });
  }, []); // [] berarti 'jalankan sekali saat mount'

  // Tampilkan loading state
  if (loading) {
    return (
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-50">
        <p>Loading Hero...</p>
      </section>
    );
  }

  // Tampilkan jika data gagal diambil
  if (!heroData) {
    return (
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-50">
        <p>Failed to load data.</p>
      </section>
    );
  }

  // Render komponen dengan data dari state
  return (
    <section id="hero" className="min-h-screen flex items-center bg-gray-50 p-6 md:p-12">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        <div className="flex-1 text-center md:text-left">
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {heroData.name} {/* <-- Data dari JSON */}
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-blue-600 mb-6 min-h-[40px]">
            <TypeAnimation
              sequence={heroData.titles} 
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-600 mb-4 max-w-lg mx-auto md:mx-0">
            {heroData.description} {/* <-- Data dari JSON */}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mb-8">
            <div className="flex items-center gap-2 text-green-500">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              {heroData.status} {/* <-- Data dari JSON */}
            </div>
            <div className="flex items-center gap-1 text-gray-500">
              <HiOutlineLocationMarker />
              {heroData.location} {/* <-- Data dari JSON */}
            </div>
          </div>

          {/* ... (Tombol dan Link Sosial Media tetap sama) ... */}
          <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
            <Link 
              to="experience" 
              spy={true} 
              smooth={true} 
              offset={-50}
              className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition-colors cursor-pointer"
            >
              View Projects
            </Link>
            <button 
              onClick={onOpenModal} 
              className="px-6 py-3 bg-white text-gray-800 rounded-lg shadow-md border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              Let's Work Together
            </button>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <span className="text-gray-500">Follow me:</span>
            <a href="https://www.facebook.com/jordy.gerungan" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 text-2xl"><FaFacebook /></a>
            <a href="https://github.com/Jordyee" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 text-2xl"><FaGithub /></a>
            <a href="https://www.instagram.com/dj_gerungan/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 text-2xl"><FaInstagram /></a>
          </div>

        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80">
            <img 
              src={ProfileImage} 
              alt="Foto Profil Dave Jordy" 
              className="w-full h-full object-cover rounded-2xl shadow-xl" 
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;