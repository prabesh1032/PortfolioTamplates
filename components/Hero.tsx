import React from 'react';
import { ArrowRight, Download, MousePointer2, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-accent/10 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
            {/* Terminal Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 hover:bg-white/10 transition-colors cursor-default">
                <Terminal size={14} className="text-primary" />
                <span className="text-xs font-mono text-slate-300">v3.0.0 Portfolio Updated</span>
            </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter leading-tight">
            Creative <br className="md:hidden" />
            <span className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary blur-2xl opacity-30"></span>
                <span className="gradient-text relative z-10">Developer</span>
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            I craft accessible, pixel-perfect, and performant web experiences. 
            Merging <span className="text-white font-medium">artistic vision</span> with <span className="text-white font-medium">technical excellence</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a 
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-white text-dark rounded-full font-bold transition-all hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              View Work 
              <ArrowRight size={20} />
            </a>
            <a 
              href="#"
              className="w-full sm:w-auto px-8 py-4 glass-card text-white rounded-full font-medium transition-all hover:bg-white/10 flex items-center justify-center gap-2"
            >
              Download CV <Download size={20} />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Modern Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 text-slate-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-slate-500 to-transparent"></div>
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;