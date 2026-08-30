import React from 'react';
import { ARCHIVE_TALKS_2025 } from '../data/tedxData';
import { ArrowUpRight, Play, Clock } from 'lucide-react';

export const JourneyArchive: React.FC = () => {
  return (
    <section id="journey" className="relative py-28 sm:py-36 bg-[#FCFAF7] border-t border-neutral-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Label & Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#EB0028] font-display flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#EB0028]/40"></span>
              06 — TEDxUNM ARCHIVE · 2025
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-neutral-950 uppercase">
              Lens of Reality
            </h2>
          </div>
          <p className="font-body text-xs sm:text-sm text-neutral-500 max-w-md leading-relaxed font-light">
            Setiap individu memandang dunia melalui "lensa" yang berbeda. Kilas balik gagasan terpilih dari edisi sebelumnya yang terus menyulut percakapan.
          </p>
        </div>

        {/* 3-Column Editorial Cards (Inspired by 'Latest from Pulze' layout in reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARCHIVE_TALKS_2025.map((talk) => (
            <div
              key={talk.id}
              className="flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Image Container with Top Metadata */}
                <div className="flex items-center justify-between text-[11px] font-medium text-neutral-400 mb-3 px-1">
                  <span>Edition 2025</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    <span>{talk.duration}</span>
                  </div>
                </div>

                <div className="relative rounded-[24px] overflow-hidden aspect-[16/10] bg-neutral-900 mb-4 border border-neutral-200/60 shadow-xs">
                  <img
                    src={talk.image}
                    alt={talk.title}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/0 transition-colors" />

                  {/* Play badge overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-3.5 rounded-full bg-[#EB0028] text-white shadow-lg">
                      <Play className="w-4 h-4 fill-white" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-white">
                      {talk.category}
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-[#EB0028] block mb-1 font-display">
                  {talk.speaker}
                </span>

                <h3 className="font-display font-bold text-base sm:text-lg text-neutral-900 group-hover:text-[#EB0028] transition-colors leading-snug mb-2">
                  {talk.title}
                </h3>

                <p className="font-body text-xs text-neutral-500 leading-relaxed line-clamp-2 font-light">
                  {talk.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-200/60 flex items-center justify-between">
                <span className="text-[10px] font-mono text-neutral-400 uppercase">
                  Official TEDx Talk
                </span>
                <span className="text-xs font-bold text-neutral-800 group-hover:text-[#EB0028] inline-flex items-center gap-1 transition-colors">
                  <span>Tonton Video</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
