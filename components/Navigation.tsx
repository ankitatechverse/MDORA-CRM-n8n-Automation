import React, { useState, useEffect } from 'react';
import { Menu, X, Command } from 'lucide-react';
import { SectionId } from '../types';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Ecosystem', id: SectionId.SERVICES },
    { label: 'Consultant', id: SectionId.ADVISER },
    { label: 'Contact', id: SectionId.CONTACT },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 glass-panel border-b border-brand-accent/10' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => scrollTo(SectionId.HERO)}
        >
          <div className="relative flex items-center justify-center">
             <Command className="w-8 h-8 text-white stroke-[1.5] group-hover:text-brand-accent transition-colors" />
             <div className="absolute inset-0 bg-brand-accent/40 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="font-display font-bold text-xl tracking-wide text-white">MDORA<span className="text-brand-accent">.AI</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-gray-400 hover:text-brand-accent transition-colors uppercase tracking-widest font-mono"
            >
              {link.label}
            </button>
          ))}
          <button 
            data-tally-open="rj5YdM"
            data-tally-overlay="1"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            className="px-6 py-2 bg-brand-accent/10 border border-brand-accent/50 text-brand-accent text-sm font-bold uppercase tracking-wider hover:bg-brand-accent hover:text-black transition-all duration-300 rounded-sm"
          >
            Start Automation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-brand-black border-b border-white/10 p-6 md:hidden flex flex-col gap-6 backdrop-blur-xl">
           {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left text-lg font-medium text-gray-300 font-mono"
            >
              {link.label}
            </button>
          ))}
          <button 
            data-tally-open="rj5YdM"
            data-tally-overlay="1"
            className="text-left text-lg font-bold text-brand-accent font-mono uppercase"
          >
            Start Automation
          </button>
        </div>
      )}
    </nav>
  );
};