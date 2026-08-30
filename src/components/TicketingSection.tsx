import React from 'react';
import { TICKET_TIERS } from '../data/tedxData';
import { Check, ArrowUpRight, Sparkles } from 'lucide-react';

interface TicketingSectionProps {
  onSelectTier: () => void;
}

export const TicketingSection: React.FC<TicketingSectionProps> = ({ onSelectTier }) => {
  return (
    <section id="tickets" className="relative py-28 sm:py-36 bg-[#FCFAF7] border-t border-neutral-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#EB0028] font-display flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#EB0028]/40"></span>
            08 — TICKETING & ACCESS
            <span className="w-8 h-[1px] bg-[#EB0028]/40"></span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-950 uppercase mb-4">
            Secure Your Spot
          </h2>
          <p className="font-body text-sm sm:text-base text-neutral-500 font-light leading-relaxed">
            Kapasitas kursi Grand Auditorium Menara Phinisi UNM dibatasi sesuai standar lisensi resmi TED demi kualitas pengalaman terbaik.
          </p>
        </div>

        {/* 3 Tier Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TICKET_TIERS.map((tier, idx) => {
            const isFeatured = idx === 1;
            return (
              <div
                key={tier.id}
                className={`rounded-[32px] p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-neutral-950 text-white shadow-2xl relative border border-neutral-800'
                    : 'bg-white text-neutral-900 border border-neutral-200/80 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        isFeatured
                          ? 'bg-[#EB0028] text-white'
                          : 'bg-neutral-100 text-neutral-600'
                      }`}
                    >
                      {tier.badge || 'Official Pass'}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        isFeatured ? 'text-neutral-400' : 'text-neutral-500'
                      }`}
                    >
                      {tier.status}
                    </span>
                  </div>

                  <h3
                    className={`font-display font-bold text-xl mb-3 ${
                      isFeatured ? 'text-white' : 'text-neutral-950'
                    }`}
                  >
                    {tier.name}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span
                      className={`font-display font-black text-3xl sm:text-4xl ${
                        isFeatured ? 'text-white' : 'text-neutral-950'
                      }`}
                    >
                      {tier.price}
                    </span>
                    {tier.originalPrice && (
                      <span
                        className={`text-xs line-through ${
                          isFeatured ? 'text-neutral-500' : 'text-neutral-400'
                        }`}
                      >
                        {tier.originalPrice}
                      </span>
                    )}
                  </div>

                  <div
                    className={`w-full h-[1px] mb-6 ${
                      isFeatured ? 'bg-neutral-800' : 'bg-neutral-100'
                    }`}
                  />

                  <ul className="space-y-3 font-body text-xs leading-relaxed mb-8">
                    {tier.perks.map((perk, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isFeatured ? 'text-[#EB0028]' : 'text-[#EB0028]'
                          }`}
                        />
                        <span
                          className={
                            isFeatured ? 'text-neutral-300' : 'text-neutral-600'
                          }
                        >
                          {perk}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onSelectTier}
                  className={`w-full py-4 rounded-full font-display font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 ${
                    isFeatured
                      ? 'bg-[#EB0028] hover:bg-[#c90022] text-white shadow-lg shadow-red-500/30'
                      : 'bg-neutral-950 hover:bg-neutral-800 text-white'
                  }`}
                >
                  <span>Ambil Tiket</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
