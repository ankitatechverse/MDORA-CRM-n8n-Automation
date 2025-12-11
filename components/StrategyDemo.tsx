import React, { useState } from 'react';
import { SectionId, StrategyResult } from '../types';
import { analyzeBusinessCase } from '../services/geminiService';
import { Sparkles, ArrowRight, Loader2, Terminal, Cpu } from 'lucide-react';

export const StrategyDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StrategyResult | null>(null);

  const handleAnalyze = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setResult(null);
    
    // Simulate system processing
    const minTime = new Promise(resolve => setTimeout(resolve, 2000));
    const analysisPromise = analyzeBusinessCase(input);
    
    const [_, data] = await Promise.all([minTime, analysisPromise]);
    
    setResult(data);
    setLoading(false);
  };

  return (
    <section id={SectionId.ADVISER} className="py-24 bg-brand-surface relative overflow-hidden">
      {/* Decorative Grid */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Input */}
          <div>
            <div className="flex items-center gap-2 mb-6 text-brand-accent">
              <Cpu className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-widest font-mono">Automation Architect</span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
              Audit Your <br/> Workflow.
            </h2>
            
            <p className="text-gray-400 mb-10 text-lg">
              Describe a manual process that burns your team's time (e.g., "Leads come from Facebook, I email them manually, then update Salesforce"). Our model will suggest an automation architecture.
            </p>

            <div className="glass-panel p-2 rounded-md border border-brand-accent/20 flex flex-col md:flex-row gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="e.g. My sales team spends 4 hours/day leaving voicemails..."
                className="bg-transparent text-white px-4 py-3 w-full focus:outline-none placeholder:text-gray-600 font-sans"
                onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
              />
              <button 
                onClick={handleAnalyze}
                disabled={loading || !input}
                className="bg-brand-accent text-black px-6 py-3 font-semibold hover:bg-white transition-colors rounded-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {loading ? <Loader2 className="animate-spin w-4 h-4" /> : 'Architect Solution'}
              </button>
            </div>
            <p className="mt-4 text-xs text-brand-accent/60 font-mono">
              *Powered by Gemini 2.5 Flash. Generates live automation protocols.
            </p>
          </div>

          {/* Right Column: Output */}
          <div className="relative">
            <div className="absolute inset-0 bg-brand-accent/10 blur-3xl rounded-full" />
            
            <div className={`min-h-[400px] glass-panel border border-brand-accent/10 rounded-xl p-8 transition-all duration-500 ${loading ? 'opacity-80' : 'opacity-100'}`}>
              <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                <Terminal className="w-5 h-5 text-gray-500" />
                <span className="text-xs font-mono text-gray-500">SYSTEM_OUTPUT</span>
              </div>

              {loading ? (
                <div className="h-full flex flex-col items-center justify-center gap-4 py-20">
                  <div className="w-12 h-12 border-2 border-brand-accent border-t-transparent rounded-full animate-spin" />
                  <p className="font-mono text-sm text-brand-accent animate-pulse">COMPUTING WORKFLOW...</p>
                </div>
              ) : result ? (
                <div className="space-y-8 animate-fade-in-up">
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 font-mono">Bottleneck Analysis</h4>
                    <p className="text-white text-lg leading-relaxed border-l-2 border-red-500 pl-4 bg-red-500/5 py-2">{result.analysis}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 font-mono">Proposed Architecture</h4>
                    <ul className="space-y-4">
                      {result.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded bg-brand-accent/10 text-brand-accent flex items-center justify-center text-xs font-mono mt-1 border border-brand-accent/20">
                            0{i + 1}
                          </span>
                          <span className="text-gray-300">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-brand-accent/10 p-4 rounded border border-brand-accent/20">
                    <h4 className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-1 font-mono">Projected Efficiency</h4>
                    <p className="text-gray-200 text-sm font-semibold">{result.impact}</p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-20 opacity-40">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                    <ArrowRight className="text-brand-accent" />
                  </div>
                  <p className="text-gray-400 font-mono text-sm">AWAITING INPUT PARAMETERS</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};