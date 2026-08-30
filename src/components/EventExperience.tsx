import React from 'react';
import { Sparkles, Users, Coffee, Compass } from 'lucide-react';

export const EventExperience: React.FC = () => {
  const experiences = [
    {
      label: '01 — Live Storytelling',
      title: 'Gagasan yang Menggugah Tanpa Sekat',
      description:
        'Dengarkan kurasi 6+ pembicara visioner membawakan ide mereka di panggung utama Menara Phinisi UNM dalam format narasi puitis, data mutakhir, dan visual dinamis berstandar global TED.',
      image:
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
      tag: 'Stage Dynamics',
    },
    {
      label: '02 — Mindful Connections',
      title: 'Ruang Dialog Terbuka & Networking Lounge',
      description:
        'Setiap jeda sesi dirancang sebagai ruang temu santai di mana penonton, kurator, dan pembicara dapat berdiskusi langsung, bertukar kontak, dan merajut kolaborasi lintas profesi.',
      image:
        'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
      tag: 'Curated Encounters',
    },
    {
      label: '03 — Beyond the Stage',
      title: 'Instalasi Bahasa & Interactive Showcase',
      description:
        'Eksplorasi pameran karya visual, instalasi linguistik interaktif, dan merchandise eksklusif edisi 2026 yang merayakan kekayaan dialek lokal Makassar dan inovasi masa depan.',
      image:
        'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      tag: 'Spatial Atmosphere',
    },
  ];

  return (
    <section id="experience" className="relative py-28 sm:py-36 bg-[#FCFAF7] border-t border-neutral-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#EB0028] font-display flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#EB0028]/40"></span>
            05 — THE EXPERIENCE
            <span className="w-8 h-[1px] bg-[#EB0028]/40"></span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-950 uppercase mb-4">
            What Attending Feels Like
          </h2>
          <p className="font-body text-sm sm:text-base text-neutral-500 font-light leading-relaxed">
            Lebih dari sekadar konferensi satu hari, TEDxUNM adalah ekosistem tempat rasa penasaran dipupuk menjadi aksi nyata.
          </p>
        </div>

        {/* Alternating Experience Blocks */}
        <div className="space-y-20 sm:space-y-28">
          {experiences.map((item, index) => {
            const isReverse = index % 2 !== 0;
            return (
              <div
                key={item.label}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Text Side */}
                <div
                  className={`lg:col-span-5 space-y-4 ${
                    isReverse ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#EB0028]">
                    {item.label}
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-neutral-950 leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                  <div className="pt-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-white border border-neutral-200 text-[10px] font-semibold text-neutral-600 uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Large Rounded Image Container */}
                <div
                  className={`lg:col-span-7 ${
                    isReverse ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative rounded-[32px] overflow-hidden aspect-[16/10] bg-neutral-100 shadow-sm border border-neutral-200/60 group">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-neutral-950/10" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
