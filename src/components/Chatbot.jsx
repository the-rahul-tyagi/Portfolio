import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiX, FiSend, FiTrash2, FiUser } from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';
import { portfolioData } from '../data/content';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Initial greeting
  const initialMessage = { 
    text: "👋 Hi! I'm Rahul's virtual assistant. I can answer questions about his skills, projects, education, and experience!", 
    isBot: true 
  };
  
  const [messages, setMessages] = useState([initialMessage]);

  // Scroll to bottom whenever messages update or bot is typing
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  // Quick Questions Data
  const quickQuestions = [
    { label: "What are your skills? 💻", query: "skills" },
    { label: "Show me projects 🚀", query: "projects" },
    { label: "What is your education? 🎓", query: "education" },
    { label: "How to contact? 📬", query: "contact" }
  ];

  // Simple "AI" Keyword Matching Logic
  const generateBotResponse = (input) => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("skill") || lowerInput.includes("tech") || lowerInput.includes("stack")) {
      return `Primary skills include ${portfolioData.skills.languages.join(", ")} and frameworks like ${portfolioData.skills.frameworks.join(", ")}.`;
    }
    if (lowerInput.includes("project") || lowerInput.includes("work") || lowerInput.includes("portfolio")) {
      return `Top projects include ${portfolioData.projects.map(p => p.title).join(", ")}. Check the 'Projects' section for live demos and source code!`;
    }
    if (lowerInput.includes("education") || lowerInput.includes("study") || lowerInput.includes("cgpa") || lowerInput.includes("lpu")) {
      return `Currently pursuing a B.Tech in CSE at Lovely Professional University with an 8.03 CGPA.`;
    }
    if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("hire") || lowerInput.includes("phone")) {
      return `You can reach out directly at ${portfolioData.personal.email} or call ${portfolioData.personal.phone}.`;
    }
    if (lowerInput.includes("resume") || lowerInput.includes("cv") || lowerInput.includes("download")) {
      return `You can download the full resume from the top navigation bar or the Career Snapshot section!`;
    }
    if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
      return `Hello! How can I help you learn more about Rahul's professional background?`;
    }
    
    // Fallback response
    return `I'm still learning! For specific details, please check the portfolio sections above or send an email to ${portfolioData.personal.email}.`;
  };

  const handleSendMessage = (text = inputValue) => {
    if (!text.trim()) return;

    // 1. Add User Message
    setMessages(prev => [...prev, { text, isBot: false }]);
    setInputValue("");
    setIsTyping(true);

    // 2. Simulate Bot Thinking (Delay)
    setTimeout(() => {
      const response = generateBotResponse(text);
      setMessages(prev => [...prev, { text: response, isBot: true }]);
      setIsTyping(false);
    }, 1200); // 1.2 second delay for realism
  };

  const handleClearChat = () => {
    setMessages([initialMessage]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9, originBottomRight: true }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mb-4 w-[340px] md:w-[380px] bg-bgDark rounded-2xl shadow-2xl shadow-primary/20 overflow-hidden border border-cardLight flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-cardDark p-4 border-b border-cardLight flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center">
                    <FaRobot size={22} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-cardDark rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-bold text-textMain text-sm">Ask about Rahul's CV</h3>
                  <p className="text-xs text-green-400 font-medium">Online • Always available</p>
                </div>
              </div>
              <div className="flex gap-2 text-textMuted">
                <button onClick={handleClearChat} className="p-1.5 hover:bg-cardLight rounded-md transition-colors" title="Clear Chat">
                  <FiTrash2 size={16} />
                </button>
                <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-cardLight rounded-md transition-colors">
                  <FiX size={20} />
                </button>
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-bgDark flex flex-col gap-4 hide-scrollbar">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.isBot 
                      ? 'bg-cardLight text-textMain rounded-tl-sm border border-cardLight/50' 
                      : 'bg-primary text-white rounded-tr-sm shadow-md shadow-primary/20'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-cardLight border border-cardLight/50 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1.5 w-16 items-center justify-center">
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-textMuted rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-textMuted rounded-full" />
                    <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-textMuted rounded-full" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Container */}
            {!isTyping && messages.length < 3 && (
               <div className="px-3 pb-2 bg-bgDark overflow-x-auto hide-scrollbar flex gap-2">
                 {quickQuestions.map((q, idx) => (
                   <button
                     key={idx}
                     onClick={() => handleSendMessage(q.query)}
                     className="whitespace-nowrap text-xs font-semibold bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white px-3 py-1.5 rounded-full transition-all"
                   >
                     {q.label}
                   </button>
                 ))}
               </div>
            )}

            {/* Input Area */}
            <div className="p-3 bg-cardDark border-t border-cardLight">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                className="flex items-center gap-2 bg-bgDark border border-cardLight rounded-full px-4 py-2 focus-within:border-primary/50 transition-colors"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 bg-transparent text-sm text-textMain placeholder-textMuted outline-none"
                />
                <button 
                  type="submit" 
                  disabled={!inputValue.trim() || isTyping}
                  className="text-primary hover:text-accent disabled:opacity-50 disabled:hover:text-primary transition-colors"
                >
                  <FiSend size={18} />
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
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-all relative z-50"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
              <FiX size={24} />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
              <FiMessageSquare size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default Chatbot;