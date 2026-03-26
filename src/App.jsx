import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import CareerSnapshot from './sections/CareerSnapshot';
import Contact from './sections/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bgDark text-textMain transition-colors duration-300 font-sans selection:bg-primary selection:text-white flex flex-col">
        
        {/* Global Components - These stay on every page */}
        <Navbar />
        
        {/* Main Content Area - This changes based on the URL */}
        <main className="flex-grow pt-20"> 
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/resume" element={<CareerSnapshot />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <footer className="py-12 text-center text-textMuted border-t border-cardLight bg-bgDark mt-auto">
          <div className="max-w-7xl mx-auto px-4">
            <p className="font-serif text-2xl font-bold text-textMain mb-4 uppercase tracking-widest">Rahul Tyagi</p>
            <p className="mb-2 text-sm">&copy; {new Date().getFullYear()} - Designed and built with React + Framer Motion</p>
          </div>
        </footer>

        {/* Global Chatbot - Stays active and remembers chat history across pages */}
        <Chatbot />

      </div>
    </Router>
  );
}

export default App;