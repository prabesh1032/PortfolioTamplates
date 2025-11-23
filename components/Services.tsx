import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/mockData';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What I <span className="text-secondary">Do</span></h2>
          <p className="text-slate-400">Expertise that helps your business grow.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-2xl group transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-300 border border-white/10">
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;