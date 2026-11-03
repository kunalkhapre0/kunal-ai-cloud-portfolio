import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Cloud } from 'lucide-react';

interface NavbarProps {
  onOpenScanner: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenScanner }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Superpowers', href: '#superpowers' },
    { label: 'Projects', href: '#projects' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'AWS Journey', href: '#aws-journey' },
    { label: 'Built on AWS', href: '#built-on-aws' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#07090E]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Brand Wordmark (Single element) */}
          <a
            href="#"
            className="flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group focus-visible:outline-[#FF9900]"
          >
            <span className="p-1.5 rounded-lg bg-[#FF9900]/15 border border-[#FF9900]/30 text-[#FF9900] group-hover:bg-[#FF9900]/25 transition-colors">
              <Cloud className="w-4 h-4" />
            </span>
            <span>
              Kunal Khapre <span className="text-[#FF9900] font-mono text-xs font-normal">/ AI × Cloud</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links (Single-line, no wraps) */}
          <nav className="hidden lg:flex items-center gap-6 text-xs xl:text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#FF9900] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-[#FF9900]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenScanner}
              className="px-4 py-2 text-xs font-bold text-slate-950 bg-[#FF9900] hover:bg-[#FF8C00] rounded-lg shadow-sm hover:shadow-[#FF9900]/20 transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 focus-visible:outline-[#FF9900]"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Explore My Superpower</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenScanner}
              className="sm:hidden px-2.5 py-1.5 text-xs font-bold text-slate-950 bg-[#FF9900] rounded-lg flex items-center gap-1"
              aria-label="Open Superpower Scanner"
            >
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>Scanner</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg focus-visible:outline-[#FF9900]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0E17] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-[#FF9900] hover:bg-slate-900 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenScanner();
              }}
              className="w-full py-2.5 px-4 text-xs font-bold text-slate-950 bg-[#FF9900] rounded-lg flex items-center justify-center gap-2 shadow-md"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>Explore My Superpower</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
