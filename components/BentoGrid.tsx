import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Github, Twitter, Linkedin, Mail, Music, Code2, Database, Layout } from 'lucide-react';

const BentoGrid: React.FC = () => {
  return (
    <section className="py-20 bg-dark relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
        >
            <h2 className="text-3xl font-bold mb-2">Me, at a <span className="text-primary">glance</span>.</h2>
            <p className="text-slate-400">A quick look into my digital and physical world.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 md:h-[600px]">
          
          {/* Card 1: Main Intro - Spans 2 cols, 2 rows */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 glass-card rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-500"></div>
            
            <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                    <span className="text-2xl">👋</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Hello, I'm John.</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                    A Full Stack Developer obsessed with crafting polished user experiences. 
                    I bridge the gap between design and engineering, ensuring every interaction feels right.
                </p>
                <div className="flex flex-wrap gap-2">
                    {['React', 'Node.js', 'Design Systems', 'AI'].map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
          </motion.div>

          {/* Card 2: Map/Location */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card rounded-3xl p-6 flex flex-col items-center justify-center relative overflow-hidden text-center group"
          >
             {/* Abstract Map BG */}
             <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png')] bg-cover bg-center grayscale group-hover:scale-110 transition-transform duration-700"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
             
             <div className="relative z-10 flex flex-col items-center">
                 <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                    <MapPin size={24} />
                 </div>
                 <h4 className="font-bold text-white">San Francisco</h4>
                 <p className="text-xs text-slate-500">California, USA</p>
             </div>
          </motion.div>

          {/* Card 3: Socials */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-3xl p-6 flex flex-col justify-between"
          >
            <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                Connect <ArrowUpRight size={14} className="text-slate-500" />
            </h4>
            <div className="grid grid-cols-2 gap-3">
                <a href="#" className="flex items-center justify-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-white border border-white/5 hover:border-white/20">
                    <Github size={20} />
                </a>
                <a href="#" className="flex items-center justify-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-[#1DA1F2] border border-white/5 hover:border-white/20">
                    <Twitter size={20} />
                </a>
                <a href="#" className="flex items-center justify-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-[#0A66C2] border border-white/5 hover:border-white/20">
                    <Linkedin size={20} />
                </a>
                <a href="mailto:hello@example.com" className="flex items-center justify-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-red-400 border border-white/5 hover:border-white/20">
                    <Mail size={20} />
                </a>
            </div>
          </motion.div>

          {/* Card 4: Music/Activity - Spans 2 cols */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="md:col-span-2 glass-card rounded-3xl p-6 flex items-center justify-between relative overflow-hidden group"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
             
             <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-[#1DB954] rounded-full flex items-center justify-center text-dark shadow-lg shadow-green-900/20">
                    <Music size={20} className="animate-pulse" />
                </div>
                <div>
                    <p className="text-xs text-green-400 font-medium tracking-wider uppercase mb-1">Listening to</p>
                    <p className="text-white font-bold text-lg">Lo-Fi Coding Beats</p>
                    <p className="text-slate-500 text-xs">Spotify Web Player</p>
                </div>
             </div>
             
             {/* Audio Wave Animation */}
             <div className="flex items-end gap-1 h-8">
                 {[1,2,3,4,5].map(i => (
                     <div key={i} className="w-1 bg-green-500/50 rounded-t-sm animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }}></div>
                 ))}
             </div>
          </motion.div>

           {/* Card 5: Stack - Spans 2 cols */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="md:col-span-2 glass-card rounded-3xl p-6 flex flex-col justify-center relative group"
           >
             <h4 className="text-slate-400 text-sm font-medium mb-4 uppercase tracking-wider">Current Stack</h4>
             <div className="flex justify-between items-center">
                 <div className="flex items-center gap-4">
                     <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-blue-400 group-hover:scale-110 transition-transform">
                        <Code2 size={24} />
                     </div>
                     <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-yellow-400 group-hover:scale-110 transition-transform delay-75">
                        <Layout size={24} />
                     </div>
                     <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-green-400 group-hover:scale-110 transition-transform delay-100">
                        <Database size={24} />
                     </div>
                 </div>
                 
                 <div className="text-right">
                    <p className="text-2xl font-bold text-white">Full Stack</p>
                    <p className="text-slate-500 text-sm">TypeScript Ecosystem</p>
                 </div>
             </div>
           </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;