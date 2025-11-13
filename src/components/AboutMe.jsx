// src/components/AboutMe.jsx

import React from 'react';
import { 
  FaUser, 
  FaGraduationCap, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFlag 
} from 'react-icons/fa';

import ProfileImage from '../assets/foto-profil.jpg'; // (Asumsi Anda tetap pakai 'import')
// Jika Anda pakai 'public' untuk foto, baris di atas dihapus dan <img> src="/foto-profil.jpg"

const AboutMe = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          About Me
        </h2>
        <p className="text-lg text-gray-500 mb-12 text-center">
          Passionate about creating innovative solutions through technology
        </p>

        <div className="flex flex-col md:flex-row items-start gap-12">
          
          {/* Kolom Kiri: Foto */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80">
              <img 
                src={ProfileImage} // atau "/foto-profil.jpg" jika di 'public'
                alt="Foto Profil Dave Jordy" 
                className="w-full h-full object-cover rounded-2xl shadow-xl" 
              />
            </div>
          </div>

          {/* Kolom Kanan: Teks & Info (Data Anda) */}
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Hello There!
            </h3>
            <p className="text-gray-600 mb-6">
              Saya adalah mahasiswa Teknik Informatika di Universitas Klabat
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <InfoItem icon={<FaUser />} label="Nama" value="Dave J Gerungan" />
              <InfoItem icon={<FaMapMarkerAlt />} label="Domisili" value="Aermadidi" />
              <InfoItem icon={<FaGraduationCap />} label="Pendidikan" value="SMA" />
              <InfoItem icon={<FaEnvelope />} label="Email" value="12410535@student.unklab.ac.id" />
              <InfoItem icon={<FaPhoneAlt />} label="Phone" value="081341044334" />
              <InfoItem icon={<FaFlag />} label="Status" value="On Duty" />
            </div>

            {/* === PERUBAHAN DI SINI === */}
            <div className="flex items-center gap-4">
              {/* Kita ubah <button> menjadi <a> (tautan).
                - 'href' : Path ke file CV di folder 'public'.
                - 'download' : Atribut ini menyuruh browser untuk men-download file, 
                              bukan membukanya di tab baru.
                - 'className' : Kita pakai styling Tailwind yang sama persis 
                               dengan <button> sebelumnya.
              */}
              <a 
                href="/CV-Dave-Jordy.pdf" // <-- PASTIKAN NAMA FILE SAMA
                download="CV - Gerungan Dave.pdf" // <-- Nama file saat di-download
                className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition-colors"
              >
                Download My CV
              </a>
            </div>
            {/* === AKHIR PERUBAHAN === */}

          </div>
        </div>
      </div>
    </section>
  );
};

// Komponen helper (tetap sama)
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <span className="text-blue-600 text-xl mt-1">{icon}</span>
    <div>
      <p className="text-sm font-semibold text-gray-500">{label}</p>
      <p className="text-md font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

export default AboutMe;