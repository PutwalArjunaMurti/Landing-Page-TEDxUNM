import React from 'react';
import { Target, Compass, Sparkles, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#FCFAF7] border-t border-neutral-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Label */}
        <div className="mb-8">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#EB0028] font-display flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#EB0028]/40"></span>
            01 — ABOUT TEDxUNM
          </span>
        </div>

        {/* Large Statement Headline & Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <h2 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-950 leading-[1.08] mb-8">
              A global stage,
              <br />
              <span className="text-[#EB0028]">given a local voice.</span>
            </h2>

            <p className="font-body text-base sm:text-lg text-neutral-600 leading-relaxed font-light mb-6">
              TEDx Universitas Negeri Makassar (TEDxUNM) adalah panggung independen berlisensi resmi TED yang diselenggarakan oleh komunitas pemuda dan sivitas akademika Makassar. Kami menghadirkan ruang bagi para pemikir, peneliti, inovator, kreator, dan agen perubahan untuk menyuarakan gagasan yang memantik percakapan bermakna serta mendorong aksi nyata.
            </p>

            <p className="font-body text-sm sm:text-base text-neutral-500 leading-relaxed font-light">
              Dalam setiap edisi, video TED Talks dipadukan dengan pembicara panggung langsung (live speakers) untuk memicu eksplorasi mendalam, pertukaran gagasan lintas disiplin, dan koneksi antarkomunitas yang melahirkan dampak berkelanjutan.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 pt-2">
            {/* Vision Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/70 shadow-xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-red-50 text-[#EB0028]">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-sm sm:text-base tracking-wide uppercase text-neutral-900">
                  Visi Kami
                </h3>
              </div>
              <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Menjadi platform yang mempertemukan ide, manusia, dan berbagai perspektif untuk memperluas wawasan, menginspirasi pemikiran baru, serta mendorong terciptanya perubahan yang bermakna bagi masyarakat.
              </p>
            </div>

            {/* Mission Key Pillars */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-950 text-white shadow-xl shadow-neutral-900/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-white/10 text-white">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-sm sm:text-base tracking-wide uppercase text-white">
                  Misi Utama
                </h3>
              </div>
              <ul className="space-y-3 font-body text-xs text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#EB0028] shrink-0 mt-0.5" />
                  <span>Menghadirkan gagasan yang autentik, relevan, dan berdampak.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#EB0028] shrink-0 mt-0.5" />
                  <span>Mempertemukan individu beragam latar belakang untuk saling bertukar sudut pandang.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#EB0028] shrink-0 mt-0.5" />
                  <span>Menumbuhkan budaya berpikir kritis dan rasa ingin tahu sepanjang hayat.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#EB0028] shrink-0 mt-0.5" />
                  <span>Mendorong kolaborasi lintas disiplin demi solusi nyata atas tantangan zaman.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
