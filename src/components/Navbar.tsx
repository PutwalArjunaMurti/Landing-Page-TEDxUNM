import React, { useState, useEffect } from 'react';
import { TedxLogo } from './TedxLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenTickets: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTickets }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Theme', href: '#theme' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Experience', href: '#experience' },
    { label: 'Journey', href: '#journey' },
    { label: 'Community', href: '#community' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-4 sm:px-8 pointer-events-none transition-all duration-300">
      <nav
        id="main-navigation"
        className={`pointer-events-auto w-full max-w-5xl rounded-full border transition-all duration-300 flex items-center justify-between px-5 sm:px-7 py-2.5 sm:py-3 ${
          scrolled
            ? 'bg-[#FCFAF7]/90 backdrop-blur-md border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
            : 'bg-[#FCFAF7]/70 backdrop-blur-sm border-neutral-200/50 shadow-sm'
        }`}
      >
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 group" aria-label="TEDxUNM Home" id="nav-brand-logo">
          <TedxLogo theme="light" size="sm" variant="compact" showSubtext={false} />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 lg:gap-8 text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-neutral-950 transition-colors duration-150 relative py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <button
            id="nav-get-spot-btn"
            onClick={onOpenTickets}
            className="bg-neutral-950 hover:bg-[#EB0028] text-white px-5 sm:px-6 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-200 hover:shadow-md flex items-center gap-1.5 cursor-pointer"
          >
            <span>Get Your Spot</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-neutral-700 hover:text-neutral-950 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 bg-[#FCFAF7] border border-neutral-200 rounded-3xl p-6 shadow-2xl pointer-events-auto md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200 z-50">
          <div className="flex flex-col gap-3 text-sm font-semibold uppercase tracking-wider text-neutral-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-neutral-100 hover:text-[#EB0028] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTickets();
            }}
            className="w-full bg-[#EB0028] text-white py-3 rounded-full text-xs font-bold uppercase tracking-wider text-center mt-2 cursor-pointer shadow-lg shadow-red-500/20"
          >
            Ambil Tempatmu (Get Tickets)
          </button>
        </div>
      )}
    </header>
  );
};
