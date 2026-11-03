import React, { useState } from 'react';
import { Cloud, Brain, Code2, Database, Sparkles, Filter } from 'lucide-react';
import { SUPERPOWER_SKILLS, SuperpowerSkill } from '../data/portfolioData';

export const TechSuperpowers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Cloud', 'AI / ML', 'Development', 'Data'];

  const filteredSkills = selectedCategory === 'All'
    ? SUPERPOWER_SKILLS
    : SUPERPOWER_SKILLS.filter(s => s.category === selectedCategory);

  const getStatusBadge = (status: SuperpowerSkill['status']) => {
    switch (status) {
      case 'Building':
        return (
          <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-[#FF9900]/15 text-[#FF9900] border border-[#FF9900]/30">
            Building
          </span>
        );
      case 'Working With':
        return (
          <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/25">
            Working With
          </span>
        );
      case 'Learning':
        return (
          <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
            Learning
          </span>
        );
      case 'Exploring':
        return (
          <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Exploring
          </span>
        );
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cloud': return <Cloud className="w-4 h-4 text-[#FF9900]" />;
      case 'AI / ML': return <Brain className="w-4 h-4 text-[#FF9900]" />;
      case 'Development': return <Code2 className="w-4 h-4 text-[#FF9900]" />;
      case 'Data': return <Database className="w-4 h-4 text-[#FF9900]" />;
      default: return <Sparkles className="w-4 h-4 text-[#FF9900]" />;
    }
  };

  return (
    <section id="superpowers" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF9900]">
              <span>02</span>
              <span aria-hidden="true">/</span>
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Tech Superpowers
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Grounded, practical technical proficiencies categorized by domain and active development focus. No arbitrary fake percentages.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#FF9900] text-slate-950 font-bold shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-[#FF9900]/40 hover:bg-slate-900 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-slate-800 border border-slate-700/60 text-[#FF9900] group-hover:border-[#FF9900]/40 transition-colors">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#FF9900] transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  <div>{getStatusBadge(skill.status)}</div>
                </div>

                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Status context strip */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                <span>Builder Workflow</span>
                <span className="font-mono text-slate-400">AWS × AI Ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
