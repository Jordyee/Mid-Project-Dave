import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { FaCode, FaLaptopCode, FaDatabase, FaTools } from 'react-icons/fa';

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


const Skills = () => {
  const [activeTab, setActiveTab] = useState('programming');

  const [skillData, setSkillData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data
  useEffect(() => {
    axios.get('/db.json')
      .then(response => {
        setSkillData(response.data.skills);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching skills data:", error);
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
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          My Skills
        </h2>
        <p className="text-lg text-gray-500 mb-12 text-center">
          Technical expertise across different domains of software development
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 bg-gray-100 p-2 rounded-xl shadow-sm">
          <button onClick={() => setActiveTab('programming')} className={tabClass('programming')}>
            <FaCode /> Programming
          </button>
          <button onClick={() => setActiveTab('frontend')} className={tabClass('frontend')}>
            <FaLaptopCode /> Frontend
          </button>
          <button onClick={() => setActiveTab('game')} className={tabClass('game')}> {/* Ganti 'GAME' jadi 'game' agar cocok dgn JSON */}
            <FaDatabase /> GAME
          </button>
          <button onClick={() => setActiveTab('tools')} className={tabClass('tools')}>
            <FaTools /> Tools
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          
          {loading && <p className="text-center">Loading skills...</p>}
          {!loading && !skillData && <p className="text-center">Failed to load data.</p>}

          {!loading && skillData && (
            <>
              {activeTab === 'programming' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillData.programming.map(item => <SkillItem key={item.name} {...item} />)}
                </div>
              )}
              
              {activeTab === 'frontend' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillData.frontend.map(item => <SkillItem key={item.name} {...item} />)}
                </div>
              )}

              {activeTab === 'game' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillData.game.map(item => <SkillItem key={item.name} {...item} />)}
                </div>
              )}

              {activeTab === 'tools' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillData.tools.map(item => <SkillItem key={item.name} {...item} />)}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;