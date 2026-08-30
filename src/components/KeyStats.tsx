import React from 'react';
import { Plus } from 'lucide-react';

export const KeyStats: React.FC = () => {
  const stats = [
    {
      value: '700+',
      label: 'Audience & Creators',
      caption: 'Curious minds gathering under one roof',
    },
    {
      value: '6',
      label: 'Visionary Speakers',
      caption: 'Artists, educators, scientists & founders',
    },
    {
      value: '3',
      label: 'Curated Talk Sessions',
      caption: 'Dynamic storytelling & live discourse',
    },
    {
      value: '100%',
      label: 'Ideas Worth Spreading',
      caption: 'Independently organized with local soul',
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-[#FCFAF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-neutral-400 mb-3 group-hover:text-[#EB0028] transition-colors">
                <Plus className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-900 mb-2">
                {stat.value}
              </span>
              <span className="font-display font-semibold text-xs sm:text-sm uppercase tracking-wider text-neutral-700 mb-1">
                {stat.label}
              </span>
              <p className="font-body text-xs text-neutral-400 max-w-[180px] leading-relaxed hidden sm:block">
                {stat.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
