import React from 'react';
import { TimelineItem } from '../types';

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <section id="timeline" className="mb-32 reveal reveal-3 scroll-mt-24">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 mono whitespace-nowrap">
          Timeline of Growth
        </h2>
        <div className="h-[1px] w-full bg-zinc-900"></div>
      </div>
      
      <div className="relative ml-2 space-y-16">
        {/* Animated Line */}
        <div className="absolute left-0 top-2 bottom-0 w-[1px] bg-gradient-to-b from-zinc-800 via-zinc-900 to-transparent"></div>
        
        {items.map((item, idx) => (
          <div key={idx} className="relative pl-10 group">
            {/* Connection Point */}
            <div className={`absolute -left-[4px] top-2 w-[9px] h-[9px] rounded-full transition-all duration-700
              ${item.isCurrent ? 'bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]' : 'bg-zinc-800 group-hover:bg-zinc-600'}`}>
            </div>
            
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="mono text-[10px] text-zinc-500 uppercase tracking-widest">
                  Age {item.age} — {item.year}
                </span>
                {item.isCurrent && (
                  <span className="text-[9px] bg-white text-black px-2 py-0.5 rounded-full mono font-bold uppercase">Active</span>
                )}
              </div>
              <h3 className="text-white text-lg font-light tracking-tight group-hover:translate-x-1 transition-transform duration-500">
                {item.milestone}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-md mt-1 group-hover:text-zinc-400 transition-colors">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
