// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar'; // <- Impor Navbar
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Skills />
      <Experience />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;