import React, { useState } from 'react';
import { SPEAKERS_DATA } from '../data/tedxData';
import { Speaker } from '../types';
import { SpeakerModal } from './SpeakerModal';
import { ArrowUpRight, Sparkles, MessageCircle, Mic2, Plus } from 'lucide-react';

export const SpeakersSection: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const featuredSpeaker = SPEAKERS_DATA.find((s) => s.featured) || SPEAKERS_DATA[0];
  const supportingSpeakers = SPEAKERS_DATA.filter((s) => s.id !== featuredSpeaker.id);

  return (
    <section id="speakers" className="relative py-28 sm:py-36 bg-[#FCFAF7] border-t border-neutral-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#EB0028] font-display flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#EB0028]/40"></span>
            04 — CURATED VOICES
            <span className="w-8 h-[1px] bg-[#EB0028]/40"></span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-950 uppercase mb-4">
            Meet The Speakers
          </h2>
          <p className="font-body text-sm sm:text-base text-neutral-500 font-light leading-relaxed">
            Para pemikir, seniman, akademisi, dan pemimpin perubahan yang siap berbagi gagasan transformatif di panggung TEDxUNM 2026.
          </p>
        </div>

        {/* 1. Large Featured Speaker Showcase (Matching Pulze Featured Moment) */}
        <div className="mb-24">
          <div className="bg-white border border-neutral-200/80 rounded-[36px] overflow-hidden shadow-sm p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Text side */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#EB0028] text-[10px] font-bold uppercase tracking-wider mb-4">
                    <Mic2 className="w-3.5 h-3.5" />
                    <span>Featured Keynote</span>
                  </div>
                  
                  <h3 className="font-display font-black text-3xl sm:text-4xl text-neutral-950 leading-tight mb-2">
                    {featuredSpeaker.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#EB0028] font-display mb-4">
                    {featuredSpeaker.role} · {featuredSpeaker.institution}
                  </p>

                  <h4 className="font-display font-medium text-lg sm:text-xl text-neutral-800 leading-snug mb-4">
                    "{featuredSpeaker.topic}"
                  </h4>

                  <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-4 font-light">
                    {featuredSpeaker.bio}
                  </p>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => setSelectedSpeaker(featuredSpeaker)}
                    className="bg-[#EB0028] hover:bg-[#c90022] text-white px-6 sm:px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md shadow-red-500/20 flex items-center gap-2 cursor-pointer"
                  >
                    <span>Pelajari Topik</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs text-neutral-400 font-medium">
                    {featuredSpeaker.instagram}
                  </span>
                </div>
              </div>

              {/* Large Image side */}
              <div className="lg:col-span-7">
                <div className="relative rounded-[28px] overflow-hidden aspect-[4/3] bg-neutral-100 group">
                  <img
                    src={featuredSpeaker.avatar}
                    alt={featuredSpeaker.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-300">
                        Topik Utama
                      </span>
                      <p className="text-sm sm:text-base font-display font-semibold">
                        {featuredSpeaker.topicId}
                      </p>
                    </div>
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Alternating Supporting Speakers Rhythm (Inspired by Pulze layout) */}
        <div className="space-y-16 sm:space-y-24">
          {supportingSpeakers.map((speaker, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={speaker.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Content Order Flips on Desktop */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-neutral-400">
                      0{index + 2}
                    </span>
                    <span className="w-6 h-[1px] bg-neutral-200"></span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#EB0028]">
                      Speaker Session
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-neutral-950 leading-tight">
                    {speaker.name}
                  </h3>

                  <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-display">
                    {speaker.role} · {speaker.institution}
                  </p>

                  <div className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                      Topik Bicara
                    </span>
                    <h4 className="font-display font-medium text-sm sm:text-base text-neutral-900 leading-snug">
                      "{speaker.topic}"
                    </h4>
                  </div>

                  <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed font-light line-clamp-3">
                    {speaker.bio}
                  </p>

                  <div className="pt-2 flex items-center gap-4">
                    <button
                      onClick={() => setSelectedSpeaker(speaker)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 hover:text-[#EB0028] uppercase tracking-wider transition-colors cursor-pointer group"
                    >
                      <span>Lihat Profil Lengkap</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>

                {/* Speaker Portrait Container */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div
                    onClick={() => setSelectedSpeaker(speaker)}
                    className="relative rounded-[32px] overflow-hidden aspect-[16/11] bg-neutral-100 cursor-pointer group shadow-sm border border-neutral-200/60"
                  >
                    <img
                      src={speaker.avatar}
                      alt={speaker.name}
                      className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-5 left-6 right-6 text-white flex items-end justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#EB0028] bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-full mb-1 inline-block">
                          {speaker.tags[0]}
                        </span>
                        <h4 className="font-display font-bold text-base sm:text-lg">
                          {speaker.name}
                        </h4>
                      </div>
                      <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white group-hover:bg-[#EB0028] transition-colors">
                        <Plus className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <SpeakerModal
        speaker={selectedSpeaker}
        onClose={() => setSelectedSpeaker(null)}
      />
    </section>
  );
};
