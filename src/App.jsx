import React from 'react';
import HeroSection from './components/HeroSection';
// Nanti kita juga impor Navbar, AboutMe, dll di sini

function App() {
  // Kita gunakan ES6 fragment (<>...</>)
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      {/* <AboutMe /> */}
      {/* <Skills /> */}
      {/* <Experience /> */}
      {/* <ContactForm /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;