import React from 'react';
import { Cloud, ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-[#06080C] py-12 px-4 sm:px-6 lg:px-8 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="text-center md:text-left space-y-1">
          <div className="flex items-center justify-center md:justify-start gap-2 text-white font-bold text-base">
            <Cloud className="w-4 h-4 text-[#FF9900]" />
            <span>Kunal Khapre</span>
            <span className="text-slate-500 font-normal">·</span>
            <span className="text-[#FF9900] font-mono text-xs font-normal">AI × Cloud Builder</span>
          </div>
          <div className="text-xs text-slate-400">
            AWS Student Builder Group Leader · SAGE University Indore
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 font-medium text-slate-300">
          <a
            href={PROFILE.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#FF9900] transition-colors"
          >
            GitHub
          </a>
          <a
            href={PROFILE.links.kaggle}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#FF9900] transition-colors"
          >
            Kaggle
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#FF9900] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE.links.leetcode}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#FF9900] transition-colors"
          >
            LeetCode
          </a>
        </div>

        {/* Back to top & copyright */}
        <div className="flex items-center gap-4">
          <span>© 2026 Kunal Khapre</span>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
