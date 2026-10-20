import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('anjli_portfolio_theme');
    return saved !== null ? saved === 'dark' : true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('anjli_portfolio_theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('anjli_portfolio_theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div
      className={`min-h-screen selection:bg-indigo-500 selection:text-white ${
        isDarkMode
          ? 'bg-[#080c14] text-slate-100'
          : 'bg-[#f8fafc] text-slate-900'
      }`}
    >
      {/* Navigation Header */}
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Main Portfolio Sections */}
      <main>
        <Hero isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Experience isDarkMode={isDarkMode} />
        <Projects isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <ContactCTA isDarkMode={isDarkMode} />
      </main>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
