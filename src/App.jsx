import React from 'react';
import CustomNavbar from './Components/CustomNavbar.jsx';
import Hero from './Components/HeroSection.jsx';
import Menu from './Components/MenuSection.jsx';
import About from './Components/About.jsx';
import Testimonials from './Components/Testimonials.jsx';
import Footer from './Components/Footer.jsx';


function App() {
  return (
    <div>
      <CustomNavbar />
      <Hero />
      <Menu />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;