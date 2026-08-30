import React from 'react';
import { MessageSquare, Layers, Sparkles, Volume2, Globe } from 'lucide-react';
import { EVENT_METADATA } from '../data/tedxData';

export const ThemeStory: React.FC = () => {
  return (
    <section id="theme" className="relative py-28 sm:py-36 bg-[#FCFAF7] overflow-hidden border-t border-neutral-200/50">
      {/* Background Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 75% 30%, rgba(235, 0, 40, 0.035) 0%, transparent 50%), radial-gradient(circle at 20% 70%, rgba(0, 100, 255, 0.02) 0%, transparent 40%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Label */}
        <div className="mb-8">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#EB0028] font-display flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#EB0028]/40"></span>
            02 — THE THEME & STORY
          </span>
        </div>

        {/* Oversized Typographic Statement */}
        <div className="relative my-8 py-8 border-y border-neutral-200/80">
          <div className="flex flex-col select-none">
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-2">
              Curatorial Statement · 2026
            </span>
            <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] tracking-tighter text-neutral-950 uppercase">
              THE ART OF
              <span className="block text-[#EB0028]">HUMAN LANGUAGE.</span>
            </h2>
          </div>

          {/* Annotations overlay */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-neutral-200/60">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#EB0028] font-semibold mb-1">
                [01] THE POWER OF SYNTAX
              </span>
              <p className="text-xs text-neutral-600 leading-relaxed font-body">
                Cara kita merangkai kata adalah cetak biru dari cara kita berpikir, mencintai, dan membangun peradaban.
              </p>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#EB0028] font-semibold mb-1">
                [02] DIGITAL & ALGORITHMIC VOICES
              </span>
              <p className="text-xs text-neutral-600 leading-relaxed font-body">
                Di era kecerdasan buatan, bagaimana manusia menjaga kedalaman empati di balik miliaran baris algoritma?
              </p>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#EB0028] font-semibold mb-1">
                [03] LOCAL RESONANCE
              </span>
              <p className="text-xs text-neutral-600 leading-relaxed font-body">
                Dari tutur lisan Sinrilik hingga narasi modern Makassar, setiap dialek menyimpan kearifan yang tak tergantikan.
              </p>
            </div>
          </div>
        </div>

        {/* Supporting Narrative & Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-center mt-16">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-neutral-900 leading-snug">
              "The way you speak shapes who you are, what you believe, and how you see the world."
            </h3>

            <p className="font-body text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
              Setiap kata membawa makna. Setiap percakapan membangun koneksi. Dan setiap ide memiliki kekuatan untuk membentuk masa depan. TEDxUNM 2026 mengundangmu untuk menemukan ide-ide yang layak disebarkan melalui kekuatan bahasa—baik lisan, visual, gestur, maupun kode.
            </p>

            <p className="font-body text-neutral-500 text-xs sm:text-sm leading-relaxed">
              Bahasa bukan sekadar alat komunikasi; ia adalah cermin dari keberanian kita untuk jujur pada diri sendiri dan terbuka pada cerita orang lain.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              {['Voice', 'Empathy', 'Digital Syntax', 'Storytelling', 'Resonance'].map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1 rounded-full bg-white border border-neutral-200 text-[11px] font-semibold text-neutral-700 tracking-wide"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6">
            {/* Visual Editorial Collage Card */}
            <div className="relative rounded-[32px] overflow-hidden bg-neutral-900 text-white p-8 sm:p-10 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 flex flex-col justify-between h-full space-y-8">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-[#EB0028]" />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">
                      Audio-Visual Discourse
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500">
                    EDITION 2026
                  </span>
                </div>

                <div className="space-y-4">
                  <blockquote className="font-display font-medium text-lg sm:text-xl text-neutral-100 italic leading-relaxed">
                    "Bahasa manusia adalah jembatan paling rapuh sekaligus paling kokoh yang pernah kita bangun untuk saling memahami."
                  </blockquote>
                  <span className="block text-xs uppercase tracking-wider text-neutral-400 font-semibold font-body">
                    — Kurasi Kurator TEDxUNM 2026
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-800 text-xs">
                  <div>
                    <span className="text-[10px] text-neutral-500 block uppercase font-bold">Tema Utama</span>
                    <span className="text-neutral-200 font-medium">The Art of Human Language</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 block uppercase font-bold">Format</span>
                    <span className="text-neutral-200 font-medium">Live Talks & Interaction</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
