import React, { useState } from 'react';
import { Cloud, GitBranch, ArrowDown, Copy, Check, Server, Globe, Shield, Terminal, FileCode2 } from 'lucide-react';
import { AMPLIFY_CONFIG_EXAMPLE } from '../data/portfolioData';

export const BuiltOnAWS: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(AMPLIFY_CONFIG_EXAMPLE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const architectureSteps = [
    {
      step: "01",
      title: "GitHub Repository",
      role: "Version Control & Push Trigger",
      desc: "Source code maintained on GitHub. Every git push to main branch triggers the automated AWS Amplify build pipeline."
    },
    {
      step: "02",
      title: "AWS Amplify Hosting",
      role: "Primary Hosting & CI/CD [USED]",
      desc: "Continuously deploys the Vite + React single-page app, installs dependencies via npm ci, and outputs static bundle artifacts."
    },
    {
      step: "03",
      title: "Amazon S3 & CloudFront",
      role: "Underlying AWS Infrastructure",
      desc: "Amplify provisions managed S3 bucket storage for build artifacts and routes traffic through Amazon CloudFront edge locations."
    },
    {
      step: "04",
      title: "Global Visitors",
      role: "End-User Edge Experience",
      desc: "Delivered over HTTPS with sub-100ms global latency, automatic SSL certificate provisioning, and HTTP/2 compression."
    }
  ];

  return (
    <section id="built-on-aws" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF9900]">
            <span>06</span>
            <span aria-hidden="true">/</span>
            <span>AWS IMPLEMENTATION & DEPLOYMENT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Built on AWS
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            Technical breakdown of how this portfolio is engineered for zero-maintenance, automated continuous deployment using AWS Amplify Hosting and Amazon CloudFront.
          </p>
        </div>

        {/* Architecture Visualization Flow */}
        <div className="mb-12 rounded-2xl bg-gradient-to-b from-[#131A26] to-[#0A0E16] border border-slate-800 p-6 sm:p-8 shadow-xl glow-card">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Cloud className="w-5 h-5 text-[#FF9900]" />
                AWS Production Deployment Pipeline
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Accurate technical differentiation between active host and underlying managed cloud infrastructure.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-[#FF9900]/15 text-[#FF9900] border border-[#FF9900]/30 font-semibold">
                AWS Amplify Ready
              </span>
            </div>
          </div>

          {/* Isometric Pipeline Asset */}
          <div className="mb-8 rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
            <img
              src="/src/assets/images/aws_amplify_pipeline_concept_1793709173827.jpg"
              alt="AWS Amplify Continuous Deployment Architecture Diagram"
              className="w-full h-auto max-h-[360px] object-cover mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* 4-Step Technical Flow */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {architectureSteps.map((step, idx) => (
              <div
                key={step.step}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 relative"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#FF9900] font-bold">
                    STEP {step.step}
                  </span>
                  {idx < 3 && (
                    <span className="hidden md:inline text-slate-600 font-mono text-sm">→</span>
                  )}
                </div>

                <h4 className="text-sm font-bold text-white mb-1">
                  {step.title}
                </h4>

                <div className="text-[11px] font-mono text-slate-400 mb-2">
                  {step.role}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Distinction & Amplify.yml Specification */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Cloud Service Distinction */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#FF9900]" />
              Architectural Transparency
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              In accordance with AWS hackathon judging criteria, here is the exact separation of responsibilities:
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">AWS Amplify Hosting</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    USED DIRECTLY
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Primary hosting platform configured to auto-build this repository on every commit, managing environment variables and redirect rules.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Amazon CloudFront</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-blue-400 border border-blue-500/30">
                    MANAGED ARCHITECTURE
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Part of AWS Amplify's global content delivery layer, caching static assets at edge locations closest to judges and recruiters.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Amazon S3</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    MANAGED STORAGE
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Static storage bucket backing the Amplify distribution containing bundled JavaScript, CSS, and optimized media assets.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Amplify build specification preview */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-xl">
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <FileCode2 className="w-4 h-4 text-[#FF9900]" />
                  <span>amplify.yml (Build Specification)</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md transition-colors"
                  aria-label="Copy Amplify configuration"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#FF9900]" />}
                  <span>{copied ? 'Copied' : 'Copy Spec'}</span>
                </button>
              </div>

              <div className="p-4 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed">
                <pre>
                  <code>{AMPLIFY_CONFIG_EXAMPLE}</code>
                </pre>
              </div>

              <div className="px-4 py-2.5 bg-slate-900/60 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Production Build Target: <code>dist/</code></span>
                <span className="text-[#FF9900] font-mono">Vite + React SPA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
