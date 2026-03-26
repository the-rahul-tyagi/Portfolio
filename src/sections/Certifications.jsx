import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiAward, FiExternalLink, FiX, FiBriefcase, FiCalendar, FiMaximize, FiArrowLeft } from 'react-icons/fi';

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
    // Reduced padding and used flex/justify-center to strictly center it on screen
    <section id="certifications" className="pt-24 pb-8 px-4 md:px-8 lg:px-12 min-h-screen flex flex-col justify-center bg-[#f4f7f9] dark:bg-bgDark transition-colors">
      
      {/* Expanded max-width so 4 columns fit cleanly */}
      <div className="max-w-[1400px] w-full mx-auto">
        
        {/* Compact Header & Filters inline on large screens */}
        <div className="flex flex-col xl:flex-row justify-between items-center mb-8 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center xl:text-left"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 dark:text-textMain flex items-center justify-center xl:justify-start gap-3">
              <span className="text-[#10b981]"><FiAward /></span>
              Verified Credentials
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-[#10b981] text-white shadow-md shadow-emerald-500/20"
                    : "bg-white text-gray-500 hover:bg-gray-100 dark:bg-cardDark dark:text-textMuted dark:hover:bg-cardLight shadow-sm border border-gray-100 dark:border-cardLight"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* 4-Column Grid ensures a single row on desktop */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence>
            {filteredCerts.map((cert, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                key={cert.title}
                className="bg-white dark:bg-cardDark rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-cardLight overflow-hidden group transition-all duration-300 flex flex-col h-full min-h-[380px]"
              >
                {/* Compact Image Area */}
                <div 
                  className="relative h-40 bg-gray-100 dark:bg-bgDark overflow-hidden cursor-pointer"
                  onClick={() => setSelectedCert(cert)}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    onError={(e) => { e.target.src = "https://via.placeholder.com/600x400/eeeeee/999999?text=Certificate" }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className="absolute top-2 right-2 bg-gray-800/80 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full z-10">
                    {cert.category}
                  </div>

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <div className="bg-white/20 backdrop-blur-md border border-white/50 text-white px-4 py-1.5 rounded-full flex items-center gap-2 font-bold text-xs transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <FiExternalLink size={14} /> Details
                    </div>
                  </div>
                </div>

                {/* Tight Content Area */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg text-gray-800 dark:text-textMain leading-tight mb-1 line-clamp-1">
                    {cert.title}
                  </h3>
                  <p className="text-[#10b981] text-xs font-bold mb-3 flex items-center gap-1.5">
                    <FiBriefcase size={10} /> {cert.issuer}
                  </p>

                  <p className="text-xs text-gray-500 dark:text-textMuted line-clamp-2 mb-4">
                    {cert.description}
                  </p>

                  {/* Skills pushed to bottom */}
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-4 border-t border-gray-100 dark:border-cardLight">
                    {cert.skills.slice(0, 3).map((skill, i) => (
                      <span key={i} className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-500/10 text-[#10b981] text-[10px] font-bold uppercase tracking-wider rounded-md border border-emerald-100 dark:border-emerald-500/20">
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

      {/* --- MODAL (Unchanged functionality, slightly tightened padding) --- */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm cursor-pointer"
              onClick={handleCloseModal}
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="relative w-full max-w-5xl bg-white dark:bg-cardDark rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 h-[85vh]"
            >
              
              {showFullPdf ? (
                /* PDF VIEWER */
                <div className="flex flex-col w-full h-full animate-fadeIn">
                  <div className="flex justify-between items-center px-6 py-3 border-b border-gray-100 dark:border-cardLight bg-gray-50 dark:bg-bgDark">
                    <button 
                      onClick={() => setShowFullPdf(false)} 
                      className="flex items-center gap-2 text-gray-500 hover:text-[#10b981] dark:text-textMuted dark:hover:text-[#10b981] font-bold text-sm transition-colors"
                    >
                      <FiArrowLeft size={16} /> Back to Details
                    </button>
                    <button onClick={handleCloseModal} className="p-1.5 bg-white dark:bg-cardDark hover:bg-red-50 dark:hover:bg-red-500/20 text-gray-400 hover:text-red-500 rounded-full transition-colors border border-gray-100 dark:border-cardLight">
                      <FiX size={18} />
                    </button>
                  </div>
                  <div className="flex-grow w-full bg-gray-200 dark:bg-bgDark relative">
                    <iframe
                      src={`${selectedCert.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                      className="absolute inset-0 w-full h-full border-none"
                      title="Full Certificate"
                    />
                  </div>
                </div>
              ) : (
                /* SPLIT SCREEN DETAILS */
                <div className="flex flex-col md:flex-row w-full h-full animate-fadeIn">
                  
                  <div className="md:w-[55%] bg-gray-50 dark:bg-bgDark p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 dark:border-cardLight h-1/2 md:h-full">
                    <img 
                      src={selectedCert.image} 
                      alt={selectedCert.title} 
                      className="max-w-full max-h-full object-contain rounded-lg shadow-sm border border-gray-200 dark:border-cardLight"
                    />
                  </div>

                  <div className="md:w-[45%] p-6 md:p-8 flex flex-col overflow-y-auto h-1/2 md:h-full relative">
                    
                    <button onClick={handleCloseModal} className="absolute top-4 right-4 p-2 bg-gray-50 dark:bg-bgDark hover:bg-red-50 text-gray-400 hover:text-red-500 border border-gray-100 dark:border-cardLight rounded-full transition-colors">
                      <FiX size={16} />
                    </button>

                    <div className="self-start mb-4 pr-8">
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-500/10 text-[#10b981] text-[10px] font-bold uppercase tracking-widest rounded-full border border-emerald-100 dark:border-emerald-500/20">
                        <FiAward size={12} /> {selectedCert.category}
                      </span>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-textMain mb-6 leading-tight">
                      {selectedCert.title}
                    </h2>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-1.5 text-gray-400 dark:text-textMuted text-[9px] font-bold uppercase tracking-widest mb-1">
                          <FiBriefcase size={10} /> Platform
                        </div>
                        <p className="font-bold text-gray-800 dark:text-textMain text-xs">{selectedCert.platform}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 text-gray-400 dark:text-textMuted text-[9px] font-bold uppercase tracking-widest mb-1">
                          <FiCalendar size={10} /> Issued Date
                        </div>
                        <p className="font-bold text-gray-800 dark:text-textMain text-xs">{selectedCert.date}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-gray-400 dark:text-textMuted text-[9px] font-bold uppercase tracking-widest mb-2">
                        Description
                      </div>
                      <p className="text-gray-600 dark:text-textMuted text-xs leading-relaxed">
                        {selectedCert.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 flex gap-3 border-t border-gray-100 dark:border-cardLight">
                      <button 
                        onClick={() => setShowFullPdf(true)} 
                        className="flex-1 bg-[#10b981] hover:bg-emerald-600 text-white font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm shadow-md shadow-emerald-500/20"
                      >
                        <FiMaximize size={16} /> Full View
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