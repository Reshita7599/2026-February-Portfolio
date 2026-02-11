
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = ['Language', 'Cloud', 'AI/ML', 'Tool'];

  return (
    <section id="skills" className="scroll-mt-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold font-poppins mb-4">Core <span className="text-blue-600">Competencies</span></h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
          Equipped with a diverse technical arsenal spanning modern programming languages, cloud platforms, and data science.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass p-6 rounded-3xl"
          >
            <h3 className="text-blue-500 font-bold mb-6 text-sm uppercase tracking-widest">{cat}s</h3>
            <div className="space-y-6">
              {SKILLS.filter(s => s.category === cat).map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span> {skill.name}
                    </span>
                    <span className="text-xs text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-blue-600 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
