import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Gets the current page URL

  // Add a nice glassmorphism effect when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Updated to use 'path' for React Router instead of 'href'
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 top-0 start-0 transition-all duration-300 ${
        scrolled 
          ? 'bg-bgDark/90 backdrop-blur-md border-b border-cardLight py-3 shadow-lg' 
          : 'bg-transparent py-5 md:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 md:px-8 lg:px-16">
        
        {/* Logo - Now routes to home ("/") instead of "#home" */}
        <Link to="/" className="flex items-center space-x-3 group">
          <span className="self-center text-2xl font-serif font-bold whitespace-nowrap text-textMain group-hover:text-primary transition-colors tracking-widest uppercase">
            Rahul<span className="text-primary">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:order-1 items-center gap-8">
          <ul className="flex space-x-8 font-medium text-xs tracking-[0.15em]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`uppercase transition-colors ${
                    location.pathname === link.path 
                      ? 'text-primary font-bold' 
                      : 'text-textMuted hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Desktop Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Controls (Toggle + Hamburger) */}
        <div className="flex md:hidden md:order-2 items-center gap-4">
          {/* Mobile Theme Toggle */}
          <ThemeToggle />
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-textMuted rounded-lg hover:bg-cardLight hover:text-textMain focus:outline-none transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:hidden order-3 mt-4 absolute top-full left-0 px-4`}>
          <ul className="flex flex-col p-4 border border-cardLight rounded-2xl bg-cardDark/95 backdrop-blur-xl shadow-2xl space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 text-sm tracking-wider font-semibold rounded-xl uppercase transition-colors ${
                    location.pathname === link.path
                      ? 'bg-primary/10 text-primary'
                      : 'text-textMuted hover:bg-cardLight hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;