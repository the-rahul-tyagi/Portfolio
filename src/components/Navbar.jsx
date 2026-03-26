import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiHome, FiCpu, FiLayers, FiAward, FiFileText, FiMail, FiTrendingUp, FiBookOpen, FiTerminal, FiUser } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', path: '/', icon: <FiHome /> },
  { name: 'Skills', path: '/skills', icon: <FiCpu /> },
  { name: 'Projects', path: '/projects', icon: <FiLayers /> },
  { name: 'Certifications', path: '/certifications', icon: <FiAward /> },
  { name: 'Achievements', path: '/achievements', icon: <FiTrendingUp /> },
  { name: 'Education', path: '/education', icon: <FiBookOpen /> },
  { name: 'Training', path: '/training', icon: <FiTerminal /> },
  { name: 'Resume', path: '/resume', icon: <FiFileText /> },
  { name: 'Contact', path: '/contact', icon: <FiMail /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        scrolled 
        ? 'bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 py-3 shadow-lg' 
        : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1500px] mx-auto flex items-center justify-between px-6 md:px-10">
        
        {/* LEFT: Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group relative z-[110]">
          <div className="w-10 h-10 bg-gradient-to-br from-[#10b981] to-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
            <span className="text-xl font-black">R</span>
          </div>
          <motion.span 
            className="text-xl font-serif font-extrabold tracking-tighter text-gray-900 dark:text-white uppercase"
          >
            Rahul <span className="text-[#10b981]">Tyagi</span>
          </motion.span>
        </Link>

        {/* CENTER: Desktop Navigation */}
        <nav className="hidden xl:block">
          <ul className="flex items-center gap-1 bg-gray-100/50 dark:bg-white/5 p-1.5 rounded-2xl border border-gray-200/50 dark:border-white/5 shadow-inner">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name} className="relative">
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 text-[11px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 rounded-xl ${
                      isActive 
                        ? 'text-white' 
                        : 'text-gray-500 dark:text-gray-400 hover:text-[#10b981] dark:hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navGlow"
                        className="absolute inset-0 bg-gradient-to-r from-[#10b981] to-teal-500 rounded-xl shadow-lg shadow-emerald-500/30"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.icon}</span>
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* RIGHT: Controls */}
        <div className="flex items-center gap-4 relative z-[110]">
          <div className="bg-white dark:bg-white/10 p-1.5 rounded-full shadow-sm border border-gray-200 dark:border-white/10">
            <ThemeToggle />
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-3 rounded-xl bg-[#10b981] text-white shadow-md hover:bg-teal-600 transition-colors"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-[#0B1120] border-b border-gray-200 dark:border-white/10 shadow-2xl xl:hidden overflow-hidden"
          >
            <div className="grid grid-cols-2 gap-3 p-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-3 p-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all ${
                      location.pathname === link.path
                      ? 'bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20'
                      : 'bg-gray-50 dark:bg-white/5 text-gray-500 hover:text-[#10b981]'
                    }`}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;