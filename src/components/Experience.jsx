// src/components/Experience.jsx

import React, { useState } from 'react';
import { FaBriefcase, FaGraduationCap, FaTrophy } from 'react-icons/fa';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work'); 

  const tabClass = (tabName) => 
    `flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-colors ${
      activeTab === tabName 
        ? 'bg-blue-600 text-white shadow-md' 
        : 'text-gray-600 hover:bg-gray-200'
    }`;

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          My Experience
        </h2>
        <p className="text-lg text-gray-500 mb-12 text-center">
          A journey through my professional growth, education, and achievements
        </p>

        {/* Kontainer Tombol Tabs */}
        <div className="flex justify-center gap-4 mb-12 bg-white p-2 rounded-xl shadow-sm">
          <button onClick={() => setActiveTab('work')} className={tabClass('work')}>
            <FaBriefcase /> Work Experience
          </button>
          <button onClick={() => setActiveTab('education')} className={tabClass('education')}>
            <FaGraduationCap /> Education
          </button>
          <button onClick={() => setActiveTab('achievements')} className={tabClass('achievements')}>
            <FaTrophy /> Achievements
          </button>
        </div>

        {/* Konten Tab */}
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300"></div>
          
          {activeTab === 'work' && (
            <div className="space-y-8">
              <TimelineItem
                title="Wakil Ketua VOCS"
                company="Voice of Computer Science"
                date="July 2025 - Sekarang"
                description={[
                  'Saya dipercayakan untuk Menjadi Ketua Pelayanan Tahun 2024',
                  'Saya Kembali dipercayakan sebagai Section Leader Tenor',
                  'Akhirnya saya diangkat menjadi Wakil ketua vocs',
                ]}
                tags={['Leadership', 'Management', 'Music']}
              />
              <TimelineItem
                title="Ketua Pelayanan VOCS"
                company="VOCS"
                date="Desember 2024 - Juny 2025"
                description={[
                  'Membantu Melakukan persiapan serta management pelayanan',
                  'Mengontrol sepenuhnya alur perjalanan dan pelayanan',
                ]}
                tags={['Event Planning', 'Logistics']}
              />
              <TimelineItem
                title="Panitia FILKOM Day (Divisi Perlengkapan)"
                company="FILKOM UNKLAB"
                date="September 2025" 
                description={[
                  'Me-manage perlengkapan acara FILKOM Day',
                  'Menyesuaikan anggaran dana untuk setiap vendor yang dibutuhkan',
                ]}
                tags={['Event Committee', 'Logistics', 'Budgeting']}
              />
              <TimelineItem
                title="President Penamatan"
                company="Sekolah Lanjutan Advent Tompaso"
                date="2024"
                description={[
                  'Melakukan managing terhadap setiap acara penamatan',
                  'Mengelola acara yang diadakan selama 3 hari berturut-turut',
                ]}
                tags={['Event Management', 'Leadership', 'Coordination']}
              />
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-8">
              <TimelineItem
                title="Sekolah Menengah Atas (SMA)"
                company="SLA Tompaso"
                date="2024" // (Silakan isi tanggalnya)
                description={['Fokus studi atau pencapaian utama di SMA.']}
                tags={['High School']}
              />
               <TimelineItem
                title="Sekolah Menengah Pertama (SMP)"
                company="SLA Tompaso"
                date="2021" // (Silakan isi tanggalnya)
                description={['Fokus studi atau pencapaian utama di SMP.']}
                tags={['Middle School']}
              />
               <TimelineItem
                title="Sekolah Dasar (SD)"
                company="TK SD SMP Advent Rerer"
                date="2015" // (Silakan isi tanggalnya)
                description={[]} // (Deskripsi opsional)
                tags={['Elementary']}
              />
               <TimelineItem
                title="Taman Kanak-Kanak (TK)"
                company="TK SD SMP Advent Rerer"
                date="2014" // (Silakan isi tanggalnya)
                description={[]} // (Deskripsi opsional)
                tags={['Kindergarten']}
              />
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-8">
               <p className="text-center text-gray-500">Belum ada data pencapaian.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ title, company, date, description, tags }) => (
  <div className="relative pl-12">
    <div className="absolute left-0 top-1.5 w-5 h-5 bg-blue-600 rounded-full border-4 border-white"></div>
    <div className="p-5 bg-white rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <span className="text-sm text-gray-500 mt-1 sm:mt-0">{date}</span>
      </div>
      <p className="text-md text-blue-600 mb-3">{company}</p>
      
      {description && description.length > 0 && (
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}
      
      <div className="flex flex-wrap gap-2">
        {tags && tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Experience;