import React from 'react';
import { Sparkles, Users, Mic, Flame, ArrowUpRight } from 'lucide-react';

interface ExperienceSectionProps {
  lang: 'id' | 'en';
  onOpenTickets: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  lang,
  onOpenTickets,
}) => {
  const experiences = [
    {
      id: '01',
      tag: lang === 'id' ? 'PANGGUNG UTAMA' : 'MAIN STAGE',
      title: lang === 'id' ? 'Kurasi Panggung Otentik & Tanpa Filter' : 'Unfiltered Ideas on the Main Stage',
      desc: lang === 'id'
        ? 'Bukan seminar formal, melainkan ruang intim di mana setiap pembicara membongkar batas kegelisahan, algoritma bahasa, rekonstruksi stigma sosial, dan transformasi sains secara jujur.'
        : 'Far beyond a generic conference—an intimate auditorium where ideas are tested, lived experiences unpacked, and fresh perspectives given life.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'TEDx Stage Speaker Experience',
    },
    {
      id: '02',
      tag: lang === 'id' ? 'LINGKARAN DIALOG' : 'CONVERSATION SALON',
      title: lang === 'id' ? 'Koneksi Bermakna dengan Komunitas Kritis' : 'Deep Dialogue with Curious Minds',
      desc: lang === 'id'
        ? 'Duduk berdampingan dengan mahasiswa, akademisi, profesional, dan pemuda penggerak. Di TEDxUNM, penonton bukanlah audiens pasif, melainkan bagian dari percakapan intelektual yang hidup.'
        : 'Sit alongside creators, researchers, and fellow students. At TEDxUNM, attendees become active participants in meaningful community discourse.',
      image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'TEDx Community Networking',
    },
    {
      id: '03',
      tag: lang === 'id' ? 'AKSI NYATA' : 'REAL ACTION',
      title: lang === 'id' ? 'Pulang dengan Keberanian Memulai Langkah' : 'Action Beyond Inspiration',
      desc: lang === 'id'
        ? 'Kami memastikan setiap gagasan tidak selesai saat tepuk tangan berakhir. Melalui inisiatif Sayap Malaikat, JEDA.ID, dan laboratorium lokal, kamu terhubung langsung dengan langkah nyata.'
        : 'Ideas attain true power when embodied in action. Connect directly with social initiatives and community ventures ready for immediate grassroots collaboration.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'TEDx Real World Action',
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-36 bg-[#FAFAF8] border-t border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-xs font-semibold text-[#EB0028] font-mono tracking-wider">
            04
          </span>
          <span className="text-neutral-300">—</span>
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 font-display">
            {lang === 'id' ? 'PENGALAMAN EVENT' : 'THE EVENT EXPERIENCE'}
          </span>
        </div>

        {/* Large Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-neutral-950 font-display tracking-tight leading-[1.08]">
            {lang === 'id'
              ? 'Lebih dari Sekadar Inspirasi di Atas Kertas'
              : 'What Attending TEDxUNM Truly Feels Like'}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-body mt-4 max-w-2xl mx-auto leading-relaxed">
            {lang === 'id'
              ? 'Sebuah hari penuh di Phinisi Auditorium yang memadukan wawasan mendalam, interaksi manusiawi, dan ruang katalis untuk aksi nyata.'
              : 'A transformative day designed to spark critical thought, unexpected connections, and collaborative action.'}
          </p>
        </div>

        {/* Alternating Rhythmic Content Blocks */}
        <div className="space-y-16 sm:space-y-24">
          {experiences.map((exp, idx) => {
            const isReversed = idx % 2 !== 0;

            return (
              <div
                key={exp.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-white p-6 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.03)]"
              >
                {/* Text Block */}
                <div
                  className={`lg:col-span-6 space-y-4 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#EB0028]">
                      [{exp.id}]
                    </span>
                    <span className="text-xs uppercase tracking-wider font-mono text-neutral-400 font-medium">
                      {exp.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-neutral-950 leading-snug">
                    {exp.title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-600 font-body leading-relaxed">
                    {exp.desc}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={onOpenTickets}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-900 hover:text-[#EB0028] transition-colors"
                    >
                      <span>{lang === 'id' ? 'Amankan Kursimu' : 'Reserve Your Seat'}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Image Container */}
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200/70">
                    <img
                      src={exp.image}
                      alt={exp.imageAlt}
                      className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
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
