import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter, Home, User, Briefcase, Code, Mail } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navItems = [
  { label: 'Home', href: 'hero', icon: Home },
  { label: 'About', href: 'about', icon: User },
  { label: 'Work', href: 'projects', icon: Briefcase },
  { label: 'Services', href: 'services', icon: Code },
  { label: 'Contact', href: 'contact', icon: Mail },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(navItems.map(item => item.href));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Floating Navbar */}
      <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 hidden md:block w-fit`}>
        <div className="glass-card rounded-full px-2 py-2 flex items-center shadow-lg shadow-primary/5">
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 relative group flex items-center gap-2 ${
                  activeSection === item.href
                    ? 'text-white bg-white/10 shadow-inner'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.href && (
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>
          
          <div className="h-6 w-px bg-white/10 mx-2"></div>
          
          <div className="flex items-center space-x-2 px-2">
            <a href="#" className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all"><Github size={18} /></a>
            <a href="#" className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <nav className={`fixed w-full z-50 top-0 md:hidden transition-all duration-300 ${
        isScrolled ? 'bg-dark/90 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="px-4 py-4 flex items-center justify-between">
           <span className="text-xl font-bold font-mono tracking-tighter text-white">
              JD<span className="text-primary">.</span>
            </span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-dark/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center gap-4 w-full text-left px-4 py-4 rounded-xl text-base font-medium border border-transparent transition-all ${
                    activeSection === item.href
                      ? 'text-white bg-primary/20 border-primary/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <item.icon size={20} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;