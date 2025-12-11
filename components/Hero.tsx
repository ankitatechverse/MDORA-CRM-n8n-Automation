import React from 'react';
import { ArrowDown, Cpu, Network, Mic, Zap } from 'lucide-react';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  const scrollToContent = () => {
    const element = document.getElementById(SectionId.SERVICES);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id={SectionId.HERO} 
      className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden"
    >
      {/* Dynamic Grid Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />
      
      {/* Horizon Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-brand-accent/10 to-transparent blur-[100px] pointer-events-none" />

      {/* Scanning Beam */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="w-full h-[2px] bg-brand-accent shadow-[0_0_20px_rgba(34,211,238,0.8)] animate-scan" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Typography */}
          <div className="lg:col-span-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 border border-brand-accent/30 bg-brand-accent/5 px-3 py-1 rounded-full mb-8 backdrop-blur-md">
              <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse"></span>
              <span className="text-xs font-mono text-brand-accent uppercase tracking-widest">Autonomous Systems Active</span>
            </div>

            <h1 className="font-display font-semibold text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight text-white mb-8">
              Revenue on <br />
              <span className="gradient-text drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">Autopilot.</span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl border-l-2 border-brand-accent/30 pl-6">
              We replace manual busywork with intelligent neural fabrics. From <span className="text-white font-medium">n8n orchestration</span> to <span className="text-white font-medium">human-parity voice agents</span>, we build the infrastructure that scales your business while you sleep.
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
              <span className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-md hover:border-brand-accent/50 hover:bg-brand-accent/5 transition-all cursor-default">
                <Network className="w-4 h-4 text-brand-accent" /> n8n Workflows
              </span>
              <span className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-md hover:border-brand-accent/50 hover:bg-brand-accent/5 transition-all cursor-default">
                <Cpu className="w-4 h-4 text-brand-accent" /> CRM Integration
              </span>
              <span className="flex items-center gap-2 border border-white/10 px-4 py-2 rounded-md hover:border-brand-accent/50 hover:bg-brand-accent/5 transition-all cursor-default">
                <Mic className="w-4 h-4 text-brand-accent" /> Voice Synthesis
              </span>
            </div>
          </div>

          {/* Visual abstract abstraction */}
          <div className="hidden lg:block lg:col-span-4 animate-float">
             <div className="relative w-full aspect-square">
                {/* Glowing Orb Behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/20 rounded-full blur-[80px] animate-pulse-slow"></div>
                
                <div className="relative h-full w-full border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl p-6 flex flex-col justify-between shadow-2xl ring-1 ring-white/10">
                   
                   {/* Simulated Header */}
                   <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4">
                     <div className="flex items-center gap-2">
                       <Zap className="w-4 h-4 text-brand-accent" />
                       <span className="text-xs font-mono text-gray-400">LIVE_EXECUTION</span>
                     </div>
                     <div className="flex gap-1">
                       <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                       <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                       <div className="w-2 h-2 rounded-full bg-green-500"></div>
                     </div>
                   </div>

                   {/* Simulated Workflow Card */}
                   <div className="space-y-4 relative">
                     {/* Connecting Line */}
                     <div className="absolute left-[19px] top-8 bottom-8 w-[1px] bg-gradient-to-b from-brand-accent/50 to-transparent"></div>

                     <div className="flex items-center gap-3 p-3 bg-brand-black/80 border border-brand-accent/20 rounded-lg backdrop-blur-sm z-10 shadow-lg transform translate-x-0 hover:translate-x-1 transition-transform">
                       <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
                       <div className="h-2 w-24 bg-white/20 rounded animate-pulse"></div>
                       <div className="ml-auto h-4 w-12 bg-brand-accent/20 rounded text-[10px] text-brand-accent flex items-center justify-center font-bold">WEBHOOK</div>
                     </div>
                     
                     <div className="flex items-center gap-3 p-3 bg-brand-black/80 border border-brand-accent/20 rounded-lg backdrop-blur-sm z-10 shadow-lg transform translate-x-2 hover:translate-x-3 transition-transform">
                       <div className="w-2 h-2 bg-brand-secondary rounded-full shadow-[0_0_10px_#6366f1]"></div>
                       <div className="h-2 w-32 bg-white/20 rounded animate-pulse animation-delay-2000"></div>
                       <div className="ml-auto h-4 w-12 bg-white/5 rounded text-[10px] text-gray-500 flex items-center justify-center">FILTER</div>
                     </div>
                     
                     <div className="flex items-center gap-3 p-3 bg-brand-black/80 border border-brand-accent/20 rounded-lg backdrop-blur-sm z-10 shadow-lg transform translate-x-4 hover:translate-x-5 transition-transform">
                       <Mic className="w-3 h-3 text-brand-accent animate-pulse" />
                       <div className="h-2 w-20 bg-white/20 rounded animate-pulse"></div>
                       <div className="ml-auto h-4 w-16 bg-brand-accent rounded text-[10px] text-black font-bold flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">DIALING...</div>
                     </div>
                   </div>

                   <div className="pt-6 border-t border-white/5 mt-4">
                     <div className="flex justify-between items-center">
                       <span className="text-xs text-gray-500 font-mono">LATENCY: 42ms</span>
                       <span className="text-xs text-brand-accent font-mono animate-pulse">OPTIMIZED</span>
                     </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-accent animate-float">
        <button onClick={scrollToContent} className="p-4 border border-brand-accent/20 rounded-full hover:bg-brand-accent/10 transition-colors backdrop-blur-sm group">
          <ArrowDown className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </section>
  );
};