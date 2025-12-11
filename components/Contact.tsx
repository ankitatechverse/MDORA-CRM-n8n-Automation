import React from 'react';
import { SectionId } from '../types';
import { Mail, ArrowUpRight, FileText } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="py-24 border-t border-white/5 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
             <div className="inline-block px-3 py-1 bg-brand-accent text-brand-black font-bold text-xs uppercase tracking-widest mb-6 rounded-sm">
                Capacity Available
             </div>
            <h2 className="font-display text-5xl md:text-7xl text-white mb-8 tracking-tight">
              Scale without <br/> adding headcount.
            </h2>
            
            <div className="flex flex-col gap-6 items-start">
              <a 
                href="mailto:build@mdora.ai" 
                className="inline-flex items-center gap-3 text-2xl text-gray-400 hover:text-brand-accent transition-colors group font-mono"
              >
                <Mail className="w-6 h-6" />
                <span>build@mdora.ai</span>
                <ArrowUpRight className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                data-tally-open="rj5YdM"
                data-tally-overlay="1"
                className="inline-flex items-center gap-3 text-lg text-brand-accent border-b border-brand-accent/30 hover:border-brand-accent pb-1 transition-all group font-mono"
              >
                <FileText className="w-5 h-5" />
                <span>Start Project Brief Form</span>
                <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="flex flex-col justify-end items-start md:items-end">
            <nav className="flex flex-col gap-4 text-right">
              {['n8n Templates', 'Voice Demos', 'Case Studies', 'Documentation'].map(link => (
                <a key={link} href="#" className="text-gray-500 hover:text-brand-accent transition-colors">
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-600 text-sm font-mono">
          <p>© 2024 MDORA AI Systems. Architected for speed.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-brand-accent">System Status</a>
             <a href="#" className="hover:text-brand-accent">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};