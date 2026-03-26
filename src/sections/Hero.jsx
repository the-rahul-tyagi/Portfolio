import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // <-- Imported Link for React Router
import { FiGithub, FiLinkedin, FiMail, FiBriefcase, FiZap, FiCode } from 'react-icons/fi';
import { portfolioData } from '../data/content';

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center pt-12 pb-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & Stats (Spans 7 columns) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 flex flex-col space-y-8"
        >
          <div>
            <span className="text-sm font-semibold tracking-wider text-textMuted uppercase mb-4 block">
              Full Stack Developer | DSA Enthusiast
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-textMain leading-tight mb-6">
              Crafting Impactful <br className="hidden md:block" />
              <span className="text-textMuted">Full Stack</span> <br className="hidden md:block" />
              Web Products
            </h1>
            <p className="text-lg text-textMuted max-w-2xl leading-relaxed">
              I am a B.Tech CSE student at LPU (CGPA 8.03), building scalable full-stack applications and solving complex algorithmic problems.
            </p>
          </div>
          
          {/* Action Buttons - Now using <Link> */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/projects" className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-lg shadow-primary/25">
              View Projects
            </Link>
            <Link to="/contact" className="px-8 py-3 bg-transparent border border-cardLight text-textMain hover:bg-cardLight font-medium rounded-lg transition-colors">
              Contact Me
            </Link>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            <div className="glass-card p-5">
              <h4 className="text-2xl font-bold text-textMain mb-1">3+</h4>
              <p className="text-xs text-textMuted font-medium uppercase tracking-wider">Major Projects</p>
            </div>
            <div className="glass-card p-5">
              <h4 className="text-2xl font-bold text-textMain mb-1">100+</h4>
              <p className="text-xs text-textMuted font-medium uppercase tracking-wider">DSA Solved</p>
            </div>
            <div className="glass-card p-5">
              <h4 className="text-2xl font-bold text-textMain mb-1">8.03</h4>
              <p className="text-xs text-textMuted font-medium uppercase tracking-wider">CGPA</p>
            </div>
            <div className="glass-card p-5">
              <h4 className="text-2xl font-bold text-textMain mb-1">4+</h4>
              <p className="text-xs text-textMuted font-medium uppercase tracking-wider">Certificates</p>
            </div>
          </div>

          {/* Social Links - Kept as <a> tags but made safe for external linking */}
          <div className="flex gap-4 pt-4">
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-textMuted hover:text-accent hover:border-accent transition-all"><FiLinkedin size={18} /></a>
            <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-textMuted hover:text-accent hover:border-accent transition-all"><FiGithub size={18} /></a>
            <a href={`mailto:${portfolioData.personal.email}`} className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-textMuted hover:text-accent hover:border-accent transition-all"><FiMail size={18} /></a>
          </div>
        </motion.div>

        {/* Right Column: Profile Image & Highlights (Spans 5 columns) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-8"
        >
          {/* Glowing Profile Image Container */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
            {/* The rotating glowing ring */}
            <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-accent border-r-primary animate-[spin_4s_linear_infinite] opacity-70"></div>
            {/* The inner image wrapper */}
            <div className="absolute inset-2 rounded-full overflow-hidden bg-cardLight border-4 border-bgDark">
              <img 
                src="/profile.jpeg" 
                alt="Rahul Tyagi" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = "https://via.placeholder.com/300" }}
              />
            </div>
          </div>

          {/* Professional Highlights Box */}
          <div className="w-full max-w-sm glass-card p-6 border-t-4 border-t-accent">
            <h3 className="text-lg font-serif font-bold text-textMain mb-4">Professional Highlights</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary"><FiCode size={18} /></div>
                <div>
                  <h4 className="text-sm font-bold text-textMain">Full Stack Delivery</h4>
                  <p className="text-xs text-textMuted mt-1">From React UI to secure Node.js APIs and MongoDB database design.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary"><FiZap size={18} /></div>
                <div>
                  <h4 className="text-sm font-bold text-textMain">Algorithmic Mindset</h4>
                  <p className="text-xs text-textMuted mt-1">Strong foundation in Java & C++ with 5-star HackerRank ratings.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-primary"><FiBriefcase size={18} /></div>
                <div>
                  <h4 className="text-sm font-bold text-textMain">AI Integrations</h4>
                  <p className="text-xs text-textMuted mt-1">Building practical integrations with modern Google Gemini AI workflows.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-cardLight text-xs text-accent font-medium text-center">
              &lt;/&gt; Open to internships and full stack opportunities.
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;