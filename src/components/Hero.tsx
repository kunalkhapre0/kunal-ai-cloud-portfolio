import React from 'react';
import { Zap, ArrowUpRight, Github, Sparkles, Cloud, ShieldCheck, MapPin } from 'lucide-react';
import { AmbientCanvas } from './AmbientCanvas';
import { PROFILE } from '../data/portfolioData';

interface HeroProps {
  onOpenScanner: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenScanner }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background canvas & ambient grid */}
      <div className="absolute inset-0 aws-grid-pattern opacity-40 pointer-events-none" />
      <AmbientCanvas />

      {/* Top subtle glow orb */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#FF9900]/10 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Visible Hint for Hackathon Challenge */}
        <div className="flex flex-wrap items-center justify-start sm:justify-center gap-3 mb-6">
          {/* Main required visible hint badge/button */}
          <button
            onClick={onOpenScanner}
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF9900]/15 hover:bg-[#FF9900]/25 border border-[#FF9900]/40 text-[#FF9900] text-xs font-semibold shadow-[0_0_15px_rgba(255,153,0,0.2)] hover:shadow-[0_0_20px_rgba(255,153,0,0.4)] transition-all cursor-pointer"
            aria-label="Discover my hidden superpower interactive scanner"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9900] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF9900]" />
            </span>
            <span className="tracking-wide">⚡ Discover my hidden superpower</span>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-amber-200">
              Interactive Scanner
            </span>
          </button>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-medium px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800">
            <Cloud className="w-3.5 h-3.5 text-[#FF9900]" />
            <span>{PROFILE.statusBadge}</span>
          </div>
        </div>

        {/* Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF9900]">
                <span>AWS STUDENT BUILDER CHALLENGE 2026</span>
                <span aria-hidden="true">·</span>
                <span>BUILD YOUR TECH SUPERPOWER</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
                Building My Tech Superpower with{' '}
                <span className="bg-gradient-to-r from-[#FF9900] via-[#FFB340] to-amber-200 bg-clip-text text-transparent">
                  AI & Cloud.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {PROFILE.heroSubheadline}
            </p>

            {/* Quick credentials strip (unboxed clean text) */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-slate-200 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF9900]" /> AWS Certified AI Practitioner
              </span>
              <span aria-hidden="true">·</span>
              <span>SAGE University Indore</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" /> Indore, MP, India
              </span>
            </div>

            {/* Buttons Group */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenScanner}
                className="px-6 py-3 bg-[#FF9900] hover:bg-[#FF8C00] text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-[#FF9900]/25 hover:shadow-[#FF9900]/40 transition-all flex items-center gap-2 group cursor-pointer focus-visible:outline-[#FF9900]"
              >
                <Zap className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                <span>Explore My Superpower</span>
              </button>

              <a
                href="#projects"
                className="px-5 py-3 bg-slate-900/90 hover:bg-slate-800 text-white font-medium text-sm rounded-xl border border-slate-700/80 hover:border-slate-600 transition-all flex items-center gap-1.5 focus-visible:outline-[#FF9900]"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm rounded-xl border border-slate-800 hover:border-slate-700 transition-colors flex items-center gap-2 focus-visible:outline-[#FF9900]"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase Container with Kunal's HD Picture */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl p-2 bg-gradient-to-b from-[#232F3E]/60 to-[#131A22]/90 border border-[#FF9900]/30 glow-card shadow-2xl">
              {/* Image Frame */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80">
                <img
                  src={PROFILE.photoUrl}
                  alt="Kunal Khapre - AI & Cloud Builder"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.02] transition-transform duration-700 hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle Cinematic Contrast Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14]/95 via-transparent to-black/20 pointer-events-none" />

                {/* Top Corner Live Status */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#07090E]/85 backdrop-blur-md border border-[#FF9900]/40 text-[11px] font-mono text-[#FF9900] flex items-center gap-1.5 shadow-md">
                  <span className="flex h-2 w-2 rounded-full bg-[#FF9900] animate-pulse" />
                  <span className="font-semibold">AWS Student Builder</span>
                </div>

                {/* Floating Telemetry & Identity Tag */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[#0E1520]/95 backdrop-blur-md border border-[#FF9900]/30 text-xs text-slate-200 shadow-xl">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white text-sm">Kunal Khapre</span>
                    <span className="font-mono text-[11px] text-[#FF9900] bg-[#FF9900]/10 px-2 py-0.5 rounded border border-[#FF9900]/25">
                      Indore, India
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>B.Tech AI · SAGE University</span>
                    <span className="text-slate-300 font-mono">AWS Certified AI Practitioner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width 4-metric strip below hero */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono text-white tabular-nums">7.9 / 10</div>
            <div className="text-xs text-slate-400">Current CGPA · AI Specialization</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono text-white tabular-nums">2026</div>
            <div className="text-xs text-slate-400">AWS Certified AI Practitioner</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold text-white">SAGE University</div>
            <div className="text-xs text-slate-400">AWS Student Builder Group Leader</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold font-mono text-white tabular-nums">2028</div>
            <div className="text-xs text-slate-400">Expected B.Tech Graduation</div>
          </div>
        </div>
      </div>
    </section>
  );
};
