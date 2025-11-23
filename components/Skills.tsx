import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/mockData';

const Skills: React.FC = () => {
  return (
    <section className="py-24 bg-dark-lighter relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical <span className="text-primary">Arsenal</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A curated list of technologies I use to build robust and scalable applications.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 group-hover:opacity-100 transition duration-300" />
                <div className="relative bg-dark-card border border-white/10 px-6 py-3 rounded-full flex items-center gap-2">
                    <span className="font-medium text-slate-200 group-hover:text-white transition-colors">{skill.name}</span>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;