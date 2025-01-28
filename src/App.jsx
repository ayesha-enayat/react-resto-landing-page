import React from 'react';
import CustomNavbar from './Components/CustomNavbar';
import Hero from './Components/HeroSection';
import Menu from './components/MenuSection';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


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