import React, { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, Clock, CheckCircle2, X, Sparkles } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF9900]">
            <span>04</span>
            <span aria-hidden="true">/</span>
            <span>REAL BUILDER PORTFOLIO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            Real software, concepts, and community builder initiatives. Strictly grounded in verified work without fabricated metrics or fake repos.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-gradient-to-b from-[#131A25] to-[#0D121B] border border-slate-800 hover:border-[#FF9900]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg"
            >
              <div>
                {/* Visual Banner if present */}
                {project.image ? (
                  <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-full bg-slate-950/80 backdrop-blur-md text-[#FF9900] border border-[#FF9900]/30">
                        {project.status}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 pb-0 flex items-center justify-between">
                    <span className="text-xs font-mono text-[#FF9900] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                      {project.status}
                    </span>
                  </div>
                )}

                <div className="p-6">
                  {project.image && (
                    <div className="text-xs font-mono text-[#FF9900] uppercase tracking-wider mb-1">
                      {project.category}
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-white group-hover:text-[#FF9900] transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Project details coming soon callout if not fully public */}
                  {!project.detailsAvailable && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400 mb-4">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>Project details coming soon</span>
                    </div>
                  )}

                  {/* Technologies tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>Read Architecture & Overview</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF9900]" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      title="View GitHub Repository"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      title="View Live Site"
                      aria-label={`${project.title} Live`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl bg-[#0E141E] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-[#FF9900] uppercase">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Full Project Overview
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedProject.fullDescription}
              </p>

              {!selectedProject.detailsAvailable && (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center gap-2">
                  <Clock className="w-4 h-4 shrink-0" />
                  <span>
                    Additional documentation and source code are being finalized for publication.
                  </span>
                </div>
              )}

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <div className="text-xs text-slate-400">
                Status: <span className="font-semibold text-slate-200">{selectedProject.status}</span>
              </div>
              <div className="flex items-center gap-2">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-medium flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Profile</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 bg-[#FF9900] text-slate-950 rounded-lg text-xs font-bold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
