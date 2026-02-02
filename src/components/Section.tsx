
import React from 'react';
import { SectionData } from '../types';

interface SectionProps {
  data: SectionData;
  revealClass?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ data, revealClass = "", id }) => {
  return (
    <section id={id} className={`mb-32 scroll-mt-24 ${revealClass}`}>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 mono whitespace-nowrap">
          {data.title}
        </h2>
        <div className="h-[1px] w-full bg-zinc-900"></div>
      </div>
      
      <div className="grid gap-6">
        {data.items.map((item, idx) => (
          <a 
            key={idx} 
            href={item.url}
            className="group block border-b border-zinc-900/50 pb-6 hover:border-zinc-700 transition-all duration-500"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div className="space-y-1">
                <span className="text-white text-xl font-light tracking-tight group-hover:text-zinc-300 transition-colors">
                  {item.title}
                </span>
                {item.description && (
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-sm group-hover:text-zinc-400">
                    {item.description}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-3">
                {item.year && (
                  <span className="text-zinc-700 text-[10px] mono group-hover:text-zinc-500 uppercase tracking-widest">
                    {item.year}
                  </span>
                )}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 duration-300">
                   <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Section;