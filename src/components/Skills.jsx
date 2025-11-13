import React, { useState } from 'react';
// impor ikon lagi
import { FaCode, FaLaptopCode, FaDatabase, FaTools } from 'react-icons/fa';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('programming');

  const tabClass = (tabName) => 
    `flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-colors ${
      activeTab === tabName 
        ? 'bg-blue-600 text-white shadow-md' 
        : 'text-gray-600 hover:bg-gray-200'
    }`;

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          My Skills
        </h2>
        <p className="text-lg text-gray-500 mb-12 text-center">
          Technical expertise across different domains of software development
        </p>

        {/* Kontainer Tombol Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 bg-gray-100 p-2 rounded-xl shadow-sm">
          <button onClick={() => setActiveTab('programming')} className={tabClass('programming')}>
            <FaCode /> Programming
          </button>
          <button onClick={() => setActiveTab('frontend')} className={tabClass('frontend')}>
            <FaLaptopCode /> Frontend
          </button>
          <button onClick={() => setActiveTab('GAME')} className={tabClass('GAME')}>
            <FaDatabase /> GAME
          </button>
          <button onClick={() => setActiveTab('tools')} className={tabClass('tools')}>
            <FaTools /> Tools
          </button>
        </div>

        {/* Konten Tab */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Konten Tab: Programming */}
          {activeTab === 'programming' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillItem name="JavaScript" level="80%" />
              <SkillItem name="Python" level="90%" />
              <SkillItem name="DEV C++" level="65%" />
            </div>
          )}
          
          {/* Konten Tab: Frontend */}
          {activeTab === 'frontend' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillItem name="React.js" level="80%" />
              <SkillItem name="VITE" level="78%" />
              <SkillItem name="HTML" level="95%" />
              <SkillItem name="CSS" level="90%" />
              <SkillItem name="Tailwind CSS" level="83%" />
              <SkillItem name="Bootstrap" level="85%" />
            </div>
          )}

          {/* Konten Tab: Backend */}
          {activeTab === 'GAME' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillItem name="Mobile Legend" level="92%" />
              <SkillItem name="Free Fire" level="85%" />
              <SkillItem name="VALORANT" level="75%" />
            </div>
          )}

          {/* Konten Tab: Tools */}
          {activeTab === 'tools' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillItem name="Git" level="90%" />
              <SkillItem name="GitHub" level="90%" />
              <SkillItem name="VS Code" level="95%" />
              <SkillItem name="Gemini" level="98%" />
              <SkillItem name="ChatGPT" level="96%" />
              <SkillItem name="Cursor" level="70%" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Komponen helper untuk item skill dengan progress bar
const SkillItem = ({ name, level }) => (
  <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
    <div className="flex justify-between items-center mb-1">
      <span className="font-semibold text-gray-700">{name}</span>
      <span className="text-sm text-gray-500">{level}</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className="bg-blue-600 h-2.5 rounded-full" 
        style={{ width: level }}
      >
      </div>
    </div>
  </div>
);

export default Skills;