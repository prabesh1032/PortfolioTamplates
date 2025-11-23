import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
                <span className="text-2xl font-bold font-mono tracking-tighter text-white">
                    JD<span className="text-primary">.</span>
                </span>
                <p className="text-slate-500 mt-2 text-sm">Building digital experiences that matter.</p>
            </div>

            <div className="flex space-x-6">
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></a>
            </div>
            
            <p className="text-slate-600 text-sm flex items-center gap-1">
                © 2024 John Doe. Crafted with <Heart size={12} className="text-red-500 fill-current" />
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;