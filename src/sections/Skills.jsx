import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { FiCode, FiLayout, FiDatabase, FiTerminal } from 'react-icons/fi';

// 1. We map your resume data into formats the Radar Chart can read
const skillCategories = {
  Overview: [
    { subject: 'Frontend', score: 90, icon: <FiLayout /> },
    { subject: 'Backend', score: 85, icon: <FiTerminal /> },
    { subject: 'Languages', score: 88, icon: <FiCode /> },
    { subject: 'Databases', score: 82, icon: <FiDatabase /> },
    { subject: 'Tools', score: 85, icon: <FiTerminal /> }
  ],
  Languages: [
    { subject: 'Java', score: 90 },
    { subject: 'C++', score: 85 },
    { subject: 'Python', score: 80 },
    { subject: 'JavaScript', score: 88 },
    { subject: 'PHP', score: 75 },
    { subject: 'HTML/CSS', score: 95 }
  ],
  Frameworks: [
    { subject: 'React.js', score: 92 },
    { subject: 'Express.js', score: 85 },
    { subject: 'Tailwind CSS', score: 95 }
  ],
  Tools: [
    { subject: 'Node.js', score: 88 },
    { subject: 'MongoDB', score: 85 },
    { subject: 'MySQL', score: 80 },
    { subject: 'Git/GitHub', score: 90 }
  ]
};

const tabs = Object.keys(skillCategories);

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const currentData = skillCategories[activeTab];

  return (
    <section id="skills" className="py-24 px-4 md:px-8 lg:px-16 border-t border-cardLight relative overflow-hidden">
      
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-textMain mb-4">My <span className="text-primary">Skills</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
          <p className="text-textMuted max-w-2xl mx-auto">
            Visualizing technical mastery through data and interactive representation.
          </p>
        </motion.div>

        {/* Interactive Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeTab === tab 
                  ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]' 
                  : 'bg-transparent border-cardLight text-textMuted hover:border-textMuted hover:text-textMain'
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side: Radar Chart */}
          <motion.div 
            key={`chart-${activeTab}`} // Forces re-animation on tab change
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 glass-card p-6 h-[400px] md:h-[500px] flex flex-col relative"
          >
            <h3 className="text-sm font-bold text-textMuted uppercase tracking-wider mb-2 absolute top-6 left-6 z-10">
              {activeTab} Mastery
            </h3>
            
            <div className="flex-1 w-full h-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="65%" data={currentData}>
                  <PolarGrid stroke="#1B263B" />
                  <PolarAngleAxis 
                    dataKey="subject" 
                    tick={{ fill: '#94A3B8', fontSize: 12, fontWeight: 500 }} 
                  />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar 
                    name="Skills" 
                    dataKey="score" 
                    stroke="#38BDF8" 
                    strokeWidth={2}
                    fill="#2563EB" 
                    fillOpacity={0.4} 
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Right Side: Skill Cards */}
          <div className="lg:col-span-7">
            <motion.div 
              key={`cards-${activeTab}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {currentData.map((skill, index) => (
                  <motion.div
                    key={skill.subject}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-card p-5 flex flex-col items-center justify-center text-center group hover:-translate-y-1 hover:border-primary/50 transition-all"
                  >
                    {/* Fake Logo Block */}
                    <div className="w-12 h-12 rounded-xl bg-cardLight flex items-center justify-center text-xl font-bold text-textMain mb-4 group-hover:text-accent group-hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-all">
                      {skill.icon ? skill.icon : skill.subject.substring(0, 1)}
                    </div>
                    
                    <h4 className="font-bold text-textMain text-sm mb-4 uppercase tracking-wide">{skill.subject}</h4>
                    
                    {/* Progress Bar Container */}
                    <div className="w-full flex items-center justify-between gap-3">
                       <div className="flex-1 h-1.5 bg-cardLight rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.score}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                          ></motion.div>
                       </div>
                       <span className="text-xs font-semibold text-textMuted">{skill.score}%</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;