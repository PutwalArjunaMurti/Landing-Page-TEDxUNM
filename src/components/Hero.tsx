import React from 'react';
import { ArrowDown, Sparkles, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { EVENT_METADATA } from '../data/tedxData';

interface HeroProps {
  onExploreClick: () => void;
  onTicketsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onTicketsClick }) => {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between items-center text-center px-4 sm:px-6 lg:px-12 pt-32 pb-16 overflow-hidden bg-[#FCFAF7]">
      {/* Background Subtle Atmosphere */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 65% 55% at 50% 35%, rgba(235, 0, 40, 0.04) 0%, rgba(245, 158, 11, 0.02) 45%, rgba(0, 100, 255, 0.015) 75%, transparent 100%)',
        }}
      />

      {/* Main Centered Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center my-auto">
        {/* Editorial Metadata Eyebrow */}
        <div className="mb-6 sm:mb-8 inline-flex items-center gap-3">
          <span className="w-6 sm:w-10 h-[1px] bg-neutral-300"></span>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] uppercase text-neutral-400 font-display">
            00 — {EVENT_METADATA.shortName} {EVENT_METADATA.edition}
          </span>
          <span className="w-6 sm:w-10 h-[1px] bg-neutral-300"></span>
        </div>

        {/* Large Display Typography */}
        <h1 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[104px] leading-[0.92] tracking-tighter text-neutral-950 uppercase mb-8 select-none">
          THE ART OF
          <br />
          <span className="text-[#EB0028] relative inline-block">
            HUMAN
            <span className="absolute -top-3 -right-6 hidden sm:inline-block text-[11px] font-bold tracking-widest uppercase bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded-full border border-neutral-200">
              Official Theme
            </span>
          </span>
          <br />
          LANGUAGE.
        </h1>

        {/* Tagline & Supporting Copy */}
        <p className="font-body text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light mb-10">
          <span className="font-medium text-neutral-900">{EVENT_METADATA.tagline}</span>{' '}
          Where ideas find their voice and courage inspires change at Universitas Negeri Makassar.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md mx-auto">
          <button
            id="hero-cta-spot"
            onClick={onTicketsClick}
            className="w-full sm:w-auto bg-[#EB0028] hover:bg-[#d00023] text-white px-8 sm:px-10 py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-xl shadow-red-500/20 hover:shadow-2xl hover:shadow-red-500/30 cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>Get Your Spot</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>

          <button
            id="hero-cta-explore"
            onClick={onExploreClick}
            className="w-full sm:w-auto bg-white/80 hover:bg-white border border-neutral-300/80 hover:border-neutral-400 text-neutral-800 px-8 sm:px-10 py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-xs cursor-pointer"
          >
            Explore TEDxUNM
          </button>
        </div>

        {/* Event Quick Pill */}
        <div className="mt-10 sm:mt-12 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-2 px-5 bg-white/70 backdrop-blur-xs border border-neutral-200/60 rounded-full text-xs text-neutral-500 font-medium">
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-[#EB0028]" />
            <span>{EVENT_METADATA.date}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-neutral-300 hidden sm:inline-block" />
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#EB0028]" />
            <span>Grand Auditorium Phinisi UNM</span>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Preview / Asymmetric Info Inspired by Pulze */}
      <div className="relative z-10 w-full max-w-6xl mx-auto pt-12 border-t border-neutral-200/60 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
        <div className="max-w-md">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#EB0028] mb-1.5 block font-display">
            A Global Stage, Given a Local Voice
          </span>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-body">
            Sebuah ruang tempat ide disuarakan dan keberanian melahirkan perubahan. Mempertemukan para pemikir visioner untuk menginspirasi aksi nyata.
          </p>
        </div>

        <div className="flex items-center gap-8 sm:gap-12">
          <div className="text-center md:text-right">
            <span className="text-2xl sm:text-3xl font-display font-black text-neutral-900 block leading-none">
              06+
            </span>
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium">
              Speakers
            </span>
          </div>
          <div className="w-[1px] h-8 bg-neutral-200" />
          <div className="text-center md:text-right">
            <span className="text-2xl sm:text-3xl font-display font-black text-neutral-900 block leading-none">
              01
            </span>
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-medium">
              Shared Vision
            </span>
          </div>
          <div className="w-[1px] h-8 bg-neutral-200" />
          <button
            onClick={onExploreClick}
            className="group p-3 rounded-full border border-neutral-200 bg-white/80 hover:bg-neutral-100 transition-colors"
            aria-label="Scroll Down"
          >
            <ArrowDown className="w-4 h-4 text-neutral-600 group-hover:text-neutral-950 group-hover:translate-y-0.5 transition-all" />
          </button>
        </div>
      </div>
    </section>
  );
};
