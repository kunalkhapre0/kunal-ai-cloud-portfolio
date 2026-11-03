import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  Cpu, 
  Cloud, 
  Brain, 
  Bot, 
  Zap, 
  Wrench, 
  GraduationCap, 
  Layers, 
  ArrowRight,
  Terminal,
  Activity,
  ShieldCheck,
  Share2
} from 'lucide-react';
import { SCANNER_SKILL_SIGNALS, SUPERPOWER_EXPLANATION_CARDS, PROFILE } from '../data/portfolioData';

interface SuperpowerScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuperpowerScannerModal: React.FC<SuperpowerScannerModalProps> = ({ isOpen, onClose }) => {
  const [phase, setPhase] = useState<'scanning' | 'detected' | 'explore'>('scanning');
  const [progress, setProgress] = useState(0);
  const [activeSignalIndex, setActiveSignalIndex] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Reset or run scanner when opened
  useEffect(() => {
    if (!isOpen) return;

    // Reset state
    setPhase('scanning');
    setProgress(0);
    setActiveSignalIndex(0);
    setLogs([
      "Initializing AWS Cloud × AI DNA Sequence...",
      "Connecting to SAGE University Student Builder Telemetry...",
      "Analyzing repositories, ML models & cloud certifications..."
    ]);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase('detected');
          return 100;
        }

        const next = prev + 2;
        // Signal switching based on progress
        const signalIdx = Math.min(
          Math.floor((next / 100) * SCANNER_SKILL_SIGNALS.length),
          SCANNER_SKILL_SIGNALS.length - 1
        );
        setActiveSignalIndex(signalIdx);

        if (next === 20) {
          setLogs(l => [...l, "Telemetry: AWS Certified AI Practitioner credentials verified"]);
        } else if (next === 46) {
          setLogs(l => [...l, "Telemetry: Machine Learning internship at Auspify identified"]);
        } else if (next === 70) {
          setLogs(l => [...l, "Telemetry: AWS Student Builder Group Leadership vector mapped"]);
        } else if (next === 90) {
          setLogs(l => [...l, "Telemetry: Generative AI & Career Roadmap prototypes decoded"]);
        }

        return next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [isOpen]);

  // Keyboard accessibility: ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleRestartScan = () => {
    setPhase('scanning');
    setProgress(0);
    setActiveSignalIndex(0);
    setLogs(["Re-calibrating Tech DNA Scanner..."]);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase('detected');
          return 100;
        }
        const next = prev + 3;
        const signalIdx = Math.min(
          Math.floor((next / 100) * SCANNER_SKILL_SIGNALS.length),
          SCANNER_SKILL_SIGNALS.length - 1
        );
        setActiveSignalIndex(signalIdx);
        return next;
      });
    }, 40);
  };

  const handleShare = () => {
    const text = `Kunal Khapre's Tech Superpower: "${PROFILE.superpowerStatement}" – AWS Certified AI Practitioner & Student Builder Group Leader.`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSignalIcon = (iconName: string) => {
    switch (iconName) {
      case 'cloud': return <Cloud className="w-4 h-4 text-[#FF9900]" />;
      case 'brain': return <Brain className="w-4 h-4 text-[#FF9900]" />;
      case 'bot': return <Bot className="w-4 h-4 text-[#FF9900]" />;
      case 'zap': return <Zap className="w-4 h-4 text-[#FF9900]" />;
      case 'wrench': return <Wrench className="w-4 h-4 text-[#FF9900]" />;
      case 'graduation-cap': return <GraduationCap className="w-4 h-4 text-[#FF9900]" />;
      default: return <Layers className="w-4 h-4 text-[#FF9900]" />;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="scanner-title"
    >
      <div 
        ref={modalRef}
        className="relative w-full max-w-4xl my-auto bg-[#0E131B] border border-[#FF9900]/30 rounded-2xl shadow-2xl overflow-hidden text-slate-100 glow-saffron transition-all"
      >
        {/* Top Command Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#141B26] border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#FF9900] shadow-[0_0_8px_#FF9900]" />
            <span className="text-xs font-mono font-semibold text-slate-300 tracking-wider">
              AWS COMMAND CENTER · TECH SUPERPOWER SCANNER
            </span>
          </div>

          <div className="flex items-center gap-2">
            {phase !== 'scanning' && (
              <button
                onClick={handleRestartScan}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors"
                title="Restart scan"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#FF9900]" />
                <span className="hidden sm:inline">Re-scan</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close Superpower Scanner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {/* Phase 1 & 2: SCANNING PROGRESS */}
          {phase === 'scanning' && (
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Radar scanner visual */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[#FF9900]/20 animate-ping opacity-30" />
                <div className="absolute inset-2 rounded-full border border-[#FF9900]/40" />
                <div className="absolute inset-6 rounded-full border border-dashed border-[#FF9900]/60 animate-spin" style={{ animationDuration: '8s' }} />
                <div className="relative z-10 flex flex-col items-center">
                  <Cpu className="w-8 h-8 sm:w-10 sm:h-10 text-[#FF9900] animate-pulse" />
                  <span className="text-lg sm:text-2xl font-mono font-bold text-white tabular-nums mt-1">
                    {progress}%
                  </span>
                </div>
              </div>

              <div>
                <h2 id="scanner-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Scanning Kunal’s Tech DNA...
                </h2>
                <p className="text-sm text-slate-400 mt-1 max-w-md">
                  Analyzing AWS cloud foundations, machine learning pipelines, and academic innovation metrics.
                </p>
              </div>

              {/* Progress bar */}
              <div className="w-full max-w-lg bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                <div 
                  className="h-full bg-gradient-to-r from-[#FF9900] to-[#FFB340] transition-all duration-100 ease-out shadow-[0_0_12px_#FF9900]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Detected Skill Signals List */}
              <div className="w-full max-w-xl grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                {SCANNER_SKILL_SIGNALS.map((signal, idx) => {
                  const isDetected = idx <= activeSignalIndex;
                  return (
                    <div
                      key={signal.name}
                      className={`flex items-center gap-2 p-2.5 rounded-lg border text-left transition-all ${
                        isDetected 
                          ? 'border-[#FF9900]/40 bg-[#FF9900]/10 text-white' 
                          : 'border-slate-800/80 bg-slate-900/40 text-slate-500'
                      }`}
                    >
                      {getSignalIcon(signal.icon)}
                      <div className="truncate">
                        <div className="text-xs font-semibold truncate">{signal.name}</div>
                        <div className="text-[10px] text-slate-400 truncate">
                          {isDetected ? 'Signal Verified' : 'Searching...'}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Terminal stream log */}
              <div className="w-full max-w-xl bg-slate-950/80 rounded-lg p-3 border border-slate-800/80 text-left font-mono text-[11px] text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5 text-slate-500 mb-1 border-b border-slate-800/60 pb-1">
                  <Terminal className="w-3 h-3 text-[#FF9900]" />
                  <span>Scanner Telemetry Feed</span>
                </div>
                {logs.slice(-3).map((log, i) => (
                  <div key={i} className="truncate">
                    <span className="text-[#FF9900] mr-1.5">&gt;</span>
                    {log}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Phase 3 & 4: RESULT DETECTED & REVEAL */}
          {phase === 'detected' && (
            <div className="space-y-8 animate-in fade-in zoom-in-95 duration-300">
              {/* Superpower Detected Header */}
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF9900]/15 border border-[#FF9900]/40 rounded-full text-xs font-mono font-semibold text-[#FF9900]">
                  <Sparkles className="w-3.5 h-3.5" />
                  ANALYSIS COMPLETE · DNA SIGNATURE MATCH
                </div>

                <h2 id="scanner-title" className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                  SUPERPOWER DETECTED:
                  <br />
                  <span className="bg-gradient-to-r from-[#FF9900] via-[#FFB340] to-amber-200 bg-clip-text text-transparent">
                    BUILDING WITH AI + CLOUD
                  </span>
                </h2>

                <div className="max-w-2xl mx-auto p-5 rounded-xl bg-gradient-to-b from-[#17212F] to-[#0E1520] border border-[#FF9900]/30 glow-saffron-sm flex flex-col sm:flex-row items-center gap-5 text-left">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#FF9900] shadow-[0_0_15px_rgba(255,153,0,0.3)] shrink-0 bg-slate-900">
                    <img
                      src={PROFILE.photoUrl}
                      alt={PROFILE.name}
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-[#FF9900] text-slate-950 font-mono text-[9px] font-bold text-center py-0.5">
                      MATCH 100%
                    </div>
                  </div>

                  <div className="flex-1 text-center sm:text-left">
                    <p className="text-base sm:text-lg font-medium text-slate-100 italic leading-relaxed">
                      “{PROFILE.superpowerStatement}”
                    </p>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 mt-3 text-xs text-slate-400">
                      <span className="text-[#FF9900] font-semibold">{PROFILE.name}</span>
                      <span>·</span>
                      <span>AWS Certified AI Practitioner</span>
                      <span>·</span>
                      <span>Indore, India</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Competency Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SCANNER_SKILL_SIGNALS.map((signal) => (
                  <div
                    key={signal.name}
                    className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 hover:border-[#FF9900]/40 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-[#FF9900]/10 border border-[#FF9900]/20 shrink-0">
                      {getSignalIcon(signal.icon)}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-white flex items-center gap-1">
                        {signal.name}
                        <CheckCircle2 className="w-3 h-3 text-[#FF9900]" />
                      </div>
                      <div className="text-[11px] text-slate-400 truncate mt-0.5">
                        {signal.level}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => setPhase('explore')}
                  className="w-full sm:w-auto px-6 py-3 bg-[#FF9900] hover:bg-[#FF8C00] text-slate-950 font-bold text-sm rounded-xl shadow-lg shadow-[#FF9900]/20 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Explore Why</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <button
                  onClick={handleShare}
                  className="w-full sm:w-auto px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Share2 className="w-4 h-4 text-[#FF9900]" />
                  <span>{copied ? 'Copied to Clipboard!' : 'Share Superpower'}</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3 text-slate-400 hover:text-white text-sm font-medium transition-colors"
                >
                  Close & Explore Site
                </button>
              </div>
            </div>
          )}

          {/* Phase 5: EXPLORE WHY DETAILED BREAKDOWN */}
          {phase === 'explore' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-[#FF9900]" />
                    The 6 Pillars of My Tech Superpower
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    How AI Engineering, AWS cloud architecture, and a builder mindset come together.
                  </p>
                </div>

                <button
                  onClick={() => setPhase('detected')}
                  className="text-xs font-medium text-[#FF9900] hover:underline self-start sm:self-auto flex items-center gap-1"
                >
                  ← Back to result
                </button>
              </div>

              {/* 6 Explanation Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {SUPERPOWER_EXPLANATION_CARDS.map((card) => (
                  <div
                    key={card.title}
                    className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-[#FF9900]/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="p-2 rounded-lg bg-[#FF9900]/10 border border-[#FF9900]/25 text-[#FF9900]">
                          {getSignalIcon(card.icon)}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">{card.title}</h4>
                          <span className="text-[11px] text-[#FF9900] font-mono">{card.tagline}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Navigation inside modal */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800">
                <div className="text-xs text-slate-400">
                  Ready to see these superpowers in action? Browse my real projects and AWS journey.
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={handleRestartScan}
                    className="flex-1 sm:flex-initial px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-[#FF9900]" />
                    Scan Again
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 sm:flex-initial px-5 py-2 text-xs font-bold bg-[#FF9900] hover:bg-[#FF8C00] text-slate-950 rounded-lg transition-colors"
                  >
                    Done & View Portfolio
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
