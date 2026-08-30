import React from 'react';
import { Quote, Heart, Users, Sparkles } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="relative py-28 sm:py-36 bg-[#FCFAF7] border-t border-neutral-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#EB0028] font-display flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#EB0028]/40"></span>
            07 — COMMUNITY & IMPACT
            <span className="w-8 h-[1px] bg-[#EB0028]/40"></span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-neutral-950 uppercase mb-4">
            Voices of The Movement
          </h2>
          <p className="font-body text-sm sm:text-base text-neutral-500 font-light leading-relaxed">
            Setiap ide memiliki potensi untuk menginspirasi seseorang. Setiap percakapan memiliki peluang untuk memulai perubahan.
          </p>
        </div>

        {/* Large Editorial Testimonial (Inspired by the large quote in Pulze reference) */}
        <div className="max-w-4xl mx-auto text-center relative px-4 sm:px-8 mb-20">
          <div className="text-[#EB0028] flex justify-center mb-6 opacity-80">
            <Quote className="w-12 h-12" />
          </div>

          <blockquote className="font-display font-medium text-xl sm:text-2xl md:text-3xl text-neutral-900 leading-relaxed tracking-tight mb-8">
            "TEDxUNM bukan hanya panggung berdurasi 18 menit. Bagi kami generasi muda di Makassar, ini adalah ruang aman untuk membuktikan bahwa gagasan lokal kami mampu beresonansi setara di panggung intelektual dunia."
          </blockquote>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden mb-3 border border-neutral-200">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                alt="Community Curator"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-display font-bold text-sm text-neutral-900">
              Tim Kuratorial & Volunteer TEDxUNM
            </span>
            <span className="text-xs text-neutral-400 font-body">
              Universitas Negeri Makassar
            </span>
          </div>
        </div>

        {/* Community Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-xs">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#EB0028] block mb-2">
              [Pillars 01]
            </span>
            <h3 className="font-display font-bold text-lg text-neutral-900 mb-2">
              Perspektif Baru
            </h3>
            <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
              Melihat dunia dari sudut pandang yang berbeda dan menemukan makna mendalam dalam hal-hal yang selama ini terasa biasa.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-xs">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#EB0028] block mb-2">
              [Pillars 02]
            </span>
            <h3 className="font-display font-bold text-lg text-neutral-900 mb-2">
              Koneksi Bermakna
            </h3>
            <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
              Bertemu dengan komunitas curious minds yang percaya bahwa ide autentik dapat membangun relasi dan menggerakkan perubahan.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-xs">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#EB0028] block mb-2">
              [Pillars 03]
            </span>
            <h3 className="font-display font-bold text-lg text-neutral-900 mb-2">
              Aksi Nyata
            </h3>
            <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
              Pulang bukan hanya membawa inspirasi, tetapi dibekali keberanian dan jejaring untuk mengambil langkah nyata pertama.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
