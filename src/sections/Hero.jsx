import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { FiGithub, FiLinkedin, FiMail, FiBriefcase, FiZap, FiCode, FiArrowRight } from 'react-icons/fi';
import { portfolioData } from '../data/content';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 px-4 md:px-8 lg:px-12 bg-[#f4f7f9] dark:bg-[#0B1120] overflow-hidden transition-colors duration-300">
      
      {/* Ambient Animated Background Glows */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, -90, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#10b981]/20 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* === LEFT COLUMN: Text & Actions === */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col space-y-8 mt-10 lg:mt-0"
        >
          {/* Greeting Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 w-fit px-4 py-2 bg-white/60 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10b981]"></span>
            </span>
            <span className="text-xs md:text-sm font-bold tracking-widest text-gray-600 dark:text-gray-300 uppercase">
              Hello, I am Rahul Tyagi
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-4">
              Crafting Impactful <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-teal-400 to-blue-500 animate-gradient-x">
                Full Stack
              </span> <br />
              Web Products.
            </h1>
            
            {/* Typewriter Subheading */}
            <div className="text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-400 h-[30px] mb-4">
              <span className="mr-2">I am a</span>
              <span className="text-[#10b981]">
                <Typewriter
                  words={['Full Stack Developer.', 'DSA Enthusiast.', 'B.Tech CSE Student @ LPU.', 'Problem Solver.']}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </div>

            <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed font-medium">
              Bridging the gap between intuitive user interfaces and robust backend architectures. Currently maintaining an 8.03 CGPA while solving complex algorithmic problems.
            </p>
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              to="/projects" 
              className="group relative flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#10b981] to-teal-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              View Projects 
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="px-8 py-3.5 bg-white dark:bg-transparent border-2 border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-bold rounded-xl hover:border-[#10b981] hover:text-[#10b981] dark:hover:border-[#10b981] dark:hover:text-[#10b981] hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-gray-200 dark:border-white/10">
            {[
              { label: 'Major Projects', value: '3+' },
              { label: 'DSA Solved', value: '100+' },
              { label: 'CGPA', value: '8.03' },
              { label: 'Certificates', value: '4+' }
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white/50 dark:bg-[#1e293b]/50 backdrop-blur-md p-4 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                <h4 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gray-800 to-gray-500 dark:from-white dark:to-gray-400 mb-1">{stat.value}</h4>
                <p className="text-[10px] md:text-xs text-[#10b981] font-bold uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* === RIGHT COLUMN: Visuals === */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center space-y-10 relative"
        >
          {/* Continuous Floating Animation Wrapper */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex flex-col items-center"
          >
            {/* Sophisticated Profile Image Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center group">
              {/* Outer Spinning Gradient Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#10b981] via-blue-500 to-teal-300 animate-[spin_5s_linear_infinite] opacity-70 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              {/* Inner Solid Border to mask the spin */}
              <div className="absolute inset-1 rounded-full bg-white dark:bg-[#0B1120] z-0"></div>
              
              {/* Actual Image */}
              <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-gray-100 dark:border-[#1e293b] z-10 shadow-2xl bg-gray-100 dark:bg-gray-800">
                <img 
                  src="/profile.jpeg" 
                  alt="Rahul Tyagi" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/300" }}
                />
              </div>

              {/* Floating Social Badges */}
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="absolute -right-2 top-10 z-20 w-12 h-12 bg-white dark:bg-[#1e293b] rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:scale-110 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all border border-gray-100 dark:border-white/10">
                <FiLinkedin size={20} />
              </a>
              <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="absolute -left-2 bottom-16 z-20 w-12 h-12 bg-white dark:bg-[#1e293b] rounded-full shadow-lg flex items-center justify-center text-gray-800 dark:text-white hover:scale-110 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all border border-gray-100 dark:border-white/10">
                <FiGithub size={20} />
              </a>
              <a href={`mailto:${portfolioData.personal.email}`} className="absolute -right-2 bottom-10 z-20 w-12 h-12 bg-white dark:bg-[#1e293b] rounded-full shadow-lg flex items-center justify-center text-red-500 hover:scale-110 hover:bg-red-50 dark:hover:bg-red-900/30 transition-all border border-gray-100 dark:border-white/10">
                <FiMail size={20} />
              </a>
            </div>

            {/* Professional Highlights Box */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="w-full max-w-sm bg-white/70 dark:bg-[#1e293b]/70 backdrop-blur-xl p-6 rounded-3xl border border-gray-100 dark:border-white/10 shadow-xl mt-8 relative overflow-hidden"
            >
              {/* Highlight Box Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10b981] to-blue-500"></div>

              <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-5">Professional Highlights</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4 group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-[#10b981] group-hover:scale-110 group-hover:bg-[#10b981] group-hover:text-white transition-all shrink-0">
                    <FiCode size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-[#10b981] transition-colors">Full Stack Delivery</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">From React UI to secure Node.js APIs and MongoDB database design.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all shrink-0">
                    <FiZap size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">Algorithmic Mindset</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">Strong foundation in Java & C++ with 5-star HackerRank ratings.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all shrink-0">
                    <FiBriefcase size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors">AI Integrations</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">Building practical integrations with modern Google Gemini AI workflows.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;