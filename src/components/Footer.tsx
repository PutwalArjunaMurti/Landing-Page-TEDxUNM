import React from 'react';
import { TedxLogo } from './TedxLogo';
import { EVENT_METADATA } from '../data/tedxData';
import { Instagram, Youtube, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-neutral-950 text-neutral-300 pt-20 pb-12 border-t border-neutral-900 overflow-hidden">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-800">
          {/* Column 1: Brand & Disclaimer */}
          <div className="md:col-span-5 space-y-4">
            <TedxLogo theme="dark" size="lg" />
            <p className="font-body text-xs text-neutral-400 max-w-sm leading-relaxed font-light pt-2">
              TEDxUniversitas Negeri Makassar adalah platform independen yang mempertemukan ide, manusia, dan gagasan transformatif di bawah lisensi resmi TED Conferences.
            </p>
            <div className="pt-2 text-[10px] text-neutral-500 font-mono">
              THE ART OF HUMAN LANGUAGE · 2026
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 block">
              Navigasi Halaman
            </span>
            <ul className="space-y-2 text-xs font-medium text-neutral-400 font-body">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About TEDxUNM
                </a>
              </li>
              <li>
                <a href="#theme" className="hover:text-white transition-colors">
                  The Theme: Human Language
                </a>
              </li>
              <li>
                <a href="#speakers" className="hover:text-white transition-colors">
                  Curated Speakers
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  The Experience
                </a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">
                  Archive: 2025 Lens of Reality
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contacts & Address */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 block">
              Kontak Resmi & Lokasi
            </span>

            <div className="space-y-2.5 text-xs text-neutral-400 font-body font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#EB0028] shrink-0 mt-0.5" />
                <span>{EVENT_METADATA.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#EB0028] shrink-0" />
                <a
                  href={`mailto:${EVENT_METADATA.contactEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {EVENT_METADATA.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#EB0028] shrink-0" />
                <span>{EVENT_METADATA.contactPhone}</span>
              </div>
            </div>

            {/* Socials */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com/tedxunm"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-[#EB0028] transition-all"
                aria-label="Instagram TEDxUNM"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://ted.com/watch/tedx-talks"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-[#EB0028] transition-all"
                aria-label="YouTube TEDx Talks"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com/@tedxunm"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-full bg-neutral-900 text-neutral-400 hover:text-white text-xs font-semibold hover:bg-[#EB0028] transition-all"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-body">
          <p className="text-[11px] max-w-xl text-center sm:text-left">
            © 2026 TEDxUNM. This independent TEDx event is operated under license from TED. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-xs font-medium cursor-pointer"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
