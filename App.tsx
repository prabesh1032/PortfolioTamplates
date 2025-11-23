import React from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <MainLayout>
      <Hero />
      <BentoGrid />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </MainLayout>
  );
}

export default App;