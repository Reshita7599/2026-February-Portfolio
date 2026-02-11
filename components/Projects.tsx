
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-3xl font-bold font-poppins mb-4">Featured <span className="text-blue-600">Projects</span></h2>
          <p className="text-slate-400 max-w-xl">
            A selection of my technical work ranging from AI scam detection to cloud deployments.
          </p>
        </div>
        <a href="https://github.com/Reshita7599" target="_blank" className="text-blue-500 font-semibold hover:underline flex items-center gap-2">
          Explore all on GitHub 
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-80 rounded-3xl overflow-hidden glass">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent">
                <div className="flex gap-2 mb-3">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-widest bg-blue-600/20 text-blue-400 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2 font-poppins">{project.title}</h3>
                <p className="text-slate-400 line-clamp-2 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl glass rounded-3xl overflow-hidden"
            >
              <img src={selectedProject.image} className="w-full h-48 object-cover opacity-50" />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-slate-800 transition-colors"
              >
                ✕
              </button>
              <div className="p-8">
                <h3 className="text-3xl font-bold font-poppins mb-4">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="text-xs font-bold uppercase tracking-wider bg-blue-600/10 text-blue-500 border border-blue-500/20 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold text-slate-500 uppercase mb-2">Description</h4>
                    <p className="text-slate-300 leading-relaxed">{selectedProject.description}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-500 uppercase mb-2">Key Outcome</h4>
                    <p className="text-blue-400 font-medium italic">"{selectedProject.outcome}"</p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-800 flex justify-end gap-4">
                   <a 
                    href={selectedProject.link} 
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-600/20 transition-all"
                  >
                    View Code Base
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
