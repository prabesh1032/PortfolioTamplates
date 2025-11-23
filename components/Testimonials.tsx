import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/mockData';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-dark-lighter relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-4">Client <span className="text-primary">Stories</span></h2>
          <p className="text-slate-400">Don't just take my word for it.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-dark p-10 rounded-3xl relative border border-white/5 hover:border-primary/20 transition-colors"
            >
              <Quote className="text-primary/20 w-16 h-16 absolute -top-6 -left-2 transform -rotate-12" />
              
              <p className="text-slate-300 mb-8 text-lg leading-relaxed relative z-10 font-light">
                "{item.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-[2px]" />
                    <img 
                        src={item.avatar} 
                        alt={item.name} 
                        className="w-12 h-12 rounded-full object-cover relative z-10 border-2 border-dark"
                    />
                </div>
                <div>
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <p className="text-sm text-slate-500 font-mono">{item.role}, {item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;