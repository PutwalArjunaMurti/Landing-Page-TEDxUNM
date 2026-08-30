import React from 'react';
import { PARTNERS_DATA } from '../data/tedxData';

interface PartnerStripProps {
  lang: 'id' | 'en';
}

export const PartnerStrip: React.FC<PartnerStripProps> = ({ lang }) => {
  const stats = [
    {
      value: '+ 7',
      label: lang === 'id' ? 'Pembicara Visioner' : 'Visionary Speakers',
      subtext: lang === 'id' ? 'Seni, Sains, Hukum & Budaya' : 'Art, AI, Law & Social Impact',
    },
    {
      value: '+ 1,000+',
      label: lang === 'id' ? 'Partisipan & Komunitas' : 'Attendees & Community',
      subtext: lang === 'id' ? 'Pemuda, Akademisi & Kreator' : 'Youth, Academics & Leaders',
    },
    {
      value: '+ 5',
      label: lang === 'id' ? 'Pilar Nilai Perubahan' : 'Core Value Pillars',
      subtext: lang === 'id' ? 'Curiosity hingga Impact' : 'Curiosity to Real Impact',
    },
    {
      value: '+ 1',
      label: lang === 'id' ? 'Panggung Suara Bersama' : 'Shared Human Stage',
      subtext: lang === 'id' ? 'Phinisi Hall, Makassar' : 'Phinisi Hall, Makassar',
    },
  ];

  return (
    <section id="stats-partner-strip" className="border-y border-neutral-200/70 bg-white py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Small Trust Label */}
        <p className="text-center text-xs uppercase tracking-widest text-neutral-400 font-medium font-body mb-8">
          {lang === 'id'
            ? 'Diselenggarakan Secara Independen di Bawah Lisensi TED'
            : 'Independently Organized Under Official License from TED'}
        </p>

        {/* Minimal Partner Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
          {PARTNERS_DATA.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2 text-neutral-800 text-xs sm:text-sm font-display font-semibold tracking-tight py-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
              <span>{partner.name}</span>
            </div>
          ))}
        </div>

        {/* Thin Divider */}
        <div className="w-full h-px bg-neutral-100 my-12 sm:my-16" />

        {/* 4 Minimalist Stats Inspired by Reference `+` Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 font-display tracking-tight group-hover:text-[#EB0028] transition-colors duration-200">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-neutral-800 font-display mt-2">
                {stat.label}
              </div>
              <div className="text-xs text-neutral-500 font-body mt-0.5">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
