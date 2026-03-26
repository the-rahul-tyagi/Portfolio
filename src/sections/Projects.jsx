import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiFolder, FiCalendar, FiCode, FiLayers } from 'react-icons/fi';

// 1. Strictly utilizing ONLY the data provided in your CV
const projectsData = [
  {
    title: "Volunteer Registration System",
    date: "Nov 2025",
    category: "Full Stack",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Gemini API"],
    githubLink: "https://github.com/the-rahul-tyagi", // Update with exact repo link if needed
    bullets: [
      "Engineered an automated Node.js/MongoDB FIFO waitlist algorithm, eliminating manual overhead and maximizing event capacity.",
      "Architected a RESTful API with strict JWT-based Role-Based Access Control (RBAC) to secure sensitive admin and volunteer endpoints.",
      "Integrated Google Gemini API to autonomously generate SEO-friendly event descriptions and dynamically match volunteers by skill set."
    ]
  },
  {
    title: "AI Study Buddy Pro",
    date: "Apr 2025",
    category: "AI & Python",
    techStack: ["Python", "Streamlit", "Gemini 1.5 Pro", "Pillow"],
    githubLink: "https://github.com/the-rahul-tyagi",
    bullets: [
      "Built a Python/Streamlit educational platform using Gemini 1.5 Pro to dynamically generate personalized study guides and adaptive MCQs.",
      "Implemented a multimodal Tutor Chat using the Pillow library, enabling users to upload images for real-time AI problem resolution.",
      "Engineered a comprehensive gamification system using Streamlit session-state to track study streaks, badges, and live XP leaderboards."
    ]
  },
  {
    title: "UniProjectHub",
    date: "May 2025",
    category: "Full Stack",
    techStack: ["PHP", "MySQL", "HTML5", "CSS3", "jQuery", "SQL"],
    githubLink: "https://github.com/the-rahul-tyagi",
    bullets: [
      "Developed a PHP/MySQL collaborative platform enabling cross-university students to securely form teams and showcase portfolios.",
      "Fortified backend security against SQL injection using parameterized queries and implemented secure native PHP password hashing.",
      "Designed a normalized database schema, utilizing complex SQL JOINs to efficiently render dynamic university and project statistics."
    ]
  },
  {
    title: "Brick Breaker Game",
    date: "Jun 2025 - Jul 2025",
    category: "Java",
    techStack: ["Core Java", "Swing/AWT", "OOP"],
    githubLink: "https://github.com/the-rahul-tyagi",
    bullets: [
      "Engineered a real-time game engine utilizing a javax.swing.Timer driven loop (8ms tick rate) and overridden paintComponent methods for flicker-free 2D rendering.",
      "Architected a scalable Object-Oriented system leveraging Java Enums and ArrayLists to dynamically manage entity states and multi-hit brick health.",
      "Developed custom 2D collision physics using Rectangle bounding box intersections, implementing dynamic ball deflection angles."
    ]
  }
];

const categories = ["All Projects", "Full Stack", "AI & Python", "Java"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = projectsData.filter(project => 
    activeFilter === "All Projects" || project.category === activeFilter
  );

  return (
    <section id="projects" className="py-24 px-4 md:px-8 lg:px-12 min-h-screen bg-[#f4f7f9] dark:bg-[#0B1120] relative overflow-hidden transition-colors duration-300">
      
      {/* Animated Ambient Glows */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#10b981]/10 rounded-full blur-[150px] pointer-events-none -z-10"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10"
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10b981]"></span>
              </span>
              <span className="text-xs font-extrabold tracking-widest text-gray-500 dark:text-gray-400 uppercase">Architecture & Code</span>
            </div>
            <h2 className="font-sans text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white tracking-tight transition-colors">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-teal-400">Projects</span>
            </h2>
          </motion.div>

          {/* Animated Filter Tabs */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 bg-white dark:bg-[#1e293b]/50 p-2 rounded-2xl border border-gray-100 dark:border-white/5 shadow-sm"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative px-5 py-2.5 rounded-xl text-sm font-bold transition-colors duration-300 ${
                  activeFilter === category 
                    ? 'text-white' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'
                }`}
              >
                {activeFilter === category && (
                  <motion.div 
                    layoutId="projectFilter"
                    className="absolute inset-0 bg-[#10b981] rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid xl:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)", transition: { duration: 0.2 } }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.05 }}
                key={project.title}
                className="group relative bg-white dark:bg-[#1e293b]/60 backdrop-blur-xl border border-gray-100 dark:border-white/5 p-8 md:p-10 rounded-[2rem] hover:border-[#10b981]/50 dark:hover:border-[#10b981]/50 transition-colors duration-500 overflow-hidden shadow-sm hover:shadow-xl dark:shadow-none flex flex-col h-full"
              >
                {/* Hover Sweep Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Top Bar: Folder Icon & GitHub Link */}
                <div className="flex justify-between items-center mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-[#0B1120] border border-emerald-100 dark:border-white/5 flex items-center justify-center text-[#10b981] group-hover:scale-110 transition-transform duration-500 shadow-sm">
                    <FiFolder size={24} />
                  </div>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-[#0B1120] border border-gray-200 dark:border-white/5 rounded-xl text-gray-600 dark:text-gray-400 hover:text-[#10b981] dark:hover:text-[#10b981] hover:border-[#10b981]/30 transition-all text-sm font-bold"
                  >
                    <FiGithub size={18} /> Code
                  </a>
                </div>

                {/* Project Title & Meta */}
                <div className="mb-6 relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-[#10b981] transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><FiLayers className="text-[#10b981]" /> {project.category}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                    <span className="flex items-center gap-1.5"><FiCalendar className="text-[#10b981]" /> {project.date}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="flex-grow mb-8 relative z-10">
                  <ul className="space-y-3">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                        <span className="text-[#10b981] mt-1.5 shrink-0 text-[10px]">▶</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Footer */}
                <div className="pt-6 border-t border-gray-100 dark:border-white/5 mt-auto relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-gray-50 dark:bg-[#0B1120] text-gray-600 dark:text-gray-300 text-xs font-bold uppercase tracking-wider rounded-lg border border-gray-200 dark:border-white/5 shadow-inner">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;