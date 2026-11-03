import React from 'react';
import { Award, ShieldCheck, Users, Brain, Code, Briefcase, Sparkles } from 'lucide-react';
import { ACHIEVEMENTS, AchievementItem } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (type: AchievementItem['type']) => {
    switch (type) {
      case 'AWS Certification':
        return <ShieldCheck className="w-5 h-5 text-[#FF9900]" />;
      case 'Community Leadership':
        return <Users className="w-5 h-5 text-[#FF9900]" />;
      case 'Academic Honors':
        return <Award className="w-5 h-5 text-[#FF9900]" />;
      case 'Academic Specialization':
        return <Brain className="w-5 h-5 text-[#FF9900]" />;
      case 'Hackathon':
        return <Code className="w-5 h-5 text-[#FF9900]" />;
      case 'Industry Internship':
        return <Briefcase className="w-5 h-5 text-[#FF9900]" />;
    }
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-[#080B10]/40 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF9900]">
            <span>05</span>
            <span aria-hidden="true">/</span>
            <span>CREDENTIALS & RECOGNITION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Honors & Achievements
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            Industry cloud credentials, university awards, competitive hackathon experience, and applied machine learning internship milestones.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#111722] to-[#0B0F17] border border-slate-800 hover:border-[#FF9900]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700/80 group-hover:border-[#FF9900]/40 transition-colors">
                    {getAchievementIcon(item.type)}
                  </div>
                  <span className="text-xs font-mono text-[#FF9900] bg-[#FF9900]/10 px-2.5 py-1 rounded-full border border-[#FF9900]/25">
                    {item.dateOrPeriod}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#FF9900] transition-colors mb-1">
                  {item.title}
                </h3>

                <div className="text-xs font-medium text-slate-400 mb-3">
                  {item.issuer}
                </div>

                <p className="text-xs text-slate-300/90 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>{item.type}</span>
                <span className="text-slate-400">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
