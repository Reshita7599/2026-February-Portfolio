
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 5000);
  };

  const contactInfo = [
    { label: 'Email', value: 'reshitachaudhary8077@gmail.com', link: 'mailto:reshitachaudhary8077@gmail.com', icon: '✉️' },
    { label: 'LinkedIn', value: 'reshita-chaudhary', link: 'https://linkedin.com/in/reshita-chaudhary', icon: '🔗' },
    { label: 'GitHub', value: 'Reshita7599', link: 'https://github.com/Reshita7599', icon: '🐙' },
  ];

  return (
    <section id="contact" className="scroll-mt-32">
      <div className="grid md:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold font-poppins mb-6">Let's <span className="text-blue-600">Connect</span></h2>
          <p className="text-slate-400 mb-10 max-w-md">
            I'm always open to discussing new opportunities, creative ideas, or being part of your visions.
          </p>

          <div className="space-y-6">
            {contactInfo.map((info) => (
              <motion.a
                key={info.label}
                href={info.link}
                target="_blank"
                whileHover={{ x: 10 }}
                className="flex items-center gap-6 p-6 glass rounded-2xl group transition-all"
              >
                <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{info.icon}</div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{info.label}</p>
                  <p className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-10 rounded-3xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Your Name</label>
              <input 
                required
                type="text" 
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="John Doe"
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Email Address</label>
              <input 
                required
                type="email" 
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="john@example.com"
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Message</label>
              <textarea 
                required
                rows={4}
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                placeholder="Hi, I'd like to talk about..."
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg blue-glow transition-all"
            >
              {isSent ? 'Message Sent! ✨' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
