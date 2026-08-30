import React from 'react';
import { ShoppingBag, Sparkles, Tag, ArrowUpRight } from 'lucide-react';

interface MerchandiseSponsorsProps {
  lang: 'id' | 'en';
  onOpenTickets: () => void;
}

export const MerchandiseSponsors: React.FC<MerchandiseSponsorsProps> = ({
  lang,
  onOpenTickets,
}) => {
  const merchItems = [
    {
      title: 'TEDxUNM 2026 Official Tote',
      tag: 'Heavy Canvas · Screenprinted',
      badge: 'Exclusive',
      status: 'Coming Soon',
      desc: lang === 'id' ? 'Tas kanvas premium edisi terbatas dengan tipografi The Art of Human Language.' : 'Heavyweight organic cotton tote featuring custom 2026 linguistic typography.',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Collector Program Journal',
      tag: 'Hardcover · Recycled Paper',
      badge: 'Delegate Kit',
      status: 'Coming Soon',
      desc: lang === 'id' ? 'Buku kurasi berisi esai pembicara, ringkasan riset, dan ruang refleksi personal.' : 'Curated volume with speaker essays, talk transcripts, and personal reflective prompts.',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Linguistic Enamel Pin & Lanyard',
      tag: 'Matte Finish · Metal Alloy',
      badge: 'Official',
      status: 'Coming Soon',
      desc: lang === 'id' ? 'Pin logam eksklusif penanda delegasi resmi TEDxUniversitas Negeri Makassar.' : 'Official branded matte metal lapel badge and custom woven neck lanyard.',
      image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="merchandise" className="py-24 sm:py-32 bg-white border-t border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-[#EB0028] font-mono tracking-wider">
                MERCHANDISE
              </span>
              <span className="text-neutral-300">—</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 font-display">
                {lang === 'id' ? 'KOLEKSI RESMI 2026' : 'OFFICIAL COLLECTION'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 font-display tracking-tight">
              {lang === 'id' ? 'Koleksi Simbolik TEDxUNM' : 'Official 2026 Artifacts'}
            </h2>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-700">
            <span className="w-2 h-2 rounded-full bg-[#EB0028]" />
            <span>{lang === 'id' ? 'TERMASUK DALAM TIKET DELEGASI' : 'INCLUDED IN DELEGATE PASSES'}</span>
          </div>
        </div>

        {/* Merchandise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {merchItems.map((item, idx) => (
            <div
              key={idx}
              className="group bg-neutral-50 rounded-2xl p-5 border border-neutral-200/80 hover:bg-white hover:border-neutral-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-neutral-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-neutral-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider">
                    {item.status}
                  </div>
                </div>

                <div className="text-[11px] font-mono text-[#EB0028] font-bold uppercase mb-1">
                  {item.tag}
                </div>

                <h3 className="text-lg font-bold font-display text-neutral-950 group-hover:text-[#EB0028] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 font-body mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-neutral-200/60 flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-mono">
                  TEDxUNM 2026
                </span>
                <button
                  onClick={onOpenTickets}
                  className="text-xs font-semibold text-neutral-900 hover:text-[#EB0028] flex items-center gap-1 transition-colors"
                >
                  <span>{lang === 'id' ? 'Dapatkan di Tiket' : 'Included in Pass'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
