
import React from 'react';

interface BottomNavProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeSection, onNavigate }) => {
  const navItems = [
    { label: 'Home', id: 'home', icon: 'H' },
    { label: 'About', id: 'about', icon: 'A' },
    { label: 'Projects', id: 'projects', icon: 'P' },
    { label: 'Blog', id: 'blog', icon: 'B' },
    { label: 'Contact', id: 'contact', icon: 'C' },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center pointer-events-none">
      <div className="flex items-center gap-1 p-1 bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl pointer-events-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`
              relative px-4 py-2 rounded-full text-[10px] uppercase tracking-widest mono transition-all duration-300
              ${activeSection === item.id 
                ? 'bg-white text-black font-bold scale-105' 
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;