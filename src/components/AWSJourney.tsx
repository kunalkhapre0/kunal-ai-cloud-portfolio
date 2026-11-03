import React, { useState } from 'react';
import { Award, Cloud, Users, Compass, Hammer, ChevronRight, CheckCircle2 } from 'lucide-react';
import { TIMELINE_MILESTONES, TimelineMilestone } from '../data/portfolioData';

export const AWSJourney: React.FC = () => {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(1); // Default to AWS Certified AI Practitioner

  const activeMilestone = TIMELINE_MILESTONES[activeMilestoneIndex];

  const getMilestoneIcon = (category: TimelineMilestone['category']) => {
    switch (category) {
      case 'Certification': return <Cloud className="w-4 h-4 text-[#FF9900]" />;
      case 'Leadership': return <Users className="w-4 h-4 text-[#FF9900]" />;
      case 'Academic': return <Award className="w-4 h-4 text-[#FF9900]" />;
      case 'Experience': return <Compass className="w-4 h-4 text-[#FF9900]" />;
      case 'Building': return <Hammer className="w-4 h-4 text-[#FF9900]" />;
    }
  };

  return (
    <section id="aws-journey" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-[#090C12]/60 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF9900]">
            <span>03</span>
            <span aria-hidden="true">/</span>
            <span>MILESTONES & LEADERSHIP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            AWS Journey & Milestones
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            From academic honors to AWS AI Practitioner certification, student community leadership, and regional builder summits.
          </p>
        </div>

        {/* Horizontal Timeline Track */}
        <div className="relative mb-12">
          {/* Glowing connecting line */}
          <div className="hidden md:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-[#FF9900]/20 via-[#FF9900] to-[#FF9900]/30 -translate-y-1/2 shadow-[0_0_12px_#FF9900]" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
            {TIMELINE_MILESTONES.map((item, idx) => {
              const isSelected = idx === activeMilestoneIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveMilestoneIndex(idx)}
                  className={`text-left p-4 rounded-xl transition-all border relative cursor-pointer ${
                    isSelected
                      ? 'bg-[#151D29] border-[#FF9900] shadow-lg shadow-[#FF9900]/15 scale-[1.02]'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  {/* Indicator Dot on line */}
                  <div className="hidden md:flex items-center justify-center mb-3">
                    <span
                      className={`h-4 w-4 rounded-full border-2 transition-all ${
                        isSelected
                          ? 'bg-[#FF9900] border-white shadow-[0_0_10px_#FF9900]'
                          : 'bg-slate-950 border-slate-700'
                      }`}
                    />
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-[#FF9900]">
                      {item.year}
                    </span>
                    <span className="p-1 rounded bg-slate-800 border border-slate-700/80">
                      {getMilestoneIcon(item.category)}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-white line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="text-[11px] text-slate-400 truncate mt-0.5">
                    {item.organization}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Milestone Detail Spotlight */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#121924] to-[#0A0E17] border border-[#FF9900]/30 shadow-xl glow-card">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-800/80 pb-6 mb-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF9900]">
                <span>{activeMilestone.year}</span>
                <span aria-hidden="true">·</span>
                <span>{activeMilestone.category}</span>
                {activeMilestone.location && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>{activeMilestone.location}</span>
                  </>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {activeMilestone.title}
              </h3>
              <div className="text-sm text-slate-300 font-medium">
                {activeMilestone.organization}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#FF9900]/15 text-[#FF9900] text-xs font-semibold border border-[#FF9900]/30">
                Verified Builder Milestone
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Milestone Overview & Context
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeMilestone.description}
              </p>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                Key Highlights & Impact
              </h4>
              <div className="space-y-2">
                {activeMilestone.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#FF9900] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
