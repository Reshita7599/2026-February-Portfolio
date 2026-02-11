
import React from 'react';
import { motion } from 'framer-motion';

const Achievements: React.FC = () => {
  const items = [
    {
      title: 'AWS Certified Cloud Practitioner',
      subtitle: 'Issued by Amazon Web Services',
      icon: '☁️',
      color: 'from-orange-500/20 to-yellow-600/20'
    },
    {
      title: 'Hackloop Hackathon Winner',
      subtitle: 'First Place - Martian Data Analysis',
      icon: '🏆',
      color: 'from-blue-600/20 to-indigo-600/20'
    },
    {
      title: 'Technical Internship',
      subtitle: 'EduSkills Foundation (Cloud Focus)',
      icon: '🚀',
      color: 'from-purple-600/20 to-pink-600/20'
    }
  ];

  return (
    <section id="achievements" className="scroll-mt-32">
      <h2 className="text-3xl font-bold font-poppins mb-12 text-center">Achievements & <span className="text-blue-600">Certifications</span></h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`p-1 rounded-3xl bg-gradient-to-br ${item.color}`}
          >
            <div className="bg-slate-950/90 h-full p-8 rounded-3xl glass text-center flex flex-col items-center">
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-lg font-bold font-poppins mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm">{item.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
