// src/components/Experience.jsx

import React from 'react';

// Data placeholder untuk pengalaman
// Kita gunakan struktur data yang lebih kompleks (array of objects)
const experienceList = [
  {
    id: 1,
    title: 'Posisi Anda (misal: Web Developer)',
    company: 'Nama Perusahaan',
    date: 'Jan 2023 - Sekarang',
    description: [
      'Deskripsi tanggung jawab pertama Anda di sini.',
      'Mengembangkan dan memelihara aplikasi web menggunakan React dan Tailwind CSS.',
      'Berkolaborasi dengan tim desainer untuk implementasi UI/UX.',
    ],
  },
  {
    id: 2,
    title: 'Posisi Sebelumnya (misal: Intern)',
    company: 'Perusahaan Lain',
    date: 'Jun 2022 - Des 2022',
    description: [
      'Membantu pengembangan fitur baru untuk proyek internal.',
      'Mempelajari alur kerja Git (Version Control) dalam tim.',
    ],
  },
];

const Experience = () => {
  return (
    // Kontainer utama:
    // - Latar belakang putih (bg-white)
    // - Padding vertikal (py-16) dan horizontal (px-6)
    <section className="bg-white py-16 px-6">
      
      {/* Kontainer pembatas (sedikit lebih lebar untuk konten) */}
      <div className="max-w-4xl mx-auto">
        
        {/* Judul Bagian */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Pengalaman (Experience)
        </h2>
        
        {/* Kontainer untuk daftar pengalaman */}
        {/* 'space-y-8' memberi jarak vertikal antar setiap item pekerjaan */}
        <div className="space-y-8">
          
          {/* Mapping data experienceList (ES6) */}
          {experienceList.map((item) => (
            
            // Setiap item pekerjaan
            // 'pb-8' (padding-bottom) dan 'border-b' (border-bottom)
            // sebagai pemisah visual antar item
            <div key={item.id} className="pb-8 border-b border-gray-200">
              
              {/* Header: Judul/Perusahaan dan Tanggal */}
              {/* Dibuat flex, stack di mobile (flex-col), baris di desktop (sm:flex-row) */}
              <div className="flex flex-col sm:flex-row justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-lg text-blue-600">{item.company}</p>
                </div>
                <div className="text-md text-gray-500 mt-2 sm:mt-0 flex-shrink-0">
                  {item.date}
                </div>
              </div>
              
              {/* Deskripsi (list tanggung jawab) */}
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                {item.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

            </div>
          ))}
          
        </div>

      </div>
    </section>
  );
};

export default Experience;