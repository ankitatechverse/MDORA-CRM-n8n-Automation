import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { StrategyDemo } from './components/StrategyDemo';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen text-white selection:bg-brand-accent selection:text-white relative">
      
      {/* Global Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Grain Overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.4] z-10 mix-blend-overlay"></div>
        
        {/* Moving Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-brand-secondary/20 rounded-full mix-blend-screen blur-[120px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-brand-accent/10 rounded-full mix-blend-screen blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-brand-dim/20 rounded-full mix-blend-screen blur-[120px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        <Navigation />
        
        <main>
          <Hero />
          <Services />
          <StrategyDemo />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;