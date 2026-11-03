import React from 'react';
import { GraduationCap, Award, MapPin, Compass, BookOpen, Layers } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-[#090C12]/50 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF9900]">
            <span>01</span>
            <span aria-hidden="true">/</span>
            <span>BUILDER PROFILE & PHILOSOPHY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            About Me
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            Passionate about building practical AI and cloud-based solutions, learning by building, and empowering campus peers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: The Story */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
            {PROFILE.aboutStory.map((paragraph, index) => (
              <p key={index} className="text-slate-300/95">
                {paragraph}
              </p>
            ))}

            {/* Career Focus Area */}
            <div className="pt-4 space-y-3">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#FF9900]" />
                Primary Career Focus
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-200">
                {PROFILE.careerFocus.map((focus, i) => (
                  <span
                    key={focus}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#FF9900]/30 transition-colors"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </div>

            {/* Builder Philosophy Quote Box */}
            <div className="p-4 rounded-xl bg-[#101722]/80 border border-slate-800 text-sm text-slate-300 flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-[#FF9900] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">The Core Philosophy: </span>
                Turning theoretical models and AWS cloud primitives into working software. Learning is deepest when you are hands-on at the console and terminal.
              </div>
            </div>
          </div>

          {/* Right Column: Compact Profile Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-6 bg-gradient-to-b from-[#131A24] to-[#0D121B] border border-slate-800 shadow-xl glow-card space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#FF9900]/60 shadow-[0_0_12px_rgba(255,153,0,0.3)] shrink-0 bg-slate-900">
                    <img
                      src={PROFILE.photoUrl}
                      alt={PROFILE.name}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
                      <span>{PROFILE.name}</span>
                    </h3>
                    <div className="text-xs text-[#FF9900] font-mono">B.Tech AI Builder</div>
                  </div>
                </div>
                <div className="p-2 rounded-xl bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900]">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>

              {/* Verified Metadata Items */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4 text-xs">
                  <span className="text-slate-400">Education</span>
                  <span className="font-medium text-white text-right">
                    {PROFILE.education.institution}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4 text-xs">
                  <span className="text-slate-400">Field</span>
                  <span className="font-medium text-white text-right max-w-[200px]">
                    {PROFILE.education.degree}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 text-xs">
                  <span className="text-slate-400">Graduation</span>
                  <span className="font-mono font-medium text-slate-200">
                    2028 (Expected)
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 text-xs">
                  <span className="text-slate-400">Current CGPA</span>
                  <span className="font-mono font-bold text-[#FF9900] bg-[#FF9900]/10 px-2 py-0.5 rounded border border-[#FF9900]/20">
                    7.9 / 10
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 text-xs">
                  <span className="text-slate-400">Location</span>
                  <span className="font-medium text-slate-200 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#FF9900]" />
                    {PROFILE.education.location}
                  </span>
                </div>
              </div>

              {/* Verified Honors Highlights */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <div className="text-xs font-mono text-slate-400">CAMPUS & INDUSTRY HONORS</div>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-[#FF9900] shrink-0" />
                    <span>SAGE Academic Excellence Award 2025–26</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-[#FF9900] shrink-0" />
                    <span>Advanced Computing Specialization (AI)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
