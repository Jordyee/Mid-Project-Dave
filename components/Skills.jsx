// src/components/Skills.jsx

import React from 'react';

// Daftar skills placeholder (nanti diganti data asli)
// Kita gunakan array of objects, ini praktik yang baik
const skillList = [
  'JavaScript (ES6+)',
  'React',
  'Tailwind CSS',
  'HTML5',
  'CSS3',
  'Vite',
  'Git & GitHub',
  'Node.js (Basic)',
  'Bootstrap', // (Sesuai histori kita sebelumnya)
];

const Skills = () => {
  return (
    // Kontainer utama:
    // - Latar belakang abu-abu (bg-gray-100), sama seperti Hero
    // - Padding vertikal (py-16) dan horizontal (px-6)
    <section className="bg-gray-100 py-16 px-6">
      
      {/* Kontainer pembatas */}
      <div className="max-w-4xl mx-auto">
        
        {/* Judul Bagian */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Keahlian Saya (Skills)
        </h2>
        
        {/* Grid untuk daftar skills */}
        {/*
          - 'grid' untuk mengaktifkan grid layout
          - 'grid-cols-2' (2 kolom di mobile)
          - 'md:grid-cols-3' (3 kolom di medium screen)
          - 'lg:grid-cols-4' (4 kolom di large screen)
          - 'gap-4' (jarak antar item)
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
          {/* Kita gunakan .map() untuk me-render list
            Ini adalah cara standar ES6/React untuk data dinamis
          */}
          {skillList.map((skill, index) => (
            // Setiap item skill
            <div 
              key={index} // 'key' unik wajib ada saat mapping di React
              className="bg-white p-4 rounded-lg shadow-md text-center"
            >
              <span className="font-semibold text-gray-700">{skill}</span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;