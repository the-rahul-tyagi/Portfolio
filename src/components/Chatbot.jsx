import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend, FiTrash2 } from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';
import { portfolioData } from '../data/content';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Initial greeting
  const initialMessage = { 
    text: "👋 Hi! I'm Rahul's AI assistant. I can answer questions about his skills, projects, education, and experience!", 
    isBot: true 
  };
  
  const [messages, setMessages] = useState([initialMessage]);

  // Scroll to bottom whenever messages update or bot is typing
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  // Quick Questions Data
  const quickQuestions = [
    { label: "Skills 💻", query: "skills" },
    { label: "Projects 🚀", query: "projects" },
    { label: "Education 🎓", query: "education" },
    { label: "Contact 📬", query: "contact" }
  ];

  // Advanced "AI" Keyword Matching Logic using CV Data
  const generateBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    // Safely access the new chatbotData from content.js
    const botData = portfolioData.chatbotData || {};
    
    if (lowerInput.includes("about") || lowerInput.includes("who")) {
      return botData.about || `Rahul is a Full-Stack Developer and B.Tech CSE student at LPU.`;
    }
    if (lowerInput.includes("skill") || lowerInput.includes("tech") || lowerInput.includes("stack")) {
      return botData.skills || `Rahul's primary skills include ${portfolioData.skills.languages.join(", ")}.`;
    }
    if (lowerInput.includes("project") || lowerInput.includes("work") || lowerInput.includes("portfolio")) {
      return botData.projects || `Top projects include ${portfolioData.projects.map(p => p.title).join(", ")}.`;
    }
    if (lowerInput.includes("education") || lowerInput.includes("study") || lowerInput.includes("cgpa") || lowerInput.includes("lpu") || lowerInput.includes("college")) {
      return botData.education || `Rahul is pursuing a B.Tech in CSE at Lovely Professional University with an 8.03 CGPA.`;
    }
    if (lowerInput.includes("training") || lowerInput.includes("experience") || lowerInput.includes("intern")) {
      return botData.experience_training || `Rahul completed training at LPU HRDC focusing on Java App Development.`;
    }
    if (lowerInput.includes("achieve") || lowerInput.includes("cert") || lowerInput.includes("hackerrank") || lowerInput.includes("leetcode")) {
      return botData.achievements_certs || `Rahul has solved 100+ LeetCode problems and holds 5-star ratings on HackerRank.`;
    }
    if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("hire") || lowerInput.includes("phone")) {
      return botData.contact || `You can reach out directly at ${portfolioData.personal.email} or call ${portfolioData.personal.phone}.`;
    }
    if (lowerInput.includes("resume") || lowerInput.includes("cv") || lowerInput.includes("download")) {
      return `You can download his full resume from the top navigation bar or the Career Snapshot section!`;
    }
    if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
      return botData.greetings || `Hello! How can I help you learn more about Rahul's professional background?`;
    }
    
    // Fallback response
    return `I'm still learning! You can ask me about Rahul's "skills", "projects", "education", or "contact info". You can also email him directly at ${portfolioData.personal.email}.`;
  };

  const handleSendMessage = (text = inputValue) => {
    if (!text.trim()) return;

    // Add User Message
    setMessages(prev => [...prev, { text, isBot: false }]);
    setInputValue("");
    setIsTyping(true);

    // Simulate Bot Thinking (Delay)
    setTimeout(() => {
      const response = generateBotResponse(text);
      setMessages(prev => [...prev, { text: response, isBot: true }]);
      setIsTyping(false);
    }, 1500); 
  };

  const handleClearChat = () => {
    setMessages([initialMessage]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mb-6 w-[340px] sm:w-[380px] bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-2xl rounded-[2rem] shadow-[0_10px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_10px_50px_rgba(16,185,129,0.15)] overflow-hidden border border-gray-200/50 dark:border-white/10 flex flex-col h-[550px] relative"
          >
            {/* Top Gradient Accent */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#10b981] via-teal-400 to-blue-500"></div>

            {/* Header */}
            <div className="bg-gray-50/50 dark:bg-white/5 p-4 pt-5 border-b border-gray-200/50 dark:border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 bg-gradient-to-br from-[#10b981] to-blue-500 text-white rounded-full flex items-center justify-center shadow-inner">
                    <FaRobot size={22} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-[#0B1120] rounded-full animate-pulse"></span>
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 dark:text-white text-sm">Rahul's Assistant</h3>
                  <p className="text-xs text-[#10b981] font-bold tracking-widest uppercase mt-0.5">Online</p>
                </div>
              </div>
              <div className="flex gap-2 text-gray-500 dark:text-gray-400">
                <button onClick={handleClearChat} className="p-2 hover:bg-white dark:hover:bg-white/10 hover:text-red-500 rounded-full transition-colors" title="Clear Chat">
                  <FiTrash2 size={16} />
                </button>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white rounded-full transition-colors">
                  <FiX size={20} />
                </button>
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-5 scrollbar-hide">
              <AnimatePresence>
                {messages.map((msg, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    key={idx} 
                    className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm font-medium leading-relaxed ${
                      msg.isBot 
                        ? 'bg-gray-100/80 dark:bg-white/5 text-gray-800 dark:text-gray-200 rounded-tl-sm border border-gray-200/50 dark:border-white/5 shadow-sm' 
                        : 'bg-gradient-to-r from-[#10b981] to-teal-500 text-white rounded-tr-sm shadow-md shadow-emerald-500/20'
                    }`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100/80 dark:bg-white/5 border border-gray-200/50 dark:border-white/5 px-4 py-4 rounded-2xl rounded-tl-sm flex gap-1.5 w-16 items-center justify-center shadow-sm">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }} className="w-1.5 h-1.5 bg-[#10b981] rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.2 }} className="w-1.5 h-1.5 bg-[#10b981] rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut", delay: 0.4 }} className="w-1.5 h-1.5 bg-[#10b981] rounded-full" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Container */}
            {!isTyping && messages.length < 4 && (
               <div className="px-4 pb-3 overflow-x-auto scrollbar-hide flex gap-2">
                 {quickQuestions.map((q, idx) => (
                   <button
                     key={idx}
                     onClick={() => handleSendMessage(q.query)}
                     className="whitespace-nowrap text-xs font-bold bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20 hover:bg-[#10b981] hover:text-white px-4 py-2 rounded-full transition-all duration-300 shadow-sm"
                   >
                     {q.label}
                   </button>
                 ))}
               </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-gray-50/50 dark:bg-[#0B1120]/50 border-t border-gray-200/50 dark:border-white/10">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                className="flex items-center gap-2 bg-white dark:bg-[#1e293b]/50 border border-gray-200 dark:border-white/10 rounded-full pl-5 pr-2 py-2 focus-within:border-[#10b981] focus-within:ring-2 focus-within:ring-[#10b981]/20 transition-all shadow-inner"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 bg-transparent text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none font-medium"
                />
                <button 
                  type="submit" 
                  disabled={!inputValue.trim() || isTyping}
                  className="w-10 h-10 rounded-full bg-[#10b981] text-white flex items-center justify-center hover:bg-teal-500 disabled:opacity-50 disabled:hover:bg-[#10b981] transition-colors shadow-md"
                >
                  <FiSend size={16} className="-ml-0.5 mt-0.5" />
                </button>
              </form>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-[#10b981] to-blue-500 text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-all z-50 relative border border-white/20"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
              <FiX size={28} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
              <FiMessageSquare size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default Chatbot;