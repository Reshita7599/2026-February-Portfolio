
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const stats = [
    { label: 'CGPA', value: '8.4', sub: 'Current' },
    { label: 'Certifications', value: '10+', sub: 'AWS/IBM' },
    { label: 'Projects', value: '15+', sub: 'Tech Stack' },
  ];

  const timeline = [
    { year: '2022 - 2026', title: 'B.Tech Computer Science Engineering', desc: 'Meerut Institute of Engineering and Technology (MIET) | Minor in Project Management | CGPA: 8.4 | Focusing on AI, Cloud & Software Engineering.' },
    { year: '2022', title: 'Senior Secondary School', desc: 'Swami Vivekanand Public School | Percentage: 87%' },
    { year: '2020', title: 'High School', desc: 'Swami Vivekanand Public School | Percentage: 91%' },
  ];

  return (
    <section id="about" className="scroll-mt-32">
      <div className="grid md:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold font-poppins mb-6">About <span className="text-blue-600">Me</span></h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            I am a third-year Computer Science Engineering student passionate about building scalable software and intelligent systems. 
            My focus lies at the intersection of Cloud Computing and AI, where I strive to solve real-world problems through data-driven approaches. 
            With a CGPA of 8.4 and hands-on experience in AWS and IBM Cloud, I am preparing to transition into a career as a Systems Engineer.
          </p>
          
          <div className="grid grid-cols-3 gap-6 mb-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-4 glass rounded-2xl"
              >
                <div className="text-2xl font-bold text-blue-500">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-8 font-poppins">Educational <span className="text-blue-600">Journey</span></h3>
          <div className="space-y-8 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-blue-600/20">
            {timeline.map((item, i) => (
              <div key={i} className="pl-10 relative">
                <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-950 z-10"></div>
                <p className="text-blue-500 font-bold text-sm mb-1">{item.year}</p>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
