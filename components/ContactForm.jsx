// src/components/ContactForm.jsx

import React from 'react';

// Kita akan gunakan 'useState' dari React (ES6 Hook) 
// untuk mengelola input form jika diperlukan, 
// tapi untuk layout statis awal, kita fokus di JSX.

const ContactForm = () => {
  
  // Fungsi handler (kosong untuk saat ini)
  const handleSubmit = (event) => {
    event.preventDefault(); // Mencegah reload halaman saat submit
    alert('Formulir terkirim! (Fungsi placeholder)');
  };

  return (
    // Kontainer utama:
    // - Latar belakang abu-abu (bg-gray-100)
    // - Padding vertikal (py-16) dan horizontal (px-6)
    <section className="bg-gray-100 py-16 px-6">
      
      {/* Kontainer pembatas */}
      <div className="max-w-xl mx-auto">
        
        {/* Judul Bagian */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Hubungi Saya
        </h2>
        
        {/* Tag <form> */}
        {/* 'onSubmit' adalah event handler React (ES6) */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
          
          {/* 1. Input Nama */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nama Anda
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required 
            />
          </div>
          
          {/* 2. Input Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Anda
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="anda@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          {/* 3. Textarea Pesan */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tulis pesan Anda di sini..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
          
          {/* 4. Tombol Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              Kirim Pesan
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;