import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thanks for your message! This is a demo form.");
        setFormState({ name: '', email: '', message: '' });
    };

    return (
    <section id="contact" className="py-24 bg-dark relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
                <h2 className="text-5xl font-bold mb-6 text-white">Let's work <br /><span className="text-slate-500">together.</span></h2>
                <p className="text-slate-400 text-lg max-w-md">
                    I'm currently available for freelance work. Have a project? 
                    Need to hire a pro? Let's talk.
                </p>
            </div>
            
            <div className="space-y-6">
                <a href="mailto:hello@johndoe.dev" className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <Mail size={20} />
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Email</h3>
                        <p className="text-xl font-medium text-white">hello@johndoe.dev</p>
                    </div>
                </a>
                
                <a href="#" className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                        <Phone size={20} />
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Phone</h3>
                        <p className="text-xl font-medium text-white">+1 (555) 000-0000</p>
                    </div>
                </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-dark-lighter p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="w-full bg-dark border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full bg-dark border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600"
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                    <textarea
                        id="message"
                        rows={4}
                        required
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        className="w-full bg-dark border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600 resize-none"
                        placeholder="Hello, I'd like to talk about..."
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-bold py-4 rounded-xl transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
                >
                    Send Message <Send size={18} />
                </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;