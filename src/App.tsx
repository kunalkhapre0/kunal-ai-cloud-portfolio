import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechSuperpowers } from './components/TechSuperpowers';
import { AWSJourney } from './components/AWSJourney';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { BuiltOnAWS } from './components/BuiltOnAWS';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SuperpowerScannerModal } from './components/SuperpowerScannerModal';

export default function App() {
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  const handleOpenScanner = () => {
    setIsScannerOpen(true);
  };

  const handleCloseScanner = () => {
    setIsScannerOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#07090E] text-slate-100 flex flex-col font-sans selection:bg-[#FF9900]/25 selection:text-[#FF9900]">
      {/* Top sticky navigation */}
      <Navbar onOpenScanner={handleOpenScanner} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenScanner={handleOpenScanner} />
        <About />
        <TechSuperpowers />
        <Projects />
        <Achievements />
        <AWSJourney />
        <BuiltOnAWS />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* THE SIGNATURE COMPETITION FEATURE: Interactive Tech Superpower Scanner */}
      <SuperpowerScannerModal
        isOpen={isScannerOpen}
        onClose={handleCloseScanner}
      />
    </div>
  );
}
