
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold font-poppins text-blue-500 tracking-tighter">
          RC<span className="text-slate-100">.</span>
        </div>
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Reshita Chaudhary.
        </p>
        <div className="flex gap-6">
           <a href="https://github.com/Reshita7599" className="text-slate-500 hover:text-blue-500 transition-colors">GitHub</a>
           <a href="https://linkedin.com/in/reshita-chaudhary" className="text-slate-500 hover:text-blue-500 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
