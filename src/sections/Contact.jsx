import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiPhone, FiLinkedin, FiGithub, FiCheckCircle, FiAlertCircle, FiSend } from 'react-icons/fi';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const serviceID = 'service_p7xruve'; 
    const templateID = 'template_4qb8rzd'; 
    const publicKey = 'wNqbmq1cWJ1oejwi9'; 

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
          setIsSubmitting(false);
          setStatus('success');
          formRef.current.reset();
          setTimeout(() => setStatus(null), 5000);
      }, (error) => {
          setIsSubmitting(false);
          setStatus('error');
          console.error("EmailJS Error:", error.text);
      });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 15 }
    }
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 lg:px-12 min-h-screen bg-[#f4f7f9] dark:bg-[#0B1120] relative overflow-hidden flex flex-col justify-center transition-colors duration-300">
      
      {/* Animated Ambient Glows */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#10b981]/15 rounded-full blur-[120px] pointer-events-none -z-10"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/15 rounded-full blur-[100px] pointer-events-none -z-10"
      />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-14 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10b981]"></span>
            </span>
            <span className="text-xs font-extrabold tracking-widest text-gray-500 dark:text-gray-400 uppercase">Direct Line</span>
          </div>
          <h2 className="font-sans text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white tracking-tight mb-6 transition-colors">
            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-teal-400">Together</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto md:mx-0 text-base leading-relaxed transition-colors">
            Have a project idea, an internship opportunity, or just want to chat? Drop a message below and I'll get back to you quickly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: High-Contrast Bento Cards */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5"
          >
            {/* Email Card */}
            <motion.a 
              variants={itemVariants}
              href="mailto:rahultyagiji6398@gmail.com"
              className="relative bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-white/10 p-6 rounded-3xl flex items-center gap-5 group hover:border-[#10b981] dark:hover:border-[#10b981] transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#10b981]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-[#0B1120] border border-emerald-100 dark:border-white/5 flex items-center justify-center text-[#10b981] group-hover:scale-110 group-hover:bg-[#10b981] group-hover:text-white dark:group-hover:text-[#0B1120] transition-all duration-300 shrink-0">
                <FiMail size={22} />
              </div>
              <div className="relative z-10 overflow-hidden">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Email</span>
                <span className="text-sm font-bold text-gray-800 dark:text-white truncate block group-hover:text-[#10b981] transition-colors">rahultyagiji6398@gmail.com</span>
              </div>
            </motion.a>

            {/* Phone Card */}
            <motion.a 
              variants={itemVariants}
              href="tel:+917456893612"
              className="relative bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-white/10 p-6 rounded-3xl flex items-center gap-5 group hover:border-[#10b981] dark:hover:border-[#10b981] transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#10b981]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>

              <div className="relative z-10 w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-[#0B1120] border border-emerald-100 dark:border-white/5 flex items-center justify-center text-[#10b981] group-hover:scale-110 group-hover:bg-[#10b981] group-hover:text-white dark:group-hover:text-[#0B1120] transition-all duration-300 shrink-0">
                <FiPhone size={22} />
              </div>
              <div className="relative z-10">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Phone / WhatsApp</span>
                <span className="text-sm font-bold text-gray-800 dark:text-white group-hover:text-[#10b981] transition-colors">+91 7456893612</span>
              </div>
            </motion.a>

            {/* Location Card */}
            <motion.div 
              variants={itemVariants}
              className="relative bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-white/10 p-6 rounded-3xl flex items-center gap-5 group hover:border-[#10b981] dark:hover:border-[#10b981] transition-all duration-300 shadow-sm hover:shadow-lg overflow-hidden sm:col-span-2 lg:col-span-1"
            >
              <div className="absolute inset-0 bg-[#10b981]/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>

              <div className="relative z-10 w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-[#0B1120] border border-emerald-100 dark:border-white/5 flex items-center justify-center text-[#10b981] group-hover:scale-110 group-hover:bg-[#10b981] group-hover:text-white dark:group-hover:text-[#0B1120] transition-all duration-300 shrink-0">
                <FiMapPin size={22} />
              </div>
              <div className="relative z-10">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block mb-1">Location</span>
                <span className="text-sm font-bold text-gray-800 dark:text-white group-hover:text-[#10b981] transition-colors">Agra, Uttar Pradesh</span>
              </div>
            </motion.div>

            {/* Socials Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-white/10 p-6 rounded-3xl flex flex-col gap-4 sm:col-span-2 lg:col-span-1 shadow-sm"
            >
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Social Profiles</span>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/the-rahul-tyagi/" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gray-50 dark:bg-[#0B1120] rounded-2xl border border-gray-100 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:text-[#0a66c2] hover:border-[#0a66c2] dark:hover:border-[#0a66c2] hover:bg-blue-50 dark:hover:bg-[#0a66c2]/10 transition-all text-sm font-bold group">
                  <FiLinkedin size={18} className="group-hover:scale-110 transition-transform" /> LinkedIn
                </a>
                <a href="https://github.com/the-rahul-tyagi" target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gray-50 dark:bg-[#0B1120] rounded-2xl border border-gray-100 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-white/30 hover:bg-gray-100 dark:hover:bg-white/5 transition-all text-sm font-bold group">
                  <FiGithub size={18} className="group-hover:scale-110 transition-transform" /> GitHub
                </a>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT COLUMN: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            className="lg:col-span-7 relative bg-white dark:bg-[#1e293b] border border-gray-100 dark:border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-xl dark:shadow-2xl transition-colors duration-300"
          >
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 group">
                  <label htmlFor="user_name" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2 group-focus-within:text-[#10b981] transition-colors">Your Name</label>
                  <input 
                    type="text" 
                    name="user_name" 
                    id="user_name" 
                    required 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-[#0B1120] border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 rounded-2xl focus:outline-none focus:border-[#10b981] dark:focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all text-sm"
                  />
                </div>
                <div className="space-y-2 group">
                  <label htmlFor="user_email" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2 group-focus-within:text-[#10b981] transition-colors">Email Address</label>
                  <input 
                    type="email" 
                    name="user_email" 
                    id="user_email" 
                    required 
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-gray-50 dark:bg-[#0B1120] border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 rounded-2xl focus:outline-none focus:border-[#10b981] dark:focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2 group">
                <label htmlFor="message" className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-2 group-focus-within:text-[#10b981] transition-colors">Your Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="5" 
                  required 
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-5 py-4 bg-gray-50 dark:bg-[#0B1120] border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 rounded-2xl focus:outline-none focus:border-[#10b981] dark:focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all resize-none text-sm"
                ></textarea>
              </div>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                    <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-400/10 border border-emerald-200 dark:border-emerald-400/20 p-4 rounded-2xl text-sm font-bold mb-2">
                      <FiCheckCircle size={20} />
                      <span>Message sent successfully! I'll be in touch soon.</span>
                    </div>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                    <div className="flex items-center gap-3 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-400/10 border border-red-200 dark:border-red-400/20 p-4 rounded-2xl text-sm font-bold mb-2">
                      <FiAlertCircle size={20} />
                      <span>Oops! Something went wrong. Please try again.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="group relative w-full py-4 bg-[#10b981] text-white font-extrabold rounded-2xl shadow-[0_4px_15px_rgba(16,185,129,0.2)] dark:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_8px_25px_rgba(16,185,129,0.3)] dark:hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest text-sm flex items-center justify-center gap-3 mt-4 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out -z-10"></div>
                {isSubmitting ? 'Sending Message...' : (
                  <>
                    <FiSend className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" size={18} /> 
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;