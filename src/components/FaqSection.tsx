import React, { useState } from 'react';
import { FAQ_DATA } from '../data/tedxData';
import { Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-28 sm:py-36 bg-[#FCFAF7] border-t border-neutral-200/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] uppercase text-[#EB0028] font-display flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#EB0028]/40"></span>
            10 — FREQUENTLY ASKED QUESTIONS
            <span className="w-8 h-[1px] bg-[#EB0028]/40"></span>
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-neutral-950 uppercase mb-4">
            Still curious?
          </h2>
          <p className="font-body text-sm text-neutral-500 font-light max-w-lg mx-auto">
            Segala hal yang perlu kamu ketahui tentang partisipasi dan pelaksanaan TEDxUNM 2026.
          </p>
        </div>

        {/* Minimal Accordion with Thin Dividers */}
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6 sm:py-8 transition-colors">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-base sm:text-xl text-neutral-900 group-hover:text-[#EB0028] transition-colors leading-snug">
                    {item.question}
                  </span>
                  <div className="p-2 rounded-full border border-neutral-200 group-hover:border-neutral-400 shrink-0 transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-neutral-900" />
                    ) : (
                      <Plus className="w-4 h-4 text-neutral-600 group-hover:text-neutral-950" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-12 text-xs sm:text-sm text-neutral-600 font-body leading-relaxed font-light animate-in fade-in duration-200">
                    <p className="mb-2">{item.answer}</p>
                    <p className="text-xs text-neutral-400 italic">
                      "{item.answerEn}"
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
