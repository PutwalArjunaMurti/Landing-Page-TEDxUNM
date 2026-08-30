import React from 'react';
import { Speaker } from '../types';
import { X, Instagram, Linkedin, ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';

interface SpeakerModalProps {
  speaker: Speaker | null;
  onClose: () => void;
  lang: 'id' | 'en';
}

export const SpeakerModal: React.FC<SpeakerModalProps> = ({
  speaker,
  onClose,
  lang,
}) => {
  if (!speaker) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-neutral-200 my-8 relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* Speaker Portrait */}
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 shadow-sm">
              <img
                src={speaker.avatar}
                alt={speaker.name}
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-xl text-[11px] font-mono">
                {speaker.institution}
              </div>
            </div>

            {/* Social handles */}
            <div className="mt-4 flex items-center gap-3">
              {speaker.instagram && (
                <div className="flex items-center gap-1.5 text-xs text-neutral-600 font-mono">
                  <Instagram className="w-3.5 h-3.5 text-[#EB0028]" />
                  <span>{speaker.instagram}</span>
                </div>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-1.5">
              {speaker.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-neutral-100 text-neutral-700 font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-neutral-950">
                {speaker.name}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 font-body font-medium mt-0.5">
                {speaker.role} · {speaker.institution}
              </p>
            </div>

            {/* Talk Concept */}
            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-2">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#EB0028]">
                {lang === 'id' ? 'TOPIK YANG DIBAWAKAN' : 'CURATED TALK'}
              </div>
              <div className="text-base font-bold font-display text-neutral-900 leading-snug">
                "{speaker.topic}"
              </div>
              <p className="text-xs text-neutral-600 italic font-body pt-1 border-t border-neutral-200/60">
                "{speaker.keyMessage}"
              </p>
            </div>

            {/* In-depth Bio */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-400">
                {lang === 'id' ? 'PROFIL LENGKAP' : 'SPEAKER BIOGRAPHY'}
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 font-body leading-relaxed">
                {speaker.bio}
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-neutral-400">
                TEDxUNM 2026 Stage
              </span>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold rounded-full transition-colors"
              >
                {lang === 'id' ? 'Tutup' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
