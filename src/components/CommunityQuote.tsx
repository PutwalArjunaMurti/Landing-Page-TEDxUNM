import React from 'react';
import { Quote, Sparkles, MessageCircle, Heart } from 'lucide-react';

interface CommunityQuoteProps {
  lang: 'id' | 'en';
}

export const CommunityQuote: React.FC<CommunityQuoteProps> = ({ lang }) => {
  return (
    <section id="community" className="py-24 sm:py-36 bg-[#FAFAF8] border-t border-neutral-200/70 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Editorial Label */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <span className="text-xs font-semibold text-[#EB0028] font-mono tracking-wider">
            06
          </span>
          <span className="text-neutral-300">—</span>
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500 font-display">
            {lang === 'id' ? 'KOMUNITAS & DAMPAK' : 'COMMUNITY & IMPACT'}
          </span>
        </div>

        {/* Big Quote Symbol */}
        <div className="text-[#EB0028] flex justify-center mb-6 opacity-80">
          <Quote className="w-12 h-12 sm:w-16 sm:h-16 stroke-[1.5]" />
        </div>

        {/* Main Editorial Quote Statement */}
        <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-normal text-neutral-900 font-display leading-tight sm:leading-snug tracking-tight max-w-4xl mx-auto">
          {lang === 'id' ? (
            <>
              "Setiap ide memiliki potensi untuk menginspirasi seseorang. Setiap percakapan memiliki peluang untuk memulai perubahan. Jadilah bagian dari TEDxUNM dan sebarkan ide yang berdampak nyata."
            </>
          ) : (
            <>
              "Every idea has the potential to awaken a mind. Every authentic conversation holds the seed for enduring societal transformation."
            </>
          )}
        </blockquote>

        {/* Author / Community Metadata */}
        <div className="mt-8 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm mb-3">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
              alt="TEDxUNM Curator"
              className="w-full h-full object-cover grayscale"
            />
          </div>
          <div className="text-sm font-bold font-display text-neutral-950">
            Tim Kurasi & Volunteer TEDxUNM 2026
          </div>
          <div className="text-xs text-neutral-500 font-body mt-0.5">
            Universitas Negeri Makassar · South Sulawesi, Indonesia
          </div>
        </div>

        {/* Qualitative Highlights Trio */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-6 rounded-2xl border border-neutral-200/80">
            <div className="text-xs font-mono font-bold text-[#EB0028] mb-2 uppercase">
              01 / {lang === 'id' ? 'PERSPEKTIF BARU' : 'FRESH PERSPECTIVES'}
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 font-body leading-relaxed">
              {lang === 'id'
                ? 'Lihat dunia dari sudut pandang yang berbeda dan temukan makna baru dalam hal-hal yang selama ini terasa biasa.'
                : 'Challenge conventional worldviews and discover profound meaning hidden within ordinary everyday experiences.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-200/80">
            <div className="text-xs font-mono font-bold text-[#EB0028] mb-2 uppercase">
              02 / {lang === 'id' ? 'KONEKSI BERMAKNA' : 'MEANINGFUL CONNECTIONS'}
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 font-body leading-relaxed">
              {lang === 'id'
                ? 'Bertemu dengan komunitas yang percaya bahwa ide dapat membangun hubungan dan menggerakkan perubahan.'
                : 'Connect with an active circle of thinkers and changemakers convinced that authentic ideas build lifelong solidarity.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-neutral-200/80">
            <div className="text-xs font-mono font-bold text-[#EB0028] mb-2 uppercase">
              03 / {lang === 'id' ? 'AKSI NYATA' : 'ACTION BEYOND INSPIRATION'}
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 font-body leading-relaxed">
              {lang === 'id'
                ? 'Pulang bukan hanya dengan inspirasi, tetapi juga dengan keberanian untuk mengambil langkah pertama.'
                : 'Leave empowered with concrete tools and alliances necessary to translate inspiration into decisive personal action.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
