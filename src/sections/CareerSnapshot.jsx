import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiBookOpen, FiBriefcase, FiAward, FiStar, FiCode, FiTerminal, FiCheckCircle, FiMapPin } from 'react-icons/fi';

const tabs = [
  { id: 'Education', icon: <FiBookOpen /> },
  { id: 'Projects', icon: <FiCode /> },
  { id: 'Training', icon: <FiTerminal /> },
  { id: 'Achievements', icon: <FiStar /> },
  { id: 'Certificates', icon: <FiAward /> }
];

// Spring physics variants for smooth, bouncy entrances
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  exit: { opacity: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 15 }
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
};

const CareerSnapshot = () => {
  const [activeTab, setActiveTab] = useState('Education');

  const renderContent = () => {
    switch (activeTab) {
      case 'Education':
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col gap-4">
            {[
              { degree: "B.Tech - Computer Science", school: "Lovely Professional University", location: "Phagwara, Punjab", date: "2023 - Present", score: "CGPA: 8.03" },
              { degree: "Intermediate (PCM)", school: "New St. Stephens Public School", location: "Agra, UP", date: "2021 - 2022", score: "78.4%" },
              { degree: "Matriculation", school: "New St. Stephens Public School", location: "Agra, UP", date: "2019 - 2020", score: "83.4%" }
            ].map((edu, idx) => (
              <motion.div 
                key={idx} variants={cardVariants}
                className="relative bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-white/10 p-5 md:p-6 rounded-2xl flex flex-col md:flex-row justify-between md:items-center gap-4 group hover:border-[#10b981] dark:hover:border-[#10b981] transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden"
              >
                {/* Hover Sweep Effect */}
                <div className="absolute inset-0 bg-[#10b981]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#10b981] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top rounded-l-2xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1 group-hover:text-[#10b981] transition-colors">{edu.degree}</h3>
                  
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-3">
                    <span className="font-medium">{edu.school}</span>
                    <span className="text-gray-300 dark:text-gray-600">•</span>
                    <span className="flex items-center gap-1 text-[#10b981]"><FiMapPin size={14} />{edu.location}</span>
                  </div>

                  <span className="inline-block px-3 py-1 bg-emerald-50 dark:bg-[#10b981]/10 text-[#10b981] text-[10px] font-extrabold uppercase tracking-widest rounded-md border border-emerald-100 dark:border-[#10b981]/20">
                    {edu.score}
                  </span>
                </div>
                <div className="text-left md:text-right relative z-10">
                  <span className="text-sm font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-white/5 px-3 py-1.5 rounded-lg border border-gray-100 dark:border-white/5">{edu.date}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );

      case 'Projects':
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col gap-4">
            {[
              { 
                title: "Volunteer Registration System", 
                tech: ["MERN Stack", "JWT", "Gemini API"], 
                desc: "Automated FIFO waitlist algorithm with Gemini-powered SEO generation and dynamic volunteer matching." 
              },
              { 
                title: "UniProjectHub", 
                tech: ["PHP", "MySQL", "jQuery"], 
                desc: "Secure collaborative platform featuring native password hashing and complex SQL JOINs for statistics." 
              },
              { 
                title: "AI Study Buddy Pro", 
                tech: ["Python", "Streamlit", "Gemini 1.5 Pro"], 
                desc: "Educational tool generating adaptive MCQs with a multimodal Tutor Chat for real-time AI problem resolution." 
              }
            ].map((project, idx) => (
              <motion.div 
                key={idx} variants={cardVariants}
                className="relative bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-white/10 p-5 md:p-6 rounded-2xl hover:border-[#10b981] dark:hover:border-[#10b981] transition-all duration-300 shadow-sm hover:shadow-lg group overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#10b981]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-[#10b981] transition-colors">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-2.5 py-1 bg-gray-50 dark:bg-[#0B1120] text-gray-600 dark:text-gray-300 text-[9px] font-bold uppercase tracking-wider rounded border border-gray-200 dark:border-white/5 shadow-inner">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="relative z-10 text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">
                  {project.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        );

      case 'Training':
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col gap-4">
            <motion.div variants={cardVariants} className="relative bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-white/10 p-6 md:p-8 rounded-2xl hover:border-[#10b981] dark:hover:border-[#10b981] transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-[#10b981]/10 transition-colors"></div>
              
              <div className="relative z-10 flex items-center gap-4 mb-5">
                <div className="p-3 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-xl group-hover:text-[#10b981] group-hover:bg-[#10b981]/10 transition-colors">
                  <FiBriefcase size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">Mastering Java for App Development</h3>
                  <p className="text-[#10b981] text-xs font-extrabold mt-1 tracking-wider uppercase">LPU HRDC • Jun - Jul 2025</p>
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-gray-100 dark:border-white/5">
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  <strong className="text-gray-800 dark:text-white font-bold">Project: Brick Breaker Game.</strong> Engineered a real-time 2D game engine in Core Java (Swing/AWT) featuring custom collision physics, multi-hit logic, and an 8ms tick rate via Timer loops.
                </p>
              </div>
            </motion.div>
          </motion.div>
        );

      case 'Achievements':
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="grid md:grid-cols-1 gap-4">
            {[
              "Solved 100+ algorithmic problems on LeetCode",
              "Secured a 5-Star Rating in Java, Python, and C++ on HackerRank",
              "Earned 10+ skill badges on MongoDB Atlas & MongoDB University"
            ].map((achievement, idx) => (
              <motion.div 
                key={idx} variants={cardVariants}
                className="relative bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-white/10 p-5 md:p-6 rounded-2xl flex items-center gap-5 hover:border-[#10b981] dark:hover:border-[#10b981] transition-all duration-300 shadow-sm hover:shadow-lg group overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#10b981]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                
                <div className="relative z-10 w-12 h-12 rounded-xl bg-gray-50 dark:bg-[#0B1120] border border-gray-100 dark:border-white/5 flex items-center justify-center text-[#10b981] shrink-0 group-hover:scale-110 group-hover:bg-[#10b981] group-hover:text-white dark:group-hover:text-[#0B1120] shadow-inner transition-all duration-300">
                  <FiStar size={20} className={idx === 1 ? "fill-current" : ""} />
                </div>
                <h3 className="relative z-10 text-gray-800 dark:text-white font-medium text-sm md:text-base">{achievement}</h3>
              </motion.div>
            ))}
          </motion.div>
        );

      case 'Certificates':
        return (
          <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Node.js", issuer: "HackerRank" },
              { title: "Python", issuer: "HackerRank" },
              { title: "Cloud Computing - Elite", issuer: "NPTEL (IIT Kharagpur)" },
              { title: "Responsive Web Design", issuer: "freeCodeCamp" }
            ].map((cert, idx) => (
              <motion.div 
                key={idx} variants={cardVariants}
                className="relative bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-white/10 p-5 rounded-2xl flex items-center gap-4 hover:border-[#10b981] dark:hover:border-[#10b981] transition-all duration-300 shadow-sm hover:shadow-lg group overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#10b981]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                
                <div className="relative z-10 w-10 h-10 rounded-full bg-gray-50 dark:bg-[#0B1120] border border-gray-100 dark:border-white/5 flex items-center justify-center text-[#10b981] group-hover:scale-110 transition-transform duration-300 shrink-0 shadow-inner">
                  <FiCheckCircle size={18} />
                </div>
                <div className="relative z-10">
                  <h3 className="text-gray-800 dark:text-white font-bold text-sm group-hover:text-[#10b981] transition-colors">{cert.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5 font-medium">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="resume" className="py-24 px-4 md:px-8 lg:px-12 min-h-screen bg-[#f4f7f9] dark:bg-[#0B1120] relative overflow-hidden flex flex-col justify-center transition-colors duration-300">
      
      {/* Animated Ambient Glows */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#10b981]/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none -z-10 -translate-y-1/2"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none -z-10"
      />
      
      <div className="max-w-[1200px] w-full mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 100 }}>
             <div className="flex items-center gap-3 mb-3">
               <span className="relative flex h-3 w-3">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10b981]"></span>
               </span>
               <span className="text-xs font-extrabold tracking-widest text-gray-500 dark:text-gray-400 uppercase">Executive Summary</span>
             </div>
             <h2 className="font-sans text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white tracking-tight transition-colors">
               My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-teal-500">Resume</span>
             </h2>
          </motion.div>
          
          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 120 }}
            href="/resume.pdf" 
            download 
            className="group relative flex items-center gap-3 px-8 py-4 bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white text-sm font-bold uppercase tracking-widest rounded-2xl transition-all shadow-md hover:shadow-xl hover:border-[#10b981] dark:hover:border-[#10b981]/50 overflow-hidden"
          >
            {/* Button Hover Sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#10b981] to-teal-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out -z-10"></div>
            <FiDownload size={20} className="text-[#10b981] group-hover:text-white group-hover:-translate-y-1 transition-all duration-300" /> 
            <span className="group-hover:text-white transition-colors duration-300">Download CV</span>
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Animated Tab Navigation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 100 }}
            className="lg:col-span-4 bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-white/5 rounded-3xl p-3 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible sticky top-28 z-20 scrollbar-hide shadow-xl"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative flex items-center gap-4 px-6 py-4 rounded-2xl text-left font-bold text-sm transition-colors duration-300 whitespace-nowrap lg:whitespace-normal group"
              >
                {/* Fluid Background Indicator */}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="resumeTabIndicator"
                    className="absolute inset-0 bg-[#10b981] rounded-2xl shadow-md"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                
                <span className={`relative z-10 transition-colors duration-300 ${activeTab === tab.id ? 'text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200'}`}>
                  {React.cloneElement(tab.icon, { size: 18 })}
                </span>
                <span className={`relative z-10 tracking-wide transition-colors duration-300 ${activeTab === tab.id ? 'text-white' : 'text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'}`}>
                  {tab.id}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Right Content Area */}
          <div className="lg:col-span-8 min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                transition={{ duration: 0.25 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CareerSnapshot;