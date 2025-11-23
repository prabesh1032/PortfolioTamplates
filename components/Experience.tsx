import React from 'react';
import { motion } from 'framer-motion';
import { experience, education } from '../data/mockData';

const Experience: React.FC = () => {
  return (
    <section className="py-24 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
        >
            <h2 className="text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-slate-400">The path that led me here.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience Column */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
                <span className="w-8 h-1 bg-primary rounded-full"></span>
                Work Experience
            </h3>
            <div className="space-y-12 pl-4 border-l border-white/10 ml-2">
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-8"
                >
                  <span className="absolute -left-[21px] top-1.5 w-3 h-3 rounded-full bg-dark border-2 border-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                  
                  <div className="mb-2">
                    <span className="text-xs font-mono text-primary px-2 py-1 bg-primary/10 rounded mb-2 inline-block">
                        {item.period}
                    </span>
                    <h4 className="text-xl font-bold text-white">{item.role}</h4>
                    <p className="text-slate-400 font-medium">{item.company}</p>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
                <span className="w-8 h-1 bg-secondary rounded-full"></span>
                Education
            </h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="group p-6 rounded-2xl bg-dark border border-white/5 hover:border-secondary/30 transition-all duration-300 hover:bg-white/[0.02]"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-white group-hover:text-secondary transition-colors">{item.degree}</h4>
                    <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">{item.year}</span>
                  </div>
                  <p className="text-slate-400">{item.school}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;