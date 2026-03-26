import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Achievements from './sections/Achievements'; // <-- Imported new page
import Education from './sections/Education';
import Training from './sections/Training';
import CareerSnapshot from './sections/CareerSnapshot';
import Contact from './sections/Contact';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      {/* Global Wrapper updated for the new premium Light/Dark mode colors */}
      <div className="min-h-screen bg-[#f4f7f9] dark:bg-[#0B1120] text-gray-900 dark:text-white transition-colors duration-500 font-sans selection:bg-[#10b981] selection:text-white flex flex-col relative">
        
        {/* Global Components - These stay on every page */}
        <Navbar />
        
        {/* Main Content Area - Routes control which component is visible */}
        <main className="flex-grow pt-20 relative z-10"> 
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/achievements" element={<Achievements />} /> {/* <-- Added new route */}
            <Route path="/education" element={<Education />} />
            <Route path="/training" element={<Training />} />
            <Route path="/resume" element={<CareerSnapshot />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Global Footer - Upgraded to premium glassmorphism design */}
        <footer className="relative py-12 text-center border-t border-gray-200/50 dark:border-white/10 bg-white/30 dark:bg-[#0B1120]/50 backdrop-blur-xl mt-auto z-10">
          {/* Subtle Glowing Top Border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10b981] via-teal-400 to-blue-500 opacity-50"></div>
          
          <div className="max-w-[1400px] mx-auto px-4">
            <p className="font-serif text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4 uppercase tracking-widest drop-shadow-sm flex items-center justify-center gap-1">
              Rahul<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-blue-500">Tyagi.</span>
            </p>
            <p className="text-xs md:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} - Designed & Built with React + Framer Motion
            </p>
          </div>
        </footer>

        {/* Global Chatbot - Stays active and remembers chat history across pages */}
        <Chatbot />

      </div>
    </Router>
  );
}

export default App;