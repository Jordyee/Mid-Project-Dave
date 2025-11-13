import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 
import { 
  FaUser, 
  FaGraduationCap, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFlag 
} from 'react-icons/fa';
import ProfileImage from '../assets/foto-profil.jpg'; 

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <span className="text-blue-600 text-xl mt-1">{icon}</span>
    <div>
      <p className="text-sm font-semibold text-gray-500">{label}</p>
      <p className="text-md font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

const iconMap = {
  "Nama": <FaUser />,
  "Domisili": <FaMapMarkerAlt />,
  "Pendidikan": <FaGraduationCap />,
  "Email": <FaEnvelope />,
  "Phone": <FaPhoneAlt />,
  "Status": <FaFlag />
};

const AboutMe = () => {
  // State untuk data
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data
  useEffect(() => {
    axios.get('/db.json')
      .then(response => {
        setAboutData(response.data.about);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching about data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <section className="bg-white py-20 px-6 text-center"><p>Loading About Me...</p></section>;
  }
  if (!aboutData) {
    return <section className="bg-white py-20 px-6 text-center"><p>Failed to load data.</p></section>;
  }

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
          
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80">
              <img 
                src={ProfileImage} 
                alt="Foto Profil Dave Jordy" 
                className="w-full h-full object-cover rounded-2xl shadow-xl" 
              />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Hello There!
            </h3>
            <p className="text-gray-600 mb-6">
              {aboutData.description} 
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {aboutData.infoGrid.map((item) => (
                <InfoItem 
                  key={item.label}
                  icon={iconMap[item.label]} 
                  label={item.label} 
                  value={item.value} 
                />
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="/CV-Dave-Jordy.pdf" 
                download="CV - Gerungan Dave.pdf"
                className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition-colors"
              >
                Download My CV
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;