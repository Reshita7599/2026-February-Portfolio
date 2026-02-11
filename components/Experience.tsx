
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold font-poppins mb-4">Experience & <span className="text-blue-600">Leadership</span></h2>
          <p className="text-slate-400">
            Professional background and organizational roles that have shaped my technical and soft skills.
          </p>
        </div>

        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-white/[0.05] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold font-poppins">{exp.role}</h3>
                  <p className="text-blue-500 font-semibold">{exp.company}</p>
                </div>
                <div className="text-slate-500 font-medium text-sm md:text-right">
                  {exp.duration}
                </div>
              </div>
              <ul className="space-y-4">
                {exp.details.map((detail, i) => (
                  <li key={i} className="flex gap-4 text-slate-400">
                    <span className="text-blue-600 mt-1">▹</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
