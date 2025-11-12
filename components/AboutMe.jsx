// src/components/AboutMe.jsx

import React from 'react';

const AboutMe = () => {
  return (
    // Kontainer utama:
    // - Latar belakang putih (bg-white)
    // - Padding vertikal (py-16) dan horizontal (px-6)
    <section className="bg-white py-16 px-6">
      
      {/* Kontainer pembatas (agar tidak terlalu lebar di layar besar) */}
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Judul Bagian */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Tentang Saya
        </h2>
        
        {/* Paragraf Deskripsi (Placeholder) */}
        {/* Kita gunakan 'space-y-4' pada wrapper 'div' 
          agar ada jarak otomatis antar paragraf.
          'text-lg' untuk ukuran font yang nyaman dibaca.
          'text-gray-700' untuk warna teks yang tidak terlalu hitam pekat.
        */}
        <div className="text-lg text-gray-700 space-y-4 text-left md:text-center">
          <p>
            (Placeholder) Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh 
            ultricies vehicula ut id elit. Curabitur blandit tempus porttitor. 
            Donec id elit non mi porta gravida at eget metus.
          </p>
          <p>
            (Placeholder) Vestibulum id ligula porta felis euismod semper. 
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis 
            vestibulum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;