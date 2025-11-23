import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/mockData';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected <span className="gradient-text">Works</span></h2>
                <p className="text-slate-400">A collection of projects that showcase my passion for development.</p>
            </motion.div>
            
            <motion.a 
                href="#"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-primary hover:text-white transition-colors border-b border-primary hover:border-white pb-1"
            >
                View Github <Github size={18} />
            </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-dark-card rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Buttons */}
                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <a href={project.githubUrl} className="p-2 bg-dark/80 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors" title="View Code">
                        <Github size={18} />
                    </a>
                    <a href={project.liveUrl} className="p-2 bg-dark/80 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors" title="Live Demo">
                        <ExternalLink size={18} />
                    </a>
                </div>
              </div>
              
              <div className="p-6 relative z-20 -mt-12">
                <div className="bg-dark/90 backdrop-blur-xl border border-white/10 p-5 rounded-xl shadow-xl group-hover:-translate-y-2 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2 text-white flex justify-between items-center">
                        {project.title}
                        <ArrowUpRight size={18} className="text-slate-500 group-hover:text-primary transition-colors" />
                    </h3>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                        {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="text-xs font-mono font-medium px-2 py-1 bg-white/5 text-primary border border-primary/20 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;