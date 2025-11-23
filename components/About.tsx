import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                    src="https://picsum.photos/seed/profile/800/800" 
                    alt="Profile" 
                    className="w-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 right-6 glass-card p-4 rounded-xl shadow-lg animate-float">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                            <Code2 size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-400">Coding since</p>
                            <p className="text-lg font-bold text-white">2012</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -inset-4 border border-primary/30 rounded-2xl z-0 rotate-3" />
            <div className="absolute -inset-4 border border-secondary/30 rounded-2xl z-0 -rotate-3" />
          </motion.div>
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Creative Problem Solver <br /> & Tech Enthusiast
            </h3>
            
            <p className="text-slate-400 mb-6 leading-relaxed text-lg">
              I'm a Full Stack Developer with a passion for building beautiful, functional, and accessible web applications. 
              My journey started with simple HTML pages and has evolved into architecting complex systems using modern technologies.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open source, or optimizing my development workflow.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/50 transition-colors">
                    <Globe className="text-secondary mb-3" size={24} />
                    <h4 className="font-bold text-white mb-1">Modern Web</h4>
                    <p className="text-sm text-slate-500">Next.js, React, Tailwind</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/50 transition-colors">
                    <Cpu className="text-primary mb-3" size={24} />
                    <h4 className="font-bold text-white mb-1">Backend Systems</h4>
                    <p className="text-sm text-slate-500">Node, GraphQL, SQL</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;