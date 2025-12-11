import React from 'react';
import { SectionId } from '../types';
import { Workflow, Phone, Database, Users, Zap, Bot, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-24 md:py-32 relative">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold text-white mb-4">
              The Automation <br/><span className="text-gray-500">Ecosystem.</span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-brand-accent to-brand-secondary rounded-full"></div>
          </div>
          <p className="text-gray-400 max-w-md text-right hidden md:block text-lg">
            We don't just write prompts. We engineer <span className="text-brand-accent font-semibold">end-to-end systems</span> that capture leads, qualify them, and close deals autonomously.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Card 1: n8n (Large) */}
          <div className="md:col-span-2 md:row-span-2 glass-panel glass-panel-hover p-8 rounded-3xl relative overflow-hidden group">
            {/* Hover Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">
               <Workflow className="w-32 h-32 text-brand-accent stroke-[1]" />
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-brand-accent/10 border border-brand-accent/20 rounded-2xl flex items-center justify-center mb-6 text-brand-accent group-hover:bg-brand-accent group-hover:text-black transition-colors duration-300 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <Workflow className="w-7 h-7" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">n8n Orchestration</h3>
                <p className="text-gray-400 leading-relaxed max-w-sm text-lg">
                  We architect complex, self-healing workflows using n8n. Connect over 300+ apps without fragmentation. From lead ingestion to invoice generation, we remove the human bottleneck.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                 <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 font-mono">Custom Nodes</span>
                 <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 font-mono">Error Handling</span>
                 <span className="px-3 py-1 bg-brand-accent/10 border border-brand-accent/30 rounded-full text-xs text-brand-accent font-mono shadow-[0_0_10px_rgba(6,182,212,0.2)]">Real-time</span>
              </div>
            </div>
          </div>

          {/* Card 2: Voice AI */}
          <div className="md:col-span-1 md:row-span-2 glass-panel glass-panel-hover p-8 rounded-3xl relative group overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-brand-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-14 h-14 bg-brand-secondary/10 border border-brand-secondary/20 rounded-2xl flex items-center justify-center mb-6 text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300">
              <Phone className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Voice Agents</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Deploy human-parity voice assistants for inbound support or outbound qualification. 24/7 availability with zero wait times.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-white transition-colors">
                <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full shadow-[0_0_8px_#6366f1]"></div>
                <span>Sub-500ms Latency</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-white transition-colors">
                <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full shadow-[0_0_8px_#6366f1]"></div>
                <span>Sentiment Analysis</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-white transition-colors">
                <div className="w-1.5 h-1.5 bg-brand-secondary rounded-full shadow-[0_0_8px_#6366f1]"></div>
                <span>Dynamic Scripts</span>
              </div>
            </div>
          </div>

          {/* Card 3: CRM */}
          <div className="glass-panel glass-panel-hover p-6 rounded-3xl flex flex-col justify-between group">
            <div className="flex justify-between items-start">
               <Database className="w-8 h-8 text-gray-600 group-hover:text-brand-accent transition-colors" />
               <ArrowRight className="w-5 h-5 text-gray-700 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-transform" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors">CRM Hygiene</h3>
              <p className="text-sm text-gray-400 mt-2">Auto-enrichment of contacts. No more manual data entry.</p>
            </div>
          </div>

          {/* Card 4: Lead Gen */}
          <div className="glass-panel glass-panel-hover p-6 rounded-3xl flex flex-col justify-between group">
            <div className="flex justify-between items-start">
               <Users className="w-8 h-8 text-gray-600 group-hover:text-brand-secondary transition-colors" />
               <ArrowRight className="w-5 h-5 text-gray-700 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-transform" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-brand-secondary transition-colors">Lead Engines</h3>
              <p className="text-sm text-gray-400 mt-2">Multi-channel scrapers and warm-up sequences.</p>
            </div>
          </div>

          {/* Card 5: Horizontal Wide - Integration */}
          <div className="md:col-span-2 lg:col-span-4 glass-panel p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border border-brand-accent/30 bg-gradient-to-r from-brand-accent/5 to-brand-secondary/5 relative overflow-hidden group">
             {/* Shimmer Effect */}
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-200%] group-hover:animate-shimmer pointer-events-none"></div>

             <div className="flex items-center gap-6 relative z-10">
                <div className="p-4 bg-brand-accent text-black rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                   <Bot className="w-8 h-8" />
                </div>
                <div>
                   <h3 className="text-2xl font-bold text-white">Custom Agent Development</h3>
                   <p className="text-gray-400 mt-1">Need something specific? We build bespoke LLM agents trained on your data.</p>
                </div>
             </div>
             <button 
               data-tally-open="rj5YdM"
               data-tally-overlay="1"
               className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-lg hover:bg-brand-accent hover:text-black transition-all shadow-[0_0_0_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center gap-3 group/btn relative z-10"
             >
                <Zap className="w-5 h-5 fill-black" />
                Start Project Brief
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};