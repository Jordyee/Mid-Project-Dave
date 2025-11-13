import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutMe from './components/AboutMe.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import ContactModal from './components/ContactModal.jsx'; 

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-50">
      <Navbar />
      
      
      <HeroSection onOpenModal={openModal} />

      <section id="about">
        <AboutMe />
      </section>
      
      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>
      
      <section id="contact">
        <ContactForm />
      </section>
      

      <Footer onOpenModal={openModal} />

      
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;