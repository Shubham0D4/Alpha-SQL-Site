import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Installation from './components/Installation';
import Documentation from './components/Documentation';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200">
      <Navbar />
      <AnimatePresence>
        <main>
          <Hero />
          <Features />
          <Installation />
          <Documentation />
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;