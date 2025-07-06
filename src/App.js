import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageSection from './components/ImageSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import ScrollIndicator from './components/ScrollIndicator';
import AnimatedBackground from './components/AnimatedBackground';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="App">
      <AnimatePresence>
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>
      
      {!loading && (
        <>
          <ScrollIndicator />
          <AnimatedBackground />
          <Navbar />
          <Hero />
          <ImageSection />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;