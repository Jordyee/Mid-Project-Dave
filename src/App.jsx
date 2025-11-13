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
  // 3. State untuk modal sekarang ada di App.jsx
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 4. Buat fungsi untuk membuka modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-50">
      <Navbar />
      
      {/* 5. Kirim 'openModal' sebagai prop ke HeroSection */}
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
      
      {/* 6. Kirim 'openModal' sebagai prop ke Footer */}
      <Footer onOpenModal={openModal} />

      {/* 7. Render Modal di sini */}
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;