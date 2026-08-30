import React from 'react';
import { ArrowRight, Sparkles, MapPin, Calendar } from 'lucide-react';
import { EVENT_METADATA } from '../data/tedxData';

interface FinalCtaProps {
  onOpenTickets: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenTickets }) => {
  return (
    <section className="relative py-32 sm:py-44 bg-[#FCFAF7] border-t border-neutral-200/60 overflow-hidden text-center">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(235, 0, 40, 0.05) 0%, rgba(245, 158, 11, 0.02) 40%, transparent 80%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] uppercase text-[#EB0028] font-display inline-block mb-6">
          11 — JOIN THE CONVERSATION
        </span>

        {/* Large Statement */}
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.96] tracking-tighter text-neutral-950 uppercase mb-8">
          Rasa Ingin Tahu Itu
          <br />
          <span className="text-[#EB0028]">Awal dari Segalanya.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="font-body text-base sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light mb-12">
          Temukan perspektif baru, dengarkan cerita yang menginspirasi, dan jadi bagian dari percakapan yang lebih besar di panggung TEDxUNM 2026.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            id="final-cta-ticket-btn"
            onClick={onOpenTickets}
            className="w-full sm:w-auto bg-[#EB0028] hover:bg-[#c90022] text-white px-10 sm:px-12 py-4 sm:py-5 rounded-full font-display font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xl shadow-red-500/25 hover:shadow-2xl hover:shadow-red-500/35 cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>Ambil Tempatmu</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Metadata */}
        <div className="mt-12 text-xs text-neutral-400 font-medium">
          <span>{EVENT_METADATA.date} · Grand Auditorium Phinisi UNM</span>
        </div>
      </div>
    </section>
  );
};
