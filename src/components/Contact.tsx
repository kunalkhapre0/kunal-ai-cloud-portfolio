import React, { useState } from 'react';
import { Github, Linkedin, ExternalLink, Code2, Database, Copy, Check, MessageSquare, Sparkles } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyProfile = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      handle: '@kunalkhapre0',
      url: PROFILE.links.github,
      icon: <Github className="w-5 h-5" />,
      description: 'Repositories, projects & open-source code'
    },
    {
      name: 'LinkedIn',
      handle: 'Kunal Khapre',
      url: 'https://linkedin.com',
      icon: <Linkedin className="w-5 h-5 text-blue-400" />,
      description: 'Professional networking & AWS updates'
    },
    {
      name: 'Kaggle',
      handle: '@kunalkhapre02',
      url: PROFILE.links.kaggle,
      icon: <Database className="w-5 h-5 text-sky-400" />,
      description: 'Data science & machine learning work'
    },
    {
      name: 'LeetCode',
      handle: '@kunal_khapre',
      url: PROFILE.links.leetcode,
      icon: <Code2 className="w-5 h-5 text-amber-400" />,
      description: 'Data structures & algorithm problem-solving'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 bg-[#070A0F] relative">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9900]/15 text-[#FF9900] text-xs font-mono font-semibold border border-[#FF9900]/30">
            <Sparkles className="w-3.5 h-3.5" />
            CONNECT & COLLABORATE
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Let’s Build Something Useful.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            I’m always interested in learning, building and connecting with people working on AI, cloud and emerging technologies.
          </p>
        </div>

        {/* Verified Social Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#FF9900]/50 hover:bg-[#111722] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700/80 group-hover:border-[#FF9900]/40 transition-colors">
                    {item.icon}
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-[#FF9900] transition-colors" />
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#FF9900] transition-colors">
                  {item.name}
                </h3>
                <div className="text-xs font-mono text-[#FF9900] mt-0.5">
                  {item.handle}
                </div>
              </div>

              <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                {item.description}
              </p>
            </a>
          ))}
        </div>

        {/* Quick Share / Connect Bar */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={handleCopyProfile}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white font-medium transition-colors flex items-center gap-2 cursor-pointer"
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#FF9900]" />}
            <span>{copiedLink ? 'Portfolio Link Copied!' : 'Copy Portfolio Link'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
