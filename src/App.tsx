import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PartnersStrip } from './components/PartnersStrip';
import { KeyStats } from './components/KeyStats';
import { AboutSection } from './components/AboutSection';
import { ThemeStory } from './components/ThemeStory';
import { ValuesSection } from './components/ValuesSection';
import { SpeakersSection } from './components/SpeakersSection';
import { EventExperience } from './components/EventExperience';
import { JourneyArchive } from './components/JourneyArchive';
import { CommunitySection } from './components/CommunitySection';
import { TicketingSection } from './components/TicketingSection';
import { SponsorsMerchandise } from './components/SponsorsMerchandise';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { TicketingModal } from './components/TicketingModal';

export default function App() {
  const [ticketModalOpen, setTicketModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#111111] antialiased selection:bg-[#EB0028] selection:text-white relative">
      {/* 1. Floating Minimal Navigation */}
      <Navbar onOpenTickets={() => setTicketModalOpen(true)} />

      <main className="w-full">
        {/* 2. Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('about')}
          onTicketsClick={() => setTicketModalOpen(true)}
        />

        {/* 3. Partner & Trust Strip */}
        <PartnersStrip />

        {/* 4. Statistics & Key Data */}
        <KeyStats />

        {/* 5. 01 — About TEDxUNM */}
        <AboutSection />

        {/* 6. 02 — The Theme: The Art of Human Language */}
        <ThemeStory />

        {/* 7. 03 — Core Values */}
        <ValuesSection />

        {/* 8. 04 — Curated Speakers */}
        <SpeakersSection />

        {/* 9. 05 — Event Experience */}
        <EventExperience />

        {/* 10. 06 — Journey / 2025 Archive (Lens of Reality) */}
        <JourneyArchive />

        {/* 11. 07 — Community & Qualitative Impact */}
        <CommunitySection />

        {/* 12. 08 — Ticketing & Passes */}
        <TicketingSection onSelectTier={() => setTicketModalOpen(true)} />

        {/* 13. 09 — Merchandise & Sponsorship */}
        <SponsorsMerchandise />

        {/* 14. 10 — FAQ */}
        <FaqSection />

        {/* 15. 11 — Final CTA */}
        <FinalCta onOpenTickets={() => setTicketModalOpen(true)} />
      </main>

      {/* 16. Footer */}
      <Footer />

      {/* Interactive Ticketing Flow Modal */}
      <TicketingModal
        isOpen={ticketModalOpen}
        onClose={() => setTicketModalOpen(false)}
      />
    </div>
  );
}
