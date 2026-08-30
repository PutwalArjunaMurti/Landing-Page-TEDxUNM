import React from 'react';
import { VALUES_DATA } from '../data/tedxData';
import { Sparkles, ArrowRight } from 'lucide-react';

export const ValuesSection: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#FCFAF7] border-t border-neutral-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#EB0028] font-display flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#EB0028]/40"></span>
              03 — CORE VALUES
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-neutral-950">
              Prinsip yang Menggerakkan
              <br />
              <span className="text-neutral-500 font-light">Setiap Percakapan & Ide.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-500 max-w-sm leading-relaxed font-body">
            Lima nilai fundamental yang kami pegang teguh dalam mengkurasi panggung, merangkul pembicara, dan menyatukan komunitas.
          </p>
        </div>

        {/* Editorial Values List with Thin Dividers & Large Typography */}
        <div className="divide-y divide-neutral-200/80 border-y border-neutral-200/80">
          {VALUES_DATA.map((val) => (
            <div
              key={val.number}
              className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start group hover:bg-neutral-50/50 transition-colors px-2 sm:px-4 rounded-2xl"
            >
              {/* Index number */}
              <div className="lg:col-span-2 flex items-baseline gap-3">
                <span className="font-mono text-xs font-bold text-[#EB0028] tracking-widest">
                  {val.number}
                </span>
                <span className="w-4 h-[1px] bg-neutral-300"></span>
              </div>

              {/* Value Title */}
              <div className="lg:col-span-4">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-neutral-900 group-hover:text-[#EB0028] transition-colors">
                  {val.title}
                </h3>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium mt-1 block">
                  {val.titleEn}
                </span>
              </div>

              {/* Description */}
              <div className="lg:col-span-6">
                <p className="font-body text-sm sm:text-base text-neutral-600 leading-relaxed font-light mb-2">
                  {val.description}
                </p>
                <p className="font-body text-xs text-neutral-400 leading-relaxed italic">
                  "{val.descriptionEn}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
