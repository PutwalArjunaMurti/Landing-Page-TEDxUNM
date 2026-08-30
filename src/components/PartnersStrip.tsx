import React from 'react';
import { PARTNERS_DATA } from '../data/tedxData';

export const PartnersStrip: React.FC = () => {
  return (
    <section className="relative py-14 sm:py-18 bg-[#FCFAF7] border-y border-neutral-200/50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-neutral-400 font-display mb-8">
          Organized under official TED License · Powered by UNM Community
        </p>

        {/* Logo Strip Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-center">
          {PARTNERS_DATA.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center p-3 rounded-2xl transition-all duration-200 group"
            >
              <span className="font-display font-bold text-sm sm:text-base tracking-tight text-neutral-700 group-hover:text-neutral-950 transition-colors">
                {partner.name}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-neutral-400 mt-1 font-medium">
                {partner.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
