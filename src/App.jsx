// src/App.jsx

import React from 'react';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe'; // <- Impor komponen baru

function App() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      {/* <Skills /> */}
      {/* <Experience /> */}
      {/* <ContactForm /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;