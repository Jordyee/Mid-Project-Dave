// src/components/Experience.jsx

import React, { useState, useEffect } from 'react'; // Diperbarui
import axios from 'axios'; // Diperbarui
import { FaBriefcase, FaGraduationCap, FaTrophy } from 'react-icons/fa';

// Komponen TimelineItem (tidak berubah)
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


const Experience = () => {
  const [activeTab, setActiveTab] = useState('work'); 
  
  // State untuk data
  const [expData, setExpData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data
  useEffect(() => {
    axios.get('/db.json')
      .then(response => {
        setExpData(response.data.experience);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching experience data:", error);
        setLoading(false);
      });
  }, []);

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

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300"></div>
          
          {/* Tampilkan loading atau error */}
          {loading && <p className="text-center">Loading experience...</p>}
          {!loading && !expData && <p className="text-center">Failed to load data.</p>}
          
          {/* Render data dari state (JSON) */}
          {!loading && expData && (
            <>
              {activeTab === 'work' && (
                <div className="space-y-8">
                  {expData.work.length > 0 ? (
                    expData.work.map((item, index) => <TimelineItem key={index} {...item} />)
                  ) : (
                    <p className="text-center text-gray-500">Belum ada data pekerjaan.</p>
                  )}
                </div>
              )}

              {activeTab === 'education' && (
                <div className="space-y-8">
                  {expData.education.length > 0 ? (
                    expData.education.map((item, index) => <TimelineItem key={index} {...item} />)
                  ) : (
                    <p className="text-center text-gray-500">Belum ada data pendidikan.</p>
                  )}
                </div>
              )}

              {activeTab === 'achievements' && (
                <div className="space-y-8">
                  {expData.achievements.length > 0 ? (
                     expData.achievements.map((item, index) => <TimelineItem key={index} {...item} />)
                  ) : (
                    <p className="text-center text-gray-500">Belum ada data pencapaian.</p>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;