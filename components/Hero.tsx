import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [subheadingIdx, setSubheadingIdx] = useState(0);
  const subheadings = [
    "Aspiring Software Engineer",
    "AI & Cloud Enthusiast",
    "AWS Certified | IBM Cloud Experience"
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '../Resume MIET.pdf';
    link.download = 'Resume MIET.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const interval = setInterval(() => {
      setSubheadingIdx((prev) => (prev + 1) % subheadings.length);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-500 font-bold tracking-[0.2em] mb-4 uppercase text-sm"
          >
            Welcome to my portfolio
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 leading-[1.1]">
            Reshita <br /> <span className="text-blue-600">Chaudhary</span>
          </h1>
          <div className="h-10 mb-10 overflow-hidden">
            <motion.p
              key={subheadingIdx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-slate-400 font-light"
            >
              {subheadings[subheadingIdx]}
            </motion.p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.button
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-blue-600/20"
            >
              Download CV
            </motion.button>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              className="glass border-white/10 hover:border-blue-500/50 text-slate-100 px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2"
            >
              View Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="order-1 md:order-2 flex justify-center relative"
          style={{
            transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
          }}
        >
          <div className="relative group">
            {/* Background glowing rings */}
            <div className="absolute -inset-10 bg-blue-600/10 rounded-full blur-[100px] opacity-50"></div>
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative glass p-4 rounded-[3rem] overflow-hidden aspect-[4/5] w-72 md:w-96 shadow-2xl transition-all duration-500 group-hover:scale-[1.02] border-white/10">
              <img
                src="../Reshita pp.png" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop";
                }}
                alt="Reshita Chaudhary"
                className="w-full h-full object-cover rounded-[2.2rem] shadow-inner"
              />
              <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border-white/5 backdrop-blur-xl translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-1">Status</p>
                <p className="text-white text-sm font-medium">Open to Opportunities</p>
              </div>
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl border-white/10 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">🎓</span>
                <div className="leading-none">
                  <p className="text-[10px] text-slate-500 font-bold uppercase">B.Tech</p>
                  <p className="text-xs font-bold text-white">CSE 2026</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-xl border-white/10 hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">AWS</span>
                <div className="leading-none">
                  <p className="text-[10px] text-slate-500 font-bold uppercase">Certified</p>
                  <p className="text-xs font-bold text-white">Cloud Practitioner</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
