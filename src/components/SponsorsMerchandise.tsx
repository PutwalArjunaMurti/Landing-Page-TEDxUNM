import React from 'react';
import { ShoppingBag, Award, Sparkles } from 'lucide-react';

export const SponsorsMerchandise: React.FC = () => {
  const merchandiseMock = [
    {
      name: 'Official 2026 Theme Heavyweight Tee',
      edition: 'The Art of Human Language Edition',
      status: 'Coming Soon on D-Day',
      image:
        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Curator Canvas Tote & Notebook Set',
      edition: 'Numbered Limited Collector Batch',
      status: 'Coming Soon on D-Day',
      image:
        'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Minimalist Enamel Pin & Lanyard',
      edition: 'Official TEDxUNM Identity',
      status: 'Included in Delegate Kit',
      image:
        'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 bg-[#FCFAF7] border-t border-neutral-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Merchandise Subsection */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#EB0028] font-display flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-[#EB0028]/40"></span>
                09 — OFFICIAL MERCHANDISE
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-neutral-950 uppercase">
                Artefak & Memorabilia
              </h2>
            </div>
            <p className="font-body text-xs sm:text-sm text-neutral-500 max-w-sm leading-relaxed font-light">
              Koleksi edisi terbatas yang dirancang khusus untuk memperingati panggung TEDxUNM 2026. Tersedia eksklusif saat D-Day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {merchandiseMock.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-3xl p-4 bg-white border border-neutral-200/80 shadow-xs"
              >
                <div>
                  <div className="relative rounded-2xl overflow-hidden aspect-square bg-neutral-100 mb-4 border border-neutral-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-white">
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#EB0028] block mb-1">
                    {item.edition}
                  </span>
                  <h3 className="font-display font-bold text-base text-neutral-900 leading-snug">
                    {item.name}
                  </h3>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
                  <span>Exclusive at Venue</span>
                  <span className="font-bold text-neutral-700">Grab on D-Day</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsors & Partners Call */}
        <div className="rounded-[36px] bg-neutral-950 text-white p-8 sm:p-14 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#EB0028]">
              Collaboration & Sponsorship
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Dukung Panggung Intelektual Makassar
            </h3>
            <p className="font-body text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
              Kami membuka kesempatan kemitraan bagi institusi, korporasi, dan media partner yang memiliki visi selaras untuk memberdayakan pertukaran ide transformatif.
            </p>
          </div>

          <a
            href="mailto:tedxunm@gmail.com?subject=Sponsorship%20Inquiry%20TEDxUNM%202026"
            className="shrink-0 bg-white hover:bg-neutral-100 text-neutral-950 px-8 py-4 rounded-full font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg"
          >
            Hubungi Tim Kemitraan
          </a>
        </div>
      </div>
    </section>
  );
};
