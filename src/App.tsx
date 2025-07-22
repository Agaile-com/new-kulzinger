import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import useSmoothScroll from './hooks/useSmoothScroll';
import useScrollAnimation from './hooks/useScrollAnimation';
import { StagewiseToolbar } from '@stagewise/toolbar-react';
import ReactPlugin from '@stagewise-plugins/react';

function App() {
  useSmoothScroll();
  useScrollAnimation();

  return (
    <div id="top" className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <InfoSection />
        <Services />
        <About />
        <Contact />
        <Impressum />
        <Datenschutz />
      </main>
      <Footer />
      <StagewiseToolbar
        config={{
          plugins: [ReactPlugin],
        }}
      />
    </div>
  );
}

export default App;
