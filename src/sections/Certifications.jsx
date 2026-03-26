import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiExternalLink, FiX, FiBriefcase, FiCalendar, FiMaximize, FiArrowLeft, FiShield } from 'react-icons/fi';

const certificationsData = [
  {
    title: "Node.js Architecture",
    category: "Full Stack",
    issuer: "HackerRank",
    platform: "HackerRank Assessments",
    date: "August 2023",
    description: "Demonstrated proficiency in server-side JavaScript, event-driven architecture, and REST API design with Express.",
    skills: ["Node.js", "Express", "API Routing"],
    image: "/images/node-thumb.jpg",       
    pdfUrl: "/certificates/node-cert.pdf"  
  },
  {
    title: "Python Problem Solving",
    category: "DSA / Programming",
    issuer: "HackerRank",
    platform: "HackerRank Assessments",
    date: "July 2023",
    description: "Showcased strong knowledge of Python data structures, algorithms, and object-oriented programming principles.",
    skills: ["Python", "Algorithms", "OOP"],
    image: "/images/python-thumb.jpg",
    pdfUrl: "/certificates/python-cert.pdf"
  },
  {
    title: "Cloud Computing Elite",
    category: "Achievements",
    issuer: "NPTEL (IIT KGP)",
    platform: "NPTEL Online",
    date: "March 2024",
    description: "Expertise in cloud architecture, virtual machine deployment, distributed systems, and high availability.",
    skills: ["Cloud Architecture", "Distributed Systems"],
    image: "/images/nptel-thumb.jpg",
    pdfUrl: "/certificates/nptel-cloud.pdf"
  },
  {
    title: "Responsive Web Design",
    category: "Full Stack",
    issuer: "freeCodeCamp",
    platform: "freeCodeCamp",
    date: "May 2023",
    description: "Mastered frontend layouts using CSS Grid and Flexbox to create accessible, mobile-first web applications.",
    skills: ["HTML5", "CSS3", "Flexbox"],
    image: "/images/responsive-thumb.jpg",
    pdfUrl: "/certificates/responsive-web.pdf"
  }
];

const categories = ["All", ...new Set(certificationsData.map(cert => cert.category))];

// Helper to map tech stack names to specific brand colors for visual pop
const getTechColor = (tech) => {
  const t = tech.toLowerCase();
  if (t.includes("node")) return "text-green-500 bg-green-500/10 border-green-500/20";
  if (t.includes("python")) return "text-yellow-500 bg-yellow-500/10 border-yellow-500/20";
  if (t.includes("cloud")) return "text-blue-500 bg-blue-500/10 border-blue-500/20";
  if (t.includes("html") || t.includes("css")) return "text-orange-500 bg-orange-500/10 border-orange-500/20";
  if (t.includes("api") || t.includes("express")) return "text-cyan-500 bg-cyan-500/10 border-cyan-500/20";
  if (t.includes("algorithms")) return "text-purple-500 bg-purple-500/10 border-purple-500/20";
  return "text-gray-600 dark:text-gray-300 bg-gray-500/10 border-gray-500/20"; // Default
};

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);
  const [showFullPdf, setShowFullPdf] = useState(false);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedCert]);

  const handleCloseModal = () => {
    setSelectedCert(null);
    setTimeout(() => setShowFullPdf(false), 300);
  };

  const filteredCerts = certificationsData.filter(cert => 
    activeFilter === "All" || cert.category === activeFilter
  );

  return (
    <section id="certifications" className="py-24 px-4 md:px-8 lg:px-12 min-h-screen bg-[#f4f7f9] dark:bg-[#0B1120] relative overflow-hidden transition-colors duration-500 flex flex-col justify-center">
      
      {/* High-Tech Grid Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMTI4LCAxMjgsIDEyOCwgMC4xKSIvPjwvc3ZnPg==')] opacity-50 dark:opacity-20 z-0 pointer-events-none"></div>

      {/* Massive Glowing Orbs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-[#10b981] to-teal-500 rounded-full blur-[150px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1], rotate: [0, -90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-gradient-to-tl from-blue-500 to-indigo-500 rounded-full blur-[150px] pointer-events-none z-0"
      />

      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        
        {/* Header & Filters Area */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md mb-6 shadow-sm">
              <FiShield className="text-[#10b981] animate-pulse" size={16} />
              <span className="text-xs font-black tracking-[0.2em] text-gray-800 dark:text-gray-300 uppercase">
                Verified Credentials
              </span>
            </div>
            <h2 className="font-sans text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight drop-shadow-sm">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-teal-400 to-blue-500">Certifications</span>
            </h2>
          </motion.div>

          {/* Premium Animated Tabs */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 bg-white/40 dark:bg-[#1e293b]/40 backdrop-blur-xl p-2 rounded-2xl border border-white/50 dark:border-white/10 shadow-lg"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative px-5 py-2.5 md:px-6 md:py-3 rounded-xl text-sm font-bold transition-all duration-500 ${
                  activeFilter === category 
                    ? 'text-white shadow-md' 
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-white/5'
                }`}
              >
                {activeFilter === category && (
                  <motion.div 
                    layoutId="certTab"
                    className="absolute inset-0 bg-gradient-to-r from-[#10b981] to-teal-500 rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 tracking-wide">{category}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* 3-Column Certifications Grid (Changed from 4 for larger cards) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)", transition: { duration: 0.2 } }}
                transition={{ type: "spring", stiffness: 120, damping: 20, delay: index * 0.05 }}
                key={cert.title}
                className="group relative bg-white/70 dark:bg-[#1e293b]/50 backdrop-blur-xl border-2 border-gray-100/50 dark:border-white/5 rounded-[2rem] hover:border-[#10b981]/50 dark:hover:border-[#10b981]/50 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl dark:shadow-none flex flex-col h-full min-h-[440px]"
              >
                {/* Glowing Top Border Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10b981] to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>

                {/* Ambient Card Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

                {/* Premium Image Area */}
                <div 
                  className="relative h-56 w-full p-4 pb-0 cursor-pointer z-10"
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="w-full h-full rounded-[1.25rem] overflow-hidden relative shadow-sm border border-gray-200/50 dark:border-white/10">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      onError={(e) => { e.target.src = "https://via.placeholder.com/600x400/eeeeee/999999?text=Certificate" }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Dark Hover Overlay */}
                    <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-md border border-white/50 text-white px-5 py-2 rounded-full flex items-center gap-2 font-bold text-xs transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                        <FiMaximize size={14} /> View Details
                      </div>
                    </div>
                  </div>

                  {/* Category Badge Floating on Image */}
                  <div className="absolute top-6 right-6 bg-gray-900/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full z-10 shadow-md">
                    {cert.category}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10">
                  <h3 className="font-extrabold text-2xl text-gray-900 dark:text-white leading-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#10b981] group-hover:to-teal-500 transition-all duration-300">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-[#10b981] text-sm font-black uppercase tracking-widest flex items-center gap-1.5">
                      <FiAward size={16} /> {cert.issuer}
                    </p>
                  </div>

                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 line-clamp-3 mb-6 font-medium leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills / Tech Stack */}
                  <div className="mt-auto flex flex-wrap gap-2 pt-5 border-t border-gray-100 dark:border-white/10">
                    {cert.skills.slice(0, 3).map((skill, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-lg border shadow-sm ${getTechColor(skill)}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* --- CINEMATIC MODAL --- */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            
            {/* Dark Frosted Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gray-900/70 dark:bg-black/80 backdrop-blur-xl cursor-pointer"
              onClick={handleCloseModal}
            />

            {/* Modal Container - Dynamically Resizes for PDF view */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`relative bg-white dark:bg-[#0B1120] border-2 border-gray-100 dark:border-white/10 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row z-10 transition-all duration-500 ${
                showFullPdf 
                  ? 'w-[95vw] h-[95vh] max-w-7xl' // Massive size for PDF mode
                  : 'w-full max-w-6xl h-[90vh] md:h-[80vh]' // Slightly larger size for Details mode
              }`}
            >
              
              {showFullPdf ? (
                /* PDF VIEWER MODE */
                <div className="flex flex-col w-full h-full animate-fadeIn relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#10b981] to-teal-500 z-50"></div>
                  
                  <div className="flex justify-between items-center px-8 py-4 border-b border-gray-100 dark:border-white/10 bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md z-40">
                    <button 
                      onClick={() => setShowFullPdf(false)} 
                      className="flex items-center gap-2 text-gray-500 hover:text-[#10b981] dark:text-gray-400 dark:hover:text-[#10b981] font-bold text-sm transition-colors"
                    >
                      <FiArrowLeft size={18} /> Back to Details
                    </button>
                    <button onClick={handleCloseModal} className="p-2 bg-gray-100 dark:bg-white/5 hover:bg-red-500 dark:hover:bg-red-500 text-gray-500 dark:text-gray-400 hover:text-white rounded-full transition-all duration-300">
                      <FiX size={20} />
                    </button>
                  </div>
                  <div className="flex-grow w-full bg-gray-200 dark:bg-gray-900 relative">
                    {/* The PDF iframe */}
                    <iframe
                      src={`${selectedCert.pdfUrl}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                      className="absolute inset-0 w-full h-full border-none"
                      title="Full Certificate"
                    />
                  </div>
                </div>
              ) : (
                /* SPLIT SCREEN DETAILS MODE */
                <div className="flex flex-col md:flex-row w-full h-full animate-fadeIn relative">
                  
                  {/* Left Side: Image Showcase */}
                  <div className="md:w-[55%] relative bg-gray-50 dark:bg-[#0B1120] p-8 md:p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 dark:border-white/10 h-[40%] md:h-full overflow-hidden">
                    {/* Ambient Pedestal Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#10b981]/20 rounded-full blur-[80px] pointer-events-none"></div>
                    
                    <img 
                      src={selectedCert.image} 
                      alt={selectedCert.title} 
                      className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-gray-200/50 dark:border-white/10 relative z-10"
                    />
                  </div>

                  {/* Right Side: Information Content */}
                  <div className="md:w-[45%] p-8 md:p-14 flex flex-col overflow-y-auto h-[60%] md:h-full relative bg-white dark:bg-[#1e293b]/30">
                    
                    <button onClick={handleCloseModal} className="absolute top-6 right-6 p-2 bg-gray-100 dark:bg-white/5 hover:bg-red-500 dark:hover:bg-red-500 text-gray-400 hover:text-white rounded-full transition-all duration-300">
                      <FiX size={20} />
                    </button>

                    <div className="self-start mb-6 pr-10">
                      <span className="flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-[#10b981]/10 to-teal-500/10 text-[#10b981] text-xs font-black uppercase tracking-widest rounded-full border border-[#10b981]/20">
                        <FiShield size={16} /> {selectedCert.category}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
                      {selectedCert.title}
                    </h2>

                    <div className="grid grid-cols-2 gap-6 mb-8 bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/5">
                      <div>
                        <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-[10px] md:text-xs font-black uppercase tracking-widest mb-2">
                          <FiBriefcase size={14} className="text-[#10b981]" /> Platform
                        </div>
                        <p className="font-bold text-gray-800 dark:text-gray-200 text-sm md:text-base">{selectedCert.platform}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-[10px] md:text-xs font-black uppercase tracking-widest mb-2">
                          <FiCalendar size={14} className="text-[#10b981]" /> Issued Date
                        </div>
                        <p className="font-bold text-gray-800 dark:text-gray-200 text-sm md:text-base">{selectedCert.date}</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <div className="text-gray-400 dark:text-gray-500 text-xs font-black uppercase tracking-widest mb-3">
                        Credential Overview
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed font-medium">
                        {selectedCert.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-6 flex gap-4 border-t border-gray-100 dark:border-white/10">
                      <button 
                        onClick={() => setShowFullPdf(true)} 
                        className="flex-1 bg-gradient-to-r from-[#10b981] to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:-translate-y-1 hover:shadow-emerald-500/40 text-base md:text-lg"
                      >
                        <FiMaximize size={20} /> View Certificate
                      </button>
                    </div>

                  </div>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
    </section>
  );
};

export default Certifications;