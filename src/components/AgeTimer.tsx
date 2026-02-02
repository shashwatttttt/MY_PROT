
import React, { useState, useEffect } from 'react';
import { INTRO } from '../constants';

const AgeTimer: React.FC = () => {
  const [age, setAge] = useState<string>('');

  useEffect(() => {
    const birthDate = new Date(INTRO.birthDate).getTime();
    
    const calculateAge = () => {
      const now = new Date().getTime();
      const diff = now - birthDate;
      // 31557600000 is the number of milliseconds in a Julian year (365.25 days)
      const ageInYears = (diff / 31557600000).toFixed(9);
      setAge(ageInYears);
    };

    const timer = setInterval(calculateAge, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-4 items-start group">
      <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 mono group-hover:text-zinc-400 transition-colors">
        Chronology
      </span>
      <div className="flex flex-col items-start gap-1">
        <span className="text-zinc-500 text-sm mono uppercase tracking-[0.2em] font-medium">been here for</span>
        <div className="flex items-baseline gap-3">
          <span className="text-4xl sm:text-6xl font-black tracking-tighter tabular-nums text-white selection:bg-white selection:text-black">
            {age}
          </span>
          <span className="text-xl font-bold text-zinc-700 tracking-tighter">years</span>
        </div>
      </div>
    </div>
  );
};

export default AgeTimer;