import React, { useState } from 'react';
import { TICKET_TIERS, EVENT_METADATA } from '../data/tedxData';
import { TicketTier } from '../types';
import { X, Check, ArrowRight, Sparkles, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

interface TicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'id' | 'en';
}

export const TicketModal: React.FC<TicketModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [selectedTier, setSelectedTier] = useState<TicketTier>(TICKET_TIERS[1]); // default General
  const [step, setStep] = useState<'select' | 'form' | 'confirmed'>('select');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmed');
  };

  const resetModal = () => {
    setStep('select');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-9 shadow-2xl border border-neutral-200 my-8 relative">
        {/* Close Button */}
        <button
          onClick={resetModal}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-neutral-900 rounded-full hover:bg-neutral-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'select' && (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[11px] font-mono text-[#EB0028] font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OFFICIAL TICKETING PASS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-neutral-950">
                {lang === 'id' ? 'Amankan Tempatmu di TEDxUNM 2026' : 'Reserve Your Delegate Spot'}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 font-body mt-1">
                {lang === 'id'
                  ? 'Pilih kategori akses delegasi untuk mengikuti perhelatan The Art of Human Language.'
                  : 'Select your pass tier for the 2026 conference at Phinisi Auditorium, UNM Makassar.'}
              </p>
            </div>

            {/* Ticket Tier Cards */}
            <div className="space-y-3.5">
              {TICKET_TIERS.map((tier) => {
                const isSelected = selectedTier.id === tier.id;

                return (
                  <div
                    key={tier.id}
                    onClick={() => setSelectedTier(tier)}
                    className={`cursor-pointer p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
                      isSelected
                        ? 'border-neutral-950 bg-neutral-50 shadow-md ring-1 ring-neutral-950'
                        : 'border-neutral-200 hover:border-neutral-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-base sm:text-lg font-bold font-display text-neutral-950">
                            {tier.name}
                          </span>
                          {tier.badge && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-red-100 text-[#EB0028]">
                              {tier.badge}
                            </span>
                          )}
                        </div>
                        <div className="text-lg sm:text-xl font-extrabold font-display text-neutral-950 mt-1">
                          {tier.price}{' '}
                          {tier.originalPrice && (
                            <span className="text-xs text-neutral-400 line-through font-normal">
                              {tier.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>

                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                          isSelected
                            ? 'bg-[#EB0028] border-[#EB0028] text-white'
                            : 'border-neutral-300 text-transparent'
                        }`}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    </div>

                    <ul className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-neutral-600 font-body">
                      {tier.perks.slice(0, 4).map((perk, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#EB0028] shrink-0" />
                          <span className="line-clamp-1">{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="text-xs text-neutral-500 font-mono">
                {EVENT_METADATA.date} · Phinisi Hall
              </div>

              <button
                onClick={() => setStep('form')}
                className="inline-flex items-center gap-2 bg-[#111111] hover:bg-[#EB0028] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <span>{lang === 'id' ? 'Lanjutkan Data Diri' : 'Continue to Details'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 'form' && (
          <form onSubmit={handleRegisterSubmit} className="space-y-5">
            <div>
              <button
                type="button"
                onClick={() => setStep('select')}
                className="text-xs font-mono text-neutral-500 hover:text-neutral-900 mb-2"
              >
                ← {lang === 'id' ? 'Ganti Kategori Tiket' : 'Change Ticket Category'}
              </button>
              <h3 className="text-2xl font-bold font-display text-neutral-950">
                {lang === 'id' ? 'Formulir Registrasi Delegasi' : 'Delegate Information'}
              </h3>
              <p className="text-xs text-neutral-500 font-body mt-0.5">
                Kategori: <strong className="text-neutral-900">{selectedTier.name}</strong> ({selectedTier.price})
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider font-mono text-neutral-700 mb-1.5">
                  {lang === 'id' ? 'Nama Lengkap' : 'Full Name'} *
                </label>
                <input
                  required
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Contoh: Rian Pratama"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm font-body focus:outline-none focus:border-neutral-950"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider font-mono text-neutral-700 mb-1.5">
                  Email Aktif *
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@email.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm font-body focus:outline-none focus:border-neutral-950"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider font-mono text-neutral-700 mb-1.5">
                  Nomor WhatsApp *
                </label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+62 8..."
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm font-body focus:outline-none focus:border-neutral-950"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider font-mono text-neutral-700 mb-1.5">
                  {lang === 'id' ? 'Institusi / Kampus / Profesi' : 'Institution / Occupation'}
                </label>
                <input
                  type="text"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  placeholder="Universitas Negeri Makassar"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 text-sm font-body focus:outline-none focus:border-neutral-950"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider font-mono text-neutral-700 mb-1.5">
                {lang === 'id' ? 'Gagasan / Harapan Kamu di TEDxUNM 2026' : 'What ideas are you excited to explore?'}
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Bagikan sedikit tentang apa yang ingin kamu dengar..."
                className="w-full px-4 py-2 rounded-xl border border-neutral-300 text-sm font-body focus:outline-none focus:border-neutral-950 resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setStep('select')}
                className="px-4 py-2.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900"
              >
                Kembali
              </button>

              <button
                type="submit"
                className="px-6 py-3 bg-[#EB0028] hover:bg-[#c40021] text-white text-xs sm:text-sm font-semibold rounded-full shadow-md transition-colors"
              >
                {lang === 'id' ? 'Konfirmasi Pendaftaran Tiket' : 'Confirm Registration'}
              </button>
            </div>
          </form>
        )}

        {step === 'confirmed' && (
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono font-bold text-[#EB0028] uppercase tracking-wider">
                REGISTRASI BERHASIL · TEDxUNM 2026
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-neutral-950">
                Sampai Jumpa di Panggung Phinisi!
              </h3>
              <p className="text-sm text-neutral-600 font-body max-w-md mx-auto leading-relaxed">
                Terima kasih, <strong>{formData.fullName || 'Delegasi'}</strong>. E-ticket resmi beserta detail rundown dan panduan check-in telah kami kirimkan ke <strong>{formData.email || 'email terdaftar'}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-left max-w-md mx-auto space-y-2 text-xs font-body text-neutral-700">
              <div className="flex justify-between">
                <span className="text-neutral-500 font-mono">Kategori:</span>
                <span className="font-bold font-display">{selectedTier.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-mono">Total Biaya:</span>
                <span className="font-bold text-[#EB0028] font-display">{selectedTier.price}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-mono">Waktu:</span>
                <span>{EVENT_METADATA.date} (08:30 WITA)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500 font-mono">Venue:</span>
                <span>Auditorium Phinisi UNM Makassar</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={resetModal}
                className="px-6 py-2.5 bg-[#111111] text-white text-xs font-semibold rounded-full hover:bg-neutral-800 transition-colors"
              >
                Selesai / Kembali ke Website
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
