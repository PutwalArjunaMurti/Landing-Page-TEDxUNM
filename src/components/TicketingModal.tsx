import React, { useState } from 'react';
import { TICKET_TIERS, EVENT_METADATA } from '../data/tedxData';
import { TicketTier } from '../types';
import { Check, ArrowRight, ShieldCheck, X, Sparkles } from 'lucide-react';

interface TicketingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TicketingModal: React.FC<TicketingModalProps> = ({ isOpen, onClose }) => {
  const [selectedTier, setSelectedTier] = useState<TicketTier>(TICKET_TIERS[0]);
  const [step, setStep] = useState<'select' | 'form' | 'success'>('select');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#FCFAF7] border border-neutral-200 rounded-[32px] overflow-hidden shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto no-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 transition-all cursor-pointer shadow-xs"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'select' && (
          <div>
            <div className="text-center mb-8">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#EB0028] font-display block mb-1">
                Official Delegate Registration
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-neutral-950 uppercase">
                Pilih Akses Tiket
              </h3>
              <p className="text-xs text-neutral-500 font-body mt-1">
                {EVENT_METADATA.date} · Grand Auditorium Menara Phinisi UNM
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {TICKET_TIERS.map((tier) => {
                const isSelected = selectedTier.id === tier.id;
                return (
                  <div
                    key={tier.id}
                    onClick={() => setSelectedTier(tier)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      isSelected
                        ? 'border-[#EB0028] bg-white shadow-md ring-1 ring-[#EB0028]'
                        : 'border-neutral-200 bg-white/70 hover:border-neutral-300'
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-display font-bold text-base text-neutral-900">
                          {tier.name}
                        </span>
                        {tier.badge && (
                          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-50 text-[#EB0028]">
                            {tier.badge}
                          </span>
                        )}
                      </div>
                      <ul className="text-[11px] text-neutral-500 space-y-0.5 pt-1 font-body">
                        {tier.perks.slice(0, 3).map((perk, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <Check className="w-3 h-3 text-[#EB0028]" />
                            <span>{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="text-left sm:text-right shrink-0">
                      <span className="font-display font-black text-xl text-neutral-950 block">
                        {tier.price}
                      </span>
                      {tier.originalPrice && (
                        <span className="text-[10px] text-neutral-400 line-through">
                          {tier.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Lisensi Resmi TED · Kursi Terbatas</span>
              </div>
              <button
                onClick={() => setStep('form')}
                className="bg-[#EB0028] hover:bg-[#c90022] text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-red-500/20"
              >
                <span>Lanjutkan Registrasi</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 'form' && (
          <div>
            <div className="mb-6">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#EB0028] font-display block mb-1">
                Langkah 2 dari 2
              </span>
              <h3 className="font-display font-black text-2xl text-neutral-950 uppercase">
                Data Diri Peserta
              </h3>
              <p className="text-xs text-neutral-500 font-body">
                Tiket Terpilih: <strong className="text-neutral-900">{selectedTier.name}</strong> ({selectedTier.price})
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-display">
                  Nama Lengkap (Sesuai ID/KTM)
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Nurul Fadilah"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-sm focus:outline-none focus:border-[#EB0028] font-body"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-display">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-sm focus:outline-none focus:border-[#EB0028] font-body"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-display">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0812-xxxx-xxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-sm focus:outline-none focus:border-[#EB0028] font-body"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-display">
                  Instansi / Jurusan / Profesi
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Universitas Negeri Makassar / Desainer"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-neutral-200 text-sm focus:outline-none focus:border-[#EB0028] font-body"
                />
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-neutral-200">
                <button
                  type="button"
                  onClick={() => setStep('select')}
                  className="text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-neutral-900 cursor-pointer"
                >
                  Kembali
                </button>
                <button
                  type="submit"
                  className="bg-[#EB0028] hover:bg-[#c90022] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-red-500/20"
                >
                  Konfirmasi & Ambil Tempat
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 'success' && (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-red-50 text-[#EB0028] rounded-full flex items-center justify-center mx-auto shadow-inner">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="font-display font-black text-2xl text-neutral-950 uppercase">
              Registrasi Berhasil Terdata!
            </h3>
            <p className="font-body text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
              Terima kasih, <strong>{formData.name || 'Sahabat TEDx'}</strong>! Konfirmasi pemesanan dan panduan akses tiket <strong>{selectedTier.name}</strong> telah dikirimkan ke <strong>{formData.email || 'email terdaftar'}</strong>.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setStep('select');
                  onClose();
                }}
                className="bg-neutral-950 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer hover:bg-neutral-800"
              >
                Kembali ke Beranda
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
